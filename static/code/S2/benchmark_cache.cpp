// benchmark_cache.cpp
// Compile et compare les performances selon le type d'organisation mémoire.
//
// Compilation :
//   g++ -std=c++17 -O0 -o bench benchmark_cache.cpp
//   g++ -std=c++17 -O3 -o bench_o3 benchmark_cache.cpp
//
// Exécution :
//   ./bench      (sans optimisation)
//   ./bench_o3   (avec optimisation -O3)
//
// Nécessite : ScopedTimer.hpp (dans le même dossier)

#include <vector>
#include <list>
#include <array>
#include <map>
#include <numeric>
#include <random>
#include <iostream>
#include <cstdint>
#include <iomanip>
#include <locale>
#ifdef _WIN32
#include <windows.h>
#endif
#include "ScopedTimer.hpp"

// Empêche le compilateur d'éliminer la variable (dead code elimination).
// Utilise l'asm inline GCC/Clang pour créer une dépendance artificielle.
// Sur MSVC (pas d'asm inline x64), utilise volatile comme fallback.
//
// Sans ça, le compilateur à -O3 peut supprimer des boucles dont le
// résultat n'est jamais utilisé → le benchmark mesure 0ns (inutile).
#ifdef _MSC_VER
template <class Tp>
inline void DoNotOptimize(Tp& value) {
    volatile Tp sink {value};
    (void)sink;
}
#else
template <class Tp>
inline void DoNotOptimize(Tp const& value) {
    asm volatile("" : : "r,m"(value) : "memory");
}
#endif

// Quand le code est compilé avec des optimisations (-O1, -O2, -O3),
// on multiplie le nombre d'itérations pour obtenir des mesures plus stables.
#if defined(__OPTIMIZE__)
constexpr int OPT_FACTOR {3};
#else
constexpr int OPT_FACTOR {1};
#endif

constexpr int ITERS {3 * OPT_FACTOR};

// Affiche le gain de performance entre deux mesures.
// Détecte automatiquement lequel des deux est le plus rapide.
void print_efficiency(double time_a, double time_b,
                      std::string const& label_a, std::string const& label_b) {
    if (time_a > time_b) {
        double const gain {((time_a - time_b) / time_a) * 100.0};
        std::cout << "  " << label_b << " est "
                  << std::fixed << std::setprecision(1) << gain
                  << "% plus rapide que " << label_a << "\n";
    } else {
        double const gain {((time_b - time_a) / time_b) * 100.0};
        std::cout << "  " << label_a << " est "
                  << std::fixed << std::setprecision(1) << gain
                  << "% plus rapide que " << label_b << "\n";
    }
}

// ============================================================
// Section 1 : AoS vs SoA — itération partielle
// ============================================================

// AoS : toutes les données d'une particule sont groupées
//   sizeof == 56 octets — une ligne de cache (64o) contient ~1.1 particule.
//   lifetime est placé à la fin pour accentuer l'effet scattered access.
struct ParticuleAoS {
    float x {}, y {}, z {};       // position
    float vx {}, vy {}, vz {};    // vitesse
    float r {}, g {}, b {};       // couleur
    float mass {};                // masse
    float rotation {};            // angle de rotation
    float health {};              // énergie / santé
    uint32_t flags {};            // flags (actif, visible, etc.)
    float lifetime {};            // durée de vie restante — loin de x/vx en mémoire
};

// SoA : chaque attribut est dans un tableau séparé
struct ParticulesSoA {
    std::vector<float> x {}, y {}, z {};        // position
    std::vector<float> vx {}, vy {}, vz {};     // vitesse
    std::vector<float> r {}, g {}, b {};        // couleur
    std::vector<float> mass {}, rotation {}, health {}, lifetime {};
    std::vector<uint32_t> flags {};

    size_t taille() const { return x.size(); }
};

void benchmark_AoS_vs_SoA() {
    constexpr size_t N {5'000'000};
    constexpr float dt {0.016f};

    std::cout << "  sizeof(ParticuleAoS) = " << sizeof(ParticuleAoS) << " octets\n";
    std::cout << "  (ligne de cache = 64o, soit ~" << std::fixed << std::setprecision(1)
              << 64.0 / static_cast<double>(sizeof(ParticuleAoS)) << " particule(s) par cache line)\n";

    // Remplir les données AoS
    std::vector<ParticuleAoS> particules_aos(N);
    for (size_t i {0}; i < N; ++i) {
        particules_aos[i] = {1.0f, 2.0f, 3.0f, 0.1f, 0.2f, 0.3f, 1.0f, 0.0f, 0.0f,
                             1.0f, 0.0f, 100.0f, 0xFFFFFFFFu, 10.0f};
    }

    // Remplir les données SoA
    ParticulesSoA particules_soa;
    particules_soa.x.resize(N, 1.0f);
    particules_soa.y.resize(N, 2.0f);
    particules_soa.z.resize(N, 3.0f);
    particules_soa.vx.resize(N, 0.1f);
    particules_soa.vy.resize(N, 0.2f);
    particules_soa.vz.resize(N, 0.3f);
    particules_soa.r.resize(N, 1.0f);
    particules_soa.g.resize(N, 0.0f);
    particules_soa.b.resize(N, 0.0f);
    particules_soa.mass.resize(N, 1.0f);
    particules_soa.rotation.resize(N, 0.0f);
    particules_soa.health.resize(N, 100.0f);
    particules_soa.flags.resize(N, 0xFFFFFFFFu);
    particules_soa.lifetime.resize(N, 10.0f);

    // --- Test 1 : Accès partiel (x seul) ---
    // SoA gagne car AoS gaspille le cache sur y, z, r, g, b, mass, rotation, health, flags
    double time_aos_x {};
    {
        ScopedTimer timer {"[AoS] Mise a jour x seul"};
        for (auto& p : particules_aos) {
            p.x += p.vx * dt;
        }
        time_aos_x = timer.elapsed();
        DoNotOptimize(particules_aos);
    }

    double time_soa_x {};
    {
        ScopedTimer timer {"[SoA] Mise a jour x seul"};
        for (size_t i {0}; i < particules_soa.taille(); ++i) {
            particules_soa.x[i] += particules_soa.vx[i] * dt;
        }
        time_soa_x = timer.elapsed();
        DoNotOptimize(particules_soa);
    }

    print_efficiency(time_aos_x, time_soa_x, "AoS", "SoA");
    std::cout << "  (accès partiel : seul x est mis à jour)\n";

    // --- Test 2 : Accès complet (x, y, z) — même nombre de boucles ---
    // AoS et SoA font le même travail en 1 seule boucle : seule l'organisation
    // mémoire diffère. En SoA, on regroupe x, y et z dans une même boucle car
    // ce sont des données liées (la position).
    double time_aos_full {};
    {
        ScopedTimer timer {"[AoS] Mise a jour position + vitesse (1 boucle)"};
        for (auto& p : particules_aos) {
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.z += p.vz * dt;
        }
        time_aos_full = timer.elapsed();
        DoNotOptimize(particules_aos);
    }

    double time_soa_full {};
    {
        ScopedTimer timer {"[SoA] Mise a jour position + vitesse (1 passe)"};
        size_t const n {particules_soa.taille()};
        // La position (x, y, z) et la vitesse (vx, vy, vz) sont quasi toujours
        // utilisées ensemble : une seule boucle suffit, sur des tableaux contigus.
        for (size_t i {0}; i < n; ++i) {
            particules_soa.x[i] += particules_soa.vx[i] * dt;
            particules_soa.y[i] += particules_soa.vy[i] * dt;
            particules_soa.z[i] += particules_soa.vz[i] * dt;
        }
        time_soa_full = timer.elapsed();
        DoNotOptimize(particules_soa);
    }

    print_efficiency(time_aos_full, time_soa_full, "AoS", "SoA");
    std::cout << "  (accès complet, mêmes passes : seule l'organisation mémoire diffère)\n";

    // --- Test 3 : Scénario réel — physique + cull ---
    // Deux "cas d'usage" distincts : la position/vitesse (pour la physique) et
    // la durée de vie + flags (pour le cull, utilisé indépendamment). On compare
    // 3 approches : AoS 1 boucle (éparpillé), SoA 1 boucle (contigu), SoA 2
    // passes (une par cas d'usage, chacune cache-friendly).

    double time_aos_scattered {};
    {
        ScopedTimer timer {"[AoS] Physique + cull (1 boucle)"};
        for (auto& p : particules_aos) {
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.z += p.vz * dt;
            p.lifetime -= dt;
            if (p.lifetime <= 0.0f) {
                p.flags = 0;
            }
        }
        time_aos_scattered = timer.elapsed();
        DoNotOptimize(particules_aos);
    }

    // SoA 1 pass : même travail, même nombre de boucles, mais chaque accès
    // est un tableau contigu → le processeur ne charge que les données utiles.
    double time_soa_1pass {};
    {
        ScopedTimer timer {"[SoA] Physique + cull (1 passe)"};
        size_t const n {particules_soa.taille()};
        for (size_t i {0}; i < n; ++i) {
            particules_soa.x[i] += particules_soa.vx[i] * dt;
            particules_soa.y[i] += particules_soa.vy[i] * dt;
            particules_soa.z[i] += particules_soa.vz[i] * dt;
            particules_soa.lifetime[i] -= dt;
            if (particules_soa.lifetime[i] <= 0.0f) {
                particules_soa.flags[i] = 0;
            }
        }
        time_soa_1pass = timer.elapsed();
        DoNotOptimize(particules_soa);
    }

    // SoA 2 passes : chaque cas d'usage a sa boucle, encore plus concentré.
    double time_soa_2passes {};
    {
        ScopedTimer timer {"[SoA] Physique + cull (2 passes)"};
        size_t const n {particules_soa.taille()};
        // Passe 1 : la physique — position + vitesse, une seule boucle
        for (size_t i {0}; i < n; ++i) {
            particules_soa.x[i] += particules_soa.vx[i] * dt;
            particules_soa.y[i] += particules_soa.vy[i] * dt;
            particules_soa.z[i] += particules_soa.vz[i] * dt;
        }
        // Passe 2 : le cull — lifetime (utilisé seul) + flags, une autre boucle
        for (size_t i {0}; i < n; ++i) {
            particules_soa.lifetime[i] -= dt;
            if (particules_soa.lifetime[i] <= 0.0f) {
                particules_soa.flags[i] = 0;
            }
        }
        time_soa_2passes = timer.elapsed();
        DoNotOptimize(particules_soa);
    }

    print_efficiency(time_aos_scattered, time_soa_1pass, "AoS", "SoA (1 passe)");
    std::cout << "  (même travail, même nombre de passes : seul le layout change)\n";
    print_efficiency(time_soa_1pass, time_soa_2passes, "SoA (1 passe)", "SoA (2 passes)");
    std::cout << "  (2 passes = chaque cas d'usage concentre ses accès, encore plus cache-friendly)\n";
    std::cout << "  (à -O0 l'overhead des boucles domine : compilez avec -O3 pour voir l'avantage cache)\n";
}

// ============================================================
// Section 2 : Types plus petits (enum : int vs uint8_t)
// ============================================================

enum class AgeDefault { Enfant, Adulte, Senior };                // sizeof == 4 (int par défaut)
enum class AgeOptimized : uint8_t { Enfant, Adulte, Senior };    // sizeof == 1

void benchmark_types_plus_petits() {
    constexpr size_t N {50'000'000};

    std::vector<AgeDefault> ages_default(N, AgeDefault::Adulte);
    std::vector<AgeOptimized> ages_optimized(N, AgeOptimized::Adulte);

    std::cout << "  sizeof(AgeDefault)   = " << sizeof(AgeDefault) << " octets\n";
    std::cout << "  sizeof(AgeOptimized) = " << sizeof(AgeOptimized) << " octets\n";

    double time_default {};

    // Version int (défaut)
    {
        ScopedTimer timer {"[enum : int] Parcours 50M elements"};
        int total {0};
        for (int iter {0}; iter < ITERS; ++iter) {
            for (AgeDefault age : ages_default) {
                total += static_cast<int>(age);
            }
        }
        time_default = timer.elapsed();
        DoNotOptimize(total);
    }

    double time_optimized {};

    // Version uint8_t (optimisé)
    {
        ScopedTimer timer {"[enum : uint8_t] Parcours 50M elements"};
        int total {0};
        for (int iter {0}; iter < ITERS; ++iter) {
            for (AgeOptimized age : ages_optimized) {
                total += static_cast<int>(age);
            }
        }
        time_optimized = timer.elapsed();
        DoNotOptimize(total);
    }

    print_efficiency(time_default, time_optimized, "enum : int", "enum : uint8_t");
}

// ============================================================
// Section 3 : std::vector vs std::list
// ============================================================

void benchmark_vector_vs_list() {
    constexpr size_t N {5'000'000};

    std::vector<int> vec(N);
    std::list<int> lst(N);
    std::iota(vec.begin(), vec.end(), 0);
    std::iota(lst.begin(), lst.end(), 0);

    double time_vec {};

    // vector : mémoire contiguë, le processeur charge plusieurs éléments par cache line
    {
        ScopedTimer timer {"[vector<int>] Somme 5M elements"};
        long long sum {0};
        for (int iter {0}; iter < ITERS; ++iter) {
            for (int v : vec) {
                sum += v;
            }
        }
        time_vec = timer.elapsed();
        DoNotOptimize(sum);
    }

    double time_lst {};

    // list : chaque nœud est une allocation séparée, pointeurs éparpillés en mémoire
    {
        ScopedTimer timer {"[list<int>] Somme 5M elements"};
        long long sum {0};
        for (int iter {0}; iter < ITERS; ++iter) {
            for (int v : lst) {
                sum += v;
            }
        }
        time_lst = timer.elapsed();
        DoNotOptimize(sum);
    }

    print_efficiency(time_lst, time_vec, "std::list", "std::vector");
}

// ============================================================
// Section 4 : Struct padding (réordonnancement des membres)
// ============================================================

// Mauvais ordre : bools entre uint64_t, max padding
struct DataBadlyPadded {
    bool is_valid;       // 1 octet  + 7 padding
    uint64_t size;       // 8 octets
    bool is_compressed;  // 1 octet  + 7 padding
    uint64_t timestamp;  // 8 octets
};

// Bon ordre : types larges d'abord, bools groupés à la fin
struct DataWellPadded {
    uint64_t size;       // 8 octets
    uint64_t timestamp;  // 8 octets
    bool is_valid;       // 1 octet
    bool is_compressed;  // 1 octet + 6 padding (align to 8)
};

void benchmark_padding() {
    constexpr size_t N {50'000'000};

    std::cout << "  sizeof(DataBadlyPadded)  = " << sizeof(DataBadlyPadded) << " octets\n";
    std::cout << "  sizeof(DataWellPadded)  = " << sizeof(DataWellPadded) << " octets\n";

    std::vector<DataBadlyPadded> badlyPadded(N);
    std::vector<DataWellPadded> wellPadded(N);

    double time_bad {};

    // Mauvais ordre : plus de données à charger par cache line
    {
        ScopedTimer timer {"[Padding] Parcours 50M structures mal arrangees"};
        uint64_t total {0};
        for (const auto& m : badlyPadded) {
            total += m.size + m.timestamp + m.is_valid + m.is_compressed;
        }
        time_bad = timer.elapsed();
        DoNotOptimize(total);
    }

    double time_good {};

    // Bon ordre : moins de données par cache line = plus rapide
    {
        ScopedTimer timer {"[Padding] Parcours 50M structures bien arrangees"};
        uint64_t total {0};
        for (const auto& m : wellPadded) {
            total += m.size + m.timestamp + m.is_valid + m.is_compressed;
        }
        time_good = timer.elapsed();
        DoNotOptimize(total);
    }

    print_efficiency(time_bad, time_good, "mal arrangees", "bien arrangees");
}

// ============================================================
// Section 5 : std::array vs std::map — comptage par tranche d'âge
// Réutilise l'enum AgeOptimized défini en Section 2
// ============================================================

constexpr size_t NB_AGES {3};

void benchmark_array_vs_map() {
    constexpr size_t N {5'000'000};

    // Générer N âges aléatoires
    std::mt19937 rng {42};
    std::uniform_int_distribution<int> dist {0, NB_AGES - 1};
    std::vector<AgeOptimized> ages(N);
    for (auto& a : ages) {
        a = static_cast<AgeOptimized>(dist(rng));
    }

    // std::array : accès direct par index, mémoire contiguë
    {
        std::array<size_t, NB_AGES> compteur {};
        ScopedTimer timer {"[std::array] Comptage 5M ages"};
        for (AgeOptimized a : ages) {
            compteur[static_cast<size_t>(a)]++;
        }
        DoNotOptimize(compteur);
        std::cout << "  Enfants: " << compteur[0]
                  << ", Adultes: " << compteur[1]
                  << ", Seniors: " << compteur[2] << "\n";
    }

    // std::map : arbre ballocé dans le heap, pointeurs éparpillés
    {
        std::map<AgeOptimized, size_t> compteur;
        ScopedTimer timer {"[std::map]   Comptage 5M ages"};
        for (AgeOptimized a : ages) {
            compteur[a]++;
        }
        DoNotOptimize(compteur);
        for (auto& [age, count] : compteur) {
            std::cout << "  Age " << static_cast<int>(age) << ": " << count << "\n";
        }
    }
}

// ============================================================
// main
// ============================================================

int main() {
    // Support des caractères accentués dans le terminal
#ifdef _WIN32
    SetConsoleOutputCP(65001); // Code page UTF-8 pour Windows
#else
    std::setlocale(LC_ALL, ""); // Locale du système pour Unix/Linux/Mac
#endif

    std::cout << "=== Benchmark Cache ===\n\n";

    std::cout << "--- AoS vs SoA ---\n";
    benchmark_AoS_vs_SoA();

    std::cout << "\n--- Types plus petits ---\n";
    benchmark_types_plus_petits();

    std::cout << "\n--- vector vs list ---\n";
    benchmark_vector_vs_list();

    std::cout << "\n--- Struct padding ---\n";
    benchmark_padding();

    std::cout << "\n--- array vs map (comptage ages) ---\n";
    benchmark_array_vs_map();

    std::cout << "\n=== Termine ===\n";
    return 0;
}

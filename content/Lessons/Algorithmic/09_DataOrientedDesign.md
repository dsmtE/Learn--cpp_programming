---
title: "Organisation des données : SoA vs AoS"
tags:
    - C++
    - Architecture
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import AoSMemorySvg from './imgs/aos_memory_layout.svg';
import SoAMemorySvg from './imgs/soa_memory_layout.svg';

Nous avons vu comment déclarer des **structures** pour regrouper des données. Mais la façon dont on **organise** ces données en mémoire a un impact direct sur les **performances** de notre programme. Dans cette leçon, nous allons découvrir deux paradigmes d'organisation : **AoS** (Array of Structures) et **SoA** (Structure of Arrays) et comprendre pourquoi cela peut avoir un impact sur les performances.

## Le problème de la localité mémoire

Le processeur (CPU) est extrêmement rapide, mais la **RAM** (mémoire principale) est "relativement" lente. Quand le CPU a besoin d'une donnée, aller la chercher en RAM prend un certain temps, et pendant ce temps, le processeur attend.

Pour réduire ce temps d'attente, les processeurs modernes disposent d'une petite mémoire très rapide appelée **cache**, située directement sur le processeur. Quand le CPU lit une donnée en RAM, celle-ci est automatiquement copiée dans la cache. Les prochaines fois qu'il en aura besoin, il la trouvera directement dans la cache ce qui est beaucoup plus rapide. Les processeurs possèdent d'ailleurs plusieurs niveaux de cache (L1, L2, L3), du plus petit et rapide au plus grand et lent, formant une **hiérarchie mémoire**.

:warning: Mais il y a un piège. Le processeur ne copie pas **un seul octet** en cache, il copie un **bloc entier** de mémoire contiguë d'un coup, appelé **ligne de cache** (typiquement **64 octets**). Pourquoi ? Parce que les données proches en mémoire ont tendance à être utilisées ensemble : si on lit l'élément à l'adresse 0x1000, il est probable qu'on lira aussi 0x1004, 0x1008, etc. Plutôt que de faire un aller-retour à la RAM pour chaque octet, le processeur copie un bloc complet, au cas où il en aurait besoin juste après.

Cette notion de cache peut paraître un peu abstraite. On peut la visualiser comme un **cuisinier** qui a besoin de plusieurs ingrédients pour préparer un plat. Lorsqu'il va chercher des ingrédients dans le garde-manger, il ne prend pas un seul légume, il prend un **panier entier** (la ligne de cache). S'il trouve tous ses ingrédients dans le même panier, il cuisine rapidement. Sinon, il va devoir retourner au garde-manger chercher un autre panier, ce qui prend beaucoup plus de temps.

Cela dépend donc de la tâche à accomplir et de la façon dont les données sont **organisées en mémoire**. Si le cuisinier a besoin de plusieurs ingrédients et qu'il sont regroupé dans le même panier, il sera rapide. Si il a besoin uniquement d'un ingrédient particulier (car il est spécialisé dans une tâche/recette) et que cet ingrédient est éparpillé dans plusieurs paniers, il sera beaucoup plus lent.

Si les données dont on a besoin sont **proches en mémoire** (contiguës), le processeur les trouvera souvent déjà , on parle alorsde **cache hit**. Si elles sont **éparpillées**, il devra constamment aller chercher de nouveaux block mémoire, on parle alors de **cache miss**.

:::note
La différence de vitesse entre un accès cache et un accès RAM peut être de **100x** ou plus. C'est pourquoi l'organisation des données est un facteur de performance critique dans certains cas.
:::

## AoS — Array of Structures

Le paradigme **AoS** est le plus naturel en C++ : on stocke un **tableau de structures**, chaque structure contenant toutes les données d'un élément.

```cpp
struct Particule {
    float x {}, y {}, z {}; // position
    float vx {}, vy {}, vz {}; // vitesse
    float r {}, g {}, b {}; // couleur
};

std::vector<Particule> particules(1000);
```

### Mémoire AoS

En mémoire, les données de chaque particule sont **consécutives** :

<div style={{"textAlign": "center"}}>
    <AoSMemorySvg className="themed primaryFillRect" />
</div>

Une **ligne de cache** fait 64 octets. Chaque `Particule` fait 36 octets (9 × `float` à 4 octets). Donc une seule ligne de cache contient **à peine 1.7 particules**. Si on ne lit que `x`, on gaspille 32 octets de cache sur chaque particule!

### Quand utiliser AoS ?

- Quand on manipule souvent **toutes les données** d'un élément ensemble
- Quand on passe des structures en paramètre (une seule copie contient tout)
- Pour des structures **petites** (peu de membres)
- Pour plus de **lisibilité** et de simplicité dans le code quand on n'a pas besoin d'optimisation extrême

```cpp
// On utilise toutes les données de chaque particule
for (auto& p : particules) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.z += p.vz * dt;
    // on change la couleur en fonction de la vitesse
    p.r = std::min(1.0f, std::abs(p.vx) / 10.0f);
    p.g = std::min(1.0f, std::abs(p.vy) / 10.0f);
    p.b = std::min(1.0f, std::abs(p.vz) / 10.0f);
}
```

## SoA — Structure of Arrays

Le paradigme **SoA** inverse la hiérarchie : on a une **structure** qui contient des **tableaux séparés** pour chaque attribut.

```cpp
struct Particules {
    std::vector<float> x {}, y {}, z {}; // positions
    std::vector<float> vx {}, vy {}, vz {}; // vitesses
    std::vector<float> r {}, g {}, b {}; // couleurs

    size_t taille() const { return x.size(); }
};

Particules particules {};
particules.x.resize(1000);
particules.y.resize(1000);
particules.z.resize(1000);
// ...
```

### Mémoire SoA

En mémoire, toutes les valeurs d'un même attribut sont **contiguës** :

<div style={{"textAlign": "center"}}>
    <SoAMemorySvg className="themed primaryFillRect" />
</div>

Avec SoA, une seule ligne de cache (64 octets) contient **16 floats** = **16 particules** traitées d'un coup. Le processeur charge efficacement plusieurs positions en un seul accès mémoire.

### Quand utiliser SoA ?

- Quand on ne manipule qu'**un seul attribut** sur beaucoup d'éléments
- Pour des **boucles de traitement** intensives (simulations, particules, IA(au sens de logique de jeu), etc.)
- Quand on cherche à faire de l'**optimisation extrême** ou spécialiser le code pour un cas particulier
- Quand on veut exploiter la **parallélisation** du processeur (SIMD)

```cpp
// On ne met à jour que la coordonnée x des particules, donc on ne charge que les données nécessaires en cache
for (size_t i {0}; i < particules.taille(); ++i) {
    particules.x[i] += particules.vx[i] * dt;
}
// puis on met à jour la coordonnée y
for (size_t i {0}; i < particules.taille(); ++i) {
    particules.y[i] += particules.vy[i] * dt;
}
// ...
```

Les valeurs de `x` sont **contiguës en mémoire**, donc le processeur charge efficacement plusieurs positions d'un coup dans la cache.

## Exemple concret : filtrage de particules

Imaginons un jeu où l'on veut mettre à jour uniquement la **position** x de toutes nos particules. En **AoS**, chaque itération charge en cache des données inutiles (couleurs, vitesses) :

```cpp
// AoS — charge plus de données que nécessaire en cache
for (auto& p : particules) {
    p.x += p.vx * dt;  // Le cache contient aussi y, z, r, g, b...
}
```

En **SoA**, seules les positions sont chargées :

```cpp
// SoA — charge uniquement les données utiles
for (size_t i {0}; i < n; ++i) {
    particules.x[i] += particules.vx[i] * dt;
}
```

Pour de grandes quantités de données, la différence de performance peut être **significative** (2x à 10x plus rapide selon les cas).

:::warning SoA n'est pas toujours plus rapide
Lorsqu'on met à jour **toutes les coordonnées** (x, y, z), le code naturel en SoA nécessite **3 boucles séparées** (une par attribut), tandis qu'AoS le fait en **1 seule boucle**. Si les deux font le même travail, AoS peut être plus rapide car il ne fait qu'une seule passe sur les données.

La vraie force du SoA apparaît quand on n'accède qu'à **un sous-ensemble des attributs**. Si vous avez besoin de toutes les données, AoS reste un choix tout à fait valide. **Toujours benchmark votre cas d'usage spécifique.**
:::

## Utiliser des types plus petits

Un autre moyen d'améliorer la "cache efficiency" est de **réduire la taille des types**. Plus un type est petit, plus on peut en caser dans une ligne de cache.

Considérons un enum utilisé pour stocker l'âge de personnages :

```cpp
// Par défaut, enum = int (4 octets)
enum class Age { Enfant, Adulte, Senior };  // sizeof(Age) == 4

// Avec type sous-jacent explicite (1 octet)
enum class Age : uint8_t { Enfant, Adulte, Senior };  // sizeof(Age) == 1
```

Si on parcourt 50 000 000 d'éléments, la différence est énorme :

| Type | Taille | Mémoire totale (50M éléments) |
|------|--------|------------------------------|
| `enum class Age` (défaut) | 4 octets | 200 Mo |
| `enum class Age : uint8_t` | 1 octet | 50 Mo |

Moins de mémoire utilisée = moins de lignes de cache nécessaires = **plus rapide**. On peut tester cette différence avec un chronomètre :

```cpp
std::vector<Age> ages(50'000'000, Age::Adulte);
{
    ScopedTimer timer {"Age : int (défaut)"};
    int total {0};
    for (Age age : ages) {
        total += static_cast<int>(age);
    }
}
// Répéter avec enum class Age : uint8_t pour comparer
```

:::tip Règle générale pratique
Utilisez le type le plus petit suffisant pour vos données. `uint8_t` au lieu de `int` pour de petits entiers, `float` au lieu de `double` si la précision n'est pas critique, et spécifiez toujours le type sous-jacent de vos enums.

**Cela peut aussi se faire dans une second temps, après avoir écrit un code clair et fonctionnel. L'optimisation prématurée est souvent source de bugs.**
:::

:::info
À `-O0`, la différence sur les types peut être difficile à mesurer car le compilateur génère des instructions supplémentaires pour accéder aux octets (masquage). Compilez avec `-O3` pour voir le vrai gain : le compilateur optimise l'accès et le bénéfice du cache devient clair.
:::

### Choisir le bon conteneur : `std::array` vs `std::map`

Quand le domaine des valeurs est **petit et connu** (comme 3 tranches d'âge dans notre exemple), utiliser un conteneur lourd comme `std::map` est inutile et lent. Préférez `std::array`, c'est une mémoire contiguë, cache-friendly, avec un accès direct par index.

```cpp
#include <array>
#include <map>
#include <random>
#include <iostream>
#include "ScopedTimer.hpp"

enum class Age : uint8_t { Enfant, Adulte, Senior };
constexpr size_t NB_AGES {3};

int main() {
    constexpr size_t N {1'000'000};

    // Générer N âges aléatoires
    std::mt19937 rng {42};
    std::uniform_int_distribution<int> dist {0, NB_AGES - 1};
    std::vector<Age> ages(N);
    for (auto& a : ages) {
        a = static_cast<Age>(dist(rng));
    }

    // Méthode 1 : std::array — accès direct par index, mémoire contiguë
    std::array<size_t, NB_AGES> compteur {};
    {
        ScopedTimer timer {"[std::array] Comptage par tranche d'âge"};
        for (Age const a: ages) {
            compteur[static_cast<size_t>(a)]++;
        }
    }
    std::cout << "Enfants: " << compteur[0] << ", Adultes: " << compteur[1] << ", Seniors: " << compteur[2] << "\n";

    // Méthode 2 : std::map — arbre ballocé dans le heap, pointeurs éparpillés
    std::map<Age, size_t> compteur {};
    {
        ScopedTimer timer {"[std::map] Comptage par tranche d'âge"};
        for (Age const a: ages) {
            compteur[a]++;
        }
    }
    for (auto& [age, count] : compteur) {
        std::cout << "  Age " << static_cast<int>(age) << ": " << count << "\n";
    }
}
```

:::tip Résultat attendu
`std::array` est typiquement **2x à 5x plus rapide** que `std::map` ici. Un `std::array` fait 3 octets en mémoire contiguë, une seule ligne de cache suffit. Un `std::map` alloue un nœud d'arbre binaire pour chaque clé, avec des pointeurs éparpillés dans le heap.
:::

:::info
Règle simple : si vous connaissez le nombre de valeurs possibles à l'avance et qu'il est petit, utilisez un `std::array` indexé par un enum. Réservez `std::map` ou `std::unordered_map` pour les cas où les clés sont dynamiques ou inconnues.
:::

## Pourquoi préférons-nous `std::vector` ?

Vous avez peut-être remarqué qu'on utilise `std::vector` presque partout dans les exemples précédents. Ce n'est pas un hasard — c'est parce que `std::vector` est **cache-friendly**.

Vous pouvez revenir aux explications du fonctionnement interne de `std::vector` dans la leçon dédié [ici](/Lessons/S1/MemoryAllocation#stdvector-explications).

### Mémoire contiguë vs mémoire éparpillée

La différence fondamentale est dans la disposition mémoire :

```
std::vector<int> : [1][2][3][4][5][6][7][8]  ← contigu, le processeur charge 16 entiers par cache line
std::list<int>   : [1]→[3]→[7]→[2]→[5]→[8]  ← éparpillé dans le heap, un seul entier par allocation
```

`std::vector<T>` stocke tous ses éléments **les uns à la suite des autres** en mémoire. Quand on parcourt le vecteur, le processeur charge plusieurs éléments par ligne de cache, et le prefetching (préchargement automatique) fonctionne parfaitement.

`std::list<T>` est une liste doublement chaînée. Chaque nœud est une **allocation séparée** dans le heap, contenant la valeur + un pointeur vers le nœud suivant + un pointeur vers le nœud précédent :

```cpp
// Chaque nœud de std::list ressemble grossièrement à ça :
struct Node {
    int value;      // 4 octets
    Node* next;     // 8 octets (sur 64 bits)
    Node* prev;     // 8 octets
};  // sizeof(Node) = 24 octets (avec alignment)
```

Un nœud fait 24 octets, donc une ligne de cache de 64 octets ne contient que **~2.6 nœuds**. De plus, comme les nœuds sont éparpillés en mémoire, le processeur ne peut pas précharger efficacement les prochains éléments.

### Benchmark : `std::vector` vs `std::list`

Vous pouvez tester cette différence vous-même. Téléchargez <a target="_blank" href={ useBaseUrl("/code/S2/ScopedTimer.hpp") } download={"ScopedTimer.hpp"}>ScopedTimer.hpp</a> et le fichier <a target="_blank" href={ useBaseUrl("/code/S2/benchmark_cache.cpp") } download={"benchmark_cache.cpp"}>benchmark_cache.cpp</a>, puis compilez et exécutez :

```bash
g++ -std=c++17 -O0 -o bench benchmark_cache.cpp
./bench
```

Voici le code du benchmark pour la section `vector` vs `list` :

```cpp
constexpr size_t N {1'000'000};

std::vector<int> vec(N);
std::list<int> lst(N);
std::iota(vec.begin(), vec.end(), 0);
std::iota(lst.begin(), lst.end(), 0);

// vector : mémoire contiguë, le processeur charge plusieurs éléments par cache line
{
    ScopedTimer timer {"[vector<int>] Somme 1M elements"};
    long long sum {0};
    for (int v : vec) {
        sum += v;
    }
}

// list : chaque nœud est une allocation séparée, pointeurs éparpillés en mémoire
{
    ScopedTimer timer {"[list<int>] Somme 1M elements"};
    long long sum {0};
    for (int v : lst) {
        sum += v;
    }
}
```

:::tip Résultat attendu
`std::vector` est typiquement **5x à 10x plus rapide** que `std::list` pour un parcours séquentiel. La mémoire contiguë permet au processeur de charger 16 entiers par ligne de cache et au prefetcher de précharger les prochains éléments automatiquement.
:::

:::tip Règle pratique
Par défaut, utilisez `std::vector<T>`. Utilisez `std::list` ou `std::unordered_map` uniquement si vous avez une raison spécifique (insertion/suppression au milieu fréquente, recherche par clé, etc.) — et mesurez l'impact sur les performances.
:::

## Optimisations avancées

### Réordonner les membres pour minimiser le padding

En C++, chaque membre d'une structure doit être **aligné** en mémoire selon sa taille. Cela peut créer des **trous de padding** entre les membres :

```cpp
// Mauvais ordre : sizeof == 32 octets (avec padding)
struct Data {
    bool is_valid;       // 1 octet  + 7 octets de padding (pour aligner le uint64_t)
    uint64_t size;       // 8 octets
    bool is_compressed;  // 1 octet  + 7 octets de padding (pour aligner le uint64_t)
    uint64_t timestamp;  // 8 octets
};
```
En réordonnant les membres du plus grand au plus petit, on réduit le padding :

```cpp
// Bon ordre : sizeof == 24 octets (moins de padding)
struct Data {
    uint64_t size;       // 8 octets
    uint64_t timestamp;  // 8 octets
    bool is_valid;       // 1 octet
    bool is_compressed;  // 1 octet  + 6 octets de padding (alignement de la struct)
};
```

On passe de **32 octets à 24 octets** — une économie de 25% ! Vous pouvez vérifier avec `sizeof()` :

```cpp
std::cout << sizeof(Data) << std::endl;  // Affiche 24 (au lieu de 32)
```

### Bitfields — réduire la taille d'une struct

Les **bitfields** permettent de spécifier exactement le nombre de bits qu'un membre occupe. C'est utile quand on sait que les valeurs ont un domaine limité.

```cpp
enum class State : uint8_t {
    Active,
    Inactive,
    Error
};

// Sans bitfields : sizeof(Widget) == 3
struct Widget {
    bool is_enabled;   // 1 octet
    bool is_visible;   // 1 octet
    State state;       // 1 octet
};

// Avec bitfields : sizeof(Widget) == 1
struct Widget {
    bool is_enabled : 1;   // 1 bit
    bool is_visible : 1;   // 1 bit
    State state : 2;       // 2 bits (suffisent pour 4 valeurs : 0-3)
};
```

On passe de **3 octets à 1 octet** — c'est 3x moins de mémoire par widget. Pour des millions d'widgets, c'est significatif.

Voici comment utiliser des bitfields dans une classe avec des getters et setters :

```cpp
class Widget {
    bool is_enabled : 1 = false;
    bool is_visible : 1 = true;
    State state : 2     = State::Inactive;

public:
    // Getters — retournent la valeur du bitfield
    bool enabled() const { return is_enabled; }
    bool visible() const { return is_visible; }
    State state()  const { return state; }

    // Setters — modifient la valeur du bitfield
    void set_enabled(bool v) { is_enabled = v; }
    void set_visible(bool v) { is_visible = v; }
    void set_state(State v)  { state = v; }
};

// Utilisation
Widget w;
w.set_enabled(true);
w.set_state(State::Active);

if (w.enabled()) {
    std::cout << "Widget actif, état : " << static_cast<int>(w.state()) << std::endl;
}
```

Sous le capot, chaque getter/setter effectue une petite opération de masquage et de décalage de bits (`&`, `|`, `<<`, `>>`), mais le compilo optimise cela en une seule instruction sur les processeurs modernes.

:::warning
L'accès à un bitfield peut être légèrement plus lent qu'un accès direct à un membre classique, car le processeur doit effectuer des opérations de masquage. **Toujours benchmark** avant d'optimiser avec des bitfields.
:::

## Compilation : l'impact de l'optimisation `-O3`

Au-delà de l'organisation des données, le **compilateur** peut aussi améliorer les performances grâce aux optimisations. Avec l'option `-O3`, le compilo active notamment l'**auto-vectorisation** (SIMD) : il traite **plusieurs éléments de données en une seule instruction** au lieu d'un seul.

```cpp
// Somme d'un tableau de floats
float sum {0};
for (size_t i {0}; i < N; ++i) {
    sum += data[i];
}
```

| Niveau | Comportement |
|--------|-------------|
| `-O0` (debug) | Traite 1 float par instruction |
| `-O3` (release) | Auto-vectorise avec AVX/SSE : traite **4-8 floats par instruction** |

Mais l'auto-vectorisation ne fonctionne que si les données sont **contiguës en mémoire**. C'est encore une raison de préférer `std::vector` et le layout SoA !

Vous pouvez tester l'impact de `-O3` avec le benchmark :

```bash
# Sans optimisation
g++ -std=c++17 -O0 -o bench benchmark_cache.cpp
./bench

# Avec optimisation
g++ -std=c++17 -O3 -o bench_o3 benchmark_cache.cpp
./bench_o3
```

:::info
Les autres optimisations de `-O3` incluent :
- **Déroulage de boucles** (*loop unrolling*) : réduit le nombre d'itérations
- **Prédiction de branchement** : le compilo arrange le code pour minimiser les erreurs de prédiction
- **Allocation de registres** : les variables fréquemment utilisées restent dans les registres du CPU (encore plus rapide que la cache)
:::

:::tip
Compilez toujours avec `-O3` (ou `-O2`) pour les builds de release. Utilisez `-O0 -g` uniquement pour le debug.
:::

## Au-delà du CPU : GPU et Entity Component System

Les concepts de cache efficiency et SoA ne s'arrêtent pas au CPU. Ils se retrouvent partout où les performances sont critiques, notamment dans les **moteurs de jeux vidéo** ou applications **scientifiques** ou de manière plus générale de calcul intensif.

### GPU — parallélisation massive

Les GPU ont des milliers de coeurs qui traitent les données en parallèle. Le même principe s'applique : données contiguës = traitement efficace. Un GPU déteste les données éparpillées encore plus qu'un CPU, car il doit nourrir des milliers de coeurs simultanément.

Un *compute shader* GPU qui traite un tableau de positions est fondamentalement un SoA loop parallélisé sur des milliers de coeurs. Les frameworks de calcul GPU (CUDA, OpenCL, Vulkan compute) s'attendent à des données contiguës, c'est le SoA qui est le layout naturel du GPU.

### Entity Component System (ECS) — le SoA dans les jeux vidéo

En développement de jeux, le paradigme **ECS** pousse le SoA à l'extrême :

- **Entity** = juste un ID (un entier)
- **Component** = des données pures (Position, Velocity, Health...) stockées en **tableaux séparés**
- **System** = de la logique qui traite un sous-ensemble de composants

C'est exactement le pattern SoA : un système physique ne touche que `Position` + `Velocity`, un système de rendu que `Position` + `Mesh`. Chaque système accède à un sous-ensemble des données → cache optimal.

Ce pattern est utilisé par les moteurs modernes comme Unity DOTS et Unreal Mass pour gérer des scènes avec des centaines milliers d'entités.

## Résumé

- L'**organisation des données en mémoire** impacte directement les performances via les **lignes de cache** (~64 octets).
- **AoS** (Array of Structures) : un tableau contenant des structures complètes. Naturel et simple, idéal quand on accède à toutes les données d'un élément.
- **SoA** (Structure of Arrays) : une structure contenant des tableaux séparés pour chaque attribut. Plus complexe mais beaucoup plus performant pour le traitement par lot (*batch processing*).
- Utilisez des **types plus petits** (`uint8_t` au lieu de `int`, `float` au lieu de `double`) pour réduire la pression sur la cache.
- **Réordonnez les membres** de vos structures du plus grand au plus petit pour minimiser le padding.
- Les **bitfields** permettent de réduire drastiquement la taille d'une struct quand les valeurs ont un domaine limité.
- `std::vector<T>` est **cache-friendly** (mémoire contiguë) — préférez-le par défaut à `std::list` ou `std::unordered_map`.
- Compilez avec `-O3` pour bénéficier de l'**auto-vectorisation** (SIMD) et des autres optimisations du compilateur.
- Le **GPU** exploite le même principe que le SoA : données contiguës = traitement parallèle efficace.
- Le paradigme **ECS** (Entity Component System) applique le SoA au développement de jeux vidéo.

:::info Pour aller plus loin
- [Cache-Friendly C++ — Jonathan Müller, CppCon 2025](https://www.youtube.com/watch?v=g_X5g3xw43Q) (vidéo)
- [Slides PDF](https://github.com/CppCon/CppCon2025/blob/main/Presentations/Cache_Friendly_Cpp.pdf)
- [Fun with C++ and cache lines](https://sartech.substack.com/p/fun-with-c-and-cache-lines) (article)
:::

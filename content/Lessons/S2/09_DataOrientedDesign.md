---
title: "Organisation des données : SoA vs AoS"
tags:
    - C++
    - Architecture
---

Nous avons vu comment déclarer des **structures** pour regrouper des données. Mais la façon dont on **organise** ces données en mémoire a un impact direct sur les **performances** de notre programme. Dans cette leçon, nous allons découvrir deux paradigmes d'organisation : **AoS** (Array of Structures) et **SoA** (Structure of Arrays)  et comprendre pourquoi cela peut avoir un impact sur les performances.

## Le problème de la localité mémoire

Les processeurs modernes accèdent à la mémoire de manière **hiérarchique** : la **cache** (L1, L2, L3) est beaucoup plus rapide que la **RAM**. Lorsque le processeur lit une donnée, il charge en fait un **bloc entier** de mémoire contiguë dans la cache (ligne de cache).

Si les données dont on a besoin sont **proches en mémoire** (contiguës), le processeur les trouvera souvent déjà en cache, c'est un **cache hit**. Si elles sont **éparpillées**, il devra constamment aller chercher en RAM, c'est un **cache miss**, qui est beaucoup plus lent.

Cette notion de cache peut paraître un peu abstraite, on peut visualiser ça comme un cuisinier qui à besoin de plusieurs ingrédients pour préparer un plat. Lorsqu'il va chercher des légumes dans le garde-manger, il prend un **panier** (bloc de mémoire) et met dedans tous les légumes qu'il trouve à proximité. Une fois le panier ramené, il peut cuisiner rapidement avec les légumes qu'il a sous la main. Si tous les légumes dont il a besoin sont dans le même panier, il peut cuisiner rapidement. Sinon il va devoir aller chercher d'autres paniers dans le garde-manger, ce qui prend beaucoup plus de temps.

:::note
La différence de vitesse entre un accès cache et un accès RAM peut être de **100x** ou plus. C'est pourquoi l'organisation des données est un facteur de performance critique.
:::

## AoS — Array of Structures

Le paradigme **AoS** est le plus naturel en C++ : on stocke un **tableau de structures**, chaque structure contenant toutes les données d'un élément.

```cpp
struct Particule {
    float x, y, z;      // position
    float vx, vy, vz;   // vitesse
    float r, g, b;      // couleur
};

std::vector<Particule> particules(1000);
```

En mémoire, cela donne :

```
[x, y, z, vx, vy, vz, r, g, b] [x, y, z, vx, vy, vz, r, g, b] [x, y, z, vx, vy, vz, r, g, b] ...
     Particule 0                      Particule 1                      Particule 2
```

### Quand utiliser AoS ?

- Quand on manipule souvent **toutes les données** d'un élément ensemble
- Quand on passe des structures en paramètre (une seule copie contient tout)
- Pour des structures **petites** (peu de membres)

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
    std::vector<float> x, y, z;       // positions
    std::vector<float> vx, vy, vz;    // vitesses
    std::vector<float> r, g, b;       // couleurs

    size_t taille() const { return x.size(); }
};

Particules particules;
particules.x.resize(1000);
particules.y.resize(1000);
particules.z.resize(1000);
// ...
```

En mémoire, cela donne :

```
[x, x, x, x, x, x, x, x] [y, y, y, y, y, y, y, y] [z, z, z, z, z, z, z, z] ...
    Tableau positions            Tableau vitesses           Tableau couleurs
```

### Quand utiliser SoA ?

- Quand on ne manipule qu'**un seul attribut** sur beaucoup d'éléments
- Pour des **boucles de traitement** intensives (simulations, particules, IA)
- Quand on veut exploiter la **parallélisation** du processeur (SIMD)

```cpp
// On ne met à jour que la coordonnée x des particules, donc on ne charge que les données nécessaires en cache
for (size_t i {0}; i < particules.taille(); ++i) {
    particules.x[i] += particules.vx[i] * dt;
}
```

Les valeurs de `x` sont **contiguës en mémoire**, donc le processeur charge efficacement plusieurs positions d'un coup dans la cache.

## Comparaison

| | AoS | SoA |
|---|---|---|
| **Lisibilité** | Plus naturel (`p.x`) | Moins intuitif (`particules.x[i]`) |
| **Cache (accès complet)** | Excellent | Moins bon |
| **Cache (accès partiel)** | Mauvais | Excellent |
| **Parallélisation (SIMD)** | Difficile | Naturelle |
| **Modification de la taille** | Simple (`push_back`) | Plus complexe (synchro des tableaux) |
| **Passage en paramètre** | Simple (une struct) | Plus de params (ou une ref vers la struct SoA) |

:::tip Règle pratique
Si votre boucle de traitement accède à **tous les attributs** d'un élément → **AoS**.
Si votre boucle accède à **un seul attribut** sur beaucoup d'éléments → **SoA**.
:::

## Exemple concret : filtrage de particules

Imaginons un jeu où l'on veut mettre à jour uniquement la **position** de 10 000 particules. En **AoS**, chaque itération charge en cache des données inutiles (couleurs, vitesses) :

```cpp
// AoS —charge plus de données que nécessaire en cache
for (auto& p : particules) {
    p.x += p.vx * dt;  // Le cache contient aussi y, z, r, g, b...
}
```

En **SoA**, seules les positions sont chargées :

```cpp
// SoA —charge uniquement les données utiles
for (size_t i {0}; i < n; ++i) {
    particules.x[i] += particules.vx[i] * dt;
}
```

Pour de grandes quantités de données, la différence de performance peut être **significative** (2x à 5x plus rapide selon les cas).

## Résumé

- L'**organisation des données en mémoire** impacte directement les performances via les **cache hits/misses**.
- **AoS** (Array of Structures) : un tableau contenant des structures complètes. Naturel et simple, idéal quand on accède à toutes les données d'un élément.
- **SoA** (Structure of Arrays) : une structure contenant des tableaux séparés pour chaque attribut. Plus complexe mais beaucoup plus performant pour le traitement par lot (*batch processing*).
- Le choix entre AoS et SoA dépend du **pattern d'accès** aux données dans vos boucles de traitement.

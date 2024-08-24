---
title: TD3 - Algorithmes de tri
---

import useBaseUrl from '@docusaurus/useBaseUrl';

L'idée de ce TD est de mettre en pratique les notions vues en cours sur les algorithmes de tri et de recherche.

Tout d'abord, je vous donne une fonction qui va permettre de vérifier si un tableau est trié par ordre croissant.
```cpp
#include <vector>
#include <algorithm>
bool is_sorted(std::vector<int> const& vec) { return std::is_sorted(vec.begin(), vec.end()); }
```

Vous pouvez l'utiliser de la manière suivante:
```cpp
std::vector<int> array {1, 2, 3, 4, 5, 6, 7, 8, 9};
if (is_sorted(array)) {
    std::cout << "Le tableau est trié" << std::endl;
} else {
    std::cout << "Le tableau n'est pas trié" << std::endl;
}
```

## Exercice 1 (tri itératif)

Dans cet exercice, vous devez écrire une fonction qui prend en paramètre un tableau d'entiers (`std::vector`) et le trie par ordre croissant.

Vous avez le choix entre deux algorithmes de tri:
- [**tri à bulle**](/Lessons/S2/Sorting/#tri-à-bulles-bubble-sort)
- [**tri par sélection**](/Lessons/S2/Sorting/#tri-par-sélection-selection-sort)

Voilà les prototypes des fonctions:
```cpp
void bubble_sort(std::vector<int> & vec);
void selection_sort(std::vector<int> & vec);
```

## Exercice 2 (tri récursif)

De nouveau, vous devez écrire une fonction qui prend en paramètre un tableau d'entiers (`std::vector`) et le trie par ordre croissant.

Cette fois-ci, vous devez utiliser un algorithme de tri récursif.

Vous avez le choix entre deux algorithmes de tri:
- [**tri fusion**](/Lessons/S2/Sorting/#tri-fusion-merge-sort)
- [**tri rapide**](/Lessons/S2/Sorting/#tri-rapide-quick-sort)

Voilà les prototypes des fonctions à utiliser et implémenter:
```cpp
size_t quick_sort_partition(std::vector<float> & vec, size_t left, size_t right, size_t const pivot);
void quick_sort(std::vector<float> & vec, size_t const left, size_t const right);
void quick_sort(std::vector<float> & vec) {
    quick_sort(vec, 0, vec.size() - 1);
}

void merge_sort_merge(std::vector<float> & vec, size_t const left, size_t const middle, size_t const right);
void merge_sort(std::vector<float> & vec, size_t const left, size_t const right);
void merge_sort(std::vector<float> & vec) {
    merge_sort(vec, 0, vec.size() - 1);
}
```

Dans ces deux algorithmes, on va trier des **plages** du tableau par **récursivité**. C'est pour cela que les fonctions prennent en paramètre les indices de début et de fin de la plage à trier (`left` et `right`).
De plus, dans les deux algorithmes, on va utiliser une **fonction auxiliaire** pour séparer le tableau en deux parties (`quick_sort_partition`) ou pour fusionner deux tableaux triés (`merge_sort_merge`).


:::tip
Pour l'étape de merge du merge sort (`merge_sort_merge`), il faudra copier les valeurs dans des **vecteurs temporaires** pour stocker les deux parties du tableau à fusionner.

Il existe plusieurs façons de copier les valeurs d'un vecteur dans un autre. La plus simple est de donner à la construction du vecteur les itérateurs de début et de fin du vecteur à copier.
Cela fonctionne de la manière suivante:
```cpp
std::vector<int> vec1 {1, 2, 3, 4, 5};

// copie de vec1 dans vec2
std::vector<int> vec2(vec1.begin(), vec1.end());

// copie des éléments de vec1 dans vec3 à partir de l'élément d'indice 2
std::vector<int> vec3(vec1.begin() + 2, vec1.end());

// copie des éléments de vec1 dans vec4 à partir de l'élément d'indice 1 jusqu'à l'élément d'indice 3
std::vector<int> vec4(vec1.begin() + 1, vec1.begin() + 4);

// il est également possible de copier un vecteur dans un autre à l'aide de la fonction std::copy
std::vector<int> vec5(vec1.size());
std::copy(vec1.begin(), vec1.end(), vec5.begin());
// il faut que le vecteur de destination ait la bonne taille pour pouvoir copier les valeurs

// ou à l'aide de la méthode assign
std::vector<int> vec6;
vec6.assign(vec1.begin(), vec1.end());
```
:::

## Exercice 3 (Comparaison des algorithmes de tri)

Une fois nos algorithmes de tri implémentés, nous allons les comparer en terme de complexité temporelle.

Je vous fournis une fonction qui permet de générer un tableau d'entiers aléatoires.
```cpp
#include <vector>
#include <cstdlib>
#include <algorithm>

std::vector<int> generate_random_vector(size_t const size, int const max = 100) {
    std::vector<int> vec(size);
    std::generate(vec.begin(), vec.end(), [&max]() { return std::rand() % max;} );
    return vec;
}
```

Je vous fournis également une structure chronomètre, il suffit de  télécharger le fichier <a target="_blank" href={ useBaseUrl("/code/S2/ScopedTimer.hpp") } download={"ScopedTimer.hpp"}>ScopedTimer.hpp</a> et le copier dans le dossier de votre projet et de l'inclure dans votre fichier source:
```cpp
#include "ScopedTimer.hpp"
```
Elle fonctionne de la manière suivante:
```cpp
{
    ScopedTimer timer("nom du chronomètre");
    // code à chronométrer
}
```

Elle affichera le temps écoulé entre sa création et sa destruction(c'est à dire à la fin du bloc de code, c'est pourquoi il est déclaré dans un bloc entre accolades (**Scope**) dans l'exemple ci-dessus).

### bibliothèque standard

La **bibliothèque standard** de C++ fournit une fonction de tri `std::sort` qui permet de trier des conteneurs (incluse dans la bibliothèque `<algorithm>`)

Vous pouvez l'utiliser de la manière suivante:
```cpp
std::vector<int> array {1, 2, 3, 4, 5, 6, 7, 8, 9};
std::sort(array.begin(), array.end());
```

:::note
`begin` et `end` sont des méthodes de `std::vector` qui permettent de récupérer des **itérateurs** sur le début et la fin du conteneur.
Nous verrons les itérateurs plus tard dans le cours.
:::

Avec cette fonction, vous pouvez comparer les temps d'exécution de vos algorithmes de tri avec celui de la bibliothèque standard.

- Que constatez-vous ?
- Que pouvez-vous en dire ?


## Exercice 4 (dichotomie)

1. Écrire une fonction `search` qui prend en paramètre un tableau d'entiers (`std::vector`) trié par ordre croissant et une valeur entière et retourne l'indice de la valeur dans le tableau. Si la valeur n'est pas présente dans le tableau, la fonction retournera `-1` (on pourrait utiliser quelques chose de plus propre comme `std::optional` que l'on découvrira dans le prochain cours pour éviter de retourner `-1` pour indiquer que l'on ne trouve pas la valeur).

la fonction devra utiliser l'algorithme de recherche **dichotomique**.

:::tip
On utilisera deux indices pour définir la partie du tableau à traiter:
- `left` : indice du premier élément de la partie du tableau à traiter
- `right` : indice du dernier élément de la partie du tableau à traiter

Exemple simple avec le tableau suivant `[1, 2, 2, 3, 4, 8, 12]` (nombre d'éléments: 7) et la valeur recherchée `8`:

2. `left = 0` et `right = 6` (indice du premier et dernier élément du tableau)
    `middle = (left + right) / 2 = (0 + 6) / 2 = 3` (indice de l'élément au milieu du tableau)
    la valeur au milieu du tableau est `3` qui est inférieure à la valeur recherchée `8`, on ne garde que la partie droite du tableau.
    `left` devient `middle + 1 = 3 + 1 = 4` (indice du premier élément de la partie droite du tableau)
3. `left = 4` et `right = 6`
    `middle = (left + right) / 2 = (4 + 6) / 2 = 5`
    la valeur au milieu du tableau est `8` qui est égale à la valeur recherchée, on retourne l'indice `5` de la valeur dans le tableau.
:::

4. tester la fonction `search` avec les tableaux suivants et afficher le résultat de la recherche:
   - `[1, 2, 2, 3, 4, 8, 12]` (valeur recherchée: `8`)
   - `[1, 2, 3, 3, 6, 14, 12, 15]` (valeur recherchée: `15`)
   - `[2, 2, 3, 4, 5, 8, 12, 15, 16]` (valeur recherchée: `16`)
   - `[5, 6, 7, 8, 9, 10, 11, 12, 13]` (valeur recherchée: `6`)
   - `[1, 2, 3, 4, 5, 6, 7, 8, 9]` (valeur recherchée: `10`)

## Pour aller plus loin: Counting sort

Le [**counting sort**](/Lessons/S2/Sorting/#tri-par-dénombrement-counting-sort) est un algorithme de tri qui permet de trier un tableau d'entiers en temps linéaire (c'est à dire en $O(n)$).
Il est cependant limité par le fait qu'il ne peut trier que des **entiers** ("positifs" pour le cas le plus simple) et que la valeur **maximale** des entiers du tableau doit être connue (à calculer avant le tri ou connue en fonction du contexte).

Essaye d'implémenter cet algorithme de tri.
Voilà le prototype de la fonction:
```cpp
void counting_sort(std::vector<int> & vec, int const max);
```
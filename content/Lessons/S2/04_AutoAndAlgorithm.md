---
title: Déduction de type et bibliothèque standard
tags:
    - C++
    - STL
---

La **STL** (Standard Template Library) est une bibliothèque standard de la norme **C++** qui fournit de nombreuses fonctionnalités déjà implémentées pour faciliter le développement. Vous pouvez retrouver la documentation de la **STL** sur le site [cppreference.com](https://en.cppreference.com/w/cpp/header).

Nous avons déjà utilisé des conteneurs de la **STL** comme `std::vector` ou `std::array` mais aussi la `std::string` qui est une **classe** qui permet de manipuler des chaînes de caractères.

:::info Classes
Je n'ai pas encore abordé le terme de **classe** mais je vais clarifier ce terme car je vais l'utiliser dans la suite du cours.
Une **classe** est un type de données qui permet de regrouper des données et des fonctions qui agissent sur ces données de la même manière que les **structures**. Pour faire simple, une **classe** est une **structure**. Il y a cependant des différences entre les deux (visibilité des données, héritage, ...) mais vous découvrirez cela en deuxième année.
:::

La **STL** fournit aussi des **algorithmes** et des fonctions qui permettent de simplifier la manipulation des conteneurs.

Pour que ces fonctionnalités soient utilisables par le plus grand nombre de conteneurs possibles, la **STL** utilise le concept d'**itérateurs** qui permettent de parcourir les conteneurs de manière générique.

## Itérateurs

Les **itérateurs** sont des objets propres à la **STL** qui permettent de parcourir les conteneurs et structures de données sans se soucier de la manière dont ils sont implémentés. Cela permet d'abstraire le conteneur utilisé et de pouvoir utiliser des algorithmes de manière générique.

Les **itérateurs** sont des objets qui se comportent un peu comme des pointeurs. Ils permettent de cibler un élément dans un conteneur, de le manipuler et permettent de passer d'un élément à l'autre.

Pour un **tableau** (comme `std::array` ou `std::vector`) le passage d'un élément à l'autre se fait généralement en incrémentant un compteur mais pour d'autres conteneurs, le passage d'un élément à l'autre est plus complexe. Grâce aux **itérateurs**, nous n'avons pas à nous soucier de la manière dont le conteneur est implémenté.

:::info
Il existe plusieurs types d'itérateurs qui permettent de parcourir les conteneurs de différentes manières (parcours en lecture seule, parcours en lecture et écriture, parcours seulement dans un sens, ...). Nous n'allons pas rentrer dans les détails des différents types d'itérateurs mais sachez qu'il existe plusieurs types d'itérateurs qui permettent de parcourir les conteneurs de différentes manières.
:::

Les **itérateurs** ont des **opérateurs** et **méthodes** qui permettent de les manipuler comme avec l'opérateur `*` pour déréférencer et accéder à la valeur pointée par l'itérateur et l'opérateur `++` pour passer à l'élément suivant.

### Begin et end

Il existe principalement deux **méthodes** sur les conteneurs qui permettent de récupérer un itérateur sur le **premier élément** du conteneur et un itérateur permettant d'indiquer la **fin** du conteneur.

Voici un exemple avec un vecteur (`std::vector`) :

```cpp
std::vector<int> v {1, 2, 3, 4, 5};

// Déclaration d'un itérateur sur le vecteur v
std::vector<int>::iterator begin_iterator { v.begin() };

// Déclaration d'un itérateur permettant d'indiquer la fin du vecteur v
std::vector<int>::iterator end_iterator { v.end() };
```

:::note
Ici, nous utilisons l'**itérateur** `std::vector<int>::iterator` qui permet de parcourir un vecteur. Il existe aussi l'**itérateur** `std::vector<int>::const_iterator` qui permet de parcourir un vecteur en lecture seule (`const`) (on peut obtenir des itérateurs **constants** avec les méthodes `cbegin` et `cend`).
:::

:::warning
L'itérateur `end` ne pointe **pas** sur le **dernier élément** du conteneur mais vers un élément *invalide* qui **indique la fin** du conteneur (généralement un élément après le dernier élément du conteneur comme c'est le cas pour `std::vector` par exemple). Il ne faut donc pas déréférencer l'itérateur `end` car cela provoquerait une erreur. Il sert uniquement à **indiquer la fin du conteneur**.
:::

### Utilisation des itérateurs

Pour illustrer le fonctionnement des itérateurs, reprenons l'exemple précédent avec un vecteur pour utiliser l'itérateur pour parcourir le vecteur.

```cpp
std::vector<int> v {1, 2, 3, 4, 5};

// Déclaration d'un itérateur permettant d'indiquer la fin du vecteur v
std::vector<int>::iterator end_iterator { v.end() };

// Parcours du vecteur avec l'itérateur
for (std::vector<int>::iterator it { v.begin() }; it != end_iterator; ++it) {
    std::cout << *it << std::endl;
}
```

Quelques explications sur ce code :
Nous déclarons un itérateur sur le premier élément du vecteur `v` et un itérateur sur le dernier élément du vecteur `v`. Ensuite, nous parcourons le vecteur avec une boucle `for` en incrémentant l'**itérateur** (pour passer à l'élément suivant). Nous utilisons l'opérateur `!=` pour comparer l'itérateur actuel avec l'itérateur qui indique la fin du vecteur afin de savoir quand nous avons parcouru tout le vecteur. L'opérateur `*` permet de récupérer la valeur pointée par l'itérateur (à l'instar du déréférencement d'un pointeur).

:::info for range based loop
Il existe une syntaxe plus simple pour parcourir un conteneur avec un itérateur. Il s'agit de la boucle `for` avec la syntaxe `for (element : container)`. Nous avons déjà vu cette syntaxe avec les tableaux. Cette syntaxe est aussi valable pour les autres conteneurs de la **STL** et utilise en fait les itérateurs.

Voilà le même exemple que précédemment avec la boucle `for` et la syntaxe `for (element : container)` :

```cpp
std::vector<int> const v {1, 2, 3, 4, 5};

// Parcours du vecteur avec l'itérateur
for (int const element : v) {
    std::cout << element << std::endl;
}
```

C'est cette syntaxe que nous privilégierons en pratique pour parcourir les conteneurs.
:::

## Déduction de type

Jusqu'à présent, nous avons toujours déclaré nos variables en précisant leur **type**. Cependant, il existe une syntaxe qui permet de déduire le type d'une variable à partir de son initialisation. Nous avons vu avec les itérateurs que le type de l'itérateur dépend du conteneur sur lequel il est utilisé (par exemple `std::vector<int>::iterator` pour un vecteur de `int` et `std::vector<float>::iterator` pour un vecteur de `float`)

Il est donc impossible de déclarer un itérateur sans connaître le type du conteneur. De plus, le type de l'itérateur est généralement très long et compliqué à écrire.

Dans ce cas, nous pouvons utiliser la **déduction de type** pour déclarer notre itérateur. Cela se fait avec le mot clé `auto` à la place du type de la variable.

```cpp
std::vector<int> const v {1, 2, 3, 4, 5};

// Déclaration d'un itérateur sur le vecteur v
auto it { v.begin() };
```

Pourquoi ne pas utiliser la déduction de type pour toutes les variables ? C'est une question de lisibilité du code. Il est plus facile de comprendre le code si les types sont précisés. De plus, la déduction de type ne fonctionne que si la variable est initialisée et que le type peut être déduit. Cela peut être problématique dans certains cas où le type ne peut pas être déduit ou conduit à des erreurs (par exemple avec `{1, 2, 3, 4, 5}` qui peut être un `std::vector` ou un `std::array`).

Finalement, la déduction de type est une fonctionnalité très utile mais qui doit être utilisée avec parcimonie quand cela est pertinent. Il est préférable de préciser le type des variables pour rendre le code plus lisible quand cela est possible.

On préférera donc écrire `float` plutôt que `auto` pour déclarer une variable de type `float`. Mais on préférera utiliser la déduction de type pour déclarer un itérateur sur un conteneur.

:::note
C'est généralement considéré comme une mauvaise pratique de ne pas préciser le type des variables (comme c'est le cas en **Python** ou en **JavaScript**). Il existe pour ces langages des surcouches qui permettent de vérifier le type des variables (comme **TypeScript** pour **JavaScript** et le module `typing` pour **Python**). Le **C++** est un langage **fortement typé** et nous impose de préciser le type des variables mais c'est pour une bonne raison et la **déduction de type** (`auto`) est une fonctionnalité qui permet de simplifier le code dans certains cas et n'a pas pour but de remplacer la déclaration de type.
:::

## Exemples et algorithmes

L'intérêt de l'itérateur pour boucler sur un conteneur est limité. En effet, il est plus simple d'utiliser la boucle `for` avec la syntaxe `for (element : container)` pour parcourir un conteneur.

L'intérêt des itérateurs est de pouvoir utiliser des algorithmes de la **STL** qui permettent de manipuler les conteneurs de manière générique.

Toutes ces fonctions sont définies dans le fichier d'en-tête `algorithm` de la **STL**. Vous pouvez retrouver la documentation de ce fichier d'en-tête sur le site [cppreference.com](https://en.cppreference.com/w/cpp/algorithm) (attention, la documentation est en anglais).

Nous allons voir quelques exemples d'algorithmes les plus courants de la **STL**.

### Find

L'algorithme `std::find` permet de **rechercher** un élément dans un conteneur. Il prend en paramètre un itérateur sur le premier élément du conteneur, un itérateur sur le dernier élément du conteneur et la valeur à rechercher.

L'algorithme `std::find` renvoie un itérateur sur l'élément trouvé ou l'itérateur `end` si l'élément n'est pas trouvé.

Voici un exemple avec un vecteur (`std::vector`) :

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> v {1, 2, 3, 4, 5};

    // Recherche de l'élément 3 dans le vecteur v
    auto it { std::find(v.begin(), v.end(), 3) };

    // On compare l'itérateur avec l'itérateur sur le dernier élément du vecteur
    if (it != v.end())
    {
        std::cout << *it << std::endl;
    }
    else
    {
        std::cout << "Element not found" << std::endl;
    }
}
```

### Sort

L'algorithme `std::sort` permet de trier un conteneur. Il prend en paramètre un itérateur sur le premier élément du conteneur et un itérateur sur le dernier élément du conteneur.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> v {5, 2, 3, 1, 4};

    // Tri du vecteur v
    std::sort(v.begin(), v.end());

    // Parcours du vecteur avec l'itérateur
    for (int element : v)
    {
        std::cout << element << std::endl;
    }
}
```

### Remove et Erase

Pour le `std::vector`, il existe une méthode `std::erase` qui permet de supprimer des éléments du vecteur. Cependant, cette méthode n'existe pas pour tous les conteneurs. 

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> v {14, 25, 36, 42, 53};

    // Suppression de tous les éléments du vecteur v qui sont égaux à 36
    std::erase(v, 36);
}
```

Cette fonction propre au `std::vector` ne permet pas de supprimer un élément d'un conteneur générique.

Pour cela, il existe l'algorithme `std::remove` qui permet de supprimer un élément d'un conteneur. Il prend en paramètre un itérateur sur le premier élément du conteneur, un itérateur sur la fin du conteneur et la valeur à supprimer. C'est ce qu'utilise la méthode `std::erase` pour supprimer un élément du `std::vector`.

:::warning
`std::remove` ne supprime pas réellement les éléments du conteneur. Il déplace les éléments à supprimer à la fin du conteneur et renvoie un itérateur sur le premier élément à supprimer pour définir la nouvelle fin du conteneur. Il faut ensuite utiliser la méthode `erase` pour supprimer les éléments à supprimer du conteneur.

```cpp
v.erase(std::remove(v.begin(), v.end(), 5), v.end());
```
:::

C'est ce qu'on appelle l'**idiome** *remove-erase*.

A partir du **C++20**, il existe de nouvelles fonctions qui permettent de supprimer des éléments d'un conteneur de manière générique: `std::erase` et `std::erase_if`. Ces fonctions prennent en paramètre des itérateurs et fonctionnent donc avec tous les conteneurs.

Vous trouverez une explication [ici](https://en.wikipedia.org/wiki/Erase%E2%80%93remove_idiom).

## Pour aller plus loin

### Les fonctions lambda
<details>

Il existe de nombreux autres algorithmes dans la **STL**. Il est impossible de tous les présenter dans ce cours. Je vous invite à consulter la documentation de la **STL** sur le site [cppreference.com](https://en.cppreference.com/w/cpp/algorithm) pour découvrir les autres algorithmes.

Certains utilisent des **fonctions lambda** pour permettre de personnaliser le comportement de l'algorithme. C'est le cas de l'algorithme `std::transform` qui permet d'appliquer une fonction à tous les éléments d'un conteneur.

Je ne vais pas rentrer dans les détails des **fonctions lambda** mais sachez que c'est une **syntaxe** qui permet de définir une fonction **anonyme** (généralement petite) et permet de passer une fonction en paramètre d'une autre fonction. C'est quelque chose de très utilisé avec la **STL**.

Cela reste une notion avancée et je ne vais pas rentrer dans les détails des **fonctions lambda** dans ce cours. Vous pouvez seulement retenir deux choses :
- La syntaxe est la suivante : `[] (paramètres) { instructions }`. 
- Si l'on souhaite accéder aux variables définies en dehors de la fonction lambda (sans que ce soit un paramètre),  il faut ajouter le symbole `&` entre les crochets et les paramètres de la fonction lambda (`[&] (paramètres) { instructions }`) (c'est ce que l'on appelle une **capture**).

Je vais présenter quelques algorithmes qui utilisent des fonctions lambda pour vous montrer comment cela fonctionne.
</details>

### Transform

<details>

L'algorithme `std::transform` permet d'appliquer une fonction à tous les éléments d'un conteneur. Il prend en paramètre un itérateur sur le premier et le dernier élément du conteneur, un itérateur sur le premier élément du conteneur de destination et la fonction à appliquer.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> const v {1, 2, 3, 4, 5};
    std::vector<int> v2 {0, 0, 0, 0, 0};

    // Application de la fonction lambda à tous les éléments du vecteur v
    std::transform(v.begin(), v.end(), v2.begin(), [](int element) { return element * 2; });

    // Parcours du vecteur avec l'itérateur
    for (int const element : v2)
    {
        std::cout << element << std::endl;
    }
}
```

:::caution
Il faut faire attention à la taille du conteneur de destination. Si le conteneur de destination est trop petit, il y aura un dépassement et soit le programme plantera soit il y aura des résultats inattendus (le vecteur de destination ne sera pas rempli, etc...).

Avec des conteneurs pour lesquels on peut ajouter des éléments à la fin (comme `std::vector`), il est possible d'utiliser la fonction `std::back_inserter` pour ajouter des éléments à la fin du conteneur de destination. Cela permet de ne pas avoir à se soucier de la taille du conteneur de destination.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> const v {1, 2, 3, 4, 5};
    std::vector<int> v2 {};

    // Application de la fonction lambda à tous les éléments du vecteur v
    std::transform(v.begin(), v.end(), std::back_inserter(v2), [](int element) { return element * 2; });
    // Parcours du vecteur avec l'itérateur
    for (int const element : v2)
    {
        std::cout << element << std::endl;
    }
}
```
:::

</details>

### Accumulate et reduce

<details>

Lorsque l'on souhaite agréger les éléments d'un conteneur pour en extraire une valeur, il existe deux algorithmes qui permettent de faire cela : `std::accumulate` et `std::reduce`.

Il sont inclus dans le fichier d'en-tête `numeric` de la **STL**. Vous pouvez retrouver la documentation de ce fichier d'en-tête sur le site [cppreference.com](https://en.cppreference.com/w/cpp/header/numeric).

L'algorithme `std::accumulate` permet d’accumuler les éléments d'un conteneur selon une opération. Pour en faire la somme par exemple. Il prend en paramètre un itérateur sur le premier et le dernier élément du conteneur, la valeur initiale et l'opération à appliquer.

```cpp
#include <iostream>
#include <vector>
#include <numeric>

int main()
{
    std::vector<int> const v {1, 2, 3, 4, 5};

    // Somme des éléments du vecteur v
    int sum { std::accumulate(v.begin(), v.end(), 0, [](int acc, int current_element) { return acc + current_element; }) };
    std::cout << sum << std::endl;
}
```

A chaque itération, l'opération est appliquée entre la valeur accumulée et l'élément courant du conteneur. La valeur accumulée est initialisée avec la valeur initiale. Les valeurs sont parcourues **dans l'ordre** du conteneur.

L'algorithme `std::reduce` fonctionne de la même manière que `std::accumulate` mais il n'y a pas de valeur initiale. Les valeurs sont parcourues **dans n'importe quel ordre**. C'est utile quand l'opération est **commutative** (l'ordre des opérandes n'a pas d'importance).

```cpp title="Somme"

#include <iostream>
#include <vector>
#include <numeric>

int main()
{
    std::vector<int> const v {1, 2, 3, 4, 5};

    // Somme des éléments du vecteur v
    int sum { std::reduce(v.begin(), v.end(), [](int a, int b) { return a + b; }) };
    // Ou en utilisant std::plus pour faire la somme (une fonction somme déjà implémentée dans la STL dans l'entête <functional>)
    // int sum { std::reduce(v.begin(), v.end(), std::plus<int>()) };
    std::cout << sum << std::endl;
}
```

</details>

## Résumé

- La **STL** fournit des **algorithmes** et des fonctions qui permettent de simplifier la manipulation des conteneurs.
- La **STL** fournit des **itérateurs** qui permettent de parcourir les conteneurs de manière générique.
- Un **itérateur** est un objet qui se comporte un peu comme un pointeur et permet de cibler un élément dans un conteneur, de le manipuler et permet de passer d'un élément à l'autre.
- Il existe deux méthodes sur les conteneurs qui permettent de récupérer un itérateur sur le **premier élément** du conteneur et un itérateur sur le **dernier élément** du conteneur : `begin` et `end`.
- La syntaxe `for (element : container)` utilise les itérateurs pour parcourir un conteneur.
- La **déduction de type** permet de déduire le type d'une variable à partir de son initialisation. Cela se fait avec le mot clé `auto` à la place du type de la variable.
- La déduction de type est une fonctionnalité très utile mais qui doit être utilisée avec parcimonie quand cela est pertinent. Il est préférable de préciser le type des variables pour rendre le code plus lisible quand cela est possible.
- L'algorithme `std::find` permet de **rechercher** un élément dans un conteneur.
- L'algorithme `std::sort` permet de **trier** un conteneur.
- L'algorithme `std::erase` permet de **supprimer** un élément d'un `std::vector`.
- Les fonctions lambda permettent de définir une fonction **anonyme** (généralement petite) pour personnaliser le comportement d'un algorithme.
- L'algorithme `std::transform` permet d'**appliquer une fonction** à tous les éléments d'un conteneur.
- Les algorithmes `std::accumulate` et `std::reduce` permettent d'**agréger** les éléments d'un conteneur pour en extraire une valeur.

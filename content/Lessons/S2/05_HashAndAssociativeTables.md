---
title: Hash et tableaux associatifs
tags:
    - C++
---

Admettons que l'on veuille trouver le nom du jour de la semaine correspondant à un numéro de jour donné. On peut utiliser un tableau pour stocker les noms des jours de la semaine et accéder au nom du jour de la semaine correspondant à un numéro de jour donné en utilisant ce numéro comme indice du tableau.

| 0    | 1      | 2      | 3      | 4      | 5      | 6      |
| ---- | ------ | ------ | ------ | ------ | ------ | ------ |
| Lundi | Mardi | Mercredi | Jeudi | Vendredi | Samedi | Dimanche |

```cpp
#include <iostream>
#include <string>
#include <array>

int main() {
    std::array<std::string, 7> days {"lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"};
    
    int dayNumber {};
    std::cout << "Entrez un numéro de jour : ";
    std::cin >> dayNumber;

    std::cout << "Le jour numéro " << dayNumber << " est " << days[dayNumber] << std::endl;
}
```

Admettons maintenant que l'on veuille trouver le numéro de jour de la semaine correspondant à un nom de jour donné.
On pourrait utiliser le code **ASCII** du premier caractère du nom du jour de la semaine comme indice dans un tableau qui contiendrait les numéros de jour de la semaine.

Cela permettrait de trouver le numéro de jour de la semaine correspondant à un nom de jour donné en temps constant.

On peut remarquer que cela ne fonctionne pas bien pour les jours de la semaine qui commencent par la même lettre, comme par exemple **mardi** et **mercredi**.

Il est possible de trouver un meilleur indice pour notre exemple en utilisant la somme des deux premiers caractères du nom du jour de la semaine. Cela résout le problème dans notre exemple.

Cependant, on peut imaginer que l'on veuille utiliser cette technique pour trouver le numéro de jour de la semaine correspondant à un nom de jour donné dans une autre langue, comme par exemple en anglais.

Dans ce cas, on peut imaginer que l'on aura des collisions, c'est-à-dire que deux noms de jour de la semaine différents auront la même somme des deux premiers caractères.

Il est toujours possible une autre stratégie pour éviter les collisions comme par exemple utiliser la somme des trois premiers caractères, ou la somme du dernier caractère et des deux premiers caractères, etc.

Ce que l'on vient de faire est un exemple de **fonction de hachage**. On a associé à chaque valeur (nom du jour de la semaine) à un indice, une valeur numérique, qui permet de l'identifier (dans l'idéal de manière unique).

## Hachage

En informatique, le **hachage** est une technique qui consiste à associer à une donnée une empreinte numérique, appelée **hash** qui permet d'identifier rapidement et efficacement cette donnée.

On nomme **fonction de hachage** une fonction qui prend en entrée une donnée et qui retourne le **hash** de cette donnée.

La fonction de hachage doit être **déterministe**, c'est-à-dire que pour une donnée donnée, elle doit toujours retourner le même hash.
Idéalement, la fonction de hachage doit être aussi:
 - **Rapide** à calculer
 - Donner des résultats différents pour des données différentes (résistance aux collisions)
 - Donner des résultats différents pour des données similaires (résistance aux attaques par force brute)

En pratique, il est compliqué de trouver une fonction de hachage qui vérifie toutes ces propriétés. On essaye donc de trouver une fonction de hachage qui vérifie au mieux ces propriétés et notamment la résistance aux collisions. Cela permet d'éviter que deux données différentes aient le même hash.

Cela dépend aussi de l'application. Par exemple, pour une application qui stocke des mots de passe, il est important que la fonction de hachage soit résistante aux collisions et aux attaques par force brute. Cela permet d'éviter que deux mots de passe différents aient le même hash, ce qui permettrait à un attaquant de trouver un mot de passe valide sans avoir à le deviner par exemple.

Il existe de nombreux algorithmes et fonctions de hachage complexes pour des applications réelles. Vous trouverez par exemple l'algorithme [MD5](https://fr.wikipedia.org/wiki/MD5) (considéré comme obsolète) ou la famille de fonctions [SHA-2](https://fr.wikipedia.org/wiki/SHA-2) et notamment **SHA-256** qui est réputée pour être résistante aux collisions et aux attaques par force brute et beaucoup utilisée aujourd’hui.

## Table de hachage

Dans notre exemple, on a associé à chaque nom de jour de la semaine un indice, une valeur numérique entière, qui permet de l'identifier (dans l'idéal de manière unique).

Ensuite on a utilisé cet indice comme indice dans un tableau pour récupérer une information associée à ce nom de jour de la semaine: le numéro de jour de la semaine.

C'est ce que l'on appelle une **table de hachage**.

Une table de hachage est une structure de données qui permet d'associer à une **donnée** que l'on appelle **clé** une **valeur**. On peut ensuite retrouver la valeur associée à une clé en utilisant un **hash** de la clé comme indice dans un tableau.

Une façon de gérer les collisions est d'utiliser une liste pour stocker les valeurs associées aux clés qui ont le même hash. Une fois que l'on a calculé le hash de la clé, on utilise ce hash comme indice dans un tableau pour trouver la liste des valeurs associées. S'il y a plusieurs valeurs associées à la clé, on peut parcourir la liste pour trouver la valeur qui correspond à la clé en comparant les clés.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/HASHTB32.svg/2560px-HASHTB32.svg.png)

## Tableau associatif

La structure de données que l'on vient de décrire est ce que l'on appelle un **tableau associatif**.

Un **tableau associatif** est une structure de données qui permet d'associer à une **donnée** que l'on appelle **clé** une **valeur**. On peut ensuite retrouver la valeur associée à une clé en utilisant la clé.

### std::unordered_map

La bibliothèque standard de C++ fournit une implémentation de tableau associatif utilisant une table de hachage: la classe `std::unordered_map`( définie dans la bibliothèque `<unordered_map>`).

Implicitement, cette classe utilise la fonction de hachage `std::hash` pour calculer le hash des clés. Cette fonction de hachage est définie pour les types de base et les types de la bibliothèque standard (comme `std::string` par exemple).

Elle utilise aussi la fonction `std::equal_to` pour comparer les clés dans le cas des collisions. Cette fonction est aussi définie pour les types de base et les types de la bibliothèque standard.

On utilise la méthode `insert` pour ajouter une valeur associée à une clé et la méthode `find` pour retrouver la valeur associée à une clé.
Je vous invite à relire le cours précédent sur les [itérateurs](/Lessons/S2/AutoAndAlgorithm#find) pour comprendre comment utiliser ces méthodes.

```cpp
#include <unordered_map>
#include <iostream>
#include <string>

int main() {
    std::unordered_map<std::string, int> days {
        {"lundi", 0},
        {"mardi", 1},
        {"mercredi", 2},
        {"jeudi", 3},
        {"vendredi", 4},
        {"samedi", 5},
        {"dimanche", 6}
    };

    std::string dayName;
    std::cout << "Entrez un nom de jour : ";
    std::cin >> dayName;

    auto dayNumber { days.find(dayName) };
    if (dayNumber != days.end()) {
        std::cout << "Le jour " << dayName << " est le jour numéro " << (*dayNumber).second << std::endl;
    } else {
        std::cout << "Le jour " << dayName << " n'existe pas" << std::endl;
    }
}
```

:::info
Il est possible de définir une fonction de hachage personnalisée pour la classe `std::unordered_map` afin de pouvoir utiliser des types personnalisés comme des structures ou des classes comme clés. Mais cela dépasse le cadre de ce cours. Si c'est quelque chose qui vous intéresse, n'hésitez pas à faire des recherches ou à me contacter.
:::

### std::map

Il existe une autre implémentation de tableau associatif dans la bibliothèque standard de C++: la classe `std::map` (définie dans la bibliothèque `<map>`).

Cette classe utilise un **arbre binaire** de recherche pour stocker les données. Cela permet de stocker les données dans un ordre défini par une relation d'ordre sur les clés.

Elle utilise une opération de comparaison pour stocker les données. Cette opération de comparaison est définie pour les types de base et les types de la bibliothèque standard (comme `std::string` par exemple).

Elle s'utilise de la même façon que `std::unordered_map`.

```cpp
#include <map>
#include <iostream>
#include <string>

int main() {
    std::map<std::string, int> days {
        {"lundi", 0},
        {"mardi", 1},
        {"mercredi", 2},
        {"jeudi", 3},
        {"vendredi", 4},
        {"samedi", 5}
    };

    // On peut ajouter des éléments à une std::map avec l’opérateur []
    days["dimanche"] = 6;

    std::string dayName;
    std::cout << "Entrez un nom de jour : ";
    std::cin >> dayName;

    auto dayNumber = days.find(dayName);
    if (dayNumber != days.end()) {
        std::cout << "Le jour " << dayName << " est le jour numéro " << dayNumber->second << std::endl;
    } else {
        std::cout << "Le jour " << dayName << " n'existe pas" << std::endl;
    }
}
```

:::info
La classe `std::map` utilise un **arbre binaire de recherche** pour stocker les associations clé-valeur sous la forme de paires (`std::pair`).
On peut donc aussi utiliser la classe `std::pair` pour ajouter des éléments à une `std::map`.

```cpp
#include <map>
#include <iostream>
#include <string>

int main() {
    std::map<std::string, int> days {
        {"lundi", 0},
        {"mardi", 1},
        {"mercredi", 2},
        {"jeudi", 3},
        {"vendredi", 4},
        {"samedi", 5}
    };

    days.insert(std::make_pair("dimanche", 6));

    return 0;
}
```
:::

#### Cas d'utilisation avec les énumérations

Les [énumérations](/Lessons/S1/Variables#enum-un-type-supplémentaire) sont des types de données qui permettent de définir un ensemble de valeurs possibles pour une variable.

Mais il n'est pas simplement possible de convertir un élément d'une énumération en une chaîne de caractères.

Mais étant représentées par des entiers en mémoire, il est possible de les utiliser comme clés dans un tableau associatif pour y associer des chaînes de caractères.

C'est un cas d'utilisation très courant des tableaux associatifs et des énumérations.

```cpp
#include <map>
#include <iostream>
#include <string>

enum class Season {
    Spring,
    Summer,
    Autumn,
    Winter
};

int main() {
    std::map<Season, std::string> season_to_string {
        {Season::Spring, "Printemps"},
        {Season::Summer, "Été"},
        {Season::Autumn, "Automne"},
        {Season::Winter, "Hiver"}
    };

    Season currentSeason {Season::Spring};

    std::cout << "La saison actuelle est " << season_to_string[currentSeason] << std::endl;

    return 0;
}
```


## std::set — Un ensemble d'éléments uniques

Une autre structure de données fournie par la bibliothèque standard de C++ est la classe `std::set` (définie dans la bibliothèque `<set>`).

Elle permet de représenter un **ensemble** d'éléments **uniques**.

Cette classe est similaire à `std::map` mais elle ne stocke pas de valeurs associées aux clés. Elle ne stocke que les clés. Cela permet de stocker des ensembles d'éléments uniques.

Elle s'utilise de la même façon que `std::map`.

## Résumé

- Une **fonction de hachage** est une fonction qui prend en entrée une donnée et qui retourne le **hash** de cette donnée (un nombre entier)
- Une **table de hachage** est une **structure de données** qui permet d'associer à une **donnée** que l'on appelle **clé** une **valeur**. On peut ensuite retrouver la valeur associée à une clé en utilisant un **hash** de la clé comme indice dans un tableau.
- Une table de hachage 
- Un **tableau associatif** est une structure de données qui permet d'associer à une **donnée** que l'on appelle **clé** une **valeur**. On peut ensuite retrouver la valeur associée à une clé en utilisant la clé.
- La bibliothèque standard de C++ fournit deux implémentations de tableau associatif:
    - `std::unordered_map` qui utilise une **table de hachage**
    - `std::map` qui utilise un arbre **binaire de recherche**
- La bibliothèque standard de C++ fournit aussi une implémentation d'ensemble d'éléments uniques: `std::set`.

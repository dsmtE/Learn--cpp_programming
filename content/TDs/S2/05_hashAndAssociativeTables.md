---
title: TD5 - Hachage et tableaux associatifs
---

Dans ce TD nous allons mettre en pratique les notions vues en cours sur les tables de hachage et les tables associatives.

## Exercice 1 (fonction de hachage)

1. Écrire une fonction de hachage qui prend en paramètre une chaîne de caractères, fait la somme des valeurs ASCII des caractères et renvoie un entier compris entre 0 et un maximum donné nommé `max` (le type de retour du hash doit être `size_t`).
> Nous utiliserons une simple somme des codes ASCII des caractères suivie d'un modulo pour obtenir un entier compris entre 0 et `max`.
```cpp
size_t folding_string_hash(std::string const& s, size_t max);
```

Ce que nous venons de faire s'appel la technique dite de **folding** (pliage en français). Cela consiste à découper notre donnée en plusieurs parties, calculer une valeur(hash) pour chacune de ces parties, sommer ces valeurs et enfin appliquer un modulo pour obtenir un entier compris entre 0 et `max`.  Ici on traite une chaîne de caractère, on va donc faire la somme des valeurs de hachage de chaque caractère.

:::info
On veux se ramener à un entier compris entre 0 et `max` car cette valeur hachée sert généralement d'index dans un tableau (table de hachage). Hors on souhaite un tableau de taille "raisonnable" en mémoire, donc on limite la taille de ce tableau à `max`.
Le choix de `max` dépend du contexte d'utilisation de la table de hachage, généralement on choisit une valeur qui est une puissance de 2 (par exemple 1024, 2048, 4096, etc.).
:::

2. Écrire une nouvelle fonction de hachage sur une chaîne de caractères pour laquelle l'ordre des caractères a de l'importance. Par exemple, les chaînes de caractères "abc" et "cba" ne doivent pas avoir la même valeur hachée. Ce qui est le cas avec la fonction de hachage précédente.
> Utiliser par exemple la somme des codes ASCII des caractères multipliée par leur position dans la chaîne de caractères.
```cpp
size_t folding_string_ordered_hash(std::string const& s, size_t max);
```

3. Écrire une fonction de hachage sur une chaîne de caractères utilisant la technique de **polynomial rolling hash**.

> Voila le prototype de la fonction à écrire:
```cpp
size_t polynomial_rolling_hash(const std::string& s, size_t p, size_t m);
```

> Nous allons utiliser la technique dite de **polynomial rolling hash**. Cette technique consiste à calculer le hash d'une chaîne de caractères en incorporant la position d'une manière plus complexe pour éviter les collisions. On va donc multiplier la valeur de chaque caractère par une puissance de `p` qui dépend de la position du caractère dans la chaîne de caractères.
> Pour cela, nous allons utiliser la formule suivante:
> $$
> \text{hash}(s) = \sum_{i=0}^{n-1} (s[i] \times p^i \mod m)
> $$
>
> Avec:
> - $s$ la chaîne de caractères
> - $n$ la taille de la chaîne de caractères
> - $s[i]$ le code ASCII du caractère à l'index $i$ dans la chaîne de caractères
> - $p$ un nombre (généralement un nombre premier)
> - $m$ un nombre (généralement une puissance de 2)

:::warning
On ne veux pas utiliser la fonction [`std::pow`](https://en.cppreference.com/w/c/numeric/math/pow) de la bibliothèque standard car elle est lente est fonctionne avec des **flottants**. On va donc nous même faire les multiplications.
On va donc utiliser une variable `power` et multiplier cette variable par `p` à chaque itération pour obtenir le nombre représentant $p^i$;
:::

:::tip choix de `p` et `m`
Le choix de `p` et `m` va influencer la qualité (collision) et les performances de notre fonction de hachage. Sans rentrer dans les détails, on choisit généralement `p` un **nombre premier** et `m` un nombre suffisamment grand pour éviter les collisions tout en restant petit pour rester performant et éviter des erreur numériques. Par exemple, on peut choisir `p` = **31** et `m` = **10^9 + 9** (que l'on peut noter `1e9 + 9` en C++ ou tout simplement `1000000009`).
:::

## Exercice 2 (Réparation de Robots)

l'idée de cet exercice est d'utiliser une [table associative](/Lessons/S2/HashAndAssociativeTables#tableau-associatif) pour résoudre un problème.

Nous avons des robots qui sont en panne. Chaque robot est identifié par son nom composé de 2 lettres majuscules. Je vous donne la liste des robots en panne et les différentes dépenses pour les réparer.

Voilà la fonction qui génère la liste des réparations effectuées en donnant sous forme de `std::pair` le nom du robot et le coût de la réparation:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>

std::string random_name(size_t size) {
    std::string name {""};
    // Optimisation pour que la chaîne de caractère ne réalloue pas de la mémoire à chaque caractère ajouté
    // https://cplusplus.com/reference/string/string/reserve/
    name.reserve(size);
    for(size_t i {0}; i < size; ++i) {
        name.push_back('A' + std::rand() % 26);
    }
    return name;
}

std::vector<std::pair<std::string, float>> get_robots_fix(size_t size) {
    std::vector<std::pair<std::string, float>> robots_fix {};
    // Meme optimisation que dans random_name()
    // https://cplusplus.com/reference/vector/vector/reserve/
    robots_fix.reserve(size);
    for (size_t i {0}; i < size; ++i) {
        // random name 
        std::string robotName { random_name(2) };
        // random cost
        float cost {static_cast<float>(std::rand()) / RAND_MAX * 1000.0f};
        robots_fix.push_back(std::make_pair(robotName, cost));
    }
    return robots_fix;
}
```

J'aimerai être capable de lister pour un robot donné l'ensemble des réparations effectuées pour ce robot. Par exemple, pour le robot "AB", j'aimerai avoir la liste des réparations effectuées pour ce robot.

1. Pour cela, je vous demande d'écrire une fonction qui prend en paramètre la liste des réparations effectuées et qui retourne une [table associative](/Lessons/S2/HashAndAssociativeTables#tableau-associatif) (`std::unordered_map`) qui associe à chaque nom de robot la liste des réparations effectuées pour ce robot (sous forme de `std::vector<float>`).

Vous pouvez utiliser la signature suivante pour cette fonction:

```cpp
std::unordered_map<std::string, std::vector<float>> robots_fixes_map(std::vector<std::pair<std::string, float>> const& robots_fixes);
```

2. Écrire une fonction qui prend en un `std::vector<float>` et qui retourne la somme des éléments de ce vecteur.

3. Utiliser les deux fonctions précédentes pour afficher la somme des réparations effectuées pour chaque robot. (à partir de la liste des réparations effectuées obtenue avec la fonction `get_robots_fix`).

## Exercice 3 (hash sur une structure)

Donnons nous les enums et structures suivantes:

```cpp
enum class CardKind {
    Heart,
    Diamond,
    Club,
    Spade,
};

enum class CardValue {
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
};

struct Card {
    CardKind kind;
    CardValue value;
};
```

L'idée de cet exercice est de créer une fonction de hachage pour la structure `Card` pour que l'on puisse utiliser cette structure comme clé dans une table de hachage.

la bibliothèque standard C++ fournit une fonction de hachage pour les types de base (entiers, flottants, etc.) et les chaînes de caractères. Mais elle ne fournit pas de fonction de hachage pour nos structures.

De la même façon que l'on a surchargé les opérateurs pour nos structures, on va pouvoir surcharger la fonction de hachage de notre structure.

Il faut deux choses pour pouvoir utiliser une **structure** comme clé dans une table de hachage:

- un opérateur `==` pour comparer deux structures
- une fonction de hachage de cette structure

1. **Surchargez l'opérateur** `==` pour la structure `Card` (deux cartes sont égales si elles ont la même valeur et la même couleur).

2. Écrire une **méthode** `hash` **constante** pour la structure `Card` qui retourne un entier.

Vous pouvez utiliser la méthode de hachage que vous souhaitez et qui vous semble la plus adaptée. Mais je vous donne un indice pour trouver une fonction de hachage **parfaite** pour notre structure `Card` dans la question suivante (vous pouvez donc passer à la question suivante si vous le souhaitez).

3. Trouvez un moyen simple (à l'aide d'une multiplication et de static_cast) d'améliorer la fonction de hachage de notre structure `Card` pour quelle soit **parfaite**.

:::tip
Trouver une bonne fonction de hachage de notre structure `Card` revient à trouver une façon de transformer une carte en un entier unique. Il y a de nombreuses façons de s'y prendre comme on l'a vu précédemment. Mais pour ce cas précis, il existe une fonction de hachage dite **parfaite**. On peut se rendre compte qu'il y a seulement **52** cartes différentes. On peut donc utiliser une fonction de hachage qui retourne un entier compris entre 0 et 51 avec un nombre différent pour chaque carte et donc sans collision.
:::

---

Je vous donne ensuite le code suivant qui permet de faire en sorte que la bibliothèque standard utilise notre méthode `hash` pour la structure `Card`:

```cpp
namespace std {
    template<>
    struct hash<Card> {
        size_t operator()(Card const& card) const {
            return card.hash();
        }
    };
}
```

> Je ne vous demande pas de comprendre ce code, il y a des notions plus complexes que vous découvrirez l'année prochaine. Gardez simplement en tête que ce code permet de faire en sorte que la bibliothèque standard utilise notre méthode `hash` pour la structure `Card`. (Notamment les tables associatives ont besoin de ça pour indexer les objects). On aurait pu écrire le contenu de la fonction `hash` directement ici mais je préfère que vous ayez une méthode `hash` dans la structure `Card` pour que vous puissiez l'utiliser ailleurs (en appelant `card.hash()`).

:::warning
⚠️ Votre méthode `hash` doit être `const` pour pouvoir être appelée dans cette fonction qui est `const`.
:::
 
Je vous donne également une fonction qui permet de générer une liste de cartes aléatoires:

```cpp
#include <vector>
std::vector<Card> get_cards(size_t const size) {
    std::vector<Card> cards {};
    cards.reserve(size);
    for (size_t i {0}; i < size; ++i) {
        cards.push_back({static_cast<CardKind>(rand() % 4), static_cast<CardValue>(rand() % 13)});
    }
    return cards;
}
```

4. Utiliser la fonction `get_cards` pour générer une liste de **100** cartes aléatoires. Utiliser une table de hachage `std::unordered_map` pour compter le nombre de fois que chaque carte apparaît dans la liste et afficher le résultat.

Pour pouvoir afficher, je vous donne la fonction suivante qui permet d'obtenir une représentation sous forme de chaîne de caractères de notre structure `Card`:
```cpp
std::string card_name(Card const& card) {
    std::string name {};

    unsigned int card_value {(static_cast<unsigned int>(card.value)+2) % 14};

    if (card_value < 10) {
        name += '0' + card_value;
    }else if (card_value == 10) {
        name += "10";
    }else if (card_value == 11) {
        name += 'V';
    }else if (card_value == 12) {
        name += 'Q';
    }else if (card_value == 13) {
        name += 'K';
    }

    name += " of ";

    if (card.kind == CardKind::Heart) {
        name += "Heart";
    }else if (card.kind == CardKind::Diamond) {
        name += "Diamond";
    }else if (card.kind == CardKind::Club) {
        name += "Club";
    }else if (card.kind == CardKind::Spade) {
        name += "Spade";
    }
    return name;
}
```

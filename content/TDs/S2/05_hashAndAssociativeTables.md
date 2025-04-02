---
title: TD5 - Hachage et tableaux associatifs
---

Dans ce TD nous allons mettre en pratique les notions vues en cours sur les tables de hachage et les tables associatives.

## Exercice 1 (Fonction de hachage)

1. Écrire une fonction de hachage qui prend en paramètre une chaîne de caractères, fait la somme des valeurs ASCII des caractères et renvoie un entier compris entre 0 et un maximum donné nommé `max` (le type de retour du hash doit être `size_t`).
> Nous utiliserons une simple somme des codes ASCII des caractères suivie d'un modulo pour obtenir un entier compris entre 0 et `max`.
```cpp
size_t folding_string_hash(std::string const& s, size_t max);
```

> $$
> \text{hash}(s) = (\sum_{i=0}^{n-1} s[i]) \mod m
> $$
> Avec:
> - $s$ la chaîne de caractères
> - $n$ la taille de la chaîne de caractères
> - $s[i]$ le code ASCII du caractère à l'index $i$ dans la chaîne de caractères

Ce que nous venons de faire s'appelle la technique dite de **folding** (pliage en français). Cela consiste à découper notre donnée en plusieurs parties, calculer une valeur (hash) pour chacune de ces parties, sommer ces valeurs et enfin appliquer un modulo pour obtenir un entier compris entre 0 et `max`.  Ici on traite une chaîne de caractère, on va donc faire la somme des valeurs de hachage de chaque caractère.

:::info
On veux se ramener à un entier compris entre 0 et `max` car cette valeur hachée sert généralement d'index dans un tableau (table de hachage). Hors on souhaite un tableau de taille "raisonnable" en mémoire, donc on limite la taille de ce tableau à `max`.
Le choix de `max` dépend du contexte d'utilisation de la table de hachage, généralement on choisit une valeur qui est une puissance de 2 (par exemple 1024, 2048, 4096, etc.).
:::

2. Écrire une nouvelle fonction de hachage sur une chaîne de caractères pour laquelle l'ordre des caractères a de l'importance. Par exemple, les chaînes de caractères "abc" et "cba" ne doivent pas avoir la même valeur hachée. Ce qui est le cas avec la fonction de hachage précédente.
> Utiliser par exemple la somme des codes ASCII des caractères multipliée par leur position dans la chaîne de caractères.
```cpp
size_t folding_string_ordered_hash(std::string const& s, size_t max);
```

> $$
> \text{hash}(s) = (\sum_{i=0}^{n-1} s[i] \times (i+1)) \mod m
> $$
>
> Ici j'utilise `i+1` pour éviter que la position 0 (le 1er caractère)  ne soit pas prise en compte dans le calcul du hash car multipliée par 0.

3. Écrire une fonction de hachage sur une chaîne de caractères utilisant la technique de **polynomial rolling hash**.

> Voila le prototype de la fonction à écrire:
```cpp
size_t polynomial_rolling_hash(std::string const& s, size_t p, size_t m);
```

> Nous allons utiliser la technique dite de **polynomial rolling hash**. Cette technique consiste à calculer le hash d'une chaîne de caractères en incorporant la position d'une manière plus complexe pour éviter les collisions. On va donc multiplier la valeur de chaque caractère par une puissance de `p` qui dépend de la position du caractère dans la chaîne de caractères.
> Pour cela, nous allons utiliser la formule suivante:
> $$
> \text{hash}(s) = (\sum_{i=0}^{n-1} s[i] \times p^i) \mod m
> $$
>
> Avec:
> - $p$ un nombre (généralement un nombre premier)
> - $m$ un nombre (généralement une puissance de 2)

:::warning
On ne veux pas utiliser la fonction [`std::pow`](https://en.cppreference.com/w/c/numeric/math/pow) de la bibliothèque standard car elle est "lente" et fonctionne avec des **flottants** (ce qui nous ferait faire des conversions inutiles).

De plus on ne veux pas recalculer la puissance de `p` à chaque itération car c'est des calculs inutiles. Admettons qu'il faille $n-1$ multiplications pour calculer $p^n$ ($p \times p \times p = p^3$) et que l'on recalculait à chaque fois la puissance. Pour une chaîne de taille $n$ on ferait donc $1 + 2 + \ldots + (n-2) + (n-1)$ multiplications. On peut simplifier cette somme en $n(n-1)/2$ ce qui est de l'ordre de $n^2$ multiplications. On veut éviter ça.

On va donc nous même faire les multiplications. Pour calculer $p^i$ on peut simplement multiplier par `p` le résultat de $p^{i-1}$ c'est à dire la valeur de la puissance à l'itération précédente.
On va donc utiliser une variable `power` (initialisée à 1 au début) et multiplier cette variable par `p` à chaque itération pour obtenir les puissances de `p`.
:::

:::tip choix de `p` et `m`
Le choix de `p` et `m` va influencer la qualité (probabilité de collision) et les performances de notre fonction de hachage. Sans rentrer dans les détails, on choisit généralement `p` un **nombre premier** et `m` un nombre suffisamment grand pour éviter les collisions tout en restant petit pour rester performant et éviter des erreur numériques. Par exemple, on peut choisir `p` = **31** et `m` = **10^9 + 9** (que l'on peut noter `1e9 + 9` en C++ ou tout simplement `1000000009`).
:::

## Exercice 2 (Analyse du nombre d'insectes)

L'idée de cet exercice est d'utiliser une [table associative](/Lessons/S2/HashAndAssociativeTables/#tableau-associatif) pour résoudre un problème.

Vous êtes un entomologiste qui a pour mission de **recenser** les insectes dans un jardin afin de vérifier la biodiversité de ce jardin et confirmer vos hypothèses sur la présence de certaines espèces (probabilité de présence de certaines espèces, etc.).

Vous disposez d'une liste d'insectes que vous pouvez rencontrer dans ce jardin (sous forme d'**énumération**):
```cpp
enum class Insect {
    ClassicBee,
    Ladybug,
    Butterfly,
    Dragonfly,
    Ant,
    Grasshopper,
    Beetle,
    Wasp,
    Caterpillar,
    Spider,
    GuimielBee
};
```

Je vous fournis également une liste des valeurs de l'énumération `Insect` sous forme de vecteur (pour pouvoir itérer sur les valeurs de l'énumération et éviter de faire des `static_cast` pour obtenir les valeurs de l'énumération à partir d'un entier (index) ou encore avoir le nombre d'éléments de l'énumération). Rappels sur les cast avec enum [ici](/Lessons/S1/Variables/#cast-et-enum).
```cpp
#include <vector>
std::vector<Insect> const insect_values {
    Insect::ClassicBee,
    Insect::Ladybug,
    Insect::Butterfly,
    Insect::Dragonfly,
    Insect::Ant,
    Insect::Grasshopper,
    Insect::Beetle,
    Insect::Wasp,
    Insect::Caterpillar,
    Insect::Spider,
    Insect::GuimielBee
};
```

Ainsi qu'un tableau associatif qui permet de convertir une valeur de l'énumération `Insect` en une chaîne de caractères (pour pouvoir afficher le nom de l'insecte):
:::info
Il n'existe pas de fonction dans la bibliothèque standard C++ pour obtenir le nom d'une valeur d'une énumération. L'astuce est donc de créer un tableau associatif pour faire cette correspondance. Il existe des bibliothèques comme [Magic Enum](https://github.com/Neargye/magic_enum) qui permettent de manipuler plus facilement les énumérations mais nous n'utiliserons pas de bibliothèque dans cet exercice.
:::
```cpp
#include <unordered_map>
#include <string>

std::unordered_map<Insect, std::string> const insect_to_string = {
    {Insect::ClassicBee, "ClassicBee"},
    {Insect::Ladybug, "Ladybug"},
    {Insect::Butterfly, "Butterfly"},
    {Insect::Dragonfly, "Dragonfly"},
    {Insect::Ant, "Ant"},
    {Insect::Grasshopper, "Grasshopper"},
    {Insect::Beetle, "Beetle"},
    {Insect::Wasp, "Wasp"},
    {Insect::Caterpillar, "Caterpillar"},
    {Insect::Spider, "Spider"},
    {Insect::GuimielBee, "GuimielBee"}
};
```

Enfin, vous disposez d'une liste de comptage d'insectes attendus pour un échantillon de **1000** insectes (obtenue en faisant la moyenne des observations de plusieurs entomologistes):
Cette liste se présente sous forme d'un vecteur avec les nombres d'individus attendus pour chaque espèce d'insecte (dans le même ordre que l'énumération `Insect`):

```cpp
#include <vector>
std::vector<int> const expected_insect_counts {
    75, // ClassicBee
    50, // Ladybug
    100, // Butterfly
    20, // Dragonfly
    400, // Ant
    150, // Grasshopper
    60, // Beetle
    10, // Wasp
    40, // Caterpillar
    90, // Spider 
    5, // GuimielBee
};
```

Vous avez un grand nombre d'insectes à recenser et vous avez besoin d'une méthode pour compter le nombre d'apparitions de chaque insecte.

Le plus simple pour vous est juste de **noter au fur et à mesure** vos observations (espèce et nombre d'individus observés) et de faire le compte à la fin. (par exemple, vous notez "2 abeilles" lorsque vous voyez 2 abeilles et "1 coccinelle" lorsque vous voyez une coccinelle).

Voilà une fonction qui génère une liste d'observations aléatoires pour simuler vos observations:
```cpp
#include <functional>
#include <random>
#include <vector>
#include <algorithm>
#include <iterator>

std::vector<std::pair<Insect, int>> get_insect_observations(
    size_t const number_of_observations,
    std::vector<float> const& insect_probabilities,
    unsigned int const seed = std::random_device{}()
) {
    // Create a random engine with a given seed
    std::default_random_engine random_engine{seed};

    auto rand_insect_index { std::bind(std::discrete_distribution<size_t>{insect_probabilities.begin(), insect_probabilities.end()}, random_engine) };
    
    std::vector<std::pair<Insect, int>> observations {};
    observations.reserve(number_of_observations);

    for(size_t i {0}; i < number_of_observations; ++i) {
        size_t const random_insect_index { rand_insect_index() };
        Insect const random_insect { insect_values[random_insect_index] };
        
        // If we have already seen the same insect, increment the count on the last observation
        if(!observations.empty() && observations.back().first == random_insect) {
            observations.back().second++;
            i -= 1;
        } else {
            observations.push_back({random_insect, 1});
        }
    }

    return observations;
}
```
1. Créer une fonction `std::vector<float> probabilities_from_count(std::vector<int> const& counts)` qui prend en paramètre un vecteur de comptages et retourne un vecteur de probabilités à partir de ces comptages. (on divise chaque comptage par la somme de tous les comptages pour obtenir une probabilité normalisée).

2. Utiliser la fonction `get_insect_observations` pour générer une liste suffisamment grande d'observations (par exemple **10000** observations) puis utiliser une table de hachage `std::unordered_map` pour compter le nombre d'apparitions de chaque insecte dans les observations précédemment générées et **afficher le résultat** (le nombre d'individus observés pour chaque insecte).
:::tip
On utilisera la valeur de l'énumération `Insect` comme **clé** dans la table de hachage et le nombre d'individus observés (initialisé à 0) comme **valeur** associée à cette clé (`std::unordered_map<Insect, int>`).
:::

:::info
Le paramètre `seed` de la fonction `get_insect_observations` permet de fixer la graine du générateur de nombres aléatoires. Cela permet de reproduire les mêmes observations à chaque exécution du programme. Si vous ne spécifiez pas de graine, le générateur de nombres aléatoires utilisera une graine aléatoire à chaque exécution du programme.
:::

3. Utiliser de nouveau la fonction `probabilities_from_count` pour obtenir les probabilités des insectes observés. Il faudra au préalable convertir le résultat de la table de hachage en un vecteur de comptage pour pouvoir utiliser la fonction `probabilities_from_count`.

4. **Afficher** et **comparer** les probabilités des insectes observés avec les probabilités initiales. Si la différence entre les probabilités observées et les probabilités initiales est trop grande, indiquer que les observations ne sont pas conformes aux probabilités initiales. On pourra se fixer un seuil de 1% (0.01) pour considérer que les observations sont conformes.

exemple de présentation des résultats:
```
Probabilities of observed insects vs expected probabilities
ClassicBee : 0.076 vs 0.075 OK
Ladybug : 0.048 vs 0.050 OK
Butterfly : 0.100 vs 0.100 OK
Dragonfly : 0.035 vs 0.020 BAD
...
```

:::info
Avec un grand nombre d'observations, on s'attend à ce que les probabilités observées se rapprochent des probabilités initiales. C'est le principe des lois des grands nombres. Plus on a d'observations, plus les probabilités observées se rapprocheront des probabilités initiales. Avec 10 000 vous devriez être sous le seuil de 1% pour chaque insecte (OK).
:::

:::tip
Vous pouvez utiliser l'include `<iomanip>` pour formater l'affichage des nombres à virgule flottante.
Ajouter `std::cout << std::fixed << std::setprecision(3);` avant d'afficher les nombres pour afficher les nombres avec 3 chiffres après la virgule.
:::

## Exercice 3 (Hash sur une structure)

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

La bibliothèque standard C++ fournit une fonction de hachage pour les types de base (entiers, flottants, etc.) et les chaînes de caractères. Mais elle ne fournit pas de fonction de hachage pour nos structures.

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
        name += 'J';
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

---
title: TD5 - Hachage et patrouille
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Il s'agit d'un TD noté dans lequel nous allons mettre en application les notions des précédents CM (Opérateurs, tables de hachage et tables associatives).

## Exercice 1 - Fonctions de hachage

### 1 - Hashing simple
Écrire une fonction de hachage qui prend en paramètre une chaîne de caractères, fait la somme des valeurs ASCII des caractères et renvoie un entier compris entre 0 et un maximum donné nommé `max` (le type de retour du hash doit être `size_t`).
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

:::warning
Dans l'implementation concrète (utilisant une boucle for pour sommer les valeurs ASCII), on préférera appliquer le modulo à chaque itération plutôt qu'à la fin de la boucle. En effet, si la chaîne de caractères est très longue, la somme des valeurs ASCII peut dépasser la taille maximale d'un entier (**overflow**). En appliquant le modulo à chaque itération, on évite ce problème et on s'assure que la valeur hachée reste dans les limites de `size_t`.

Le résultat sera identique car le modulo est [distributif](https://fr.wikipedia.org/wiki/Modulo_(op%C3%A9ration)#:~:text=.-,Distributivit%C3%A9) par rapport à l'addition:
$$
(a+b) \mod m = ((a \mod m) + (b \mod m)) \mod m
$$

Cela va être d'autant plus important pour les questions suivantes où l'on va devoir faire des multiplications supplémentaires et donc des risques d'overflow plus importants.
:::

### 2 - Hashing Ordonné
Écrire une nouvelle fonction de hachage sur une chaîne de caractères pour laquelle l'ordre des caractères a de l'importance. Par exemple, les chaînes de caractères "abc" et "cba" ne doivent pas avoir la même valeur hachée. Ce qui est le cas avec la fonction de hachage précédente.
> Utiliser par exemple la somme des codes ASCII des caractères multipliée par leur position dans la chaîne de caractères.
```cpp
size_t folding_string_ordered_hash(std::string const& s, size_t max);
```

> $$
> \text{hash}(s) = (\sum_{i=0}^{n-1} s[i] \times (i+1)) \mod m
> $$
>
> Ici j'utilise `i+1` pour éviter que la position 0 (le 1er caractère)  ne soit pas prise en compte dans le calcul du hash car multipliée par 0.

### 3 - BONUS non noté - Polynomial Rolling Hash

⚠️ Cette question est un **bonus non noté**, elle ne comptera pas dans la note finale.
<details>
<summary> polynomial rolling hash </summary>

Écrire une fonction de hachage sur une chaîne de caractères utilisant la technique de **polynomial rolling hash**.

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

</details>


## Exercice 2 - Guard Patrol

### Contexte

Vous êtes un explorateur temporel qui a été envoyé dans le passé mais vous devez éviter de croiser les habitants de cette époque pour ne pas créer de paradoxes temporels. Il y a un garde qui patrouille dans la zone et vous devez prédire son parcours pour éviter de le croiser.

Ses mouvements sont simple et suivent un protocole strict :
- Le garde se déplace d'une case dans la direction qu'il regarde.
- S'il rencontre un obstacle, il tourne à droite

Vous disposerez d'une carte représentant la zone dans laquelle le garde patrouille. La carte est une grille de caractères où :
- `.` représente une case vide
- `#` représente un obstacle
- `^`, `>`, `v`, `<` représentent la position du garde et la direction dans laquelle il regarde (haut, droite, bas, gauche).

Exemple de carte :
```
....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
```

Dans cet exemple, le garde est positionné initialement à la position (4, 6) et regarde vers le haut (`^`).
En suivant les règles de mouvement, le garde se déplacera vers le haut jusqu'à rencontrer l'obstacle `#` à la position (4, 0).

```
....#.....
....^....#
....*.....
..#.*.....
....*..#..
....*.....
.#..*.....
........#.
#.........
......#...
```

```
....#.....
....XXXXX#
....X...X.
..#.X...X.
..XXXXX#X.
..X.X.X.X.
.#XXXXXXX.
.XXXXXXX#.
#XXXXXXX..
......#X..

```

A la fin de la simulation, le garde aura visité plusieurs positions et sera sorti de la carte par la position (7, 9).
Il aura visité 41 positions différentes, dont certaines plusieurs fois.

### Objectif

Votre objectif est de prédire le parcours du garde sur la carte et de déterminer les cases qu'il va visiter. Vous devez écrire un programme qui simule le mouvement du garde en fonction des règles décrites ci-dessus et qui "enregistre" les cases visitées.

### Question 1 - Directions et Position
1. Créer une énumération `Direction` qui représente les quatre directions possibles (Haut, Droite, Bas, Gauche).
2. Créer une structure `Position` qui contient des coordonnées ```int``` (x, y).

```info

On se donne comme convention que la position (0, 0) est en haut à gauche de la carte.
La position (0, 1) est juste en dessous de la position (0, 0) et la position (1, 0) est juste à droite de la position (0, 0).

Les directions sont représentées comme suit :
- `Direction::Haut` correspond à (0, -1)
- `Direction::Droite` correspond à (1, 0)
- `Direction::Bas` correspond à (0, 1)
- `Direction::Gauche` correspond à (-1, 0)
```

3. Ajouter l'opérateur d'égalité `==` pour comparer deux deux positions. Deux positions sont égales si leurs coordonnées x et y sont égales.
   
4. Ajouter l'opérateur `<<` pour afficher une `Position` sous la forme `(x, y)`.

5. Ajouter l'opérateur `+=` pour additionner deux `Position`, ce qui somme les coordonnées x et y de deux positions. Par exemple, si on additionne `(2, 3)` et `(1, 1)`, on obtient `(3, 4)`.
  
6. Ajouter les opérateurs `+` et `+=` pour additionner une `Position` et une `Direction`, ce qui permet de déplacer la position d'une case dans la direction donnée.

On souhaite pouvoir faire : 
```cpp
Position pos(2, 3);
Direction dir = Direction::Haut;
Position newPos { pos + dir }; // newPos devient (2, 2)
newPos += dir; // newPos devient (2, 1)
```

7. Ajouter une fonction `turn_right` qui prend une `Direction` et retourne la direction obtenue en tournant à droite. Par exemple, si on tourne à droite depuis `Direction::Haut`, on obtient `Direction::Droite`.

### Question 2 - Lecture de la carte

Écrire une fonction `read_input` qui prend en paramètre un fichier (une chaîne de caractère ou un inputStream (std::istream)) contenant la carte et qui retourne une **structure** de données représentant la carte (les positions des obstacles) ainsi que la position et direction initiales du garde.

vous êtes libres ici de représenter ces infos de carte comme vous le souhaitez mais vous devez garder en tête que vous devez pouvoir facilement savoir si une position est un obstacle ou non, et où se trouve la position initiale garde.

:::tip
Vous pouvez utiliser std::getline pour lire le fichier ligne par ligne:
```cpp
Input_Map parse_input(std::istream& input_stream) {
    //...
    for (std::string line{}; std::getline(input_stream, line, '\n') and line != "";) {
        // ...
    }
}
```
:::

### Question 3 - Simulation et résolution du problème

Dans cette partie on va simuler le mouvement du garde sur la carte et enregistrer les positions visitées. On va utiliser un `std::unordered_set<Position>` pour stocker les positions visitées, ce qui permet d'éviter les doublons et de vérifier rapidement si une position a déjà été visitée.
On pourrait également utiliser un `std::vector<Position>` mais cela nous obligerait à vérifier si la position a déjà été visitée avant de l'ajouter, ce qui est moins efficace. Ici on va donc utiliser la force des **hashmaps** pour stocker les positions visitées.

`std::unordered_set` est une structure de données qui permet de stocker des éléments uniques et de les rechercher rapidement. Elle utilise une fonction de hachage pour déterminer l'emplacement de chaque élément dans la table de hachage.
Elle fonctionne comme une `std::unordered_map` vu en cours mais sans valeur associée, on va juste stocker les positions visitées.

1. implementer une fonction de Hash pour la structure `Position` afin de pouvoir l'utiliser dans un `std::unordered_set`. 
  je vous donne le code suivant pour vous aider et qui permet de définir une fonction de hachage pour la structure `Position` utilisable par tous les conteneurs de la librairie standard qui utilisent des fonctions de hachage.
```cpp
namespace std {
    template <>
    struct hash<Position> {
        std::size_t operator()(const Position& pos) const {
            return /* */;
        }
    };
}
```

:::tip
Vous pouvez utiliser la technique de "folding hash" qui consiste à combiner les hash des coordonnées x et y (`std::hash<int>()(pos.x)`) par une opération **XOR** ou une multiplication par un nombre premier (ou autre technique de votre choix) afin de créer un hash unique pour la position.
L'idée ici est de convertir une position (x, y) en un entier unique qui représente cette position dans l'espace (et minimiser les collisions pour identifier de façon unique chaque position).
:::

---

Je vous donne la structure suivante pour représenter les informations souhaitées à la fin de la simulation :
```cpp
struct WalkResult {
    Position final_position;
    size_t steps_taken;
    std::unordered_set<Position> visited_positions;
};
```

2. Écrire une fonction qui prend en paramètre les informations de la carte (position du garde, direction initiale, obstacles) et qui simule le mouvement du garde en suivant les règles décrites. La fonction doit retourner un `WalkResult` contenant :
   - La position finale du garde après un certain nombre de pas (par example 1000 pas).
   - Le nombre de pas effectués.
   - Les positions visitées par le garde.


3. Tester votre fonction avec la carte d'example fournie et vérifier que les positions visitées sont correctes. Vous devez obtenir 41 positions visitées différentes. Vous pouvez obtenir le nombre de positions visitées en utilisant la méthode `size()` de `std::unordered_set`.

4. Tester maintenant votre fonction avec le fichier d'entrée fourni dans le sujet. (la réponse attendu est entre 5300 et 5500 positions visitées différentes).

**Vous pouvez télécharger le fichier d'entrée ici <a target="_blank" href={ useBaseUrl("/code/S2/input_guard_patrol.txt") } download={"input_guard_patrol.txt"}>input_guard_patrol.txt</a>.**

### Question 4 - Trouver les boucles

Je vous propose vous aussi de résoudre la partie deux étoiles de l'énoncé originale de l'Advent of Code.

:::warning
Cette partie est significativement plus difficile que la première.
:::

**Cette question comptera dans la note finale mais étant plus difficile que les questions précédentes, elle comptera peu dans la note finale.**

il s'agit de trouver le nombre de position actuellement vide de la carte pour lesquelles si on ajoute un obstacle, le garde se retrouve coincé dans une boucle infinie dans laquelle il ne peut pas sortir.

Par exemple dans notre carte d'exemple, si on ajoute un obstacle à la position (3, 6) juste à droit de la position initiale du garde, le garde se retrouve coincé dans une boucle infinie et ne peut pas sortir de la carte.

```
....#.....
....+---+#
....|...|.
..#.|...|.
....|..#|.
....|...|.
.#.O^---+.
........#.
#.........
......#...
```

un autre exemple de boucle avec un obstacle à la position (6, 7).

```
....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
......O.#.
#.........
......#...
```

:::tip
Pour résoudre ce problème on va devoir identifier une **boucle**. On pourrait se dire que si le garde revient à une position déjà visitée, c'est qu'il est dans une boucle. Cependant, ce n'est pas toujours vrai (voir le deuxième exemple de boucle ci-dessus) car si il repasse par une position déjà visitée mais dans une direction différente, il peut sortir de la boucle.

Je vous propose donc de créer une structure qui contient la position du garde ainsi que la direction dans laquelle il se déplace. On va appeler cette structure `GuardState`. On va ensuite utiliser un `std::unordered_set<GuardState>` pour stocker les états du garde (position + direction) visités. Si on rencontre un état déjà visité, c'est qu'on est dans une boucle.
Il nous faut ajouter les opérateurs `==` et `hash` pour la structure `GuardState` afin de pouvoir l'utiliser dans un `std::unordered_set`.

Enfin, il faut tester tout les ajouts possibles d'obstacles sur la carte et vérifier si le garde se retrouve dans une boucle. :warning: toutes les positions vides ne sont pas forcément des positions "intéressantes" pour ajouter un obstacle.
:::

:::info
Cet exercice est inspiré d'une question de l'Advent of Code 2024 Day 6 - Guard Gallivant (https://adventofcode.com/2024/day/6)
:::
## Exercice 3 - BONUS Noté - Hashing sur une structure

Cette question est un **Bonus noté** (elle permettra d'améliorer la note sans la pénalisé si non réalisée).

<details>
<summary> Hashing sur structure de carte </summary>

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
        name += '0' + std::to_string(card_value);
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
</details>
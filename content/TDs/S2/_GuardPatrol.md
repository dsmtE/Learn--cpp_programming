---
title: TD - Guard Patrol
---

Il s'agit d'un TD noté dans lequel nous allons mettre en application les notions des précédents CM (principalement Opérateurs, HashMap).

Advent of Code 2024 Day 6 - Guard Gallivant (https://adventofcode.com/2024/day/6)

## Contexte

Vous êtes un explorateur temporel qui a été envoyé dans le passé mais vous devez éviter de croiser les habitants de cette époque pour ne pas créer de paradoxes temporels. Il y a un garde qui patrouille dans la zone et vous devez prédire son parcours pour éviter de le croiser.

Ses mouvements sont simple et suivent un protocole strict :
1. Le garde se déplace d'une case dans la direction qu'il regarde.
2. S'il rencontre un obstacle, il tourne à droite

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

## Objectif

Votre objectif est de prédire le parcours du garde sur la carte et de déterminer les cases qu'il va visiter. Vous devez écrire un programme qui simule le mouvement du garde en fonction des règles décrites ci-dessus et qui "enregistre" les cases visitées.

## Exercice 1 - Préparation (Structures de données et Opérateurs)

### Directions et Position
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

## Exercice 2 - Lecture de la carte

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

## Exercice 3 - Simulation et résolution du problème

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

### BONUS - Trouver les boucles

Pour aller plus loin je vous propose vous aussi de résoudre la partie deux étoiles de l'énoncé originale de l'Advent of Code.

:::warning
Cette partie est significativement plus difficile que la première.
:::

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
---
title: TD7 - Structures
---

## Exercice 1 : déplacements

Vous êtes le pilote d'un sous-marin, vous avez reçu des ordres de mouvement sous la forme d'une instruction et d'une distance à parcourir. Vous devez écrire un programme qui permet de calculer la position du sous-marin après avoir effectué les mouvements reçus.

Votre position initiale est `(0, 0)` et vous pouvez vous déplacer dans les directions suivantes: `Up`, `Down`, `Forward`, `Backward`.

1. Écrire une **structure** `Position` qui permet de stocker les coordonnées du sous-marin.

2. Écrire un **enum** `Direction` qui permet de stocker les directions possibles.

3. Écrire une **structure** `Move` qui représente un mouvement sous la forme d'une direction et d'une distance à parcourir.

4. Écrire une fonction `moveSubmarine` qui permet de déplacer le sous-marin en fonction d'un mouvement. La fonction ne doit rien retourner et doit modifier la position du sous-marin passée en paramètre.

5. Écrire une fonction `display` qui permet d'afficher la position du sous-marin passée en paramètre.

Le but est d'indiquer la position du sous-marin après avoir effectué les mouvements suivants:

- `Forward 10`
- `Down 5`
- `Backward 3`
- `Up 2`
- `Forward 5`
- `Down 1`
- `Backward 2`
- `Forward 3`
- `Down 1`
- `Up 3`
- `Forward 1`
- `Down 5`
- `Backward 2`
- `Forward 6`

Vous pouvez représenter les mouvements sous la forme d'un vecteur de `Move`:

```cpp
std::vector<Move> moves = {
    {Direction::Forward, 10},
    {Direction::Down, 5},
    {Direction::Backward, 3},
    {Direction::Up, 2},
    {Direction::Forward, 5},
    {Direction::Down, 1},
    {Direction::Backward, 2},
    {Direction::Forward, 3},
    {Direction::Down, 1},
    {Direction::Up, 3},
    {Direction::Forward, 1},
    {Direction::Down, 5},
    {Direction::Backward, 2},
    {Direction::Forward, 6}
};
```

:::info
Exercice inspiré de de l'édition **2021** de l'**advent of code**: https://adventofcode.com/2021/day/2
:::

## Exercice 2 : combats de Pokémons

Un pokémon a un Nom, des Points de Vie, une Attaque et une Vitesse. Un combat entre deux Pokémons se déroule ainsi:
- À chaque tour, le pokémon avec la plus grande vitesse commence (si égalité, on choisit au hasard lequel de deux commence ce tour)
- Le pokémon attaquant réduit les Points de Vie de l'autre d'un montant égal à son attaque. Puis, si le deuxième pokémon n'est pas encore KO (Points de Vie encore > 0), il attaque à son tour

Faites une structure représentant un Pokémon, puis écrivez une fonction faisant le combat entre deux Pokémons.<br/>
Par exemple:

```cpp
Pokemon pokemon1{.nom = "Poke1", .points_de_vie = 50, .attaque = 10, .vitesse = 8};
Pokemon pokemon2{.nom = "Poke2", .points_de_vie = 30, .attaque = 20, .vitesse = 3};
combat(pokemon1, pokemon2);
```

doit afficher :
```
Tour 1:
Poke1 attaque, il reste 20 PV à Poke2.
Poke2 attaque, il reste 30 PV à Poke1.

Tour 2:
Poke1 attaque, il reste 10 PV à Poke2.
Poke2 attaque, il reste 10 PV à Poke1.

Tour 3:
Poke1 attaque, il reste 0 PV à Poke2.
Poke2 est KO, il ne peut pas attaquer.

Poke1 gagne!
```

Un dresseur a un Nom et 3 pokémons. Dans un combat entre deux dresseurs, ils font combattre leurs pokémons les uns après les autres, jusqu'à ce que tous les pokémons d'un des dresseurs soient KOs. (Attention, quand on Pokemon entame son deuxième combat, il doit garder les points de vie qu'il avait à la fin du premier combat, il ne doit pas recommencer avec ses points de vie max !)<br/>
Par exemple:

```cpp
Dresseur dresseur1{.nom = "Dresseur1", .pokemons = {
    Pokemon{.nom = "Dresseur1_Poke1", .points_de_vie = 5, .attaque = 10, .vitesse = 8},
    Pokemon{.nom = "Dresseur1_Poke2", .points_de_vie = 5, .attaque = 10, .vitesse = 8},
    Pokemon{.nom = "Dresseur1_Poke3", .points_de_vie = 5, .attaque = 10, .vitesse = 8},
}};
Dresseur dresseur2{.nom = "Dresseur2", .pokemons = {
    Pokemon{.nom = "Dresseur2_Poke1", .points_de_vie = 20, .attaque = 10, .vitesse = 3},
    Pokemon{.nom = "Dresseur2_Poke2", .points_de_vie = 20, .attaque = 10, .vitesse = 3},
    Pokemon{.nom = "Dresseur2_Poke3", .points_de_vie = 20, .attaque = 10, .vitesse = 3},
}};
combat(dresseur1, dresseur2);
```

doit afficher :
```
Tour 1:
Dresseur1_Poke1 attaque, il reste 10 PV à Dresseur2_Poke1.
Dresseur2_Poke1 attaque, il reste 0 PV à Dresseur1_Poke1.

Dresseur2_Poke1 gagne!

Tour 2:
Dresseur1_Poke2 attaque, il reste 0 PV à Dresseur2_Poke1.
Dresseur2_Poke1 est KO, il ne peut pas attaquer.

Dresseur1_Poke2 gagne!

Tour 3:
Dresseur1_Poke2 attaque, il reste 10 PV à Dresseur2_Poke2.
Dresseur2_Poke2 attaque, il reste 0 PV à Dresseur1_Poke2.

Dresseur2_Poke2 gagne!

etc...

Dresseur 2 a gagné!
```
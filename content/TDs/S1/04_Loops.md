---
title: TD4 - Boucles
sidebar_position: 4
---

## Exercice 1 (For)

Faire une boucle **for** qui affiche les nombres **pairs** inférieurs ou égal à un nombre entré par l'utilisateur de différentes façons:
  1. en utilisant un condition et l'opérateur **modulo**
  2. en utilisant le mot clé **continue**
  3. en utilisant une boucle bien choisie (un nombre **pair** est un nombre qui peut s'écrire comme le double d'un nombre entier)

:::tip
Vous pourrez utiliser **std::cin** pour demander le nombre maximum à l'utilisateur (aucune gestion d'une éventuelle erreur de saisie n'est demandée ici).
:::

## Exercice 2 (While)

1. Écrire une boucle **while** qui affichera les entiers entre `1` et `20`.
2. Écrire une boucle **while** qui affichera les `50` premiers multiples de `7`, chacun
sur une ligne de la forme: `5 fois 7 = 35`.
3. Refaire les deux questions précédentes en utilisant une boucle **for**.

## Exercice 3 (Somme d'entiers positifs)

Écrire un programme qui demande à l’utilisateur de saisir des entiers positifs (s’arrête dès que l’utilisateur saisit un entier négatif)


1. Gérer l'entrée utilisateur (et son arrêt) à l'aide d'une boucle **while** ou **do while**.
2. Afficher la **somme** des entiers positifs saisis par l’utilisateur.
3. Modifier le programme pour qu'il affiche également la **moyenne** des entiers positifs saisis par l’utilisateur.

:::info
Pour calculer la moyenne, il faut compter le nombre d'entiers positifs saisis par l'utilisateur.
Vous n'avez pas à stocker les entiers saisis par l'utilisateur (vous découvrirez comment faire cela dans le prochain chapitre).
:::

## Exercice 4 (rendu de monnaie)

Écrire un programme qui demande à l’utilisateur un montant en **euros** et affiche le nombre de billets et de pièces nécessaires pour rendre la monnaie avec le moins de billets et de pièces possible.

On suppose que l’on dispose de pièces de `1`, `2`, `5`, `10`, `20` et `50` centimes, de `1` et `2` euros ainsi que de billets de `5`, `10`, `20`, `50`, `100`, `200` et `500` euros.

:::tip
Utilisez un tableau pour stocker le nombre de pièces et de billets à rendre.

Utilisez un **algorithme glouton** qui consiste à regarder si on peut rendre la monnaie avec le plus gros billet ou pièce possible et à recommencer avec le billet ou la pièce suivante jusqu'à avoir rendu toute la monnaie.
:::

## Exercice 5 (entrée utilisateur)

Écrire un programme qui demande à l'utilisateur un nombre et affiche la table de multiplication de ce nombre.

Vous devrez gérer le cas où l'utilisateur saisit une valeur incorrecte (un nombre négatif ou une lettre par exemple) et redemander à l'utilisateur de saisir un nombre tant qu'il n'a pas saisi une valeur correcte.

Je vous invite à retourner voir l'[exercice 3](/TDs/S1/Conditions/#exercice-3) du **TD2** sur les conditions pour vous aider.

## Exercice 6 (conjecture de Syracuse)

Écrire un programme qui, à partir d’un **entier positif** saisi par l’utilisateur, affiche le nombre de termes de la suite de Syracuse nécessaires pour atteindre `1` (on inclut le terme de départ dans le décompte).

La suite de **Syracuse** est une suite d'entiers dans laquelle chaque terme est obtenu en appliquant une fonction à son terme précédent. Cette fonction est définie comme suit:

- si le terme est pair, le terme suivant est égal à la **moitié** du terme précédent. (x/2)
- si le terme est impair, le terme suivant est égal à **3** fois le terme précédent **plus 1** (3x+1).

Par exemple, si le terme de départ est `7`, la suite est :
`7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1, ...`

Ici, la suite atteint la valeur `1` au bout de 17 termes (incluant le terme de départ).

Vous remarquez qu’à la fin, une fois qu’on est tombé sur 1, la suite finit par répéter indéfiniment le cycle `4, 2, 1`.

Il est conjecturé que cette suite atteint toujours la valeur `1` quelque soit le terme de départ. Cela a d'ailleurs déjà été vérifiée numériquement jusqu’à 10^20 (par [Tomas Oliveira e Silva](https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-01031-5/S0025-5718-99-01031-5.pdf)).

## Exercice 7 (ASCII art)

1. Écrire un programme qui demande à l’utilisateur de saisir un **entier positif** et affiche un triangle rectangle de hauteur `n` comme dans l’exemple ci-dessous.

```bash title="exemple d'exécution"
Entrez un entier positif : 5
*
**
***
****
*****
```

2. Essayer d'afficher un sapin de noël, autrement dit un triangle rectangle isocèle de hauteur `n` et dont le sommet est composé d'une seule étoile.

```bash title="exemple d'exécution"
Entrez un entier positif : 3
  *
 ***
*****
```

3. Essayer d'afficher les contours d'un carré de côté `n` comme dans l’exemple ci-dessous.

```bash title="exemple d'exécution"
Entrez un entier positif : 5
*****
*   *
*   *
*   *
*****
```

## Exercice 8 (Le juste prix)

Un nombre entier est tiré au hasard entre `1` et `100` (inclus).

Le joueur doit deviner ce nombre en un minimum de tentatives.

À chaque tentative, le programme indique au joueur si le nombre à deviner est plus grand ou plus petit que celui qu’il a proposé.

Le programme s’arrête lorsque le joueur a trouvé le nombre mystère.

:::info
Pour générer un nombre aléatoire, vous pouvez utiliser la fonction [**rand()**](https://en.cppreference.com/w/cpp/numeric/random/rand) de la bibliothèque **cstdlib**.

Elle retourne un nombre entier aléatoire entre **0** et **RAND_MAX** (une constante définie dans la bibliothèque **cstdlib**).

Pour obtenir un nombre aléatoire entre **1** et **100**, on peut utiliser l'opérateur **modulo** `%`:

```cpp
std::rand() % 100 + 1
```

Pour que le générateur de nombres aléatoires ne génère pas toujours la même séquence de nombres, il faut l’initialiser avec une valeur différente à chaque exécution du programme.

C'est avec la fonction [**srand()**](https://en.cppreference.com/w/cpp/numeric/random/srand).

On peut utiliser la fonction [**time()**](https://en.cppreference.com/w/cpp/chrono/c/time) de la bibliothèque **ctime** pour obtenir l'heure actuelle en secondes et l'utiliser comme valeur d'initialisation du générateur de nombres aléatoires.

```cpp
#include <cstdlib>
#include <ctime>
#include <iostream>
 
int main() 
{
  // Initialisation du générateur de nombres aléatoires avec la fonction time()
  std::srand(std::time(nullptr));
  int random_variable { std::rand()};
  std::cout << "Random value between 0 and "<< RAND_MAX <<" : " << random_variable << std::endl;
}
```

Il existe une façon plus moderne de générer des nombres aléatoires à partir de **C++11**, nous découvrirons cela au prochain semestre.
:::

---
author: Enguerrand DE SMET
geometry: margin=2cm
listings-disable-line-numbers: true

sidebar_position: 0
---

:::info
Sujet du TP noté d'algorithmique et programmation (premier semestre).

Il s'est avéré que le sujet était trop long pour être réalisé en 1h30, il est plutôt adapté pour 2h.
:::

# Algorithmique et Programmation S1

Vous avez **1h30** pour réaliser ce TP noté.

Vous devez rendre votre travail dans un dossier spécifique contenant les fichiers sources de vos programme.

> En mode examen sur les machines de l'université vous devez directement travail dans le dossier dédié à l'examen pour que votre travail ne soit pas perdu !

> **Notation** :
> - **18** points pour les exercices (+ **2** points bonus)
> - **2** points sur 2 piliers d'évaluation suivants:
> 
>   1. Maîtrise générale des concepts (variables, tableaux, fonctions, structures, ...)
>   2. Qualité du code (indentation, nommage, commentaires si nécessaire...)
> 
> **Note finale** = **18** + **2**(Bonus) + **2** = **22** arrondie à **20**.

## Aide préliminaire

- Il faut inclure la bibliothèque `iostream` pour utiliser `std::cout` et `std::endl` qui permettent respectivement d'afficher du texte et de passer à la ligne.
- Il faut inclure respectivement les  bibliothèques `string`, `vector` et `array` pour utiliser `std::string`, `std::vector` et `std::array`.
- Pour convertir un **type** en un autre (cast), il faut utiliser la syntaxe suivante:
```cpp
std::static_cast<type>(variable)
```
- Pour compiler manuellement un programme, il faut utiliser la commande `g++` suivie du nom du fichier source et de l'option `-o` suivie du nom du fichier exécutable à générer (ex: `g++ main.cpp -o main`). Nous préciserons en plus l'option `-Wall` pour afficher les **warnings** (messages d'avertissement) et l'option `-std=c++17` pour utiliser la version **C++17** du langage.
- Ligne de compilation (pour un fichier `ex02.cpp`):
```bash
g++ ex02.cpp -o ex02 -Wall -std=c++17
```
## Exercice 1 (questionnaire) (3Pts: 4 questions de 0.75)

1. Quelle est la différence entre un tableau **statique** et un tableau **dynamique** ?
2. Quelle est la différence entre l'opérateur `=` et l'opérateur `==` ?
3. Qu’entendez-vous par passage par **copie** et passage par **référence**(`&`) ?
4. A quoi servent les mots clés `const` et `unsigned` ? Quand et pourquoi les utiliser ?

## Exercice 2 (maximum) (2Pts)

1. Écrire une fonction `max` qui prend en paramètre (par **référence constante**) un tableau d'**entiers** (tu es libre d'utiliser un tableau **dynamique** (`std::vector`) ou **statique** (`std::array`) ) et retourne la valeur maximale du tableau.

2. Utiliser la fonction `max` pour afficher la valeur maximale des tableaux suivants:
   - `{1, 2, 3, 4, 5, 6, 7, 8, 9}`
   - `{9, 8, 7, 6, 5, 4, 3, 2, 1}`
   - `{1, 23, 7, 32, 5, 43}`

## Exercice 3 (voyelles) (3Pts)

1. Écrire une fonction `isVowel` qui prend en paramètre un **caractère** et retourne `true` si le caractère est une voyelle, `false` sinon.
    > On considère que le caractère est une voyelle si c'est un des caractères suivants: `a`, `e`, `i`, `o`, `u` ou `y`.
    > Attention, il faut compter les voyelles en majuscules et en minuscules.
    > On peut utiliser la fonction `std::tolower` (de la bibliothèque `cctype`) pour convertir un caractère en minuscule.
    > On peut également utiliser la représentation **ASCII**.

Quelques codes **ASCII** utiles:

| A $\rightarrow$  Z | 0 $\rightarrow$ 9 | a $\rightarrow$ z |
| - | - | - |
| 65 $\rightarrow$ 90 | 48 $\rightarrow$ 57 | 97 $\rightarrow$ 122 |

1. Écrire une fonction `countVowels` qui prend en paramètre une **chaîne de caractères** (`std::string`) et retourne le nombre de voyelles dans la chaîne.
2. Afficher le nombre de voyelles dans les chaînes suivantes:
   - `Hello World!`
   - `Ceci est un test`
   - `Je suis une phrase avec des voyelles`

## Exercice 4 (Géométrie) (2,5Pts + 1Pts bonus)

On dispose de la structure `Point` suivante:
```cpp
struct Point {
    float x;
    float y;
};
```

1. Écrire une fonction `distance` qui prend en paramètre deux **points** et retourne la distance entre les deux points.

On utilisera la signature suivante:
```cpp
float distance(Point const& p1, Point const& p2);
```

> Pour rappel, la distance entre deux points `p1` et `p2` est égale à la **racine carrée** de la **somme des carrés** des différences des coordonnées des points.
>
> $$
> \text{distance} = \sqrt{(p1.x - p2.x)^2 + (p1.y - p2.y)^2}
> $$

>  Vous pouvez utiliser les fonctions `sqrt` et `pow` de la bibliothèque `cmath` pour calculer la racine carrée et la puissance d'un nombre.

```cpp
#include <cmath>
float sqrt_test { std::sqrt(4) }; // racine carrée de 4 = 2
float pow_test { std::pow(2, 3) }; // 2^3 = 8
```

**On considérera que la fonction précédente fonctionne pour la suite de l'exercice si ce n'est pas le cas.**

2. Écrire une fonction `isInCircle` qui prend en paramètre un **point** (`p`), le **centre d'un cercle** (`center`) et son **rayon** (`radius`) et retourne `true` si le point `p` est dans le cercle, `false` sinon.

On utilisera la signature suivante:
```cpp
bool isInCircle(Point const& p, Point const& center, float radius);
```

3. Utiliser la fonction `isInCircle` pour afficher si les points suivants sont dans le cercle de centre `(0, 1)` et de rayon `2.4f`:
   - `(0, 0)`
   - `(1, 1)`
   - `(3, 4)`

4. (**BONUS**) Écrire une fonction `isCirclesIntersect` qui prend en paramètre deux cercles (sous la forme de deux points et deux rayons) et retourne `true` si les deux cercles s'intersectent, `false` sinon.

> Deux cercles s'intersectent si leurs centres sont à une distance inférieure à la somme de leur rayon.

5. (**BONUS**) Définir un structure `Circle` qui contiendra les attributs suivants:
    - `center` : centre du cercle (utiliser la structure `Point`)
    - `radius` : rayon du cercle

    Réécrire les deux fonctions précédentes (surcharge) en utilisant la structure `Circle` à la place des paramètres `Point` et `float`.

6. (**BONUS**) Utiliser la fonction `isCirclesIntersect` pour afficher si les deux cercles suivants s'intersectent:
   - Cercle 1: centre `(0, 0)`, rayon `1`
   - Cercle 2: centre `(2, 0)`, rayon `1`

## Exercice 6 (Robot) (7.5Pts (10 questions de 0.75) + 1Pts bonus)

Pour cet exercice, je vous fourni un dossier dédié à l'exercice. 

Ce dossier contient un sous-dossier `src` avec les fichiers sources ainsi qu'un fichier `CMakeLists.txt` pour compiler le programme.

la structure du dossier ressemble à ça:

```
robot/
L src/
| L main.cpp
| L direction.cpp
| L direction.hpp
| L point.cpp
| L point.hpp
| L robot.cpp
| L robot.hpp
L CMakeLists.txt
```

> #### Compilation manuelle avec cmake
> 
> Ouvrir un terminal dans le dossier `robot` contenant le fichier `CMakeLists.txt` et exécuter les commandes suivantes:
> 
> - `mkdir build` : créer un dossier `build` (qui va servir à stocker les fichiers de compilation)
> - `cd build` : se déplacer dans le dossier `build`
> - `cmake ..` : générer les fichiers de compilation dans le dossier `build` à partir du fichier `CMakeLists.txt` du dossier parent
> - `make` : compiler le programme (générer l'exécutable à partir des fichiers de compilation **Makefile**)
> - `./main` : exécuter le programme (remplacer `main` par le nom de l'exécutable généré)
> (dans notre cas le **cmake** est configuré pour générer un exécutable `robot` dans le dossier `bin` on peut donc exécuter le programme depuis le dossier `build` avec la commande `../bin/robot`)
>
> **".."** signifie le dossier parent.
> 
> **"."** signifie le dossier courant.

1. Le fichier `direction.hpp` contient un enum `Direction` avec les valeurs suivantes :
    - `north` (Nord)
    - `south` (Sud)
    - `east` (Est)
    - `west` (Ouest)

    Créer le **prototype** d'une **fonction** `to_string` dans le fichier `direction.hpp` qui prends en paramètre une **direction** et retourne une **chaîne de caractères** (`std::string`) représentant cette Direction (ex: `Direction::north` $\rightarrow$ `"north"`).

2. Créer la définition de la **fonction** `to_string` dans le fichier `direction.cpp`.

3. Définir une structure `Point` dans le fichier `point.hpp`.
    Elle contiendra les attributs suivants :
       - `x` : position en x (utiliser le type `int`)
       - `y` : position en y (utiliser le type `int`)

    La structure devra contenir les **méthodes** suivantes :
    - `void display()` : affiche les coordonnées du point sous la forme `(x, y)`.
    - `void move(Direction const d, unsigned int const n)` : déplace le point de `n` cases dans la direction `d`.

4. Implémenter les **méthodes** de la structure `Point` dans le fichier `point.cpp`.

> On considère que la direction `north` correspond à une augmentation de la coordonnée `y` (`south` une diminution de  `y`) et que la direction `east` correspond à une augmentation de la coordonnée `x` (`west` une diminution de  `x`).
> $$
> \begin{aligned}
> y & \\
> \uparrow & \\
>  & \rightarrow x \\
> \end{aligned}
> $$

5. Créer une structure `Robot` dans le fichier `robot.hpp` qui contiendra les attributs suivants :
    - `name` : nom du robot (`std::string`)
    - `position` : position du robot (utiliser la structure `Point`)
    - `direction` : direction du robot (utiliser l'enum `Direction`)

    La structure devra contenir les **méthodes** suivantes :
    - `void display()` : affiche les informations du robot sous la forme `name((x, y), direction)`.
    - `void turnLeft()` : tourne le robot de **90°** vers la gauche. (ex: `north` devient `west`)
    - `void turnRight()` : tourne le robot de **90°** vers la droite.
    - `void move(unsigned int const n)` : déplace le robot de `n` cases dans la direction du robot.

6. Implémenter les méthodes de la structure `Robot` dans le fichier `robot.cpp`.

7. Ajouter le prototype d'une fonction `createRobotName` dans le fichier `robot.hpp`, elle retournera un nom de robot généré aléatoirement sous la forme d'une chaîne de caractère avec un format contenant 2 lettres majuscules suivies de 3 chiffres aléatoires. (ex: `AB123`).

8. Écrire la définition de la fonction `createRobotName` dans le fichier `robot.cpp`.

Pour générer un nombre aléatoire, on peut utiliser la fonction `std::rand` (elle retourne un nombre aléatoire entre **0** et **RAND_MAX**).

On utilisera la fonction `std::srand` pour initialiser le générateur de nombres aléatoires avec la fonction `std::time` pour que les nombres générés soient différents à chaque exécution du programme.

Pour générer une lettre aléatoire, on peut utiliser la fonction `rand` et l'opérateur modulo (`%`) pour générer un nombre aléatoire entre **0** et **25**:

```cpp
#include <cstdlib> // pour utiliser la fonction std::rand
#include <ctime> // pour utiliser la fonction std::time
int main() {
  // initialiser le générateur de nombres aléatoires
  // A utiliser une seule fois dans le programme (dans le main par exemple)
  std::srand(std::time(nullptr));  
  // générer un nombre aléatoire entre 0 et 25 (+1 pour inclure 25)
  int random_number { std::rand() % (25+1) };
  return 0;
}
```

On peut se servir de ce nombre pour générer une lettre majuscule (en utilisant la représentation **ASCII** des lettres majuscules).
Quelques codes **ASCII** utiles sont indiqués à l'exercice **3**.

1.  Ajouter le prototype d'une fonction `createRobot` dans le fichier `robot.hpp`, elle prendra en **paramètre** un **point** et une **direction** et retournera un robot avec les paramètres passés en argument. le nom du robot sera généré aléatoirement avec la fonction `createRobotName`.

2.   Compléter la fonction main du fichier `main.cpp` pour effectuer les actions suivantes:

- Créer un robot avec la fonction `createRobot` à la position `(0, 0)` et la direction initiale `north`.
- Afficher le robot avec la méthode `display`.
- Effectuer les actions suivantes et afficher la valeur du robot avec la méthode `display`une fois les actions effectuées:
  - Tourner le robot à **gauche**
  - Déplacer le robot de 3 cases
  - Tourner le robot à **droite**
  - Déplacer le robot de 5 cases
  - Déplacer le robot de 2 cases
  - Tourner deux fois le robot à **gauche**
  - Déplacer le robot de 1 case
  - Tourner le robot à **droite**
  - Déplacer le robot de 2 cases
    
> Utiliser les **méthodes** de la structure `Robot` pour effectuer les actions.

11. (**Bonus**) Utiliser un tableau pour stocker les actions à effectuer et les exécuter dans une boucle.

> Vous pouvez utiliser des **caractères** (avec une `std::string` (qui est un tableau de caractères) ou un `std::vector`) pour symboliser les actions à effectuer:
> - `L` : tourner à gauche
> - `R` : tourner à droite
> - `3` : déplacer le robot de 3 cases (de même pour tout les autres chiffres)
> - Seulement les **chiffres** `1` à `9` sont à considérés, ainsi "12" correspond à un déplacement de 1 case puis un autre de 2 cases.

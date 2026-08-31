---
title: Retours Généraux
tags:
    - C++
---

## Bonnes pratiques en C++

### Dossier Build et Git
 
Il est important de ne pas inclure le dossier `build` dans le dépôt Git. Ce dossier contient les fichiers **temporaires** générés lors de la compilation du projet (exécutables, fichiers objets, ...).
Ils sont propres à chaque machine et ne doivent pas être versionnés car cela prend de la place inutilement sur le dépôt Git.

De plus, un développeur ne souhaite pas lancer un exécutable inconnu (risque de piratage, virus, ...) et préférera compiler lui-même le projet.

Cela peut se faire en ajoutant le dossier `build` dans le fichier `.gitignore` à la racine du dépôt Git.

### Tableau statique vs dynamique

Dans le projet TicTacToe, la grille est fixe (3x3). Cela signifie que la taille de la grille est connue à la compilation et ne change pas pendant l'exécution du programme.
Dans ce cas, il est préférable d'utiliser un tableau **statique** (tableau de taille fixe) plutôt qu'un tableau **dynamique** (tableau de taille variable).

Un tableau statique est en général plus performant qu'un tableau dynamique car il est alloué en une seule fois et ne nécessite pas de gestion de la mémoire à l'exécution (contrairement à un tableau dynamique qui nécessite une allocation et une libération de la mémoire si on veut changer sa taille).

Cependant j'ai vu certains d'entre vous utiliser les tableaux statiques du **C** (`int grille[3][3]`) plutôt que les tableaux statiques du **C++** (`std::array`).
Il est préférable d'utiliser `std::array` qui est plus pratique que les tableaux statiques du C.
`std::array` permet de connaître sa taille (avec la méthode `size()`) et de passer des tableaux en paramètre de fonction sans qu'ils se transforment en pointeurs (contrairement aux tableaux statiques du C).

Dans le cas où un pointeur vers un tableau est nécessaire (comme souvent on OpenGl par exemple), il est quand même préférable d'utiliser un `std::vector` ou un `std::array` et d'utiliser la méthode `data()` pour obtenir un pointeur vers les données.

### Namespace et header

Évitez d'utiliser `using namespace std;` dans les **headers**. Faire `using namespace` dans un header revient à le faire dans tous les fichiers qui incluent ce header.
C'est bien pratique pour éviter les préfixes `std::` mais cela peut créer des conflits de noms de variables ou de fonctions.
Il est préférable de préfixer les éléments de la STL avec `std::` dans les headers pour éviter ces conflits.

Il est possible d'utiliser `using namespace std;` dans les fichiers `.cpp` et dans ce cas de figure, le using namespace ne sera effectif que dans le fichier `.cpp` en question.
Encore mieux, il est possible de faire un **using** dans un "scope" plus restreint (dans une fonction par exemple) pour éviter d'importer tout le namespace std dans tout le fichier.
Il est aussi possible de faire un **using** plus précis comme `using std::string;` pour n'importer que les éléments de la STL qui nous intéressent et pouvoir les utiliser sans préfixe sans pour autant importer tout le namespace.

### include guards

Les **include guards** sont des directives de préprocesseur qui permettent d'éviter les inclusions multiples d'un même header.
Cela permet de s'assurer que le header ne sera inclus qu'une seule fois afin d'éviter les problèmes de liens multiples.
Cela se fait en **C++** en ajoutant la directive `#pragma once` au début du header. ([lien du cours](/Lessons/Fundamentals/Headers#pragma-once-éviter-les-doublons)).

Cependant, de part l'historique de C++ et sa rétrocompatibilité avec le C, il est encore courant de voir des include guards écrits de la manière suivante :

```cpp
#ifndef NOM_DU_HEADER_H
#define NOM_DU_HEADER_H

// Contenu du header

#endif
```

En pratique (sauf dans de très rares cas), cela revient au même que `#pragma once` mais est un peu plus verbeux et moins lisible. C'est pourquoi en C++ moderne, on préfère utiliser `#pragma once`.
Cela permet aussi de maintenir le code plus facilement, pas besoin de se soucier de trouver un nom unique pour les include guards, pas besoin de changer le nom de l'include guard si on change le nom du header, etc...

J'ai beaucoup vu cette forme d'include guards (avec `#ifndef`, `#define`, `#endif`) dans vos headers. Pour les prochains projets, je vous conseille plutôt d'utiliser `#pragma once`.

### Header vide

J'ai vu que certains d'entre vous ont créé des headers vides (sans déclaration de classe, fonction, variable, ...).
Ce n'est pas nécessaire, surtout si vous n'avez rien à déclarer dans le header car il s'agit d'un fichier vite qui n'apporte rien. Il n'est pas systématique d'avoir toujours un header associé à un fichier source.

### Fonctions et headers

Une fonction doit être déclarée (et pas nécessairement implémentée) avant d'être utilisée.
Cela signifie que si l'on appelle une fonction dans un fichier source, il faut que la déclaration de la fonction soit présente avant l'appel de la fonction.
Cela peut se faire en incluant le **header** qui contient la déclaration de la fonction ou en implémentant la fonction avant l'appel.

:warning: Cependant il ne faut pas mettre l'implémentation de la fonction dans le header.
Il faut seulement mettre la déclaration de la fonction dans un header et l'implémentation dans un fichier source.
En effet, si on met l'implémentation dans le header, cela signifie que le code sera copié-collé à chaque inclusion du header.
Cela peut créer des problèmes de liens multiples (définition multiple de la même fonction ou variable pour l'étape de linkage) et potentiellement augmenter le temps de compilation.

---

De plus, une fonction n'a besoin d'être déclarée dans un header que si elle est utilisée dans un autre fichier source.
Si la fonction est utilisée uniquement dans le fichier source (`.cpp`), il n'est pas nécessaire de la déclarer dans le header.
Par convention certains préfèrent tout de même déclarer toutes les fonctions dans le header pour plus de clarté mais ce n'est pas obligatoire.

Par exemple, si on a un fichier `main.cpp` qui contient la fonction `main()` et une fonction `hello()` qui est appelée dans `main()`, il n'est pas nécessaire de déclarer `hello()` dans un header `main.hpp` si `hello()` est utilisée uniquement dans `main.cpp`.

### Gestion des includes

Il est important de bien gérer les inclusions dans les headers. En effet, si on inclut des headers inutilement, cela peut augmenter le temps de compilation et créer des dépendances inutiles.
Il est donc important d'inclure uniquement les headers nécessaires dans un header.
Exemple, si dans un header une fonction retourne un `std::vector` il est nécessaire d'inclure le header `#include <vector>` pour que la signature de la fonction soit valide.
Mais si l'on utilise un `std::vector` uniquement dans la fonction, il suffit d'inclure le header `#include <vector>` dans le fichier source (`.cpp`) et non dans le header.

### inclusion relative

Il n'est pas nécessaire d'inclure les headers avec le chemin complet.
En effet, si les headers sont dans le même dossier que le fichier source, il suffit d'inclure le header avec le chemin relatif par rapport au fichier source.
Dans le cas de cmake, si le dossier `include` est bien configuré (`include_directories()`), il suffit d'inclure le header avec `#include <nom_du_header.h>` par rapport au dossier `include` (ce dossier include peut être le dossier `src` lui même).

### Variables globales

Les variables globales sont des variables qui sont déclarées en dehors de toute fonction. Elles sont accessibles partout dans le fichier. 
Cela peut être pratique pour partager des données entre plusieurs fonctions mais cela peut aussi rendre le code moins lisible et plus difficile à maintenir.

Il est préférable d'éviter les variables globales autant que possible.
En effet, les variables globales peuvent être modifiées de manière inattendue par n'importe quelle fonction du programme.
Cela peut rendre le code difficile à comprendre et à déboguer. Il est préférable de passer les variables en paramètre des fonctions si elles sont utilisées par plusieurs fonctions.

De plus, quand elles sont utilisées dans des headers, elles sont copiées dans chaque fichier source qui inclut le header.
Cela peut créer des problèmes de liens multiples (définition multiple de la même variable) ou des comportements inattendus (on s'attend à ce que la variable soit partagée entre les fichiers mais en fait chaque fichier a sa propre copie de la variable).

Il existe des mot clés comme `extern` (ou encore `static`) qui permettent de définir des variables "globales" partagées entre plusieurs fichiers sources.
Mais c'est généralement signe d'un problème d'architecture et il est préférable de passer par des paramètres de fonctions ou des classes pour partager des données entre plusieurs parties du programme.
Ou même quand c'est nécessaire un singleton (mais c'est un autre sujet).

### Condition booléenne

J'ai souvent vu des conditions du type `if (variable == true)` ou `if (variable == false)`.
Cela n'est pas nécessaire car la condition est déjà un booléen. Il est donc préférable d'écrire directement `if (variable)` ou `if (!variable)`. C'est à mon sens plus court et plus lisible.

### Aléatoire

En informatique, on a souvent besoin de générer des nombres aléatoires. Cela peut être utile pour simuler des comportements aléatoires, pour mélanger des éléments, pour générer des données de test, ...

Mais le "vrai" aléatoire n'existe pas en informatique. En effet, les ordinateurs sont des machines déterministes, c'est-à-dire qu'ils exécutent des instructions de manière séquentielle et prévisible. Cela signifie que si on donne les mêmes entrées à un programme, on obtiendra toujours les mêmes sorties (normalement 🙃).

On parle alors de **générateurs de nombres pseudo-aléatoires** (**PRNG**). Ces générateurs produisent une séquence de nombres qui semble aléatoire mais qui est en fait déterministe. Cela signifie que si on donne la même graine (seed) à un générateur de nombres pseudo-aléatoires, on obtiendra la même séquence de nombres.

Pour générer des nombres aléatoires on peut utiliser les fonctions `rand()` et `srand()` de la bibliothèque standard.
`srand()` permet de définir la graine du générateur de nombres pseudo-aléatoires et `rand()` permet de générer un nombre aléatoire.

Pour initialiser le générateur de nombres pseudo-aléatoires avec une graine aléatoire, on peut utiliser la fonction `time()` de la bibliothèque standard. Cette fonction renvoie le nombre de secondes écoulées depuis le 1er janvier 1970. Cela permet d'initialiser le générateur avec une valeur qui change à chaque exécution du programme.

```cpp
#include <cstdlib>
#include <ctime>

int main() {
    srand(time(nullptr)); // Initialisation du générateur de nombres pseudo-aléatoires avec une graine aléatoire
    int random_number { rand() }; // Génération d'un nombre aléatoire
}
```

`rand()` nous donne un nombre aléatoire entre 0 et `RAND_MAX` (une constante définie dans la bibliothèque standard).
Pour obtenir un nombre aléatoire dans un intervalle donné, on peut utiliser une formule du type `rand() % (max - min + 1) + min`.

Cependant, il faut faire attention à ne pas appeler `srand(time(nullptr))` à chaque fois qu'on a besoin d'un nombre aléatoire.
Si on appelle `srand(time(nullptr))` plusieurs fois dans la même seconde, on obtiendra la même graine et donc la même séquence de nombres aléatoires pour chaque appel à `rand()`.

Il est donc préférable d'appeler `srand(time(nullptr))` par exemple au **début du programme** pour initialiser le générateur de nombres pseudo-aléatoires avec une graine aléatoire.

---

En C++ moderne, on utilise plutôt la bibliothèque `<random>` qui fournit des générateurs de nombres pseudo-aléatoires plus puissants et plus flexibles que `rand()` et `srand()`.
Cette bibliothèque fournit des classes qui permettent de générer des nombres aléatoires selon différentes distributions (uniforme, normale, ...). 

Voici un exemple d'utilisation pour générer un nombre aléatoire entre **0** et **100** :

```cpp
#include <random>

int main() {
    std::random_device rd {}; // Objet permettant de générer une graine aléatoire (similaire à srand(time(nullptr)))
    std::mt19937 gen(rd()); // Générateur de nombres pseudo-aléatoires Mersenne Twister (un des générateurs les plus performants)
    std::uniform_int_distribution<> dis(0, 100); // Distribution uniforme entre 0 et 100

    int random_number { dis(gen) }; // Génération d'un nombre aléatoire
}
```

C'est cette méthode que nous utiliserons principalement au second semestre.

### Classe vs structure

Jusqu'à présent, nous avons utilisé uniquement des **structures** pour représenter les données. Une structure est simplement un regroupement de données (membres) qui peuvent être de différents types.
Mais quand on parle de programmation orientée objet, on parle souvent de **classe**. Mais alors quelle est la différence entre une **classe** et une **structure** ?
Nous n'avons pas encore vu la notion de **visibilité** des membres mais il est possible de déclarer des membres **privés** et **publics**.
Les membres privés sont accessibles uniquement à l'intérieur de la classe, alors que les membres publics sont accessibles de l'extérieur de la classe (avec la syntaxe `objet.membre`).

En C++, la seule différence entre une **classe** et une **structure** est la **visibilité par défaut des membres**.
Dans une **classe**, les membres sont **privés** par défaut, alors que dans une **structure**, ils sont **publics** par défaut.
Mais il est tout à fait possible de déclarer une classe avec des membres publics et une struct avec des membres privés.
Cela n'a pas d'impact sur la performance du programme, c'est juste une question de style et de convention.
En général, on utilise une **classe** pour représenter un objet avec des méthodes et des membres privés (qui permettent d'encapsuler les données et masquer le comportement interne de l'objet) et une **structure** pour représenter un simple regroupement de données (ou la majorité des membres et méthodes est publique).
Vous découvrirez le reste de la programmation orientée objet (héritage, polymorphisme, ... ) l'année prochaine.

## Architecture

### Tableau 1D vs 2D

Dans le projet TicTacToe, la grille était représentée par un tableau 1D.
Cela permet de simplifier l'accès aux éléments de la grille (grâce à une seule dimension) et de réduire la complexité de l'algorithme.

J'ai vu que certains d'entre vous ont utilisé un tableau 2D pour représenter la grille.
Cela fonctionne aussi mais il faut travailler avec des coordonnées (ligne, colonne) pour accéder aux éléments de la grille (cela peut être un avantage ou un inconvénient selon le contexte).

Cela va avoir un impact si vous utilisez un tableau dynamique (std::vector) pour représenter la grille.
Un tableau 2D est en fait un tableau de tableaux (un tableau de pointeurs vers des tableaux).
Cela peut être moins performant qu'un tableau 1D car les éléments de la grille ne sont pas contigus en mémoire (contrairement à un tableau 1D).

Il est donc préférable d'utiliser un tableau 1D pour représenter la grille si vous voulez optimiser la performance de votre programme.

Dans notre cas c'est négligeable car la grille est petite, mais c'est une bonne habitude à prendre (**c'est pour cela que je vous l'avais demandé**).

## Faire des fonctions

J'ai vu sur certains projets des fonctions (**main**) très longues (+ de 150 lignes). Cela rend le code **difficile** à lire et à maintenir.
Il est préférable de découper le code en **fonctions** plus petites et plus spécialisées.
Cela permet de mieux organiser le code, de le rendre plus lisible et de faciliter la réutilisation des fonctions.

Par exemple toute la boucle qui demande un coup au joueur et vérifie si le coup est valide pourrait être mise dans une fonction `ask_valid_position_from_user()`.

Si il y a une initialisation plus complexe à faire, cela pourrait être mis dans une fonction `initialize_game()` (pour choisir le premier joueur aléatoirement par exemple, etc).

## TicTacToe

### Vérification de victoire

J'ai vu beaucoup d'implémentations de la vérification de victoire qui consiste à vérifier toutes les lignes, colonnes et diagonales pour voir si un joueur a gagné. C'est une solution qui fonctionne mais qui est un peu "répétitive" et qui peut être améliorée.

Une version plus élégante consiste à vérifier uniquement la ligne, la colonne et la diagonale où le dernier coup a été joué. Cela permet de réduire le nombre de vérifications à faire. En effet, si un joueur a gagné, c'est forcément sur la ligne, la colonne ou la diagonale où le dernier coup a été joué.

Cela réduit le nombre de vérifications à faire à 3 ou 4 (ligne, colonne, 1 ou 2 diagonales) au lieu de 8 (3 lignes, 3 colonnes, 2 diagonales), c'est donc plus performant et plus simple à implémenter (C'est d'autant plus vrai si la grille est plus grande comme pour un puissance 4).

### Choix aléatoire de l'IA

J'ai vu pas mal d'implémentations de l'IA qui consistent à choisir une position aléatoire et recommencer si la position est déjà occupée. C'est une solution qui fonctionne mais qui n'est pas très élégante. Si la grille est presque pleine, il y a de fortes chances que l'IA doive recommencer plusieurs fois (et possiblement très longtemps) avant de trouver une position libre. Il y a plusieurs façons d'éviter cela.

On peut lister toutes les positions libres puis choisir parmi ces positions. Cela permet de garantir que l'IA choisira une position libre à chaque coup.

Sinon il est possible de choisir une position aléatoire puis, si la position est déjà occupée, aller sur la position suivante (et ainsi de suite jusqu'à trouver une position libre). Cela permet de garantir que l'IA choisira une position libre en un nombre fini de coups. :warning: Cette méthode est biaisé car la probabilité de choisir une position libre (parmi les restantes) n'est pas uniforme.

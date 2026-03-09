---
title: Retours Généraux
tags:
    - C++
---

## Dossier Build et Git
 
Il est important de ne pas inclure le dossier `build` dans le dépôt Git. Ce dossier contient les fichiers **temporaires** générés lors de la compilation du projet (exécutables, fichiers objets, ...).
Ils sont propres à chaque machine et ne doivent pas être versionnés car cela prend de la place inutilement sur le dépôt Git et cela va aussi créer des conflits inutiles si plusieurs personnes travaillent sur le même projet.

Cela peut se faire via un fichier `.gitignore` à la racine du dépôt Git.

## Indentation

Pensez à bien indenter le code correctement: ce n'est pas juste pour faire joli, c'est aussi pour une structure claire. Cela vous permet de vous y retrouver plus facilement, et aide aussi les autres à lire et comprendre votre travail.

## Système de coordonnées (1D vs 2D)

Certains d'entre vous ont utilisé un système de coordonnées 1D (un seul entier pour représenter une position sur le plateau), alors que d'autres ont utilisé un système 2D (une paire d'entiers pour représenter les coordonnées x et y). Les deux approches sont valides, mais il faut rester cohérent dans tout le code. Si vous utilisez un système 1D, assurez-vous que toutes les fonctions et méthodes utilisent ce système, idem pour le système 2D. Ne mélangez pas les deux approches dans le même projet.
J'ai vu à plusieurs reprises des fonctions qui passent d'un système à l'autre, ce qui complique inutilement le code et peut introduire des erreurs. Parfois, c'est pour pallier un problème de retour de fonction (ex. : on veut retourner deux coordonnées x et y, mais on ne peut retourner qu'une seule valeur). Dans ce cas, il vaut mieux utiliser une structure pour encapsuler les deux coordonnées, plutôt que de mélanger les systèmes (ou utiliser des références ou des pointeurs pour retourner plusieurs valeurs).

## Tableaux C vs std::array ou std::vector

Il est préférable d'utiliser les conteneurs de la bibliothèque standard C++, comme **std::array** ou **std::vector**, plutôt que les tableaux C (ex. : `int arr[10];`). Les tableaux C sont moins sûrs et moins flexibles. Par exemple, les **std::vector** peuvent redimensionner dynamiquement leur taille, ce qui est très utile lorsque la taille n'est pas connue à l'avance. De plus, lorsqu'on passe en paramètre un tableau C à une fonction, on n'a pas l'information de taille, car il est implicitement converti en pointeur, ce qui peut entraîner des erreurs. Avec **std::array** ou **std::vector**, on peut explicitement passer en copie ou en référence, tout en conservant l'information de taille (méthodes `size()`).

## Erreurs d'include

Parfois, on oublie un `#include` dans un fichier `.hpp` ou `.cpp`.  Cela peut ne pas poser de problème immédiat si les éléments nécessaires sont déjà inclus ailleurs, mais c'est une mauvaise pratique. Il suffit d'inverser deux includes pour que cela ne compile plus. Chaque fichier doit inclure directement les fichiers dont il a besoin pour être autonome.

On peut aussi se dire que si `A.hpp` inclut `B.hpp` et que `C.hpp` inclut `A.hpp`, alors on peut utiliser les éléments de `B.hpp` dans `C.hpp` sans inclure directement `B.hpp`. Cela peut fonctionner, mais devient un problème si l'ordre d'inclusion change ou si `A.hpp` n'inclut plus `B.hpp`. `C.hpp` devient alors invalide et ne compile plus. Il faut donc inclure directement les fichiers dont chaque fichier a besoin, même si cela semble redondant: les include guards ou `#pragma once` sont là pour éviter les inclusions multiples.

## Utilisation des ifdef

Privilégiez `#pragma once` aux `#ifdef` pour éviter les inclusions multiples dans les fichiers header: c'est plus simple et plus lisible (et surtout, je ne vous ai pas parlé de `#ifdef` en cours).

## std::srand

Pas besoin d'appeler `std::srand` à chaque génération de nombre aléatoire. Il faut l'appeler une seule fois au début du programme (ex. : dans le `main`) pour initialiser le générateur. Ensuite, on peut utiliser `std::rand()` autant de fois que nécessaire sans le réinitialiser.

## Valeurs optionnelles

J'ai vu parfois l'utilisation de valeurs "magiques" pour indiquer qu'une valeur est absente ou invalide (ex. : `-1` pour un index, `0` pour une taille, etc.). Dans la majorité des cas, c'est une mauvaise pratique, car cela peut entraîner des erreurs difficiles à détecter. Cela rend aussi le code moins lisible: à la lecture d'une valeur de retour, on ne sait pas toujours si elle est valide (par exemple `return {-1, -1};` pour indiquer qu'une position n'a pas été trouvée).
Il est préférable d'utiliser des types optionnels comme **std::optional** (C++17 et plus) pour représenter des valeurs potentiellement absentes. Le code devient plus clair et plus sûr, car on doit explicitement vérifier si la valeur est présente avant de l'utiliser. C'est quelque chose qui sera présenté au début du semestre prochain.

## Classes et struct

On m'a signalé dans certains rapports la volonté d'utiliser des **classes** dans ce projet. En C++, **struct** et **class** sont très proches, et dans la progression du cours j'ai estimé que les `struct` étaient suffisantes pour ce projet. Cela dit, il n'y a rien de mal à utiliser des classes et de la programmation orientée objet (POO) si vous le souhaitez.

Si je ne vous les ai pas encore présentées en détail, c'est qu'il existe des subtilités et des pièges à éviter, ainsi que d'autres façons d'aborder un problème. La programmation orientée objet n'est pas toujours la meilleure solution selon le contexte (POO (une classe hérite d'une autre classe) vs composition (une classe contient une autre classe)).

## Réécriture de fonctions simples

Voici une fonction qui vérifie si une case d'un plateau de jeu est vide ou non:

```cpp
bool empty_case(std::array<std::array<char, 3>, 3>& board, int i, int j)
{
    bool empty_board;
    if(board[i][j] == '.')
    {
        empty_board=true;
    }
    else
    {
        empty_board =false;
    }
    return empty_board;

}
```

A la première lecture, avec uniquement la signature de la fonction, on ne sait pas exactement ce qu'elle fait. Le nom `empty_case` n'est pas très explicite. De plus, le paramètre `board` est passé par référence non constante, ce qui signifie que la fonction pourrait modifier le plateau.
Est-ce que l'on souhaite vider la case, ou simplement vérifier si elle est vide ? Si c'est juste une vérification, il vaut mieux passer le plateau en référence constante pour éviter toute modification accidentelle.

De plus, la fonction utilise une variable intermédiaire `empty_board` non initialisée pour stocker le résultat de la comparaison, alors que cette comparaison est déjà une valeur booléenne qui peut être retournée directement.

Voici une version réécrite de la fonction qui est plus claire et plus concise:

```cpp
bool is_empty_case(std::array<std::array<char, 3>, 3> const& board, int const i, int const j)
{
    return board[i][j] == '.';
}
```

## Technique du "placard"

J'ai vu dans certains projets un fichier **main.cpp** très léger, avec une grosse partie du code simplement déplacée ailleurs pour donner l'illusion d'une organisation en plusieurs fichiers, alors que la structure réelle n'a pas changé. Ce découpage est surtout cosmétique: les responsabilités restent mélangées et le code n'est ni plus simple, ni mieux organisé.

Un vrai découpage consiste à séparer clairement les rôles (par exemple: logique de jeu, affichage, entrées/sorties, utilitaires), avec des fonctions bien nommées. L'objectif n'est pas d'avoir "plus de fichiers" ou un `main.cpp` plus petit, mais d'avoir un code plus clair, plus modulaire et plus facile à faire évoluer.

## Utilisation des LLM pour écrire du code

Je me doute que certains d'entre vous ont utilisé des outils d'IA/LLM pour vous aider à écrire du code. C'est très puissant et cela peut faire gagner du temps, mais cela peut aussi freiner votre apprentissage. Idéalement, il faut éviter de les utiliser pour écrire le coeur du code. Si vous les utilisez malgré tout, mentionnez-le clairement dans un commentaire du code concerné et dans votre rapport.

J'ai vu des notions que nous n'avons pas encore abordées en cours, comme les lambdas. Ce n'est pas interdit, et c'est même positif d'explorer au-delà du cours, mais dans plusieurs cas ce n'était visiblement pas dans cette logique et probablement issu d'un LLM. J'ai aussi souvent vu des syntaxes compatibles mais explicitement déconseillées (ex. : tableaux C au lieu de **std::array** ou **std::vector**). Je n'ai pas sanctionné pour ce premier projet, mais à l'avenir, cela pourrait être un problème si vous ne faites pas l'effort de comprendre et d'appliquer les concepts que nous avons vus.

Personnellement, les LLM sont utiles pour débloquer un problème de compilation, reformuler une explication, ou comprendre un bout de code compliqué ou encore élaborer un plan d'attaque avec l'apport de ses propres idées initiales. Ils peuvent aussi aider à écrire plus vite une syntaxe déjà comprise. En revanche, il faut éviter de s'y reposer dessus: relisez et comprenez toujours le code proposé pour vérifier qu'il est correct et qu'il correspond à votre intention. Le coeur du code doit rester écrit et pensé par vous, pour vous permettre d'apprendre et de progresser.


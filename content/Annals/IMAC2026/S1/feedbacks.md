---
title: Retours Généraux
tags:
    - C++
---

## Caractères et ASCII

Pour comparer un caractère on peut en effet utiliser les codes ASCII mais on peut aussi utiliser le caractère directement.

```cpp
c == 97
// est équivalent à
c == 'a'
```

un caractère est en fait un entier(compris entre 0 et 255), donc on peut faire des opérations dessus.

```cpp
char c = 'a';
c = c + 1; // c vaut maintenant 'b'
```

C'est un **nombre** qui à une représentation particulière(lorsqu'on l'affiche) mais c'est un nombre comme un autre.

Pour des comparaisons de caractères, il est préférable d'utiliser la notation avec les caractères directement car c'est plus lisible et plus simple à écrire.

```cpp
c == 'a'
// est plus lisible que
c == 97
```

Par exemple si l'on souhaite savoir si un caractère est un **lettre minuscule**, on peut faire (en sachant que les lettres minuscules sont les caractères entre `a` et `z` et qu'ils sont **consécutifs** dans la table **ASCII**):

```cpp
bool isLower(char c) {
    return c >= 'a' && c <= 'z';
}
```

## Condition 

Pour retourner le résultat d'une **condition**, il n'est pas nécessaire de faire un `if` suivi d'un `else` avec un `return` dans chaque bloc.

```cpp
#include <cctype>
bool isVoyelle(char c) {
    c = std::tolower(c);
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y') {
        return true;
    } else {
        return false;
    }
}
```

En effet la condition `c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y'` est déjà un **booléen** en soit, donc on peut directement le retourner.

C'est équivalent à faire:

```cpp
if(true) {
    return true;
} else {
    return false;
}
```

Ca fonctionne mais c'est pas nécessaire et ça fait plus de code à écrire et à lire.

il faut donc plutôt retourner directement le résultat de la condition.

```cpp
bool isVoyelle(char c) {
    c = std::tolower(c);
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y';
}
```

## Puissance

Attention,

la syntaxe `x**2` n'est pas valide en **C++**. Il faut utiliser la fonction `pow` de la bibliothèque `cmath`.

```cpp
#include <cmath>
int x = 2;
int y = pow(x, 2); // y vaut 4
```

ou alors pour faire simplement un carré une multiplication suffit.

```cpp
int x = 2;
int y = x*x; // y vaut 4
```

## Référence constante

Lorsque l'on souhaite juste lire une variable en paramètre d'une fonction, on peut utiliser une **référence constante**. Particulièrement si cette variable est un "**gros**" objet comme une **chaines de caractères**, un **tableau** ou une **structure**.

Par exemple pour la fonction `countVowels` on peut utiliser une **référence constante** pour le paramètre `s` qui est un `std::string` ça permet de ne pas faire de copie de la chaîne de caractère.

```cpp
int countVowels(std::string const& s) {
    // ...
}
```

## Initialisation d'un générateur de nombre aléatoire

`std::srand(seed);` permet d'**initialiser** le générateur de nombre aléatoire avec une valeur qui change à chaque fois que l'on exécute le programme.

On doit l'appeler **une seule fois** au début du programme et pas dans une fonction qui retourne un nombre aléatoire. Car sinon on réinitialise le générateur à chaque utilisation de la fonction et on obtient toujours le même nombre aléatoire. (sauf si le paramètre `seed` lui même change à chaque fois mais ça reste pas une bonne solution).

## Include

Pour pouvoir utiliser les définitions ou fonction écrit dans un fichier depuis un autre il faut utiliser la directive `#include`.

Par example, pour pouvoir utiliser l'énumération `Direction` dans le fichier `Point.cpp`  (on en a besoin pour définit la fonction `move`), il faut inclure le fichier `Direction.hpp` dans le fichier `Point.cpp`.

## Séparation des responsabilités

Dans l'idéal, il faut que chaque fonction ait une seule responsabilité. C'est à dire qu'elle ne doit faire qu'une seule chose.
Cela permet de mieux réutiliser le code et permet d'être plus flexible dans l'utilisation de la fonction.

Par exemple, si on veut trouver la valeur maximale d'un tableau, on peut créer une fonction `max` et **ensuite** afficher le résultat.

```cpp
int max(std::vector<int> const& vec) {
    int max {vec[0]};
    for (size_t i {1}; i < vec.size(); ++i)
    {
        if (vec[i] > max)
        {
            max = vec[i];
        }
    }

    return max;
}

int main() {
    std::vector<int> vec {1, 2, 3, 4, 5};
    std::cout << "la valeur maximale est: " << max(vec) << std::endl;
}
```

Plutôt que de faire:

```cpp

void max(std::vector<int> const& vec) {
    int max {vec[0]};
    // ...

    std::cout << "la valeur maximale est: " << max << std::endl;
}

int main() {
    std::vector<int> vec {1, 2, 3, 4, 5};
    max(vec);
}
```

Car imaginons que l'on veuille utiliser la fonction `max` pour autre chose (un algorithme de tri par exemple), on ne peut pas car la fonction `max` affiche le résultat et ne le retourne pas.
Ou si elle l'affiche et le retourne, cela va tout de même "polluer" l'affichage sans que l'on puisse le contrôler.

## Concaténation de chaînes de caractères

Pour construire une chaîne de caractères, on peut utiliser l'opérateur `+` pour concaténer des **chaînes de caractères**.

Mais il faut faire attention à bien utiliser des **chaînes de caractères** et pas des **caractères**.

Les caractères étant des nombres, l'opérateur `+` va faire une addition et non une concaténation.

```cpp
    std::string hello {"Hello"};
    std::string world {"World"};
    std::string helloWorld {hello + world}; //fonctionne
    std::string he {'H' + 'e'}; // ne fonctionne pas
    // Erreur de compilation : "error: narrowing conversion of ‘173’ from ‘int’ to ‘char’ [-Wnarrowing]"
```

On ne peux pas non plus faire :
    
```cpp
    std::string helloWorld {"Hello" + "World"}; // ne fonctionne pas
    // Erreur de compilation : "error: invalid operands of types ‘const char [6]’ and ‘const char [6]’ to binary ‘operator+’"
```

Car `"Hello"` et `"World"` ne sont pas encore à ce stade des `std::string` du **C++** mais des **tableaux de caractères** du **C**. On ne peut pas utilise l'opérateur `+` sur des tableaux de caractères.

Si l'on souhaites construire une chaîne de caractères à partir de caractères, il faut utiliser la **méthode** `std::string::push_back` qui permet d'ajouter un caractère à la fin d'une chaîne de caractères.

```cpp
    std::string hello;
    helloWorld.push_back('H');
    helloWorld.push_back('e');
    helloWorld.push_back('l');
    helloWorld.push_back('l');
    helloWorld.push_back('o');
```

Ou alors utiliser l'opérateur `+` ou la **méthode** `std::string::append` qui permet d'ajouter une chaîne de caractères à la fin d'une autre chaîne de caractères.

```cpp
    std::string helloWorld {"Hello"};
    helloWorld.append(" World");
    helloWorld += " !";
```

## Unsigned int et std::cin

Lorsque l'on utilise `std::cin` pour lire un nombre entier, si l'on souhaite stocker ce nombre dans un `unsigned int` il faut faire attention à ce que l'utilisateur ne rentre pas un nombre négatif. Car dans ce cas `std::cin` ne va pas signaler d'erreur mais va tenter de stocker la valeur négative dans un `unsigned int` et va donc stocker une valeur qui n'est pas celle que l'utilisateur a rentré. Cela peut provoquer des bugs dans le programme.

Exemple:
    
```cpp
#include <iostream>

int main() {
    unsigned int age;
    std::cout << "Enter your age: ";

    std::cin >> age;
    
    if (std::cin.fail()) {
        std::cout << "Invalid input." << std::endl;
        return 1;
    }
    std::cout << "You are " << age << " years old." << std::endl;
    return 0;
}
```

Avec des lettres il y a bien une erreur:

```bash
Enter your age: test
Invalid input.
```

Avec un nombre négatif, il n'y a pas d'erreur mais le résultat n'est pas celui attendu:

```bash
Enter your age: -5
You are 4294967291 years old.
```

Ici la valeur s'explique par le fait qu'il y a un dépassement (un unsigned int ne peut pas stocker de nombre négatif) et il y a donc une **conversion implicite** (cast) de `-5` en `unsigned int` qui donne `4294967291`.

Un `unsigned int` qui est codé sur 32 bits. Donc la valeur maximale que l'on peut stocker est `2^32 - 1 = 4294967295` et la valeur minimale est `0`. Donc si l'on rentre `-5`  on obtient `2^32 - 5 = 4294967291`.

Malheureusement, il n'y a pas de solution simple pour éviter ce problème. Il faut soit utiliser un `int` temporaire pour stocker la valeur et vérifier que la valeur est positive avant de la stocker dans l'`unsigned int` mais ce n'est pas idéal car on ne peut pas bénéficier des avantages de l'`unsigned int` à savoir stocker des nombres plus grands (car on passe par un `int` temporaire qui est plus limité pour les nombres positifs).

Il faut sinon lire la chaîne de caractère et la convertir ensuite par des fonctions (généralement du C) comme `atoi` ou `strtol` qui permettent de convertir une chaîne de caractère en nombre entier avec une gestion des erreurs au cas où la chaîne de caractère ne représente pas le nombre attendu.

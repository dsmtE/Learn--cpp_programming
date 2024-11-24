---
title: TD9 - Mémoire
---

## Exercice 1 (Allocation dynamique)

1. Écrire un programme qui alloue dynamiquement une variable de type `int` avec le mot-clé `new` (sans initialisation).
2. Demander à l'utilisateur de saisir une valeur pour cette variable et modifier la valeur de la variable avec cette saisie.
3. Écrire une **fonction** qui prend en paramètre un pointeur sur un `int` et qui affiche la valeur de la variable pointée.
4. Afficher la valeur de la variable avec la fonction précédente.
5. Afficher l'adresse de la variable.
6. Libérer cette variable avec le mot-clé `delete`.

## Exercice 2

1. Écrire un programme qui génère un tableau (`std::vector`) de `100` entiers aléatoires compris entre 0 et 100.
    :::info
    Vous pouvez utiliser la fonction `rand()` pour générer un nombre aléatoire. Je vous renvoie à l'[Exercice 1](/TDs/S1/Arrays/#exercice-1-min--max) du TD5 pour plus d'informations.
    :::
2. Écrire une fonction qui retourne un pointeur sur le premier élément du tableau qui est supérieur à 90, ou `nullptr` si le tableau ne contient pas de tels éléments.

3. Écrire une fonction qui prend en paramètre un pointeur sur un emplacement mémoire contiguë d'entiers et sa taille et qui retourne la **somme** des éléments du tableau.

4. Utiliser les fonctions précédentes pour afficher la somme des éléments du tableau, et le premier élément > 90 (pensez à gérer le cas `nullptr` !).
    :::tip
    On peut récupérer un pointeur sur le premier élément d'un `std::vector` avec la méthode `data()`.
    Sinon il est aussi possible d'utiliser l'opérateur `&` sur le premier élément du `std::vector`.
    :::

5. Completer la fonction `sum` suivante pour qu'elle retourne un pointeur sur la somme des éléments du tableau passé en paramètre.
    ```cpp
    int* sum(std::vector<int> const& v) {
        int sum {0};
        // boucle for

        // TODO
    }
    ```

6. Utiliser la fonction `sum` pour afficher la somme des éléments du tableau.
7. En fonction du résultat obtenu, que pouvez-vous en déduire sur le fonctionnement de la fonction `sum` ? Si elle ne fonctionne pas, corriger la fonction `sum` pour qu'elle fonctionne correctement.

## Exercice 3 (Split)

Dans cet exercice, on ne doit pas utiliser de `std::vector`.

1. Allouer dynamiquement un tableau de `100` flottants aléatoires compris entre 0 et 100 (utiliser l'allocation dynamique pour des [emplacements mémoire contiguës](/Lessons/S1/MemoryAllocation/#tableaux)).
    :::info
    Vous pouvez utiliser la fonction `rand()` pour générer un nombre aléatoire.
    Pour générer un nombre flottant aléatoire vous pouvez utiliser la fonction `rand()` et la diviser par `RAND_MAX` (qui est une constante définie dans la bibliothèque `cstdlib`) ce qui permet d'obtenir un nombre flottant aléatoire entre 0 et 1.
    Il ne vous reste plus qu'à multiplier ce nombre par 100 pour obtenir un nombre flottant aléatoire entre 0 et 100.
    :::

2. Écrire une fonction qui prend en paramètre un tableau de flottants (sous la forme d'un pointeur sur le premier élément du tableau) et sa taille et qui retourne un pointeur sur le plus grand élément du tableau.

3. On souhaite créer une fonction qui permet de créer un nouveau tableau composé des éléments du tableau passé en paramètre qui sont supérieurs à un certain seuil.
    Écrire une fonction `thresholdFilter` qui prend en paramètre un tableau de flottants, sa taille, un seuil et une référence sur un entier qui contiendra la taille du nouveau tableau et qui retourne un pointeur sur le premier élément du nouveau tableau.

    Voilà la signature de la fonction:
    ```cpp
    float* thresholdFilter(float const* const array, size_t const size, float const threshold, size_t& new_size);
    ```

    :::info
    Vous pouvez remarquer que j'ai écrit `float const* const array` au lieu de `float* array`. Le premier `const` signifie que l'on ne peut pas modifier les valeurs pointées par le pointeur `array` et le deuxième `const` signifie que l'on ne peut pas modifier l'adresse pointée par le pointeur `array`.
    :::

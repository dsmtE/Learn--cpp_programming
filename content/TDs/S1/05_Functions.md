---
title: TD6 - Fonctions
sidebar_position: 6
---

## Exercice 1 (Somme)

Écrire une fonction somme qui retourne la **somme** de deux entiers.

1. Utiliser des **paramètres** par copie et le prototype suivant:
    ```cpp
    int somme(int a, int b);
    ```

2. Utiliser des **paramètres constants** pour les arguments de la fonction.
3. Utiliser des **références** pour les arguments de la fonction.
4. Vérifier que cela fonctionne aussi bien avec des variables que des littéraux dans le cas des références.

## Exercice 2 (Factorielle)

1. Écrire un programme qui demande à l’utilisateur de saisir un **entier positif**.
2. Écrire une fonction **récursive** qui retourne la **factorielle** de `n`.
    :::info
    La **factorielle** d'un entier `n` est le **produit** des nombres entiers strictement positifs inférieurs ou égaux à `n`.
    :::
3. Afficher le résultat.
4. Gérer les cas d'erreur (nombre négatif, nombre trop grand, etc.).
5. Utiliser une fonction itérative (non récursive).

## Exercice 3 (Fibonacci)

1. Écrire un programme qui demande à l’utilisateur de saisir un entier positif.
2. Écrire une fonction **récursive** qui retourne sous la forme d'un tableau les `n` premiers termes de la suite de **Fibonacci**.
    :::info
    La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent. Ses premiers termes sont `0` et `1`.
    :::
3. Afficher les `n` premiers termes de la suite de **Fibonacci** à l'aide de la fonction précédente.
    Par exemple, si l’utilisateur saisit `7`, le programme affichera `0, 1, 1, 2, 3, 5, 8`.
4. Pour aller plus loin: Essayer de trouver une solution **itérative** (non récursive).


## Exercice 4 (Surcharges)

1. Écrire une fonction qui permet de calculer la moyenne d'un tableau d'**entiers**.
2. Écrire une fonction surchargée portant le même nom qui permet de calculer la moyenne d'un tableau de **flottants**.

## Exercice 5 (Suite)

Écrire sous forme **récursive** les fonctions $U_n$ et $V_n$ conformément à la description suivante:

- $U_0 = 1$ et $U_{n+1} = 3U_n + 2V_n$
- $V_0 = 2$ et $V_{n+1} = 2V_n + U_n + 1$

Afficher les **dix** premiers termes de chacune des suites.

Vous devez obtenir les résultats suivants:

```
U0 = 1 et V0 = 2
U1 = 7 et V1 = 6
U2 = 33 et V2 = 20
U3 = 139 et V3 = 74
U4 = 565 et V4 = 288
U5 = 2271 et V5 = 1142
U6 = 9097 et V6 = 4556
U7 = 36403 et V7 = 18210
U8 = 145629 et V8 = 72824
U9 = 582535 et V9 = 291278
```

:::tip
Il est possible d'exprimer $U_n$ et $V_n$ en fonction de $U_{n-1}$ et $V_{n-1}$.
:::

## Exercice 6 (Pangramme)

Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne `true` si la chaîne est un **pangramme**, `false` sinon.

Il faut faire attention à la casse (majuscules/minuscules), un même lettre majuscule et minuscule compte pour la **même** lettre.
:::info
Un **pangramme** est une phrase contenant toutes les lettres de l'alphabet au moins une fois.
:::

## Exercice 7 (String)

1. Écrire une fonction qui prend en paramètre une chaîne de caractères et qui modifie cette chaîne en remplaçant les lettres minuscules par des lettres majuscules et vice-versa.

2. Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne le nombre de voyelles de cette chaîne.

3. Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne le nombre de mots de cette chaîne. On considère que les mots sont séparés par un ou plusieurs espaces.

4. Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne la même chaîne écrite à l'envers.

5. Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne `true` si la chaîne est un nombre entier.
    :::tip
    L'idée est de parcourir la chaîne de caractères et de vérifier si chaque caractère est un chiffre ou non.
    Pour tester si un caractère est un chiffre vous pouvez comparer la valeur **ASCII** du caractère avec les valeurs **ASCII** des chiffres (voir l'[Exercice 5](./Variables#exercice-5-ascii) du TD2).

    Il existe aussi la fonction `std::isdigit` (voir la [documentation](https://en.cppreference.com/w/cpp/string/byte/isdigit)) qui permet de tester si un caractère est un chiffre ou non.
    :::

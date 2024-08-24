---
title: TD8 - Headers
---

## Exercice 1 (Fraction)

Le but de cet exercice est de créer une **structure** permettant de représenter une **fraction**. Cette structure devra contenir deux entiers positifs, un pour le **numérateur** et un pour le **dénominateur**.

On va utiliser un fichier d'en-tête pour définir la structure et les fonctions qui vont permettre de manipuler les fractions.

1. Créer un fichier `fraction.hpp` qui contiendra la définition de la structure et les prototypes des méthodes.
    La structure devra s'appeler `Fraction` et contenir deux **entiers positifs** nommés `numerator` et `denominator` de type `unsigned int` avec comme valeur par défaut `0/1`.
    La structure devra contenir une **méthode** `display` et qui permet d'afficher (`std::cout`) la fraction sous la forme `numerator/denominator`.
    
    Vous devrez également définir les **prototypes** des fonctions suivantes :
    - `add` : prend deux fractions en paramètre et retourne la somme des deux fractions.
    - `sub` : prend deux fractions en paramètre et retourne la différence des deux fractions.
    - `mul` : prend deux fractions en paramètre et retourne le produit des deux fractions.
    - `div` : prend deux fractions en paramètre et retourne le quotient des deux fractions.

:::info
Pour simplifier on va considérer que les fractions sont toujours positives et on ne va pas gérer le cas ou le résultat d'une opération est négatif ou le problème de division par zéro.
Vous êtes toute fois libre de gérer ces cas si vous le souhaitez (et donc changer le type des attributs de la structure et utiliser des entiers signés).
:::

:::tip
Petit rappel sur la définition des prototypes de méthodes pour les structures [ici](https://dsmte.github.io/Learn--cpp_programming/Lessons/S1/Struct#prototype-de-méthodes).
:::

2. Créer un fichier `fraction.cpp` qui contiendra les définitions des méthodes et fonctions.

3. Implémenter les fonctions dans le fichier `fraction.cpp`.

:::warning
Les fonctions `add`, `sub`, `mul` et `div` ne doivent pas modifier les fractions passées en paramètre mais bien retourner une nouvelle fraction qui est le résultat de l'opération.
:::

4. Créer un fichier `utils.hpp` qui contiendra les **fonctions** suivantes :
    - `gcd` : prend deux entiers positifs en paramètre et retourne le plus grand diviseur commun.
    - `simplify` : prend une fraction en paramètre et retourne la fraction simplifiée.

5. Créer un fichier `utils.cpp` et implémenter les fonctions.

:::tip
Pour simplifier une fraction, il faut diviser le numérateur et le dénominateur par le plus grand diviseur commun.
On va donc utiliser la fonction `gcd` pour calculer le plus grand diviseur commun et ensuite diviser le **numérateur** et le **dénominateur** par ce nombre.

la fraction `4/6` devient `2/3` car `gcd(4, 6) = 2` et `4/2 = 2` et `6/2 = 3`.

Il faut importer le fichier `fraction.hpp` dans le fichier `utils.hpp` pour pouvoir utiliser la structure `Fraction` dans la fonction `simplify`.
:::

:::info
Pour trouver le plus grand diviseur commun, on peut utiliser l'algorithme d'**Euclide** qui consiste à diviser le plus grand nombre par le plus petit et à répéter l'opération avec le reste de la division jusqu'à obtenir un reste nul. Dans ce cas, le plus petit nombre non nul est le plus grand diviseur commun.

exemple avec `22` et `8`:

- `22 % 8 = 6` (reste de la division de `22` par `8`) `6` est différent de `0` donc on continue
- `8 % 6 = 2` (reste de la division de `8` par `6`) `2` est différent de `0` donc on continue
- `6 % 2 = 0` (reste de la division de `6` par `2`) `0` est égal à `0` donc on s'arrête et le plus grand diviseur commun est `2`.
:::

6. Modifier vos fonctions `add`, `sub`, `mul` et `div` pour simplifier le résultat avant de le retourner.

7. Créer un fichier `main.cpp` qui contiendra le programme principal. Ce programme devra :
    - Créer deux fractions `f1` et `f2` avec les valeurs de votre choix. (idéalement avec des valeurs aléatoires ou saisies par l'utilisateur)
    - Afficher les deux fractions.
    - Afficher la somme des deux fractions.
    - Afficher la différence des deux fractions.
    - Afficher le produit des deux fractions.
    - Afficher le quotient des deux fractions.

:::info
Vous découvrirez au prochain semestre comment améliorer ce programme en utilisant la surcharge d'opérateurs :hammer_and_wrench:.
:::


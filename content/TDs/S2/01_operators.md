---
title: TD1 - Opérateurs
---

L'idée de ce TD est de reprendre le **TD08** du premier semestre est d'améliorer notre structure `Fraction` en utilisant la **surcharge d'opérateurs**.

Reprendre les fichiers `fraction.hpp`, `fraction.cpp`, `utils.hpp` et `utils.cpp` du TD08 du premier semestre.

## Exercice 1 (opérations)

Transformer les méthodes `add`, `sub`, `mul` et `div` en surcharge des opérateurs `+`, `-`, `*` et `/` pour pouvoir utiliser les opérateurs avec des fractions.

On peut appliquer une simplification sur les fractions retournées par les opérateurs pour éviter d'avoir des fractions non simplifiées.

## Exercice 2 (affichage)

Transformer la fonction `display` en surcharge de l'opérateur `<<` pour pouvoir afficher une fraction avec `std::cout`.

## Exercice 3 (égalité)

- Ajouter l'opérateur `==` pour comparer deux fractions.
- Ajouter l'opérateur `!=` en se basant sur l'opérateur `==`.

:::tip
Attention, cela ne fonctionnera pas si on compare deux fractions non simplifiées. (ex: `1/2 == 2/4`) Une autre solution serait de simplifier les fractions dans l'opérateur avant de les comparer.

Il existe une autre façon de faire en comparant les produits en croix des fractions. (ex: `a/b == d/c` \<=> `a * c == b * d`)
:::

## Exercice 4 (comparaison)

- Ajouter l'opérateur `<` pour comparer deux fractions.
- Ajouter les opérateurs `<=`, `>` et `>=` en se basant sur l'opérateur `<`.

## Exercice 5 (opérations d'affectation)

- Transformer les méthodes `add`, `sub`, `mul` et `div` en surcharge des opérateurs d'affectation `+=`, `-=`, `*=` et `/=` 
- Réécrire les opérateurs `+`, `-`, `*` et `/` en utilisant les opérateurs affectation afin d'éviter de dupliquer le code.

## Exercice 7 (conversion)

1. Définir et implémenter une méthode `to_float` qui retourne la valeur de la fraction sous forme de `float`.

Il est aussi possible de définir des opérateurs de conversion pour convertir une fraction en un autre type.

la syntaxe est la suivante:

```cpp
operator type() const {
    // code de conversion
}
```

2. Ajouter l'opérateur de conversion `float` pour pouvoir convertir une fraction en `float`.

le prototype de la méthode pour notre structure `Fraction` sera le suivant:

```cpp
Fraction::operator float() const;
```

Grâce à cet opérateur, on pourra convertir une fraction en `float` de la manière suivante:

```cpp
Fraction f1 {1, 2};
float d1 {static_cast<float>(f1)}; // conversion explicite avec static_cast
```
<!---STEEVE: est ce que tu voulais mettre double pour montrer que c'est faisable aussi en double ? ou c'est une erreur ?-->

## Aller plus loin

1. Ajouter des fonction libres pour les opérateurs `+`, `-`, `*` et `/` afin de pouvoir faire des opérations avec des fractions et des entiers.
   exemple: `Fraction f1 {1, 2}; int i1 {2}; Fraction f2 {f1 + i1};`
   ```cpp
    Fraction operator+(const Fraction& f, int i);
    ```

    :::tip
    Pour que ce soit commutatif, il faut aussi définir la fonction avec l'entier en premier paramètre. Réutiliser la fonction précédente pour éviter de dupliquer le code.
    :::


2. Ajouter des méthodes pour appliquer des **opérations mathématiques** sur les fractions.
   - `abs`: valeur absolue
   - `ceil`: arrondi supérieur
   - `floor`: arrondi inférieur
   - `round`: arrondi



---
title: TD1 - Opérateurs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

L'idée de ce TD est de partir d'une implémentation simple de structure `Fraction` et de la transformer en une structure plus complète en surchargeant les **opérateurs** pour pouvoir faire des opérations mathématiques avec des fractions.

Je vous fourni donc une base de code pour la structure `Fraction` avec les fichiers `fraction.hpp`, `fraction.cpp`, `utils.hpp` et `utils.cpp` que vous pouvez télécharger : <a target="_blank" href={ useBaseUrl("/code/S2/S2_TD01_Fraction.zip") } download={"S2_TD01_Fraction.zip"}>S2_TD01_Fraction.zip</a>



*utils* contient une fonction **simplify** permettant de simplifier nos fractions.
## Exercice 1 (opérations)

Transformer les méthodes `add`, `sub`, `mul` et `div` en surcharge des opérateurs `+`, `-`, `*` et `/` pour pouvoir utiliser les opérateurs avec des fractions.

On peut appliquer une simplification sur les fractions retournées par les opérateurs pour éviter d'avoir des fractions non simplifiées.

## Exercice 2 (affichage)

Transformer la fonction `display` en surcharge de l'opérateur `<<` pour pouvoir afficher une fraction avec `std::cout` ([opérateurs de flux](/Lessons/S2/Operators/#opérateurs-de-flux)).

## Exercice 3 (égalité)

- Ajouter l'opérateur `==` pour comparer deux fractions.
- Ajouter l'opérateur `!=` en se basant sur l'opérateur `==`.

:::tip
Attention, cela ne fonctionnera pas si on compare deux fractions non simplifiées. (ex: `1/2 == 2/4`) Une autre solution serait de simplifier les fractions dans l'opérateur avant de les comparer.

Il existe une autre façon de faire en comparant les **produits en croix des fractions**: (ex: `a/b == d/c` \<=> `a * c == b * d`)
:::

## Exercice 4 (comparaison)

- Ajouter l'opérateur `<` pour comparer deux fractions.
- Ajouter les opérateurs `<=`, `>` et `>=` en se basant sur l'opérateur `<`.

## Exercice 5 (opérations d'affectation)

- Ajouter les opérateurs d'affectation `+=`, `-=`, `*=` et `/=`.
- Réécrire les opérateurs `+`, `-`, `*` et `/` en utilisant les opérateurs affectation afin d'éviter de dupliquer le code ([deux-en-un](/Lessons/S2/Operators/#deux-en-un)) (Commenter l'ancienne version des opérateurs par exemple)

:::tip

Il est possible d'utiliser la fonction **simplify** sur l'objet courant dans une **méthode** en utilisant `this` qui est le pointeur vers "moi-même":

Exemple:
```cpp
void Fraction::operator+=(Fraction const& f) {
    numerator = numerator * f.denominator + f.numerator * denominator;
    denominator = denominator * f.denominator;

    *this = simplify(*this);

    // Ou alors la version simplify_ref qui prend une référence d'une fraction à modifier
    // simplify_ref(*this);
}
```

Ici `*this` est donc une référence vers "moi-même" que je peux donc passer en paramètre à la fonction simplify.
Enfin, je me sers du résultat pour l'assigner à moi-même avec l'opérateur d'affectation "=" (toujours avec "*this").

:::

## Exercice 6 (conversion)

1. Définir et implémenter une méthode `to_float` qui retourne la valeur de la fraction sous forme de `float`.

Il est aussi possible de définir des opérateurs de conversion pour convertir une fraction en un autre type.

La syntaxe est la suivante :

```cpp
operator type() const {
    // code de conversion
}
```

2. Ajouter l'opérateur de conversion `float` pour pouvoir convertir une fraction en `float` en utilisant la méthode `to_float`.

Le prototype de la méthode pour notre structure `Fraction` sera le suivant:

```cpp
Fraction::operator float() const;
```

Grâce à cet opérateur, on pourra convertir une fraction en `float` de la manière suivante:

```cpp
Fraction f1 {1, 2};
float d1 {static_cast<float>(f1)}; // conversion explicite avec static_cast
```

:::note
On pourrait très bien mettre directement le code de la conversion dans l'opérateur `float` sans passer par une méthode `to_float`. Mais je vous demande de le faire pour l'exercice et pour avoir la possibilité de réutiliser la méthode `to_float` ailleurs.
:::

## Aller plus loin

1. Ajouter des fonction libres pour les opérateurs `+`, `-`, `*` et `/` afin de pouvoir faire des opérations avec des fractions et des entiers.
    exemple: `Fraction f1 {1, 2}; int i {2}; Fraction f2 {f1 + i};`
    ```cpp
    Fraction operator+(Fraction const& f, int const i);
    Fraction operator+(int const i, Fraction const& f);
    ```

    :::tip
    Pour que ce soit commutatif, il faut aussi définir la fonction avec l'entier en premier paramètre. Réutiliser la fonction précédente pour éviter de dupliquer le code.
    :::

2. Ajouter des méthodes pour appliquer des **opérations mathématiques** sur les fractions.
   - `abs`: valeur absolue
   - `ceil`: arrondi supérieur
   - `floor`: arrondi inférieur
   - `round`: arrondi



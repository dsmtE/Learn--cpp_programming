---
title: TD4 - Déduction de type et bibliothèque standard
---

## Exercice 1 (Vector and Algorithm)

1. Remplir un `std::vector` avec des nombres entiers aléatoires compris entre **0** et **100**.
2. Utiliser les **itérateurs** et les méthodes `begin` et `end` pour afficher les valeurs du vecteur à l'aide d'une boucle `for`.
3. Chercher si un nombre saisi par l'utilisateur est présent dans le vecteur à l'aide de la fonction `std::find` et afficher un message
   adapté.
4. Utiliser la fonction `std::count` pour compter le nombre d'occurrences d'un nombre entier dans le vecteur.
Vous pouvez trouver la documentation de la fonction `std::count` [ici](https://en.cppreference.com/w/cpp/algorithm/count).
1. Utiliser la fonction `std::sort` pour trier le vecteur.
2. Utiliser la fonction `std::accumulate` pour calculer la **somme** des éléments du vecteur (par défaut, la fonction `std::accumulate` utilise l'opérateur `+` entre les éléments).

## Exercice 2 (String)

Étant donnée une phrase composée de mots séparés par des espaces.

Nous avons utilisé dans le TD précédent une astuce avec les stream C++ qui permet de séparer les mots d'une phrase. L'idée est de coder une autre façon d'arriver au même résultat sans utiliser les stream.

Je vous donne la fonction lambda suivante qui permet de savoir si un caractère est un espace:
```cpp
auto const is_space = [](char letter){ return letter == ' '; };
```

Le mot clé `auto` ici permet de "stocker" la fonction dans une variable pour la passé en paramètre. En réalité se cache derrière des pointeur de fonction ou le type `std::function` qui permet d'avoir une variable qui représente une fonction comme cela. 

Cela va permettre d'utiliser les fonctions `std::find_if_not` et `find_if` (qui retourne des itérateurs) pour rechercher ou non des espaces dans une chaîne de caractère.

1. Écrire une fonction (à l'aide des fonctions `std::find` et `std::distance`) qui prendre en paramètre une référence constante sur une `std::string` et qui retourne le nombre de lettres du premier mot de la phrase.

:::info
Vous allez avoir besoin de la fonction `std::distance`, qui retourne la distance entre deux itérateurs, sous forme d’un nombre entier.
:::

2. Écrire une fonction qui permet de découper la phrase en mots et de les stocker dans un `std::vector` de `std::string`.
Voilà le prototype de la fonction :

```cpp
std::vector<std::string> split_string(std::string const& str);
```

## Exercice 3 (Palindrome)

1. Écrire une fonction qui prend en paramètre une référence constante sur une `std::string` et qui retourne `true` si la chaîne de caractères est un palindrome (qui peut se lire dans les deux sens), `false` sinon.

Utiliser la fonctions `std::equal` pour comparer les valeurs de deux itérateurs.
Utiliser les fonctions `std::begin`, `std::end`  et `std::rbegin`, `std::rend` pour obtenir les itérateurs de début et de fin d'une chaîne de caractères et de sa version inversée.

## Pour aller plus loin (lambda)

1. Écrire une fonction qui prend en paramètre un `std::vector` et retourne la **somme** du **carré** de ses éléments. Vous devez utiliser la fonction `std::accumulate` et une fonction **lambda**.
2. Écrire une fonction qui prend en paramètre un `std::vector` et retourne le **produit** de ses éléments **pairs**. Vous ne devez pas filtrer les éléments du vecteur, mais utiliser une fonction **lambda** pour déterminer si un élément est pair ou non et si oui, le prendre en compte dans le produit. Vous devez utiliser la fonction `std::accumulate` et une fonction **lambda**.
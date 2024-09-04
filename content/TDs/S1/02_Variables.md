---
title: TD2 - Variables
---

## Exercice 1 (opérations)

- Créer une variable de type `int` et initialiser la avec une valeur de votre choix.

- Appliquer les **opérations** suivantes sur cette variable et afficher le résultat de chaque opération:

  - **Incrémenter** la variable de 1 (avec la méthode de votre choix).
  - **Multiplier** la variable par 3.
  - **Diviser** la variable par 2.

:::tip
Utiliser la fonction `std::cout` pour afficher la valeur de la variable.
:::

## Exercice 2 (entrée utilisateur)

Créer un programme qui demande à l'utilisateur de saisir **trois valeurs flottantes** (de type `float`).
- Calculer la **somme** de ces trois valeurs et stocker le résultat dans une variable de type `float`.
- Calculer de même la **moyenne** de ces trois valeurs.
- Afficher le résultat de la somme et de la moyenne.

:::tip
Utiliser la fonction `std::cin` pour lire la valeur saisie par l'utilisateur.
:::

## Exercice 3 (cast)

- Créer une variable entière (de type `int`) et l'initialiser avec la valeur `11`.

- Afficher la valeur de cette variable.

- Afficher la valeur de cette variable **divisée par 2**.

Vous devriez obtenir une valeur de `5` et non `5.5`. **Pourquoi** ?

- Utiliser un cast pour convertir la variable en un type flottant.
 Afficher la valeur de la variable divisée par  `2.0f`

:::tip
`static_cast<type>(variable)` permet convertir une variable en un autre type.
:::

## Exercice 4 (conversion)

Écrire un programme qui demande un nombre de jours à l'utilisateur et affiche le nombre d'années, de mois et de jours correspondant à ce nombre de jours.

L’aﬀichage se fera sous la forme :
"J jours correspondent à: xx siecle xx annee xx mois xx semaine xx jours"

:::info
Pour simplifier le problème, on considérera que tous les mois ont 30 jours
et toutes les années 360 jours.
:::

```bash title="exemple d'exécution"
Entrez un nombre de jours : 4096
4096 jours correspondent à : 0 siecle 11 annee 4 mois 2 semaine 2 jours
```

## Exercice 5 (ASCII)

Demander à l'utilisateur de saisir un nombre entier entre **1** et **26** et afficher la lettre correspondante dans l'alphabet.

```bash title="exemple d'exécution"
Entrez un nombre entre 1 et 26 : 5
La lettre correspondante est : E
```

:::info
Le type `char` permet de stocker un caractère. Il est possible de faire des opérations sur les caractères comme si c'était des entiers.

Le code **ASCII** associe les caractères à des entiers. Par exemple, le caractère 'A' est associé à l'entier 65, 'B' à 66, etc.

En ce qui nous concerne, nous allons utiliser le fait que les lettres majuscules sont associées aux entiers de 65 à 90 et les lettres minuscules aux entiers de 97 à 122.

Vous pouvez trouver la table de correspondance ASCII complète [ici](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#Description).
:::

## Exercice 6 (problème de compilation et d'exécution)
```cpp
#include <iotream>

int main()
{
    float const pi {3.141592}
    int a {pi*3}; // je veux le résultat de pi (environ 3.141592) fois 3
    int const b {8};

    a += "20";  // je veux ajouter le nombre 20 à la valeur de b

    b = b * 15; // je veux modifier la valeur de b en la multipliant par 15

    std::cout << "a: " < a << std::endl;

    std::cout << "b: " << b << std::endl

    return 0;
}
```

- Vérifier que le code ne compile pas et essayez de corriger les erreurs.

## Exercices Bonus

<details>

<summary>Cuisine</summary>

Un cuisinier doit aller au marché pour récupérer ses légumes. Il a besoin de sacs de **pommes de terre**, de **carottes** et de **salades**.

Vous avez les informations suivantes :
- Un sac de **pommes de terre** pèse **2kg**.
- Le prix d'un **kg** de **pommes de terre** est de **1.5€**.
- Une **carotte** pèse **150g**.
- Le prix d'un **kg** de **carottes** est de **2.5€**.
- Une salade coûte **1.2€**.

Écrire un programme qui demande à l'utilisateur de saisir le nombre de sacs de pommes de terre, de carottes et de salades qu'il souhaite acheter.

Le programme doit ensuite calculer le **prix total** de la commande et l'afficher.

```bash title="exemple d'exécution"
Entrez le nombre de sacs de pommes de terre : 2
Entrez le nombre de carottes : 3
Entrez le nombre de salades : 1

Le prix total de la commande est de 8.325 €
```

:::info Bonus

En bonus, afficher le détail de la commande.

```bash
...

Le prix total de la commande est de 8.325 €
détails:
- 2 sacs de pommes de terre : 6 €
- 3 carottes : 1.125 €
- 1 salade : 1.2 €
```
:::

</details>
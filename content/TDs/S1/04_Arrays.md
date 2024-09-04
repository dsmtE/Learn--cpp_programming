---
title: TD4 - Tableaux
---

## Exercice 1 (min & max)

Des nains partent en expédition dans les montagnes. Ils transportent chacun une certaine quantité de provisions (exprimée en calories).

Votre mission est de déterminer la quantité de provisions la plus grande transportée par un nain.

Je vous donne le programme suivant qui génère la liste des calories transportées par chaque nain:

```cpp
#include <iostream>
#include <vector>
#include <cstdlib>

int main()
{
    size_t const dwarf_count { 20 };

    std::vector<int> calories {};

    // std::srand permet de fixer la "seed" du générateur aléatoire (pour avoir des résultats reproductibles)
    std::srand(42);
    
    for (int i = 0; i < dwarf_count; ++i)
    {
      calories.push_back(rand() % 24000 + 100);
    }

    // affichage optionnel des calories transportées par chaque nain
    for (int const c : calories)
    {
      std::cout << c << ", ";
    }
    std::cout << std::endl;

    // TODO: afficher la quantité de provisions la plus grande transportée par un nain

    return 0;
}
```

1. Trouver la quantité de provisions la plus **grande** transportée par un nain.
2. Trouver la quantité de provisions la plus **petite** transportée par un nain (arrivez vous à le faire sans utiliser de boucle supplémentaire ?).
3. Essayez de faire fonctionner le programme avec plus de nains, par exemple `200`, `2000` ou même `20000` nains. (Attention, il ne faut pas afficher les calories transportées par chaque nain dans ce cas).
4. Si vous avez eu besoin de changer autre chose que la variable `dwarf_count` pour répondre à la question précédente, essayez de trouver une solution qui fonctionne avec n'importe quel nombre de nains sans avoir à modifier le code.

5. Pour aller plus loin: 
  Trouver les **trois** nains transportant le plus de provisions et afficher la **somme** des provisions transportées par ces trois nains.

:::info
Exercice inspiré de de l'édition **2022** de l'**advent of code**: https://adventofcode.com/2022/day/1
C'est un évènement annuel qui propose un problème de code par jour sous forme de calendrier de l'avent.
:::

## Exercice 2 (Points d'énergie)

Dans un jeu vidéo de type RPG, dès que le joueur termine un niveau, il gagne des points d’énergie.

Les points d'énergie sont calculés en fonction du niveau terminé et du nombre et du niveau de difficulté des ennemis tués.

Le nombre de points d'énergie gagnés est calculé de la manière suivante:

- Pour chaque ennemi tué, trouver tous les multiples de son niveau de difficulté inférieurs au niveau terminé par le joueur.
- Combiner tous les multiples trouvés pour chaque ennemi tué en supprimant les doublons.
- Additionnez tous les nombres restants pour obtenir le nombre de points d'énergie gagnés.

Voici un exemple:

- Le joueur termine le niveau `20`.
- Il tue 2 ennemis de niveau `3`, `5`.

Les multiples de `3` inférieurs à `20` sont: `3, 6, 9, 12, 15, 18`.
Les multiples de `5` inférieurs à `20` sont: `5, 10, 15`.

En supprimant les doublons, nous obtenons: `3, 5, 6, 9, 10, 12, 15, 18`.

En additionnant tous les nombres, nous obtenons **78** points d'énergie.

**Vous devez écrire un programme qui demande à l'utilisateur de saisir le niveau terminé et le nombre et le niveau de difficulté des ennemis tués et qui affiche le nombre de points d'énergie gagnés.**

## Exercice 3 (Palindrome)

Un palindrome est un mot qui peut être lu de la même manière de gauche à droite et de droite à gauche.

Par exemple, `kayak` est un palindrome.

Écrire un programme qui demande à l'utilisateur de saisir un mot et qui affiche si ce mot est un **palindrome** ou non.

:::tip
Une chaîne de caractères est un tableau de caractères.
:::

## Exercice 4 (Comptage)

Écrire un programme qui demande un nombre **entier positif** (supérieur à **1 000 000**) à l'utilisateur et qui remplit un tableau avec les chiffres de ce nombre.
Le programme doit ensuite compter le nombre d'occurrences de chiffre et afficher le **chiffre** qui apparaît le plus souvent.

## Exercice 5 (Suppression et tassement)

Écrire un programme qui demande à l'utilisateur de saisir **10** entiers compris entre **0** et **5** et qui les stocke dans un tableau. (vous pouvez aussi demander à l'utilisateur de saisir un nombre puis le décomposer en chiffres et stocker les chiffres dans un tableau).

Vous devez ensuite supprimer toutes les valeurs valant **3** dans le tableau en décalant tous les éléments vers la gauche et en complétant le tableau avec des **0**.

Tableau avant:
```
[1, 3, 2, 3, 3, 4, 5, 3, 0, 2]
```

Tableau après:
```
[1, 2, 4, 5, 0, 2, 0, 0, 0, 0]
```

## Exercices Bonus

<details>

<summary>Algorithmes de Luhn</summary>

Le numéro de carte bancaire est un nombre de 16 chiffres. Il est composé de 4 groupes de 4 chiffres séparés par un espace.

Tous les numéros de carte bancaire ne sont pas valides et il existe des algorithmes pour le vérifier.
Cela permet de vérifier rapidement si un numéro de carte bancaire est valide ou non sans avoir à contacter la banque et permet de détecter rapidement certaines erreurs de saisie (comme l'inversion de deux chiffres par exemple).

---

L'algorithme de **Luhn** est l'un de ces algorithmes.

Son principe est de calculer, à partir d'un nombre (ou une suite de chiffres), une clé de contrôle (appelée **checksum**) qui permet de vérifier que le numéro est correct (car la clé est un nombre qui est dépendant des autres et doit respecter certaines conditions).

Dans notre cas, la clé de contrôle est calculée de la manière suivante:

- On **multiplie** un chiffre sur deux **par 2** (en commençant par le deuxième chiffre).
- Si le résultat de la multiplication est **supérieur à 9**, on **additionne** les chiffres du résultat (par exemple, 8 * 2 = 16, 1 + 6 = 7).
- On additionne tous les chiffres (y compris ceux qui n'ont pas été multipliés par 2).

Si le résultat (la clé de contrôle) est un multiple de 10, alors le numéro est valide.

<details>
<summary>
Un exemple
</summary>

Prenons le numéro de carte bancaire suivant: `1234 5678 9002 3456`.

On multiplie un chiffre sur deux par 2 (en commençant par le dernier chiffre):

```
1  2  3  4  5  6  7  8  9  0  0  2  3  4  5  6
   x2    x2    x2    x2    x2    x2    x2    x2
1  4  3  8  5  12 7  16 9  0  0  4  3  8  5  12
```

On additionne les chiffres du résultat si le résultat est supérieur à 9:

```
1  4  3  8  5  12 7  16 9  0  0  4  3  8  5  12
1  4  3  8  5  3  7  7  9  0  0  4  3  8  5  3
```

On additionne tous les chiffres:

```
1  4  3  8  5  3  7  7  9  0  0  4  3  8  5  3
1 + 4 + 3 + 8 + 5 + 3 + 7 + 7 + 9 + 0 + 0 + 4 + 3 + 8 + 5 + 3 = 70
```

La clé de contrôle est `70`.

`70` est un multiple de `10`, donc le numéro de carte bancaire est valide.

</details>

**Vous devez écrire un programme qui demande à l'utilisateur de saisir un numéro de carte bancaire et qui affiche si ce numéro est valide ou non.**

Pour la saisie, vous êtes libre de choisir le format ou syntaxe que vous voulez (via une chaîne de caractères, avec ou sans espaces, un nombre ou une boucle sur plusieurs chiffres).

:::tip
- Convertissez premièrement la chaîne de caractères en un tableau de chiffres.
- Pour convertir un caractère en un nombre, vous pouvez utiliser la fonction `std::stoi` (string to integer) ou la valeur **ASCII** du caractère. (voir l'[Exercice 5](/TDs/S1/Variables/#exercice-5-ascii) du TD2).
:::

</details>
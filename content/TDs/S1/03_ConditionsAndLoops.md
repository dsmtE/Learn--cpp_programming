---
title: TD3 - Conditions et boucles
---

## Exercice 1 (Positif ou négatif)
1. Écrire un programme qui demande à l’utilisateur de saisir un **entier** et affiche si cet entier est **positif** ou **négatif**.

Exemples d’exécution:

```bash
Saisir un entier : 42
42 est positif
```

```bash
Saisir un entier : -5
-5 est négatif
```

2. Modifier le programme pour utiliser une condition ternaire.
:::info ternaire

Un **ternaire** est une expression conditionnelle qui permet de faire un test comme un **if/else** et de retourner une valeur en fonction du résultat du test.

```cpp
int a {5};
int b {10};
// condition ? valeur si vrai : valeur si faux
int c {(a > b) ? a : b }; // c = 10
```

C'est réservé aux cas simples qui peuvent s'écrire sur une seule ligne.
Il ne faut pas abuser des ternaires car cela peut rendre le code illisible.
:::

## Exercice 2 (Somme d'entiers positifs)

Écrire un programme qui demande à l’utilisateur de saisir des entiers positifs (s’arrête dès que l’utilisateur saisit un entier négatif)

1. Gérer l'entrée utilisateur (et son arrêt) à l'aide d'une boucle **while** ou **do while**.
2. Afficher la **somme** des entiers positifs saisis par l’utilisateur.
3. Modifier le programme pour qu'il affiche également la **moyenne** des entiers positifs saisis par l’utilisateur.

:::info
Pour calculer la moyenne, il faut compter le nombre d'entiers positifs saisis par l'utilisateur puis diviser la somme par ce nombre.
Vous n'avez pas à stocker les entiers saisis par l'utilisateur (vous découvrirez comment faire cela dans le prochain chapitre) vous pouvez simplement stocker la somme et le nombre d'entiers saisis.
:::

## Exercice 3 (Pair ou impair)

Écrire un programme qui demande à l’utilisateur de saisir un entier et affiche si cet entier est **pair** tout les nombres positifs **pairs** inférieurs à cet entier sinon si il est **impair** tout les nombres positifs **impairs** inférieurs à cet entier.

:::tip
Vous pourrez utiliser **std::cin** pour demander le nombre à l'utilisateur (aucune gestion d'une éventuelle erreur de saisie n'est demandée ici).
:::

:::tip
Vous pouvez utiliser l'opérateur modulo `%` qui donne le reste de la division entière.
:::

## Exercice 3 (Majeur ou mineur)

Écrire un programme qui demande à l’utilisateur de saisir son **âge** (un nombre entier) et aﬀiche s’il est **majeur** ou **mineur**.

1. Gérer la saisie d'un âge à stocker dans une variable.
2. Gérer le cas où l’utilisateur saisit un **âge négatif** et afficher un message d’erreur dans ce cas.
3. Gérer le cas où l’utilisateur saisit un **âge avec des lettres** et afficher et gérer l’erreur.

:::info
`std::cin >> x` renvoie **true** si tout est correct ou **false** si on a rencontré une erreur lors de la saisie.
Dans notre cas, si l'utilisateur saisit un âge avec des lettres, la saisie échoue et la variable âge n'est pas modifiée.

Il est aussi possible de tester si la saisie précédente a échoué avec `std::cin.fail()` qui renvoie **true** si la saisie a échoué et **false** sinon.

`std::cin.fail()` équivaut à `!(std::cin >> x)`.

Dans le cas où la saisie a échoué, il faut réinitialiser la saisie de l'utilisateur pour pouvoir saisir à nouveau un âge.

`std::cin.clear()` restaure std::cin à un état fonctionnel, sans erreur.
`std::cin.ignore()` permet d’ignorer un nombre défini de caractères, soit jusqu’à un nombre maximum (exemple 500), soit jusqu’à un caractère précis (exemple '\n' ou 'a'). Dans notre cas, nous allons utiliser ceci pour réinitialiser la saisie de l'utilisateur si on a rencontré une erreur.

```cpp
std::cin.clear(); // On remet std::cin dans un état fonctionnel.
std::cin.ignore(255, '\n'); // On vide les caractères mémorisés.
```
:::

## Exercice 4 (Le juste prix)

Un nombre entier est tiré au hasard entre `1` et `100` (inclus).

Le joueur doit deviner ce nombre en un minimum de tentatives.

À chaque tentative, le programme indique au joueur si le nombre à deviner est plus grand ou plus petit que celui qu’il a proposé.

Le programme s’arrête lorsque le joueur a trouvé le nombre mystère.

:::info
Pour générer un nombre aléatoire, vous pouvez utiliser la fonction [**rand()**](https://en.cppreference.com/w/cpp/numeric/random/rand) de la bibliothèque **cstdlib**.

Elle retourne un nombre entier aléatoire entre **0** et **RAND_MAX** (une constante définie dans la bibliothèque **cstdlib**).

Pour obtenir un nombre aléatoire entre **1** et **100**, on peut utiliser l'opérateur **modulo** `%`:

```cpp
std::rand() % 100 + 1
```

Pour que le générateur de nombres aléatoires ne génère pas toujours la même séquence de nombres, il faut l’initialiser avec une valeur différente à chaque exécution du programme.

C'est avec la fonction [**srand()**](https://en.cppreference.com/w/cpp/numeric/random/srand).

On peut utiliser la fonction [**time()**](https://en.cppreference.com/w/cpp/chrono/c/time) de la bibliothèque **ctime** pour obtenir l'heure actuelle en secondes et l'utiliser comme valeur d'initialisation du générateur de nombres aléatoires.

```cpp
#include <cstdlib>
#include <ctime>
#include <iostream>
 
int main() 
{
  // Initialisation du générateur de nombres aléatoires avec la fonction time()
  std::srand(std::time(nullptr));
  int random_variable { std::rand() };
  std::cout << "Random value between 0 and " << RAND_MAX << " : " << random_variable << std::endl;
}
```

Il existe une façon plus moderne de générer des nombres aléatoires à partir de **C++11**, nous découvrirons cela au prochain semestre.
:::

## Exercice 5 (ASCII art)

1. Écrire un programme qui demande à l’utilisateur de saisir un **entier positif** et affiche un triangle rectangle de hauteur `n` comme dans l’exemple ci-dessous.

```bash title="exemple d'exécution"
Entrez un entier positif : 5
*
**
***
****
*****
```

2. Essayer d'afficher un sapin de noël, autrement dit un triangle rectangle isocèle de hauteur `n` et dont le sommet est composé d'une seule étoile.

```bash title="exemple d'exécution"
Entrez un entier positif : 3
  *
 ***
*****
```

3. Essayer d'afficher les contours d'un carré de côté `n` comme dans l’exemple ci-dessous.

```bash title="exemple d'exécution"
Entrez un entier positif : 5
*****
*   *
*   *
*   *
*****
```

## Exercice 6 (conjecture de Syracuse)

Écrire un programme qui, à partir d’un **entier positif** saisi par l’utilisateur, affiche le nombre de termes de la suite de Syracuse nécessaires pour atteindre `1` (on inclut le terme de départ dans le décompte).

La suite de **Syracuse** est une suite d'entiers dans laquelle chaque terme est obtenu en appliquant une fonction à son terme précédent. Cette fonction est définie comme suit:

- si le terme est pair, le terme suivant est égal à la **moitié** du terme précédent. (x/2)
- si le terme est impair, le terme suivant est égal à **3** fois le terme précédent **plus 1** (3x+1).

Par exemple, si le terme de départ est `7`, la suite est :

`7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1, ...`

Ici, la suite atteint la valeur `1` au bout de `17` termes (incluant le terme de départ).

Vous remarquez qu’à la fin, une fois qu’on est tombé sur 1, la suite finit par répéter indéfiniment le cycle `4, 2, 1`.

Il est conjecturé que cette suite atteint toujours la valeur `1` quelque soit le terme de départ. Cela a d'ailleurs déjà été vérifiée numériquement jusqu’à 10^20 (par [Tomas Oliveira e Silva](https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-01031-5/S0025-5718-99-01031-5.pdf)).

## Exercices Bonus

<details>

<summary>Soldes: Conditions et gestion de l'entrée utilisateur</summary>

C'est les soldes !

Créer un programme qui demande à l'utilisateur:
- le type de produit (à stocker dans un **enum**)
- le prix du produit (un nombre flottant)
- s'il a une carte de fidélité (boolean)
- son age (un nombre entier)

En fonction des informations saisies, le programme affiche le **prix final** après réduction.

Vous disposez des informations suivantes:

| Type d'article | Réduction | Réduction avec carte de fidélité |
| -------------- | --------- | -------------------------------- |
| Alimentation | 5% | 8% |
| Vêtements | 10% | 15% |
| Chaussures | 12% | 18% |
| Autre | 0% | 0% |

S'il à moins de **26** ans, il a **10%** de réduction supplémentaire sur tous les articles après réduction.

Je vous fourni le code suivant pour l'énumération et la gestion de la saisie de l'utilisateur:

```cpp
enum class Article { Alimentation, Vetements, Chaussures, Autre };

// C'est un mécanisme avancé, vous n'avez pas besoin de comprendre comment ça marche.
// On en reparlera au second semestre.
// retenez juste que ça permet de convertir une entrée de l'utilisateur en Article.
std::istream& operator>>(std::istream& is, Article& article)
{
    std::string articleAsString;
    is >> articleAsString;

    if (articleAsString == "Alimentation") {
        article = Article::Alimentation;
    } else if (articleAsString == "Vetements") {
        article = Article::Vetements;
    } else if (articleAsString == "Chaussures") {
        article = Article::Chaussures;
    } else if (articleAsString == "Autre") {
        article = Article::Autre;
    } else {
        is.setstate(std::ios::failbit);
    }

    return is;
}
```

Cela nous permet d'utiliser l'opérateur `>>` pour lire un **enum** comme on pourrait le faire avec un **int** ou un **float**.
Sans cela, on aurait du utiliser une variable intermédiaire de type **string** ou **int** pour stocker la saisie de l'utilisateur et faire la conversion nous même.

<details>

<summary>Exemple de saisie d'un enum</summary>

```cpp
#include <iostream>

enum class Article { Alimentation, Vetements, Chaussures, Autre };

std::istream& operator>>(std::istream& is, Article& article)
{
    std::string articleAsString;
    is >> articleAsString;

    if (articleAsString == "Alimentation") {
        article = Article::Alimentation;
    } else if (articleAsString == "Vetements") {
        article = Article::Vetements;
    } else if (articleAsString == "Chaussures") {
        article = Article::Chaussures;
    } else if (articleAsString == "Autre") {
        article = Article::Autre;
    } else {
        is.setstate(std::ios::failbit);
    }

    return is;
}

int main()
{
    Article article;
    std::cin >> article;

    // On vérifie si la saisie a échoué.
    if (std::cin.fail()) {
        std::cout << "Erreur de saisie, il faut saisir un type d'article valide (\"Alimentation\", \"Vetements\", \"Chaussures\" ou \"Autre\")" << std::endl;

        std::cin.clear(); // On remet std::cin dans un état fonctionnel.
        std::cin.ignore(255, '\n'); // On vide les caractères mémorisés.

        // le programme s'arrête si on a rencontré une erreur de saisie et renvoie 1 pour indiquer une erreur.
        return 1;
    }

    if (article == Article::Alimentation) {
        std::cout << "Vous avez saisi un article de type Alimentation" << std::endl;
    } else if (article == Article::Vetements) {
        std::cout << "Vous avez saisi un article de type Vetements" << std::endl;
    } else if (article == Article::Chaussures) {
        std::cout << "Vous avez saisi un article de type Chaussures" << std::endl;
    } else if (article == Article::Autre) {
        std::cout << "Vous avez saisi un article de type Autre" << std::endl;
    }

    return 0;
}
```
</details>

1. Demander à l'utilisateur de saisir le type d'article, le prix, s'il a une carte de fidélité et son âge.

2. Gérer les cas où l'utilisateur saisit des informations incorrectes (enum incorrect, prix ou âge négatif, etc.) et afficher un message d'erreur dans ce cas.
Vous pouvez reprendre mon exemple de saisie d'un enum.

3. Calculer le prix final en fonction des informations saisies et afficher le résultat.

4. L'enseigne offre également un bon d'achat de **10%** du montant total du ticket de caisse, à valoir sur un prochain achat. Le bon d'achat ne peut pas être supérieur à 30€.
Calculer le montant du bon d'achat et l'afficher en fin de programme.

</details>
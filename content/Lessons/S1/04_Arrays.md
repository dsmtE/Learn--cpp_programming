---
title: Des tableaux
tags:
    - C++
---

Nous avons vu les **variables** pour stocker des valeurs, les **boucles** pour simplifier le code et faire des itérations et il est maintenant légitime de se demander comment manipuler un nombre plus important de variables.

Par exemple si l'on veut calculer la moyenne d'une liste de nombres, comment faire ?
On pourrait avoir plusieurs variables mais si on a besoin de manipuler plus de 10 nombres cela va se complexifier. Surtout dans le cas plus complexe où l'on a pas connaissance à l'avance du nombre d'éléments que l'on veut manipuler (entrée utilisateur par exemple), comment faire ?

## Tableaux

Les tableaux sont là pour résoudre ce problème et nous permettre de stocker plusieurs éléments.

Ils font partie de ce qu'on appelle les **structures de données**, des structures permettant d'organiser de façon particulière des données, on les nomme aussi des **conteneurs**.

En ce qui concerne les tableaux il en existe principalement deux types:
- **std::array** qui permet de stocker un nombre fixé à l'avance d'éléments
- **std::vector** qui permet de stocker un nombre variable ou dynamique d'éléments

A retenir que les tableaux permettent seulement de stocker **des variables de même type**. 

:::note
Il existe bien d'autres **structures de données** qui stockent de façon différente (avec des avantages et des inconvénients) mais nous n'allons pas rentrer dans ce détail pour l'instant. 
:::

## std::vector

Comme vous le remarquez, j'ai ajouté **std::** devant vector ce qui nous indique que c'est une fonctionnalité déjà codée pour nous dans la bibliothèque standard. Pour pouvoir s'en servir on va donc inclure le fichier contenant cette fonctionnalité en faisant **#include < vector >**

**std::vector** est un **tableau dynamique** qui s'**agrandit** et se **rétrécit** en fonction du nombre d'éléments que l'on souhaite stocker à l'intérieur.

On l'initialise entre accolades en précisant entre chevrons (<kbd>\<</kbd> et <kbd>\></kbd>) le type de variable que l'on souhaite stocker:

```cpp
std::vector</* type des éléments du tableau */> nom {};
```

```cpp title="des exemples"
#include <vector>

int main()
{
    // initialisation d'un tableau à remplir plus tard
    std::vector<int> vector01 {};

    // il est aussi possible de le préremplir à sa création
    std::vector<int> vector02 { 12, 18, 8, 4, 9 };

    // on peut rendre constant afin d'éviter de future modifications si c'est ce que l'on souhaite
    std::vector<float> const vector03 { 3.1415f, 5.2365f };

    // il est aussi possible de l'initialiser en copiant les valeurs d'un autre tableau de cette manière
    std::vector<float> vector04 { vector03 };

    return 0;
}
```

## Manipuler notre tableau

### Accéder aux éléments

Pour accéder aux éléments on utilise les crochets (<kbd>[</kbd> et <kbd>]</kbd>) après le nom de notre tableau, avec la position de l’élément à récupérer.

```cpp
#include <vector>
#include <iostream>

int main()
{
    std::vector<int> vector { 12, 18, 8, 4, 9 };
    std::cout << "the second élément is " << vector[1] << std::endl;
    
    return 0;
}
```

:::caution
:warning: généralement en informatique (c'est le cas en **C++**), les éléments sont indexés à partir de **0** et **non 1**. c'est pour ça que ```0``` correspond au premier élément et ```1``` au deuxième dans notre exemple.
:::

:::danger
Et si j’accède à l’élément d'index ```6``` (donc le 7ème élément) alors que mon tableau n'en contient que ```6```, que se passe-t-il ?

C'est un **comportement indéterminé**. Le programme peut continuer sans rien dire, ou alors s'arrêter brusquement avec des erreurs nommées généralement **"out of range"** (dépassement de capacité) ou **"segmentation fault"** (erreur de segmentation).
Il ne **faut pas** utiliser d’indice **inférieur à 0** ou **supérieur ou égal** à la **taille** de notre tableau.
:::

### Taille du tableau

Pour connaître la taille du tableau on va utiliser la fonction propre (appelée **méthode**) ```size()```  qui renvoie le nombre d'éléments.

:::note
Une **fonction** est un regroupement d'instructions que permet de réutiliser du code à plusieurs endroits d'un programme. Une **méthode** est une **fonction** propre à un objet(ici notre ```std::vector```) et qui peut le manipuler ou retourner des informations à son sujet.
Nous en reparlerons plus en détail dans un prochain chapitre, mais nous pouvons dès maintenant en utiliser.
:::

Le type de retour de cette **méthode** est un type nouveau, que nous n’avons pas rencontré jusque-là et qui s’appelle **std::size_t**.
C’est un type **entier** non signé capable de stocker l'index d'un élément ou la taille de n’importe quel tableau, aussi grand soit-il. C'est, pour faire simple, un **très grand entier positif** équivalent à écrire ```unsigned long int```.

```cpp
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> const vector { 12, 18, 8, 4, 9 };

    std::size_t const size { vector.size() };
    std::cout << "Mon tableau contient " << size << " éléments." << std::endl;

    return 0;
}
```

:::note
Il existe aussi une fonction **std::size(...)** qui prends en paramètre le tableau et retourne sa taille.

```cpp
std::size_t const size { std::size(vector) };
```

Dans la pratique, j'utilise plutôt la **méthode**, plus lisible selon moi mais c'est un avis personnel et vous êtes libres de choisir ce qu’il vous plaît. 
:::

### Premier et dernier élément

On pourrait utiliser la taille pour accéder au dernier élément du tableau mais on peut aussi utiliser deux autres méthodes (**front()** et **back()**) pour accéder au premier et au dernier élément du tableau:

```cpp
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> const vector { 12, 18, 8, 4, 9 };

    // Façon de faire hérité du c en utilisant la taille du tableau (attention au -1 les index commencent à 0)
    std::cout << "Le dernier élément est " << vector[vector.size() - 1] << "." << std::endl;

    std::cout << "Le premier élément est " << vector.front() << "." << std::endl;
    std::cout << "Le dernier élément est " << vector.back() << "." << std::endl;

    return 0;
}
```

### Vérifier si un tableau est vide

Pour savoir si le tableau est vide on peut utiliser une **condition** sur la taille du tableau. Il y a aussi la méthode **```empty()```** qui fait ce test pour nous et permet d'écrire quelque chose de plus lisible:

```cpp
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> const vector01 { };
    std::vector<int> const vector02 { 12, 18, 8, 4, 9 };

    std::cout << std::boolalpha;

    std::cout << "vector01 est vide : " << vector01.size() == 0 << std::endl;

    std::cout << "vector01 est vide : " << vector01.empty() << std::endl;
    std::cout << "vector02 est vide : " << vector02.empty() << std::endl;
    return 0;
}
```

### Afficher les éléments

Pour afficher les éléments du tableau on peut simplement utiliser sa taille et une boucle **for** pour itérer sur les différentes valeurs:

```cpp
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> const vector { 12, 18, 8, 4, 9 };

    for (std::size_t i {0}; i < vector.size(); i++)
    {
        std::cout << vector[i] << std::endl;
    }

    return 0;
}
```


#### Range-based for loop
Depuis le C++ moderne (à partir de **C++11**) il existe une nouvelle façon de parcourir des **conteneurs** (qui se généralise sur d'autres structures de données):

```cpp
for (/* type d'un élément du tableau */ nom : /* structure de données à parcourir */)
{

}
```

:::note
On appelle cela un **foreach** dans d'autres languages.
:::

Plus besoin de récupérer la taille et cela va rendre notre code plus lisible:

```cpp title="Petit exemple avec std::vector"
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> const vector { 12, 18, 8, 4, 9 };

    for (int const value : vector)
    {
        std::cout << value << std::endl;
    }

    return 0;
}
```

### Ajouter, supprimer et modifier des éléments

Comme expliqué, le std::vector est dynamique dans le sens où il est possible d'ajouter ou de supprimer des éléments.
C'est avec la méthode **push_back** que l'on ajoute un élément:

```cpp
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> vector { 42 };
    // On ajoute des éléments
    vector.push_back(23);
    vector.push_back(5);

    for (int const value : vector)
    {
        std::cout << value << std::endl;
    }

    return 0;
}
```

:::caution
On ne pourra pas ajouter un élément de type différent dans notre tableau, un tableau ne peut contenir qu'un seul type de variable.
:::

---

Pour supprimer un élément on utilisera les méthodes ```pop_back``` ou ```clear```.

```Clear``` comme son nom l'indique permet de vider entièrement le tableau et ```pop_back``` permet de retirer **et** retourner le dernier élément.

```cpp
#include <vector>
#include <iostream>

int main()
{
    std::vector<int> vector { 42, 12 };

    std::cout << "Taille avant clear : " << vector.size() << std::endl;

    vector.clear();

    std::cout << "Taille après clear : " << vector.size() << std::endl;

    vector.push_back(23);
    vector.push_back(42);
    vector.push_back(25);

    std::cout << "Le tableau contient maintenant: ";
    for (int const value : vector)
    {
        std::cout << value << ", ";
    }
    std::cout << std::endl;

    vector.pop_back();

    std::cout << "Le tableau contient maintenant: ";
    for (int const value : vector)
    {
        std::cout << value << ", ";
    }
    std::cout << std::endl;

    if(!std::empty(vector))
    {
        int last_value {vector.back()};
        vector.pop_back();

        std::cout << "La derniere valeur du tableau etait : " << last_value << std::endl;

        std::cout << "Le tableau contient maintenant: ";
        for (int const value : vector)
        {
            std::cout << value << ", ";
        }
        std::cout << std::endl;
        
    }

    return 0;
}
```

:::danger
Appeler **pop_back** sur un tableau vide est aussi un **comportement indéterminé**. Une très bonne pratique est donc de s'assurer que le tableau n'est pas vide.
:::

---

Enfin, pour pouvoir modifier une valeur il suffit d'accéder à l'élément (à condition que le tableau ou la variable ne soit pas constante évidemment) d'utiliser le symbole égal <kbd>=</kbd>.

```cpp
#include <vector>

int main()
{
    std::vector<int> vector { 24, 12, 6 };

    // On change la valeur du premier élément
    vector[0] = 15;

    return 0;
}
```

## std::array

std::array est un tableau **statique**, c’est-à-dire que sa taille doit être connue à la compilation et ne peut pas varier.
En contre-partie, cette structure de données est plus performant et plus rapide qu’un **std::vector** puisqu’il n’y a pas d’opération d’ajout ou de retrait d’éléments.

Pour l’utiliser, il faut inclure le ficher qui contient cette fonctionnalité (```#include < array >```).

On l'initialise en précisant entre chevrons le **type** de variable que l'on souhaite stocker et sa **taille**:

```cpp
std::array</* type des éléments du tableau */, /* taille du tableau */> nom {};
```

Contrairement à **std::vector**, un tableau statique doit contenir autant d'éléments que la taille précisée.
Ainsi, si l'on ne précise donc rien ou pas la totalité des éléments à son initialisation, le tableau va être rempli avec des valeurs par défaut.

```cpp
#include <array>
#include <iostream>

int main()
{
    std::array<int, 5> array_of_integer { 24, 12, 6, 32, 8 };

    // On change la valeur du deuxième élément
    array_of_integer[1] = 42;

    std::cout << "Le tableau d'entier contient: ";
    for (int const integer : array_of_integer)
    {
        std::cout << integer << ", ";
    }
    std::cout << std::endl;

    // les 4 autres valeurs non précisées seront donc égale à 0.0f
    std::array<float, 6> array_of_float { 45.3f, 142.857f };

    std::cout << "Le tableau de flottant contient: ";
    for (float const integer : array_of_integer)
    {
        std::cout << integer << ", ";
    }
    std::cout << std::endl;

    // Ce tableau sera rempli de 4 valeurs par défaut égales à 0.0
    std::array<double, 4> array_of_double { };

    return 0;
}
```

Il existe la méthode **```fill```** spécifique au ```std::array``` qui permet de le remplir avec une valeur donnée:

```cpp
#include <array>
#include <iostream>

int main()
{
    std::array<int, 5> array { 1, 2, 3, 4, 5};

    array.fill(3);

    std::cout << "Le tableau contient: ";
    for (int const value : array)
    {
        std::cout << value << ", ";
    }
    std::cout << std::endl;


    return 0;
}
```

Le reste des fonctionnalités reste identique avec le ```std::vector``` (hors les ajouts et suppressions car le tableau ne change pas de taille ici).

## Pour aller plus loin

[std::vector](https://en.cppreference.com/w/cpp/container/vector) et [std::array](https://en.cppreference.com/w/cpp/container/array) sont des structures qui disposent d'une multitude de méthodes très utiles, je vous laisse chercher par vous même dans la documentation ou revenir vers moi si vous avez des questions à ce sujet.

## std::string: un tableau caché

Nous avions découvert le type un peu particulier **std::string** dans le chapitre sur les variables.

Ce "type" est lui même une structure de données qui permet de stocker du texte, une suite de caractères (de type **char** donc).

Le type **std::string** n’est donc rien d’autre qu'un **tableau "dynamique" de char**, conçu et optimisé spécialement pour le stockage de texte.

On peut donc faire toutes les opérations que nous venons de voir, accéder à sa taille, accéder aux caracatères, les modifier, en ajouter ou supprimer et enfin boucler sur les caractères.

```cpp title="des exemples"

#include <iostream>
#include <string>

int main()
{
    std::string phrase { "Hello IMAC!" };

    std::cout << "Premier caractère : " << phrase.front() << std::endl;
    std::cout << "Dernier caractère : " << phrase.back() << std::endl;

    phrase.pop_back();
    phrase.push_back('.');

    std::cout << phrase << std::endl;

    phrase[9] = ' ';
    std::cout << phrase << std::endl;

    std::cout << "Cette phrase contient " << phrase.size() << " caractères." << std::endl;
    // Il existe aussi "phrase.length()" qui fait exactement la même chose

    for (char lettre : phrase)
    {
        std::cout << lettre << ',';
    }
    std::cout << std::endl;

    std::cout << std::boolalpha;
    std::cout << "Est ce que la phrase est vide ? " << std::empty(phrase) << std::endl;

    return 0;
}

```

**std::string** dispose de nombreuses autres méthodes permettant de faire d'autres choses spécifiques à la gestion de texte. Nous aurons l’occasion de le revoir, retenez simplement ici que **std::string** peut être **manipulé comme un tableau**.

## Résumé

Il existe plusieurs types de tableaux, **statique** quand la taille est fixe et **dynamique** quand elle peut varier.
- **std::vector** est un tableau **dynamique**.
- **std::array** est un tableau **statique**.
- **std::string** est un tableau **dynamique** spécialement conçu pour la gestion du texte.
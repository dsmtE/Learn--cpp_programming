---
title: "Allouer et manipuler la mémoire"
tags:
    - C++
---

Jusque là nous avons manipulé des variables et tableaux sans nous soucier vraiment de ce qu'il se passe sous le capot. Il est grand temps de comprendre un peu plus dans le détail ce qu'il se passe et comment est allouée la **mémoire** en C++.

## Mode d'allocation

Il existe trois principaux modes d’allocation de la mémoire:

- l’allocation **statique**
- l’allocation sur la **Stack**
- l’allocation sur la **Heap**

### Allocation statique

Lorsque le programme s’initialise, il demande une quantité de mémoire spécifiée dans le code source du programme, laquelle ne pourra **pas changer** par la suite.

Nous n'avons pas rencontré ce type d'allocation pour l'instant mais sachez que ça existe.

### Allocation sur la **Stack**

Jusqu'a présent, nous avons principalement rencontré des allocations de mémoire sur la **Stack**. C'est le cas de toutes nos variables locales (dans des fonctions, y compris dans la fonction ```main```).

La **Stack** (ou **pile** en français) est une zone mémoire qui sert d’espace de stockage aux **variables** déclarées par les fonctions et permet aussi de garder une trace des appels de fonctions.

Elle tient son nom de son mode de fonctionnement, semblable à une **pile** de dossiers. Il s’agit d’une **structure de données** fondée sur le principe “dernier posé sur le dessus de la pile, premier à sortir”. Cet ordonnancement s’appelle **LIFO** (Last In, First Out). La **Stack** possède donc deux actions principales : **push**, pour ajouter un élément, et **pop** pour retirer et récupérer cet élément. Cela rend très simple le suivi de la pile pour libérer ou demander de la mémoire.

Comme les accès à la Stack sont **contiguës** et que les mêmes adresses mémoire tendent à être réutilisées, les lectures et écritures dans la **Stack** sont très **performantes**. Cependant cela manque de souplesse car son allocation doit être "**prévue**" lors de l’écriture du programme (Pour des variables de taille déjà connue à la compilation).

:::info
La **Stack** a une **taille fixée** (qui dépend des machines et systèmes d'exploitation(OS)).
Pour garder une trace de l’emplacement mémoire actuel, il existe un **pointeur** appelé **Stack Pointer**. Chaque fois que quelque chose doit être écrit ou retiré dans la **Stack**, on déplace simplement ce pointeur. Le pointeur ne peut pas aller au delà des limites de la Stack, cela risque de provoquer un crash du programme appelé **Stack overflow**. Cela peut se produire avec une fonction **récursive** avec de nombreux appels récursifs ou sans condition d'arrêt par exemple.
:::

La syntaxe pour allouer de la mémoire sur la **Stack** est la suivante:

```cpp
int x {};
```

Vous connaissez déjà cette syntaxe, c'est simplement la déclaration d'une variable locale.

### Allocation sur la **Heap**

L’allocation sur la **Heap** se fait de manière **dynamique** pendant l’exécution d’un programme (on parle de runtime). L’espace nécessaire n’a pas besoin d'être défini en amont dans le code. Le programme effectue la **demande** d’allocation d’espace à l’OS au cours de son exécution.

:::note
Il y a généralement un abus de langage et ce que l'on qualifie d'allocation **dynamique** désigne ce type d'allocation sur la **Heap**.
L'allocation sur la Stack est également *dynamique* dans le sens où elle se produit **pendant** l'exécution du programme en fonction des variables déclarées.
:::

La **Heap** permet donc le contrôle complètement **arbitraire** de l’allocation et de la libération. Lorsque le processus nécessite plus de mémoire, il en fait simplement la demande à l’OS (dans la limite où il est en mesure de fournir un tel emplacement mémoire). C'est donc aussi ce type d'allocation que l'on privilégie dans le cas de gros volumes de données.

Cependant, cela demande de maintenir des **pointeurs** pour chacune des valeurs stockées, afin de savoir où se trouve la mémoire demandée pour pouvoir la manipuler mais aussi la **libérer**. Cette gestion de la mémoire étant plus "complexe", les performances n’en sont généralement pas aussi bonnes, mais parfois on n'a tout simplement pas le choix.

La syntaxe pour allouer de la mémoire sur la **Heap** est la suivante:

```cpp
int* x { new int };
```

Je vous expliquerai plus en détail ce que cela signifie dans la suite de ce chapitre.

## Adresse et pointeurs

J'ai évoqué le terme de **pointeur** mais qu'est ce que c'est ?

Une variable est localisée quelque part dans notre mémoire.
On peut voir la mémoire de notre ordinateur comme une grande étagère à livres dans laquelle chaque emplacement est numéroté.
Chaque variable a une **adresse** (un numéro) qui permet de savoir **où** elle se trouve en mémoire.

Cette adresse est simplement un nombre (généralement représenté sous forme *hexadécimale*).

On peut récupérer l'adresse d'une variable en ajoutant le symbole "esperluette" <kbd>&</kbd> devant le nom de la variable en question.

```cpp title="Essayons:"
#include <iostream>

int main()
{
    int integer {4};

    std::cout << &integer << std::endl; 
    return 0;
}
```

qui nous donne un truc qui ressemble à ça:
```bash
0x7ffe08bf5854
```

Ce nombre indique où est stockée la valeur de notre variable en mémoire (que ce soit la **heap** ou la **stack**).

Maintenant que nous savons **où** se trouve notre variable on va pouvoir stocker cette **adresse**.

C'est justement le rôle du **pointeur** de stocker l'**adresse** d'une variable.

On indique que l'on souhaite manipuler un **pointeur** en ajoutant le symbole <kbd>*</kbd> après le type de la variable. Cela indique donc que l'on stocke une **adresse** vers une variable du type indiqué et non une valeur.

```cpp
#include <iostream>

int main()
{
    int integer {4};
    int* integer_pointer {&integer};

    std::cout << integer << std::endl;
    std::cout << "address: " << integer_pointer << std::endl;

    return 0;
}
```

### Déréférencement

Avec ce pointeur, il est possible de faire ce qu'on appelle un **déréférencement** et aller *voir* le contenu de l'emplacement situé à l'**adresse** stockée. C'est-à-dire, la valeur de la variable pointée.

Pour faire un **déréférencement** on utilise également le symbole <kbd>*</kbd> devant le nom de notre pointeur comme cela:

```cpp
#include <iostream>

int main()
{
    int integer {4};
    int* integer_pointer {&integer};
    
    std::cout << integer << std::endl;
    std::cout << "address: " << integer_pointer << std::endl;
    std::cout << "value of integer: " << *integer_pointer << std::endl;

    // On peut même modifier la valeur de notre variable par ce biais

    *integer_pointer = 18;
    std::cout << "value of integer: " << integer << std::endl;

    return 0;
}
```

### Null pointer

Il est possible d'indiquer qu'un **pointeur** ne pointe actuellement sur **rien** en lui attribuant une valeur nulle avec le mot-clé ```nullptr```: 

Il s'agit alors d'un pointeur nul (ou **null pointer** en anglais).
Le **déréférencement** d'un pointeur nul provoque une erreur:

```cpp
#include <iostream>

void displayPointer(int const* ptr)
{
    if (ptr != nullptr)
    {
        std::cout << *ptr << std::endl;
    }
    else
    {
        std::cout << "null" << std::endl;
    }
}

int main()
{
    float* float_pointer {nullptr};
    
    displayPointer(float_pointer); // null

    return 0;
}
```

:::info
Il existe également le mot-clé ```NULL``` qui vient du **C** pour indiquer un pointeur nul. Il a cependant des inconvénients et je vous demande d'utiliser ```nullptr``` en **C++** qui est plus sûr.
:::

## Allocation dynamique en pratique: New & delete

Comme je l'ai évoqué précédemment avec l’allocation **dynamique** dans la **Heap** on va donc demander un emplacement mémoire et le libérer plus tard. Cela se fait avec les mots-clés **new** et **delete**. Cette demande de mémoire va retourner un **pointeur**.

```cpp
#include <iostream>

int main()
{
    // je demande un emplacement mémoire pour un entier
    int* integer_ptr {new int};

    // je peux aussi demander et initialiser un entier
    int* number_ptr {new int{5}};

    std::cout << number_ptr << std::endl;
    std::cout << *number_ptr << std::endl;

    // Une fois que l'on en a plus besoin, on libère les zones mémoire demandées
    delete number_ptr;
    delete integer_ptr;

    return 0;
}
```

```bash title="qui nous donne:"
0x557590f93eb0
5
```

:::danger
Le pointeur est toujours "*existant*" après avoir été libéré. Le pointeur n'est rien d'autre qu'un nombre représentant l'**adresse** mémoire. Cela ne veut pas dire que nous avons le **droit** de manipuler cette mémoire. Si l'espace mémoire pointé par le **pointeur** est libéré, il ne faut **pas** l'utiliser car cet emplacement mémoire ne nous appartient plus.

```cpp
#include <iostream>

int main()
{
    int* number_ptr {new int{2}};
    delete number_ptr;

    // Ici l'adresse étant un nombre, elle est toujours valide
    std::cout << number_ptr << std::endl;
    // Mais la valeur contenue à cette adresse peut prendre n'importe quelle valeur en fonction de l'usage nouveau de cet emplacement mémoire
    std::cout << *number_ptr << std::endl;

    return 0;
}
```

Il est donc recommandé d'assigner au pointeur la valeur ```nullptr``` une fois libéré pour éviter tout problème.

```cpp
int* number_ptr {new int{2}};
delete number_ptr;
number_ptr = nullptr;
// ...
```
:::

## Tableaux

Il est également possible de demander plusieurs emplacements mémoire contiguës (autrement dit un tableau) d'un coup en précisant entre **crochets** la taille du tableau <kbd> [ ] </kbd>.
Le **pointeur** va contenir alors l'adresse du **premier** élément du tableau.

L'adresse stockée par le pointeur étant un nombre (représenté en **hexadécimal**) il est possible de faire des opérations dessus comme l'addition ou la soustraction. Cela permet de se positionner sur un emplacement mémoire précis du tableau.

Pour libérer un tableau alloué dynamiquement, il faut utiliser le mot-clé **delete** suivi de **crochets** <kbd> [ ] </kbd>.

```cpp
int main()
{
    // attention ici les valeurs ne sont pas initialisées
    int* array_ptr {new int[5]};

    // Je me positionne sur le 3ème élément du tableau et j'utilise le déréférencement pour modifier sa valeur
    *(array_ptr + 2) = 42;

    // On peut aussi utiliser la notation avec les crochets qui est équivalente
    array_ptr[2] = 42;

    // Je libère l'espace mémoire alloué
    delete[] array_ptr;

    return 0;
}
```

:::note
Si la taille est connue à l'avance (à la **compilation**), il est aussi possible de déclarer un tableau sur la **Stack** avec la taille entre **crochets** <kbd>[ ]</kbd>.
```cpp
int main()
{
    int array[5];

    // Je peux accéder aux valeurs du tableau avec les crochets
    array[0] = 42;

    return 0;
}
```
:::

:::danger
Il est important de noter que le **pointeur** ne contient pas la taille du tableau. Il est donc important de la conserver quelque part pour ne pas dépasser la taille du tableau.

Si vous dépassez, vous risquez de modifier des valeurs qui ne vous appartiennent pas et donc de causer des erreurs.

```cpp
int main()
{
    int* array_ptr {new int[5]};

    // Ici je dépasse la taille du tableau et j'essaie de modifier une valeur qui ne m'appartient pas
    array_ptr[5] = 42;

    return 0;
}
```

Il s'agit d'une erreur très courante appelée "**erreur de segmentation**". Elle se produit lorsque votre programme essaie de lire ou d'écrire dans une zone mémoire qui ne lui a pas été attribuée (ou ne l'est plus).
:::

C'est la façon de gérer les tableaux en **C**. Cependant, en **C++** il existe des **structures de données** plus adaptées pour gérer les tableaux comme ```std::array``` ou ```std::vector``` que nous avons vu précédemment.

## std::vector: explications

Justement, parlons un peu de ```std::vector```.
Comme dit précédemment, l'allocation dynamique (sur la **Heap**) est particulièrement intéressante lorsque l’on ne sait pas à l’avance la taille dont on va avoir besoin. C'est exactement le cas d'utilisation du ```std::vector```.

En effet, ```std::vector``` n'est rien d'autre qu'une **structure de donnée** qui gère en interne un **pointeur** vers une zone mémoire contiguë. Lorsque celui-ci est trop petit et que l'on souhaite tout de même ajouter une valeur, la structure demande un nouvel espace mémoire plus grand, copie les données dans ce nouvel espace mémoire et enfin libère l'ancien espace mémoire qui n'est donc plus utilisé.

Ce changement (allocation, copie, libération de mémoire) a un coût c'est pourquoi ```std::vector``` prévoit un espace plus grand que nécessaire lors d'une allocation pour anticiper de futurs ajouts dans le tableau dynamique.

Il est possible de connaître la taille de l'espace de stockage alloué pour le ```std::vector``` avec sa méthode ```capacity()``` qui retourne cette taille exprimée en nombre d'éléments. C'est différent de la taille actuellement utilisée qui s'obtient avec la méthode ```size()```.

<details>
  <summary> Une implémentation simplifiée </summary>

```cpp
struct IntegerVector
{
    size_t size {0};
    size_t capacity {0};
    int* pointer {nullptr};

    void reserve(size_t const newCapacity)
    {
        if (newCapacity <= capacity)
        {
            return;
        }

        // Je demande un nouvel espace mémoire
        int* newPointer {new int[newCapacity]};

        // Si j'avais déjà un espace mémoire
        if (pointer != nullptr)
        {
            // Je copie les données de l'ancien espace mémoire vers le nouveau
            std::copy(pointer, pointer + size, newPointer);

            // Je libère l'ancien espace mémoire
            delete [ ] pointer;
        }

        // Je met à jour les informations de la structure
        capacity = newCapacity;
        pointer = newPointer;
    }

    void push_back(int const value)
    {
        // Si je n'ai plus de place dans mon tableau, j'en demande plus
        if( size == capacity )
        {
            reserve( 2 * capacity + 1 );
        }
        // J'ajoute la valeur à la fin du tableau
        objects[size] = value;
        size++;
    }

    void pop_back()
    {
        if (size > 0)
        {
            size--;
        }
    }

    int & at(size_t const index)
    {
        // Si l'index est en dehors du tableau, je lève une exception (erreur)
        // Nous n'avons pas encore vu les exceptions, mais c'est un mécanisme qui permet de gérer les erreurs
        if (index >= size)
        {
            throw std::out_of_range("Index out of range");
        }
        // Je retourne la valeur à l'index demandé
        return pointer[index];
    }
    //...
};
```

```std::vector``` est bien sûr plus complexe que cela et a été fait par des experts du **C++** mais cela permet de comprendre le principe qui se cache derrière cette structure de donnée.

</details>

## Structure et This

Vous vous souvenez de l'utilisation du mot-clé ```this``` dans les méthodes de nos **structures** ?

```this``` est en fait un **pointeur** vers la structure elle même !

On peut donc faire un **déréférencement** et avoir accès à la structure pour la modifier.

```cpp
struct Product
{
    std::string name;
    float price;
    unsigned int quantity;

    void ChangePrice(float const price)
    {
        (*this).price = price;
        // this->price = price;
    }
};
```

C'est ce qui permet ici de faire la différence entre ```price``` qui est un paramètre de la méthode et ```this->price``` qui est le membre de la structure.

:::info
La syntaxe ```->``` est en réalité un raccourci de syntaxe qui permet de faire un **déréférencement** puis d'accéder à un membre ou une méthode de la structure:

Ces deux écritures sont donc équivalentes: ```this->member``` ```(*this).member```.
:::

## Les références dans tout ça


Vous avez remarqué des ressemblances entre les **pointeurs** et les **références** ?
C'est normal c'est le même mécanisme sous-jacent.
La référence utilise l'adresse mémoire de la variable ciblée.

:::caution
Cependant, une référence ne peut pas être nulle comme avec ```nullptr``` pour les pointeurs. Une référence est forcément associée à une variable.
:::

Une référence peut être considérée comme un pointeur avec **déréférencement automatique**, c'est-à-dire que le compilateur applique en quelque sorte l'opérateur <kbd>*</kbd> pour vous.

```cpp title="comparaison"
#include <iostream>

void addOneUsingPtr(int * a)
{
    *a += 1;
}

void addOneUsingRef(int & a)
{
    a += 1;
}

void constDisplayUsingRef(int const & a)
{
    std::cout << a << std::endl;
}

void constDisplayUsingPtr(int const * a)
{
    std::cout << *a << std::endl;
}
```

La référence a donc l'avantage d'être plus lisible et simple à utiliser.

:::note
Utiliser les **pointeurs** directement est plutôt réservé à des cas spécifiques.
Comme par exemple dans le cas où on souhaite une **"référence" optionnelle** (qui peut être nulle) ou alors **réassigner la référence** à une autre variable.

```cpp
#include <iostream>

void displayPointer(int const* ptr)
{
    if (ptr != nullptr)
    {
        std::cout << *ptr << std::endl;
    }
    else
    {
        std::cout << "null" << std::endl;
    }
}

int main()
{
    int a {42};
    int b {24};

    int& ref {a};
    ref = b; // a = b

    int* ptr {&a};

    *ptr = 12; // a = 12

    ptr = &b; // ptr pointe sur b

    *ptr = 36; // b = 36

    displayPointer(ptr); // 36

    ptr = nullptr;

    displayPointer(ptr); // null

    return 0;
}
```

:::

## Pointeurs intelligents

Pendant l’exécution d'un programme, le système ne peut pas écraser ce que les développeurs ont demandé. C’est à nous, humains, de le gérer avec le mot-clé ```delete``` sinon cela provoque une **fuite de mémoire**.

Une **fuite de mémoire** est la mémoire qui a été demandée par l’utilisateur et qui n’a **jamais été libérée**, lorsque le programme s’est terminé ou que des pointeurs vers son emplacement ont été perdus. Pour éviter cela, chaque fois que nous n’avons plus besoin d’un élément de la **Heap** alloué, nous **devons** absolument le libérer.

L'accumulation de fuites de mémoire risque de provoquer un **crash** du programme ou de ralentir le système d'exploitation ou même dans le pire des cas faire planter l'ordinateur.

---

Pour éviter ce problème, et nous aider à gérer la mémoire le **C++11** a introduit des pointeurs dits intelligents (**smart pointer** en anglais) dans la **bibliothèque standard**.

Lorsque le **pointeur** est détruit, la mémoire allouée précédemment est également libérée. Il n'est donc pas nécessaire de libérer la mémoire explicitement avec ```delete```, c'est le pointeur intelligent qui s'en charge.

Un pointeur intelligent est en quelque sorte une structure enveloppant un pointeur et permettant de s'assurer que la mémoire est libérée une fois que le pointeur n'est plus utilisé.

### unique_ptr

```std::unique_ptr``` est un pointeur intelligent qui gère une zone mémoire allouée dynamiquement. Il est, comme son l'indique, l'unique responsable de cette zone mémoire. Elle sera détruite dès que le pointeur est détruit.

Il ne peut pas être copié, c'est à dire que l'on ne peut pas avoir deux ```std::unique_ptr``` pointant vers le même objet. Sinon, lors de la destruction des deux pointeurs, l'objet serait détruit deux fois.

```cpp
#include <memory>

int main()
{
    std::unique_ptr<int> ptr {new int{42}};

    // On ne peut pas copier un unique_ptr
    // std::unique_ptr<int> ptr2 {ptr};

    // A la fin du bloc (de la fonction main ici), ptr est détruit et l'espace mémoire est libéré
}
```

### shared_ptr

```std::shared_ptr``` est un pointeur intelligent qui gère une zone mémoire allouée dynamiquement. La responsabilité de cette zone mémoire peut-être partagée entre plusieurs ```std::shared_ptr```, et elle ne sera détruite que quand tous les ```std::shared_ptr``` responsables auront été détruits.
Il est possible de copier un ```std::shared_ptr``` pour partager la responsabilité de la zone mémoire. Il utilise un **compteur** interne pour savoir combien de ```std::shared_ptr``` pointent vers la zone mémoire. Lorsque ce compteur tombe à zéro, la zone mémoire est libérée.

```cpp
#include <memory>

int main()
{
    std::shared_ptr<int> ptr1 {new int{42}};

    {
        // On peut copier un shared_ptr
        std::shared_ptr<int> ptr2 {ptr1};

        // Changer la valeur de ptr1
        *ptr1 = 24;

        // ptr1 et ptr2 pointent vers la même zone mémoire
        std::cout << "ptr1 value:" << *ptr1 << std::endl; // 24
        std::cout << "ptr2 value:" << *ptr2 << std::endl; // 24

        *ptr2 = 12;

        std::cout << "ptr1 value:" << *ptr1 << std::endl; // 12
        std::cout << "ptr2 value:" << *ptr2 << std::endl; // 12
        // Ici ptr2 est détruit mais la zone mémoire n'est pas libérée car ptr1 pointe toujours vers cette zone mémoire
    }

    std::cout << "ptr1 value:" << *ptr1 << std::endl; // 12

    // A la fin du bloc (de la fonction main ici), ptr1 est détruit et l'espace mémoire est libéré
    return 0;
}
```

C'est utile lorsque l'on souhaite partager un objet entre plusieurs parties du code.

### std::weak_ptr

Il existe également un pointeur intelligent ```std::weak_ptr``` qui est un pointeur qui permet de pointer vers un objet gérer par un ```std::shared_ptr``` sans augmenter le compteur de références. C'est utile pour éviter des références circulaires et mieux gérer le cycle de vie des objets mais nous n'irons pas plus loin dans ce cours.

## Résumé

- Il existe plusieurs types d'allocation de mémoire:
  - L'allocation de mémoire **statique** est effectuée à la compilation. Elle est donc très rapide mais ne permet pas de modifier la taille de la mémoire allouée.
  - L'allocation de mémoire sur la **stack** est effectuée à l'exécution. Elle est utilisée pour allouer nos variables locales et est à privilégier car elle est rapide.
  - L'allocation de mémoire **dynamique** sur la **heap** est effectuée à l'exécution. Elle est utilisée si on ne connaît pas la taille de la mémoire à allouer à la compilation ou si on veut modifier la taille de la mémoire allouée. Cela permet de gérer plus finement la mémoire mais est plus lente que l'allocation de mémoire sur la **stack**.

- Un **pointeur** est une variable qui contient une **adresse** mémoire (un nombre représenté en *hexadécimal*). C'est un type de variable à part entière qu'on différencie avec le symbole ```*``` après le type de la variable.

- On utilise les mots-clés ```new``` et ```delete``` pour **allouer** et **désallouer** de la mémoire sur la **heap**.

- Le **déréférencement** d'un **pointeur** permet d'accéder à la valeur de la variable pointée. Cela s'effectue avec l'opérateur ```*``` devant le nom du **pointeur**.

- Il est possible d'attribuer à un **pointeur** la valeur ```nullptr``` qui représente un pointeur nul. Cela permet d'indiquer qu'un **pointeur** ne pointe sur rien. On l'utilise pour vérifier qu'un **pointeur** est valide avant de l'utiliser.

- ```std::vector``` est un **conteneur** qui permet de gérer les allocations dynamiques de tableaux à notre place.

- le mot-clé ```this``` est un **pointeur** vers la **structure** elle même. Cela permet de faire la différence entre un paramètre de méthode et un membre de la structure.

- Il existe des **pointeurs intelligents** (smart pointer) qui permettent de gérer la mémoire à notre place. Ils sont très pratiques car ils permettent d'éviter les fuites mémoires et les erreurs de désallocation de mémoire.

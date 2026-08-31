---
title: "Structure: organiser nos données"
tags:
    - C++
---

En **C++**, on a parlé de **structure de données** avec les **tableaux**. Il est également possible de créer notre propre structure de données en **regroupant** plusieurs variables en un seul **bloc** appelé "**structure**" (ou "**struct**").

:::note
À partir de maintenant, j’emploierai le terme "**structure**" ou "**struct**" pour désigner ces **structures** et le terme de "**structure de données**" pour désigner des formes plus complexes de données de manière générale comme le ```std::vector``` par exemple.
:::

## Déclaration

C'est en utilisant le mot-clé ```struct``` que l'on va créer une nouvelle **structure**.
La syntaxe de déclaration est la suivante:

```cpp
struct nom
{
    // liste des membres
    // type nom;
    // type nom;
};
```

Cette structure est ensuite utilisable comme n'importe quel autre **type** de variable.

Un exemple de déclaration:
```cpp
struct People
{
    std::string name;
    std::string lastName;
    unsigned int age;
};
```

## Initialisation

Pour initialiser une **structure**, il y a plusieurs façons de faire similaire à la déclaration des **variables** "classiques".

```cpp
// Initialisation avec des valeurs (elles doivent être ordonnées comme les membres de la structure)
People people { "name", "lastName", 42 };

// Syntaxe possible utilisant le signe = (comme en C)
People people = { "name", "lastName", 42 };
```

:::note
Lors de l'initialisation avec des valeurs, elles doivent être ordonnées dans l’ordre dans lequel elles sont définies dans la structure. On ne peut pas donner juste un entier comme première valeur pour l'age dans notre cas.
:::

:::danger

Comme pour les variables, ne pas initialiser une **structure** est un **comportement indéterminé**.

```cpp
// Initialisation indéterminée
People defaultPeople;
```

Dans ce cas, il faut s'**assurer** de bien définir les membres de la structure ensuite !
:::

### Valeurs par défaut

Lors de l'initialisation, si il n'y a pas de valeur fournie entre **accolades** (<kbd>{}</kbd>) pour les membres de la structure, ils seront initialisés avec une valeur par défaut. Pour les **types primitifs** (comme ```int```, ```float```, ```double```, ```char```, ```bool```, etc.) la valeur par défaut est **zéro**. Pour les **objets** (comme ```std::string```, ```std::vector```, etc.) la valeur par défaut est **l'objet vide**.

Si une **valeur** est fournie en même temps que la déclaration d'un membre, c'est cette valeur qui sera utilisée lors de l'initialisation par défaut de la structure.

```cpp title="un exemple"
#include <iostream>
#include <string>

struct Product
{
    std::string name {"unknown"};
    float price {0.f};
    unsigned int quantity {1};
};

void Display(Product const& product)
{
    std::cout << "Name: " << product.name << std::endl;
    std::cout << "Price: " << product.price << std::endl;
    std::cout << "Quantity: " << product.quantity << std::endl;
}

int main()
{
    Product unknownProduct {};

    Display(unknownProduct);

    return 0;
}
```

```bash
Name: unknown
Price: 0     
Quantity: 1 
```

:::info Résumé de toutes les possibilités d'initialisation
Si une structure est initialisée **avec accolades** (ce qu'il fait faire tout le temps comme pour les variables) :

- S'il existe une valeur d'initialisation explicite dans les accolades, cette valeur explicite est utilisée.
- Si une valeur est manquante dans les accolades et qu'il existe une valeur de variable membre par défaut, cette valeur est utilisée. (c'est l'exemple de la structure `Product` ci-dessus)
- Si une valeur est manquante dans les accolades et qu'il n'y a pas valeur par défaut dans la structure, l'initialisation par défaut pour le type de la variable est utilisée.

Si une structure est initialisée **sans accolades** (ce qui est à éviter) :

- S'il existe une valeur d'initialisation explicite dans les accolades, cette valeur est utilisée.
- Si une valeur est manquante dans les accolades, la variable membre reste non initialisée. (**comportement indéterminé**)
:::

:::tip Bonne pratique
Une bonne pratique est de toujours initialiser les variables membres de la structure avec une valeur par défaut explicite ou à défaut d'utiliser des **accolades vide** pour éviter le risque de variables non initialisées et de **comportement indéterminé**.

```cpp
#include <string>

struct Product
{
    std::string name {};
    float price {};
    unsigned int quantity {1};
};
```
:::

## Utilisation

Pour manipuler un **membre**, c’est-à-dire une **variable** appartenant à la structure, il suffit d’utiliser la syntaxe ```structure.membre```.

```cpp
#include <iostream>
#include <string>

struct People
{
    std::string name;
    std::string lastName;
    unsigned int age;
};

int main()
{
    People people { "name", "lastName", 42 };

    // Modification de l'age
    people.age = 19;

    // Lecture des membres
    std::cout << "My name is " << people.name << " " << people.lastName << " and i'm " << people.age << " years old." << std::endl;

    return 0;
}
```

## Passage par référence

Une **structure** étant un agrégat de données (plus ou moins gros) il est intéressant d'utiliser des **références** pour passer en **paramètres** nos **structures** afin d'éviter des **copies**.

```cpp
#include <string>
#include <iostream>

struct Product
{
    std::string name;
    float price;
    unsigned int quantity;
};

float GetTotalPrice(Product const& product)
{
    return product.price * product.quantity;
}

int main()
{
    Product product { "Tomatos", 0.32, 12 };

    // Lecture des membres
    std::cout << "The total price for " << product.name << " is " << GetTotalPrice(product) << " €." << std::endl;

    return 0;
}
```

## Des méthodes

Maintenant que nous avons nos propres **structures** cela va devenir intéressant d'utiliser des **méthodes**.
En effet, dans mon exemple précédent j'ai créé des fonctions ```GetTotalPrice``` et ```Display```. Mais j'aurais bien aimé pouvoir faire : ```product.TotalPrice()```. Autrement dit, créer et utiliser une méthode ```TotalPrice()``` pour ma structure ```Product```. 

Il suffit simplement de déclarer notre fonction au sein même des **accolades** de notre structure comme cela:

```cpp
struct Product
{
    std::string name;
    float price;
    unsigned int quantity;

    float TotalPrice()
    {
        return price * quantity;
    }
};
```

:::note
Vous pouvez remarquer qu'ici je peux accéder aux membres de ma struct sans avoir à faire ```struct.membre```. En effet, la **méthode** a **connaissance** de la **structure** elle-même et peut **manipuler** ses **membres** directement.
:::

### Prototype de méthodes

Comme pour les fonctions, il est possible de déclarer seulement le **prototype** de la méthode et d'implémenter le **corps** de la méthode plus tard. Il y a juste un petit détail en plus, il faut indiquer à l'aide du **nom** de la structure et des caractères <kbd>::</kbd> ,l'**appartenance** de la méthode à la structure (comme avec ```std::```).

```cpp
struct Product
{
    std::string name;
    float price;
    unsigned int quantity;

    float TotalPrice();
};

float Product::TotalPrice()
{
    return price * quantity;
}
```

:::note
C'est une notion qui va être utile quand on verra la séparation du code en plusieurs fichiers.
:::

### Méthode constante

Ici, il est aussi possible de préciser qu'une méthode ne modifie pas la structure, on parle de **méthode constante**. Il faut ajouter le mot-clé **```const```** à la fin de la déclaration de la méthode, avant le point virgule <kbd>;</kbd>.

```cpp
struct Product
{
    std::string name;
    float price;
    unsigned int quantity;

    float TotalPrice() const;
};

float Product::TotalPrice() const
{
    return price * quantity;
}
```

C'est important car si on ne le fait pas on ne pourra pas appeler une **méthode non constante** d'une **variable constante** car celle-ci est susceptible de modifier la structure alors que c'est interdit par la variable constante.

```cpp
#include <iostream>
#include <string>

struct Product
{
    std::string name;
    float price;
    unsigned int quantity;

    float TotalPrice();
};

float Product::TotalPrice()
{
    return price * quantity;
}

int main()
{
    Product const tomatos { "Tomatos", 0.32, 12 };

    // erreur ici: la variable tomatos est constante mais la méthode 'TotalPrice' ne l'est pas
    // highlight-next-line
    float tomatosPrice { tomatos.TotalPrice() };

    return 0;
}
```

Il faut donc indiquer que la méthode est constante:

```cpp
// le prototype
float GetTotalPrice() const;

// et la fonction
float Product::GetTotalPrice() const
{
    return price * quantity;
}
```

### Conflit de noms

Comme pour les fonctions, il est possible de passer des **paramètres** à notre méthode.

Mais si le paramètre a le même nom qu'un des **membres** de la structure il y a un conflit de noms.

```cpp
struct Product
{
    std::string name;
    float price;
    unsigned int quantity;

    void ChangePrice(float price)
    {
        price = price;
    }
};
```

Ici la variable ```price``` manipulée dans la fonction n'est plus le **membre** mais le **paramètre**, les **paramètres** ont la **priorité** sur les **membres** de la structure.

:::caution
Sur certains compilateurs bien configurés on peut avoir des **warnings** :
```bash title="Warning généré par clang"
Explicitly assigning value of variable of type 'float' to itself; did you mean to assign to member 'price'?
```
Mais ce n'est pas toujours le cas. Avec un **paramètre constant** on aurait généré des erreurs de compilation et pas seulement un warning et c'est donc **préférable** pour mieux se rendre compte des erreurs.

```bash
- Cannot assign to variable 'price' with const-qualified type 'const float'
- assignment of read-only parameter 'price'
```
:::

Pour éviter la confusion, il est préférable d'utiliser le mot clé ```this``` suivi des caractères <kbd>-></kbd> devant le nom d'un membre de la structure comme cela:

```cpp
struct Product
{
    std::string name;
    float price;
    unsigned int quantity;

    void ChangePrice(float const price)
    {
        this->price = price;
    }
};
```

Ici, plus de problème, ```this->price``` fait référence à notre **membre** et ```price``` est le **paramètre constant** de la méthode.

Une **autre solution** préférable et **recommandée** est de **renommer** le nom du **paramètre** pour éviter cette confusion:

```cpp
struct Product
{
    std::string name;
    float price;
    unsigned int quantity;

    void ChangePrice(float const newPrice)
    {
        price = newPrice;
        // this->price = newPrice;
    }
};
```
Vous êtes libre de laisser ou non le ```this->``` pour indiquer plus explicitement l'utilisation du **membre** de la structure surtout si c'est **plus compréhensible** pour vous.

Je ne rentre pas dans le détail ici. Je reviendrai sur le fonctionnement du mot-clé ```this``` dans un autre chapitre. Retenez simplement ici que cela permet d'indiquer explicitement que l'on souhaite **manipuler la structure**.

## Aller plus loin: Forward Declaration

Parfois deux structures ont besoin l'une de l'autre, on veut utiliser une struct **A** dans une struct **B** et inversement.

Problème, l'une est définie avant l'autre et donc dans la première structure **A** il y a une erreur, **B** est encore inconnue.

```mermaid
classDiagram
    A <|-- B
    B <|-- A

    class A {
        <<struct>>
        B b // B n'est pas encore définie ici
    }
    class B {
        <<struct>>
        A a
    }
```

Pour résoudre ce problème on va faire une **déclaration anticipée** (**Forward Declaration** en anglais).

Un peu à la manière d'un **prototype** on va indiquer que la structure existe, sans en définir précisément encore son contenu.
```cpp
#include <vector>
// Déclaration anticipée de la structure Book
// highlight-next-line
struct Book;

struct Author {
    std::string name;
    // Je peux donc l'utiliser ici
    // highlight-next-line
    std::vector<Book> books;

    void Display();
    void AddBook(std::string title);
};

struct Book
{
    std::string title;
    Author& author;

    void Display();
};
```

:::caution
Cela ne permet pas de manipuler la structure vu que l'on ne sait pas encore ce qu'elle contient. De ce fait, les **méthodes** de la structure ```Author``` qui utilisent la structure ```Book``` doivent se trouver **après** la déclaration complète de la structure ```Book```.
:::

```cpp title="Un exemple plus complet"
#include <iostream>
#include <vector>
#include <string>

struct Book;

struct Author {
    std::string name;
    std::vector<Book> books;

    void Display();
    void AddBook(std::string title);
};

struct Book
{
    std::string title;
    Author& author;

    void Display();
};

void Author::Display()
{
    std::cout << "Author: " << name << std::endl;
    std::cout << "Books: " << std::endl;
    for (Book const& book : books)
    {
        std::cout << "\t" << book.title << std::endl;
    }
}

void Author::AddBook(std::string title)
{
    // le "*this" permet de récupérer une référence vers l'objet courant
    // Ce mécanisme sera détaillé dans un prochain chapitre
    Book book {title, *this};
    // Ici une copie de l'objet book est faite dans le vecteur
    books.push_back(book);
    // La variable book va être détruite à la fin de la fonction
    // mais le vecteur books contient une copie de l'objet book donc pas de problème
}

void Book::Display()
{
    std::cout << "Title: " << title << std::endl;
    std::cout << "Author: " << author.name << std::endl;
}

int main()
{
    Author author {"Jules Verne", {}};
    author.AddBook("Vingt mille lieues sous les mers");

    author.Display();

    return 0;
}
```

## Résumé

- Une **structure** est un **agrégat de données**, on la déclare avec le mot-clé ```struct```.

- Les **membres** de la structure sont les variables qui la composent. On y accède avec un point <kbd>.</kbd> après le nom de la variable.

- Une structure peut avoir des **méthodes** qui se déclarent comme pour les fonctions mais au sein même des accolades de la structure.

- Le **corps** d'une **méthode** peut être **déclaré plus tard** (du moment que le **prototype** de la méthode est dans la structure). Il faut utiliser le **nom** de la structure suivi des **caractères <kbd>::</kbd>** pour indiquer l'**appartenance** de la méthode à la structure si elle est déclarée en **dehors** des **accolades** délimitant la structure.

- Une **méthode** peut être **constante** pour indiquer qu'elle ne va pas modifier la structure. Il faut ajouter le mot-clé ```const``` **après les paramètres** de la fonction et avant le point virgule <kbd>;</kbd>.

- On peut utiliser le mot-clé ```this``` pour **expliciter** que l'on souhaite manipuler la structure et **éviter des conflits** de nommages entre les **membres** et les **paramètres** d'une méthode.

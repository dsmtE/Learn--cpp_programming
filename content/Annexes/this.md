---
title: Comprendre le mot clé this
tags:
    - C++
    - Memory
---

Revenons sur le mot clé `this` en **C++**.

## Pourquoi `this` ?

Le mot clé `this` est un **pointeur** qui pointe vers l'**objet courant**. Il est utilisé principalement pour accéder aux membres de la structure/classe à partir d'une méthode (pour éviter les ambiguïtés avec les paramètres par [exemple](/Lessons/S1/Struct/#conflit-de-noms)).

## Utilisation de `this` pour accéder aux membres de la structure à partir d'une méthode

Voici un exemple pour illustrer son utilisation :

```cpp
struct Point
{
    int x {0};
    int y {0};

    void set_x(int const x)
    {
        this->x = x;
    }
};
```

Comme vous pouvez le voir, `this` est utilisé pour accéder au **membre** `x` de la structure `Point` à partir de la **méthode** `set_x` pour éviter les ambiguïtés avec le **paramètre** `x` de la méthode.

J'en profite pour rappeler deux mécanismes des pointeurs:
- `*` devant un pointeur permet de **déréférencer** une pointeur et obtenir une sorte de référence vers l'objet pointé par le pointeur.
- `->` permet de déréférencer un pointeur **et** d'accéder à un membre de l'objet pointé par le pointeur. Donc `this->x` est équivalent à `(*this).x`.

On aurait donc pu écrire également :

```cpp
void set_x(int const x)
{
    Point* myself_ptr {this};
    // myself_ptr->x = x;
    (*myself_ptr).x = x;
}
```

ou bien encore:

```cpp
void set_x(int const x)
{
    Point* myself_ptr {this};
    Point& myself_ref {*myself_ptr};
    myself_ref.x = x;
}
```

Dans l'idéal pour ce cas de figure, il est préférable d'éviter de nommer les paramètres de méthodes avec le même nom que les membres de la structure pour éviter les ambiguïtés. Dans ce cas `this` n'est même pas nécessaire car il n'y a pas d'ambiguïté et on peut simplement utiliser le nom du membre de la structure pour y accéder:

```cpp
void set_x(int const new_x)
{
    x = new_x;
}
```

Je t'invite à relire cette section également : [structure et this](/Lessons/S1/MemoryAllocation/#structure-et-this).


## Utilisation de `this` pour chaîner les appels de méthodes


`This` permet également de retourner une référence vers l'objet courant pour pouvoir chaîner les appels de méthodes:

```cpp
struct Point
{
    int x {0};
    int y {0};

    Point& set_x(int const new_x)
    {
        x = new_x;
        return *this;
    }

    Point& set_y(int const new_y)
    {
        y = new_y;
        return *this;
    }
};

int main()
{
    Point p {};
    p.set_x(3).set_y(4);
}
```

C'est particulièrement utile pour les **opérateurs de flux** par exemple qui retournent une référence vers le flux pour pouvoir chaîner les appels de `<<`.

Un exemple d'opérateur de flux pour la structure `Point` et son utilisation :

```cpp
#include <iostream>
std::ostream& operator<<(std::ostream& os, Point const& p)
{
    os << "Point(" << p.x << ", " << p.y << ")";
    return os;
}

int main()
{
    Point p {1, 2};
    std::cout << p << std::endl;
}
```

C'est également utilisé dans les **opérateurs d'affection** pour permettre d'écrire `a = b = c` par exemple.

En effet, l'opérateur d'affectation retourne une référence vers l'objet courant pour permettre de chaîner les appels de l'opérateur d'affectation.

Voilà un exemple d'opérateur d'affectation pour la structure `Point` et son utilisation :

```cpp
struct Point
{
    int x {0};
    int y {0};

    Point& operator=(Point const& other)
    {
        x = other.x;
        y = other.y;
        return *this;
    }
};
```

Lorsque l'on écrit `a = b = c`, l'opérateur d'affectation est appelé sur `b` avec `c` en paramètre et retourne une référence vers `b` qui est ensuite utilisée pour appeler l'opérateur d'affectation sur `a` avec `b` en paramètre.

ainsi `a = b = c` est équivalent à `a.operator=(b.operator=(c))`.

Si l'opérateur d'affectation ne retournait pas une référence vers l'objet courant, on ne pourrait pas écrire `a = b = c` et on devrait écrire `a = c; b = c;`. C'est à mon sens tout à fait valable également mais ce n'est pas la convention en C++ et cela pourrait être bloquant pour pouvoir utiliser des classes de la librairie standard qui utilisent cette convention.

Il faut par contre éviter de retourner une **copie** de l'objet plutôt qu'une référence (`Point operator=(Point const& other)`). Cela permettrait toujours de chaîner les appels de méthodes mais cela serait moins efficace car cela impliquerait de faire des copies et des destructions d'objets inutiles.

## Appeler une fonction par référence à partir d'une méthode

le mot clé `this` permet également de passer une référence vers l'objet courant à une fonction (depuis une méthode).

Prenons par exemple la structure `Point` et une méthode `turn_point` qui prend une référence vers un point en paramètre :

```cpp
struct Point
{
    int x {0};
    int y {0};
};

void turn_point(Point& p)
{
    int temp {x};
    x = p.y;
    p.y = -temp;
}
```

Si l'on souhaite appeler la fonction `turn_point` depuis une méthode de la structure `Point`, on peut utiliser `this` pour passer une référence vers l'objet courant à la fonction `turn_point` :

```cpp
struct Point
{
    // ...
    void turn()
    {
        turn_point(*this);
    }
};
```

J'espère que cette section t'a permis de mieux comprendre le mot clé `this` en **C++**.

---
title: Sémantique et opérateurs
tags:
    - C++
---

Nous avons appris au semestre 1 à définir des **structures**. Cela permet de regrouper des données qui ont un lien entre elles. Par exemple, on peut créer une structure `Point` qui contient les coordonnées d'un point dans un plan.

Nous avons aussi vu comment définir des **méthodes** pour utiliser la structure. Par exemple, on peut définir une méthode `add` qui permet d'ajouter deux **points** entre eux (en faisant la somme de leurs coordonnées respectives).

Les structures permettent donc de créer de nouveaux *types*. On aimerait pouvoir manipuler ces structures comme si c'était des types de base (comme `int`, `float`, `bool`, ...). Par exemple, on aimerait pouvoir ajouter deux **points** entre eux avec l'opérateur `+` au lieu d'appeler la méthode `add`.

Nous allons découvrir dans ce cours comment définir des **opérateurs** pour manipuler nos structures comme si elles étaient des types de base.

:::caution
Ce n'est pas toujours pertinent de le faire comme avec une structure `Personne` par exemple. On ne peut pas vraiment définir un opérateur `+` pour ajouter deux personnes entre elles. Qu'est-ce que cela voudrait dire ? Dans ce cas, il est préférable de définir des méthodes explicites.
:::

## Opérateurs

Les opérateurs sont des symboles qui permettent de manipuler des données. Par exemple, l'opérateur `+` permet d'additionner deux nombres entre eux.

En C++, il est possible de définir des opérateurs pour nos structures, c'est ce que l'on appelle la **surcharge d'opérateurs**. Cela permet ensuite d'utiliser l'opérateur sur nos structures sans devoir passer par une méthode.

Pour définir un opérateur, on utilise le mot clé `operator` suivi du symbole de l'opérateur. Par exemple, pour définir l'opérateur `+`, on utilise `operator+`.

Par exemple, on peut définir un opérateur `+` pour notre structure `Point` qui permet d'additionner deux points entre eux. On peut ensuite utiliser cet opérateur sur nos structures comme si elles étaient des nombres.

```cpp
struct Point {
    int x;
    int y;
};

Point operator+(Point const& a, Point const& b) {
    return {a.x + b.x, a.y + b.y};
}

int main() {
    Point a {1, 2};
    Point b {3, 4};
    Point c {a + b}; // c = {4, 6}
}
```

## Égalité

Ce qui fait généralement sens pour une structure, c'est de pouvoir **comparer** deux instances de cette structure. Par exemple, on peut comparer deux points entre eux pour savoir s'ils sont **égaux** ou non.

Pour être en mesure de définir l’égalité, on doit respecter les conditions suivantes.

- Pour n'importe quel `a`, `a == a` doit être vrai, c'est ce qu'on appelle la **réflexivité**.
- Pour n'importe quel `a` et `b` de même type, si `a == b` est **vrai**, alors `b == a` doit être **vrai**, c'est ce qu'on appelle la **symétrie** et la **commutativité**.
- Pour n'importe quel `a`, `b` et `c` de même type, si `a == b` et `b == c` sont **vrais**, alors `a == c` doit être **vrai**, c'est ce qu'on appelle la **transitivité**.


Pour définir l'opérateur d'égalité, on utilise `operator==`. On peut ensuite utiliser cet opérateur sur nos structures de la même façon que pour les types de base.

```cpp
struct Point {
    int x;
    int y;
};

bool operator==(Point const& a, Point const& b) {
    return a.x == b.x && a.y == b.y;
}

int main() {
    Point a {1, 2};
    Point b {1, 2};
    if (a==b)
    {
        std::cout << "Les points a et b ont les mêmes coordonnées" << std::endl;
    }
    else
    {
        std::cout << "Les points a et b ont des coordonnées différentes" << std::endl;
    }
}
```

### Fonction ou méthode

On peut définir l'opérateur d'égalité comme une **fonction** (en dehors de la définition de la structure) ou comme une **méthode** (à l'intérieur de la définition de la structure).

La différence est que dans le cas d'une méthode, le premier paramètre est implicite et correspond à l'instance sur laquelle on appelle la méthode.

```cpp
struct Point {
    int x;
    int y;
    
    bool operator==(Point const& b) const {
        return x == b.x && y == b.y;
    }
};
```

Cela a une influence sur la façon dont on utilise l'**opérateur**.

:::note
Ici la méthode est définie comme `const` car elle ne modifie pas l'instance sur laquelle on l'appelle. Cela permet d'appeler la méthode sur une instance constante.
:::

Par exemple si l'on souhaite multiplier un point par un nombre, on peut définir l'opérateur comme une **méthode**.

```cpp
struct Point {
    int x;
    int y;
    
    Point operator*(int const a) const {
        return {x * a, y * a};
    }
};

int main() {
    Point a {1, 2};
    Point b {a * 2}; // b = {2, 4}
}
```

Mais si l'on souhaite multiplier un nombre par un point, on ne peut pas définir l'opérateur comme une méthode car le premier paramètre est implicite et correspond à l'instance sur laquelle on appelle la méthode.

Il faut donc définir l'opérateur comme une fonction libre.

```cpp
struct Point {
    int x;
    int y;
};

Point operator*(int const a, Point const& b) {
    return {a * b.x, a * b.y};
}

int main() {
    Point a {1, 2};
    Point b {2 * a}; // b = {2, 4}
}
```

Les deux syntaxes sont donc valables, mais il faut garder en tête que la syntaxe avec une méthode implique que le premier paramètre est implicite et correspond à l'instance sur laquelle on appelle la méthode. Il y a plusieurs écoles, en général on préfère la syntaxe avec une **fonction libre** concernant les opérateurs binaires (qui prennent deux paramètres). Cela permet par exemple, dans le cas d'opérateurs binaires commutatifs (dans lequel l'ordre des paramètres n'a pas d'importance), de définir les deux opérateurs en fonction l'un de l'autre.

```cpp
struct Point {
    int x;
    int y;
};

Point operator*(int const a, Point const& b) {
    return {a * b.x, a * b.y};
}

Point operator*(Point const& b, int const a) {
    return a * b;
}

int main() {
    Point a {1, 2};
    Point b {2 * a}; // b = {2, 4}
    Point c {a * 3}; // b = {3, 6}
}
```

## Réutilisation des opérateurs

Je vous ai déjà parlé de l’intérêt de la **réutilisation** avec les fonctions. C'est aussi valable pour les opérateurs.

L’habitude que beaucoup prennent est de définir les opérateurs `==` et `<`, puis de définir les autres en fonction de ces deux-là.

On va donc définir l'opérateur `!=` en fonction de `==`.

```cpp
struct Point {
    int x;
    int y;
};

bool operator==(Point const& a, Point const& b) {
    return a.x == b.x && a.y == b.y;
}

bool operator!=(Point const& a, Point const& b) {
    return !(a == b);
}
```

Dans notre cas définir les opérateurs de comparaison `<`, `<=`, `>`, `>=` fait moins sens car on ne peut pas vraiment dire qu'un point est plus grand qu'un autre.

```cpp

## default et C++ 20

Il est parfois possible de définir automatiquement certains opérateurs. Dans le cas de structures simples, on peut définir automatiquement les opérateurs `==` et `!=` avec le mot clé `default`.

```cpp
struct Point {
    int x;
    int y;

    bool operator==(Point const& p) const = default;
    bool operator!=(Point const& p) const = default;
};
```

Cela permet de définir automatiquement les opérateurs `==` et `!=` en fonction des opérateurs `==` et `!=` de chaque membre de la structure.

Depuis **C++20**, il est même possible de définir automatiquement l'opérateur d'égalité et les opérateurs de comparaison (`<`, `<=`, `>`, `>=`) d'un coup avec l'opérateur `<=>` (appelé **three-way comparison operator**).
```cpp
struct Point {
    int x;
    int y;
    
    auto operator<=>(Point const& p) const = default;
};
```

L'opérateur `<=>` est un opérateur qui permet de donner un **ordre** à une structure. Avec le mot clé `default`, on délègue la définition de l'opérateur `<=>` à chaque membre de la structure.
On défini donc automatiquement l'ordre de la structure en fonction de l'ordre de chaque membre (dans notre cas, on compare d'abord `x` puis `y`).

C'est très pratique dans le cas où nos structures sont composées de types de base ou de structures qui ont déjà des opérateurs de comparaison définis.

Dans le cadre de ce cours nous allons définir les opérateurs manuellement pour bien comprendre le principe. Mais dans la pratique, il est préférable d'utiliser `default` ou `default` avec `<=>` si possible.

## Opérateurs d'assignation composés

Les opérateurs d'assignation composés permettent de combiner une opération et une assignation. Par exemple, l'opérateur `+=` permet d'additionner une valeur à une variable et de stocker le résultat dans la variable.

Il est aussi possible de définir des opérateurs d'assignation composés pour nos structures. Par exemple, on peut définir l'opérateur `+=` pour notre structure `Point` qui permet d'additionner un point à un autre point et de stocker le résultat dans le premier point.

Cela fait sens dans ce cas de les définir comme des méthodes.
```cpp
struct Point {
    int x;
    int y;

    Point& operator+=(Point const& p) {
        x += p.x;
        y += p.y;
        return *this;
    }
};
```

:::tip
L'expression `*this` peut sembler étrange. `this` est un pointeur sur l'instance courante. `*this` est donc une référence sur l'instance courante.
On retourne une référence sur l'instance courante pour pouvoir faire des opérations en chaîne.

Par exemple, on peut écrire `a += b += c` qui est équivalent à `a += (b += c)`.

Cela nous permet d’avoir le même comportement pour notre structure que s’il s’agissait d’un type natif comme `int`.

:::

### Deux en un

Pour chaque opérateur d'assignation composé, il existe un opérateur binaire (prenant deux paramètres) correspondant. Par exemple, l'opérateur `+=` a pour opérateur binaire correspondant `+`.

Dans un souci de réutilisation, on peut définir l'opérateur binaire en fonction de l'opérateur d'assignation composé.

```cpp
struct Point {
    int x;
    int y;

    Point& operator+=(Point const& b) {
        x += b.x;
        y += b.y;
        return *this;
    }
};

Point operator+(Point a, Point const& b) {
    a += b;
    return a;
}
```

Ici le principe de passage par **copie** (ou par valeur) du paramètre `a` est important. Puisque qu'il est **copié**, on peut le modifier avec l’opérateur `+=` sans risque modifier l'instance originale. On obtient donc l'opérateur binaire `+` en fonction de l'opérateur d'assignation composé `+=`.

L'avantage est que si l'on doit modifier ou corriger le comportement de l'addition, on n'a pas besoin de modifier l'opérateur binaire `+` puisqu'il est défini en fonction de l'opérateur d'assignation composé `+=`.

## Opérateurs de flux

Les opérateurs de flux permettent de définir comment afficher une structure ou la lire depuis un flux (comme `std::cout` ou `std::cin`). Par exemple, on peut définir l'opérateur `<<` pour notre structure `Point` qui permet d'afficher un point dans un flux.

```cpp
struct Point {
    int x;
    int y;
};

std::ostream& operator<<(std::ostream& os, Point const& p) {
    return os << '(' << p.x << ", " << p.y << ')';
}
```

L'opérateur `<<` prend en premier paramètre un flux de sortie (`std::ostream&`) et en deuxième paramètre un point (`Point const&`). Il retourne le flux de sortie pour pouvoir faire des opérations en chaîne.

<details>
<summary> Opérateur <kbd> >> </kbd> </summary>

Il existe aussi l'opérateur `>>` qui permet de lire depuis un flux pour construire une structure.

Il se définit ainsi:
    
```cpp
std::istream& operator>>(std::istream& is, Point& p) {
    // gestion de la lecture

    is >> p.x >> p.y;

    if( /* Erreur, impossible de construire notre structure */ )
    {
        is.setstate(std::ios::failbit);
    }
    return is;

}
```

Notez que dans ce cas il faut signaler si l’entrée est invalide en mettant le flux dans un état invalide avec `std::ios::failbit`, ce qui permet à l’utilisateur de faire `if (std::cin.fail())`.
</details>

Ces opérateurs s’écrivent toujours sous la forme libre car leur premier argument est toujours un flux. 

## Opérateurs d'affectation par copie

Parfois, on a besoin de copier une structure. Pas seulement à l'initialisation (dans ce cas là on peut utiliser la syntaxe d'initialisation `{}`), mais on a besoin d'affecter une nouvelle valeur à une structure déjà existante.

```cpp
Point const point {3, 4};
Point copie {1, 1};

// ...
copie = point;
```

Pour faire cela il faut définir l'opérateur d'affectation par copie `=`. Cet opérateur est appelé quand on affecte une valeur à une structure déjà existante.

```cpp

struct Point {
    int x;
    int y;

    Point& operator=(Point const& b) {
        x = b.x;
        y = b.y;
        return *this;
    }
};
```

C'est intéressant de le définir s'il a un comportement spécifique à notre structure. Sinon, il est préférable de ne pas le définir car il y a déjà un opérateur d'affectation par copie par défaut qui fait une copie membre à membre. Ce qui correspond souvent à ce que l'on veut (c'est le cas pour notre structure `Point`).

## Quelques bonnes pratiques

- Il est important de garder en tête que la surcharge d'opérateurs est une **facilité** et non une **nécessité**. Il faut donc l'utiliser avec parcimonie et quand cela fait sens pour notre structure.

- Il est aussi important de respecter la **sémantique** des opérateurs. Par exemple, l'opérateur `+` doit faire une addition et non une soustraction. Si un opérateur a une sémantique déjà définie pour un **domaine**, tenez vous-y.

- Si la signification de l'opérateur n'est pas évidente et indiscutable, il faut éviter de le surcharger. Il est préférable de définir une méthode explicite dans les cas où la sémantique n'est pas évidente. Si pour une raison ou une autre, vous devez surcharger un opérateur qui n'a pas de sémantique évidente, il faut le commenter absolument.

- Enfin, certains opérateurs sont liés entre eux. Par exemple, si vous surchargez l'opérateur `==`, il est conseillé de surcharger l'opérateur `!=` (en fonction de `==` si possible). De même, si vous surchargez l'opérateur `<`, les utilisateurs de votre structure s'attendront à ce que les opérateurs `>`, `<=` et `>=` soient définis également.

## D'autres opérateurs

On peut aussi surcharger les opérateurs `[]` et `()` pour définir un accès à un élément de notre structure ou les opérateurs `--` et `++` pour définir un incrément ou un décrément.

Il existe de nombreux opérateurs que l'on peut surcharger mais le principe reste le même.

## Résumé

- On peut définir des opérateurs pour nos structures, c'est ce que l'on appelle la **surcharge d'opérateurs**.
- Pour définir un opérateur, on utilise le mot clé `operator` suivi du symbole de l'opérateur. Par exemple, pour définir l'opérateur `+`, on utilise `operator+`.
- Les opérateurs permettent de donner du **sens** à nos structures et de les manipuler comme si elles étaient des types de base. Cela donne de la **sémantique** à nos structures.
- C'est intéressant de réutiliser les opérateurs entre eux. Par exemple, on peut définir l'opérateur `+` en fonction de l'opérateur `+=`.
- L'expression `*this` permet de retourner une référence sur l'instance courante pour pouvoir faire des opérations en chaîne.
- Il est important de garder en tête que la surcharge d'opérateurs est une **facilité** et non une **nécessité**. Il faut donc l'utiliser avec parcimonie et quand cela fait sens pour notre structure. Parfois il est préférable de définir une **méthode** avec un nom explicite.
- On peut surcharger les opérateurs de flux `<<` et `>>` pour définir comment afficher une structure ou la lire depuis un flux.
- Vous trouverez la page de documentation sur la surcharge d'opérateurs [ici](https://en.cppreference.com/w/cpp/language/operators).

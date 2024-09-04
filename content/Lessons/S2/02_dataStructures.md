---
title: Structures de données
tags:
    - C++
---

## Piles et files (LIFO, FIFO)

Une **pile** est une structure de données qui permet de stocker des éléments de façon à ce que le **dernier** élément ajouté soit le **premier** à être retiré. On parle de structure de données **LIFO** (Last In First Out).

Une **file** est une structure de données qui permet de stocker des éléments de façon à ce que le **premier** élément ajouté soit le **premier** à être retiré. On parle de structure de données **FIFO** (First In First Out).

### std::stack — Une pile

La classe [`std::stack`](https://en.cppreference.com/w/cpp/container/stack) permet de représenter une **pile**. Elle est définie dans la bibliothèque `<stack>`.

On utilise la méthode `push` pour ajouter un élément au sommet de la pile et la méthode `pop` pour retirer l'élément au sommet de la pile.

Elle s'utilise de la même façon que d'autres conteneurs de la bibliothèque standard.

```cpp
#include <stack>
#include <iostream>

int main() {
    std::stack<int> stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    std::cout << stack.top() << std::endl; // Affiche 3
    stack.pop();
    std::cout << stack.top() << std::endl; // Affiche 2
    stack.pop();
    std::cout << stack.top() << std::endl; // Affiche 1
    stack.pop();
}
```

### std::queue — Une file

La classe [`std::queue`](https://en.cppreference.com/w/cpp/container/queue) permet de représenter une **file**. Elle est définie dans la bibliothèque `<queue>`.

On utilise la méthode `push` pour ajouter un élément à la fin de la file et la méthode `pop` pour retirer l'élément au début de la file.

```cpp
#include <queue>
#include <iostream>

int main() {
    std::queue<int> queue;
    queue.push(1);
    queue.push(2);
    queue.push(3);
    std::cout << queue.front() << std::endl; // Affiche 1
    queue.pop();
    std::cout << queue.front() << std::endl; // Affiche 2
    queue.pop();
    std::cout << queue.front() << std::endl; // Affiche 3
    queue.pop();
}
```

## std::pair — Un conteneur de paires d'éléments

La classe [`std::pair`](https://en.cppreference.com/w/cpp/utility/pair) (définie dans la bibliothèque `<utility>`) permet de représenter une paire d'éléments de types différents.

On peut accéder aux éléments de la paire avec les attributs `first` et `second`.

### Définition d'une paire

Pour définir une paire, on peut utiliser la fonction `std::make_pair` ou assigner les valeurs directement aux attributs `first` et `second`.

```cpp
#include <utility>
#include <iostream>

int main() {
    std::pair<int, int> p1 {1, 2};
    std::pair<int, int> p2 = std::make_pair(3, 4);
    std::pair<int, int> p3 {};
    p3.first = 5;
    p3.second = 6;
    std::cout << p1.first << " " << p1.second << std::endl; // Affiche 1 2
    std::cout << p2.first << " " << p2.second << std::endl; // Affiche 3 4
    std::cout << p3.first << " " << p3.second << std::endl; // Affiche 5 6
}
```

Si rien n'est spécifié, les attributs `first` et `second` sont initialisés avec des valeurs par défaut.

:::info
La fonction `std::make_pair` permet d'expliciter le type de la paire. C'est utile dans certains cas où le type de la paire ne peut pas être déduit automatiquement.
:::

### Comparaison de paires
La **paire** intègre également un opérateur de comparaison qui compare les éléments de la paire dans l'ordre **lexicographique**.

:::info Ordre lexicographique
L'ordre **lexicographique** est comparable à l'ordre alphabétique. Si l'on se limite aux mots et lettres c'est l'ordre utilisé pour comparer les mots dans un dictionnaire. On compare les premières lettres des mots. Si les premières lettres sont égales, on compare les secondes lettres, etc.
Cela peut être étendu à des éléments plus complexes comme des nombres. On compare les premiers éléments. Si les premiers éléments sont égaux, on compare les seconds éléments, etc.
:::

Dans le cas des paires, on compare les premiers éléments. Si les premiers éléments sont égaux, on compare les seconds éléments.

```cpp
#include <utility>
#include <iostream>

int main() {
    std::pair<int, int> p1 {1, 2};
    std::pair<int, int> p2 {1, 3};
    std::pair<int, int> p3 {2, 1};
    std::pair<int, int> p4 {1, 2};
    std::cout << (p1 < p2) << std::endl; // Affiche 1
    std::cout << (p1 < p3) << std::endl; // Affiche 1
    std::cout << (p1 < p4) << std::endl; // Affiche 0
}
```

### Utilisation de std::pair

On peut se servir de la classe `std::pair` et de son ordre lexicographique pour trier des éléments dans un tableau.

```cpp
#include <utility>
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<std::pair<int, int>> pairs {
        {1, 2},
        {3, 4},
        {1, 3},
        {2, 1},
        {1, 1}
    };
    std::sort(pairs.begin(), pairs.end());
    for (auto const& pair : pairs) {
        std::cout << pair.first << " " << pair.second << std::endl;
    }
}
```

Dans cet exemple, on trie les paires dans l'ordre lexicographique sur les premiers éléments. Si les premiers éléments sont égaux, on trie les paires dans l'ordre lexicographique sur les seconds éléments.

Ce qui donne le résultat suivant :

```bash
1 1
1 2
1 3
2 1
3 4
```

---

Cela peut aussi être utile pour retourner plusieurs valeurs dans une fonction.

```cpp
#include <utility>
#include <vector>

std::pair<float, float> minMax(std::vector<float> const& array) {
    float min {array[0]};
    float max {array[0]};
    for (float const& value: array) {
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value;
        }
    }
    return std::make_pair(min, max);
}
```

:::info
La classe `std::pair` est également utilisée par d'autres conteneurs de la bibliothèque standard comme `std::map` que nous verrons plus tard.
:::

## std::tuple — Un conteneur de données hétérogènes

La classe [`std::tuple`](https://en.cppreference.com/w/cpp/utility/tuple) (définie dans la bibliothèque `<tuple>`) permet de représenter un ensemble de données hétérogènes

C'est similaire à `std::pair` mais on peut stocker **plus de deux éléments**.

On peut accéder aux éléments de la paire avec la fonction `std::get`.

Exemple :

```cpp

#include <tuple>
#include <iostream>

int main() {
    std::tuple<int, float, std::string> t {1, 3.14f, "Hello"};
    std::cout << std::get<0>(t) << std::endl; // Affiche 1
    std::cout << std::get<1>(t) << std::endl; // Affiche 3.14
    std::cout << std::get<2>(t) << std::endl; // Affiche Hello
}
```

:::warning
On privilégie l'utilisation de **structures** de données avec des membres **explicites** plutôt que des **tuples** ou des **pairs** quand c'est pertinent. Nommés les membres d'une structure permet de rendre le code plus lisible et plus facile à maintenir.
Les **tuples** et **pair** sont utiles dans certains cas, mais il faut faire attention à ne pas en abuser.
:::

## Pour aller plus loin

<details>

<summary>std::variant</summary>

La classe `std::variant` (définie dans la bibliothèque `<variant>`) permet de stocker un élément parmi un ensemble d'éléments possibles. Similaires aux aux enums, mais avec la possibilité de stocker des types différents.

```cpp
#include <variant>
#include <iostream>
#include <string>

std::variant<int, float, std::string> v {};

v = 42; // v contient un int
v = 3.14f; // v contient un float
v = "Hello"; // v contient une std::string

if (std::holds_alternative<int>(v)) {
    std::cout << "v contient un int dont la valeur est " << std::get<int>(v) << std::endl;
} else if (std::holds_alternative<float>(v)) {
    std::cout << "v contient un float dont la valeur est " << std::get<float>(v) << std::endl;
} else if (std::holds_alternative<std::string>(v)) {
    std::cout << "v contient une std::string dont la valeur est " << std::get<std::string>(v) << std::endl;
}
```

</details>

<details>

<summary>std::optional</summary>

La classe `std::optional` (définie dans la bibliothèque `<optional>`) permet de stocker un élément optionnel. C'est-à-dire un élément qui peut être présent ou non.

Pour représenter un élément optionnel qui ne contient rien, on peut utiliser la valeur `std::nullopt`.

```cpp
#include <optional>
#include <iostream>
#include <string>

std::optional<int> o {};

o = 42; // o contient un int

if (o.has_value()) {
    std::cout << "o contient un int dont la valeur est " << o.value() << std::endl;
} else {
    std::cout << "o ne contient rien" << std::endl;
}
```

C'est un objet qui peut être utile pour représenter des valeurs optionnelles, comme par exemple le résultat d'une recherche dans un tableau ou un paramètre optionnel d'une fonction.

```cpp
#include <optional>
#include <iostream>
#include <string>

// Recherche la valeur dans le tableau et retourne son index si elle est trouvée sous forme d'un std::optional
std::optional<size_t> find(std::vector<int> const& array, int value) {
    for (size_t i {0}; i < array.size(); ++i) {
        if (array[i] == value) {
            return i;
        }
    }
    return std::nullopt;
}

int main() {
    std::vector<int> array {1, 2, 3, 4, 5};
    std::optional<size_t> index {find(array, 3)};
    if (index.has_value()) {
        std::cout << "3 se trouve à l'index " << index.value() << std::endl;
    } else {
        std::cout << "3 ne se trouve pas dans le tableau" << std::endl;
    }
}
```

:::info
Cela permet de ne pas avoir à utiliser des valeurs ***spéciales*** pour représenter l'absence de valeur comme par exemple `-1` pour un index comme on retrouve souvent en **C**.
:::

</details>

## Résumé

- Les **piles** et les **files** sont des structures de données qui permettent de stocker des éléments de façon à ce que le dernier élément ajouté soit le premier à être retiré (**LIFO**) ou le premier élément ajouté soit le premier à être retiré (**FIFO**). On utilise les classes `std::stack` et `std::queue` pour les représenter dans la bibliothèque standard de C++.

- La classe `std::pair` (`<utility>`) permet de représenter une paire d'éléments de types différents. C'est une classe qui est utilisée par d'autres **conteneurs** de la bibliothèque standard comme `std::map`.
- La classe `std::tuple` (`<tuple>`) permet de représenter un ensemble de données hétérogènes.

-   <details>
    <summary>std::optional</summary>

    La classe `std::optional` (`<optional>`) permet de stocker un élément optionnel. C'est utile pour éviter d'avoir recours à des valeurs *spéciales* pour représenter l'absence de valeur.

    </details>

-   <details>
    <summary>std::variant</summary>

    La classe `std::variant` (`<variant>`) permet de stocker un élément parmi un ensemble d'éléments possibles. C'est comparable aux enums, mais permet de stocker des types différents.

    </details>

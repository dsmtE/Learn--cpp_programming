# Correction

<details>
<summary>Exercice 1</summary>

1. Quelle est la différence entre un tableau **statique** et un tableau **dynamique** ?

Un tableau **statique** est un tableau dont la taille est connue à la compilation, c'est à dire que la taille du tableau est fixe et ne peut pas être modifiée pendant l'exécution du programme (`std::array` en **C++**).
Un tableau **dynamique** est un tableau dont la taille peut varier pendant l'exécution du programme (`std::vector` en **C++**). Pour cela, il faut utiliser de l’allocation dynamique de mémoire.

---

2. Quelle est la différence entre l'opérateur `=` et l'opérateur `==` ?

L'opérateur `=` permet d'**affecter** une valeur à une variable.

```cpp
int a {1};
int b {2};
a = b; // a vaut maintenant 2
```

L'opérateur `==` permet de **comparer** deux valeurs et retourne un **booléen**.

```cpp
int a {1};
int b {2};
bool c {a == b}; // c vaut false
```

---

3. Qu’entendez-vous par passage par **copie** et passage par **référence**(`&`) ?

Le passage par **copie** consiste à passer une **copie** de la variable en paramètre de la fonction. C'est à dire que la variable en paramètre de la fonction est une **copie** de la variable passée en paramètre lors de l'appel de la fonction.

```cpp
void addOne(int x) {
    // Ici x est une variable locale à la fonction addOne
    // x est une copie de la variable passée en paramètre lors de l'appel de la fonction
    x += 1;
}

int main() {
    int a {1};
    addOne(a);
    // a vaut toujours 1
}
```

Le passage par **référence** consiste à passer une **référence** de la variable en paramètre de la fonction. C'est à dire que la variable en paramètre de la fonction utilise le **même espace mémoire** que la variable passée en paramètre lors de l'appel de la fonction. Cela permet de modifier et manipuler directement la variable passée en paramètre lors de l'appel de la fonction.

```cpp
void addOne(int& x) {
    // Ici x est un référence à la variable passée en paramètre lors de l'appel de la fonction
    x += 1;
}

int main() {
    int a {1};
    addOne(a);
    // a vaut maintenant 2
}
```

---

4. A quoi servent les mots clés `const` et `unsigned` ? Quand et pourquoi les utiliser ?

Le mot clé `const` permet de déclarer une variable **constante**. C'est à dire que la variable ne peut pas être modifiée après son initialisation.

```cpp
int main() {
    const int a {1};
    a = 2; // Erreur: a est une variable constante
}
```

Cela permet de s'assurer que la variable ne sera pas modifiée par erreur et rajoute de la **sécurité** au programme.

On peut également préciser qu'une méthode ne modifie pas l'objet sur lequel elle est appelée en utilisant le mot clé `const` après la déclaration de la méthode.

```cpp
struct Point {
    // ...
    void display() const;
};
```

Cela permet de pouvoir utiliser la méthode sur un objet constant (sinon ce n'est pas possible).

```cpp
int main() {
    Point const p {1, 2};
    p.display(); // OK
}
```

---

Le mot clé `unsigned` permet de déclarer une variable **non signée**. C'est à dire que la variable ne peut pas prendre de valeur négative.

Cela permet de s'assurer que la variable ne sera pas négative lors de son utilisation. Cela a aussi l’avantage de doubler la valeur maximale que peut prendre la variable (comme il n'y a plus de valeur négative à stocker).

En **C++**, `size_t` est un alias pour `unsigned long long int` (un entier **non signée**) et est souvent utilisé dans les boucles ou pour représenter la taille d'un tableau ou d'un conteneur (c'est la taille maximale que peut prendre un tableau ou un conteneur).

</details>

<details>
<summary>Exercice 2</summary>

```cpp
#include <iostream>
#include <vector>

// Par référence constante pour éviter de faire une copie du vecteur et pour pouvoir utiliser la fonction sur un vecteur constant
int max(std::vector<int> const& vec) {
    int max {vec[0]};
    // Ici je commence à l'index 1 car j'ai déjà initialisé max avec la première valeur du tableau
    for (size_t i {1}; i < vec.size(); ++i)
    {
        if (vec[i] > max)
        {
            max = vec[i];
        }
    }

    return max;
}

// Version alternative avec un "Range-based for loop"
// int max(std::vector<int> const& vec) {
//     int max = vec[0];
//     for (int value: vec) 
//     {
//         if (value > max)
//         {
//             max = value;
//         }
//     }
//     return max;
// }

int main() {
    std::vector<int> v1 {1, 2, 3, 4, 5, 6, 7, 8, 9};
    std::cout << max(v1) << std::endl;
    std::vector<int> const v2 {9, 8, 7, 6, 5, 4, 3, 2, 1};
    std::cout << max(v2) << std::endl;
    // Aussi par valeur comme on a bien une référence constante
    std::cout << max({9, 8, 7, 6, 5, 4, 3, 2, 1})  << std::endl;
}
```

Détail du "Range-based for loop" [ici](/Lessons/S1/Arrays/#range-based-for-loop)

</details>

<details>
<summary>Exercice 3</summary>

```cpp
#include <iostream>
#include <cctype>

bool isVowel(char c) {
    c = std::tolower(c);
    return c == 'a' ||  c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y';
}

// version alternative avec un tableau (chaîne de caractères) contenant les voyelles
// bool isVowel(char c) {
//     c = std::tolower(c);
//     std::string const vowels {"aeiouy"};
//     for (char vowel: vowels)
//     {
//         if (c == vowel)
//         {
//             return true;
//         }
//     }
//     return false;
// }

// Il existe aussi d'autres façon de faire comme avec la méthode find de la classe std::string

size_t countVowels(std::string const& str) {
    size_t count {0};
    for(char c: str)
    {
        if(isVowel(c))
        {
            count += 1;
        }
    }
    return count;
}

int main() {
    std::string helloWorldStr {"Hello World!"};
    std::cout << "\"" << helloWorldStr << "\"" << ": " << countVowels(helloWorldStr) << std::endl;
    std::string testStr {"Ceci est un test"};
    std::cout << "\"" << testStr  << "\"" << ": " << countVowels(testStr) << std::endl;
    // Aussi possible par valeur comme on a bien une référence constante
    std::cout << "\"Je suis une phrase avec des voyelles\" : " << countVowels("Je suis une phrase avec des voyelles") << std::endl;
}
```
</details>

<details>
<summary>Exercice 4</summary>

```cpp
#include <iostream>
#include <cmath>

struct Point {
    float x {0f};
    float y {0f};
};

float distance(Point const& p1, Point const& p2) {
    return std::sqrt(std::pow(p1.x - p2.x, 2) + std::pow(p1.y - p2.y, 2));
}

// sans utiliser la fonction pow
// float distance(Point const& p1, Point const& p2) {
//     float diff_x {p1.x - p2.x};
//     float diff_y {p1.y - p2.y};
//     return std::sqrt(diff_x*diff_x + diff_y*diff_y);
// }

bool isInCircle(Point const& p, Point const& center, float radius) {
    return distance(p, center) < radius;
}

bool isCirclesIntersect(Point const& c1, float r1, Point const& c2, float r2) {
    return distance(c1, c2) < (r1 + r2);
}

// BONUS
struct Circle {
    Point center;
    float radius;
};

bool isInCircle(Point const& p, Circle const& circle) {
    return distance(p, circle.center) < circle.radius;
}

bool isCirclesIntersect(Circle const& c1, Circle const& c2) {
    return distance(c1.center, c2.center) < (c1.radius + c2.radius);
}

int main() {
    Point circle_center {0, 1};
    float circle_radius {2.4f};
    
    // Optionnel: Permet d'afficher les booléens sous forme de true/false (et pas 0/1)
    std::cout << std::boolalpha;
    std::cout << "(0, 0) isInCircle ((0, 1), 2.4f): " << isInCircle({0, 0}, circle_center, circle_radius) << std::endl;
    std::cout << "(1, 1) isInCircle ((0, 1), 2.4f): " << isInCircle({1, 1}, circle_center, circle_radius) << std::endl;
    std::cout << "(3, 4) isInCircle ((0, 1), 2.4f): " << isInCircle({3, 4}, circle_center, circle_radius) << std::endl;

    // BONUS
    Circle c1 { p1, 1.2f};
    Circle c2 { p2, 1.f};
    std::cout << "c1 intersect c2 :" << isCirclesIntersect(c1, c2) << std::endl;

    return 0;
}
```

</details>

<details>
<summary> Robot </summary>

<details>
<summary> src/direction.hpp </summary>

```cpp
#pragma once

#include <string>

enum class Direction {
    north,
    east,
    south,
    west
};

std::string to_string(Direction direction);
```
</details>

<details>
<summary> src/direction.cpp </summary>

```cpp
#include "direction.hpp"

std::string to_string(Direction direction) {
    switch (direction) {
        case Direction::north:
            return "north";
            // break pas nécessaire ici car on utilise le mot clé return qui permet de sortir immédiatement de la fonction
        case Direction::east:
            return "east";
        case Direction::south:
            return "south";
        case Direction::west:
            return "west";
    }
}
```
</details>

<details>
<summary> src/point.hpp </summary>

```cpp
#pragma once

// J'ai besoin de la déclaration de Direction pour pouvoir déclarer la méthode move
#include "direction.hpp"

struct Point {
    int x {0};
    int y {0};

    // BONUS: Ici la méthode peut être déclarée comme const car elle ne modifie pas la structure
    void display() const;
    void move(Direction const d, unsigned int const n);
};
```
</details>

<details>
<summary> src/point.cpp </summary>

```cpp
#include "point.hpp"
#include <iostream>

// Ici je n'ai pas afficher de retour à la ligne afin de pouvoir réutiliser la méthode ensuite dans robot.cpp
void Point::display() const {
    std::cout << '(' << x << ", " << y << ')';
}

void Point::move(Direction const d, unsigned int const n) {
    switch (d) {
        case Direction::north:
            y += n;
            break;
        case Direction::east:
            x += n;
            break;
        case Direction::south:
            y -= n;
            break;
        case Direction::west:
            x -= n;
            break;
    }
}
```
</details>

<details>
<summary> src/robot.hpp </summary>

```cpp
#pragma once

#include <string>
#include "direction.hpp"
#include "point.hpp"

struct Robot {
    std::string name;
    Point position;
    Direction direction;

    void display() const;
    void turnLeft();
    void turnRight();
    void move(unsigned int const n);
};

std::string createRobotName();

Robot createRobot(Point position, Direction direction);
```
</details>

<details>
<summary> src/robot.cpp </summary>

```cpp
#include "robot.hpp"

#include <cstdlib>
#include <iostream>

void Robot::display() const {
    std::cout << name << '(';
    position.display();
    std::cout << ", " << to_string(direction) << ')';
}

void Robot::turnLeft() {
    switch (direction) {
        case Direction::north:
            direction = Direction::west;
            break;
        case Direction::east:
            direction = Direction::north;
            break;
        case Direction::south:
            direction = Direction::east;
            break;
        case Direction::west:
            direction = Direction::south;
            break;
    }
}

void Robot::turnRight() {
    switch (direction) {
        case Direction::north:
            direction = Direction::east;
            break;
        case Direction::east:
            direction = Direction::south;
            break;
        case Direction::south:
            direction = Direction::west;
            break;
        case Direction::west:
            direction = Direction::north;
            break;
    }
}
void Robot::move(unsigned int const n) {
    position.move(direction, n);
}

std::string createRobotName() {
    std::string name {""};

    for(size_t i {0}; i < 2; ++i)
    {
        name += 'A' + (std::rand() % (25+1));
    }
    for(size_t i {0}; i < 3; ++i)
    {
        name += '0' + (std::rand() % (9+1));
    }

    return name;
}

Robot createRobot(Point position, Direction direction) {
    return Robot { createRobotName(), position, direction };
}
```
</details>

<details>
<summary> src/main.cpp </summary>

```cpp
#include <iostream>
#include <ctime>

#include "direction.hpp"
#include "point.hpp"
#include "robot.hpp"

int main() {

    // Initialisation du générateur de nombre aléatoire
    std::srand(std::time(nullptr));

    // Test direction
    Direction direction_test {Direction::north};
    std::cout << to_string(direction_test) << std::endl;

    // Test point
    Point p1 {1, 2};
    p1.display();
    std::cout << std::endl;
    p1.move(Direction::east, 3);
    p1.display();
    std::cout << std::endl;

    Robot robot {createRobot(Point{0, 0}, Direction::north)};

    std::count << "Robot start value: ";
    robot.display();
    std::cout << std::endl;

    robot.turnLeft();
    robot.move(3);
    robot.turnRight();
    robot.move(5);
    robot.move(2);
    robot.turnLeft();
    robot.move(1);
    robot.turnRight();
    robot.move(2);

    std::count << "Robot end value: ";
    robot.display();
    std::cout << std::endl;

    // Version alternative avec boucle sur une chaîne de caractère pour indiquer les actions à effectuer
    robot = createRobot(Point{0, 0}, Direction::north);

    for (char action : "L3R52L1R2") {
        // number test 
        if (action >= 48 && action <= 57) {
            robot.move(static_cast<int>(action - '0'));
        }
        else if (action == 'R')
        {
            robot.turnRight();
        }
        else if(action == 'L')
        {
            robot.turnLeft();
        }
        else 
        {
            if (action != '\0') {
                std::cout << "unknown action :" << action;
            }
        }
        
        robot.display();
        std::cout << std::endl;
    }
}
```
</details>

<details>
<summary> CMakeLists.txt </summary>

```cmake
# la version de cmake à utiliser
cmake_minimum_required(VERSION 3.0)

# La version du C++ que l'on souhaite utiliser (dans notre cas C++17)
set(CMAKE_CXX_STANDARD 17)

# On souhaite placer l'exécutable dans un sous-dossier "bin" au lieu de le mettre dans le dossier build
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin)

# Le nom du projet
project(Robot)

# Obtenir la liste des fichiers sources dans le dossier src
file(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")

# Optionnel : afficher la liste des fichiers sources
# message(STATUS "Found source files:")
# foreach(SRC_FILE ${SRC_FILES})
#     message(STATUS " - ${SRC_FILE}")
# endforeach()

# On indique que l'on souhaite faire un exécutable avec nos fichiers sources
add_executable(robot ${SRC_FILES})

# le dossier contenant les fichiers d'en-tête pour notre executable
target_include_directories(robot PUBLIC "src/")
```
</details>

</details>

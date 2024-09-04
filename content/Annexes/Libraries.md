---
title: Utiliser des bibliothèques en C++
tags:
    - C++
    - CMake
    - Libraries
---

Une des grandes forces de C++ est la possibilité d'utiliser des **bibliothèques**. Une bibliothèque est un ensemble de fonctions et de classes qui permettent de réaliser des tâches spécifiques. Il existe des bibliothèques pour à peu près tout : afficher des images, jouer des sons, faire des calculs mathématiques, etc.

Nous avons déjà utilisé une bibliothèque : **la bibliothèque standard**. C'est une bibliothèque qui est incluse par défaut dans tous les compilateurs C++. Elle contient des fonctions et des classes pour réaliser des tâches de base, comme afficher du texte à l'écran, lire des données au clavier, etc.

Nous allons voir comment utiliser des bibliothèques externes, c'est-à-dire des bibliothèques qui ne sont pas incluses par défaut dans le compilateur. Nous allons voir comment les inclure dans notre programme, et comment utiliser les fonctions et les classes qu'elles contiennent.

:::note
Les termes **bibliothèque** et **librairie** sont synonymes. Nous utiliserons le terme **bibliothèque**. Mais il est possible que vous rencontriez le terme **librairie** dans d'autres ressources.
:::

## Fonctionnement d'une bibliothèque

La plupart des bibliothèques sont constituées de la même façon : elles contiennent un ensemble de **fichiers d'en-tête** (extension `.h` ou `.hpp`) et des fichiers contenant le code machine de la bibliothèque.
Les premiers contiennent les déclarations et sont utile pour l'étape de **compilation**, les seconds contiennent les définitions et sont utiles pour l'étape de **linkage**.

### Statique ou dynamique

Les fichiers en question peuvent être de deux types : **statiques** ou **dynamiques**.

- Lorsque l'on compile un programme qui utilise une bibliothèque **statique**, le compilateur va inclure les définitions de la bibliothèque (à l'aide des fichiers objets statiques) **dans le fichier exécutable** au moment de l'étape de linkage. Cela signifie que le fichier exécutable sera plus gros, mais il n'aura pas besoin d'autres fichiers pour s'exécuter.

- Avec une bibliothèque **dynamique**, la bibliothèque n'est pas inclus dans le fichier exécutable. Au lieu de cela, le fichier exécutable contient des **références** aux fonctions et aux classes de la bibliothèque. Le contenu de la bibliothèque est stocké dans un **fichier de bibliothèque** (extension `.lib` ou `.dll` sur Windows, `.so` sur Linux et `.dylib` sur Mac). Lorsque l'on exécute le programme, le système d'exploitation charge le fichier de bibliothèque en mémoire et fait les correspondances entre les références et les définitions. Cela signifie que le **fichier exécutable** sera **plus petit**, mais il aura besoin de la bibliothèque pour s'exécuter. L'avantage est que plusieurs programmes peuvent utiliser le même fichier de bibliothèque en mémoire. l’inconvenant et qu'il faut que la bibliothèque soit présente sur le système d'exploitation ou il faut fournir le fichier de bibliothèque avec le programme (généralement dans le même dossier que l'exécutable).

### Header only

Certaines bibliothèques ne contiennent que des fichiers d'en-tête. Cela signifie que les déclarations et les définitions sont dans les mêmes fichiers (cela ne pose pas de problème en utilisant certains concepts avancés du langage C++). Ces bibliothèques sont appelées **header only**. Elles sont très faciles à utiliser, car il suffit de les inclure dans le programme pour pouvoir les utiliser.

### Debug ou release

Une bibliothèque peut être compilée en mode **debug** ou en mode **release**. En mode **debug**, la bibliothèque contient des informations supplémentaires qui permettent de déboguer le programme (cela s’accompagne parfois d'un fichier supplémentaire avec les informations de débogage). En mode **release**, la bibliothèque est optimisée pour la performance ou la taille du fichier exécutable.

## Inclusion d'une bibliothèque

Il existe plusieurs façons d'inclure une bibliothèque dans un programme et nous allons découvrir les différentes méthodes et les mettre en pratique avec **Cmake**.

### CMake FetchContent

**Cmake** inclut une fonctionnalité qui permet de télécharger une bibliothèque et de l'inclure dans le projet.
Cela s'appel [FetchContent](https://cmake.org/cmake/help/latest/module/FetchContent.html) et nous allons l'utiliser ensuite dans des exemples.

L'avantage est que cela fonctionne sur tous les systèmes d'exploitation et de ne pas avoir à gérer les fichiers de la bibliothèque manuellement.

### Inclusion manuelle

Il est toujours possible d'inclure une bibliothèque manuellement. Il faut d'abord télécharger la bibliothèque et décompresser les fichiers si nécessaire. Ensuite, il faut indiquer au compilateur (via CMake) où se trouve la bibliothèque et où se trouvent les fichiers d'en-tête. Cela va permet de compiler la bibliothèque et d'inclure les fichiers d'en-tête dans le programme.

Parfois certaines bibliothèques utilisent également CMake pour faciliter l'inclusion de la bibliothèque dans un projet. Dans ce cas on peut simplement indiquer le dossier de la bibliothèque à cmake et il se chargera de tout.

### Gestionnaire de dépendances

Enfin, il des outils nommés **gestionnaires de dépendances** qui permettent de télécharger et installer/compiler des bibliothèques automatiquement sur le système d'exploitation. Une fois installées, il suffit d'indiquer au compilateur que l'on souhaite utiliser la bibliothèque et elle va être incluse automatiquement et trouver les fichiers d'en-tête et les fichiers de la bibliothèques sur le système d'exploitation.
C'est une des raisons pour lesquelles certains développeurs préfèrent utiliser **Linux** plutôt que **Windows**. Il existe des alternatives pour Windows, comme *vcpkg* ou *conan* mais ce n'est pas aussi simple que sur Linux.

## Glm

[Glm](https://glm.g-truc.net/0.9.9/index.html) est une bibliothèque qui contient des classes et des fonctions pour faire des calculs mathématiques. Elle est très utile pour faire des calculs en **2D** et en **3D**, comme par exemple des **rotations**, des **translations**, des **projections**, etc.

Glm est une bibliothèque **header only**. Cela signifie que les déclarations et les définitions sont dans les mêmes fichiers. Il suffit donc de les inclure dans le programme pour pouvoir utiliser la bibliothèque.

### FetchContent et Cmake

Pour télécharger et inclure **glm** dans un projet CMake nous allons utiliser la fonctionnalité **FetchContent**.

Premièrement il faut indiquer à CMake que l'on souhaite utiliser la fonctionnalité **FetchContent**. C'est une fonction qui est incluse dans CMake à partir de la version **3.11**, mais qui n'est pas activée par défaut. Pour l'activer, il faut ajouter la ligne suivante avant de l'utiliser dans `CMakeLists.txt` :

```cmake
include(FetchContent)
```

**FetchContent** permet de télécharger une bibliothèque depuis un url ou un dépôt git. Nous allons utiliser la fonction `FetchContent_Declare` pour indiquer à cmake que l'on souhaite télécharger la bibliothèque **glm** depuis un dépôt git.

Il suffit d'ajouter les lignes suivantes dans le fichier `CMakeLists.txt` :

```cmake
FetchContent_Declare(
    glm
    GIT_REPOSITORY https://github.com/g-truc/glm
    GIT_TAG efec5db081e3aad807d0731e172ac597f6a39447
)
```

La fonction `FetchContent_Declare` prend plusieurs paramètres :

- Le nom de la bibliothèque (ici `glm`)
- L'url du dépôt git (ici `https://github.com/g-truc/glm`)
- Le tag git qui fait référence au **commit** que l'on souhaite télécharger (ici `efec5db081e3aad807d0731e172ac597f6a39447`)

Une fois que l'on a déclaré où trouver la bibliothèque, il faut indiquer à CMake que l'on souhaite la télécharger et la rendre disponible dans le projet. Pour cela, on utilise la fonction `FetchContent_MakeAvailable` :

```cmake
FetchContent_MakeAvailable(glm)
```

Une fois disponible, on peut préciser que l'on souhaite utiliser la bibliothèque **glm** dans une **target** CMake avec la fonction `target_link_libraries` :

```cmake
target_link_libraries(<target> PUBLIC glm)
```

Une fois tout assemblé, Voilà un exemple de fichier `CMakeLists.txt` qui utilise **glm** :

```cmake
cmake_minimum_required(VERSION 3.20)
project(test)

// Permet de changer le dossier de sortie des fichiers exécutables (pour qu'ils soient dans un dossier bin au lieu d'être mélangé avec les autres fichiers temporaires dans le dossier build)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin/${CMAKE_BUILD_TYPE})

// Ajoute des options de compilation pour le compilateur pour avoir des messages d'erreurs supplémentaires
if (MSVC)
    add_compile_options(/W3)
else()
    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)
endif()

# ---Source files---
file(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")

# ---Executable---
add_executable(test ${SRC_FILES})
target_compile_features(test PUBLIC cxx_std_17)
target_include_directories(test PUBLIC "src/")

# ---Libraries---
include(FetchContent)

# ---glm---
FetchContent_Declare(
    glm
    GIT_REPOSITORY https://github.com/g-truc/glm
    GIT_TAG efec5db081e3aad807d0731e172ac597f6a39447
)
FetchContent_MakeAvailable(glm)
// On lie la bibliothèque glm à notre exécutable (target) test
target_link_libraries(test PUBLIC glm)
```

## Magic enum

Pour illustrer l'ajout manuel d'une bibliothèque, nous allons utiliser la bibliothèque **magic enum**. Par la même occasion on découvre une bibliothèque très utile pour manipuler des énumérations qui comble une lacune du langage C++ et simplifie grandement l'utilisation des énumérations.

POur cette approche, l'idée est de manuellement télécharger le fichier de la bibliothèque (qui est un header only) et de l'inclure dans le projet.

Premièrement, il faut télécharger les fichiers de la bibliothèque. Pour cela, il faut se rendre sur la page github de la bibliothèque : https://github.com/Neargye/magic_enum/tree/master/include/magic_enum et télécharger les fichiers dans le dossier `include` (en cliquant sur le bouton **Code** puis **Download ZIP** par exemple ou en clonant le dépôt git).

Ensuite, il faut créer un dossier `lib` dans le dossier du projet et y placer les fichiers de la bibliothèque (dans un sous dossier `magic_enum` par exemple).

Enfin, il faut indiquer à cmake où se trouve les fichiers et que l'on souhaite utiliser la bibliothèque **magic enum** dans le programme. Pour cela, on utilise la fonction `target_include_directories` :

```cmake
target_include_directories(<target> PUBLIC "lib/")
```

Ainsi il va être possible d'inclure les fichiers dans le programme afin d'utiliser la bibliothèque:

```cpp
#include <magic_enum/magic_enum.hpp>
```

:::note
C'est évidement plus simple d'utiliser **FetchContent** pour inclure une bibliothèque, mais il est important de comprendre que cela fonctionne de la même façon et que simplement inclure la bibliothèque et utiliser `target_include_directories` (dans le cas plus simple d'une bibliothèque **header only**) permet de l'utiliser dans le programme.
:::

## Find Package et Cmake

Il est également possible d'utiliser la fonctionnalité **Find Package** de cmake pour inclure une bibliothèque. Cela permet de simplifier l'inclusion d'une bibliothèque et de ne pas avoir à indiquer où se trouve les fichiers de la bibliothèque. Cela repose sur le fait que la bibliothèque est **installée** sur le système d'exploitation et/ou que l'on utilise un gestionnaire de dépendances. C'est très pratique sur Linux, mais cela peut être plus compliqué sur Windows. Et c'est la raison pour laquelle nous n'allons pas l'utiliser dans ce cours (car trop dépendant du système d'exploitation).

Mais sachez que cela existe et vous ne serez pas surpris si vous tombez dessus.

Voilà un exemple de fichier `CMakeLists.txt` (non testé) qui utilise **Find Package** :

```cmake
cmake_minimum_required(VERSION 3.20)
project(test)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin/${CMAKE_BUILD_TYPE})

if (MSVC)
    add_compile_options(/W3)
else()
    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)
endif()

# ---Source files---
file(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")

# ---Executable---
add_executable(test ${SRC_FILES})
target_compile_features(test PUBLIC cxx_std_17)
target_include_directories(test PUBLIC "src/")

# ---glm---
# set(glm_DIR <installation prefix>/lib/cmake/glm) # if necessary
// highlight-next-line
find_package(glm REQUIRED)
# On lie la bibliothèque glm à notre exécutable (target) test
target_link_libraries(test PUBLIC glm::glm)
```

:::info
Enfin, avec de nouvelle version de Cmake il est même possible de configurer le fonctionnement de `FetchContent_MakeAvailable` pour qu'il utilise **Find Package** pour inclure la bibliothèque si c'est possible et qu'il utilise **FetchContent** sinon.
Cela peut être pratique dans certains cas, et permet d'éviter de télécharger la bibliothèque si elle est déjà installée sur le système d'exploitation, mais cela dépasse le cadre de ce cours.
:::

## Pour aller plus loin: créer sa propre bibliothèque

Il est également possible de créer sa propre bibliothèque. Cela peut être utile pour réutiliser du code dans plusieurs projets ou pour partager du code avec d'autres développeurs.

Pour créer une bibliothèque, il faut créer un nouveau projet cmake et ajouter un dossier `lib` dans lequel on va placer les fichiers de la bibliothèque. Ensuite, il faut créer un fichier `CMakeLists.txt` dans le dossier `lib` et indiquer à cmake que l'on souhaite créer une bibliothèque avec la fonction `add_library` :

```cmake
add_library(<name> [STATIC | SHARED | MODULE]
            [EXCLUDE_FROM_ALL]
            source1 source2 ... sourceN)
```

Je ne vais pas rentrer dans les détails dans ce cours mais voilà un exemple de **bibliothèque** ici si c'est quelque chose qui vous intéresse : [Simple-Image-Lib](https://github.com/JulesFouchy/Simple-Image-Lib/tree/main).

## Résumé

- Une bibliothèque est un ensemble de fonctions et de classes qui permettent de réaliser des tâches spécifiques.
- Une bibliothèque peut être **statique** ou **dynamique**.
- Il existe plusieurs façons d'inclure une bibliothèque dans un programme :
    - CMake FetchContent
    - Inclusion manuelle
    - Gestionnaire de dépendances
- En pratique, il est préférable d'utiliser **CMake FetchContent** pour inclure une bibliothèque (compatible avec tous les systèmes d'exploitation).
- Il est également possible d'utiliser **Find Package** pour inclure une bibliothèque (mais cela dépend du système d'exploitation).

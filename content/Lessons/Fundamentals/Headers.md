---
title: "Compilation et Headers: Séparer en plusieurs fichiers"
tags:
    - C++
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Maintenant que l'on sait **découper** notre code en fonctions il va aussi être intéressant de le découper en **plusieurs fichiers**. Cela va permettre de **regrouper** des fonctionnalités et mieux **organiser** un projet.

Prenons directement deux fichiers qui vont nous servir d'exemple tout le long de ce chapitre :

```cpp title="maths.cpp"
int sum (int const a, int const b)
{
    return a + b;
}
```

```cpp title="main.cpp"
#include <iostream>
int main()
{
    std::cout << sum(42, 27) << std::endl;

    return 0;
}
```

J'aimerais ici séparer le corps de la fonction ```sum``` de son utilisation dans la fonction ```main```.

Problème si j'essaye de compiler **indépendamment** ces deux fichiers je peux avoir des erreurs. Soit il manque une fonction d'entrée ```main``` pour le fichier ```maths.cpp``` soit la fonction ```sum``` n'est pas déclarée pour le fichier ```main.cpp```.

## Mécanisme de compilation (en simple)

Revenons à la compilation quelques instants pour mieux comprendre.

Quand j'ai parlé de **compilation** j'ai fait un **abus de langage** et j'ai englobé plusieurs étapes. Pour faire simple, il y a en réalité **trois** grandes étapes lors de la compilation en **C++**:
- **Le préprocesseur**
- **La compilation**
- **Le linkage**

### Le préprocesseur

La toute première étape est celle du **préprocesseur**. C'est le moment où toutes les **directives préprocesseur** sont traitées (toutes les lignes commençant par <kbd>#</kbd>).

Par exemple, nous avons déjà la **directive préprocesseur** ```#include``` qui permet d'inclure des fonctionnalités.

Cette directive fait simplement un **copié-collé** du contenu du fichier à inclure dans le fichier où la directive est utilisée.

Je ne vais pas en parler ici mais sachez qu'il existe d'autres directives permettant de faire des conditions en fonction des plateformes par exemple.

### La compilation

Ensuite nous avons la **compilation** à proprement parler.

Chaque fichier ```.cpp```, obtenu **après** les modifications du **préprocesseur**, appelé **unité de compilation**, va être traité individuellement. 
Le but de cette étape est de **transformer** le code **C++** (sous format texte) en langage compréhensible pour l'ordinateur.

C’est à cette étape que des **vérifications** du code ont lieu. Par exemple, dans le cas où le compilateur ne trouve pas la déclaration d’une fonction que vous appelez. Dans notre exemple précédent dans le fichier ```main.cpp```, la compilation va s'arrêter avec un message d'erreur indiquant ce qui n’a pas fonctionné.

Cette étape va produire des **fichiers objets**.

Un **fichier objet**, reconnaissable à son extension en ```.o``` ou ```.obj```, n’est rien d’autre que du langage machine mais seul, sans aucun lien avec le reste des autres fichiers. Tel quel, il n’est **pas exécutable**, car il lui manque des informations.

Il est possible de préciser aux compilateurs que l'on souhaite s'arrêter à ce stade en ajoutant des flags de compilation:
<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">

Avec **MSVC** le flag est <kbd>/c</kbd>:
```bash
cl /c helloImac.cpp
```

</TabItem>

<TabItem value="Linux&MacOS" label="Linux et MacOS">

Avec **G++** le flag est <kbd>-c</kbd>:

```bash
g++ -c helloImac.cpp
```

</TabItem>
</Tabs>

Cela indique au compilateur que l'on souhaite produire des **fichiers objets** et pas directement **lier** les fichiers pour en faire un **exécutable**.

Les **fichiers d'objets** peuvent faire référence à des "**symboles**"(noms de fonctions ou de variables) qui ne sont pas encore entièrement définis. C'est le cas lorsque l'on utilise une fonction déclarée et que l'on n'a pas encore écrit le **corps** de celle-ci, nous allons le voir juste après. Le compilateur ne s'en préoccupe pas et produit le fichier objet demandé si le reste du code est correct.

:::note
L'avantage est qu'il n'est pas nécessaire de tout recompiler si vous ne modifiez qu'un seul fichier. Si aucune modification n’est détectée depuis la dernière compilation, alors le compilateur **réutilise** le fichier objet **précédemment créé** lors d'une prochaine compilation ce qui accélère la compilation d’un projet. **Cmake** gère les fichiers objets lui même automatiquement dans le fameux dossier **build**.
:::

### Le linkage

Nos fichiers objets ne sont pas utilisables en l'état et c'est la dernière étape de **linkage** qui va les **lier** entre eux pour produire un **exécutable**.

C'est ce qui va permettre de **lier** la **déclaration** d'une fonction dans un fichier et le **corps de la fonction** dans un autre fichier par exemple.

Il est aussi possible de faire cette opération en ligne de commande à partir des **fichiers objets** mais ce n'est pas très utile en pratique car des outils comme **CMake** se charge de cette étape pour nous.

## En pratique

Revenons à notre exemple avec les fichiers ```maths.cpp``` et ```main.cpp```:

Premièrement, il manque la **déclaration** de la fonction ```sum``` (son **prototype**) dans le fichier ```main.cpp``` pour pouvoir produire un fichier objet valide:

```cpp title="main.cpp"
#include <iostream>

int sum (int const a, int const b);

int main()
{
    std::cout << sum(42, 27) << std::endl;

    return 0;
}
```

Ce fichier ne permet toujours pas de créer un exécutable à lui seul (car il **manque** le **corps** de la fonction ```sum```) mais il est maintenant possible d'en faire un **fichier objet**.

### Fichier d'en-tête

Pour une seule fonction dans mon exemple c'est simple de **recopier** le **prototype** de la fonction. Imaginons que notre fichier ```maths.cpp``` soit composé de dizaines de fonctions et que l'on souhaite les utiliser dans le fichier ```main.cpp``` mais aussi dans un autre fichier du même projet. Cela commence à être fastidieux de tout recopier.

On va donc regrouper les **déclarations** des fonctions dans un autre fichier d'extension ```.hpp``` que l'on appelle **fichier d'en-tête** (**header** en anglais).

Ainsi grâce à la **directive préprocesseur** ```#include``` on va pouvoir inclure (recopier) toutes les déclarations des fonctions facilement.

Dans notre exemple le fichier d'en-tête serait simplement:

```cpp title="maths.hpp"
int sum (int const a, int const b);
```

et le ```main.cpp``` devient:

```cpp title="main.cpp"
#include <iostream>
// highlight-next-line
#include "maths.hpp"

int main()
{
    std::cout << sum(42, 27) << std::endl;

    return 0;
}
```

:::info **guillemets** ou **chevrons**
On peut noter une petite différence, j'utilise ici des **guillemets** <kbd>""</kbd> pour l'inclusion et pas des **chevrons** <kbd>< ></kbd>. On pourrait très bien utiliser des **guillemets** tout le temps et faire: ```#include "iostream"```. Cette différence est une question de **convention** et on réserve les **chevrons** <kbd>< ></kbd> pour les fichiers de qui viennent de **bibliothèques** comme la **bibliothèque standard** (```iostream```, ```string```, ```vector```, etc) et les **guillemets** <kbd>""</kbd> pour le reste.
:::

On va également inclure ce fichier d'**en-tête** dans notre fichier ```maths.cpp``` pour s'assurer que l'on implémente les bonnes fonctions listées dans le fichier d'en-tête.

```cpp title="maths.cpp"
// highlight-next-line
#include "maths.hpp"

int sum (int const a, int const b)
{
    return a + b;
}
```

:::info **cpp** ou **hpp**
Les fichiers d’**en-tête** peuvent aussi utiliser l’extension **.h**. La différence n’est qu’une histoire de goût. Je préfère utiliser **.hpp** plutôt que **.h** pour mieux faire la distinction entre **C** et **C++** par analogie aux fichiers sources, qui se terminent par **.cpp** en **C++** mais **.c** en **C**.
:::

### Pragma once: éviter les doublons

Mais se pose alors la question des **doublons** si l'on inclut de nombreux fichiers, les uns dépendants des autres.

Dans le cas des fonctions ce n'est pas bien grave car déclarer plusieurs fois une fonction (je parle du **prototype** pas du corps qui lui doit être unique) est autorisé bien que ce soit inutile.

Par contre ce n'est pas toujours le cas. Par exemple avec les **Enums** il n'est pas possible de les déclarer deux fois et on obtient une erreur de compilation si on le fait.

:::info Un exemple
Admettons que l'on a un autre fichier ```utils.cpp``` qui inclut ```maths.cpp``` pour fonctionner. ```utils.hpp``` contient les déclarations des fonctions propres au fichier ```utils.cpp```. Le fichier ```maths.hpp``` définit un **enum**.

Si maintenant on souhaite utiliser des fonctions des deux fichiers dans notre fichier principal ```main.cpp```, on va se retrouver à inclure les deux:

```cpp title="main.cpp"
#include "utils.hpp"
#include "maths.hpp"

int main()
{
    // ...
    return 0;
}
```

Cela va provoquer une **erreur** lors de la compilation du fichier objet ```main``` car l'**enum** est déclaré deux fois. Une fois provenant de l'inclusion de ```utils.hpp``` (qui inclut lui-même ```maths.hpp```) et une seconde fois en incluant directement le fichier ```maths.hpp```.
:::

```#pragma once``` est une **directive du préprocesseur** là pour répondre à notre besoin.

Elle est utilisée pour empêcher que le contenu des fichiers d'**en-tête** soient inclus plusieurs fois. La directive ```#pragma once```, présente dans un fichier d'**en-tête**, garantit que le contenu du fichier sera inclus **une seule fois** dans une compilation.

Le fichier ```maths.hpp``` dans notre exemple devient donc:

```cpp title="maths.hpp"
// highlight-next-line
#pragma once
int sum (int const a, int const b);
```

Un fichier d'**en-tête** doit **toujours** contenir cette directive au début du fichier.

#### Structures

Bien que ce soit possible de mettre la déclaration d'une **structure** dans un fichier ```.cpp``` généralement on a besoin de s'en resservir dans plusieurs fichiers et la déclaration se trouve donc dans un **fichier d'en-tête** (```.hpp```).

Cependant, comme pour les **enums**, une **structure** ne peut être déclarée qu'une fois et il ne faut donc surtout pas oublier la **directive préprocesseur** ```#pragma once``` pour éviter un **doublon** lors d'inclusions.

On utilisera dans ce cas la déclaration de la structure avec les **prototypes** des fonctions qui lui sont associées dans notre fichier d'en-tête.

### Espaces de noms

Il est possible de regrouper du code (déclaration, fonction, ect) dans un **espace de noms** (namespace en anglais) pour éviter les conflits de noms.

Nous avons déjà rencontré sans le savoir des espaces de noms avec la **bibliothèque standard** de **C++**. Par exemple, `std::cout` est dans l'espace de noms `std` (pour **standard**).

Cela permet de différencier et séparer des fonctions (venant de différentes bibliothèques par exemple) qui ont le même nom.

Par exemple, si vous avez deux fonctions `sum` (avec la même signature) dans deux fichiers différents, vous allez avoir une erreur de compilation car le compilateur ne saura pas laquelle choisir.

Dans ce cas, vous pouvez les mettre dans un **espace de noms** pour les différencier.

Pour cela on utilise le mot clé `namespace` suivi du nom de l'espace de noms et des accolades pour délimiter le code qui appartient à cet espace de noms.

```cpp title="maths.hpp"
// highlight-next-line
namespace Maths
{
    int sum (int const a, int const b);
}
```

Pour définir la fonction on va devoir préciser l'espace de noms en ajoutant le préfixe `Maths::` devant le nom de la fonction.

On peut également de nouveau utiliser le mot clé `namespace` si on souhaite définir plusieurs fonctions dans le même espace de noms.

```cpp title="maths.cpp"
#include "maths.hpp"

// highlight-next-line
int Maths::sum (int const a, int const b)
{
    return a + b;
}
```

Pour appeler la fonction `sum` dans le fichier `main.cpp` il faudra maintenant préciser l'espace de noms en ajoutant le préfixe `Maths::` devant le nom de la fonction.

```cpp title="main.cpp"
#include <iostream>
// highlight-next-line
#include "maths.hpp"

int sum (int const a, int const b)
{
    return a + 2*b;
}

int main()
{   
    // Cette ligne va appeler la fonction sum du namespace Maths
    std::cout << Maths::sum(42, 27) << std::endl;
    // Cette ligne va appeler la fonction sum déclarée dans le fichier main.cpp
    std::cout << sum(42, 27) << std::endl;

    return 0;
}
```

## Utiliser Cmake

Pour résumer nous avons donc maintenant les fichiers suivants:

```cpp title="maths.hpp"
#pragma once
int sum (int const a, int const b);
```

```cpp title="main.cpp"
#include <iostream>
#include "maths.hpp"

int main()
{
    std::cout << sum(42, 27) << std::endl;

    return 0;
}
```

```cpp title="maths.cpp"
#include "maths.hpp"

int sum (int const a, int const b)
{
    return a + b;
}
```

Nous allons les placer dans un **dossier de projet** puis dans un **sous dossier** ```/src``` (pour sources).
Pour certains projets on peut avoir plusieurs sous dossiers comme ```/src```, ```/include``` (pour séparer les fichiers d'en-tête). C'est une question d'**organisation** et de **préférence**.

Dans ce dossier de projet nous allons créer notre fichier ```CMakeLists.txt``` pour nous aider à compiler le projet.

Nous allons reprendre et modifier notre premier fichier **Cmake**.

Dans le fichier ```CMakeLists.txt``` il va falloir indiquer les répertoires où se trouvent les **fichiers d'en-tête** par ```target_include_directories()```.

On va également régler une variable **Cmake** ```CMAKE_RUNTIME_OUTPUT_DIRECTORY``` qui va permettre d'indiquer que l'on souhaite placer l'**exécutable** compilé dans un sous dossier ```bin```.

```cmake title="CMakeLists.txt"
# la version de cmake à utiliser
cmake_minimum_required(VERSION 3.10)

# La version du C++ que l'on souhaite utiliser (dans notre cas C++17)
set(CMAKE_CXX_STANDARD 17)

# Le nom du projet
project(IMAC_project)

# On souhaite placer l'exécutable dans un sous-dossier "bin" au lieu de le mettre dans le dossier build
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin)

# On indique que l'on souhaite faire un exécutable avec nos deux fichiers .cpp
add_executable(helloImac "src/main.cpp" "src/maths.cpp")

# le dossier contenant les fichiers d'en-tête pour notre executable helloImac
target_include_directories(helloImac PUBLIC "src/")
```

```CMAKE_SOURCE_DIR``` est une variable cmake qui indique le dossier dans lequel se trouve le fichier ```CMakeLists.txt``` (documentation [ici](https://cmake.org/cmake/help/latest/variable/CMAKE_SOURCE_DIR.html#variable:CMAKE_SOURCE_DIR)).

:::caution
Il faut s'assurer qu'il y a exactement une fonction d'entrée **main()** dans les fichiers sources listés pour un **exécutable**.
:::

Petit résumé de notre dossier:
```
projet_folder/
├── src/
│   ├── main.cpp
│   ├── maths.cpp
│   └── maths.hpp
└── CMakeLists.txt
```

Vous pouvez maintenant ouvrir le dossier de projet dans **VSCode** et compiler votre projet.

### Quelques améliorations

Je vous ai parlé de "**warnings**" de compilation à plusieurs reprises.
Il est possible d'ajouter des options pour activer des **warnings** et avoir des informations supplémentaires lors de la compilation.

Je vous propose d'ajouter ces lignes dans votre fichier ```CMakeLists.txt```:

```cmake
if (MSVC)
    add_compile_options(/W3)
else()
    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)
endif()
```

Cela va se complexifier avec un nombre plus important de fichiers sources.
Avec **Cmake** il est possible de faire une **recherche de fichier** afin de ne pas avoir à lister tous les fichiers sources manuellement:

```cmake
file(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")
```

Notre fichier ```CMakeLists.txt``` devient:

```cmake
# la version de cmake à utiliser
cmake_minimum_required(VERSION 3.10)

# La version du C++ que l'on souhaite utiliser (dans notre cas C++17)
set(CMAKE_CXX_STANDARD 17)

# Le nom du projet
project(IMAC_project)

# Réglage du compilateur pour les warnings
// highlight-start
if (MSVC)
    add_compile_options(/W3)
else()
    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)
endif()
// highlight-end

# On souhaite placer l'exécutable dans un sous-dossier "bin" au lieu de le mettre dans le dossier build
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin)

# Obtenir la liste des fichiers sources dans le dossier src
// highlight-next-line
file(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")

# Optionnel : afficher la liste des fichiers sources
message(STATUS "Found source files:")
foreach(SRC_FILE ${SRC_FILES})
    message(STATUS " - ${SRC_FILE}")
endforeach()

# On indique que l'on souhaite faire un exécutable avec nos fichiers sources
// highlight-next-line
add_executable(helloImac ${SRC_FILES})

# le dossier contenant les fichiers d'en-tête pour notre executable helloImac
target_include_directories(helloImac PUBLIC "src/")
```

## Résumé

- Les **fichiers d'en-tête** ou **headers** (d'extension ```.hpp```) sont là pour lister les différentes déclarations des fonctions (et d'autres choses comme les **enums**) afin de pouvoir les utiliser dans **plusieurs fichiers**.

- Les **fichiers objets** sont des fichiers générés pendant la compilation. Ils peuvent faire référence à des "**symboles**"(noms de fonctions ou de variables) qui ne sont pas encore entièrement définis mais seulement déclarés (et inclus à l'aide des **fichiers d'en-tête**). Ils permettent aussi d'**accélérer la compilation** pour réutiliser des parties de code inchangées.

- La **directive préprocesseur** ```#include``` fait simplement un **copier-coller** du fichier cible dans le fichier actuel.

- La **directive préprocesseur** ```#pragma once``` permet d'éviter de copier deux fois des déclarations lors d'inclusions. C'est très utile pour les **fichiers d'en-tête** contenant des **enums** ou des **structures**. Il faut **toujours** l'utiliser dans les **fichiers d'en-tête**.

- il y a **3** étapes dans la compilation:
  - Le **préprocesseur** qui transforme les **directives préprocesseur** comme ```#include``` ou ```#pragma once```.
   - **La compilation** qui génère des **fichiers objets** pour chaque unité de compilation (fichiers ```.cpp``` après traitement du préprocesseur).
   - **Le linkage** qui permet de **lier** tous les **fichiers objets** ensemble pour obtenir un **exécutable**.

- **Cmake** permet de gérer ces étapes de compilation simplement.
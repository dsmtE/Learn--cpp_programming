---
title: "Fonctions : Découper son code"
tags:
    - C++
---

J'ai évoqué rapidement le terme de **fonctions** et de **méthodes** lors du précédent chapitre sur les tableaux, parlons en plus en détails.

Nos programmes deviennent plus complexes et il va devenir intéressant d'isoler certaines portions d'**instructions** afin de mieux les identifier, les séparer et les réutiliser au besoin. Cela va permettre d'éviter de copier des parties, factoriser le code similaire et identifier plus facilement de potentielles erreurs.

## Structure d'une fonction

Une **fonction** est un ensemble d'instructions délimité par des accolades <kbd>\{</kbd> et <kbd>\}</kbd> ce qui défini sa **portée** (scope).

Elle a un **nom** et peut **ou non** prendre des informations en entrée et peut **ou non** fournir **une** information en sortie.

```
type_de_retour nom(paramètres)
{
    instructions
}
```

:::info Un exemple bien connu
Dès notre premier programme nous avions rencontré une fonction, la fonction **main**. Celle-ci est le **point d’entrée** de tous les programmes que nous codons en **C++**.

```cpp
int main()
{
    // Instructions diverses
    return 0;
}
```

Ici, **main** est le **nom** de la fonction. Le **int** situé juste avant indique son **type de retour**. Dans ce cas, la fonction renvoie une valeur **entière** (via le ```return 0;```) qui indique que tout s’est bien passé.

Après, le nom, il y a des parenthèses vides <kbd>()</kbd>, ce qui signifie que la fonction n’attend aucune information en entrée.
Enfin, entre les accolades <kbd>{}</kbd>, nous avons les instructions qui la composent.
:::

### Choisir un nom

Les règles de nommage des fonctions sont les mêmes que pour nommer nos **variables**, vous pouvez aller les relire **[ici](/Lessons/S1/Variables/#quelques-règles-de-nommage)** si nécessaire.

De même que pour les variables, il est important de donner un nom explicite aux **fonctions** afin de définir clairement ce qu’elles font.

### Type de retour

Une fonction peut ou non renvoyer une valeur de retour, comme nous l’avons vu avec la fonction ```main```. Il faut simplement préciser le **type** de la valeur à retourner comme vu précédemment.

Pour renvoyer une valeur, on utilise le mot-clé ```return```, exactement comme dans la fonction ```main```.

:::info
Il peut y avoir plusieurs ```return``` dans une fonction. Un si un **if** est **vrai**, l’autre s’il est **faux** par exemple.

Mais dès que l'instruction ```return``` est exécutée, on **sort** de la fonction en cours et **tout le code restant n’est pas exécuté**.

Cela coupe le flot d’exécution de la fonction comme avec les mots-clés ```break``` et ```continue``` avec les [boucles](/Lessons/S1/ConditionsAndLoops/#contrôler-lexécution).
:::

Si votre fonction ne doit **rien renvoyer**, alors on utilise le mot-clé **void**, qui signifie "vide" et qui, dans ce contexte, indique que la fonction ne retourne pas d'information (dans ce cas il n'est pas nécessaire d'utiliser l'instruction ```return``` mais peut tout de même être utilisée pour couper le flot d’exécution).

### Des paramètres

Maintenant, parlons des **paramètres**. C'est via des **paramètres** que la fonction décrit ce qu'elle attend pour travailler.

On les déclare entre les parenthèses (<kbd>()</kbd>). Il faut que chaque paramètre ait un **type** et un **nom**. S’il y en a plusieurs, ils seront séparés par des virgules.

```cpp title="Des exemples"
#include <iostream>

int sum (int a, int b)
{
    return a + b;
}

int pgcd(int a, int b)
{
    int r { a % b };
    while (r != 0)
    {
        a = b;
        b = r;
        r = a % b;
    }

    // On peut tout à fait renvoyer la valeur d'un paramètre
    return b;
}

int main()
{
    int const a { 42 };
    int const b { 27 };

    std::cout << "La somme de " << a << " et " << b << " vaut " << sum(a, b) << "." << std::endl;
    std::cout << "Le PGCD de " << a << " et " << b << " vaut " << pgcd(a, b) << "." << std::endl;

    return 0;
}
```

:::caution
Une fonction doit être **déclarée avant son utilisation**.
Il faut donc la déclarer **avant** la fonction ```main``` afin d'être en mesure de l'utiliser dans la fonction ```main``` par exemple.
:::

Le nom donné aux paramètres d'une fonction est spécifique à cette fonction et n'est pas partagé par le reste du code.
Il est possible de donner en **argument** à une fonction une variable qui porte le même nom qu’un des **paramètres**. 

Inversement, il n’est pas possible d’utiliser un **paramètre de fonction** en **dehors** de celle-ci. Le code suivant produit donc une erreur.

```cpp
int function(int parameter)
{
    parameter += 5;
    return parameter;
}

int main()
{
    int const a { function(37) };
    int const b { function(a) };

    // La variable parameter n'existe pas ici
    parameter = 410;
    return 0;
}
```

:::info Argument vs paramètre
Attention, il faut bien faire la distinction entre **paramètre** et **argument**.

Un **paramètre**, c’est ce qu’attend une fonction pour travailler et qui est inscrit dans sa déclaration, le nom du paramètre est propre à la fonction et utilisable uniquement dans celle-ci.
Un **argument**, c’est la valeur transmise à la fonction quand on l’utilise.

Dans notre exemple précédent ```parameter``` est le **paramètre** de la fonction. ```37``` est l'argument de la fonction pour l'assignation de la variable ```a```.
Ensuite ```a``` devient lui même **argument** de la fonction pour l'assignation de ```b```.

En pratique, il y a souvent un abus de langage et les deux termes s'utilisent de façon **interchangeable** et je ne vous en voudrais si vous faites de même mais je tenais à vous expliquer la différence.
:::

### Petit point vocabulaire: les méthodes

Dans le précédent chapitre sur les tableaux nous avons vu des **fonctions propres** ou **méthodes**.

On parle de **méthode** quand une fonction est associée à un objet. C'est le cas par exemple de la fonction ```size()``` sur l'objet ```std::vector```. 
Elle s'utilise avec un point <kbd>.</kbd> après le **nom** de la variable en question.
On dit que ```size()``` est une **méthode** de ```std::vector```.
Une **méthode** a donc "connaissance" de l'objet en question pour le modifier, lire des informations, etc.

```cpp
std::vector<int> const array { 12, 18, 8, 4, 9 };
std::size_t const size { array.size() };
```

Nous y reviendrons plus tard, pour l'instant gardez simplement à l'esprit que c'est réservé à des type "particuliers" comme le ```std::vector``` ou ```std::string``` et que l'on appelle ça des **méthodes**.

## Une portée limitée

J'avais déjà évoqué la notion de portée (ou **scope**) lors de l'introduction des stuctures de contrôle. Cette notion est aussi vraie avec les fonctions. Les instructions d'une fonction sont contenues entre des **accolades** et donc restreignent la **portée** des variables à l'intérieur de ce bloc.

C’est une bonne pratique de déclarer ses variables dans **la plus petite portée possible**.

Cela permet premièrement de limiter son utilisation à cette portée et éviter un usage malencontreux plus tard. Déclarer une variable proche de son utilisation évite de devoir chercher et parcourir un code parfois long et complexe pour comprendre pourquoi cette variable est utilisée à cet endroit précis. Cela aide donc à la lecture et la compréhension du code.

Enfin, lorsqu’on atteint la fin d'un bloc (accolade <kbd>}</kbd>), le programme libère dans la mémoire les emplacements qu’il avait réservés pour les variables du bloc en question.
C'est donc plus propre et plus performant (niveau mémoire) de déclarer les variables à l’intérieur d'un bloc (fonction, condition, etc) si elles ne sont pas destinées à être utilisées ailleurs.

## Paramètre par copie

J’ai expliqué précédemment que les paramètres d’une fonction étaient dans une portée différente concernant le nommage.

La portée différente implique une **copie**. Pour chaque utilisation de la fonction, le compilateur va réserver un nouvel espace mémoire et **copier** l'**argument** (la variable) qu’on lui passe en paramètre. Une variable dans la fonction est donc **totalement différente**. C’est ce qu'on appelle un **passage par copie**.

On peut donc nommer nos paramètres avec le même nom qu'une de nos variables.

```cpp title="Un exemple"
#include <iostream>
void addOne(int a)
{
    a += 1;
}

int main()
{
    int a { 8 };
    
    addOne(a);

    std::cout << a << std::endl;

    return 0;
}
```

On pourrait penser que cela va afficher ```9``` mais en réalité ```a``` est toujours égal à ```8```.
la fonction ```addOne``` a reçu une **copie** de la variable ```a``` (nommée ```a``` elle aussi) mais elle ne peut pas modifier la variable ```a``` originale.

Dans le cas d’un entier ou d’un caractère par exemple ce n'est pas très grave, **mais** dans le cas d’un tableau de plusieurs d’éléments, on perd du temps inutilement à copier toutes les valeurs du tableau (même si on ne veut en lire que quelques unes dans la fonction).

## Référence

Mais, en **C++**, il existe un moyen de créer un alias, une **référence** vers une variable. 
Cette **référence** devient manipulable comme si nous avions la variable originale entre les mains.

On indique qu'une variable est une **référence** vers une autre en ajoutant une **esperluette** (<kbd>&</kbd>) après le type de notre variable.

```cpp
#include <iostream>

int main()
{
    int a { 8 };
    
    // refA est une référence vers la variable a
    int & refA { a };
    
    // ici je modifie donc la variable a
    refA += 1;
    
    std::cout << a << std::endl;

    return 0;
}
```

:::danger
On ne peut pas créer de référence qui ne cible rien, ni changer la cible d’une référence une fois qu’on l’a créée.
Une référence est un alias vers une autre variable, si on essaye de l'assigner de nouveau cela revient à modifier la variable originale et pas à réatribuer la référence.

```cpp
#include <iostream>

int main()
{
    int a { 8 };
    int b { 42 };
    
    int & refA { a };
    
    refA += 1;
    
    std::cout << a << ';' << b << std::endl;
    
    // ici refA reste une référence vers la variable a qui prend la valeur de b
    // refA ne devient PAS une référence vers la variable b
    refA = b;
    
    // Je modifie ici toujours la variable a
    refA += 1;

    std::cout << a << ';' << b << std::endl;

    return 0;
}
```
:::

## Passage par référence

Cela devient intéressant dans nos fonctions où il va aussi être possible de déclarer un **paramètre** en tant que **référence** et non pas comme une copie de la variable originale.

Pour indiquer que l'on souhaite recevoir une référence il faut ajouter une esperluette (<kbd>&</kbd>) après le type de notre **paramètre**.

:::note
Bien entendu on ne pourra passer en argument qu'une **variable** du **même type** que le type de la référence attendue par la fonction.
:::

```cpp
#include <iostream>
// highlight-next-line
void addOne(int & a)
{
    a += 1;
}

int main()
{
    int a { 8 };
    
    addOne(a);

    std::cout << a << std::endl;

    return 0;
}
```

### Référence constante

Je vous avais dit que les **variables constantes** allaient prendre tout leur importance et bien c'est ici ! :partying_face:

En effet, si on manipule une **référence**, on peut très bien **modifier** la variable originale comme vu précédemment. Mais parfois on aimerait utiliser une référence (pour éviter une copie d'un tableau par exemple) mais protéger la variable originale et **interdire les modifications** de celle-ci, un mode **lecture seule**.

On peut donc rajouter le mot clé ```const``` dans notre paramètre comme cela:

```cpp
#include <iostream>
#include <vector>

float sum(std::vector<float> const& list)
{
    float sum {0};

    for(float const value: list)
    {
        sum += value;
    }

    return sum; 
}

int main()
{
    std::vector<float> list { 8.f, 4.2f, 3.1415f, 43.8f };
    
    float sum { sum(list) };

    std::cout << "La somme des valeurs de mon tableau est de " << sum << std::endl;

    return 0;
}
```

Si vous essayez de modifier un paramètre constant vous allez obtenir une erreur (et c'est tant mieux !).

```cpp
#include <iostream>
void addOne(int const& a)
{
    a += 1;
}

int main()
{
    int a { 8 };
    
    addOne(a);

    std::cout << a << std::endl;

    return 0;
}
```

```bash
main.cpp: In function ‘void addOne(const int&)’:
main.cpp:4:7: error: assignment of read-only reference ‘a’
    4 |     a += 1;
      |     ~~^~~~
```

Le compilateur nous indique qu'il y a une tentative de modification d'un paramètre déclaré comme constant.

C'est donc une sécurité importante pour éviter des erreurs et je vous recommande d'utiliser des **variables ou paramètres constants dès que possible**.

:::note
Une **référence** constante ne peut évidemment pas redevenir modifiable et le code ci-dessous va aussi produire une erreur de compilation.

```cpp
#include <iostream>

void addOne(int & a)
{
    a += 1;
}

void readyOnlyFunction(int const & a)
{
    addOne(a);
}

int main()
{
    int a { 8 };
    
    readyOnlyFunction(a);

    std::cout << a << std::endl;

    return 0;
}
```
:::

### Le cas des littéraux

Avec les **litéraux** il se passe un autre mécanisme.

Le code ci-dessous ne va pas compiler, à cause de la ligne 15.

```cpp showLineNumbers
#include <iostream>

void display(int & a)
{
    std::cout << a << std::endl;
}

void displayConst(int const & a)
{
    std::cout << a << std::endl;
}

int main()
{
    // highlight-next-line
    display(42);
    displayConst(42);
    return 0;
}
```

En effet, nous passons un litéral à notre fonction qui attend une **référence**, un alias, sur une variable modifiable.
Un litéral n'est pas à proprement parlé une variable, il est invariable et n’existe nulle part en mémoire, il n'est pas modifiable.

Par contre, supprimez-la et le code compilera, la fonction **displayConst** ne pose pas de problème de compilation.
La seule différence entre les deux fonctions, c’est la présence du mot-clé ```const```.

Ici, le compilateur va créer une **variable constante temporaire**, qui n’**existera que le temps que la fonction**, et va lui assigner le litéral comme valeur.
Cela revient à faire cela par exemple:

```cpp
#include <iostream>

void displayConst(int const & a)
{
    std::cout << a << std::endl;
}

int main()
{
    {
        int const temporaryVariable { 42 };
        displayConst(temporaryVariable);
        // A la sortie de ce scope (délimité entre accolades) la variable temporaire va être détruite
    }
    
    return 0;
}
```

C'est donc **préférable** d'utiliser des **paramètres constants** car cela permet également de rendre **compatible** nos fonctions avec les **littéraux**.

### Retour par référence

Les **références** ont une contrainte particulière : elles doivent **toujours être valides**.

Dans le cas d’un paramètre de fonction il n'y a pas de problème car l’argument transmis à la fonction existera toujours quand celle-ci se terminera:

```cpp
#include <iostream>
void addOne(int & a)
{
    a += 1;
}

int main()
{
    int a { 8 };
    
    // la variable a est passée en argument
    addOne(a);
    // Ici la variable a existe toujours 
    return 0;
}
```

Mais, dans le cas où l’on souhaite qu’une fonction **retourne une référence**, cela peut être dangereux et on peut renvoyer une référence sur une variable qui n’existera plus à la fin de la fonction !

```cpp
#include <iostream>
int& test()
{
    int a { 33 };
    return a;
    // A la fin du scope de la fonction la variable 'a' va être détruite
}

int main()
{
    int & reference { test() };
    // ici notre référence est invalide !

    return 0;
}
```

C'est un **comportement indéterminé**. Il ne produira pas d'erreur de compilation mais l'utilisation de la référence est invalide.

:::danger
Il ne faut **jamais** renvoyer une **référence** vers une **variable locale** à une fonction.
:::

## Références et types standard

Utiliser des **références** pour **std::vector** ou **std::string** d’accord, mais qu’en est-il des types standard comme **int**, **char** et **double** ? Y a-t-il un intérêt à utiliser des références ? Doit-on bannir toutes les copies de notre code ?

Les types standard sont petits (en mémoire) et le **coût** de la création d’une **référence** sur des types aussi simples est souvent plus élevé ou équivalent que celui d’une "bête" copie.
En effet, le compilateur arrive très souvent à optimiser les copies et les rendre extrêmement rapides, bien plus qu’avec les références.

Donc ne tombez pas dans le piège de l’**optimisation prématurée**. Pensez au **références** lorsqu'il s'agit d'objets "gros". Vouloir mettre des **références** partout n'est pas une erreur (et je ne vous en tiendrai pas compte au contraire cela veux dire que vous pensez aux références). Mais, garder à l'esprit que cela a aussi un **coût** de créer une référence et que laisser juste un ```int const parameter``` permet au **compilateur** de mieux optimiser le code.

## Signature et fonctions surchargées

Ce qui différencie deux **fonctions**, ça n’est pas seulement leur **nom** mais également leurs **paramètres**. C’est ce qu’on appelle la **signature** d’une fonction.

On peut donc très bien avoir deux fonctions qui ont le même nom mais pas les mêmes paramètres:

```cpp
#include <iostream>
void testDisplay(int const a)
{
    std::cout << a << std::endl;
}

void testDisplay(float const a)
{
    std::cout << a << std::endl;
}

int main()
{
    testDisplay(42);
    testDisplay(63.5f);

    return 0;
}
```

Ici, le compilateur voit deux signatures différentes ```testDisplay(int const a)``` et ```testDisplay(float const a)``` il n'y a donc pas de problème.

On appelle cela la **surcharge**, de l’anglais "**overloading**". Cela rend le code plus simple et le compilateur appelle la bonne surcharge de la fonction pour les arguments précisés (si elle existe évidemment).

Par contre, le type de retour n'est pas une forme de surcharge. Deux fonctions avec le **même nom**, les **mêmes paramètres** et des **types de retour différents** ne compileront pas. Et c’est logique, car comment savoir quelle fonction utiliser et quoi retourner sans ambiguïté sinon ?

## Prototype: déclaration des fonctions

J'ai expliqué précédemment qu'une fonction a besoin d'être **déclarée avant son utilisation**. C'est vrai mais incomplet.

Cette déclaration peut se faire à l'aide de ce qu'on appelle le **prototype** de la **fonction**.

Le **prototype** est très similaire à la **signature** et est composé du **nom**, des **paramètres**(et leur type) **ET** du **type de retour** de la fonction.

Voilà un petit exemple de fonction et son **prototype**:
```cpp
// la déclaration de la fonction sum avec son prototype
int sum (int a, int b);

// Le corps de la fonction qui contient les instructions de la fonction
int sum (int a, int b)
{
    return a + b;
}
```

Il est possible d'**utiliser** une **fonction** dès lors qu'elle est **déclarée** avec son **prototype** seulement.

```cpp
#include <iostream>

int sum (int const a, int const b);

int main()
{
    int const a { 42 };
    int const b { 27 };

    std::cout << "La somme de " << a << " et " << b << " vaut " << sum(a, b) << "." << std::endl;

    return 0;
}

int sum (int const a, int const b)
{
    return a + b;
}
```

Je complète donc:

Une fonction doit être **déclarée avant son utilisation**. Cela peut se faire avec le **prototype** de la fonction **ou** le **corps** lui même. Une fonction peut être utilisée même si le **corps** de la fonction est écrit **plus tard** du moment que son prototype est écrit avant toute utilisation de la fonction.

Le **prototype** est là pour déclarer/signaler au compilateur que le corps de la fonction qu'on appelle sera bien défini plus tard dans le programme.

:::note
Évidemment le programme ne va pas compiler si le corps de la fonction déclarée n'existe pas et va nous l'indiquer (**undefined reference**):

```bash
in function `main':
main.cpp: undefined reference to `sum(int, int)'
```
:::

:::note
C'est une notion qui va être utile quand on verra la séparation du code en plusieurs fichiers.
:::

### Prototype vs signature

Il y a souvent un abus de langage et les termes de **prototype** et **signature** sont souvent interchangés. Je ne vous en voudrais donc pas si vous utilisez le terme de **signature** ou de **prototype**.

Si on veut être pointilleux le **prototype** désigne le **nom**, les **paramètres** et le **type de retour** d'une fonction alors que la **signature** indique **seulement** son **nom** et ses **paramètres** (permettant de faire de la [surcharge de fonction](#signature-et-fonctions-surchargées)).

## Récursivité

Enfin, il est possible d'utiliser une fonction dans elle même, on parle alors de **récursivité**.

Cela peut être utile quand le problème que l'on souhaite résoudre est de nature **récursive**, se répète sur lui même.

### Un petit exemple

Par exemple si l'on souhaite calculer le **produit** de tous les entiers de ```1``` à une valeur ```n```.

$$
P_n = 1 \times 2 \times \dots \times n-1 \times n \\
$$

On pourrait voir ce problème de manière **récursive** en exprimant cette somme en fonction de la somme à l'étape d'avant (```n-1```):

$$
\begin{aligned}
    P_n &= 1 \times 2 \times \dots \times n-1 \times n \\
    P_n &= (1 \times 2 \times \dots \times n-1) \times n \\
    P_n &= P_{n-1} \times n
\end{aligned}
$$

On a finalement exprimé le produit des entiers de ```1``` à ```n``` comme étant ```n``` fois le produit des entiers de ```1``` à ```n-1```. 

:::note
On nomme ce résulat la **factorielle** de ```n``` en Mathématiques.
:::

Sous forme de fonction **récursive** cela nous donnerait:

```cpp
int fact(int n) {
    return fact(n-1) * n;
}
```

On oublie cependant un ingrédient très important des fonctions récursives: la **condition d'arrêt**.

En effet, dans notre problème on a bien précisé que c'était de **```1```** à ```n```.
On fait donc attention de s'arrêter quand ```n <= 1```.
La **factorielle** de ```1``` étant égale à ```1``` je retourne donc **1**.

```cpp
int fact(int n)
{
    if( n <= 1 )
    {
        return 1;
    }

    return fact(n-1) * n;
}
```

Il faut faire attention à ne **pas oublier** cette **condition d'arrêt** et bien s'assurer qu'il est possible de la vérifier pour s'arrêter sinon notre fonction ne va **jamais** se terminer et notre programme va sûrement planter.

---

Dans la plupart des cas, il existe une version **alternative** non récursive (avec des boucles par exemple).

```cpp
int fact(int n)
{
    int P { 1 };
    // Ici si n est négatif alors la condition i <= n est directement invalide et on ne passe pas dans la boucle if et on retourne 1
    for(int i {2}; i <= n; i++)
    {
        P *= i;
    }
    return P;
}
```

Il est **préférable** d'utiliser des fonctions **non récursives** quand c'est possible car elle sont généralement plus performantes et moins propices à l'erreur (condition d'arrêt jamais valide, etc).

## Résumé

- Une **fonction** est un ensemble d'instructions délimité par des accolades (<kbd>{}</kbd>).
- Elle peut retourner une valeur en précisant le **type** de retour **avant le nom** ou le mot-clé **void** dans le cas où l'on souhaite ne rien retourner.
- Elle peut avoir des **paramètres**.
- Les **arguments** passés en **paramètre** sont par défaut **copiés**.
- Il est possible de manipuler la variable d'origine à l'aide de **référence** (en ajoutant une **esperluette** (<kbd>&</kbd>) **après** le **type** de notre variable).
- Il est possible de **surcharger** un fonction, c'est à dire avoir le même nom mais **des paramètres différents**, on parle de **signatures** différentes.
- Il est recommandé d'utiliser des paramètres **constants** (avec le mot-clé ```const```) pour **éviter des erreurs**, **éviter des copies** et **protéger nos variables**.
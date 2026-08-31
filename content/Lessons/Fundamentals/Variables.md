---
title: Un monde de variables
tags:
    - C++
---

Maintenant que l'on sait exécuter notre premier programme il est temps de découvrir ce que l'on va pouvoir manipuler en C++.

## Les littéraux

Un **littéral** est une valeur donnée explicitement dans le code. Il y a plusieurs types de littéraux en **C++**.

### Les caractères
En effet, la phrase **"Hello and welcome to IMAC !"** précédemment rencontrée représente simplement du texte.
C'est ce qu'on appelle une **chaîne de caractères**.

Qui dit **chaîne de caractères** dit **caractères** et il est également possible de représenter un unique caractère avec des guillemets simples **'**.

```cpp
#include <iostream>

int main()
{
    std::cout << 'a' << std::endl;
    std::cout << '7' << std::endl;
    std::cout << '?' << std::endl;
    return 0;
}
```

```cpp
#include <iostream>

int main()
{
    std::cout << 'H' << 'e'  << 'l' << 'l' << 'o' << ' ' << 'I' << 'M' << 'A' << 'C' << '!' << std::endl;
    return 0;
}
```

### Les chaînes de caractères

On pourrait simplement se contenter de **caractères** me direz vous mais c'est un peu fastidieux et les **chaînes de caractères** sont donc là pour nous simplifier la vie.

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello IMAC!" << std::endl;
    return 0;
}
```

:::note
On différencie les caractères simples (utilisant des <kbd>'</kbd>) des chaines de caractères par les guillemets <kbd>"</kbd>.
:::

####  Les caractères spéciaux

Avez vous une idée de comment afficher des guillemets ?

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello "IMAC"!" << std::endl;
    return 0;
}
```

Si j'essaie d'utiliser des guillemets cela ne compile pas comme dans l'exemple ci-dessus.

En effet, les guillemets permettent déjà de signaler le début et la fin d'une chaîne de caractères.

C'est également le cas quand on essaye de représenter un chemin de dossier au format Windows, par exemple, avec le chemin de fichier "C:\Program Files" et on obtient une erreur du type ```warning: unknown escape sequence: '\P'```.

Il existe en **C++** des **caractères** dits **spéciaux**, appelés séquences d’échappement. Le symbole <kbd>\\</kbd> permet d'indiquer au compilateur d’afficher et non interpréter ces caractères.

Il faut donc préfixer les guillemets du caractère <kbd>\\</kbd> pour pouvoir les afficher:
```cpp
#include <iostream>

int main()
{
    std::cout << "Hello \"IMAC\"!" << std::endl;
    return 0;
}
```

Vous pouvez trouver tous les caractères d'échappement [ici](https://en.cppreference.com/w/cpp/language/escape).

Voilà les plus utiles en pratique:

- <kbd>\\'</kbd> qui permet d’afficher un guillemet simple <kbd>'</kbd>
- <kbd>\\"</kbd> qui permet d’afficher un guillemet double <kbd>"</kbd>
- <kbd>\n</kbd> qui permet d’aller à la ligne, comme std::endl
- <kbd>\t</kbd> qui permet de faire une tabulation horizontale
- <kbd>\\\\</kbd> qui permet d’afficher un antislash <kbd>\\</kbd>

### Les nombres 

On peut également manipuler des nombres.

```cpp
#include <iostream>

int main()
{
    std::cout << -1 << std::endl;
    std::cout << 0 << std::endl;
    std::cout << 42 << std::endl;
    return 0;
}
```

On les appelle **nombres entiers** mais il est aussi possible d'utiliser des nombres à virgule, appelés **flottants**.

```cpp
#include <iostream>

int main()
{
    std::cout << 3.141593 << std::endl;
    std::cout << -1.5 << std::endl;
    return 0;
}
```

:::info
On remarque que l'on peut utiliser des **nombres négatifs** sans aucun problème. On y reviendra un peu plus tard.
:::

Concernant les nombres (entiers ou flottants) les **opérateurs arithmétiques** usuels sont utilisables:

| Opérateur | Description                     |
|-----------|---------------------------------|
| +         | Addition                        |
| -         | Soustraction                    |
| *         | Multiplication                  |
| /         | Division                        |
| %         | Modulo (reste de la division)   |

```cpp
#include <iostream>

int main()
{
    std::cout << "Opérateurs arithmétiques :" << std::endl;
    std::cout << "Addition: 1 + 2 = " << 1 + 2 << std::endl;
    std::cout << "Soustraction: 6 - 2 = " << 6 - 2 << std::endl;
    std::cout << "Multiplication: 3.14 * 2 = " << 3.14 * 2 << std::endl;
    std::cout << "Division: 42.5 / 3.2 = " << 42.5 / 3.2 << std::endl;
    std::cout << "Modulo: 7 % 3 = " << 7 % 3 << std::endl;

    std::cout << "5 / 2 = " << 5 / 2 << std::endl;
    std::cout << "5. / 2 = " << 5. / 2 << std::endl;

    return 0;
}
```

C'est aussi vrai pour les règles de **distributivité**, **associativité**, **commutativité** ou **priorité des opérateurs**, rien de bien étonnant me direz vous.

```cpp
#include <iostream>

int main()
{
    std::cout << "Associativité :" << std::endl;
    std::cout << "2 + (3 + 6) = " << 2 + (3 + 6) << std::endl;
    std::cout << "(2 + 3) + 6 = " << (2 + 3) + 6 << std::endl;
 
    std::cout << "Distributivité :" << std::endl;
    std::cout << "2 * (4 + 3) = " << 2 * (4 + 3) << std::endl;

    std::cout << "Priorité des opérateurs :" << std::endl;
    std::cout << "42 * 3 + (2 + 8 / 4) = " << 42 * 3 + (2 + 8 / 4) << std::endl;
    
    return 0;
}
```

:::caution
Ne remarquez vous pas quelque chose d'étonnant ? ```5 / 2``` et ```5. / 2``` ne donne pas la même chose ?

La raison est que pour le **C++**, si on fait une opération sur deux nombres entiers, le résultat doit **rester** un nombre entier.

Si l’on veut que le résultat soit un flottant, il faut qu’**au moins un des deux** nombres soit un flottant.

C'est pour cela d'ailleurs que mon exemple ```3.14 * 2``` fonctionne bien car au moins un des deux nombres est un flottant et le résultat est donc un flottant également.
:::

Pour résumer, toutes ces valeurs écrites dans notre code s'appellent des **littéraux**.

# Les variables

Les littéraux c'est sympa mais comment faire si l'on veut se resservir d'un résultat précédemment calculé ? C'est avec les **variables** que l'on va pouvoir faire ça !

C’est un concept commun à beaucoup de langages de programmation qui permet de stocker une valeur et de lui associer un nom, afin de pouvoir l'identifier et la manipuler facilement.

Nous ne rentrons pas dans le détail de comment sont stockées ces valeurs dans la mémoire de l'ordinateur car ce n'est pas le propos ici.

## Créer une variable

Pour déclarer une variable en **C++**, il faut trois choses:

- Préciser d'abord son **type**, qui indique ce que la variable va stocker (un **entier**, un **flottant**, une **chaîne de caractères**, **etc**)
- Un **nom** qui permet d'identifier la variable
- Enfin, la valeur à stocker dans notre variable. Ceci se fait en mettant la valeur entre accolades <kbd>{}</kbd>

```cpp
#include <iostream>
#include <string>

int main()
{
    int number { 42 };
    char letter { 'A' };
    float pi { 3.1415927f };
    double pi_double { 1415926535897931 };
    std::string text { "Hello IMAC!" };

    return 0;
}
```

:::info Syntaxe héritée

Il existe également une syntaxe alternative, de la forme ```type nom = valeur;```. Essayez, vous verrez que ça marche.

```cpp
#include <iostream>

int main()
{
    int number { 42 };
    std::cout << number << std::endl;

    return 0;
}
```

Cette syntaxe est **héritée du C** et est **toujours valable en C++**.
Dans ce cours je vous conseille fortement d'utiliser la syntaxe dite **moderne** utilisant les accolades **{}**.
De plus la syntaxe avec le symbole <kbd>=</kbd> a d'autres subtilités et peut parfois induire en erreur (des conversions implicites non desirées par exemple), c'est pourquoi nous ne l'utiliserons pas dans la majorité des cas.

Ne soyez pas surpris si vous rencontrez cette syntaxe, elle est encore très utilisée et je l'ai moi même utilisé pendant très longtemps.
:::

## Les types

Dans l'exemple précédent j'ai utilisé divers mots-clés qui font chacun référence à un **type** de variable spécifique:

- Pour les **nombres entiers** c'est le mot-clé **int**, (abréviation de l’anglais **int**eger signifiant nombre entier). Grâce à ce type, on peut stocker des entiers **négatifs** ou **positifs**.
- Pour les **flottants**(les nombres à virgule), nous avons le mot-clé **"float"**, (abréviation de **float**ing point numbers en anglais). Il existe aussi le mot clé **"double"** pour stocker des nombres à virgule plus précis quand c'est nécessaire.

:::note
Il est recommandé de faire la distinction entre **float** et **double** en ajoutant le suffixe <kbd>f</kbd> à la fin du nombre:
```cpp
#include <iostream>

int main()
{
    float pi { 3.141592f };
    double price { 4.14 };

    return 0;
}
```

Pour l'instant ça n'a pas beaucoup d'importance mais essayez de le mettre car c'est une bonne pratique et a son importance avec des concepts plus avancés en C++.
:::

- Pour les **caractères**, nous avons **char**.
- Pour les **chaînes de caractères** nous avons **std::string**.

:::caution **Chaîne de caractères**
Pour les chaînes de caractères c'est légèrement différent, nous avons le type **std::string**. 
Ce type est particulier car il n’existe **pas nativement en C++**.
Pour ceux qui sont attentifs à  ```std::``` c'est un type issu de la **bibliothèque standard** dont j'ai déjà parlé.
Ce sont des programmeurs experts qui ont codé ce type afin de manipuler aisément des chaînes de caractères. Afin de pouvoir manipuler des **std::string**, il faut donc inclure le bon fichier, ce que l’on fait grâce à la ligne ```#include <string>```.

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string hello { "Hello IMAC!" };
    std::cout << hello << std::endl;

    return 0;
}
```
:::

## Des préfixes modificateurs

Il est possible d'utiliser des mot-clés modificateurs sur les **entiers** (type **int**) devant le type de la variable pour altérer son fonctionnement (et implicitement la façon dont ils sont stockés en mémoire).

- ```signed```: permet d'indiquer que le nombre est signé (<kbd>+</kbd> ou <kbd>-</kbd>)
- ```unsigned```: permet d'indiquer que le nombre n'a pas de signe (une valeur absolue ou une taille)

- ```short```: le nombre sera stocké sur **16** bits minimum (dans le cas des petits nombres)
- ```long```: le nombre sera stocké sur **32** bits minimum (dans le cas de plus grands nombres)
- ```long long```: le nombre sera stocké sur **64** bits minimum

:::note
Ces préfixes sont une indication pour le compilateur. Cela donne donc un **minimum** mais le compilateur est libre de choisir une représentation mémoire s'il estime que c'est mieux ou plus adapté à un ordinateur spécifique.

---

Pour garantir une taille très précise en mémoire il existe depuis le **C++11** des entiers de taille fixée (**Fixed width integer types** en anglais) disponible dans le fichier à inclure ```< cstdint >```.

On retrouve donc par exemple **int16_t** pour un entier sur **16 bits** ou **uint32_t** pour représenter un entier non signé de **32 bits**. Une liste exhaustive est disponible [ici](https://en.cppreference.com/w/cpp/types/integer).

C'est vraiment un usage très spécifique et nous allons pas du tout nous en servir.
:::

## Comportement indéterminé

Mais qu'est ce qui se passe si je ne précise rien comme valeur pour ma variable (sans les accolades <kbd>{}</kbd>) ?

```cpp
int my_varaible;
```

C'est ce qu'on appelle un **comportement indéterminé**, en anglais **"undefined behaviour"**. La variable se voit attribuée une valeur indéterminée. Cela peut être ```0``` comme ```142857```, on ne peut pas le prévoir.

C'est donc quelque chose qu'il faut absolument éviter !

:::note
Le compilateur l'autorise pour des questions d'optimisation et d'héritage avec le **C**. Certains warnings de compilation indique ces erreurs.
:::

**Il faut toujours initialiser ses variables.**

:::note Valeur par défaut

Si on ajoute les accolades mais sans préciser de valeur, notre variable va contenir une **valeur par défaut**.

Ce sera par exemple une chaîne de caractères vide (```""```) pour les **std::string** ou un ```0``` dans le cas d'un **entier**.
Je vous laisse essayer:

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string default_string { };
    std::cout << default_string << std::endl; // ""

    int default_int { };
    std::cout << default_int << std::endl; // 0

    float default_float { };
    std::cout << default_float << std::endl; // 0.0f

    return 0;
}
```

Pour commencer, nous écrirons toujours les valeurs explicitement pour éviter de mauvaise surprise...

Plus tard, avec un peu plus de pratique, vous aurez la liberté d'utiliser l’**initialisation par défaut**, en connaissance de cause.
:::

## Quelques règles de nommage

Les noms des variables sont tout de même soumis à quelques règles de nommage.

- Premièrement, de son origine américaine, le C++ n’autorise que **les 26 lettres de l’alphabet** anglais (plus les **chiffres** et l’**underscore** <kbd>_</kbd>), on peut donc malheureusement dire adieu à nos jolis accents français. Les espaces et les signes de ponctuation sont aussi interdits (<kbd>'</kbd>, <kbd>?</kbd>, etc).

- Il ne peut pas commencer par un chiffre, c’est **interdit**. L'usage de l'underscore <kbd>_</kbd> au début, bien que possible, est conventionnellement utilisé dans un cadre spécifique et je vous déconseille donc de l'utiliser pour commencer.

- Enfin, il n'est pas possible d'utiliser un **mot-clé** du C++ comme nom de variable. Par exemple, il est **interdit** de déclarer une variable s’appelant **int**.

```cpp title="Quelques exemples"
int main()
{
    int variable42 { 42 };

    int 42variable { 42 };
    // Erreur : ne peut pas  commencer par un chiffre.

    int my_variable { 0 };

    int my variable { 0 };
    // Erreur : espace interdit.

    float result { 2.71f };

    float return { 2.71f };
    // Erreur : mot-clé réservé par le C++

    return 0;
}
```

### Un joli petit nom

Au-delà des règles de nommage, **trouver un nom adapté** à une variable est un casse tête que même les programmeurs expérimentés rencontrent.

En effet, respecter les règles ne suffit pas à bien nommer une variable. Le nom d'une variable permet de l'**identifier**, de **comprendre ce qu'elle stocke** et **comment on la manipule**.

:::note
Le nom d'une variable est destiné à un lecteur **humain**. On choisit un nom de variable pour qu'il soit compréhensible pour nous et nos futurs lecteurs, amis, collègues, etc

Une fois le code compilé, l'ordinateur ne fait aucune différence entre un nom ou un autre.
:::

### Quelques mauvais exemples

- **lpi**: Un acronyme ? Que signifie t'il ?
- **value**: Que stocke-t-elle ? Dans quel contexte ? Pourquoi existe-t-elle ?
- **multiplication_of_two_by_sqrt_of_pi**: Clair mais un peu trop long.
- **dIsTanCe**: Court et compréhensible mais les majuscules / minuscules peuvent rendre la lecture moins facile.
- **qsqffqedfqzdjzqoid**: Sûrement un chat qui est passé sur mon clavier.

Avec l'expérience et le temps vous arriverez à trouver plus facilement des noms clairs et simples.

Je vous demande dès maintenant de faire quelques efforts pour réfléchir aux noms des variables. Cela peut vous sembler peu important, jusqu'au jour où vous perdrez une semaine de travail à comprendre ce que votre programme ou variable est supposée faire.

## Enum: Un type supplémentaire

Vous allez sûrement le découvrir en pratiquant mais parfois on souhaite stocker un nombre limité de possibilités.

Par exemple les points cardinaux (Nord, Sud, Est, Ouest), les saisons (été, printemps, automne, hiver), les jours de la semaine, etc

On pourrait bien associer un entier à chaque possibilité (c'est une pratique très répandue en **C**) mais ce n'est pas la meilleure façon de faire. Un entier peut stocker des valeurs négatives ou alors être supérieur au nombre de possibilités voulues ce qui n'a pas vraiment de sens.

C'est là qu'entre en jeu les ```enum``` (de l'anglais **Enumeration**).

On le déclare en utilisant le préfixe ```enum class``` puis le nom de notre énumération suivis des valeurs possibles entre accolades.

```cpp title="Un exemple"
enum class Season {
    Spring, 
    Summer, 
    Autumn,
    Winter,
};

int main()
{
    Season current_season { Season::Spring };
    return 0;
}
```

:::note
On utilise ici aussi la syntaxe avec <kbd>::</kbd> pour signifier l'appartenance de la valeur à l'**enum** (de la même façon qu'avec la bibliothèque standard comme avec ```std::string```).
:::

:::info représentation en mémoire
Une **enum** est stockée en mémoire comme un **entier**. Chaque valeur de l'**enum** est associée à un entier, commençant par **0** pour la première valeur, **1** pour la deuxième, etc.

Il est possible de changer cette valeur en précisant un entier après le nom de la valeur mais ce n'est pas une pratique recommandée.

```cpp
enum class Season {
    Spring = 42, 
    Summer, 
    Autumn,
    Winter,
};
```

Nous verrons un [exemple](#cast-et-enum) dans la partie conversion de type (cast) pour voir comment récupérer la valeur entière associée à une valeur d'une **enum** et vice versa.
:::

:::caution
Mais pourquoi le mot clé **class** ici ?

Il est également possible de l'omettre mais cette syntaxe est un autre "type" d'enum hérité du **C** qui a de nombreux inconvénients:
- Il n'est pas possible de déclarer deux enums utilisant la même valeur (mais dans un contexte différent).
- Déclarer une variable ayant le même nom qu'une valeur d'un enum peut avoir des comportements imprévus.

```cpp
#include <iostream>

enum PrimaryColor {
    Red,
    Yellow,
    Blue
};

enum EyesColor {
    Brown,
    Hazel,
    Blue, // Erreur de compilation ici car la valeur Blue est aussi utilisée dans l'enum PrimaryColor
    Green,
    Grey,
    Amber
};

int main()
{
    
    // Ici Red fait référence à la valeur dans l'enum PrimaryColor
    std::cout << Red << std::endl;
    
    int Red { 35 };
    
    // Maintenant, bien que la ligne soit identique, Red fait référence à la variable créée ci-dessus
    std::cout << Red << std::endl;

    return 0;
}
```

On parle de "**Scoped enumerations**" avec ```enum class``` (autrement dit ayant une portée limitée pour éviter les collisions de valeurs).
Pour faire simple on écrira systématiquement ```enum class``` en **C++ moderne** pour s'éviter des problèmes.
:::

Enfin, il n’existe pas de moyen simple de convertir une **enum** en chaîne de caractères. C'est un problème récurrent en C++ et il existe plusieurs solutions plus ou moins élégantes pour le faire. Nous en verrons une plus tard au deuxième semestre ([ici](/Lessons/S2/HashAndAssociativeTables/#cas-dutilisation-avec-les-énumérations)).

## Des opérateurs pour manipuler nos variables

Il n'est pas seulement possible d'afficher nos variables (via ```std::cout```), il est aussi possible de faire des opérations dessus.

Pour cela nous allons utiliser des **opérateurs**.

Les **opérateurs** sont des **symboles** qui permettent de manipuler des variables, c'est-à-dire effectuer des opérations, les évaluer, etc.

Il y a principalement deux catégories d'**opérateurs**:
- Les opérateurs **binaires** qui utilisent **deux valeurs** pour en produire une nouvelle (comme ```a + b``` par exemple)
- Les opérateurs **unaires** qui s'appliquent sur **une valeur** pour en produire une nouvelle.

Nous avons par exemple vu précédemment les **opérateurs arithmétiques** (<kbd>+</kbd>, <kbd>-</kbd>, <kbd>*</kbd>, <kbd>/</kbd> et <kbd>%</kbd>) sur les nombres. Ces opérateurs sont **binaires**.

### Opérateurs d'affectation

Pour attribuer une nouvelle valeur à une variable, on utilise l’**opérateur d’affectation <kbd>=</kbd>**, précédé du nom de la variable et suivi de la valeur à affecter : ```nom = valeur;```.

```cpp
#include <iostream>
int main()
{
    int x { 0 };
    std::cout << x << std::endl;
    x = 3;
    std::cout << x << std::endl;

    return 0;
}
```

C++ s'occupe en premier lieu de tout ce qui se trouve à droite du signe <kbd>=</kbd>. On peut donc utiliser la valeur d'une variable pour faire un calcul avant de l'assigner à cette même variable.

---

Dans le cas où l'on veut effectuer une opération sur une variable et assigner le résultat à cette **même** variable il existe des opérateurs binaires nommés **opérateurs d'assignation composés**.

On retrouve principalement ces opérateurs composées avec les opérateurs **arithmétiques**:
<kbd>+=</kbd>, <kbd>-=</kbd>, <kbd>*=</kbd>, <kbd>/=</kbd> et <kbd>%=</kbd>

```cpp
int integer { 42 };

// équivalent à écrire "integer = integer + 3"
integer += 3;

integer -= 1;
integer *= 4;
integer /= 2;
integer %= 2;
```

Il existe d'autres **opérateurs d'affectation composés** mais nous les découvrirons le moment venu.

### Opérateurs d'incrémentation

Cela va même plus loin, il existe un raccourci supplémentaire lorsque l'on souhaite ajouter ou soustraire ```1``` à un nombre.
On parle d'**incrémentation** et de **décrémentation**.

- **a++** ou **++a** pour incrémenter de ```1```  la valeur de la variable ```a```.
- **a--** ou **--a** pour décrémenter de ```1```  la valeur de la variable ```a```.

:::info
Les deux syntaxes sont quasiment équivalentes, il y a une petite différence lorsque l'on souhaite utiliser le résultat de l'incrémentation:

- On parle de **Post-incrémentation** avec **a++**:
Cette forme signifie que la variable **a** est d'abord utilisée, **puis** elle est incrémentée de 1. Cela signifie que l'effet de l'incrémentation ne sera visible qu'après l'évaluation de l'expression qui contient **a++**.

```cpp
int a { 5 };
int result { a++ }; // result prend la valeur de a (5) puis a est incrémenté à 6.
// Maintenant, a vaut 6 et result vaut 5.
```

- On parle de **Pré-incrémentation** avec **++a**:
Cette forme signifie que la variable **a** est d'abord incrémentée, **puis** cette nouvelle valeur est utilisée. Cela signifie que l'effet de l'incrémentation sera visible immédiatement dans l'expression qui contient **++a**.

```cpp
int a { 5 };
int result { ++a }; // a est incrémenté à 6, puis result prend la nouvelle valeur de a (6).
// Maintenant, a et result valent tous les deux 6.
```

En résumé, la seule différence entre les deux formes réside dans le moment où l'incrémentation est réalisée (avant ou après l'utilisation de sa valeur actuelle). Lorsque vous voulez récupérer le résultat de l'incrémentation, assurez-vous de choisir celle qui convient le mieux à votre situation pour obtenir le comportement souhaité dans votre programme.

Dans la plupart des cas, je vous recommande tout simplement de ne **pas l'utiliser**! C'est une grosse source d’erreurs. Faites plutôt:

```cpp
int a { 5 };
a++;
int result { a };
```

ou 

```cpp
int a { 5 };
int result { a };
a++;
```
Aussi, je recommandes même d’utiliser ```a += 1``` à la place. Comme ça pas de surprise on est certain de ce qu’on fait.

```cpp
int a { 5 };
a += 1;
int result { a };
```

:::
### Quelques exemples

```cpp
#include <iostream>

int main()
{
    int variable { 42 };
    std::cout << variable << std::endl;
    
    // Je donne une nouvelle valeur à ma variable 
    variable = 2 + (3 * 9);
    std::cout << variable << std::endl;
    
    // J'utilise la valeur de ma variable pour un calcul et réaffecte le résultat à la même variable
    variable = variable + 7;
    std::cout << variable << std::endl;
    
    // Je me sers de ma variable pour en créer une nouvelle
    int other_value { variable * 3 };
    std::cout << other_value << std::endl;
    std::cout << variable << std::endl;

    // Je peux utiliser d'autres variables également
    variable = other_value - 1;
    std::cout << variable << std::endl;

    // Je peux incrémenter ma variable de deux façons
    variable += 1;
    variable++;
    std::cout << variable << std::endl;

    return 0;
}
```

## Variables constantes

Il existe enfin un dernier mot clé important, le mot clé **```const```**.
Il va permettre, comme son nom l'indique, de rendre constant une variable et ainsi empêcher toute modification de celle-ci.
Si l’on essaye de modifier une constante, on obtient une erreur de compilation.

```cpp
int main()
{
    float const gravity { 9.80665f };
    gravity = 9.0f; // Erreur de compilation

    return 0;
}
```

Pour l'instant cela ne va pas être très utile. Mais c'est une très (très (très)) bonne pratique et permet de protéger des variables et donner des contraintes fortes à notre code.
Je vais l'utiliser régulièrement dans des exemples et on découvrira ensemble plus tard où cela prendra vraiment toute son importance d'utiliser des ```const``` **dès que possible**.

:::info
Vous verrez souvent des codes qui inversent l’ordre de **const** et écrivent **const float variable {};**.
C'est tout à fait possible car le **const** respecte la règle suivante : 
Il s’applique à ce qui est à **sa gauche**, **sauf** s’il n’y a rien, auquel cas il s’applique à ce qu’il y a à droite.
Je vais le placer à droite dans la suite de ce cours car c'est le fonctionnement voulu initialement du **const**.
C'est une question de préférence et de lisibilité, vous êtes libre de choisir ce que vous préférez.
:::

## Entrée / Sortie

Jusque là, nous avons régulièrement rencontré **std::cout** qui nous permet d'afficher des caractères.

Il est également possible de faire l'inverse en manipulant ce qu'on appelle une **entrée**.

Grâce aux variables, il est possible de demander des informations à l’utilisateur et de stocker cette information afin d'en faire quelque chose.

```cpp
#include <iostream>

int main()
{
    std::cout << "Entre ton age : " << std::endl;
    int age { 0 };
    std::cin >> age;
    std::cout << "Tu as " << age << " ans." << std::endl;

    return 0;
}
```

Ici **std::cin** est très similaire à std::cout et signifie "**c**haracter **in**put".

Il faut le préfixer par ```std::```, car lui aussi appartient à la bibliothèque standard. De plus, on utilise ici les chevrons <kbd>>></kbd> dans le sens inverse pour signifier que l'on "insère"" ce qui vient de notre entrée pour le stocker dans notre variable.

:::caution
Dans notre cas le **C++** comprend que c'est un nombre et le convertit en entier (int).

Mais que se passe t'il si l'on entre des lettres ?

Dans ce cas de figure **la variable (```age``` ici) n'est pas modifiée**. Mais pas seulement, ```std::cin``` n'arrive pas à convertir notre entrée, il passe dans un état invalide, mémorise tous les caractères invalides et toutes les utilisations suivantes de ```std::cin``` seront érronées.

Nous verrons plus tard comment gérer ce cas de figure et détecter si une erreur survient.
:::

## Cast

Il est possible de convertir un **type** en un autre **type**. C'est ce qu'on appelle un **cast**.

Il existe plusieurs types de **cast** dont le plus courant est le **cast** statique (**static_cast**).

**static_cast** permet de **convertir** un type en un autre type. Par exemple, un ```int``` en ```float```. C'est un **cast** sûr car il fait des vérifications. Il est à utiliser par défaut pour les **conversions** de type.

```cpp
#include <iostream>

int main()
{
    int integer {42};
    float floating {3.14f};

    float floatingFromInteger {static_cast<float>(integer)};
    int integerFromFloating {static_cast<int>(floating)};

    std::cout << "integer: " << integer << std::endl;
    std::cout << "floating: " << floating << std::endl;

    // static_cast
    std::cout << "static_cast<float>(integer): " << floatingFromInteger << std::endl;
    std::cout << "static_cast<int>(floating): " << integerFromFloating << std::endl;

    return 0;
}
```

```bash
integer: 42
floating: 3.14
static_cast<float>(integer): 42
static_cast<int>(floating): 3
```

:::note
Il existe également un cast hérité du **C** qui s'effectue avec des parenthèses (<kbd> ( ) </kbd>) autour du type vers lequel on veut caster devant la variable à caster.
```cpp

int integer {42};
float floating {3.14f};

float floatingFromInteger {(float)integer};
int integerFromFloating {(int)floating};
```

Il est à éviter car il est dangereux et fonctionne de différentes manières en fonction des cas sans vérifications et peut donc provoquer des erreurs ou comportements inattendus.
:::

### Cast et enum

Il est également possible de **caster** une valeur d'une **enum** en **entier** et vice versa. C'est une pratique courante pour afficher et manipuler une valeur d'une **enum**. 

```cpp
#include <iostream>

enum class Season {
    Spring, 
    Summer, 
    Autumn,
    Winter,
};

int main()
{
    Season current_season { Season::Spring };
    int current_season_int { static_cast<int>(current_season) };
    std::cout << current_season_int << std::endl;

    int season_int { 2 };
    Season season { static_cast<Season>(season_int) };
    std::cout << static_cast<int>(season) << std::endl;

    return 0;
}
```

## En résumé

Nous venons de découvrir les variables en **C++**. C'est la base de tout programme informatique, ce qui permet d'échanger et de manipuler des informations.

- C++ nous permet de manipuler différents **types** de données:
  - des caractères simples (**char**)
  - des chaînes de caractères (via **std::string**)
  - des nombres entiers (**int**)
  - des nombres réels (**float** ou **double**)
  - Des énumérations (avec **enum class**)

- Il est possible d'utiliser toutes les opérations usuelles qui existent sur les nombres.

- Les **variables** nous permettent de **stocker** des valeurs et d'y **associer un nom** (en tenant compte de certaines règles de nommage).

- Il est **important** de choisir un nom de variable qui a du sens et le plus simple possible.

- Il est possible de spécifier qu'une variable est non modifiable avec le mot-clé ```const```.

- On utilise des **opérateurs** pour manipuler nos variables.

- Il est possible de convertir un type en un autre type. C'est ce qu'on appelle un **cast**. Le plus courant est le **cast** statique (**static_cast**). Il fait des vérifications et est donc plus sûr. Il est à utiliser par défaut pour les **conversions** de type.

- Nous pouvons demander des informations à l’utilisateur grâce à **std::cin**.
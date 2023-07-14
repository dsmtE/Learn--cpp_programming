---
title: Un monde de variables
tags:
    - C++

sidebar_position: 2
---

# Introduction

maintenant que l'on sait exécuter notre premier programme il est temps de découvir ce que l'on va pouvoir manipuler en c++.

# Les litéraux

## les Caractères
En effet, la phrase **"Hello and welcome to IMAC !"** précédement rencontrée dans notre premier programme représente simplement du texte.
C'est ce qu'on appel une **chaîne de caractères**.

:::note
Ces valeurs écrires dans le codes s'appel des **litéraux**.
:::

Qui dit **chaîne de caractères** dit **caractères** et il est également possible de représenté un unique caractères avec des guillemets simples **'**.

```cpp
#include <iostream>

int main() {
    std::cout << 'a' << std::endl;
    std::cout << '7' << std::endl;
    std::cout << '?' << std::endl;
    return 0;
}
```

```cpp
#include <iostream>

int main() {
    std::cout << 'H' << 'e'  << 'l' << 'l' << 'o' << ' ' << 'I' << 'M' << 'A' << 'C' << '!' << std::endl;
    return 0;
}
```

On pourrait simplement se contenter de caractères me dirait vous mais c'est un peu fatidieux et les chaînes de caractères sont dont là pour nous simplifier la vie.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello IMAC!" << std::endl;
    return 0;
}
```
On différencie les caractères simple (utilisants des <kbd>'</kbd>) des chaines de caractères par les guillements <kbd>"</kbd>.


###  Les caractères spéciaux

Avez vous une idée de comment afficher des guillements ? Vous avez vu juste si j'essaie naivement d'utiliser des guillemets cela va planter !
```cpp
#include <iostream>

int main() {
    std::cout << "Hello "IMAC"!" << std::endl;
    return 0;
}
```
En effet, les guillements permettent déjà de signaler le début et la fin d'une chaine de caractères.

C'est également le cas quand on essaye de représenter un chemin de dossier au format windows par exemple avec le chemin de fichier "C:\Program Files" et on obtient une erreur du type ```warning: unknown escape sequence: '\P'```.

Il existe en **C++** des **caractères** dit **spéciaux**, appelées séquences d’échappement, et c'est le sybole '\' qui permet d'indiquer au compilateur d’afficher et non interpréter ces caractèeres.

IL faut donc préfixer les guillements du caractères '\' pour pouvoir les afficher:
```cpp
#include <iostream>

int main() {
    std::cout << "Hello \"IMAC\"!" << std::endl;
    return 0;
}
```

Vous pouvez trouvez tous les caractères d'échappements [ici](https://en.cppreference.com/w/cpp/language/escape).

Voilà les plus utiles en pratiques:

- \' qui permet d’afficher un guillemet simple '
- \" qui permet d’afficher un guillemet double "
- \n qui permet d’aller à la ligne, comme std::endl
- \t qui permet de faire une tabulation horizontale
- \\ qui permet d’afficher un antislash \
- 
## Les nombres 

c'est super mais un peu limité. On aimerait égallement pouvoir manipuler des nombre par exemple.

C'est tout à fait possible.

```cpp
#include <iostream>

int main() {
    std::cout << -1 << std::endl;
    std::cout << 0 << std::endl;
    std::cout << 42 << std::endl;
    return 0;
}
```

On les apellent **nombre entiers** mais il est égallement possible d'utiliser des nombre à virgules, apellés **flottants**.

```cpp
#include <iostream>

int main() {
    std::cout << 3.141593 << std::endl;
    std::cout << -1.5 << std::endl;
    return 0;
}
```

:::info

On remarque que l'on peut utiliser des **nombres négatifs** sans aucun problème. On y reviendra un peu plus tard.

:::

Concernant les nombres (entiers ou flottants) les **opérateurs arithmétiques** usuelles sonutilisables:

| Opérateur | Description                     |
|-----------|---------------------------------|
| +         | Addition                        |
| -         | Soustraction                    |
| *         | Multiplication                  |
| /         | Division                        |
| %         | Modulo (reste de la division)   |

```cpp
#include <iostream>

int main() {
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

int main() {
    td::cout << "Associativité :" << std::endl;
    std::cout << "2 + (3 + 6) = " << 2 + (3 + 6) << std::endl;
    std::cout << "(2 + 3) + 6 = " << (2 + 3) + 6 << std::endl;
 
    std::cout << "Distributivité :" << std::endl;
    std::cout << "2 * (4 + 3) = " << 2 * (4 + 3) << std::endl;

    std::cout << "Priorité des opérateurs :" << std::endl;
    std::cout << "42 * 3 + (2 + 8 / 4) = " << 42 * 3 + (2 + 8 / 4) << std::endl;
    
    return 0;
}
```
Je vous laisse essayer par vous même.

:::caution
Ne remarquez vous pas quelques choses d'étonnant ?! 5 / 2 et 5. / 2 ne donne pas la même chose ?

La raison est que pour le C++, si on fait une opération sur deux nombres entiers, le résultat doit rester un nombre entier.

Si l’on veut que le résultat soit un nombre à virgule, il faut qu’**au moins un des deux** nombres soit un flottant.

C'est pour ça d'ailleurs que dans mon exemple 3.14 * 2 fonctionne biencar au moins un des deux nombre est un nombre flottant et le résultat est donc un nombre flottant égallement.
:::

Pour résumé toutes ces valeurs écrites dans notre code s'appel des **litéraux**.

# Les variables

Les littéraux c'est sympa mais comment faire si l'on veux se reservir d'un résultat précédement calculer ? Cela devient un peu limité avec seulement les littéraux et c'est maintenant qu'entre en scène les **variables** !

C’est un concept commun à beaucoup de langages de programmation qui permet de stocker une valeur et de lui associer un nom, afin de pouvoir l'identifier et la manipuler facilement.

On peut les voir comme des tiroirs, dans lesquels sont stockées des valeurs, auxquels on associe un nom.

Nous ne rentrons pas dans le détails de comment sont stockées ces valeurs dans l'ordinateur cas ce n'est pas le propos de ce cours mais vous pouvez retenir que c'est la mémoire vive de l’ordinateur, ce qu'on appel la RAM, qui se charge de stocker ces valeurs.

## Créer une variable

Pour déclarer une variable en C++, il faut trois choses:

- Il faut préciser d'abord ce qu'on appel son **type**, qui indique ce que la variable va stocker (un entier, un flottant, une chaîne de caractères, etc).
- Ensuite, un nom qui nous permer d'identifier la variable.
- Enfin, la valeur que l'on veux stocker dans notre variable. Ceci se fait en mettant le **littéral** entre accolades **{ }**.


```cpp
#include <iostream>
#include <string>

int main() {
    int nombre { 42 };
    char lettre { 'A' };
    float pi { 3.141592f };
    double tau { 6.283184 };
    std::string text { "Hello IMAC!" };

    return 0;
}
```

il est également possible (et recommandé) de faire la distinction entre **float** et **double** en ajoutant le suffis "f"à la fin du nombre:
```cpp
#include <iostream>

int main() {
    float pi { 3.141592f };
    double tau { 6.283184 };

    return 0;
}
```

Pour l'instant ça n'a pas beaucoup d'important mais essayer de le mettre car c'est un bonne pratique et a son important avec des concepts plus avancés en C++.

:::info Syntaxe héritée

Il existe également une syntaxe alternative, de la forme type nom = valeur;. Essayez, vous verrez que ça marche.

```cpp
#include <iostream>

int main() {
    int nombre = 42;
    std::cout << nombre << std::endl;

    return 0;
}
```

Cette syntaxe est héritée du C et est toujours valable en C++.
Dans ce cours je vous conseille fortement d'utiliser la syntaxe dite **moderne** utilisant les accolades **{}**.
De plus la syntaxe avec le symbole égale a d'autres subtilités et peut parfois induire en erreur, c'est pourquoi nous ne l'utiliserons pas dans la majorité des cas.

// TODO: expliqué conversion automatique

Ne soyez pas surpris si vous rencontrez la syntaxe utilisant le symbole **=**, elle est encore très utilisée et je l'ai moi même utilisé pendant très longtemps.

:::

## Les Types

Dans l'exemples précédant j'ai utilisés divers mots-clés qui font chacun références à un type de variable spécifique:

- Pour les **nombres entiers** on utilisent le mot-clé **int**, (abréviation de l’anglais **int**eger signifiant nombre entier). Grâce à ce type, on peut stocker des entiers négatifs ou positifs.
- Pour les **flottants**(les nombres à virgule), nous avons le mot-clé **"float"**, (abréviation de **Float**ing point numbers en anglais). A noté qu'il existe également le mot clé **"double"** pour stocker des nombres à virgules très grands quand c'est nécessaire.
- Pour les **caractères simples**, nous avons **char**.
- Pour les **chaîne de caractères** nous avons **std::string**.

:::caution **chaîne de caractères**

Pour les chaînes de caractères c'est légèrement différent, nous avons le type **std::string**. 
Ce type est particulier car il n’existe **pas nativement en C++**.
Pour ceux qui sont attentifs (**std::**) c'est un type issue de la **librairie standard** dont j'ai déjà parlé.
Ce sont des programmeurs experts qui ont codé ce type de manipuler aisément des chaînes de caractères. Afin de pouvoir manipuler des **std::string**, il faut donc inclure le bon fichier, ce que l’on fait grâce à la ligne **#include < string >**.

```cpp
#include <iostream>
#include <string>

int main() {
    std::string hello { "Hello IMAC!" };
    std::cout << hello << std::endl;

    return 0;
}
```

:::

## Valeurs par défaut

:::caution

Mais que ce pass t'il si je ne précise rien dans les accolades {} ?

:::

En c++ si rien n'est précisé la variable va contenir ce que l'on appel une **valeur par défaut**.

C'est par exemple une châine de caractère vide pour les std::string ou un 0 dans le cas d'un entier, je vous laisse essayer:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string default_string { };
    std::cout << default_string << std::endl;

    int default_int { };
    std::cout << default_int << std::endl;

    float default_float { };
    std::cout << default_float << std::endl;

    return 0;
}
```

On a donc le choix de précisé une valeur ou d'utiliser la valeur par défaut.
Pour commencer, nous écrirons toujours les valeurs explicitement pour éviter des mauvaises suprises...

Plus tard, avec un peu plus de pratique, vous aurez la liberté d'utiliser l’initialisation par défaut, en connaissance de cause.

## Quelques règles de nommage

Les noms des variables sont tout de même soumis à quelques règles de nommages. 

- Premièrement, de sont origine américaine, le C++ n’autorise que **les 26 lettres de l’alphabet** anglais (plus les **chiffres** et l’**underscore** _), on peut donc malheureusement dire adieu à nos jolies accents français (Les espaces et les signes de ponctuation sont aussi interdits (', ?, etc).)

- Il doit commencer par une lettre. **Il ne peut pas commencer par un chiffre**, c’est interdit. (l'usage du underscore au début, bien que possible, est conventionnelllement utilisé dans un cadre très spécifique et je vous déconseille donc de le faire)

- Enfin, on ne peut pas utiliser un **mot-clé** du langage comme nom de variable. Par exemple, il est **interdit** de déclarer une variable s’appelant **int**.

```cpp Quelques exemples
int main() {
    int variable42 { 42 };
    // Erreur : ne peut pas commencer par un chiffre.
    int 42variable { 42 };

    int my_variable { 0 };
    // Erreur : espace interdit.
    int my variable { 0 };

    float result { 2.71 };
    // Erreur : mot-clé réservé par C++.
    float return { 2.71 };

    return 0;
}
```

## Un jolie petit nom

Au dela des règles de nommage, **trouver un nom adapté** à un variable est un casse tête que même les programmeurs ayant de l’expérience sont confronté.

En effet, respecter les règles ne suffit pas à bien nommer une variable. Le nom d'une variable permet de l'**identifier**, de **comprendre ce qu'elle stock** et **comment on la manipule**.

:::note
Une fois le code compilé, l'ordinateur de fait aucune différence entre un nom ou un autre.
:::

le nom d'une variable est destiné à un lecteur **Humains** du code. On choisi un nom de variable pour qu'il soit le plus compréhensible possible pour nous et nos futur lecteurs, amis, collègues, etc

### Quelques mauvais exemples

- lpi: Un acronyme ? que signifie t'il ?
- value: Que stocke-t-elle ? Dans quel contexte ? Pourquoi existe-t-elle ?
- multiplication_of_two_by_sqrt_of_pi: claire mais un peu trop long
- dIsTanCe: cours et compréhensible mais les majuscules / minuscules le rendent illisible.
- qsqffqedfqzdjzqoid: surement un chat qui est passé sur mon clavier


Avec l'expérience et le temps vous arriverez à trouver plus facilement des noms clairs et simples.

Je vous demande dès maintenant de faire quelques efforts pour réfléchir aux noms des variables (cela peut vous sembler pas très important, jusqu'au jour où vous perdrez 1 semaines de travail à comprendre ce que tel ou tel programme et variable était censé faire).

## Un type suplémentaire

Vous aller surement le découvrir plus en pratiquant mais parfois on veux pouvoir stocker un nombre limité de possibilités.

Par exemple des points cardinaux (Nord, Sud, Est, ouest), les saisons (été, printemps, automne, hiver), les jours de la semaine, etc

Onb pourrait bien associé un entier à chauque possibilité (c'est un pratique très répendu en c)maisce n'est pas très propre car un entier peut stocker des valeurs négative ou alors être supérieur au nombre de possibilité listés ce qui n'a pas vraiment de sens.

C'est la qu'entre en jeu ce qu'on appel des **Enum** (de l'anglais **Enumeration**).

On le déclare en utilisant le préfix **"enum class"** puis le nom de notre énumération suivis enfin des valeurs possible que celle-ci va pouvoir prendre entre accollades.

```cpp Un exemple
enum class Season {
    Spring, 
    Summer, 
    Autumn,
    Winter,
};

int main() {
    Season current_season { Season::Spring };
    return 0;
}
```

:::note
On utilise ici aussi la syntaxe avec "::" pour signifier l'appartenance de la valeur à l'enum (de manière similaire à notre usage pour signifier que tel ou tel objet appartient à la libraire standard **std**).
:::

:::caution

Mais pourquoi le mot clé **class** ici me direz vous ?

Il est égallement possible de l'omettre mais cette syntaxe est un autre "type" d'enum hérité du **C** qui à de nombreux incovéniant:
- Il n'est pas possible de déclarer une variable ayant le même nom qu'une valeurs d'un enum.
- Il n'est pas possible de déclarer deux enum utilisant la même valeurs (mais dans un context différent)

```cpp
enum PrimaryColor {
    Red,
    Yellow,
    Blue
}

enum EyesColor {
    Brown,
    Hazel,
    Blue, // Erreur de compilation ici car la valeur Blue est aussi utilisée dans l'enum PrimaryColor
    Green,
    Grey,
    Amber
};

int main() {
    int red { 35 }; // Erreur de compilation car Red est une valeur utilisé dans l'enum PrimaryColor

    return 0;
}
```

On parle de "**Scoped enumerations**" avec "**enum class**" (autrement dit ayant une portée limité pour éviter les colisions de valeurs).
Pour faire simple on écrira systématique **"enum class"** en **C++ moderne** pour s'éviter pleins de problèmes.

:::

il y a bien d'autres subtilités autour des enums dont nous n'avons pas besoin de nous soucier pour le moment.

## Manipuler nos variables

Il est maintenant grand temps de pouvoir nous servir de nos variables.Il n'est pas seulement possible de les afficher (via std::cout) mais il est tout à fait possible de faire des opérations dessus:

```cpp
#include <iostream>

int main() {
    int result { 42 };
    std::cout << "Ma valeur vaut : " << result << std::endl;
    
    // je donne une nouvelle valeur à ma variable 
    result = 2 + (3 * 9);
    std::cout << "Ma valeur vaut maintenant : " << result << std::endl;
    
    // J'utilise la valeur de ma variable et la réaffecter à la même variable
    result = result + 7;
    std::cout << "Et maintenant " << result << std::endl;
    
    // Je peux me servir de ma variable pour en créer une nouvelle
    int other_value { result * 3 };

    // Je peux utiliser d'autres variables également
    result = other_value - 1;
    std::cout << "Ma valeur vaut enfin : " << result << std::endl;
    
    return 0;
}
```

Pour modifier une variable, on utilise l’**opérateur d’affectation =**, précédé du nom de la variable et suivi de la valeur à affecter : nom = valeur;.

C++ s'occupe en premier lieu de tout ce qui se trouve à droite du signe égal. On peut donc utiliser la valeur d'une variable pour faire un calcul avant de l'assigner à cette même variable.  


### quelques racourci

Dans le cas où l'on veux utiliser la variable elle même et l'assigne à elle même il est possible d'avoir une écriture plus courte pour les opérateurs usuels:

```cpp

#include <iostream>

int main() {
    int result { 42 };

    // équivalent à écrire "result = result + 3"
    result += 3;

    entier -= 1;
    entier *= 4;
    entier /= 2;
    return 0;
}
```

Ca va même plus loin et il existe un racourci suplémentaire lorsque l'on souhaite ajouter ou soustraire 1 à un nombre.
On parle d'**incrémentation** et de **décrémentation**. Il suffit de faire ainsi.

**a++** ou **++a** pour incrémenter de 1 la valeur de la variable.
**a--** ou **--a** pour décrémenter de 1 la valeur de la variable.

Les deux syntaxes sont quasiment équivalentes, il y a une petit différence dont je ne vais pas parler car elle ne nous intéresse pas à l’heure actuelle.

## Valiable constante

Il existe enfin un dernier mot clé dont j'ai envie de parler et il s'agit du mot clé "**const**".
Il va permettre, comme son nom l'indique, de rendre constant une variable et ainsi empêcher toute modification de cell-ci.
Et si l’on essaye de modifier une constante, le compilateur refuse clair et net.

```cpp
int main()
{
    float const gravity { 9.80665f };
    gravity = 9.0f; // Erreur de compilation

    return 0;
}
```

Pour l'instant cela ne va pas être très utile. Mais c'est une (très (très)) bonne pratique et permettre de protéger des variables et donner des contraintes fortes à notre code.
Je vais l'utiliser régulièrement dans des exemples et on découvrir ensemble plus tard où cela prendre vraiment toute son importance d'utiliser des const **dès que possible**.

:::info
Vous verrez souvent des codes qui inversent l’ordre de **const** et écrivent **const float variable {};**.
C'est tout à fait possible car le **const** respecte la règle suivante : 
il s’applique à ce qui est à **sa gauche immédiate**, sauf s’il n’y a rien, auquel cas il s’applique à ce qu’il y a à droite.
Je vais donc le placer à droite car c'est le fonctionnement voulu initiallement du **const**.
:::

# Entré / Sortie

Jusque là, nous avons régulièreement rencontré **std::cout** qui nous permet d'afficher des caractères avec la notion de **sortie standard**.

Il est également possible de faire l'inverse en manipulant ce qu'on appel **l’entrée standard**.

Grâce aux variables il va être possible de demander des informations à l’utilisateur et de stocker cette information afin d'en faire quelques chose. =

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

il faut le préfixer par std::, car lui aussi appartement à la bibliothèque standard. De plus, on utilise ici les chevrons dans le sens inverse pour signifier que l'on "prend" ce qui vient de notre entrée pour le stocker dans notre variable.

:::caution
Dans notre cas le C++ comprends que ce que l'on a entré est un nombre et le "converti" en entier(int) mais que se passe t'il si l'on entre des lettres ?

Dans ce cas de figure **la variable n'est pas modifiée**, mais pas seulement! Si std::cin n'arrive pas à convertir notre entrée, il passe dans un état invalide, mémorise tous les caractères invalides et toutes les utilisations suivantes de std::cin seront éronnées.

Nous verrons plus tard comment gérer ce cas de figure et détecter si une erreur survient.
:::

## En résumé

Nous venons de découvrir les bases des variables en C++. C'est la base de tout programme informatique, ce qui permet d'échanger et de manipuler des informations.

Il y a bien d'autre subtilités autour des variables en C++ mais vous avez vu l'essentiel et vous aurez tout le temps de découvrir le reste au fur et à mesure que vous progresserez.

Voilà un petit résumé de ce chapitre:

- C++ nous permet de manipuler différents **types** de données:
  - des caractères simples (**char**)
  - des chaînes de caractères (via **std::string**)
  - des nombres entiers (**int**)
  - des nombres réels (**float** ou **double**)
  - Des énumerations finies de possibilités (avec **enum class**)

- Il est possible d'utiliser toutes les opérations usuelles qui existent sur les nombres.

- Les **variables** nous permettent de **stocker** des valeurs et d'y **associé un nom** (en tenant compte de certaines règles de nommage).

- Il est **important** de choisir un nom de variable qui a dusens et le plus simple possible.

- Nous pouvons demander des informations à l’utilisateur grâce à **std::cin**.
---
title: TD2 - Structures de données
---

import OriginalMotionCanvasPlayer from '@site/src/components/OriginalMotionCanvasPlayer';

## Exercice 1 (Evaluation NPI)

Le but de cet exercice est d'écrire un programme qui permet d'évaluer une expression mathématique.

Nous allons nous intéresser à une notation particulière, la **notation polonaise inversée** (**NPI**) (ou **Reverse Polish Notation** (**RPN**) en anglais).

C'est une notation différente de la notation "classique" que l'on utilise en mathématiques (que l'on appelle la **notation infixe**).

En effet dans la notation infixe, les opérateurs sont placés entre les opérandes, et l'ordre des opérations est déterminé par les parenthèses et les règles de priorité des opérateurs.

Par exemple, l'expression `3 + 4 * 2` s'interprète comme `3 + (4 * 2) = 11`.
Ou encore l'expression `(3 + 4) * 2` s'interprète comme `(3 + 4) * 2 = 14`.

Cela rend compliqué l'évaluation d'une expression, car il faut gérer les parenthèses et les priorités des opérateurs.

---

La notation polonaise inversée est une notation mathématique qui permet d'exprimer des expressions arithmétiques sans utiliser de parenthèses ni de priorité d'opérateurs. Elle a été inventée par le mathématicien polonais **Jan Lukasiewicz** en 1924.

On dit que cette notion est une **notation postfixe** car l'opérateur est placé après les deux opérandes. Par exemple, l'expression `3 + 4` s'écrit `3 4 +` en **NPI**.

Ce qui permet ensuite d'interpréter l'expression de gauche à droite, en empilant les opérandes sur une pile, et en déclenchant l'opération lorsque l'on rencontre un opérateur.

Par exemple, l'expression `3 4 +` s'interprète comme suit :

- On empile `3`
- On empile `4`
- On rencontre `+`, on dépile `4` et `3`, on calcule `3 + 4 = 7`, et on empile le résultat `7`
- On a terminé, le résultat est `7`

On va donc pouvoir se servir d'une **pile**(`std::stack`) pour évaluer une expression en **NPI**.

:::info
Il faut cependant faire attention aux opérateurs **non commutatifs**, comme `-` ou `/`. `3 4 /` ne s'interprète pas comme `4 / 3`, mais comme `3 / 4`. Il faut donc écrire `3 4 /` pour évaluer `3 / 4`.

Dans l'algorithmique de l'évaluation, le premier élément défilé de la pile sera l'**opérande de droite** et le deuxième élément défilé sera l'**opérande de gauche**.
:::

Voilà un exemple plus complexe avec l'expression `1 * 5 + 4 + (8 + 6) / (9 - 2)` qui s'écrit en **NPI** `1 5 * 4 + 8 6 + 9 2 - / +` :

<OriginalMotionCanvasPlayer name="RPN" />

Le but de cet exercice est d'écrire un programme qui permet d'évaluer une expression en **NPI** sous forme d'une chaîne de caractères (les différents éléments de l'expression sont séparés par des espaces), et retourner le résultat de l'expression.
:::note
Par simplicité, on se limitera à des expressions contenant des **nombres** (flottants), et les opérateurs `+`, `-`, `*` et `/` (Dans une expression en NPI il y a plus de **parenthèses** (`(` et `)` car l'ordre des opérations est déterminé par l'ordre des opérateurs dans l'expression).
:::

Je vous donne plusieurs expressions et leur équivalent en NPI pour vous permettre de tester votre programme:

- `1 * 5 + 4 + (8 + 6) / (9 - 2)` =>  `1 5 * 4 + 8 6 + 9 2 - / +`  =  11
- `3 + 4` =>  `3 4 +`  =  7
- `2 + 12 * 5`  =>  `2 12 5 * +`  =  62
- `4 + 6 / ( 1 + 2 )`  =>  `4 6 1 2 + / +`  =  6


1. Écrire un programme qui permet de saisir une expression arithmétique en **notation polonaise inversée** (**NPI**) en tant que chaîne de caractère. On veut que les éléments de cette expression soient séparés par des espaces.

:::tip
Vous pouvez utiliser [`getline`](https://en.cppreference.com/w/cpp/string/basic_string/getline) pour récupérer d'un flux (comme `std::cin`) une chaîne de caractères comportant des espaces.
:::

2. Je vous donne le code suivant qui permet à l'aide d'une particularité des **streams** de séparer les éléments(mots) de la chaîne de caractères en utilisant les espaces comme séparateurs:

```cpp
#include <vector>
#include <string>
#include <sstream>
#include <iterator>

std::vector<std::string> split_string(std::string const& s)
{
    std::istringstream in(s); // transforme une chaîne en flux de caractères, cela simule un flux comme l'est std::cin
    // l’itérateur va lire chaque element de "in", comme un flux d'entrée, chaque élément est séparé par un espace
    return std::vector<std::string>(std::istream_iterator<std::string>(in), std::istream_iterator<std::string>()); 
}
```

Utilisez ce code pour séparer les éléments de l'expression en NPI entrée par l'utilisateur et créer un `std::vector<std::string>` qui représenterons les éléments (`tokens`) de l'expression en **NPI**.

3. Écrire une fonction qui prends une chaîne de caractères et permet de dire si celle-ci représente un nombre flottant ou non.
On utilisera le prototype suivant:
```cpp
bool is_floating(std::string const& s);
```

:::tip
Pour y arriver il faut parcourir la chaîne de caractères et de tester si chaque caractère est un chiffre ou un point `.` (pour gérer les nombres flottants). Si c'est le cas, on continue, sinon on retourne `false`.
Vous pouvez utiliser la fonction `std::isdigit` de la bibliothèque `<cctype>` qui permet de tester si un caractère représente un chiffre.
:::

Cela va être utile pour distinguer si un **token** (sous forme d'une chaîne de caractère) est un nombre(opérandes) ou un opérateur dans l'expression en NPI.

<details>
<summary>solution C++17</summary>

Il existe une fonction plus récente qui permet de faire cela, la fonction `std::from_chars` de la bibliothèque `<charconv>`. Elle permet de convertir une chaîne de caractères en nombre, et de retourner un pointeur sur le premier caractère non converti, ainsi qu'un code d'erreur si la conversion a échoué.
```cpp
#include <system_error>
#include <charconv>
#include <string>
bool is_floating(std::string const& s)
{
    float value;
    auto [p, ec] = std::from_chars(s.data(), s.data() + s.size(), value);
    return ec == std::errc() && p == s.data() + s.size();
}
```

Vous pouvez utiliser cette fonction si vous le souhaitez pour confirmer votre solution.
Mais il est important de faire soit même l'implémentation de la fonction `is_floating` pour apprendre à manipuler les chaînes de caractères.
</details>

4. Écrire une fonction qui prend en paramètre un vecteur de chaînes de caractères représentant les **tokens** de l'expression en **NPI**, et qui retourne le résultat de l'expression.

On utilisera le prototype suivant:
```cpp
float npi_evaluate(std::vector<std::string> const& tokens);
```

Utilisez une **pile** (`std::stack`) pour évaluer l'expression comme dans l'exemple précédent.

:::info Fonctionnement de l'algorithme
L'algorithme va parcourir les éléments de l'expression en **NPI** (tokens) de gauche à droite.

- Lorsque l'on rencontre un nombre, on l'empile sur la pile des valeurs.
- Lorsque l'on rencontre un **opérateur**, on dépile les deux derniers nombres, on effectue l'opération, et on empile le résultat.

Voilà un bout de code pour vous aider dans cette étape pour effectuer une opération:
```cpp
  // Je récupère l'élément en haut de la pile
  float rightOperand { stack.top() };
  // Je l'enlève de la stack (la méthode top ne fait que lire l’élément en dessus de la pile)
  stack.pop();
  float leftOperand { stack.top() };
  stack.pop();

  // Il faut ensuite en fonction de l'opérateur calculer le résultat pour le remettre dans la pile
  float result { /* TODO */};
  stack.push(result);
```

l'algorithme se termine lorsque l'on a parcouru tous les éléments de l'expression, et que la pile ne contient plus qu'un seul élément, qui est le résultat de l'expression.
:::

:::warning Expression invalide
Si il reste plus d'un élément dans la pile à la fin de l'algorithme, cela signifie que l'expression en **NPI** est invalide.
En effet, si l'expression est correcte, il ne doit rester qu'un seul élément dans la pile. Chaque opérateur binaire s'applique à deux nombres ainsi il doit normalement y avoir pour $n$ nombres dans l'expression $n-1$ opérateurs.
:::

:::tip
En utilisant la fonction `is_floating` de la question précédente, on peut déterminer si un élément de l'expression est un nombre ou un opérateur.
Il faut ensuite utiliser la fonction `std::stof` de la bibliothèque `<string>` pour convertir la chaîne de caractères en nombre flottant si c'est le cas.
:::

5. Enfin, utiliser les fonctions précédentes pour afficher le résultat d'une expression en **NPI** entrée par l'utilisateur.

Vous pouvez tester avec les expressions suivantes:
- `3 + 4` =>  `3 4 +`  =  7
- `2 + 12 + 5`  =>  `2 12 + 5 +`  =  19
- `3 + 4 / ( 11 + 5 )`  =>  `3 4 11 5 + / +`  =  3.25
- `4 + 5 * 2`  =>  `4 5 2 * +`  =  14

(une plus complexe avec l'opérateur **puissance** en plus pour l'exemple si vous voulez ajouter cette fonctionnalité plus tard)
- `3 + 4 ^ 2 / ( 1 - 5 ) ^ 6`  =>  `3 4 2 ^ 1 5 - 6 ^ / +`  =  3.00391

## Exercice 2 (Utiliser une structure et des énumérations)

Le but est de réécrire le programme précédent en utilisant un **enum** pour représenter les différents **opérateurs** ainsi qu'une structure pour représenter un **token** (un élément de l'expression) avec un champ pour le type (opérateur ou opérande) et des champs pour les valeurs (opérateur ou opérande).

```cpp
enum class Operator { ADD, SUB, MUL, DIV, OPEN_PAREN, CLOSE_PAREN};
enum class TokenType { OPERATOR, OPERAND };
struct Token {
  TokenType type;
  float value;
  Operator op;
};
```

:::info
Il existe des fonctionnalités plus avancés qui permettraient de faire ça plus proprement, et de se passer de l'enum `TokenType` dans la structure `Token` (les **variantes**). Vous pouvez vous renseigner ou me demander si vous voulez en savoir plus.
:::

1. Créer deux fonctions (surchargées) qui permettent de construire la structure `Token` à partir d'un nombre flottant ou de la valeur de l’énumération `Operator`.
```cpp
Token make_token(float value)
Token make_token(Operator op);
```

2. Créer une fonction `tokenize` qui prends en paramètre un vecteur de chaîne de caractères (représentant les "mots" d'une phrase, nos anciens tokens) et retourne un vecteur de `Token`.
```cpp
std::vector<Token> tokenize(std::vector<std::string> const& words);
```

3. Créer une nouvelle fonction `npi_evaluate` qui utilise cette fois un vecteur de `Token` au lieu de manipuler directement des chaînes de caractères. 
```cpp
float npi_evaluate(std::vector<Token> const& tokens);
```

## Exercice 3 (Conversion en NPI) (Optionnel)

Nous avons précédemment vu comment évaluer une expression en **NPI**. Mais comment faire pour convertir une expression en notation **infixe** (c'est-à-dire de manière "classique" avec des parenthèses) en une expression en NPI ?

Pour cela, il existe un algorithme appelé **Shunting-yard algorithm** (littéralement "algorithme de la cour de triage").

Son principe est d'utiliser également une **pile** pour stocker les opérateurs rencontrés, et de les dépiler lorsque l'on rencontre un opérateur de priorité supérieure. 

Voilà comment il fonctionne :

- On parcourt l'expression de gauche à droite
- **Si** on rencontre un nombre, on l'ajoute à la sortie
- **Si** on rencontre un opérateur:
  - **Si** on rencontre une parenthèse ouvrante (`(`), on la met sur la pile des opérateurs
  - **Si** on rencontre une parenthèse fermante (`)`), on dépile les opérateurs jusqu'à ce qu'on rencontre une parenthèse ouvrante, et on ajoute les opérateurs défilés à la sortie
  - **Tant qu**'il y a un opérateur sur la pile des opérateurs de priorité supérieure ou égale à l'opérateur courant, on dépile les opérateurs et on les ajoute à la sortie. **Puis** on ajoute l'opérateur courant à la pile des opérateurs.

- Enfin, on dépile les opérateurs restants et on les ajoute à la sortie.

Voici un exemple d'application de l'algorithme  avec l'expression `3 + 4 ^ 2 / ( 1 - 5 ) ^ 6 ` :

| Entrée | Sortie | Pile des opérateurs | commentaire |
| --- | --- | --- | --- |
| 3 | 3 | | on ajoute 3 à la sortie |
| + | 3 | + | on ajoute + à la pile des opérateurs |
| 4 | 3 4 | + | on ajoute 4 à la sortie |
| ^ | 3 4 | + ^ | on ajoute ^ à la pile des opérateurs |
| 2 | 3 4 2 | + ^ | on ajoute 2 à la sortie |
| / | 3 4 2 ^ | + | on dépile ^ et on l'ajoute à la sortie car / a une priorité inférieure à ^ |
| ( | 3 4 2 ^ | + / ( | on ajoute ( à la pile des opérateurs |
| 1 | 3 4 2 ^ 1 | + / ( | on ajoute 1 à la sortie |
| - | 3 4 2 ^ 1 | + / ( - | on ajoute - à la pile des opérateurs |
| 5 | 3 4 2 ^ 1 5 | + / ( - | on ajoute 5 à la sortie |
| ) | 3 4 2 ^ 1 5 - | + / | on dépile les opérateurs jusqu'à ( et on les ajoute à la sortie |
| ^ | 3 4 2 ^ 1 5 - | + / ^ | on ajoute ^ à la pile des opérateurs |
| 6 | 3 4 2 ^ 1 5 - 6 | + / ^ | on ajoute 6 à la sortie |
|   | 3 4 2 ^ 1 5 - 6 ^ | + / | on dépile le reste des opérateurs et on les ajoute à la sortie |

**Résultat final** : `3 4 2 ^ 1 5 - 6 ^ / +` 

:::info
La suite de l'exercice est présenté en utilisant les fonctions et structures de l'exercice précédent. Si vous n'avez pas fait l'exercice 2 vous pouvez tout aussi bien travailler avec un vecteur de chaînes de caractères sans utiliser la structure `Token`.
:::

1. Écrire une fonction `operator_precedence` qui prends en paramètre un `Operator` et retour sous forme d'un **nombre entier positif** la priorité de cet opérateur.
```cpp
size_t operator_precedence(Operator const op);
```

2. Écrire une fonction qui prend en paramètre une chaîne de caractères représentant une expression en **notation infixe**, qui retourne un tableau de `Token` représentant l'expression en **NPI**.

```cpp
std::vector<Token> infix_to_npi_tokens(std::string const& expression);
```

:::tip
On utilisera la même structure `Token` que dans l'exercice précédent et les fonctions `tokenize` et `split_string` pour récupérer dans un premier temps une représentation de l'expression en notation infixe sous forme d'une liste de `Token` (dont les parenthèses ici).

C'est ici que parenthèses en tant qu'opérateur vont être utile mais elles ne devrons pas se retrouver dans la liste de `Token` en NPI.
:::


Maintenant que nous savons évaluer une expression en NPI et que nous savons convertir une expression en notation infixe en NPI, nous pouvons réaliser une **calculatrice**.

3. Essayez de réaliser un programme qui permet de **lire** une expression en notation **infixe**, de la convertir en **NPI**, de l'**évaluer** et d'**afficher** le résultat.

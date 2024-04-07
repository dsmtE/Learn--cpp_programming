---
title: TD7 - Encodage et compression
---

## Exercice 1 (Run-length encoding)

1. Écrire une fonction qui prend en paramètre une chaîne de caractères composée uniquement de caractères alphabétiques et qui retourne une chaîne de caractères encodée en utilisant le [**run-length encoding**](/Lessons/S2/EncodingAndCompression#codage-par-plages-run-length-encoding).

    Par exemple, si la chaîne de caractères en entrée est `AAAABBBCCDAA`, la chaîne de caractères encodée est `4A3B2C1D2A`.

2. Écrire une fonction qui prend en paramètre une chaîne de caractères encodée en utilisant le **run-length encoding** et qui retourne la chaîne de caractères décodée.

3. Améliorer la fonction précédente pour qu'elle puisse décoder une chaîne de caractères même si cette chaîne de caractères contient des nombres à plusieurs chiffres.

    Par exemple, si la chaîne de caractères en entrée est `12A3B2C1D2A`, la chaîne de caractères décodée est `AAAAAAAAAAAABBBCCDAA`.

4. Écrire une fonction qui permet d'encoder en utilisant un caractère spécial (**caractère de contrôle**) suivit d'un **nombre** pour indiquer le nombre de fois qu'un caractère doit être répété.

    Par exemple, en se donnant le caractère de contrôle `*`, si la chaîne de caractères en entrée est `AAAABBBCCDAA`, la chaîne de caractères encodée est `*4A*3B*2CD*2A`.

5. Améliorer la fonction précédente pour rendre le caractère de contrôle paramétrable et retourner la chaîne de caractères originale si la longueur de la chaîne de caractères encodée est plus grande que la chaîne de caractères originale.

6. Écrire une fonction qui permet de décoder une chaîne de caractères encodée en utilisant un caractère de contrôle.

## Exercice 2 (Huffman encoding)

1. Écrire une fonction `frequency` qui prend en paramètre une chaîne de caractères et retourne un `std::unordered_map<char, size_t>` qui associe à chaque caractère le nombre d'occurrences de ce caractère dans la chaîne de caractères.

Donnons nous la structure suivante pour la suite de l'exercice:

```cpp
struct Node {
    char character;
    size_t frequency;
    Node* left { nullptr };
    Node* right { nullptr };
};
```

:::warning
Ce warning s'adresse à ceux qui ont essayé d'utiliser des **smart pointers** (`std::unique_ptr`) sur le TD précédent sur les arbres binaires et qui souhaitent continuer à utiliser des smart pointers pour cet exercice.
Ici, on ne veut pas utiliser de `std::unique_ptr` pour simplifier l'écriture des fonctions. En effet, l'utilisation de `std::unique_ptr` impose de passer par des `std::move` (notion que l'on a pas encore vu) pour transférer la propriété d'un pointeur intelligent. Cela rendrait l'écriture des fonctions plus complexe et cela nous forcerait même à créer notre propre file de priorité (`priority_queue`) pour pouvoir les utiliser dans une file de priorité. Ce n'est pas l'objet de cet exercice on se limitera donc à des pointeurs classiques.
:::

2. Surcharger l'opérateur `<` pour la structure `Node` de telle sorte que l'opérateur `<` retourne `true` si la fréquence du nœud de gauche est inférieure à la fréquence du nœud de droite.
3. Écrire une fonction `createNode` qui prend en paramètre un caractère et une fréquence et qui retourne un `Node*`.
4. Écrire une fonction `createSymbolNode` qui prend en paramètre (par valeur) deux `Node*` et qui retourne un `Node*` dont le caractère est `0` et la fréquence est la somme des fréquences des deux nœuds passés en paramètre et les deux nœuds passés en paramètre sont les fils du nœud retourné.

    > Cette fonction va être utilisée pour créer un nœud qui représente un "symbole" (un ensemble de caractères) et qui va être utilisé pour construire l'arbre de Huffman.

5. Écrire une fonction `build_huffman_tree` qui prend en paramètre (**référence constante**) un `std::unordered_map<char, size_t>` et qui retourne un `Node*` qui représente l'arbre de Huffman.

    > Cet arbre va être construit en utilisant une `std::priority_queue` qui va permettre de trier les nœuds (**symboles**) en fonction de leur fréquence.
    > Pour construire l'arbre, on va retirer les deux nœuds de plus petite fréquence de la file de priorité, créer un nouveau nœud dont la fréquence est la somme des fréquences des deux nœuds retirés et dont les fils sont les deux nœuds retirés, et ajouter ce nouveau nœud à la file de priorité.


6. Écrire une fonction `build_encoding_table` qui prend en paramètre le sommet de l'arbre de Huffman et qui retourne un `std::unordered_map<char, std::string>` qui associe à chaque caractère le code de Huffman correspondant.

> Pour construire le code de Huffman, on va parcourir l'arbre de Huffman en ajoutant un `0` à une chaîne de caractère à chaque fois qu'on descend à gauche et un `1` à chaque fois qu'on descend à droite. On va s'arrêter lorsqu'on arrive à une feuille et on va associer la chaîne de caractère obtenue à la feuille.

Il faudra utiliser une fonction intermédiaire `fill_encoding_table` qui prend en paramètre un nœud, la chaîne de caractères associé avec représentation binaire du nœud et qui remplit ta table (`std::unordered_map<char, std::string>`) passé par référence.
C'est cette fonction qui va être appelée récursivement pour parcourir l'arbre de Huffman et remplir la table.

Voila les signatures des fonctions:

```cpp
void fill_encoding_table(Node const* node, std::unordered_map<char, std::string>& table, std::string str);
std::unordered_map<char, std::string> build_encoding_table(Node const* root);
```

7. Écrire une fonction `encode` qui prend en paramètre une chaîne de caractères et un `std::unordered_map<char, std::string>` et qui retourne une chaîne de caractères représentant la chaîne de caractères encodée en utilisant le code de Huffman.

```cpp
std::string encode(std::string str, std::unordered_map<char, std::string> const& table);
```

8. Écrire une fonction `decode` qui prend en paramètre une chaîne de caractères encodée en utilisant le code de Huffman et le sommet de l'arbre de Huffman et qui retourne une chaîne de caractères représentant la chaîne de caractères décodée.

```cpp
std::string decode(std::string const& str, Node const* huffman_tree_root);
```

9. Écrire une fonction `delete_huffman_tree` qui prend en paramètre le sommet de l'arbre de Huffman et qui libère la mémoire allouée pour l'arbre.

**Culture - Aller plus loin:**

Dans la réalité, on ne souhaite pas encoder le caractères `a` par une chaîne de caractère (par exemple `110`). Sinon on se retrouverait avec une chaîne de caractères plus grande que la chaîne de caractères originale. On va plutôt utiliser des **bits**. Par exemple, on va encoder le caractère `a` par les bits `110` (soit le nombre `6` en décimal).

Pour faire cela il faut manipuler des **bits**. En C++, on peut manipuler des bits en utilisant les opérateurs `<<` (décalage à gauche), `>>` (décalage à droite), `|` (ou binaire), `&` (et binaire), `^` (ou exclusif binaire), `~` (non binaire).

Pour ensuite pouvoir écrire en binaire dans un fichier on va utiliser des **octets**. Un octet est un ensemble de 8 bits. En C++, on peut manipuler des octets en utilisant le type `unsigned char` (ou `uint8_t`).

Ensuite, au lieu de retourner une chaîne de caractères, on va retourner un `std::vector<uint8_t>` qui contient les octets composés des bits de chaque caractère mis bout à bout. C'est un jeu d'operation binaire et de décalage qui permet de mettre bout à bout les octets pour obtenir la représentation binaire de la chaîne de caractères encodée.

On obtient ensuite un `std::vector<uint8_t>` qui contient la représentation binaire de la chaîne de caractères encodée. On peut ensuite écrire cet `std::vector<uint8_t>` dans un fichier.

---

Si l'on souhaite faire un programme qui compresse de bout en bout une chaîne de caractères dans un fichier, il faut pouvoir écrire dans un fichier la représentation binaire de la chaîne de caractères encodée. Pour cela, on peut utiliser la classe `std::ofstream` qui permet d'écrire dans un fichier. Il suffira d'écrire octet par octet dans le fichier.

Afin, de pouvoir décoder ce fichier, il faut pouvoir lire les octets du fichier et les transformer en une représentation binaire. Cela se fait en utilisant la classe `std::ifstream` qui permet de lire dans un fichier. Il suffira de lire octet par octet et de transformer chaque octet en une représentation binaire.

Enfin, pour décoder totalement et retrouver la chaîne originale, il faut non seulement avoir la représentation binaire de la chaîne de caractères encodée, mais également avoir l'arbre de Huffman pour pouvoir décoder la représentation binaire en caractères et ainsi retrouver la chaîne de caractères originale. Il faudra donc ajouter à ce fichier la représentation de l'arbre de Huffman pour pouvoir décoder totalement la chaîne de caractères encodée.

Je ne vous demande pas de faire cela, mais c'est pour vous donner une idée de ce à quoi cela peut servir en pratique et comment cela peut être utilisé.

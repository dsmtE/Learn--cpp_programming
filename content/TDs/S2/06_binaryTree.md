---
title: TD6 - Arbres binaires
---

# Arbres binaires de recherche

Dans ce TD, nous allons voir comment implémenter un arbre binaire de recherche.

## Exercice 1 (Implémentation)

Donnons nous pour commencer la structure suivante pour représenter un nœud d'un arbre binaire :

```cpp
struct Node {
    int value;
    Node* left { nullptr };
    Node* right { nullptr };
};
```

:::tip
Je vous conseil de créer un fichier `node.hpp` et d'y mettre la structure `Node` ainsi que le prototype des fonctions et méthodes que vous allez écrire.

Avec une organisation de fichier comme celle-ci:
```
src/
    L main.cpp
    L node.hpp
    L node.cpp
CMakeLists.txt
```
:::

<details>
<summary>Affichage dans la console</summary>

Je vous fourni une fonction qui permet d'afficher une représentation ASCII dans la console d'un arbre binaire:
```cpp
void pretty_print_left_right(Node const& node, std::string const& prefix, bool is_left) {
    if (node.right) {
        pretty_print_left_right(*node.right, prefix + (is_left ? "|   " : "    "), false);
    }
    std::cout << prefix << (is_left ? "+-- " : "+-- ") << node.value << std::endl;
    if (node.left) {
        pretty_print_left_right(*node.left, prefix + (is_left ? "    " : "|   "), true);
    }
}

void pretty_print_left_right(Node const& node) {
    pretty_print_left_right(node, "", true);
}
```

</details>


1. Écrire une **fonction** `create_node` qui prend en paramètre une valeur et permet de créer (sur la heap avec **new**) un nœud contenant cette valeur et dont les fils sont pointeur nuls.
```cpp
Node* create_node(int value);
```

2. Écrire une **méthode** `is_leaf` sur la structure `Node` qui retourne vrai si le nœud est une feuille (c'est à dire si ses deux fils sont nuls).
```cpp
bool is_leaf() const;
```

3. Écrire une **méthode** `insert` à la structure `Node` qui prend en paramètre une valeur et qui insère un nouveau nœud contenant cette valeur dans l'arbre binaire. On insérera le nœud à gauche si la valeur est inférieure à la valeur du nœud courant et à droite sinon.
```cpp
void Node::insert(int value);
```
:::tip
On utilisera la fonction `create_node` pour créer le nouveau nœud.
:::

4. Écrire une méthode `height` qui retourne la hauteur de l'arbre binaire (c'est à dire la longueur du plus long chemin entre la racine et une feuille) (On va se donner la convention qu'un arbre binaire contenant un seul nœud a une hauteur de 1)
```cpp
int Node::height() const;
```

:::tip
On peut utiliser de la récursivité pour calculer la hauteur de l'arbre.
:::


5.  Écrire une fonction `delete_children` sur la structure `Node` qui permet de supprimer les fils d'un nœud (et de libérer la mémoire).
```cpp
void Node::delete_children();
```

:::tip
On peut utiliser de la récursivité pour supprimer les nœuds de l'arbre.
:::

6. Écrire une **méthode** `display_infix` qui affiche les valeurs des nœuds parcourus dans l'ordre [**infixe**](/Lessons/S2/BinaryTree/#parcours-en-profondeur).
```cpp
void Node::display_infix() const;
```

7. Écrire une **méthode** `prefix` qui retourne un vecteur contenant des pointeurs vers les nœuds de l'arbre binaire parcourus en [**prefixe**](/Lessons/S2/BinaryTree/#parcours-en-profondeur).
```cpp
std::vector<Node const*> Node::prefix() const;
```

:::tip
Pour le faire par **récursivité** on pourra utiliser la méthode `insert` du `std::vector` qui permet d’insérer plusieurs éléments à l'aide d’itérateurs.
```cpp
auto left_nodes {left->prefix()};
nodes.insert(nodes.end(), left_nodes.begin(), left_nodes.end());
```
Cela va permettre de concaténer dans un seul vecteur les nœuds des sous arbres gauche et droit.
:::

8. (**BONUS**) De même, écrire une autre méthode `postfix` qui retournent les nœuds parcourus dans l'ordre [**postfixe**](/Lessons/S2/BinaryTree/#parcours-en-profondeur).

<details>
<summary>BONUS: Itératif</summary>

Si tu le souhaites, tu peux essayer de le faire de manière itérative (sans récursivité).

Pour faire cela tu peux utiliser une pile (`std::stack`) pour stocker les nœuds à parcourir. L'idée est de parcourir l'arbre en commençant par la racine (premier élément de la pile). Puis, de dépiler un nœud de la pile, s'il a un fils droit, on le met dans la pile et on recommence. Sinon, s'il a un fils gauche, on le met dans la pile et on recommence. Enfin s'il n'a pas de fils, on le traite (on peut l'ajouter à un vecteur par exemple). Il faut aussi faire attention à conserver un pointeur vers le nœud précédent afin de savoir si on remonte ou si on descend dans l'arbre.

Exemple:
Si on a l'arbre suivant:
```
    5
   / \
  3   7
 / \ / \
 ```
on va commencer par mettre le nœud 5 dans la pile. (le nœud précédent est nul)
On va lire le nœud 5 et se rendre compte qu'il a un fils gauche, on le met dans la pile et on recommence (le nœud précédent est 5).
On va lire le nœud 3 et se rendre compte qu'il n'a pas de fils, on le traite et on le retire de la pile. (le nœud précédent est 3).
On va lire de nouveau le nœud 5 mais comme on a déjà traité le fils gauche (on le sait car le nœud précédent est le nœud 3), on va mettre le fils droit dans la pile et recommencer. (le nœud précédent devient 5).
On va lire le nœud 7 et se rendre compte qu'il n'a pas de fils, on le traite et on le retire de la pile. (le nœud précédent est 7).
On va lire de nouveau le nœud 5 mais comme on a déjà traité le fils droit (on le sait car le nœud précédent est le nœud 7), on va enfin traiter le nœud 5 et le retirer de la pile.

Ce qui nous donne l'ordre postfixe: 3, 7, 5.

C'est un peu plus compliqué que la version récursive mais c'est un bon exercice pour comprendre le fonctionnement des arbres binaires et des mécanismes de pile.

Voilà un bout de code pour vous aider à démarrer:
```cpp

std::vector<Node const*> Node::postfix() const {
    std::vector<Node const*> nodes {};
    std::stack<Node const*> to_process {};
    Node const* previous {nullptr};
    to_process.push(this);

    while (!to_process.empty()) {
        Node const* current { to_process.top() };

        // Si on est en train de descendre dans l'arbre
        if (previous == nullptr || (previous->left == current || previous->right == current)) {
            if(/* ? */) {
                to_process.push(current->left);
            }
            else if(/* ? */) {
                // todo
            } else {
                // on traite le nœud (ajouter au vecteur) et on le retire de la pile
                // todo
            }

        // Si l'on remonte dans l'arbre en venant de la gauche
        }else if (/* ? */) {
            if(/* ? */) {
                // todo
            } else {
                // todo
            }

        // Si l'on remonte dans l'arbre en venant de la droite
        } else if (/* ? */) {
            // todo
        }

        previous = current;

    }
    return nodes;
}
```
</details>

9. Écrire une **fonction** `most_left` qui retourne une référence vers le pointeur du nœud le plus à gauche de l'arbre binaire.
```cpp
    Node*& most_left(Node*& node);
```

:warning: Pourquoi retourner une **référence** vers un **pointeur**(`*&`) ? Car on va ensuite utiliser cette fonction dans la fonction `removeNode` pour supprimer une valeur (donc un nœud) de l'arbre binaire. Mais dans certains cas on va devoir modifier le pointeur du nœud parent pour qu'il ne pointe plus vers le nœud que l'on veut supprimer. la référence va permettre de modifier directement le pointeur du nœud parent.

10. Écrire une **fonction** `remove` qui permet de supprimer une valeur de l'arbre binaire dont le nœud racine est passé en paramètre. La fonction retourne vrai si la valeur a été supprimée et faux sinon.
```cpp
bool remove(Node*& node, int value);
```

Prendre en paramètre une **référence vers un pointeur** permet de modifier directement le pointeur du nœud parent si le nœud est supprimé. C'est important dans le cas par exemple où l'on supprime une feuille de l'arbre il faut pouvoir réassigner le pointeur du nœud parent vers un pointeur nul pour éviter d'avoir un pointeur qui pointe vers un nœud supprimé.

```cpp
if (value == node->value && node->is_leaf()) {
        // On supprime le nœud courant
        delete node;
        // Comme on a une référence sur le pointeur du nœud courant, on le met à jour avec nullptr
        // Ainsi le parent du nœud courant aura un pointeur vers nullptr
        node = nullptr;
        // on retourne true car la suppression a été effectuée
        return true;
    }
```

:::tip
Il existe trois cas de figure lorsqu'on supprime un nœud d'un arbre binaire:
- Le nœud n'a pas de fils: on peut le supprimer directement (exemple précédent).
- Le nœud a un seul fils: on peut le supprimer et le remplacer par son fils.
- Le nœud a deux fils:
    Il faut remplacer la valeur du nœud à supprimer par une valeur pour préserver l'ordre de l'arbre. Pour cela, on utilisera la fonction `most_left` qui permettent de trouver le nœud le plus à gauche d'un arbre binaire (autrement dit, le nœud de valeur minimale).
    Il faut ensuite remplacer la valeur du nœud à supprimer par la valeur du nœud trouvé précédemment et supprimer ce dit nœud pour ne pas avoir de doublon. (cela revient à intervertir les deux nœuds sans avoir à modifier les pointeurs puis à supprimer le nœud dont la valeur a été copiée).

Ce troisième cas est le plus compliqué à gérer. N'hésitez pas à demander de l'aide et prendre le temps de faire des schémas pour comprendre le fonctionnement.
Il faudra utiliser la fonction `most_left` pour trouver le nœud le plus à gauche de l'arbre binaire.
:::

:::warning
Il faut faire attention à bien libérer la mémoire des nœuds supprimés, avec `delete`.
:::

11. Écrire une **fonction** `delete_tree` qui permet de supprimer un arbre binaire (et de libérer la mémoire).
```cpp
void delete_tree(Node* node);
```

12. (**BONUS**) Écrire des méthodes `min` et `max` qui retournent respectivement les valeurs minimales et maximales de l'arbre binaire.

## Exercice 2 (Utilisation)

Testons maintenant notre implémentation en créant un programme qui permet de créer un arbre binaire et d'effectuer différentes opérations dessus.

1. Créer un arbre binaire et insérer les valeurs suivantes: 5, 3, 7, 2, 4, 6, 8, 1, 9, 0.

2. Afficher les valeurs des nœuds de l'arbre binaire dans l'ordre **infixe**.

3. (**BONUS**) Afficher la valeur minimale et maximale de l'arbre.

4. Afficher la somme des valeurs des nœuds de l'arbre binaire en utilisant la fonction `prefix` qui retourne un vecteur contenant les nœuds parcourus dans l'ordre **prefixe**.

5. Afficher la hauteur de l'arbre binaire.

## Aller plus loin
### Exercice 3 (Pointeurs intelligents) (Bonus)

Nous allons maintenant améliorer et simplifier notre code en utilisant des [**pointeurs intelligents**](/Lessons/S1/MemoryAllocation). En effet la partie la plus compliquée de notre code est la gestion de la mémoire et des pointeurs. Les pointeurs intelligents vont nous permettre de nous débarrasser de cette gestion et de nous passer de la fonction `delete_tree` par exemple.

1.  Copier-coller votre fichier pour garder une version de votre code précédent et créer un nouveau fichier `smartNode.hpp` dans lequel vous allez réécrire votre code en utilisant des **pointeurs intelligents**.
Renommer la structure `Node` en `SmartNode` pour pouvoir faire la différence entre les deux versions et remplacer les pointeurs "bruts" par des **pointeurs intelligents** `std::unique_ptr` dans la structure `SmartNode`.

Je vous donne le contenu du fichier `smartNode.hpp`:

```cpp
#pragma once

#include <vector>

struct SmartNode {
    int value;
    std::unique_ptr<SmartNode> left { nullptr };
    std::unique_ptr<SmartNode> right { nullptr };

    bool is_leaf() const;
    void insert(int value);

    size_t height() const;

    int min() const;
    int max() const;
};

std::unique_ptr<SmartNode> create_smart_node(int value);
std::unique_ptr<SmartNode>& SmartNode::most_left(std::unique_ptr<SmartNode>& node);
bool remove(std::unique_ptr<SmartNode>& node, int value);
```

1. Modifier la fonction `is_leaf` pour utiliser le fait qu'un pointeur intelligent peut être converti implicitement en [booléen](https://en.cppreference.com/w/cpp/memory/unique_ptr/operator_bool) (il vaut `false` si le pointeur est nul et `true` sinon).
```cpp
std::unique_ptr<float> ptr {nullptr};
if (ptr) {
    // ptr est différent de nullptr
} else {
    // ptr est égal à nullptr
}
```

2. Renommer et modifier la fonction `create_node` (en `create_smart_node`) pour qu'elle retourne un pointeur intelligent `std::unique_ptr` au lieu d'un pointeur brut (on utilisera la fonction `std::make_unique` pour créer le pointeur).

Elle s'utilise de la manière suivante:
```cpp
std::unique_ptr<float> ptr {std::make_unique<float>(3.14f)};
```

3. Modifier la méthode `most_left` pour qu'elle retourne une référence vers un pointeur intelligent au lieu d'un pointeur brut.

4. Modifier la méthode `insert` pour qu'elle utilise des pointeurs intelligents.

5. Modifier la méthode `remove` pour qu'elle utilise des pointeurs intelligents.

:::tip
C'est un peu plus compliqué car il faut utiliser des références vers des pointeurs intelligents pour pouvoir les modifier. On peut utiliser les méthodes `reset` et `release` (allez lire la documentation pour voir la différence entre les deux !) pour gérer la mémoire et les pointeurs intelligents. Ou utiliser un concept plus avancé `std::move` pour transférer la propriété d'un pointeur intelligent d'un objet à un autre.
Si vous voulez essayer, n'hésitez pas à demander de l'aide.
:::

### Exercice 4 (Encapsulation) (Bonus)

Le but est de créer une structure `BinaryTree` qui encapsule la structure `Node` ou `SmartNode` et qui permet d'utiliser les même méthodes sans connaître la structure interne de l'arbre binaire. Cela permet aussi de gérer le cas où l'arbre binaire est vide (c'est à dire que la racine est un pointeur nul).

C'est moins pertinent dans notre cas pour ce TD mais lorsque vous découvrirez la notion de **visibilité** (public / privé) vous comprendrez l'intérêt de cette encapsulation.

Voilà le contenu du fichier `binaryTree.hpp`:

```cpp
#pragma once

#include <memory>

#include "smartNode.hpp"

struct BinaryTree {
    std::unique_ptr<SmartNode> root { nullptr };

    void insert(int value);
    bool remove(int value);
    void clear();
    bool contains(int value) const;
    size_t height() const;
};

bool contains(std::unique_ptr<SmartNode>& node, int value);
```

1.  Créer un fichier `binaryTree.cpp` et implémenter les méthodes de la structure `BinaryTree`.

:::info
C'est grâce à cette encapsulation que l'on peut changer la structure interne de l'arbre binaire sans avoir à modifier le code qui l'utilise. Nous pourrions par exemple changer la structure `SmartNode` par une structure `Node` sans avoir à modifier le code qui utilise la structure `BinaryTree`.

Ici avec l'utilisation des pointeurs intelligents, la mémoire va être gérée automatiquement à la destruction de l'objet `BinaryTree` et il n'y a plus besoin de la fonction `delete_tree`. C'est un grand avantage des pointeurs intelligents et permet d'éviter les erreurs de fuites mémoires.
:::
"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[96],{1937:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=r(5893),s=r(1151);const t={title:"TD6 - Arbres binaires"},l="Arbres binaires de recherche",o={id:"TDs/S2/binaryTree",title:"TD6 - Arbres binaires",description:"Dans ce TD, nous allons voir comment impl\xe9menter un arbre binaire de recherche.",source:"@site/content/TDs/S2/06_binaryTree.md",sourceDirName:"TDs/S2",slug:"/TDs/S2/binaryTree",permalink:"/Learn--cpp_programming/TDs/S2/binaryTree",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"TD6 - Arbres binaires"},sidebar:"TDs",previous:{title:"TD5 - Hachage et tableaux associatifs",permalink:"/Learn--cpp_programming/TDs/S2/hashAndAssociativeTables"},next:{title:"TD7 - Encodage et compression",permalink:"/Learn--cpp_programming/TDs/S2/encodingAndCompression"}},d={},c=[{value:"Exercice 1 (Impl\xe9mentation)",id:"exercice-1-impl\xe9mentation",level:2},{value:"Exercice 2 (Pointeurs intelligents)",id:"exercice-2-pointeurs-intelligents",level:2},{value:"Exercice 3 (Utilisation)",id:"exercice-3-utilisation",level:2},{value:"Aller plus loin",id:"aller-plus-loin",level:2},{value:"Exercice 4 (Encapsulation)",id:"exercice-4-encapsulation",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"arbres-binaires-de-recherche",children:"Arbres binaires de recherche"}),"\n",(0,i.jsx)(n.p,{children:"Dans ce TD, nous allons voir comment impl\xe9menter un arbre binaire de recherche."}),"\n",(0,i.jsx)(n.h2,{id:"exercice-1-impl\xe9mentation",children:"Exercice 1 (Impl\xe9mentation)"}),"\n",(0,i.jsx)(n.p,{children:"Donnons nous pour commencer la structure suivante pour repr\xe9senter un n\u0153ud d'un arbre binaire."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"struct Node {\n    int value;\n    Node* left { nullptr };\n    Node* right { nullptr };\n};\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Je vous conseil de cr\xe9er un fichier ",(0,i.jsx)(n.code,{children:"node.hpp"})," et d'y mettre la structure ",(0,i.jsx)(n.code,{children:"Node"})," ainsi que le prototype des fonctions et m\xe9thodes que vous allez \xe9crire."]}),(0,i.jsx)(n.p,{children:"Avec une organisation de fichier comme celle-ci:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"src/\n    L main.cpp\n    L node.hpp\n    L node.cpp\nCmakeLists.txt\n"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Affichage dans la console"}),(0,i.jsx)(n.p,{children:"Je vous fourni une fonction qui permet d'afficher une repr\xe9sentation ASCII dans la console d'un arbre binaire:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'void pretty_print_left_right(Node const& node, std::string const& prefix, bool is_left) {\n    if (node.right) {\n        pretty_print_left_right(*node.right, prefix + (is_left ? "|   " : "    "), false);\n    }\n    std::cout << prefix << (is_left ? "+-- " : "+-- ") << node.value << std::endl;\n    if (node.left) {\n        pretty_print_left_right(*node.left, prefix + (is_left ? "    " : "|   "), true);\n    }\n}\n\nvoid pretty_print_left_right(Node const& node) {\n    pretty_print_left_right(node, "", true);\n}\n'})})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une ",(0,i.jsx)(n.strong,{children:"fonction"})," ",(0,i.jsx)(n.code,{children:"createNode"})," qui prend en param\xe8tre une valeur et permet de cr\xe9er (sur la heap avec ",(0,i.jsx)(n.strong,{children:"new"}),") un n\u0153ud contenant cette valeur et dont les fils sont pointeur nuls."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"Node* createNode(int value);\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une ",(0,i.jsx)(n.strong,{children:"m\xe9thode"})," ",(0,i.jsx)(n.code,{children:"isLeaf"})," sur la structure ",(0,i.jsx)(n.code,{children:"Node"})," qui retourne vrai si le n\u0153ud est une feuille (c'est \xe0 dire si ses deux fils sont nuls)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"bool isLeaf() const;\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une ",(0,i.jsx)(n.strong,{children:"m\xe9thode"})," ",(0,i.jsx)(n.code,{children:"insert"})," \xe0 la structure ",(0,i.jsx)(n.code,{children:"BinaryTree"})," qui prend en param\xe8tre une valeur et qui ins\xe8re un nouveau n\u0153ud contenant cette valeur dans l'arbre binaire. On ins\xe9rera le n\u0153ud \xe0 gauche si la valeur est inf\xe9rieure \xe0 la valeur du n\u0153ud courant et \xe0 droite sinon."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void Node::insert(int value);\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["On utilisera la fonction ",(0,i.jsx)(n.code,{children:"createNode"})," pour cr\xe9er le nouveau n\u0153ud."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une m\xe9thode ",(0,i.jsx)(n.code,{children:"height"})," qui retourne la hauteur de l'arbre binaire (c'est \xe0 dire la longueur du plus long chemin entre la racine et une feuille)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"int Node::height() const;\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"On peut utiliser de la r\xe9cursivit\xe9 pour calculer la hauteur de l'arbre."})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une fonction ",(0,i.jsx)(n.code,{children:"deleteChilds"})," sur la structure ",(0,i.jsx)(n.code,{children:"Node"})," qui permet de supprimer les fils d'un n\u0153ud (et de lib\xe9rer la m\xe9moire)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void Node::deleteChilds();\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"On peut utiliser de la r\xe9cursivit\xe9 pour supprimer les n\u0153uds de l'arbre."})}),"\n",(0,i.jsx)(n.p,{children:"On va se donner la convention qu'un arbre binaire contenant un seul n\u0153ud a une hauteur de 1."}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une ",(0,i.jsx)(n.strong,{children:"m\xe9thode"})," ",(0,i.jsx)(n.code,{children:"display_infixe"})," qui affiche les valeurs des n\u0153uds parcourus dans l'ordre ",(0,i.jsx)(n.strong,{children:"infixe"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void Node::display_infixe() const;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une ",(0,i.jsx)(n.strong,{children:"m\xe9thode"})," ",(0,i.jsx)(n.code,{children:"prefixe"})," qui retourne un vecteur contenant des pointeurs vers les n\u0153uds de l'arbre binaire parcourus en ",(0,i.jsx)(n.strong,{children:"prefixe"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"std::vector<Node const*> Node::infixe() const;\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Pour le faire par ",(0,i.jsx)(n.strong,{children:"r\xe9cursivit\xe9"})," on pourra utiliser la m\xe9thode ",(0,i.jsx)(n.code,{children:"insert"})," du ",(0,i.jsx)(n.code,{children:"std::vector"})," qui permet d\u2019ins\xe9rer plusieurs \xe9l\xe9ments \xe0 l'aide d\u2019it\xe9rateurs."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"auto left_nodes {left->infixe()};\nnodes.insert(nodes.end(), left_nodes.begin(), left_nodes.end());\n"})}),(0,i.jsx)(n.p,{children:"Cela va permettre de concat\xe9ner dans un seul vecteur les n\u0153uds des sous arbres gauche et droit."})]}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:["De m\xeame, \xe9crire une autre m\xe9thode ",(0,i.jsx)(n.code,{children:"postfixe"})," qui retournent les n\u0153uds parcourus dans l'ordre ",(0,i.jsx)(n.strong,{children:"postfixe"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"BONUS: It\xe9ratif"}),(0,i.jsx)(n.p,{children:"si tu le souhaites, tu peux essayer de le faire de mani\xe8re it\xe9rative (sans r\xe9cursivit\xe9)."}),(0,i.jsxs)(n.p,{children:["Pour faire cela tu peux utiliser une pile (",(0,i.jsx)(n.code,{children:"std::stack"}),") pour stocker les n\u0153uds \xe0 parcourir. L'id\xe9e est de parcourir l'arbre en commen\xe7ant par la racine (premier \xe9l\xe9ment de la pile). Puis, de d\xe9plier un n\u0153ud de la pile, s'il a un fils droit, on le met dans la pile et on recommence. Sinon, s'il a un fils gauche, on le met dans la pile et on recommence. enfin s'il n'a pas de fils, on le traite (on peut l'ajouter \xe0 un vecteur par exemple). Il faut aussi faire attention \xe0 conserver un pointeur vers le n\u0153ud pr\xe9c\xe9dent afin de savoir si on remonte ou si on descend dans l'arbre."]}),(0,i.jsx)(n.p,{children:"Exemple:\nSi on a l'arbre suivant:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    5\n   / \\\n  3   7\n / \\ / \\\n"})}),(0,i.jsx)(n.p,{children:"on va commencer par mettre le n\u0153ud 5 dans la pile. (le n\u0153ud pr\xe9c\xe9dent est nul)\nOn va lire le n\u0153ud 5 et se rendre compte qu'il a un fils gauche, on le met dans la pile et on recommence (le n\u0153ud pr\xe9c\xe9dent est 5).\nOn va lire le n\u0153ud 3 et se rendre compte qu'il n'a pas de fils, on le traite et on le retire de la pile. (le n\u0153ud pr\xe9c\xe9dent est 3).\nOn va lire de nouveau le n\u0153ud 5 mais comme on a d\xe9j\xe0 trait\xe9 le fils gauche (on le sait car le n\u0153ud pr\xe9c\xe9dent est le n\u0153ud 3), on va mettre le fils droit dans la pile et recommencer. (le n\u0153ud pr\xe9c\xe9dent devient 5).\nOn va lire le n\u0153ud 7 et se rendre compte qu'il n'a pas de fils, on le traite et on le retire de la pile. (le n\u0153ud pr\xe9c\xe9dent est 7).\nOn va lire de nouveau le n\u0153ud 5 mais comme on a d\xe9j\xe0 trait\xe9 le fils droit (on le sait car le n\u0153ud pr\xe9c\xe9dent est le n\u0153ud 7), on va enfin traiter le n\u0153ud 5 et le retirer de la pile."}),(0,i.jsx)(n.p,{children:"Ce qui nous donne l'ordre postfixe: 3, 7, 5."}),(0,i.jsx)(n.p,{children:"C'est un peu plus compliqu\xe9 que la version r\xe9cursive mais c'est un bon exercice pour comprendre le fonctionnement des arbres binaires et des m\xe9canismes de pile."}),(0,i.jsx)(n.p,{children:"Voil\xe0 un bout de code pour vous aider \xe0 d\xe9marrer:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"\nstd::vector<Node const*> Node::postfixe() const {\n    std::vector<Node const*> nodes {};\n    std::stack<Node const*> to_process {};\n    Node* previous {nullptr};\n    to_process.push(this);\n\n    while (!to_process.empty()) {\n        Node const* current { to_process.top() };\n\n        // Si on est en train de descendre dans l'arbre\n        if (previous == nullptr || (previous->left == current || previous->right == current)) {\n            if(/* ? */) {\n                to_process.push(current->left);\n            }\n            else if(/* ? */) {\n                // todo\n            } else {\n                // on traite le n\u0153ud (ajouter au vecteur) et on le retire de la pile\n                // todo\n            }\n        \n        // Si l'on remonte dans l'arbre en venant de la gauche\n        }else if (/* ? */) {\n            if(/* ? */) {\n                // todo\n            } else {\n                // todo\n            }\n        \n        // Si l'on remonte dans l'arbre en venant de la droite\n        } else if (/* ? */) {\n            // todo\n        }\n        \n        previous = current;\n\n    }\n    return nodes;\n}\n"})})]}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une ",(0,i.jsx)(n.strong,{children:"fonction"})," ",(0,i.jsx)(n.code,{children:"mostLeft"})," qui retourne une r\xe9f\xe9rence vers le pointeur du n\u0153ud le plus \xe0 gauche de l'arbre binaire."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"    Node*& mostLeft(Node*& node);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f"," Pourquoi retourner une ",(0,i.jsx)(n.strong,{children:"r\xe9f\xe9rence"})," vers un ",(0,i.jsx)(n.strong,{children:"pointeur"}),"(",(0,i.jsx)(n.code,{children:"*&"}),") ? Car on va ensuite utiliser cette fonction dans la fonction ",(0,i.jsx)(n.code,{children:"removeNode"})," pour supprimer une valeur (donc un n\u0153ud) de l'arbre binaire. Mais dans certains cas on va devoir modifier le pointeur du n\u0153ud parent pour qu'il ne pointe plus vers le n\u0153ud que l'on veut supprimer. la r\xe9f\xe9rence va permettre de modifier directement le pointeur du n\u0153ud parent."]}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une ",(0,i.jsx)(n.strong,{children:"fonction"})," ",(0,i.jsx)(n.code,{children:"remove"})," qui permet de supprimer une valeur de l'arbre binaire dont le n\u0153ud racine est pass\xe9 en param\xe8tre. La fonction retourne vrai si la valeur a \xe9t\xe9 supprim\xe9e et faux sinon."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"bool remove(Node*& node, int value);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Prendre en param\xe8tre une ",(0,i.jsx)(n.strong,{children:"r\xe9f\xe9rence vers un pointeur"})," permet de modifier directement le pointeur du n\u0153ud parent si le n\u0153ud est supprim\xe9. C'est important dans le cas par exemple o\xf9 l'on supprime une feuille de l'arbre il faut pouvoir r\xe9assigner le pointeur du n\u0153ud parent vers un pointeur nul pour \xe9viter d'avoir un pointeur qui pointe vers un n\u0153ud supprim\xe9."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"if (value == node->value && node->isLeaf()) {\n        // On supprime le n\u0153ud courant\n        delete node;\n        // Comme on a une r\xe9f\xe9rence sur le pointeur du n\u0153ud courant, on le met \xe0 jour avec nullptr\n        // Ainsi le parent du n\u0153ud courant aura un pointeur vers nullptr\n        node = nullptr;\n        // on retourne true car la suppression a \xe9t\xe9 effectu\xe9e\n        return true;\n    }\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Il existe trois cas de figure lorsqu'on supprime un n\u0153ud d'un arbre binaire:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le n\u0153ud n'a pas de fils: on peut le supprimer directement (exemple pr\xe9c\xe9dent)."}),"\n",(0,i.jsx)(n.li,{children:"Le n\u0153ud a un seul fils: on peut le supprimer et le remplacer par son fils."}),"\n",(0,i.jsxs)(n.li,{children:["Le n\u0153ud a deux fils:\nIl faut remplacer la valeur du n\u0153ud \xe0 supprimer par une valeur pr\xe9server l'ordre de l'arbre. Pour cela, on utilisera la fonction ",(0,i.jsx)(n.code,{children:"mostLeft"})," qui permettent de trouver le n\u0153ud le plus \xe0 gauche d'un arbre binaire (autrement dit, le n\u0153ud de valeur minimale).\nIl faut ensuite remplacer la valeur du n\u0153ud \xe0 supprimer par la valeur du n\u0153ud trouv\xe9 pr\xe9c\xe9demment et supprimer ce dit n\u0153ud pour ne pas avoir de doublon. (cela revient \xe0 intervertir les deux n\u0153uds sans avoir \xe0 modifier les pointeurs puis \xe0 supprimer le n\u0153ud dont la valeur a \xe9t\xe9 copi\xe9e)."]}),"\n"]}),(0,i.jsxs)(n.p,{children:["Ce troisi\xe8me cas est le plus compliqu\xe9 \xe0 g\xe9rer. N'h\xe9sitez pas \xe0 demander de l'aide et prendre le temps de faire des sch\xe9mas pour comprendre le fonctionnement.\nIl faudra utiliser la fonction ",(0,i.jsx)(n.code,{children:"mostLeft"})," pour trouver le n\u0153ud le plus \xe0 gauche de l'arbre binaire."]})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Il faut faire attention \xe0 bien lib\xe9rer la m\xe9moire des n\u0153uds supprim\xe9s."})}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une ",(0,i.jsx)(n.strong,{children:"fonction"})," ",(0,i.jsx)(n.code,{children:"deleteTree"})," qui permet de supprimer un arbre binaire (et de lib\xe9rer la m\xe9moire)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void deleteTree(Node* node);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"12",children:["\n",(0,i.jsxs)(n.li,{children:["(",(0,i.jsx)(n.strong,{children:"BONUS"}),") \xc9crire des m\xe9thodes ",(0,i.jsx)(n.code,{children:"min"})," et ",(0,i.jsx)(n.code,{children:"max"})," qui retournent respectivement les valeurs minimales et maximales de l'arbre binaire."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"exercice-2-pointeurs-intelligents",children:"Exercice 2 (Pointeurs intelligents)"}),"\n",(0,i.jsxs)(n.p,{children:["Nous allons maintenant am\xe9liorer et simplifier notre code en utilisant des pointeurs intelligents. En effet la partie la plus compliqu\xe9e de notre code est la gestion de la m\xe9moire et des pointeurs. Les pointeurs intelligents vont nous permettre de nous d\xe9barrasser de cette gestion et de nous passer de la fonction ",(0,i.jsx)(n.code,{children:"deleteTree"})," par exemple."]}),"\n",(0,i.jsxs)(n.ol,{start:"13",children:["\n",(0,i.jsxs)(n.li,{children:["Copier coller votre fichier pour garder une version de votre code pr\xe9c\xe9dent et cr\xe9er un nouveau fichier ",(0,i.jsx)(n.code,{children:"smartNode.hpp"})," dans lequel vous allez r\xe9\xe9crire votre code en utilisant des ",(0,i.jsx)(n.strong,{children:"pointeurs intelligents"}),".\nRenommer la structure ",(0,i.jsx)(n.code,{children:"Node"})," en ",(0,i.jsx)(n.code,{children:"SmartNode"}),' pour pouvoir faire la diff\xe9rence entre les deux versions et remplacer les pointeurs "bruts" par des pointeurs intelligents ',(0,i.jsx)(n.code,{children:"std::unique_ptr"})," dans la structure ",(0,i.jsx)(n.code,{children:"SmartNode"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Je vous donne le contenu du fichier ",(0,i.jsx)(n.code,{children:"smartNode.hpp"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#pragma once\n\n#include <vector>\n\nstruct SmartNode {\n    int value;\n    std::unique_ptr<SmartNode> left { nullptr };\n    std::unique_ptr<SmartNode> right { nullptr };\n\n    bool isLeaf() const;\n    void insert(int value);\n\n    size_t height() const;\n\n    int min() const;\n    int max() const;\n};\n\nstd::unique_ptr<SmartNode> createSmartNode(int value);\nstd::unique_ptr<SmartNode>& SmartNode::mostLeft(std::unique_ptr<SmartNode>& node);\nbool remove(std::unique_ptr<SmartNode>& node, int value);\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Modifier la fonction ",(0,i.jsx)(n.code,{children:"isLeaf"})," pour utiliser le fait qu'un pointeur intelligent peut \xeatre converti implicitement en ",(0,i.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/memory/unique_ptr/operator_bool",children:"bool\xe9en"})," (il vaut ",(0,i.jsx)(n.code,{children:"false"})," si le pointeur est nul et ",(0,i.jsx)(n.code,{children:"true"})," sinon)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"std::unique_ptr<float> ptr {nullptr};\nif (ptr) {\n    // ptr est diff\xe9rent de nullptr\n} else {\n    // ptr est \xe9gal \xe0 nullptr\n}\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Renommer et modifier la fonction ",(0,i.jsx)(n.code,{children:"createNode"})," (en ",(0,i.jsx)(n.code,{children:"createSmartNode"}),") pour qu'elle retourne un pointeur intelligent ",(0,i.jsx)(n.code,{children:"std::unique_ptr"})," au lieu d'un pointeur brut (on utilisera la fonction ",(0,i.jsx)(n.code,{children:"std::make_unique"})," pour cr\xe9er le pointeur)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Elle s'utilise de la mani\xe8re suivante:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"std::unique_ptr<float> ptr {std::make_unique<float>(3.14)};\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modifier la m\xe9thode ",(0,i.jsx)(n.code,{children:"mostLeft"})," pour qu'elle retourne une r\xe9f\xe9rence vers un pointeur intelligent au lieu d'un pointeur brut."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modifier la m\xe9thode ",(0,i.jsx)(n.code,{children:"insert"})," pour qu'elle utilise des pointeurs intelligents."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["(",(0,i.jsx)(n.strong,{children:"BONUS"}),") Modifier la m\xe9thode ",(0,i.jsx)(n.code,{children:"remove"})," pour qu'elle utilise des pointeurs intelligents."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["C'est un peu plus compliqu\xe9 car il faut utiliser des r\xe9f\xe9rences vers des pointeurs intelligents pour pouvoir les modifier. On peut utiliser les m\xe9thodes ",(0,i.jsx)(n.code,{children:"reset"})," et ",(0,i.jsx)(n.code,{children:"release"})," pour g\xe9rer la m\xe9moire et les pointeurs intelligents. Ou utiliser un concept plus avanc\xe9 ",(0,i.jsx)(n.code,{children:"std::move"})," pour transf\xe9rer la propri\xe9t\xe9 d'un pointeur intelligent d'un objet \xe0 un autre.\nSi vous voulez essayer, n'h\xe9sitez pas \xe0 demander de l'aide."]})}),"\n",(0,i.jsx)(n.h2,{id:"exercice-3-utilisation",children:"Exercice 3 (Utilisation)"}),"\n",(0,i.jsx)(n.p,{children:"Testons maintenant notre impl\xe9mentation en cr\xe9ant un programme qui permet de cr\xe9er un arbre binaire et d'effectuer diff\xe9rentes op\xe9rations dessus."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cr\xe9er un arbre binaire et ins\xe9rer les valeurs suivantes: 5, 3, 7, 2, 4, 6, 8, 1, 9, 0."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Afficher les valeurs des n\u0153uds de l'arbre binaire dans l'ordre ",(0,i.jsx)(n.strong,{children:"infixe"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Afficher la valeur minimale et maximale de l'arbre."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Afficher la somme des valeurs des n\u0153uds de l'arbre binaire en utilisant la fonction ",(0,i.jsx)(n.code,{children:"postfixe"})," qui retourne un vecteur contenant les n\u0153uds parcourus dans l'ordre ",(0,i.jsx)(n.strong,{children:"postfixe"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Afficher la hauteur de l'arbre binaire."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aller-plus-loin",children:"Aller plus loin"}),"\n",(0,i.jsx)(n.h2,{id:"exercice-4-encapsulation",children:"Exercice 4 (Encapsulation)"}),"\n",(0,i.jsxs)(n.p,{children:["Le but est de cr\xe9er une structure ",(0,i.jsx)(n.code,{children:"BinaryTree"})," qui encapsule la structure ",(0,i.jsx)(n.code,{children:"Node"})," ou ",(0,i.jsx)(n.code,{children:"SmartNode"})," et qui permet d'utiliser les m\xeame m\xe9thodes sans conna\xeetre la structure interne de l'arbre binaire. Cela permet aussi de g\xe9rer le cas o\xf9 l'arbre binaire est vide (c'est \xe0 dire que la racine est un pointeur nul)."]}),"\n",(0,i.jsxs)(n.p,{children:["C'est moins pertinent dans notre cas pour ce TDs mais lorsque vous d\xe9couvrirez la notion de ",(0,i.jsx)(n.strong,{children:"visibilit\xe9"})," vous comprendrez l'int\xe9r\xeat de cette encapsulation."]}),"\n",(0,i.jsxs)(n.p,{children:["Voil\xe0 le contenu du fichier ",(0,i.jsx)(n.code,{children:"binaryTree.hpp"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#pragma once\n\n#include <memory>\n\n#include "smartNode.hpp"\n\nstruct BinaryTree {\n    std::unique_ptr<SmartNode> root { nullptr };\n\n    void insert(int value);\n    bool remove(int value);\n    void clear();\n    bool contains(int value) const;\n    size_t height() const;\n};\n\nbool contains(std::unique_ptr<SmartNode>& node, int value);\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Cr\xe9er un fichier ",(0,i.jsx)(n.code,{children:"binaryTree.cpp"})," et impl\xe9menter les m\xe9thodes de la structure ",(0,i.jsx)(n.code,{children:"BinaryTree"}),"."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var i=r(7294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
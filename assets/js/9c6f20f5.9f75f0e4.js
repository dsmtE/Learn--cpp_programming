"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[4113],{8805:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var c=r(5893),t=r(1151);const s={title:"TD7 - Encodage et compression"},i="Exercice 1 (Run-length encoding)",a={id:"TDs/S2/encodingAndCompression",title:"TD7 - Encodage et compression",description:"1. \xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res compos\xe9e uniquement de caract\xe8res alphab\xe9tiques et qui retourne une cha\xeene de caract\xe8res encod\xe9e en utilisant le run-length encoding.",source:"@site/content/TDs/S2/07_encodingAndCompression.md",sourceDirName:"TDs/S2",slug:"/TDs/S2/encodingAndCompression",permalink:"/Learn--cpp_programming/TDs/S2/encodingAndCompression",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"TD7 - Encodage et compression"},sidebar:"TDs",previous:{title:"TD6 - Arbres binaires",permalink:"/Learn--cpp_programming/TDs/S2/binaryTree"}},d={},o=[];function l(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"exercice-1-run-length-encoding",children:"Exercice 1 (Run-length encoding)"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res compos\xe9e uniquement de caract\xe8res alphab\xe9tiques et qui retourne une cha\xeene de caract\xe8res encod\xe9e en utilisant le ",(0,c.jsx)(n.strong,{children:"run-length encoding"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Par exemple, si la cha\xeene de caract\xe8res en entr\xe9e est ",(0,c.jsx)(n.code,{children:"AAAABBBCCDAA"}),", la cha\xeene de caract\xe8res encod\xe9e est ",(0,c.jsx)(n.code,{children:"4A3B2C1D2A"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res encod\xe9e en utilisant le ",(0,c.jsx)(n.strong,{children:"run-length encoding"})," et qui retourne la cha\xeene de caract\xe8res d\xe9cod\xe9e."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Am\xe9liorer la fonction pr\xe9c\xe9dente pour qu'elle puisse d\xe9coder une cha\xeene de caract\xe8res m\xeame si cette cha\xeene de caract\xe8res contient des nombres \xe0 plusieurs chiffres."}),"\n",(0,c.jsxs)(n.p,{children:["Par exemple, si la cha\xeene de caract\xe8res en entr\xe9e est ",(0,c.jsx)(n.code,{children:"12A3B2C1D2A"}),", la cha\xeene de caract\xe8res d\xe9cod\xe9e est ",(0,c.jsx)(n.code,{children:"AAAAAAAAAAAABBBCCDAA"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\xc9crire une fonction qui permet d'encoder en utilisant un caract\xe8re sp\xe9cial (",(0,c.jsx)(n.strong,{children:"caract\xe8re de contr\xf4le"}),") suivit d'un ",(0,c.jsx)(n.strong,{children:"nombre"})," pour indiquer le nombre de fois qu'un caract\xe8re doit \xeatre r\xe9p\xe9t\xe9."]}),"\n",(0,c.jsxs)(n.p,{children:["Par exemple, en se donnant le caract\xe8re de contr\xf4le ",(0,c.jsx)(n.code,{children:"*"}),", si la cha\xeene de caract\xe8res en entr\xe9e est ",(0,c.jsx)(n.code,{children:"AAAABBBCCDAA"}),", la cha\xeene de caract\xe8res encod\xe9e est ",(0,c.jsx)(n.code,{children:"*4A*3B*2C1D2A"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Am\xe9liorer la fonction pr\xe9c\xe9dente pour rendre le caract\xe8re de contr\xf4le param\xe9trable et retourner la cha\xeene de caract\xe8res originale si la longueur de la cha\xeene de caract\xe8res encod\xe9e est plus grande que la cha\xeene de caract\xe8res originale."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\xc9crire une fonction qui permet de d\xe9coder une cha\xeene de caract\xe8res encod\xe9e en utilisant un caract\xe8re de contr\xf4le."}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h1,{id:"exercice-2-huffman-encoding",children:"Exercice 2 (Huffman encoding)"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\xc9crire une fonction ",(0,c.jsx)(n.code,{children:"frequency"})," qui prend en param\xe8tre une cha\xeene de caract\xe8res et retourne un ",(0,c.jsx)(n.code,{children:"std::unordered_map<char, size_t>"})," qui associe \xe0 chaque caract\xe8re le nombre d'occurrences de ce caract\xe8re dans la cha\xeene de caract\xe8res."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Donnons nous la structure suivante pour la suite de l'exercice:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cpp",children:"struct Node {\n    char character;\n    size_t frequency;\n    Node* left { nullptr };\n    Node* right { nullptr };\n};\n"})}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["on n'utilise pas de ",(0,c.jsx)(n.code,{children:"std::unique_ptr"})," dans cet exercice pour simplifier l'\xe9criture des fonctions. En effet, l'utilisation de ",(0,c.jsx)(n.code,{children:"std::unique_ptr"})," impose de passer par des ",(0,c.jsx)(n.code,{children:"std::move"})," pour d\xe9placer les pointeurs et cela rendrait l'\xe9criture des fonctions plus complexe. Cela nous forcerait m\xeame \xe0 cr\xe9er notre propre file de priorit\xe9 (",(0,c.jsx)(n.code,{children:"priority_queue"}),") pour pouvoir utiliser des ",(0,c.jsx)(n.code,{children:"std::unique_ptr"})," dans la file de priorit\xe9. Ce n'est pas l'objet de cet exercice."]})}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Surcharger l'op\xe9rateur ",(0,c.jsx)(n.code,{children:"<"})," pour la structure ",(0,c.jsx)(n.code,{children:"Node"})," de telle sorte que l'op\xe9rateur ",(0,c.jsx)(n.code,{children:"<"})," retourne ",(0,c.jsx)(n.code,{children:"true"})," si la fr\xe9quence du n\u0153ud de gauche est inf\xe9rieure \xe0 la fr\xe9quence du n\u0153ud de droite."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\xc9crire une fonction ",(0,c.jsx)(n.code,{children:"createNode"})," qui prend en param\xe8tre un caract\xe8re et une fr\xe9quence et qui retourne un ",(0,c.jsx)(n.code,{children:"Node*"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\xc9crire une fonction ",(0,c.jsx)(n.code,{children:"createSymbolNode"})," qui prend en param\xe8tre (par valeur) deux ",(0,c.jsx)(n.code,{children:"Node*"})," et qui retourne un ",(0,c.jsx)(n.code,{children:"Node*"})," dont le caract\xe8re est ",(0,c.jsx)(n.code,{children:"0"})," et la fr\xe9quence est la somme des fr\xe9quences des deux n\u0153uds pass\xe9s en param\xe8tre et les deux n\u0153uds pass\xe9s en param\xe8tre sont les fils du n\u0153ud retourn\xe9."]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:'Cette fonction va \xeatre utilis\xe9e pour cr\xe9er un n\u0153ud qui repr\xe9sente un "symbole" (un ensemble de caract\xe8res) et qui va \xeatre utilis\xe9 pour construire l\'arbre de Huffman.'}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\xc9crire une fonction ",(0,c.jsx)(n.code,{children:"build_huffman_tree"})," qui prend en param\xe8tre (",(0,c.jsx)(n.strong,{children:"r\xe9f\xe9rence constante"}),") un ",(0,c.jsx)(n.code,{children:"std::unordered_map<char, size_t>"})," et qui retourne un ",(0,c.jsx)(n.code,{children:"Node*"})," qui repr\xe9sente l'arbre de Huffman."]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Cet arbre va \xeatre construit en utilisant une ",(0,c.jsx)(n.code,{children:"std::priority_queue"})," qui va permettre de trier les n\u0153uds (",(0,c.jsx)(n.strong,{children:"symboles"}),") en fonction de leur fr\xe9quence.\nPour construire l'arbre, on va retirer les deux n\u0153uds de plus petite fr\xe9quence de la file de priorit\xe9, cr\xe9er un nouveau n\u0153ud dont la fr\xe9quence est la somme des fr\xe9quences des deux n\u0153uds retir\xe9s et dont les fils sont les deux n\u0153uds retir\xe9s, et ajouter ce nouveau n\u0153ud \xe0 la file de priorit\xe9."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\xc9crire une fonction ",(0,c.jsx)(n.code,{children:"build_encoding_table"})," qui prend en param\xe8tre le sommet de l'arbre de Huffman et qui retourne un ",(0,c.jsx)(n.code,{children:"std::unordered_map<char, std::string>"})," qui associe \xe0 chaque caract\xe8re le code de Huffman correspondant."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Pour construire le code de Huffman, on va parcourir l'arbre de Huffman en ajoutant un ",(0,c.jsx)(n.code,{children:"0"})," \xe0 une cha\xeene de caract\xe8re \xe0 chaque fois qu'on descend \xe0 gauche et un ",(0,c.jsx)(n.code,{children:"1"})," \xe0 chaque fois qu'on descend \xe0 droite. On va s'arr\xeater lorsqu'on arrive \xe0 une feuille et on va associer la cha\xeene de caract\xe8re obtenue \xe0 la feuille."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Il faudra utiliser une fonction interm\xe9diaire ",(0,c.jsx)(n.code,{children:"fill_encoding_table"})," qui prend en param\xe8tre un n\u0153ud, la cha\xeene de caract\xe8res associ\xe9 avec repr\xe9sentation binaire du n\u0153ud et qui remplit ta table (",(0,c.jsx)(n.code,{children:"std::unordered_map<char, std::string>"}),") pass\xe9 par r\xe9f\xe9rence.\nC'est cette fonction qui va \xeatre appel\xe9e r\xe9cursivement pour parcourir l'arbre de Huffman et remplir la table."]}),"\n",(0,c.jsx)(n.p,{children:"Voila les signatures des fonctions:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cpp",children:"void fill_encoding_table(Node const* node, std::unordered_map<char, std::string>& table, std::string str);\nstd::unordered_map<char, std::string> build_encoding_table(Node const* root);\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"7",children:["\n",(0,c.jsxs)(n.li,{children:["\xc9crire une fonction ",(0,c.jsx)(n.code,{children:"encode"})," qui prend en param\xe8tre une cha\xeene de caract\xe8res et un ",(0,c.jsx)(n.code,{children:"std::unordered_map<char, std::string>"})," et qui retourne une cha\xeene de caract\xe8res repr\xe9sentant la cha\xeene de caract\xe8res encod\xe9e en utilisant le code de Huffman."]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cpp",children:"std::string encode(std::string str, std::unordered_map<char, std::string> const& table);\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"8",children:["\n",(0,c.jsxs)(n.li,{children:["\xc9crire une fonction ",(0,c.jsx)(n.code,{children:"decode"})," qui prend en param\xe8tre une cha\xeene de caract\xe8res encod\xe9e en utilisant le code de Huffman et le sommet de l'arbre de Huffman et qui retourne une cha\xeene de caract\xe8res repr\xe9sentant la cha\xeene de caract\xe8res d\xe9cod\xe9e."]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cpp",children:"std::string decode(std::string const& str, Node const* huffman_tree_root);\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"9",children:["\n",(0,c.jsxs)(n.li,{children:["\xc9crire une fonction ",(0,c.jsx)(n.code,{children:"delete_huffman_tree"})," qui prend en param\xe8tre le sommet de l'arbre de Huffman et qui lib\xe8re la m\xe9moire allou\xe9e pour l'arbre."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Culture - Aller plus loin:"})}),"\n",(0,c.jsxs)(n.p,{children:["Dans la r\xe9alit\xe9, on ne souhaite pas encoder le caract\xe8res ",(0,c.jsx)(n.code,{children:"a"})," par une cha\xeene de caract\xe8re (par exemple ",(0,c.jsx)(n.code,{children:"110"}),"). Sinon on se retrouverait avec une cha\xeene de caract\xe8res plus grande que la cha\xeene de caract\xe8res originale. On va plut\xf4t utiliser des ",(0,c.jsx)(n.strong,{children:"bits"}),". Par exemple, on va encoder le caract\xe8re ",(0,c.jsx)(n.code,{children:"a"})," par les bits ",(0,c.jsx)(n.code,{children:"110"})," (soit le nombre ",(0,c.jsx)(n.code,{children:"6"})," en d\xe9cimal)."]}),"\n",(0,c.jsxs)(n.p,{children:["Pour faire cela il faut manipuler des ",(0,c.jsx)(n.strong,{children:"bits"}),". En C++, on peut manipuler des bits en utilisant les op\xe9rateurs ",(0,c.jsx)(n.code,{children:"<<"})," (d\xe9calage \xe0 gauche), ",(0,c.jsx)(n.code,{children:">>"})," (d\xe9calage \xe0 droite), ",(0,c.jsx)(n.code,{children:"|"})," (ou binaire), ",(0,c.jsx)(n.code,{children:"&"})," (et binaire), ",(0,c.jsx)(n.code,{children:"^"})," (ou exclusif binaire), ",(0,c.jsx)(n.code,{children:"~"})," (non binaire)."]}),"\n",(0,c.jsxs)(n.p,{children:["Pour ensuite pouvoir \xe9crire en binaire dans un fichier on va utiliser des ",(0,c.jsx)(n.strong,{children:"octets"}),". Un octet est un ensemble de 8 bits. En C++, on peut manipuler des octets en utilisant le type ",(0,c.jsx)(n.code,{children:"unsigned char"})," (ou ",(0,c.jsx)(n.code,{children:"uint8_t"}),")."]}),"\n",(0,c.jsxs)(n.p,{children:["Ensuite, au lieu de retourner une cha\xeene de caract\xe8res, on va retourner un ",(0,c.jsx)(n.code,{children:"std::vector<uint8_t>"})," qui contient les octets compos\xe9s des bits de chaque caract\xe8re mis bout \xe0 bout. C'est un jeu d'operation binaire et de d\xe9calage qui permet de mettre bout \xe0 bout les octets pour obtenir la repr\xe9sentation binaire de la cha\xeene de caract\xe8res encod\xe9e."]}),"\n",(0,c.jsxs)(n.p,{children:["On obtient ensuite un ",(0,c.jsx)(n.code,{children:"std::vector<uint8_t>"})," qui contient la repr\xe9sentation binaire de la cha\xeene de caract\xe8res encod\xe9e. On peut ensuite \xe9crire cet ",(0,c.jsx)(n.code,{children:"std::vector<uint8_t>"})," dans un fichier."]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsxs)(n.p,{children:["Si l'on souhaite faire un programme qui compresse de bout en bout une cha\xeene de caract\xe8res dans un fichier, il faut pouvoir \xe9crire dans un fichier la repr\xe9sentation binaire de la cha\xeene de caract\xe8res encod\xe9e. Pour cela, on peut utiliser la classe ",(0,c.jsx)(n.code,{children:"std::ofstream"})," qui permet d'\xe9crire dans un fichier. Il suffira d'\xe9crire octet par octet dans le fichier."]}),"\n",(0,c.jsxs)(n.p,{children:["Afin, de pouvoir d\xe9coder ce fichier, il faut pouvoir lire les octets du fichier et les transformer en une repr\xe9sentation binaire. Cela se fait en utilisant la classe ",(0,c.jsx)(n.code,{children:"std::ifstream"})," qui permet de lire dans un fichier. Il suffira de lire octet par octet et de transformer chaque octet en une repr\xe9sentation binaire."]}),"\n",(0,c.jsx)(n.p,{children:"Enfin, pour d\xe9coder totalement et retrouver la cha\xeene originale, il faut non seulement avoir la repr\xe9sentation binaire de la cha\xeene de caract\xe8res encod\xe9e, mais \xe9galement avoir l'arbre de Huffman pour pouvoir d\xe9coder la repr\xe9sentation binaire en caract\xe8res et ainsi retrouver la cha\xeene de caract\xe8res originale. Il faudra donc ajouter \xe0 ce fichier la repr\xe9sentation de l'arbre de Huffman pour pouvoir d\xe9coder totalement la cha\xeene de caract\xe8res encod\xe9e."}),"\n",(0,c.jsx)(n.p,{children:"Je ne vous demande pas de faire cela, mais c'est pour vous donner une id\xe9e de ce \xe0 quoi cela peut servir en pratique et comment cela peut \xeatre utilis\xe9."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var c=r(7294);const t={},s=c.createContext(t);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[4714],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>b});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),l=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(o.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||c[m]||u;return n?t.createElement(b,s(s({ref:r},p),{},{components:n})):t.createElement(b,s({ref:r},p))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=n.length,s=new Array(u);s[0]=m;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<u;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7698:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const u={title:"Arbre Binaires",tags:["C++"]},s=void 0,i={unversionedId:"Lessons/S2/BinaryTree",id:"Lessons/S2/BinaryTree",title:"Arbre Binaires",description:"La notion d'arbre est une structure de donn\xe9es tr\xe8s importante en informatique. Elle permet de repr\xe9senter des donn\xe9es hi\xe9rarchiques, comme par exemple des fichiers dans un syst\xe8me de fichiers, des dossiers dans un syst\xe8me de fichiers, des dossiers dans un dossier, etc.",source:"@site/content/Lessons/S2/BinaryTree.md",sourceDirName:"Lessons/S2",slug:"/Lessons/S2/BinaryTree",permalink:"/Learn--cpp_programming/Lessons/S2/BinaryTree",draft:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",frontMatter:{title:"Arbre Binaires",tags:["C++"]}},o={},l=[{value:"Arbres binaires",id:"arbres-binaires",level:2},{value:"Profondeur d&#39;un noeud",id:"profondeur-dun-noeud",level:3},{value:"Hauteur d&#39;un arbre",id:"hauteur-dun-arbre",level:3},{value:"Repr\xe9sentation d&#39;un arbre binaire",id:"repr\xe9sentation-dun-arbre-binaire",level:2},{value:"Structure par r\xe9cursivit\xe9",id:"structure-par-r\xe9cursivit\xe9",level:3},{value:"Structure par tableau",id:"structure-par-tableau",level:3},{value:"Parcours d&#39;un arbre binaire",id:"parcours-dun-arbre-binaire",level:2},{value:"Parcours en largeur",id:"parcours-en-largeur",level:3},{value:"Parcours en profondeur",id:"parcours-en-profondeur",level:3},{value:"Int\xe9r\xeat des parcours",id:"int\xe9r\xeat-des-parcours",level:3},{value:"Arbres binaires de recherche",id:"arbres-binaires-de-recherche",level:2},{value:"Insertion",id:"insertion",level:3},{value:"Recherche",id:"recherche",level:3},{value:"Suppression",id:"suppression",level:2},{value:"Une multitude d&#39;arbres binaires",id:"une-multitude-darbres-binaires",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}],p={toc:l},d="wrapper";function c(e){let{components:r,...n}=e;return(0,a.kt)(d,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"La notion d'",(0,a.kt)("strong",{parentName:"p"},"arbre")," est une ",(0,a.kt)("strong",{parentName:"p"},"structure de donn\xe9es")," tr\xe8s importante en informatique. Elle permet de repr\xe9senter des donn\xe9es ",(0,a.kt)("strong",{parentName:"p"},"hi\xe9rarchiques"),", comme par exemple des fichiers dans un syst\xe8me de fichiers, des dossiers dans un syst\xe8me de fichiers, des dossiers dans un dossier, etc."),(0,a.kt)("p",null,"Un arbre est une structure de donn\xe9es compos\xe9e de ",(0,a.kt)("strong",{parentName:"p"},"noeuds"),". Chaque noeud peut avoir un nombre quelconque de ",(0,a.kt)("strong",{parentName:"p"},"fils"),". Un noeud qui n'a pas de fils est appel\xe9 une ",(0,a.kt)("strong",{parentName:"p"},"feuille"),"."),(0,a.kt)("p",null,"Un arbre est compos\xe9 d'un ",(0,a.kt)("strong",{parentName:"p"},"noeud racine")," qui est le noeud de d\xe9part de l'arbre. Il est possible d'acc\xe9der \xe0 tous les autres noeuds de l'arbre \xe0 partir du noeud racine."),(0,a.kt)("mermaid",{value:"graph LR\n    A[Noeud A] --\x3e B[Noeud B]\n    A --\x3e C[Noeud C]\n    A --\x3e D[Noeud D]\n    B --\x3e E[Noeud E]\n    B --\x3e F[Noeud F]\n    C --\x3e G[Noeud G]\n    C --\x3e H[Noeud H]\n    C --\x3e I[Noeud I]\n    D --\x3e J[Noeud J]\n    D --\x3e K[Noeud K]\n    D --\x3e L[Noeud L]"}),(0,a.kt)("p",null,"Il existe plusieurs types d'arbres qui ont des propri\xe9t\xe9s diff\xe9rentes. On peut par exemple se limiter \xe0 un nombre maximum de fils par noeud, impose un ordre sur les fils d'un noeud, ou encore imposer que chaque noeud ait un nombre fixe de fils."),(0,a.kt)("h2",{id:"arbres-binaires"},"Arbres binaires"),(0,a.kt)("p",null,"L'arbres binaires est un type d'arbre particulier tr\xe8s utilis\xe9 en informatique.\nIl a les propri\xe9t\xe9s suivantes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chaque noeud a au maximum deux fils. Appel\xe9s ",(0,a.kt)("strong",{parentName:"li"},"fils gauche")," et ",(0,a.kt)("strong",{parentName:"li"},"fils droit"),"."),(0,a.kt)("li",{parentName:"ul"},"Chaque noeud ne peut avoir qu'un seul ",(0,a.kt)("strong",{parentName:"li"},"p\xe8re"),".")),(0,a.kt)("h3",{id:"profondeur-dun-noeud"},"Profondeur d'un noeud"),(0,a.kt)("p",null,"La ",(0,a.kt)("strong",{parentName:"p"},"profondeur")," d'un noeud est le nombre de noeuds qui le s\xe9parent du noeud racine. En consid\xe9rant que la profondeur du noeud racine est 1."),(0,a.kt)("p",null,"Dans notre exemple, la profondeur du noeud racine ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," est 1. La profondeur du noeud ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," est 2. La profondeur du noeud ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," est 3. etc.."),(0,a.kt)("h3",{id:"hauteur-dun-arbre"},"Hauteur d'un arbre"),(0,a.kt)("p",null,"La ",(0,a.kt)("strong",{parentName:"p"},"hauteur")," d'un arbre est la profondeur maximale de ses noeuds. C'est \xe0 dire la profondeur du noeud le plus profond."),(0,a.kt)("h2",{id:"repr\xe9sentation-dun-arbre-binaire"},"Repr\xe9sentation d'un arbre binaire"),(0,a.kt)("h3",{id:"structure-par-r\xe9cursivit\xe9"},"Structure par r\xe9cursivit\xe9"),(0,a.kt)("p",null,"Pour repr\xe9senter un arbre binaire une solution qui peut sembler naturelle est d'utiliser une structure r\xe9cursive. C'est \xe0 dire une structure qui contient des \xe9l\xe9ments de son propre type."),(0,a.kt)("p",null,"En effet, n'importe quel noeud de l'arbre, peut \xeatre vu comme un sous arbre binaire dont la racine est ce noeud. Ce jeu de l'esprit permet de comprendre qu'un noeud ",(0,a.kt)("strong",{parentName:"p"},"pointe")," vers deux autres noeuds qui sont les fils gauche et droit de ce noeud."),(0,a.kt)("p",null,"Il peut ne pointer vers aucun noeud, dans ce cas il est une feuille. Sinon, ce noeud repr\xe9sente un embranchement de l'arbre."),(0,a.kt)("p",null,"Mais on peut se demander comment repr\xe9senter ce lien (qui peut ne pas exister dans le cas d'une feuille) entre un noeud et ses fils."),(0,a.kt)("p",null,"C'est l\xe0 qu'interviennent les ",(0,a.kt)("strong",{parentName:"p"},"pointeurs"),". On peut repr\xe9senter ce lien en utilisant des pointeurs vers les noeuds fils."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"On ne peut pas utiliser des ",(0,a.kt)("strong",{parentName:"p"},"r\xe9f\xe9rences")," car elles doivent \xeatre une ",(0,a.kt)("strong",{parentName:"p"},"r\xe9f\xe9rence vers")," un ",(0,a.kt)("strong",{parentName:"p"},"objet existant"),". Or, dans le cas d'une feuille, il n'y a pas de noeud fils.")),(0,a.kt)("p",null,"Le pointeur lui peut \xeatre nul, c'est \xe0 dire qu'il ne pointe vers aucun objet. C'est ce que l'on va utiliser pour repr\xe9senter une feuille."),(0,a.kt)("p",null,"Voil\xe0 \xe0 quoi ressemble la structure que l'on va utiliser pour repr\xe9senter un arbre binaire:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Node {\n    int value;\n    Node* left;\n    Node* right;\n};\n")),(0,a.kt)("p",null,"Elle est compos\xe9e d'un entier qui repr\xe9sente la valeur du noeud (cela peut \xeatre n'importe quel type de donn\xe9e), et de deux pointeurs vers des noeuds qui repr\xe9sentent les fils gauche et droit."),(0,a.kt)("p",null,"C'est pratique mais cela s'accompagne des inconv\xe9nients des pointeurs. Il faut faire attention \xe0 ne pas avoir de fuites m\xe9moires (g\xe9rer l'allocation et la d\xe9sallocation de la m\xe9moire) et il faut faire attention \xe0 ne pas utiliser un pointeur qui ne pointe vers rien (pointeur nul)."),(0,a.kt)("p",null,"Exemple d'utilisation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Node* root { new Node {1, nullptr, nullptr}};\nroot->left = { new Node {2, nullptr, nullptr}};\nroot->right = { new Node {3, nullptr, nullptr}};\n\nroot->left->left = { new Node {4, nullptr, nullptr}};\n\ndelete root->left->left;\ndelete root->left;\ndelete root->right;\ndelete root;\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f Il faut faire attention \xe0 d\xe9sallouer la m\xe9moire dans le bon ordre ! Si on d\xe9salloue le noeud racine avant ses fils, on ne pourra plus acc\xe9der aux fils pour les d\xe9sallouer. Cela provoque une ",(0,a.kt)("strong",{parentName:"p"},"fuite m\xe9moire"),".")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"On pourrait se limiter seulement \xe0 cette structure de ",(0,a.kt)("strong",{parentName:"p"},"noeud")," pour repr\xe9senter un ",(0,a.kt)("strong",{parentName:"p"},"arbre binaire"),". Mais cela peut \xeatre pratique d'avoir une structure d\xe9di\xe9e \xe0 l'arbre binaire qui contient un pointeur vers le noeud racine."),(0,a.kt)("p",null,"Cela permet de ne pas avoir \xe0 passer le noeud racine en param\xe8tre \xe0 chaque fois que l'on veut utiliser l'arbre. Cela permet aussi de mieux s\xe9parer les responsabilit\xe9s. La structure de l'arbre s'occupe de g\xe9rer le noeud racine et la structure du noeud s'occupe de g\xe9rer les fils.\nCertaines fonctionnalit\xe9s et m\xe9thodes n'on de sens que pour l'arbre et d'autres que pour le noeud."),(0,a.kt)("p",null,"Par exemple on pourrait vouloir ajouter une m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," \xe0 l'arbre qui permet d'ajouter une ",(0,a.kt)("strong",{parentName:"p"},"valeur"),". Cette m\xe9thode va s'occuper de trouver le bon endroit pour ins\xe9rer le noeud dans l'arbre \xe0 partir du noeud racine. Cela permet aussi de g\xe9rer le cas o\xf9 l'on souhaite repr\xe9senter un arbre vide (qui n'a pas encore de noeud racine)."),(0,a.kt)("p",null,"Cela permet aussi de cacher la structure interne de l'arbre. On peut par exemple changer la structure interne de l'arbre (la structure de ",(0,a.kt)("strong",{parentName:"p"},"noeud"),") sans avoir \xe0 modifier le code qui l'utilise (la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," par exemple). L'utilisateur de l'arbre n'a pas besoin de savoir comment est repr\xe9sent\xe9 l'arbre en interne, il n'est pas cens\xe9 manipuler directement les noeuds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct BinaryTree {\n    Node* root;\n};\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null," Pointeurs intelligents "),(0,a.kt)("p",null,"Il existe des ",(0,a.kt)("strong",{parentName:"p"},"pointeurs intelligents")," qui permettent de g\xe9rer automatiquement la m\xe9moire. Ils sont d\xe9finis dans la biblioth\xe8que ",(0,a.kt)("inlineCode",{parentName:"p"},"<memory>"),"."),(0,a.kt)("p",null,"On pourrait se servir dans notre cas du pointeur intelligent ",(0,a.kt)("inlineCode",{parentName:"p"},"std::unique_ptr")," qui permet de g\xe9rer automatiquement la m\xe9moire d'un objet allou\xe9 dynamiquement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Node {\n    int value;\n    std::unique_ptr<Node> left;\n    std::unique_ptr<Node> right;\n};\n")),(0,a.kt)("p",null,"On peut alors utiliser la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"std::make_unique")," pour cr\xe9er un objet allou\xe9 dynamiquement et initialiser les pointeurs intelligents."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::unique_ptr<Node> root { std::make_unique<Node>(1, nullptr, nullptr)};\nroot->left = std::make_unique<Node>(2, nullptr, nullptr);\nroot->right = std::make_unique<Node>(3, nullptr, nullptr);\n")),(0,a.kt)("p",null,"Cela permet de ne pas avoir \xe0 g\xe9rer la d\xe9sallocation de la m\xe9moire. La structure est automatiquement d\xe9sallou\xe9 lorsque le pointeur intelligent est d\xe9truit. Cela va se faire dans le bon ordre naturellement car pour d\xe9truire une structure, il faut d'abord d\xe9truire ses membres. Ses enfants seront donc d\xe9truits avant le noeud parent.")),(0,a.kt)("h3",{id:"structure-par-tableau"},"Structure par tableau"),(0,a.kt)("p",null,"// TODO"),(0,a.kt)("h2",{id:"parcours-dun-arbre-binaire"},"Parcours d'un arbre binaire"),(0,a.kt)("p",null,"Il existe plusieurs fa\xe7ons de parcourir les diff\xe9rents noeuds d'un arbre binaire. On peut par exemple parcourir l'arbre en largeur ou en profondeur."),(0,a.kt)("p",null,"Donnons nous l'arbre suivant:"),(0,a.kt)("mermaid",{value:"graph LR\n    A --\x3e B\n    A --\x3e C\n    B --\x3e D\n    B --\x3e E\n    C --\x3e F\n    C --\x3e G"}),(0,a.kt)("h3",{id:"parcours-en-largeur"},"Parcours en largeur"),(0,a.kt)("p",null,"Le parcours en largeur consiste \xe0 parcourir l'arbre en commen\xe7ant par le noeud racine puis en parcourant les noeuds de ",(0,a.kt)("strong",{parentName:"p"},"chaque niveau")," de profondeur de l'arbre de gauche \xe0 droite."),(0,a.kt)("h3",{id:"parcours-en-profondeur"},"Parcours en profondeur"),(0,a.kt)("p",null,"Le parcours en profondeur consiste \xe0 parcourir l'arbre de la racine vers les feuilles par r\xe9cursion dans les ",(0,a.kt)("strong",{parentName:"p"},"sous-arbre")," gauche et droite. On peut parcourir l'arbre en profondeur de diff\xe9rentes fa\xe7ons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parcours en profondeur ",(0,a.kt)("strong",{parentName:"li"},"pr\xe9fixe")," (ou ",(0,a.kt)("strong",{parentName:"li"},"pr\xe9-ordre"),"): on parcourt d'abord le noeud racine, puis le sous-arbre gauche et enfin le sous-arbre droit."),(0,a.kt)("li",{parentName:"ul"},"Parcours en profondeur ",(0,a.kt)("strong",{parentName:"li"},"infixe")," (ou ",(0,a.kt)("strong",{parentName:"li"},"sym\xe9trique"),"): on parcourt d'abord le sous-arbre gauche, puis le noeud racine et enfin le sous-arbre droit."),(0,a.kt)("li",{parentName:"ul"},"Parcours en profondeur ",(0,a.kt)("strong",{parentName:"li"},"postfixe")," (ou ",(0,a.kt)("strong",{parentName:"li"},"post-ordre"),"): on parcourt d'abord le sous-arbre gauche, puis le sous-arbre droit et enfin le noeud racine.")),(0,a.kt)("p",null,"Exemple de parcours Pour l'arbre suivant:"),(0,a.kt)("mermaid",{value:"graph LR\n    A --\x3e B\n    A --\x3e C\n    B --\x3e D\n    B --\x3e E\n    C --\x3e F\n    C --\x3e G"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parcours en ",(0,a.kt)("strong",{parentName:"li"},"largeur"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"A B C D E F G")),(0,a.kt)("li",{parentName:"ul"},"Parcours en profondeur ",(0,a.kt)("strong",{parentName:"li"},"pr\xe9fixe"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"A B D E C F G")),(0,a.kt)("li",{parentName:"ul"},"Parcours en profondeur ",(0,a.kt)("strong",{parentName:"li"},"infixe"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"D B E A F C G")),(0,a.kt)("li",{parentName:"ul"},"Parcours en profondeur ",(0,a.kt)("strong",{parentName:"li"},"postfixe"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"D E B F G C A"))),(0,a.kt)("h3",{id:"int\xe9r\xeat-des-parcours"},"Int\xe9r\xeat des parcours"),(0,a.kt)("p",null,"// TODO"),(0,a.kt)("h2",{id:"arbres-binaires-de-recherche"},"Arbres binaires de recherche"),(0,a.kt)("p",null,"Un arbre binaire de recherche est un arbre binaire qui \xe0 la particularit\xe9 d'\xeatre ",(0,a.kt)("strong",{parentName:"p"},"ordonn\xe9"),". On va imposer un ordre sur les valeurs des noeuds de l'arbre."),(0,a.kt)("p",null,"Dans notre cas on va imposer que pour chaque noeud, toutes les valeurs des noeuds du ",(0,a.kt)("strong",{parentName:"p"},"sous-arbre gauche")," sont ",(0,a.kt)("strong",{parentName:"p"},"inf\xe9rieures")," \xe0 la valeur du noeud et toutes les valeurs des noeuds du ",(0,a.kt)("strong",{parentName:"p"},"sous-arbre droit")," sont ",(0,a.kt)("strong",{parentName:"p"},"sup\xe9rieures")," \xe0 la valeur du noeud."),(0,a.kt)("p",null,"Le premier \xe9l\xe9ment ins\xe9r\xe9 dans l'arbre devient la racine. Ensuite, il suffit de mettre \xe0 gauche les \xe9l\xe9ments plus petits et \xe0 droite les \xe9l\xe9ments plus grands. C'est cette particularit\xe9 qui rend les arbres binaires de recherche int\xe9ressants."),(0,a.kt)("p",null,"Cela permet de faire des recherches efficaces dans l'arbre. Gr\xe2ce \xe0 la relation d'ordre entre les noeuds, on peut savoir dans quel sous-arbre se trouve la valeur recherch\xe9e et effectuer une recherche rappelant le fonctionnement de la recherche dichotomique."),(0,a.kt)("h3",{id:"insertion"},"Insertion"),(0,a.kt)("h3",{id:"recherche"},"Recherche"),(0,a.kt)("h2",{id:"suppression"},"Suppression"),(0,a.kt)("h2",{id:"une-multitude-darbres-binaires"},"Une multitude d'arbres binaires"),(0,a.kt)("p",null,"Il existe une multitude d'arbres binaires diff\xe9rents qui ont des propri\xe9t\xe9s diff\xe9rentes. Cela permet de s'adapter \xe0 diff\xe9rents cas d'utilisation."),(0,a.kt)("p",null,"Par exemple, dans le cadre d'une recherche, on peut vouloir que l'arbre soit le plus \xe9quilibr\xe9 possible (c'est \xe0 dire que la hauteur de l'arbre soit la plus petite possible). Cela permet de r\xe9duire le nombre de comparaisons n\xe9cessaires pour trouver un \xe9l\xe9ment dans l'arbre. C'est le cas des arbres binaires de recherche ",(0,a.kt)("strong",{parentName:"p"},"AVL"),". Cela nous force \xe0 impl\xe9menter des algorithmes d'insertion et de suppression plus complexes pour maintenir l'\xe9quilibre de l'arbre."),(0,a.kt)("p",null,"Dans d'autres cas, on peut vouloir privil\xe9gier la rapidit\xe9 d'insertion et de suppression. C'est le cas des arbres binaires de recherche ",(0,a.kt)("strong",{parentName:"p"},"Rouge-Noir"),". C'est un autre type d'arbre binaire de recherche qui permet de maintenir un arbre \xe9quilibr\xe9 mais qui ne garanti pas \xe0 tout moment que l'arbre soit le plus \xe9quilibr\xe9 possible. Cela permet de simplifier les algorithmes d'insertion et de suppression tout en restant efficace la majorit\xe9 du temps."),(0,a.kt)("h2",{id:"r\xe9sum\xe9"},"R\xe9sum\xe9"))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[7010],{9108:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var s=n(5893),i=n(1151);const a={title:"Arbres binaires",tags:["C++"]},l=void 0,t={id:"Lessons/S2/BinaryTree",title:"Arbres binaires",description:"Dans ce chapitre nous allons d\xe9couvrir une nouvelle structure de donn\xe9es: les arbres. Et plus particuli\xe8rement les arbres binaires.",source:"@site/content/Lessons/S2/06_BinaryTree.md",sourceDirName:"Lessons/S2",slug:"/Lessons/S2/BinaryTree",permalink:"/Learn--cpp_programming/Lessons/S2/BinaryTree",draft:!1,unlisted:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:6,frontMatter:{title:"Arbres binaires",tags:["C++"]},sidebar:"Lessons",previous:{title:"Hash et tableaux associatifs",permalink:"/Learn--cpp_programming/Lessons/S2/HashAndAssociativeTables"},next:{title:"Compression et encodage de donn\xe9es",permalink:"/Learn--cpp_programming/Lessons/S2/EncodingAndCompression"}},u={},d=[{value:"Profondeur d&#39;un n\u0153ud",id:"profondeur-dun-n\u0153ud",level:3},{value:"Hauteur d&#39;un arbre",id:"hauteur-dun-arbre",level:3},{value:"Arbres binaires",id:"arbres-binaires",level:2},{value:"Repr\xe9sentation d&#39;un arbre binaire",id:"repr\xe9sentation-dun-arbre-binaire",level:2},{value:"Structure par r\xe9cursivit\xe9",id:"structure-par-r\xe9cursivit\xe9",level:3},{value:"Structure par tableau",id:"structure-par-tableau",level:3},{value:"Parcours d&#39;un arbre binaire",id:"parcours-dun-arbre-binaire",level:2},{value:"Parcours en largeur",id:"parcours-en-largeur",level:3},{value:"Parcours en profondeur",id:"parcours-en-profondeur",level:3},{value:"Arbres binaires de recherche",id:"arbres-binaires-de-recherche",level:2},{value:"Insertion",id:"insertion",level:3},{value:"Recherche",id:"recherche",level:3},{value:"Suppression",id:"suppression",level:3},{value:"Une multitude d&#39;arbres binaires",id:"une-multitude-darbres-binaires",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function o(e){const r={admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mermaid:"mermaid",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Dans ce chapitre nous allons d\xe9couvrir une nouvelle structure de donn\xe9es: les arbres. Et plus particuli\xe8rement les arbres binaires."}),"\n",(0,s.jsxs)(r.p,{children:["La notion d'",(0,s.jsx)(r.strong,{children:"arbre"})," est une notion tr\xe8s importante en informatique.\nUn arbre est une ",(0,s.jsx)(r.strong,{children:"structure de donn\xe9es"})," qui permet de repr\xe9senter des donn\xe9es ",(0,s.jsx)(r.strong,{children:"hi\xe9rarchiques"})," comme par exemple des dossiers et des fichiers dans un syst\xe8me de fichiers."]}),"\n",(0,s.jsxs)(r.p,{children:["Un arbre est compos\xe9 de ",(0,s.jsx)(r.strong,{children:"n\u0153uds"}),". Chaque n\u0153ud peut avoir un nombre quelconque de ",(0,s.jsx)(r.strong,{children:"fils"}),". Un n\u0153ud qui n'a pas de fils est appel\xe9 une ",(0,s.jsx)(r.strong,{children:"feuille"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Un arbre est compos\xe9 d'un ",(0,s.jsx)(r.strong,{children:"n\u0153ud racine"})," qui est le n\u0153ud de d\xe9part de l'arbre. Il est possible d'acc\xe9der \xe0 tous les autres n\u0153uds de l'arbre \xe0 partir du n\u0153ud racine."]}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\n    A[n\u0153ud A] --\x3e B[n\u0153ud B]\n    A --\x3e C[n\u0153ud C]\n    A --\x3e D[n\u0153ud D]\n    B --\x3e E[n\u0153ud E]\n    B --\x3e F[n\u0153ud F]\n    C --\x3e G[n\u0153ud G]\n    C --\x3e H[n\u0153ud H]\n    C --\x3e I[n\u0153ud I]\n    D --\x3e J[n\u0153ud J]\n    D --\x3e K[n\u0153ud K]\n    D --\x3e L[n\u0153ud L]"}),"\n",(0,s.jsx)(r.h3,{id:"profondeur-dun-n\u0153ud",children:"Profondeur d'un n\u0153ud"}),"\n",(0,s.jsxs)(r.p,{children:["La ",(0,s.jsx)(r.strong,{children:"profondeur"})," d'un n\u0153ud est le nombre de n\u0153uds qui le s\xe9parent du n\u0153ud racine. En consid\xe9rant que la profondeur du n\u0153ud racine est 1."]}),"\n",(0,s.jsxs)(r.p,{children:["Dans notre exemple, la profondeur du n\u0153ud racine ",(0,s.jsx)(r.code,{children:"A"})," est 1. La profondeur du n\u0153ud ",(0,s.jsx)(r.code,{children:"B"})," est 2. La profondeur du n\u0153ud ",(0,s.jsx)(r.code,{children:"E"})," est 3. etc.."]}),"\n",(0,s.jsx)(r.h3,{id:"hauteur-dun-arbre",children:"Hauteur d'un arbre"}),"\n",(0,s.jsxs)(r.p,{children:["La ",(0,s.jsx)(r.strong,{children:"hauteur"})," d'un arbre est la profondeur maximale de ses n\u0153uds. C'est \xe0 dire la profondeur du n\u0153ud le plus profond."]}),"\n",(0,s.jsx)(r.h2,{id:"arbres-binaires",children:"Arbres binaires"}),"\n",(0,s.jsx)(r.p,{children:"Il existe plusieurs types d'arbres qui ont des propri\xe9t\xe9s diff\xe9rentes. On peut par exemple se limiter \xe0 un nombre maximum de fils par n\u0153ud, imposer un ordre sur les fils d'un n\u0153ud, ou encore imposer que chaque n\u0153ud ait un nombre fixe de fils."}),"\n",(0,s.jsxs)(r.p,{children:["C'est le cas des ",(0,s.jsx)(r.strong,{children:"arbres binaires"}),". Un ",(0,s.jsx)(r.strong,{children:"arbre binaire"})," est un arbre dont chaque n\u0153ud a au maximum deux fils. Un fils gauche et un fils droit."]}),"\n",(0,s.jsx)(r.p,{children:"C'est une structure de donn\xe9es tr\xe8s utilis\xe9e en informatique et c'est ce que nous allons \xe9tudier."}),"\n",(0,s.jsx)(r.h2,{id:"repr\xe9sentation-dun-arbre-binaire",children:"Repr\xe9sentation d'un arbre binaire"}),"\n",(0,s.jsx)(r.h3,{id:"structure-par-r\xe9cursivit\xe9",children:"Structure par r\xe9cursivit\xe9"}),"\n",(0,s.jsx)(r.p,{children:"Pour repr\xe9senter un arbre binaire une solution qui peut sembler naturelle est d'utiliser une structure r\xe9cursive. C'est \xe0 dire une structure qui contient des \xe9l\xe9ments de son propre type."}),"\n",(0,s.jsxs)(r.p,{children:["En effet, n'importe quel n\u0153ud de l'arbre, peut \xeatre vu comme un sous arbre binaire dont la racine est ce n\u0153ud. Ce jeu de l'esprit permet de comprendre qu'un n\u0153ud ",(0,s.jsx)(r.strong,{children:"pointe"})," vers deux autres n\u0153uds qui sont les fils gauche et droit de ce n\u0153ud."]}),"\n",(0,s.jsx)(r.p,{children:"Il peut ne pointer vers aucun n\u0153ud, dans ce cas il est une feuille. Sinon, ce n\u0153ud repr\xe9sente un embranchement de l'arbre."}),"\n",(0,s.jsx)(r.p,{children:"Mais on peut se demander comment repr\xe9senter ce lien (qui peut ne pas exister dans le cas d'une feuille) entre un n\u0153ud et ses fils."}),"\n",(0,s.jsxs)(r.p,{children:["C'est l\xe0 qu'interviennent les ",(0,s.jsx)(r.strong,{children:"pointeurs"}),". On peut repr\xe9senter ce lien en utilisant des pointeurs vers les n\u0153uds fils."]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["On ne peut pas utiliser des ",(0,s.jsx)(r.strong,{children:"r\xe9f\xe9rences"})," car elles doivent \xeatre une ",(0,s.jsx)(r.strong,{children:"r\xe9f\xe9rence vers un objet existant"}),". Or, dans le cas d'une feuille, il n'y a pas de n\u0153ud fils."]})}),"\n",(0,s.jsx)(r.p,{children:"Le pointeur lui peut \xeatre nul, c'est \xe0 dire qu'il ne pointe vers aucun objet. C'est cette particularit\xe9 qui permet de repr\xe9senter le cas d'une feuille."}),"\n",(0,s.jsxs)(r.p,{children:["Voil\xe0 \xe0 quoi ressemble la ",(0,s.jsx)(r.strong,{children:"structure"})," que l'on va utiliser pour repr\xe9senter un ",(0,s.jsx)(r.strong,{children:"arbre binaire"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"struct Node {\n    int value;\n    Node* left;\n    Node* right;\n};\n"})}),"\n",(0,s.jsx)(r.p,{children:"Elle est compos\xe9e d'un entier qui repr\xe9sente la valeur du n\u0153ud (cela peut \xeatre n'importe quel type de donn\xe9e), et de deux pointeurs vers des n\u0153uds qui repr\xe9sentent les fils gauche et droit."}),"\n",(0,s.jsxs)(r.p,{children:["C'est pratique mais cela s'accompagne des ",(0,s.jsx)(r.strong,{children:"inconv\xe9nients des pointeurs"}),". Il faut faire attention \xe0 ne pas avoir de fuites m\xe9moires (g\xe9rer l'allocation et la d\xe9sallocation de la m\xe9moire) et il faut faire attention \xe0 ne pas utiliser(d\xe9r\xe9f\xe9rencer) un pointeur qui ne pointe vers rien (pointeur nul)."]}),"\n",(0,s.jsx)(r.p,{children:"Exemple d'utilisation:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"Node* root { new Node {1, nullptr, nullptr}};\nroot->left = { new Node {2, nullptr, nullptr}};\nroot->right = { new Node {3, nullptr, nullptr}};\n\nroot->left->left = { new Node {4, nullptr, nullptr}};\n\ndelete root->left->left;\ndelete root->left;\ndelete root->right;\ndelete root;\n"})}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["\u26a0\ufe0f"," Il faut faire attention \xe0 d\xe9sallouer la m\xe9moire dans le bon ordre ! Si on d\xe9salloue le n\u0153ud racine avant ses fils, on ne pourra plus acc\xe9der aux fils pour les d\xe9sallouer. Cela provoque une ",(0,s.jsx)(r.strong,{children:"fuite de m\xe9moire"}),"."]})}),"\n",(0,s.jsxs)(r.admonition,{type:"info",children:[(0,s.jsxs)(r.p,{children:["On pourrait se limiter seulement \xe0 cette structure de ",(0,s.jsx)(r.strong,{children:"n\u0153ud"})," pour repr\xe9senter un ",(0,s.jsx)(r.strong,{children:"arbre binaire"}),". Mais cela peut \xeatre pratique d'avoir une structure d\xe9di\xe9e \xe0 l'arbre binaire qui contient un pointeur vers le n\u0153ud racine."]}),(0,s.jsxs)(r.p,{children:["Cela permet de g\xe9rer le cas o\xf9 l'arbre est ",(0,s.jsx)(r.strong,{children:"vide"})," (qui n'a pas encore de n\u0153ud racine). Cela permet aussi de cacher la structure interne de l'arbre. On peut par exemple changer la structure interne ",(0,s.jsx)(r.code,{children:"Node"})," (la structure de ",(0,s.jsx)(r.strong,{children:"n\u0153ud"}),") sans avoir \xe0 modifier le code qui l'utilise (la structure de l'arbre). L'utilisateur de l'arbre n'a pas besoin de savoir comment est repr\xe9sent\xe9 l'arbre en interne, il n'est pas cens\xe9 manipuler directement les n\u0153uds."]}),(0,s.jsxs)(r.p,{children:["Cette notion de cacher la structure interne d'un objet est appel\xe9e ",(0,s.jsx)(r.strong,{children:"encapsulation"}),". C'est une notion importante en ",(0,s.jsx)(r.strong,{children:"programmation orient\xe9e objet"}),". Vous d\xe9couvrirez cela plus en d\xe9tail l'ann\xe9e prochaine et cela sera encore plus pertinent avec la notion de ",(0,s.jsx)(r.strong,{children:"visibilit\xe9"}),"."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"struct BinaryTree {\n    Node* root;\n};\n"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:" Pointeurs intelligents "}),(0,s.jsxs)(r.p,{children:["Il existe des ",(0,s.jsx)(r.strong,{children:"pointeurs intelligents"})," qui permettent de g\xe9rer automatiquement la m\xe9moire. Ils sont d\xe9finis dans la biblioth\xe8que ",(0,s.jsx)(r.code,{children:"<memory>"}),"."]}),(0,s.jsxs)(r.p,{children:["On pourrait se servir dans notre cas du pointeur intelligent ",(0,s.jsx)(r.code,{children:"std::unique_ptr"})," qui permet de g\xe9rer automatiquement la m\xe9moire d'un objet allou\xe9 dynamiquement."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"struct Node {\n    int value;\n    std::unique_ptr<Node> left;\n    std::unique_ptr<Node> right;\n};\n"})}),(0,s.jsxs)(r.p,{children:["On peut alors utiliser la fonction ",(0,s.jsx)(r.code,{children:"std::make_unique"})," pour cr\xe9er un objet allou\xe9 dynamiquement et initialiser les pointeurs intelligents."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"std::unique_ptr<Node> root { std::make_unique<Node>(1, nullptr, nullptr)};\nroot->left = std::make_unique<Node>(2, nullptr, nullptr);\nroot->right = std::make_unique<Node>(3, nullptr, nullptr);\n"})}),(0,s.jsx)(r.p,{children:"Cela permet de ne pas avoir \xe0 g\xe9rer la d\xe9sallocation de la m\xe9moire. La structure est automatiquement d\xe9sallou\xe9e lorsque le pointeur intelligent est d\xe9truit. Cela va se faire dans le bon ordre naturellement car pour d\xe9truire une structure, il faut d'abord d\xe9truire ses membres. Ses enfants seront donc d\xe9truits avant le n\u0153ud parent."})]}),"\n",(0,s.jsx)(r.h3,{id:"structure-par-tableau",children:"Structure par tableau"}),"\n",(0,s.jsx)(r.p,{children:"Une autre fa\xe7on de repr\xe9senter un arbre binaire est d'utiliser un tableau. Cela peut sembler \xe9trange mais c'est possible."}),"\n",(0,s.jsx)(r.p,{children:"On peut repr\xe9senter un arbre binaire en utilisant un tableau en utilisant la relation entre les indices du tableau et les n\u0153uds de l'arbre."}),"\n",(0,s.jsx)(r.p,{children:"On commence par num\xe9roter le n\u0153ud racine avec l'indice 0. Ensuite, on d\xe9finit une relation entre les indices des n\u0153uds et les indices de leurs fils."}),"\n",(0,s.jsxs)(r.p,{children:["On d\xe9finit que le fils gauche d'un n\u0153ud d'indice ",(0,s.jsx)(r.code,{children:"i"})," est le n\u0153ud d'indice ",(0,s.jsx)(r.code,{children:"2*i + 1"}),". Et que le fils droit d'un n\u0153ud d'indice ",(0,s.jsx)(r.code,{children:"i"})," est le n\u0153ud d'indice ",(0,s.jsx)(r.code,{children:"2*i + 2"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Un exemple avec l'arbre suivant:"}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\n    A --\x3e B\n    A --\x3e C\n    B --\x3e D\n    B --\x3e E\n    C --\x3e F\n    C --\x3e G"}),"\n",(0,s.jsx)(r.p,{children:"On peut repr\xe9senter cet arbre avec le tableau suivant:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"[A, B, C, D, E, F, G]\n"})}),"\n",(0,s.jsxs)(r.p,{children:["En effet, le n\u0153ud ",(0,s.jsx)(r.code,{children:"A"})," est \xe0 l'indice 0. Son fils gauche est le n\u0153ud ",(0,s.jsx)(r.code,{children:"B"})," qui est \xe0 l'indice ",(0,s.jsx)(r.code,{children:"2*0 + 1 = 1"}),". Son fils droit est le n\u0153ud ",(0,s.jsx)(r.code,{children:"C"})," qui est \xe0 l'indice ",(0,s.jsx)(r.code,{children:"2*0 + 2 = 2"}),". Pour le n\u0153ud ",(0,s.jsx)(r.code,{children:"B"}),"(d'indice 1) , son fils gauche est le n\u0153ud ",(0,s.jsx)(r.code,{children:"D"})," qui est \xe0 l'indice ",(0,s.jsx)(r.code,{children:"2*1 + 1 = 3"}),". Son fils droit est le n\u0153ud ",(0,s.jsx)(r.code,{children:"E"})," qui est \xe0 l'indice ",(0,s.jsx)(r.code,{children:"2*1 + 2 = 4"}),". Etc..."]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["On peut remarquer qu'il faut un tableau de taille ",(0,s.jsxs)(r.span,{className:"katex",children:[(0,s.jsx)(r.span,{className:"katex-mathml",children:(0,s.jsx)(r.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(r.semantics,{children:[(0,s.jsxs)(r.mrow,{children:[(0,s.jsxs)(r.msup,{children:[(0,s.jsx)(r.mn,{children:"2"}),(0,s.jsx)(r.mi,{children:"n"})]}),(0,s.jsx)(r.mo,{children:"\u2212"}),(0,s.jsx)(r.mn,{children:"1"})]}),(0,s.jsx)(r.annotation,{encoding:"application/x-tex",children:"2^n - 1"})]})})}),(0,s.jsxs)(r.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(r.span,{className:"base",children:[(0,s.jsx)(r.span,{className:"strut",style:{height:"0.7477em",verticalAlign:"-0.0833em"}}),(0,s.jsxs)(r.span,{className:"mord",children:[(0,s.jsx)(r.span,{className:"mord",children:"2"}),(0,s.jsx)(r.span,{className:"msupsub",children:(0,s.jsx)(r.span,{className:"vlist-t",children:(0,s.jsx)(r.span,{className:"vlist-r",children:(0,s.jsx)(r.span,{className:"vlist",style:{height:"0.6644em"},children:(0,s.jsxs)(r.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,s.jsx)(r.span,{className:"pstrut",style:{height:"2.7em"}}),(0,s.jsx)(r.span,{className:"sizing reset-size6 size3 mtight",children:(0,s.jsx)(r.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,s.jsx)(r.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(r.span,{className:"mbin",children:"\u2212"}),(0,s.jsx)(r.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(r.span,{className:"base",children:[(0,s.jsx)(r.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(r.span,{className:"mord",children:"1"})]})]})]})," pour repr\xe9senter un arbre binaire complet de hauteur ",(0,s.jsx)(r.code,{children:"n"}),". C'est \xe0 dire un arbre binaire dont tous les niveaux sont remplis sauf \xe9ventuellement le dernier niveau qui peut ne pas \xeatre rempli."]})}),"\n",(0,s.jsxs)(r.p,{children:["Dans le cas o\xf9 l'arbre n'est pas ",(0,s.jsx)(r.strong,{children:"complet"})," (c'est \xe0 dire que tous les feuilles ne sont pas sur le m\xeame niveau ou que des n\u0153uds de l'arbre n'ont pas forc\xe9ment deux fils), on peut avoir des trous dans le tableau. C'est \xe0 dire des cases du tableau qui ne sont pas utilis\xe9es."]}),"\n",(0,s.jsx)(r.p,{children:"Par exemple, pour l'arbre suivant:"}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\n    A --\x3e B\n    A --\x3e C\n    C --\x3e D\n    C --\x3e E\n    E --\x3e F\n    D --\x3e H"}),"\n",(0,s.jsx)(r.p,{children:"On peut repr\xe9senter cet arbre avec le tableau suivant:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"[A, B, C, _, _, D, E, _, _, _, _, H, _, F, _]\n"})}),"\n",(0,s.jsx)(r.p,{children:"Cette repr\xe9sentation est int\xe9ressante car elle permet de repr\xe9senter un arbre binaire sans avoir \xe0 utiliser de pointeurs. Mais elle a aussi l'inconv\xe9nient de ne pas \xeatre tr\xe8s efficace quand l'arbre n'est pas compl\xe8tement rempli. En effet, on peut avoir beaucoup de trous dans le tableau. Cela peut \xeatre probl\xe9matique si l'arbre a une hauteur importante."}),"\n",(0,s.jsxs)(r.p,{children:["De plus il faut un moyen de repr\xe9senter les trous dans le tableau. On peut par exemple utiliser une valeur sp\xe9ciale qui ne peut pas \xeatre une valeur valide pour un n\u0153ud. Par exemple, on peut utiliser la valeur ",(0,s.jsx)(r.code,{children:"-1"})," pour repr\xe9senter un trou dans le tableau. Ou alors on peut utiliser ",(0,s.jsx)(r.code,{children:"std::optional"})," pour repr\xe9senter un n\u0153ud qui n'existe pas."]}),"\n",(0,s.jsx)(r.h2,{id:"parcours-dun-arbre-binaire",children:"Parcours d'un arbre binaire"}),"\n",(0,s.jsx)(r.p,{children:"Il existe plusieurs fa\xe7ons de parcourir les diff\xe9rents n\u0153uds d'un arbre binaire. On peut par exemple parcourir l'arbre en largeur ou en profondeur."}),"\n",(0,s.jsx)(r.p,{children:"Donnons nous l'arbre suivant:"}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\n    A --\x3e B\n    A --\x3e C\n    B --\x3e D\n    B --\x3e E\n    C --\x3e F\n    C --\x3e G"}),"\n",(0,s.jsx)(r.h3,{id:"parcours-en-largeur",children:"Parcours en largeur"}),"\n",(0,s.jsxs)(r.p,{children:["Le parcours en largeur consiste \xe0 parcourir l'arbre en commen\xe7ant par le n\u0153ud racine puis en parcourant les n\u0153uds de ",(0,s.jsx)(r.strong,{children:"chaque niveau"})," de profondeur de l'arbre de gauche \xe0 droite."]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"Cela correspond \xe0 l'ordre dans lequel sont rang\xe9es les donn\xe9es lorsque l'on repr\xe9sente un arbre binaire par un tableau."})}),"\n",(0,s.jsx)(r.h3,{id:"parcours-en-profondeur",children:"Parcours en profondeur"}),"\n",(0,s.jsxs)(r.p,{children:["Le parcours en profondeur consiste \xe0 parcourir l'arbre de la racine vers les feuilles par r\xe9cursion dans les ",(0,s.jsx)(r.strong,{children:"sous-arbres"})," gauche et droite. On peut parcourir l'arbre en profondeur de diff\xe9rentes fa\xe7ons:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Parcours en profondeur ",(0,s.jsx)(r.strong,{children:"pr\xe9fixe"})," (ou ",(0,s.jsx)(r.strong,{children:"pr\xe9-ordre"}),"): on parcourt d'abord le n\u0153ud racine, puis le sous-arbre gauche et enfin le sous-arbre droit."]}),"\n",(0,s.jsxs)(r.li,{children:["Parcours en profondeur ",(0,s.jsx)(r.strong,{children:"infixe"})," (ou ",(0,s.jsx)(r.strong,{children:"sym\xe9trique"}),"): on parcourt d'abord le sous-arbre gauche, puis le n\u0153ud racine et enfin le sous-arbre droit."]}),"\n",(0,s.jsxs)(r.li,{children:["Parcours en profondeur ",(0,s.jsx)(r.strong,{children:"postfixe"})," (ou ",(0,s.jsx)(r.strong,{children:"post-ordre"}),"): on parcourt d'abord le sous-arbre gauche, puis le sous-arbre droit et enfin le n\u0153ud racine."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Exemple de parcours Pour l'arbre suivant:"}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\n    A --\x3e B\n    A --\x3e C\n    B --\x3e D\n    B --\x3e E\n    C --\x3e F\n    C --\x3e G"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Parcours en ",(0,s.jsx)(r.strong,{children:"largeur"}),": ",(0,s.jsx)(r.code,{children:"A B C D E F G"})]}),"\n",(0,s.jsxs)(r.li,{children:["Parcours en profondeur ",(0,s.jsx)(r.strong,{children:"pr\xe9fixe"}),": ",(0,s.jsx)(r.code,{children:"A B D E C F G"})]}),"\n",(0,s.jsxs)(r.li,{children:["Parcours en profondeur ",(0,s.jsx)(r.strong,{children:"infixe"}),": ",(0,s.jsx)(r.code,{children:"D B E A F C G"})]}),"\n",(0,s.jsxs)(r.li,{children:["Parcours en profondeur ",(0,s.jsx)(r.strong,{children:"postfixe"}),": ",(0,s.jsx)(r.code,{children:"D E B F G C A"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"arbres-binaires-de-recherche",children:"Arbres binaires de recherche"}),"\n",(0,s.jsx)(r.p,{children:"Une fois que l'on a vu comment repr\xe9senter un arbre binaire, on peut se demander \xe0 quoi cela peut servir. On peut par exemple se demander comment faire une recherche efficace dans un arbre binaire."}),"\n",(0,s.jsxs)(r.p,{children:["Un ",(0,s.jsx)(r.strong,{children:"arbre binaire de recherche"})," est un ",(0,s.jsx)(r.strong,{children:"arbre binaire"})," qui a la particularit\xe9 d'\xeatre ",(0,s.jsx)(r.strong,{children:"ordonn\xe9"}),". On va imposer un ordre sur les valeurs des n\u0153uds de l'arbre."]}),"\n",(0,s.jsxs)(r.p,{children:["Dans notre cas on va imposer que pour chaque n\u0153ud, toutes les valeurs des n\u0153uds du ",(0,s.jsx)(r.strong,{children:"sous-arbre gauche"})," sont ",(0,s.jsx)(r.strong,{children:"inf\xe9rieures"})," \xe0 la valeur du n\u0153ud et toutes les valeurs des n\u0153uds du ",(0,s.jsx)(r.strong,{children:"sous-arbre droit"})," sont ",(0,s.jsx)(r.strong,{children:"sup\xe9rieures"})," \xe0 la valeur du n\u0153ud."]}),"\n",(0,s.jsx)(r.p,{children:"Le premier \xe9l\xe9ment ins\xe9r\xe9 dans l'arbre devient la racine. Ensuite, il suffit de mettre \xe0 gauche les \xe9l\xe9ments plus petits et \xe0 droite les \xe9l\xe9ments plus grands. C'est cette particularit\xe9 qui rend les arbres binaires de recherche int\xe9ressants."}),"\n",(0,s.jsx)(r.p,{children:"Cela permet de faire des recherches efficaces dans l'arbre. Gr\xe2ce \xe0 la relation d'ordre entre les n\u0153uds, on peut savoir dans quel sous-arbre se trouve la valeur recherch\xe9e et effectuer une recherche rappelant le fonctionnement de la recherche dichotomique."}),"\n",(0,s.jsx)(r.h3,{id:"insertion",children:"Insertion"}),"\n",(0,s.jsx)(r.p,{children:"L'insertion dans un arbre binaire de recherche est assez simple. Il suffit de trouver le bon endroit pour ins\xe9rer le nouveau n\u0153ud en respectant la relation d'ordre entre les n\u0153uds."}),"\n",(0,s.jsx)(r.p,{children:"On commence par comparer la valeur du nouveau n\u0153ud avec la valeur du n\u0153ud racine. Si la valeur du nouveau n\u0153ud est inf\xe9rieure \xe0 la valeur du n\u0153ud racine, on ins\xe8re le nouveau n\u0153ud dans le sous-arbre gauche. Sinon, on ins\xe8re le nouveau n\u0153ud dans le sous-arbre droit."}),"\n",(0,s.jsx)(r.p,{children:"On r\xe9p\xe8te cette op\xe9ration jusqu'\xe0 trouver un n\u0153ud qui n'a pas de fils dans la direction o\xf9 l'on souhaite ins\xe9rer le nouveau n\u0153ud. On ins\xe8re alors le nouveau n\u0153ud \xe0 cet endroit."}),"\n",(0,s.jsx)(r.h3,{id:"recherche",children:"Recherche"}),"\n",(0,s.jsx)(r.p,{children:"La recherche dans un arbre binaire de recherche est similaire \xe0 la recherche dichotomique. Pour commencer, on compare la valeur recherch\xe9e avec la valeur du n\u0153ud racine. Si la valeur recherch\xe9e est inf\xe9rieure \xe0 la valeur du n\u0153ud racine, on effectue la recherche dans le sous-arbre gauche. Sinon, on effectue la recherche dans le sous-arbre droit."}),"\n",(0,s.jsx)(r.p,{children:"On r\xe9p\xe8te cette op\xe9ration jusqu'\xe0 trouver la valeur recherch\xe9e ou jusqu'\xe0 arriver \xe0 un n\u0153ud qui n'a pas de fils dans la direction o\xf9 l'on souhaite continuer la recherche. Dans ce cas, on peut conclure que la valeur recherch\xe9e n'est pas dans l'arbre."}),"\n",(0,s.jsxs)(r.p,{children:["L'int\xe9r\xeat de la recherche dans un arbre binaire de recherche est que l'on peut exclure une partie de l'arbre \xe0 chaque \xe9tape de la recherche. Cela permet de r\xe9duire le nombre de comparaisons n\xe9cessaires pour trouver un \xe9l\xe9ment dans l'arbre. C'est ce qui rend la recherche dans un arbre binaire de recherche efficace. C'est une complexit\xe9 en ",(0,s.jsxs)(r.span,{className:"katex",children:[(0,s.jsx)(r.span,{className:"katex-mathml",children:(0,s.jsx)(r.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(r.semantics,{children:[(0,s.jsxs)(r.mrow,{children:[(0,s.jsx)(r.mi,{children:"O"}),(0,s.jsx)(r.mo,{stretchy:"false",children:"("}),(0,s.jsx)(r.mi,{children:"l"}),(0,s.jsx)(r.mi,{children:"o"}),(0,s.jsx)(r.mi,{children:"g"}),(0,s.jsx)(r.mo,{stretchy:"false",children:"("}),(0,s.jsx)(r.mi,{children:"n"}),(0,s.jsx)(r.mo,{stretchy:"false",children:")"}),(0,s.jsx)(r.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(r.annotation,{encoding:"application/x-tex",children:"O(log(n))"})]})})}),(0,s.jsx)(r.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(r.span,{className:"base",children:[(0,s.jsx)(r.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(r.span,{className:"mopen",children:"("}),(0,s.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"o"}),(0,s.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,s.jsx)(r.span,{className:"mopen",children:"("}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(r.span,{className:"mclose",children:"))"})]})})]}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"suppression",children:"Suppression"}),"\n",(0,s.jsx)(r.p,{children:"La suppression dans un arbre binaire de recherche est plus complexe que l'insertion et la recherche. Il faut faire attention \xe0 ne pas casser la relation d'ordre entre les n\u0153uds."}),"\n",(0,s.jsx)(r.p,{children:"Il existe trois cas de figure:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Le n\u0153ud \xe0 supprimer est une feuille: il suffit de supprimer le n\u0153ud."}),"\n",(0,s.jsx)(r.li,{children:"Le n\u0153ud \xe0 supprimer a un seul fils: il suffit de supprimer le n\u0153ud et de le remplacer par son fils."}),"\n",(0,s.jsx)(r.li,{children:"Le n\u0153ud \xe0 supprimer a deux fils: il faut trouver le n\u0153ud qui va remplacer le n\u0153ud \xe0 supprimer tout en conservant la relation d'ordre entre les n\u0153uds."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Dans le cas 3, il faut faire attention \xe0 ne pas casser la relation d'ordre entre les n\u0153uds. Je rappelle que pour chaque n\u0153ud, toutes les valeurs des n\u0153uds du sous-arbre gauche sont inf\xe9rieures \xe0 la valeur du n\u0153ud et toutes les valeurs des n\u0153uds du sous-arbre droit sont sup\xe9rieures \xe0 la valeur du n\u0153ud. Pour conserver cette relation d'ordre, il faut alors que le n\u0153ud qui remplace le n\u0153ud \xe0 supprimer soit plus grand que tous les n\u0153uds du sous-arbre gauche ou plus petit que tous les n\u0153uds du sous-arbre droit."}),"\n",(0,s.jsx)(r.p,{children:"On va donc par exemple chercher le n\u0153ud le plus \xe0 gauche du sous-arbre droit. Ce n\u0153ud est le plus petit n\u0153ud du sous-arbre droit. Il est donc plus grand que tous les n\u0153uds du sous-arbre gauche et plus petit que tous les n\u0153uds du sous-arbre droit. Il peut donc remplacer le n\u0153ud \xe0 supprimer tout en conservant la relation d'ordre entre les n\u0153uds."}),"\n",(0,s.jsx)(r.h2,{id:"une-multitude-darbres-binaires",children:"Une multitude d'arbres binaires"}),"\n",(0,s.jsx)(r.p,{children:"Il existe une multitude d'arbres binaires diff\xe9rents qui ont des propri\xe9t\xe9s diff\xe9rentes. Cela permet de s'adapter \xe0 diff\xe9rents cas d'utilisation."}),"\n",(0,s.jsxs)(r.p,{children:["Par exemple, dans le cadre d'une recherche, on peut vouloir que l'arbre soit le plus \xe9quilibr\xe9 possible (c'est \xe0 dire que la hauteur de l'arbre soit la plus petite possible). Cela permet de r\xe9duire le nombre de comparaisons n\xe9cessaires pour trouver un \xe9l\xe9ment dans l'arbre. C'est le cas des arbres binaires de recherche ",(0,s.jsx)(r.strong,{children:"AVL"}),". Cela nous force \xe0 impl\xe9menter des algorithmes d'insertion et de suppression plus complexes pour maintenir l'\xe9quilibre de l'arbre."]}),"\n",(0,s.jsxs)(r.p,{children:["Dans d'autres cas, on peut vouloir privil\xe9gier la rapidit\xe9 d'insertion et de suppression. C'est le cas des arbres binaires de recherche ",(0,s.jsx)(r.strong,{children:"Rouge-Noir"}),". C'est un autre type d'arbre binaire de recherche qui permet de maintenir un arbre \xe9quilibr\xe9 mais qui ne garantit pas \xe0 tout moment que l'arbre soit le plus \xe9quilibr\xe9 possible. Cela permet de simplifier les algorithmes d'insertion et de suppression tout en restant efficace la majorit\xe9 du temps."]}),"\n",(0,s.jsx)(r.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Un ",(0,s.jsx)(r.strong,{children:"arbre"})," est une ",(0,s.jsx)(r.strong,{children:"structure de donn\xe9es"})," qui permet de repr\xe9senter des donn\xe9es hi\xe9rarchiques."]}),"\n",(0,s.jsxs)(r.li,{children:["Un arbre est compos\xe9 de ",(0,s.jsx)(r.strong,{children:"n\u0153uds"}),". Chaque n\u0153ud peut avoir un nombre quelconque de fils. Un n\u0153ud qui n'a pas de fils est appel\xe9 une feuille."]}),"\n",(0,s.jsxs)(r.li,{children:["Un arbre est compos\xe9 d'un ",(0,s.jsx)(r.strong,{children:"n\u0153ud racine"})," qui est le n\u0153ud de d\xe9part de l'arbre. Il est possible d'acc\xe9der \xe0 tous les autres n\u0153uds de l'arbre \xe0 partir du n\u0153ud racine."]}),"\n",(0,s.jsxs)(r.li,{children:["La ",(0,s.jsx)(r.strong,{children:"profondeur"})," d'un n\u0153ud est le nombre de n\u0153uds qui le s\xe9parent du n\u0153ud racine."]}),"\n",(0,s.jsxs)(r.li,{children:["La ",(0,s.jsx)(r.strong,{children:"hauteur"})," d'un arbre est la profondeur maximale de ses n\u0153uds. C'est \xe0 dire la profondeur du n\u0153ud le plus profond."]}),"\n",(0,s.jsxs)(r.li,{children:["Un ",(0,s.jsx)(r.strong,{children:"arbre binaire"})," est un arbre dont chaque n\u0153ud a au ",(0,s.jsx)(r.strong,{children:"maximum deux fils"}),". Un fils ",(0,s.jsx)(r.strong,{children:"gauche"})," et un fils ",(0,s.jsx)(r.strong,{children:"droit"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Un ",(0,s.jsx)(r.strong,{children:"arbre binaire"})," peut \xeatre repr\xe9sent\xe9 par une ",(0,s.jsx)(r.strong,{children:"structure r\xe9cursive"})," (C'est \xe0 dire une structure qui contient des \xe9l\xe9ments de son propre type) ou par un tableau."]}),"\n",(0,s.jsxs)(r.li,{children:["Un ",(0,s.jsx)(r.strong,{children:"arbre binaire de recherche"})," est un arbre binaire qui a la particularit\xe9 d'\xeatre ",(0,s.jsx)(r.strong,{children:"ordonn\xe9"}),". On va imposer un ordre sur les valeurs des n\u0153uds de l'arbre. Cela va permettre de faire des recherches efficaces dans l'arbre."]}),"\n",(0,s.jsx)(r.li,{children:"Il existe une multitude d'arbres binaires diff\xe9rents qui ont des propri\xe9t\xe9s diff\xe9rentes. Cela permet de s'adapter \xe0 diff\xe9rents cas d'utilisation (pour optimiser la recherche, l'insertion, la suppression, etc...)"}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>l});var s=n(7294);const i={},a=s.createContext(i);function l(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);
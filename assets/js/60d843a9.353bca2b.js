"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[153],{5868:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var a=n(5893),r=n(1151);const t={title:"TD5 - Hachage et tableaux associatifs"},i=void 0,c={id:"TDs/S2/hashAndAssociativeTables",title:"TD5 - Hachage et tableaux associatifs",description:"Dans ce TD nous allons mettre en pratique les notions vues en cours sur les tables de hachage et les tables associatives.",source:"@site/content/TDs/S2/05_hashAndAssociativeTables.md",sourceDirName:"TDs/S2",slug:"/TDs/S2/hashAndAssociativeTables",permalink:"/Learn--cpp_programming/TDs/S2/hashAndAssociativeTables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"TD5 - Hachage et tableaux associatifs"},sidebar:"TDs",previous:{title:"TD4 - D\xe9duction de type et biblioth\xe8que standard",permalink:"/Learn--cpp_programming/TDs/S2/AutoAndAlgorithm"},next:{title:"TD6 - Arbres binaires",permalink:"/Learn--cpp_programming/TDs/S2/binaryTree"}},l={},d=[{value:"Exercice 1 (fonction de hachage)",id:"exercice-1-fonction-de-hachage",level:2},{value:"Exercice 2 (R\xe9paration de Robots)",id:"exercice-2-r\xe9paration-de-robots",level:2},{value:"Exercice 3 (hash sur une structure)",id:"exercice-3-hash-sur-une-structure",level:2}];function o(e){const s={admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mspace:"mspace",msup:"msup",mtext:"mtext",munderover:"munderover",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Dans ce TD nous allons mettre en pratique les notions vues en cours sur les tables de hachage et les tables associatives."}),"\n",(0,a.jsx)(s.h2,{id:"exercice-1-fonction-de-hachage",children:"Exercice 1 (fonction de hachage)"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\xc9crire une fonction de hachage qui prend en param\xe8tre une cha\xeene de caract\xe8res, fait la somme des valeurs ASCII des caract\xe8res et renvoie un entier compris entre 0 et un maximum donn\xe9 nomm\xe9 ",(0,a.jsx)(s.code,{children:"max"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["Nous utiliserons une simple somme des codes ASCII des caract\xe8res suivie d'un modulo pour obtenir un entier compris entre 0 et ",(0,a.jsx)(s.code,{children:"max"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Ce que nous venons de faire s'appel la technique dite de ",(0,a.jsx)(s.strong,{children:"folding"})," (pliage en fran\xe7ais). Cela consiste \xe0 d\xe9couper notre donn\xe9e (ici une cha\xeene de caract\xe8res) en plusieurs parties, calculer une valeur pour chacune de ces parties, sommer ces valeurs et enfin appliquer un modulo pour obtenir un entier compris entre 0 et ",(0,a.jsx)(s.code,{children:"max"}),"."]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["On veux se ramener \xe0 un entier compris entre 0 et ",(0,a.jsx)(s.code,{children:"max"}),' car cette valeur hach\xe9e sert g\xe9n\xe9ralement d\'index dans un tableau (table de hachage). Hors on souhaite un tableau de taille "raisonnable" en m\xe9moire, donc on limite la taille de ce tableau \xe0 ',(0,a.jsx)(s.code,{children:"max"}),".\nLe choix de ",(0,a.jsx)(s.code,{children:"max"})," d\xe9pend du contexte d'utilisation de la table de hachage, g\xe9n\xe9ralement on choisit une valeur qui est une puissance de 2 (par exemple 1024, 2048, 4096, etc.)."]})}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:'\xc9crire une nouvelle fonction de hachage sur une cha\xeene de caract\xe8res pour laquelle l\'ordre des caract\xe8res a de l\'importance. Par exemple, les cha\xeenes de caract\xe8res "abc" et "cba" ne doivent pas avoir la m\xeame valeur hach\xe9e. Ce qui est le cas avec la fonction de hachage pr\xe9c\xe9dente.'}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Utiliser par exemple la somme des codes ASCII des caract\xe8res multipli\xe9e par leur position dans la cha\xeene de caract\xe8res."}),"\n"]}),"\n",(0,a.jsxs)(s.ol,{start:"3",children:["\n",(0,a.jsxs)(s.li,{children:["\xc9crire une fonction de hachage sur une cha\xeene de caract\xe8res utilisant la technique de ",(0,a.jsx)(s.strong,{children:"polynomial rolling hash"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["Voila le prototype de la fonction \xe0 \xe9crire: ",(0,a.jsx)(s.code,{children:"size_t polynomialRollingHash(const std::string& s, size_t p, size_t m)"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["Nous allons utiliser la technique dite de ",(0,a.jsx)(s.strong,{children:"polynomial rolling hash"}),". Cette technique consiste \xe0 calculer le hash d'une cha\xeene de caract\xe8res en fonction du hash de la cha\xeene de caract\xe8res pr\xe9c\xe9dente. Cela permet de prendre en compte l'ordre des caract\xe8res dans la cha\xeene de caract\xe8res."]}),"\n",(0,a.jsx)(s.p,{children:"Pour cela, nous allons utiliser la formule suivante:"}),"\n",(0,a.jsx)(s.span,{className:"katex-display",children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mtext,{children:"hash"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsxs)(s.munderover,{children:[(0,a.jsx)(s.mo,{children:"\u2211"}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mn,{children:"0"})]}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:"\xd7"}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"i"})]}),(0,a.jsx)(s.mspace,{}),(0,a.jsx)(s.mspace,{width:"1em"}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{mathvariant:"normal",children:"m"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"o"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"d"})]}),(0,a.jsx)(s.mtext,{children:"\u2009"}),(0,a.jsx)(s.mtext,{children:"\u2009"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\text{hash}(s) = \\sum_{i=0}^{n-1} (s[i] \\times p^i \\mod m)"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord text",children:(0,a.jsx)(s.span,{className:"mord",children:"hash"})}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"3.0788em",verticalAlign:"-1.2777em"}}),(0,a.jsx)(s.span,{className:"mop op-limits",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsxs)(s.span,{className:"vlist",style:{height:"1.8011em"},children:[(0,a.jsxs)(s.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(s.span,{className:"mord mtight",children:[(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"}),(0,a.jsx)(s.span,{className:"mrel mtight",children:"="}),(0,a.jsx)(s.span,{className:"mord mtight",children:"0"})]})})]}),(0,a.jsxs)(s.span,{style:{top:"-3.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(s.span,{children:(0,a.jsx)(s.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,a.jsxs)(s.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(s.span,{className:"mord mtight",children:[(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"}),(0,a.jsx)(s.span,{className:"mbin mtight",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mord mtight",children:"1"})]})})]})]}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"1.2777em"},children:(0,a.jsx)(s.span,{})})})]})}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1.0691em",verticalAlign:"-0.1944em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8747em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"})})]})})})})})]}),(0,a.jsx)(s.span,{className:"mspace allowbreak"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"1em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:(0,a.jsx)(s.span,{className:"mord",children:(0,a.jsx)(s.span,{className:"mord mathrm",children:"mod"})})}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,a.jsx)(s.p,{children:"Avec:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"s"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"})]})})]})," la cha\xeene de caract\xe8res"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"n"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," la taille de la cha\xeene de caract\xe8res"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"s[i]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," le code ASCII du caract\xe8re \xe0 l'index ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"i"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," dans la cha\xeene de caract\xe8res"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"p"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"p"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"})]})})]})," un nombre (g\xe9n\xe9ralement un nombre premier)"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"m"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"})]})})]})," un nombre (g\xe9n\xe9ralement une puissance de 2)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"exercice-2-r\xe9paration-de-robots",children:"Exercice 2 (R\xe9paration de Robots)"}),"\n",(0,a.jsxs)(s.p,{children:["l'id\xe9e de cet exercice est d'utiliser une ",(0,a.jsx)(s.strong,{children:"table associative"})," pour r\xe9soudre un probl\xe8me."]}),"\n",(0,a.jsx)(s.p,{children:"Nous avons des robots qui sont en panne. Chaque robot est identifi\xe9 par son nom compos\xe9 de 2 lettres majuscules. Je vous donne la liste des robots en panne et les diff\xe9rentes d\xe9penses pour les r\xe9parer."}),"\n",(0,a.jsxs)(s.p,{children:["Voil\xe0 la fonction qui g\xe9n\xe8re la liste des r\xe9parations effectu\xe9es en donnant sous forme de ",(0,a.jsx)(s.code,{children:"std::pair"})," le nom du robot et le co\xfbt de la r\xe9paration:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"#include <iostream>\n#include <vector>\n\nstd::vector<std::pair<std::string, float>> getRobotsFix(size_t size) {\n    std::vector<std::pair<std::string, float>> robotsFix;\n    robotsFix.reserve(size);\n    for (size_t i {0}; i < size; ++i) {\n        // random name \n        std::string robotName {\"\"};\n        robotName.reserve(2);\n        for(size_t j {0}; j < 2; ++j) {\n            robotName.push_back('A' + rand() % 26);\n        }\n\n        // random cost\n        float cost {static_cast<float>(rand()) / RAND_MAX * 1000.0f};\n        robotsFix.push_back(std::make_pair(robotName, cost));\n    }\n    return robotsFix;\n}\n"})}),"\n",(0,a.jsx)(s.p,{children:"J'aimerai \xeatre capable de lister pour un robot donn\xe9 l'ensemble des r\xe9parations effectu\xe9es pour ce robot. Par exemple, pour le robot \"AB\", j'aimerai avoir la liste des r\xe9parations effectu\xe9es pour ce robot."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Pour cela, je vous demande d'\xe9crire une fonction qui prend en param\xe8tre la liste des r\xe9parations effectu\xe9es et qui retourne une table associative (un ",(0,a.jsx)(s.code,{children:"std::unordered_map"}),") qui associe \xe0 chaque robot la liste des r\xe9parations effectu\xe9es pour ce robot (sous forme de ",(0,a.jsx)(s.code,{children:"std::vector<float>"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["\xc9crire une fonction qui prend en un ",(0,a.jsx)(s.code,{children:"std::vector<float>"})," et qui retourne la somme des \xe9l\xe9ments de ce vecteur."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Utiliser les deux fonctions pr\xe9c\xe9dentes pour afficher la somme des r\xe9parations effectu\xe9es pour chaque robot. (\xe0 partir de la liste des r\xe9parations effectu\xe9es obtenue avec la fonction ",(0,a.jsx)(s.code,{children:"getRobotsFix"}),")."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"exercice-3-hash-sur-une-structure",children:"Exercice 3 (hash sur une structure)"}),"\n",(0,a.jsx)(s.p,{children:"Donnons nous les enums et structures suivantes:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"enum class CardKind {\n    Heart,\n    Diamond,\n    Club,\n    Spade,\n};\n\nenum class CardValue {\n    Two,\n    Three,\n    Four,\n    Five,\n    Six,\n    Seven,\n    Eight,\n    Nine,\n    Ten,\n    Jack,\n    Queen,\n    King,\n    Ace,\n};\n\nstruct Card {\n    CardKind kind;\n    CardValue value;\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["L'id\xe9e de cet exercice est de cr\xe9er une fonction de hachage pour la structure ",(0,a.jsx)(s.code,{children:"Card"})," pour que l'on puisse utiliser cette structure comme cl\xe9 dans une table de hachage."]}),"\n",(0,a.jsx)(s.p,{children:"la biblioth\xe8que standard C++ fournit une fonction de hachage pour les types de base (entiers, flottants, etc.) et les cha\xeenes de caract\xe8res. Mais elle ne fournit pas de fonction de hachage pour nos structures."}),"\n",(0,a.jsx)(s.p,{children:"De la m\xeame fa\xe7on que l'on a surcharg\xe9 les op\xe9rateurs pour nos structures, on va pouvoir surcharger la fonction de hachage de notre structure."}),"\n",(0,a.jsxs)(s.p,{children:["Il faut deux choses pour pouvoir utiliser une ",(0,a.jsx)(s.strong,{children:"structure"})," comme cl\xe9 dans une table de hachage:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"une fonction de hachage de cette structure"}),"\n",(0,a.jsxs)(s.li,{children:["un op\xe9rateur ",(0,a.jsx)(s.code,{children:"=="})," pour comparer deux structures"]}),"\n"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Surchargez l'op\xe9rateur"})," ",(0,a.jsx)(s.code,{children:"=="})," pour la structure ",(0,a.jsx)(s.code,{children:"Card"})," (deux cartes sont \xe9gales si elles ont la m\xeame valeur et la m\xeame couleur)."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["\xc9crire une ",(0,a.jsx)(s.strong,{children:"m\xe9thode"})," ",(0,a.jsx)(s.code,{children:"hash"})," pour la structure ",(0,a.jsx)(s.code,{children:"Card"})," qui retourne un entier;"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Voil\xe0 le code qui va faire en sorte que la biblioth\xe8que standard utilise notre m\xe9thode ",(0,a.jsx)(s.code,{children:"hash"})," pour la structure ",(0,a.jsx)(s.code,{children:"Card"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"namespace std {\n    template<>\n    struct hash<Card> {\n        size_t operator()(const Card& card) const {\n            return card.hash();\n        }\n    };\n}\n"})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["Je ne vous demande pas de comprendre ce code, il y a des notions plus complexes que vous d\xe9couvrirez l'ann\xe9e prochaine. Gardez simplement en t\xeate que ce code permet de faire en sorte que la biblioth\xe8que standard utilise notre m\xe9thode ",(0,a.jsx)(s.code,{children:"hash"})," pour la structure ",(0,a.jsx)(s.code,{children:"Card"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Je vous donne \xe9galement une fonction qui permet de g\xe9n\xe9rer une liste de cartes al\xe9atoires:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"#include <vector>\nstd::vector<Card> getCards(size_t size) {\n    std::vector<Card> cards;\n    cards.reserve(size);\n    for (size_t i {0}; i < size; ++i) {\n        Card card;\n        card.kind = static_cast<CardKind>(rand() % 4);\n        card.value = static_cast<CardValue>(rand() % 13);\n        cards.push_back(card);\n    }\n    return cards;\n}\n"})}),"\n",(0,a.jsxs)(s.ol,{start:"3",children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Utiliser la fonction ",(0,a.jsx)(s.code,{children:"getCards"})," pour g\xe9n\xe9rer une liste de 100 cartes al\xe9atoires. Utiliser une table de hachage ",(0,a.jsx)(s.code,{children:"std::unordered_map"})," pour compter le nombre de fois que chaque carte appara\xeet dans la liste et afficher le r\xe9sultat."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Trouver une fonction de hachage de notre structure ",(0,a.jsx)(s.code,{children:"Card"})," revient \xe0 trouver une fa\xe7on de transformer une carte en un entier. Il y a de nombreuses fa\xe7on se s'y prendre mais pour ce cas pr\xe9cis il existe une fonction de hachage dite ",(0,a.jsx)(s.strong,{children:"parfaite"}),". On peux se rendre compte qu'il y a seulement ",(0,a.jsx)(s.strong,{children:"52"})," cartes diff\xe9rentes. On peux donc utiliser une fonction de hachage qui retourne un entier compris entre 0 et 51 avec un nombre diff\xe9rent pour chaque carte et donc sans collision."]}),"\n",(0,a.jsxs)(s.p,{children:["Trouvez un moyen simple (\xe0 l'aide d'une simple multiplication et des cast) d'am\xe9liorer la fonction de hachage de notre structure ",(0,a.jsx)(s.code,{children:"Card"})," pour quelle soit ",(0,a.jsx)(s.strong,{children:"parfaite"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var a=n(7294);const r={},t=a.createContext(r);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);
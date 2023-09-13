"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[2263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"TD4 - Boucles",sidebar_position:4},l=void 0,o={unversionedId:"TDs/S1/Loops",id:"TDs/S1/Loops",title:"TD4 - Boucles",description:"Exercice 1 (For)",source:"@site/content/TDs/S1/04_Loops.md",sourceDirName:"TDs/S1",slug:"/TDs/S1/Loops",permalink:"/Learn--cpp_programming/TDs/S1/Loops",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"TD4 - Boucles",sidebar_position:4},sidebar:"TDs",previous:{title:"TD3 - Conditions",permalink:"/Learn--cpp_programming/TDs/S1/Conditions"},next:{title:"TD5 - Tableaux",permalink:"/Learn--cpp_programming/TDs/S1/Arrays"}},s={},u=[{value:"Exercice 1 (For)",id:"exercice-1-for",level:2},{value:"Exercice 2 (While)",id:"exercice-2-while",level:2},{value:"Exercice 3 (Somme d&#39;entiers positifs)",id:"exercice-3-somme-dentiers-positifs",level:2},{value:"Exercice 4 (rendu de monnaie)",id:"exercice-4-rendu-de-monnaie",level:2},{value:"Exercice 5 (entr\xe9e utilisateur)",id:"exercice-5-entr\xe9e-utilisateur",level:2},{value:"Exercice 6 (conjecture de Syracuse)",id:"exercice-6-conjecture-de-syracuse",level:2},{value:"Exercice 7 (ASCII art)",id:"exercice-7-ascii-art",level:2},{value:"Exercice 8 (Le juste prix)",id:"exercice-8-le-juste-prix",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"exercice-1-for"},"Exercice 1 (For)"),(0,i.kt)("p",null,"Faire une boucle ",(0,i.kt)("strong",{parentName:"p"},"for")," qui affiche les nombres ",(0,i.kt)("strong",{parentName:"p"},"pairs")," inf\xe9rieurs ou \xe9gal \xe0 un nombre entr\xe9 par l'utilisateur de diff\xe9rentes fa\xe7ons:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"en utilisant un condition et l'op\xe9rateur ",(0,i.kt)("strong",{parentName:"li"},"modulo")),(0,i.kt)("li",{parentName:"ol"},"en utilisant le mot cl\xe9 ",(0,i.kt)("strong",{parentName:"li"},"continue")),(0,i.kt)("li",{parentName:"ol"},"en utilisant une boucle bien choisie (un nombre ",(0,i.kt)("strong",{parentName:"li"},"pair")," est un nombre qui peut s'\xe9crire comme le double d'un nombre entier)")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Vous pourrez utiliser ",(0,i.kt)("strong",{parentName:"p"},"std::cin")," pour demander le nombre maximum \xe0 l'utilisateur (aucune gestion d'une \xe9ventuelle erreur de saisie n'est demand\xe9e ici).")),(0,i.kt)("h2",{id:"exercice-2-while"},"Exercice 2 (While)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\xc9crire une boucle ",(0,i.kt)("strong",{parentName:"li"},"while")," qui affichera les entiers entre ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"20"),"."),(0,i.kt)("li",{parentName:"ol"},"\xc9crire une boucle ",(0,i.kt)("strong",{parentName:"li"},"while")," qui affichera les ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," premiers multiples de ",(0,i.kt)("inlineCode",{parentName:"li"},"7"),", chacun\nsur une ligne de la forme: ",(0,i.kt)("inlineCode",{parentName:"li"},"5 fois 7 = 35"),"."),(0,i.kt)("li",{parentName:"ol"},"Refaire les deux questions pr\xe9c\xe9dentes en utilisant une boucle ",(0,i.kt)("strong",{parentName:"li"},"for"),".")),(0,i.kt)("h2",{id:"exercice-3-somme-dentiers-positifs"},"Exercice 3 (Somme d'entiers positifs)"),(0,i.kt)("p",null,"\xc9crire un programme qui demande \xe0 l\u2019utilisateur de saisir des entiers positifs (s\u2019arr\xeate d\xe8s que l\u2019utilisateur saisit un entier n\xe9gatif)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"G\xe9rer l'entr\xe9e utilisateur (et son arr\xeat) \xe0 l'aide d'une boucle ",(0,i.kt)("strong",{parentName:"li"},"while")," ou ",(0,i.kt)("strong",{parentName:"li"},"do while"),"."),(0,i.kt)("li",{parentName:"ol"},"Afficher la ",(0,i.kt)("strong",{parentName:"li"},"somme")," des entiers positifs saisis par l\u2019utilisateur."),(0,i.kt)("li",{parentName:"ol"},"Modifier le programme pour qu'il affiche \xe9galement la ",(0,i.kt)("strong",{parentName:"li"},"moyenne")," des entiers positifs saisis par l\u2019utilisateur.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Pour calculer la moyenne, il faut compter le nombre d'entiers positifs saisis par l'utilisateur.\nVous n'avez pas \xe0 stocker les entiers saisis par l'utilisateur (vous d\xe9couvrirez comment faire cela dans le prochain chapitre).")),(0,i.kt)("h2",{id:"exercice-4-rendu-de-monnaie"},"Exercice 4 (rendu de monnaie)"),(0,i.kt)("p",null,"\xc9crire un programme qui demande \xe0 l\u2019utilisateur un montant en ",(0,i.kt)("strong",{parentName:"p"},"euros")," et affiche le nombre de billets et de pi\xe8ces n\xe9cessaires pour rendre la monnaie avec le moins de billets et de pi\xe8ces possible."),(0,i.kt)("p",null,"On suppose que l\u2019on dispose de pi\xe8ces de ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"20")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"50")," centimes, de ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," euros ainsi que de billets de ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"50"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"500")," euros."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Utilisez un tableau pour stocker le nombre de pi\xe8ces et de billets \xe0 rendre."),(0,i.kt)("p",{parentName:"admonition"},"Utilisez un ",(0,i.kt)("strong",{parentName:"p"},"algorithme glouton")," qui consiste \xe0 regarder si on peut rendre la monnaie avec le plus gros billet ou pi\xe8ce possible et \xe0 recommencer avec le billet ou la pi\xe8ce suivante jusqu'\xe0 avoir rendu toute la monnaie.")),(0,i.kt)("h2",{id:"exercice-5-entr\xe9e-utilisateur"},"Exercice 5 (entr\xe9e utilisateur)"),(0,i.kt)("p",null,"\xc9crire un programme qui demande \xe0 l'utilisateur un nombre et affiche la table de multiplication de ce nombre."),(0,i.kt)("p",null,"Vous devrez g\xe9rer le cas o\xf9 l'utilisateur saisit une valeur incorrecte (un nombre n\xe9gatif ou une lettre par exemple) et redemander \xe0 l'utilisateur de saisir un nombre tant qu'il n'a pas saisi une valeur correcte."),(0,i.kt)("p",null,"Je vous invite \xe0 retourner voir l'",(0,i.kt)("a",{parentName:"p",href:"/TDs/S1/Conditions#exercice-3"},"exercice 3")," du ",(0,i.kt)("strong",{parentName:"p"},"TD2")," sur les conditions pour vous aider."),(0,i.kt)("h2",{id:"exercice-6-conjecture-de-syracuse"},"Exercice 6 (conjecture de Syracuse)"),(0,i.kt)("p",null,"\xc9crire un programme qui, \xe0 partir d\u2019un ",(0,i.kt)("strong",{parentName:"p"},"entier positif")," saisi par l\u2019utilisateur, affiche le nombre de termes de la suite de Syracuse n\xe9cessaires pour atteindre ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," (on inclut le terme de d\xe9part dans le d\xe9compte)."),(0,i.kt)("p",null,"La suite de ",(0,i.kt)("strong",{parentName:"p"},"Syracuse")," est une suite d'entiers dans laquelle chaque terme est obtenu en appliquant une fonction \xe0 son terme pr\xe9c\xe9dent. Cette fonction est d\xe9finie comme suit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"si le terme est pair, le terme suivant est \xe9gal \xe0 la ",(0,i.kt)("strong",{parentName:"li"},"moiti\xe9")," du terme pr\xe9c\xe9dent. (x/2)"),(0,i.kt)("li",{parentName:"ul"},"si le terme est impair, le terme suivant est \xe9gal \xe0 ",(0,i.kt)("strong",{parentName:"li"},"3")," fois le terme pr\xe9c\xe9dent ",(0,i.kt)("strong",{parentName:"li"},"plus 1")," (3x+1).")),(0,i.kt)("p",null,"Par exemple, si le terme de d\xe9part est ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),", la suite est :\n",(0,i.kt)("inlineCode",{parentName:"p"},"7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1, ...")),(0,i.kt)("p",null,"Ici, la suite atteint la valeur ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," au bout de 17 termes (incluant le terme de d\xe9part)."),(0,i.kt)("p",null,"Vous remarquez qu\u2019\xe0 la fin, une fois qu\u2019on est tomb\xe9 sur 1, la suite finit par r\xe9p\xe9ter ind\xe9finiment le cycle ",(0,i.kt)("inlineCode",{parentName:"p"},"4, 2, 1"),"."),(0,i.kt)("p",null,"Il est conjectur\xe9 que cette suite atteint toujours la valeur ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," quelque soit le terme de d\xe9part. Cela a d'ailleurs d\xe9j\xe0 \xe9t\xe9 v\xe9rifi\xe9e num\xe9riquement jusqu\u2019\xe0 10^20 (par ",(0,i.kt)("a",{parentName:"p",href:"https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-01031-5/S0025-5718-99-01031-5.pdf"},"Tomas Oliveira e Silva"),")."),(0,i.kt)("h2",{id:"exercice-7-ascii-art"},"Exercice 7 (ASCII art)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\xc9crire un programme qui demande \xe0 l\u2019utilisateur de saisir un ",(0,i.kt)("strong",{parentName:"li"},"entier positif")," et affiche un triangle rectangle de hauteur ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," comme dans l\u2019exemple ci-dessous.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',title:'"exemple',"d'ex\xe9cution\"":!0},"Entrez un entier positif : 5\n*\n**\n***\n****\n*****\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Essayer d'afficher un sapin de no\xebl, autrement dit un triangle rectangle isoc\xe8le de hauteur ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," et dont le sommet est compos\xe9 d'une seule \xe9toile.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',title:'"exemple',"d'ex\xe9cution\"":!0},"Entrez un entier positif : 3\n  *\n ***\n*****\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Essayer d'afficher les contours d'un carr\xe9 de c\xf4t\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," comme dans l\u2019exemple ci-dessous.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',title:'"exemple',"d'ex\xe9cution\"":!0},"Entrez un entier positif : 5\n*****\n*   *\n*   *\n*   *\n*****\n")),(0,i.kt)("h2",{id:"exercice-8-le-juste-prix"},"Exercice 8 (Le juste prix)"),(0,i.kt)("p",null,"Un nombre entier est tir\xe9 au hasard entre ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," (inclus)."),(0,i.kt)("p",null,"Le joueur doit deviner ce nombre en un minimum de tentatives."),(0,i.kt)("p",null,"\xc0 chaque tentative, le programme indique au joueur si le nombre \xe0 deviner est plus grand ou plus petit que celui qu\u2019il a propos\xe9."),(0,i.kt)("p",null,"Le programme s\u2019arr\xeate lorsque le joueur a trouv\xe9 le nombre myst\xe8re."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Pour g\xe9n\xe9rer un nombre al\xe9atoire, vous pouvez utiliser la fonction ",(0,i.kt)("strong",{parentName:"p"},"rand()")," de la biblioth\xe8que ",(0,i.kt)("strong",{parentName:"p"},"cstdlib"),"."),(0,i.kt)("p",{parentName:"admonition"},"La fonction ",(0,i.kt)("strong",{parentName:"p"},"rand()")," retourne un nombre entier al\xe9atoire entre ",(0,i.kt)("strong",{parentName:"p"},"0")," et ",(0,i.kt)("strong",{parentName:"p"},"RAND_MAX")," (une constante d\xe9finie dans la biblioth\xe8que ",(0,i.kt)("strong",{parentName:"p"},"cstdlib"),")."),(0,i.kt)("p",{parentName:"admonition"},"Pour obtenir un nombre al\xe9atoire entre ",(0,i.kt)("strong",{parentName:"p"},"1")," et ",(0,i.kt)("strong",{parentName:"p"},"100"),", il faut utiliser l'op\xe9rateur modulo ",(0,i.kt)("strong",{parentName:"p"},"%"),":"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"std::rand() % 100 + 1"),".")),(0,i.kt)("p",null,"Il existe une fa\xe7on plus moderne de g\xe9n\xe9rer des nombres al\xe9atoires \xe0 partir de ",(0,i.kt)("strong",{parentName:"p"},"C++11"),", nous d\xe9couvrirons cela au prochain semestre.\n:::"))}c.isMDXComponent=!0}}]);
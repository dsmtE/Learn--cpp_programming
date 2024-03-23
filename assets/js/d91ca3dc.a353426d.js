"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[2263],{3732:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=r(5893),s=r(1151);const t={title:"TD4 - Boucles",sidebar_position:4},l=void 0,c={id:"TDs/S1/Loops",title:"TD4 - Boucles",description:"Exercice 1 (For)",source:"@site/content/TDs/S1/04_Loops.md",sourceDirName:"TDs/S1",slug:"/TDs/S1/Loops",permalink:"/Learn--cpp_programming/TDs/S1/Loops",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"TD4 - Boucles",sidebar_position:4},sidebar:"TDs",previous:{title:"TD3 - Conditions",permalink:"/Learn--cpp_programming/TDs/S1/Conditions"},next:{title:"TD5 - Tableaux",permalink:"/Learn--cpp_programming/TDs/S1/Arrays"}},o={},d=[{value:"Exercice 1 (For)",id:"exercice-1-for",level:2},{value:"Exercice 2 (While)",id:"exercice-2-while",level:2},{value:"Exercice 3 (Somme d&#39;entiers positifs)",id:"exercice-3-somme-dentiers-positifs",level:2},{value:"Exercice 4 (rendu de monnaie)",id:"exercice-4-rendu-de-monnaie",level:2},{value:"Exercice 5 (entr\xe9e utilisateur)",id:"exercice-5-entr\xe9e-utilisateur",level:2},{value:"Exercice 6 (conjecture de Syracuse)",id:"exercice-6-conjecture-de-syracuse",level:2},{value:"Exercice 7 (ASCII art)",id:"exercice-7-ascii-art",level:2},{value:"Exercice 8 (Le juste prix)",id:"exercice-8-le-juste-prix",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"exercice-1-for",children:"Exercice 1 (For)"}),"\n",(0,i.jsxs)(n.p,{children:["Faire une boucle ",(0,i.jsx)(n.strong,{children:"for"})," qui affiche les nombres ",(0,i.jsx)(n.strong,{children:"pairs"})," inf\xe9rieurs ou \xe9gal \xe0 un nombre entr\xe9 par l'utilisateur de diff\xe9rentes fa\xe7ons:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["en utilisant un condition et l'op\xe9rateur ",(0,i.jsx)(n.strong,{children:"modulo"})]}),"\n",(0,i.jsxs)(n.li,{children:["en utilisant le mot cl\xe9 ",(0,i.jsx)(n.strong,{children:"continue"})]}),"\n",(0,i.jsxs)(n.li,{children:["en utilisant une boucle bien choisie (un nombre ",(0,i.jsx)(n.strong,{children:"pair"})," est un nombre qui peut s'\xe9crire comme le double d'un nombre entier)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Vous pourrez utiliser ",(0,i.jsx)(n.strong,{children:"std::cin"})," pour demander le nombre maximum \xe0 l'utilisateur (aucune gestion d'une \xe9ventuelle erreur de saisie n'est demand\xe9e ici)."]})}),"\n",(0,i.jsx)(n.h2,{id:"exercice-2-while",children:"Exercice 2 (While)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire une boucle ",(0,i.jsx)(n.strong,{children:"while"})," qui affichera les entiers entre ",(0,i.jsx)(n.code,{children:"1"})," et ",(0,i.jsx)(n.code,{children:"20"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["\xc9crire une boucle ",(0,i.jsx)(n.strong,{children:"while"})," qui affichera les ",(0,i.jsx)(n.code,{children:"50"})," premiers multiples de ",(0,i.jsx)(n.code,{children:"7"}),", chacun\nsur une ligne de la forme: ",(0,i.jsx)(n.code,{children:"5 fois 7 = 35"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Refaire les deux questions pr\xe9c\xe9dentes en utilisant une boucle ",(0,i.jsx)(n.strong,{children:"for"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"exercice-3-somme-dentiers-positifs",children:"Exercice 3 (Somme d'entiers positifs)"}),"\n",(0,i.jsx)(n.p,{children:"\xc9crire un programme qui demande \xe0 l\u2019utilisateur de saisir des entiers positifs (s\u2019arr\xeate d\xe8s que l\u2019utilisateur saisit un entier n\xe9gatif)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["G\xe9rer l'entr\xe9e utilisateur (et son arr\xeat) \xe0 l'aide d'une boucle ",(0,i.jsx)(n.strong,{children:"while"})," ou ",(0,i.jsx)(n.strong,{children:"do while"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Afficher la ",(0,i.jsx)(n.strong,{children:"somme"})," des entiers positifs saisis par l\u2019utilisateur."]}),"\n",(0,i.jsxs)(n.li,{children:["Modifier le programme pour qu'il affiche \xe9galement la ",(0,i.jsx)(n.strong,{children:"moyenne"})," des entiers positifs saisis par l\u2019utilisateur."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Pour calculer la moyenne, il faut compter le nombre d'entiers positifs saisis par l'utilisateur.\nVous n'avez pas \xe0 stocker les entiers saisis par l'utilisateur (vous d\xe9couvrirez comment faire cela dans le prochain chapitre)."})}),"\n",(0,i.jsx)(n.h2,{id:"exercice-4-rendu-de-monnaie",children:"Exercice 4 (rendu de monnaie)"}),"\n",(0,i.jsxs)(n.p,{children:["\xc9crire un programme qui demande \xe0 l\u2019utilisateur un montant en ",(0,i.jsx)(n.strong,{children:"euros"})," et affiche le nombre de billets et de pi\xe8ces n\xe9cessaires pour rendre la monnaie avec le moins de billets et de pi\xe8ces possible."]}),"\n",(0,i.jsxs)(n.p,{children:["On suppose que l\u2019on dispose de pi\xe8ces de ",(0,i.jsx)(n.code,{children:"1"}),", ",(0,i.jsx)(n.code,{children:"2"}),", ",(0,i.jsx)(n.code,{children:"5"}),", ",(0,i.jsx)(n.code,{children:"10"}),", ",(0,i.jsx)(n.code,{children:"20"})," et ",(0,i.jsx)(n.code,{children:"50"})," centimes, de ",(0,i.jsx)(n.code,{children:"1"})," et ",(0,i.jsx)(n.code,{children:"2"})," euros ainsi que de billets de ",(0,i.jsx)(n.code,{children:"5"}),", ",(0,i.jsx)(n.code,{children:"10"}),", ",(0,i.jsx)(n.code,{children:"20"}),", ",(0,i.jsx)(n.code,{children:"50"}),", ",(0,i.jsx)(n.code,{children:"100"}),", ",(0,i.jsx)(n.code,{children:"200"})," et ",(0,i.jsx)(n.code,{children:"500"})," euros."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Utilisez un tableau pour stocker le nombre de pi\xe8ces et de billets \xe0 rendre."}),(0,i.jsxs)(n.p,{children:["Utilisez un ",(0,i.jsx)(n.strong,{children:"algorithme glouton"})," qui consiste \xe0 regarder si on peut rendre la monnaie avec le plus gros billet ou pi\xe8ce possible et \xe0 recommencer avec le billet ou la pi\xe8ce suivante jusqu'\xe0 avoir rendu toute la monnaie."]})]}),"\n",(0,i.jsx)(n.h2,{id:"exercice-5-entr\xe9e-utilisateur",children:"Exercice 5 (entr\xe9e utilisateur)"}),"\n",(0,i.jsx)(n.p,{children:"\xc9crire un programme qui demande \xe0 l'utilisateur un nombre et affiche la table de multiplication de ce nombre."}),"\n",(0,i.jsx)(n.p,{children:"Vous devrez g\xe9rer le cas o\xf9 l'utilisateur saisit une valeur incorrecte (un nombre n\xe9gatif ou une lettre par exemple) et redemander \xe0 l'utilisateur de saisir un nombre tant qu'il n'a pas saisi une valeur correcte."}),"\n",(0,i.jsxs)(n.p,{children:["Je vous invite \xe0 retourner voir l'",(0,i.jsx)(n.a,{href:"/TDs/S1/Conditions#exercice-3",children:"exercice 3"})," du ",(0,i.jsx)(n.strong,{children:"TD2"})," sur les conditions pour vous aider."]}),"\n",(0,i.jsx)(n.h2,{id:"exercice-6-conjecture-de-syracuse",children:"Exercice 6 (conjecture de Syracuse)"}),"\n",(0,i.jsxs)(n.p,{children:["\xc9crire un programme qui, \xe0 partir d\u2019un ",(0,i.jsx)(n.strong,{children:"entier positif"})," saisi par l\u2019utilisateur, affiche le nombre de termes de la suite de Syracuse n\xe9cessaires pour atteindre ",(0,i.jsx)(n.code,{children:"1"})," (on inclut le terme de d\xe9part dans le d\xe9compte)."]}),"\n",(0,i.jsxs)(n.p,{children:["La suite de ",(0,i.jsx)(n.strong,{children:"Syracuse"})," est une suite d'entiers dans laquelle chaque terme est obtenu en appliquant une fonction \xe0 son terme pr\xe9c\xe9dent. Cette fonction est d\xe9finie comme suit:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["si le terme est pair, le terme suivant est \xe9gal \xe0 la ",(0,i.jsx)(n.strong,{children:"moiti\xe9"})," du terme pr\xe9c\xe9dent. (x/2)"]}),"\n",(0,i.jsxs)(n.li,{children:["si le terme est impair, le terme suivant est \xe9gal \xe0 ",(0,i.jsx)(n.strong,{children:"3"})," fois le terme pr\xe9c\xe9dent ",(0,i.jsx)(n.strong,{children:"plus 1"})," (3x+1)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Par exemple, si le terme de d\xe9part est ",(0,i.jsx)(n.code,{children:"7"}),", la suite est :\n",(0,i.jsx)(n.code,{children:"7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1, ..."})]}),"\n",(0,i.jsxs)(n.p,{children:["Ici, la suite atteint la valeur ",(0,i.jsx)(n.code,{children:"1"})," au bout de 17 termes (incluant le terme de d\xe9part)."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous remarquez qu\u2019\xe0 la fin, une fois qu\u2019on est tomb\xe9 sur 1, la suite finit par r\xe9p\xe9ter ind\xe9finiment le cycle ",(0,i.jsx)(n.code,{children:"4, 2, 1"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Il est conjectur\xe9 que cette suite atteint toujours la valeur ",(0,i.jsx)(n.code,{children:"1"})," quelque soit le terme de d\xe9part. Cela a d'ailleurs d\xe9j\xe0 \xe9t\xe9 v\xe9rifi\xe9e num\xe9riquement jusqu\u2019\xe0 10^20 (par ",(0,i.jsx)(n.a,{href:"https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-01031-5/S0025-5718-99-01031-5.pdf",children:"Tomas Oliveira e Silva"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"exercice-7-ascii-art",children:"Exercice 7 (ASCII art)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\xc9crire un programme qui demande \xe0 l\u2019utilisateur de saisir un ",(0,i.jsx)(n.strong,{children:"entier positif"})," et affiche un triangle rectangle de hauteur ",(0,i.jsx)(n.code,{children:"n"})," comme dans l\u2019exemple ci-dessous."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',children:"Entrez un entier positif : 5\n*\n**\n***\n****\n*****\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Essayer d'afficher un sapin de no\xebl, autrement dit un triangle rectangle isoc\xe8le de hauteur ",(0,i.jsx)(n.code,{children:"n"})," et dont le sommet est compos\xe9 d'une seule \xe9toile."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',children:"Entrez un entier positif : 3\n  *\n ***\n*****\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Essayer d'afficher les contours d'un carr\xe9 de c\xf4t\xe9 ",(0,i.jsx)(n.code,{children:"n"})," comme dans l\u2019exemple ci-dessous."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',children:"Entrez un entier positif : 5\n*****\n*   *\n*   *\n*   *\n*****\n"})}),"\n",(0,i.jsx)(n.h2,{id:"exercice-8-le-juste-prix",children:"Exercice 8 (Le juste prix)"}),"\n",(0,i.jsxs)(n.p,{children:["Un nombre entier est tir\xe9 au hasard entre ",(0,i.jsx)(n.code,{children:"1"})," et ",(0,i.jsx)(n.code,{children:"100"})," (inclus)."]}),"\n",(0,i.jsx)(n.p,{children:"Le joueur doit deviner ce nombre en un minimum de tentatives."}),"\n",(0,i.jsx)(n.p,{children:"\xc0 chaque tentative, le programme indique au joueur si le nombre \xe0 deviner est plus grand ou plus petit que celui qu\u2019il a propos\xe9."}),"\n",(0,i.jsx)(n.p,{children:"Le programme s\u2019arr\xeate lorsque le joueur a trouv\xe9 le nombre myst\xe8re."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Pour g\xe9n\xe9rer un nombre al\xe9atoire, vous pouvez utiliser la fonction ",(0,i.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/numeric/random/rand",children:(0,i.jsx)(n.strong,{children:"rand()"})})," de la biblioth\xe8que ",(0,i.jsx)(n.strong,{children:"cstdlib"}),"."]}),(0,i.jsxs)(n.p,{children:["Elle retourne un nombre entier al\xe9atoire entre ",(0,i.jsx)(n.strong,{children:"0"})," et ",(0,i.jsx)(n.strong,{children:"RAND_MAX"})," (une constante d\xe9finie dans la biblioth\xe8que ",(0,i.jsx)(n.strong,{children:"cstdlib"}),")."]}),(0,i.jsxs)(n.p,{children:["Pour obtenir un nombre al\xe9atoire entre ",(0,i.jsx)(n.strong,{children:"1"})," et ",(0,i.jsx)(n.strong,{children:"100"}),", on peut utiliser l'op\xe9rateur ",(0,i.jsx)(n.strong,{children:"modulo"})," ",(0,i.jsx)(n.code,{children:"%"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"std::rand() % 100 + 1\n"})}),(0,i.jsx)(n.p,{children:"Pour que le g\xe9n\xe9rateur de nombres al\xe9atoires ne g\xe9n\xe8re pas toujours la m\xeame s\xe9quence de nombres, il faut l\u2019initialiser avec une valeur diff\xe9rente \xe0 chaque ex\xe9cution du programme."}),(0,i.jsxs)(n.p,{children:["C'est avec la fonction ",(0,i.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/numeric/random/srand",children:(0,i.jsx)(n.strong,{children:"srand()"})}),"."]}),(0,i.jsxs)(n.p,{children:["On peut utiliser la fonction ",(0,i.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/chrono/c/time",children:(0,i.jsx)(n.strong,{children:"time()"})})," de la biblioth\xe8que ",(0,i.jsx)(n.strong,{children:"ctime"})," pour obtenir l'heure actuelle en secondes et l'utiliser comme valeur d'initialisation du g\xe9n\xe9rateur de nombres al\xe9atoires."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <cstdlib>\n#include <ctime>\n#include <iostream>\n \nint main() \n{\n  // Initialisation du g\xe9n\xe9rateur de nombres al\xe9atoires avec la fonction time()\n  std::srand(std::time(nullptr));\n  int random_variable { std::rand()};\n  std::cout << "Random value between 0 and "<< RAND_MAX <<" : " << random_variable << std::endl;\n}\n'})}),(0,i.jsxs)(n.p,{children:["Il existe une fa\xe7on plus moderne de g\xe9n\xe9rer des nombres al\xe9atoires \xe0 partir de ",(0,i.jsx)(n.strong,{children:"C++11"}),", nous d\xe9couvrirons cela au prochain semestre."]})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var i=r(7294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
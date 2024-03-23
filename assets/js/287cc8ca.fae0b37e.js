"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[1829],{7718:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=r(5893),i=r(1151);const t={title:"TD5 - Tableaux",sidebar_position:5},c=void 0,l={id:"TDs/S1/Arrays",title:"TD5 - Tableaux",description:"Exercice 1 (min & max)",source:"@site/content/TDs/S1/05_Arrays.md",sourceDirName:"TDs/S1",slug:"/TDs/S1/Arrays",permalink:"/Learn--cpp_programming/TDs/S1/Arrays",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"TD5 - Tableaux",sidebar_position:5},sidebar:"TDs",previous:{title:"TD4 - Boucles",permalink:"/Learn--cpp_programming/TDs/S1/Loops"},next:{title:"TD6 - Fonctions",permalink:"/Learn--cpp_programming/TDs/S1/Functions"}},o={},a=[{value:"Exercice 1 (min &amp; max)",id:"exercice-1-min--max",level:2},{value:"Exercice 2 (Luhn)",id:"exercice-2-luhn",level:2},{value:"Exercice 3 (Points d&#39;\xe9nergie)",id:"exercice-3-points-d\xe9nergie",level:2},{value:"Exercice 4 (Palindrome)",id:"exercice-4-palindrome",level:2},{value:"Exercice 5 (Comptage)",id:"exercice-5-comptage",level:2},{value:"Exercice 6 (Suppression et tassement)",id:"exercice-6-suppression-et-tassement",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"exercice-1-min--max",children:"Exercice 1 (min & max)"}),"\n",(0,s.jsx)(n.p,{children:"Des nains partent en exp\xe9dition dans les montagnes. Ils transportent chacun une certaine quantit\xe9 de provisions (exprim\xe9e en calories)."}),"\n",(0,s.jsx)(n.p,{children:"Votre mission est de d\xe9terminer la quantit\xe9 de provisions la plus grande transport\xe9e par un nain."}),"\n",(0,s.jsx)(n.p,{children:"Je vous donne le programme suivant qui g\xe9n\xe8re la liste des calories transport\xe9es par chaque nain:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <vector>\n#include <cstdlib>\n\nint main()\n{\n    size_t const dwarf_count { 20 };\n\n    std::vector<int> calories {};\n\n    // std::srand permet de fixer la "seed" du g\xe9n\xe9rateur al\xe9atoire (pour avoir des r\xe9sultats reproductibles)\n    std::srand(42);\n    \n    for (int i = 0; i < dwarf_count; ++i)\n    {\n      calories.push_back(rand() % 24000 + 100);\n    }\n\n    // affichage optionnel des calories transport\xe9es par chaque nain\n    for (int const c : calories)\n    {\n      std::cout << c << ", ";\n    }\n    std::cout << std::endl;\n\n    // TODO: afficher la quantit\xe9 de provisions la plus grande transport\xe9e par un nain\n\n    return 0;\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Trouver la quantit\xe9 de provisions la plus ",(0,s.jsx)(n.strong,{children:"grande"})," transport\xe9e par un nain."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Trouver la quantit\xe9 de provisions la plus ",(0,s.jsx)(n.strong,{children:"petite"})," transport\xe9e par un nain (arrivez vous \xe0 le faire sans utiliser de boucle suppl\xe9mentaire ?)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Essayez de faire fonctionner le programme avec plus de nains, par exemple ",(0,s.jsx)(n.code,{children:"200"}),", ",(0,s.jsx)(n.code,{children:"2000"})," ou m\xeame ",(0,s.jsx)(n.code,{children:"20000"})," nains. (Attention, il ne faut pas afficher les calories transport\xe9es par chaque nain dans ce cas)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Si vous avez eu besoin de changer autre chose que la variable ",(0,s.jsx)(n.code,{children:"dwarf_count"})," pour r\xe9pondre \xe0 la question pr\xe9c\xe9dente, essayez de trouver une solution qui fonctionne avec n'importe quel nombre de nains sans avoir \xe0 modifier le code."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Pour aller plus loin:\nTrouver les ",(0,s.jsx)(n.strong,{children:"trois"})," nains transportant le plus de provisions et afficher la ",(0,s.jsx)(n.strong,{children:"somme"})," des provisions transport\xe9es par ces trois nains."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Exercice inspir\xe9 de de l'\xe9dition ",(0,s.jsx)(n.strong,{children:"2022"})," de l'",(0,s.jsx)(n.strong,{children:"advent of code"}),": ",(0,s.jsx)(n.a,{href:"https://adventofcode.com/2022/day/1",children:"https://adventofcode.com/2022/day/1"}),"\nC'est un \xe9v\xe8nement annuel qui propose un probl\xe8me de code par jour sous forme de calendrier de l'avent."]})}),"\n",(0,s.jsx)(n.h2,{id:"exercice-2-luhn",children:"Exercice 2 (Luhn)"}),"\n",(0,s.jsx)(n.p,{children:"Le num\xe9ro de carte bancaire est un nombre de 16 chiffres. Il est compos\xe9 de 4 groupes de 4 chiffres s\xe9par\xe9s par un espace."}),"\n",(0,s.jsx)(n.p,{children:"Tous les num\xe9ros de carte bancaire ne sont pas valides et il existe des algorithmes pour le v\xe9rifier.\nCela permet de v\xe9rifier rapidement si un num\xe9ro de carte bancaire est valide ou non sans avoir \xe0 contacter la banque et permet de d\xe9tecter rapidement certaines erreurs de saisie (comme l'inversion de deux chiffres par exemple)."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["L'algorithme de ",(0,s.jsx)(n.strong,{children:"Luhn"})," est l'un de ces algorithmes."]}),"\n",(0,s.jsxs)(n.p,{children:["Son principe est de calculer, \xe0 partir d'un nombre (ou une suite de chiffres), une cl\xe9 de contr\xf4le (appel\xe9e ",(0,s.jsx)(n.strong,{children:"checksum"}),") qui permet de v\xe9rifier que le num\xe9ro est correct (car la cl\xe9 est un nombre qui est d\xe9pendant des autres et doit respecter certaines conditions)."]}),"\n",(0,s.jsx)(n.p,{children:"Dans notre cas, la cl\xe9 de contr\xf4le est calcul\xe9e de la mani\xe8re suivante:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["On ",(0,s.jsx)(n.strong,{children:"multiplie"})," un chiffre sur deux ",(0,s.jsx)(n.strong,{children:"par 2"})," (en commen\xe7ant par le deuxi\xe8me chiffre)."]}),"\n",(0,s.jsxs)(n.li,{children:["Si le r\xe9sultat de la multiplication est ",(0,s.jsx)(n.strong,{children:"sup\xe9rieur \xe0 9"}),", on ",(0,s.jsx)(n.strong,{children:"additionne"})," les chiffres du r\xe9sultat (par exemple, 8 * 2 = 16, 1 + 6 = 7)."]}),"\n",(0,s.jsx)(n.li,{children:"On additionne tous les chiffres (y compris ceux qui n'ont pas \xe9t\xe9 multipli\xe9s par 2)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Si le r\xe9sultat (la cl\xe9 de contr\xf4le) est un multiple de 10, alors le num\xe9ro est valide."}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:"Un exemple"})}),(0,s.jsxs)(n.p,{children:["Prenons le num\xe9ro de carte bancaire suivant: ",(0,s.jsx)(n.code,{children:"1234 5678 9002 3456"}),"."]}),(0,s.jsx)(n.p,{children:"On multiplie un chiffre sur deux par 2 (en commen\xe7ant par le dernier chiffre):"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"1  2  3  4  5  6  7  8  9  0  0  2  3  4  5  6\n   x2    x2    x2    x2    x2    x2    x2    x2\n1  4  3  8  5  12 7  16 9  0  0  4  3  8  5  12\n"})}),(0,s.jsx)(n.p,{children:"On additionne les chiffres du r\xe9sultat si le r\xe9sultat est sup\xe9rieur \xe0 9:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"1  4  3  8  5  12 7  16 9  0  0  4  3  8  5  12\n1  4  3  8  5  3  7  7  9  0  0  4  3  8  5  3\n"})}),(0,s.jsx)(n.p,{children:"On additionne tous les chiffres:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"1  4  3  8  5  3  7  7  9  0  0  4  3  8  5  3\n1 + 4 + 3 + 8 + 5 + 3 + 7 + 7 + 9 + 0 + 0 + 4 + 3 + 8 + 5 + 3 = 70\n"})}),(0,s.jsxs)(n.p,{children:["La cl\xe9 de contr\xf4le est ",(0,s.jsx)(n.code,{children:"70"}),"."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"70"})," est un multiple de ",(0,s.jsx)(n.code,{children:"10"}),", donc le num\xe9ro de carte bancaire est valide."]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Vous devez \xe9crire un programme qui demande \xe0 l'utilisateur de saisir un num\xe9ro de carte bancaire et qui affiche si ce num\xe9ro est valide ou non."})}),"\n",(0,s.jsx)(n.p,{children:"Pour la saisie, vous \xeates libre de choisir le format ou syntaxe que vous voulez (via une cha\xeene de caract\xe8res, avec ou sans espaces, un nombre ou une boucle sur plusieurs chiffres)."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Convertissez premi\xe8rement la cha\xeene de caract\xe8res en un tableau de chiffres."}),"\n",(0,s.jsxs)(n.li,{children:["Pour convertir un caract\xe8re en un nombre, vous pouvez utiliser la fonction ",(0,s.jsx)(n.code,{children:"std::stoi"})," (string to integer) ou la valeur ",(0,s.jsx)(n.strong,{children:"ASCII"})," du caract\xe8re. (voir l'",(0,s.jsx)(n.a,{href:"/TDs/S1/Variables#exercice-5-ascii",children:"Exercice 5"})," du TD2)."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"exercice-3-points-d\xe9nergie",children:"Exercice 3 (Points d'\xe9nergie)"}),"\n",(0,s.jsx)(n.p,{children:"Dans un jeu vid\xe9o de type RPG, d\xe8s que le joueur termine un niveau, il gagne des points d\u2019\xe9nergie."}),"\n",(0,s.jsx)(n.p,{children:"Les points d'\xe9nergie sont calcul\xe9s en fonction du niveau termin\xe9 et du nombre et du niveau de difficult\xe9 des ennemis tu\xe9s."}),"\n",(0,s.jsx)(n.p,{children:"Le nombre de points d'\xe9nergie gagn\xe9s est calcul\xe9 de la mani\xe8re suivante:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pour chaque ennemi tu\xe9, trouver tous les multiples de son niveau de difficult\xe9 inf\xe9rieurs au niveau termin\xe9 par le joueur."}),"\n",(0,s.jsx)(n.li,{children:"Combiner tous les multiples trouv\xe9s pour chaque ennemi tu\xe9 en supprimant les doublons."}),"\n",(0,s.jsx)(n.li,{children:"Additionnez tous les nombres restants pour obtenir le nombre de points d'\xe9nergie gagn\xe9s."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Voici un exemple:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Le joueur termine le niveau ",(0,s.jsx)(n.code,{children:"20"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Il tue 2 ennemis de niveau ",(0,s.jsx)(n.code,{children:"3"}),", ",(0,s.jsx)(n.code,{children:"5"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Les multiples de ",(0,s.jsx)(n.code,{children:"3"})," inf\xe9rieurs \xe0 ",(0,s.jsx)(n.code,{children:"20"})," sont: ",(0,s.jsx)(n.code,{children:"3, 6, 9, 12, 15, 18"}),".\nLes multiples de ",(0,s.jsx)(n.code,{children:"5"})," inf\xe9rieurs \xe0 ",(0,s.jsx)(n.code,{children:"20"})," sont: ",(0,s.jsx)(n.code,{children:"5, 10, 15"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En supprimant les doublons, nous obtenons: ",(0,s.jsx)(n.code,{children:"3, 5, 6, 9, 10, 12, 15, 18"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En additionnant tous les nombres, nous obtenons ",(0,s.jsx)(n.strong,{children:"78"})," points d'\xe9nergie."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Vous devez \xe9crire un programme qui demande \xe0 l'utilisateur de saisir le niveau termin\xe9 et le nombre et le niveau de difficult\xe9 des ennemis tu\xe9s et qui affiche le nombre de points d'\xe9nergie gagn\xe9s."})}),"\n",(0,s.jsx)(n.h2,{id:"exercice-4-palindrome",children:"Exercice 4 (Palindrome)"}),"\n",(0,s.jsx)(n.p,{children:"Un palindrome est un mot qui peut \xeatre lu de la m\xeame mani\xe8re de gauche \xe0 droite et de droite \xe0 gauche."}),"\n",(0,s.jsxs)(n.p,{children:["Par exemple, ",(0,s.jsx)(n.code,{children:"kayak"})," est un palindrome."]}),"\n",(0,s.jsxs)(n.p,{children:["\xc9crire un programme qui demande \xe0 l'utilisateur de saisir un mot et qui affiche si ce mot est un ",(0,s.jsx)(n.strong,{children:"palindrome"})," ou non."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Une cha\xeene de caract\xe8res est un tableau de caract\xe8res."})}),"\n",(0,s.jsx)(n.h2,{id:"exercice-5-comptage",children:"Exercice 5 (Comptage)"}),"\n",(0,s.jsxs)(n.p,{children:["\xc9crire un programme qui demande un nombre ",(0,s.jsx)(n.strong,{children:"entier positif"})," (sup\xe9rieur \xe0 ",(0,s.jsx)(n.strong,{children:"1 000 000"}),") \xe0 l'utilisateur et qui remplit un tableau avec les chiffres de ce nombre.\nLe programme doit ensuite compter le nombre d'occurrences de chiffre et afficher le ",(0,s.jsx)(n.strong,{children:"chiffre"})," qui appara\xeet le plus souvent."]}),"\n",(0,s.jsx)(n.h2,{id:"exercice-6-suppression-et-tassement",children:"Exercice 6 (Suppression et tassement)"}),"\n",(0,s.jsxs)(n.p,{children:["\xc9crire un programme qui demande \xe0 l'utilisateur de saisir ",(0,s.jsx)(n.strong,{children:"10"})," entiers compris entre ",(0,s.jsx)(n.strong,{children:"0"})," et ",(0,s.jsx)(n.strong,{children:"5"})," et qui les stocke dans un tableau. (vous pouvez aussi demander \xe0 l'utilisateur de saisir un nombre puis le d\xe9composer en chiffres et stocker les chiffres dans un tableau)."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous devez ensuite supprimer toutes les valeurs valant ",(0,s.jsx)(n.strong,{children:"3"})," dans le tableau en d\xe9calant tous les \xe9l\xe9ments vers la gauche et en compl\xe9tant le tableau avec des ",(0,s.jsx)(n.strong,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Tableau avant:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[1, 3, 2, 3, 3, 4, 5, 3, 0, 2]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Tableau apr\xe8s:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[1, 2, 4, 5, 0, 2, 0, 0, 0, 0]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var s=r(7294);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[1829],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"TD5 - Tableaux",sidebar_position:5},l=void 0,s={unversionedId:"TDs/S1/Arrays",id:"TDs/S1/Arrays",title:"TD5 - Tableaux",description:"Exercice 1 (min & max)",source:"@site/content/TDs/S1/05_Arrays.md",sourceDirName:"TDs/S1",slug:"/TDs/S1/Arrays",permalink:"/Learn--cpp_programming/TDs/S1/Arrays",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"TD5 - Tableaux",sidebar_position:5},sidebar:"TDs",previous:{title:"TD4 - Boucles",permalink:"/Learn--cpp_programming/TDs/S1/Loops"},next:{title:"TD6 - Fonctions",permalink:"/Learn--cpp_programming/TDs/S1/Functions"}},o={},u=[{value:"Exercice 1 (min &amp; max)",id:"exercice-1-min--max",level:2},{value:"Exercice 2 (Luhn)",id:"exercice-2-luhn",level:2},{value:"Exercice 3 (Points d&#39;\xe9nergie)",id:"exercice-3-points-d\xe9nergie",level:2},{value:"Exercice 4 (Palindrome)",id:"exercice-4-palindrome",level:2},{value:"Exercice 5 (Comptage)",id:"exercice-5-comptage",level:2},{value:"Exercice 6 (Suppression et tassement)",id:"exercice-6-suppression-et-tassement",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"exercice-1-min--max"},"Exercice 1 (min & max)"),(0,a.kt)("p",null,"Des nains partent en exp\xe9dition dans les montagnes. Ils transportent chacun une certaine quantit\xe9 de provisions (exprim\xe9e en calories)."),(0,a.kt)("p",null,"Votre mission est de d\xe9terminer la quantit\xe9 de provisions la plus grande transport\xe9e par un nain."),(0,a.kt)("p",null,"Je vous donne le programme suivant qui g\xe9n\xe8re la liste des calories transport\xe9es par chaque nain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <vector>\n#include <cstdlib>\n\nint main()\n{\n    size_t const dwarf_count = 20;\n\n    std::vector<int> calories;\n\n    // std::srand permet de fixer la "seed" du g\xe9n\xe9rateur al\xe9atoire (pour avoir des r\xe9sultats reproductibles)\n    std::srand(42);\n    \n    for (int i = 0; i < dwarf_count; ++i)\n    {\n      calories.push_back(rand() % 24000 + 100);\n    }\n\n    // affichage optionnel des calories transport\xe9es par chaque nain\n    for (int const c : calories)\n    {\n      std::cout << c << ", ";\n    }\n    std::cout << std::endl;\n\n    // TODO: afficher la quantit\xe9 de provisions la plus grande transport\xe9e par un nain\n\n    return 0;\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Trouver la quantit\xe9 de provisions la plus ",(0,a.kt)("strong",{parentName:"p"},"grande")," transport\xe9e par un nain.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Trouver la quantit\xe9 de provisions la plus ",(0,a.kt)("strong",{parentName:"p"},"petite")," transport\xe9e par un nain (arrivez vous \xe0 le faire sans utiliser de boucle suppl\xe9mentaire ?).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Essayez de faire fonctionner le programme avec plus de nains, par exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"200"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"2000")," ou m\xeame ",(0,a.kt)("inlineCode",{parentName:"p"},"20000")," nains. (Attention, il ne faut pas afficher les calories transport\xe9es par chaque nain dans ce cas).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Si vous avez eu besoin de changer autre chose que la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"dwarf_count")," pour r\xe9pondre \xe0 la question pr\xe9c\xe9dente, essayez de trouver une solution qui fonctionne avec n'importe quel nombre de nains sans avoir \xe0 modifier le code.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pour aller plus loin:\nTrouver les ",(0,a.kt)("strong",{parentName:"p"},"trois")," nains transportant le plus de provisions et afficher la ",(0,a.kt)("strong",{parentName:"p"},"somme")," des provisions transport\xe9es par ces trois nains."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Exercice inspir\xe9 de de l'\xe9dition ",(0,a.kt)("strong",{parentName:"p"},"2022")," de l'",(0,a.kt)("strong",{parentName:"p"},"advent of code"),": ",(0,a.kt)("a",{parentName:"p",href:"https://adventofcode.com/2022/day/1"},"https://adventofcode.com/2022/day/1"),"\nC'est un \xe9v\xe8nement annuel qui propose un probl\xe8me de code par jour sous forme de calendrier de l'avent.")),(0,a.kt)("h2",{id:"exercice-2-luhn"},"Exercice 2 (Luhn)"),(0,a.kt)("p",null,"Le num\xe9ro de carte bancaire est un nombre de 16 chiffres. Il est compos\xe9 de 4 groupes de 4 chiffres s\xe9par\xe9s par un espace."),(0,a.kt)("p",null,"Tous les num\xe9ros de carte bancaire ne sont pas valides et il existe des algorithmes pour le v\xe9rifier.\nCela permet de v\xe9rifier rapidement si un num\xe9ro de carte bancaire est valide ou non sans avoir \xe0 contacter la banque et permet de d\xe9tecter rapidement certaines erreurs de saisie (comme l'inversion de deux chiffres par exemple)."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"L'algorithme de ",(0,a.kt)("strong",{parentName:"p"},"Luhn")," est l'un de ces algorithmes."),(0,a.kt)("p",null,"Son principe est de calculer, \xe0 partir d'un nombre (ou une suite de chiffres), une cl\xe9 de contr\xf4le (appel\xe9e ",(0,a.kt)("strong",{parentName:"p"},"checksum"),") qui permet de v\xe9rifier que le num\xe9ro est correct (car la cl\xe9 est un nombre qui est d\xe9pendant des autres et doit respecter certaines conditions)."),(0,a.kt)("p",null,"Dans notre cas, la cl\xe9 de contr\xf4le est calcul\xe9e de la mani\xe8re suivante:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On ",(0,a.kt)("strong",{parentName:"li"},"multiplie")," un chiffre sur deux ",(0,a.kt)("strong",{parentName:"li"},"par 2")," (en commen\xe7ant par le deuxi\xe8me chiffre)."),(0,a.kt)("li",{parentName:"ul"},"Si le r\xe9sultat de la multiplication est ",(0,a.kt)("strong",{parentName:"li"},"sup\xe9rieur \xe0 9"),", on ",(0,a.kt)("strong",{parentName:"li"},"additionne")," les chiffres du r\xe9sultat (par exemple, 8 * 2 = 16, 1 + 6 = 7)."),(0,a.kt)("li",{parentName:"ul"},"On additionne tous les chiffres (y compris ceux qui n'ont pas \xe9t\xe9 multipli\xe9s par 2).")),(0,a.kt)("p",null,"Si le r\xe9sultat (la cl\xe9 de contr\xf4le) est un multiple de 10, alors le num\xe9ro est valide."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Un exemple"),(0,a.kt)("p",null,"Prenons le num\xe9ro de carte bancaire suivant: ",(0,a.kt)("inlineCode",{parentName:"p"},"1234 5678 9022 3456"),"."),(0,a.kt)("p",null,"On multiplie un chiffre sur deux par 2 (en commen\xe7ant par le dernier chiffre):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1  2  3  4  5  6  7  8  9  0  2  2  3  4  5  6\n   x2    x2    x2    x2    x2    x2    x2    x2\n1  4  3  8  5  12 7  16 9  0  2  4  3  8  5  12\n")),(0,a.kt)("p",null,"On additionne les chiffres du r\xe9sultat si le r\xe9sultat est sup\xe9rieur \xe0 9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1  4  3  8  5  12 7  16 9  0  2  4  3  8  5  12\n1  4  3  8  5  3  7  7  9  0  2  4  3  8  5  3\n")),(0,a.kt)("p",null,"On additionne tous les chiffres:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1  4  3  8  5  3  7  7  9  0  2  4  3  8  5  3\n1 + 4 + 3 + 8 + 5 + 3 + 7 + 7 + 9 + 0 + 2 + 4 + 3 + 8 + 5 + 3 = 70\n")),(0,a.kt)("p",null,"La cl\xe9 de contr\xf4le est ",(0,a.kt)("inlineCode",{parentName:"p"},"70"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"70")," est un multiple de ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),", donc le num\xe9ro de carte bancaire est valide.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vous devez \xe9crire un programme qui demande \xe0 l'utilisateur de saisir un num\xe9ro de carte bancaire et qui affiche si ce num\xe9ro est valide ou non.")),(0,a.kt)("p",null,"Pour la saisie, vous \xeates libre de choisir le format ou syntaxe que vous voulez (via une cha\xeene de caract\xe8res, avec ou sans espaces, un nombre ou une boucle sur plusieurs chiffres)."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Convertissez premi\xe8rement la cha\xeene de caract\xe8res en un tableau de chiffres."),(0,a.kt)("li",{parentName:"ul"},"Pour convertir un caract\xe8re en un nombre, vous pouvez utiliser la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"std::stoi")," (string to integer) ou la valeur ",(0,a.kt)("strong",{parentName:"li"},"ASCII")," du caract\xe8re. (voir l'",(0,a.kt)("a",{parentName:"li",href:"/TDs/S1/Variables#exercice-5-ascii"},"Exercice 5")," du TD2)."))),(0,a.kt)("h2",{id:"exercice-3-points-d\xe9nergie"},"Exercice 3 (Points d'\xe9nergie)"),(0,a.kt)("p",null,"Dans un jeu vid\xe9o de type RPG, d\xe8s que le joueur termine un niveau, il gagne des points d\u2019\xe9nergie."),(0,a.kt)("p",null,"Les points d'\xe9nergie sont calcul\xe9s en fonction du niveau termin\xe9 et du nombre et du niveau de difficult\xe9 des ennemis tu\xe9s."),(0,a.kt)("p",null,"Le nombre de points d'\xe9nergie gagn\xe9s est calcul\xe9 de la mani\xe8re suivante:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pour chaque ennemi tu\xe9, trouver tous les multiples de son niveau de difficult\xe9 inf\xe9rieurs au niveau termin\xe9 par le joueur."),(0,a.kt)("li",{parentName:"ul"},"Combiner tous les multiples trouv\xe9s pour chaque ennemi tu\xe9 en supprimant les doublons."),(0,a.kt)("li",{parentName:"ul"},"Additionnez tous les nombres restants pour obtenir le nombre de points d'\xe9nergie gagn\xe9s.")),(0,a.kt)("p",null,"Voici un exemple:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le joueur termine le niveau ",(0,a.kt)("inlineCode",{parentName:"li"},"20"),"."),(0,a.kt)("li",{parentName:"ul"},"Il tue 2 ennemis de niveau ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),".")),(0,a.kt)("p",null,"Les multiples de ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," inf\xe9rieurs \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"20")," sont: ",(0,a.kt)("inlineCode",{parentName:"p"},"3, 6, 9, 12, 15, 18"),".\nLes multiples de ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," inf\xe9rieurs \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"20")," sont: ",(0,a.kt)("inlineCode",{parentName:"p"},"5, 10, 15"),"."),(0,a.kt)("p",null,"En supprimant les doublons, nous obtenons: ",(0,a.kt)("inlineCode",{parentName:"p"},"3, 5, 6, 9, 10, 12, 15, 18"),"."),(0,a.kt)("p",null,"En additionnant tous les nombres, nous obtenons ",(0,a.kt)("strong",{parentName:"p"},"78")," points d'\xe9nergie."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vous devez \xe9crire un programme qui demande \xe0 l'utilisateur de saisir le niveau termin\xe9 et le nombre et le niveau de difficult\xe9 des ennemis tu\xe9s et qui affiche le nombre de points d'\xe9nergie gagn\xe9s.")),(0,a.kt)("h2",{id:"exercice-4-palindrome"},"Exercice 4 (Palindrome)"),(0,a.kt)("p",null,"Un palindrome est un mot qui peut \xeatre lu de la m\xeame mani\xe8re de gauche \xe0 droite et de droite \xe0 gauche."),(0,a.kt)("p",null,"Par exemple, ",(0,a.kt)("inlineCode",{parentName:"p"},"kayak")," est un palindrome."),(0,a.kt)("p",null,"\xc9crire un programme qui demande \xe0 l'utilisateur de saisir un mot et qui affiche si ce mot est un ",(0,a.kt)("strong",{parentName:"p"},"palindrome")," ou non."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Une cha\xeene de caract\xe8res est un tableau de caract\xe8res.")),(0,a.kt)("h2",{id:"exercice-5-comptage"},"Exercice 5 (Comptage)"),(0,a.kt)("p",null,"\xc9crire un programme qui demande un nombre ",(0,a.kt)("strong",{parentName:"p"},"entier positif")," (sup\xe9rieur \xe0 ",(0,a.kt)("strong",{parentName:"p"},"1 000 000"),") \xe0 l'utilisateur et qui remplit un tableau avec les chiffres de ce nombre.\nLe programme doit ensuite compter le nombre d'occurrences de chiffre et afficher le ",(0,a.kt)("strong",{parentName:"p"},"chiffre")," qui appara\xeet le plus souvent."),(0,a.kt)("h2",{id:"exercice-6-suppression-et-tassement"},"Exercice 6 (Suppression et tassement)"),(0,a.kt)("p",null,"\xc9crire un programme qui demande \xe0 l'utilisateur de saisir ",(0,a.kt)("strong",{parentName:"p"},"10")," entiers compris entre ",(0,a.kt)("strong",{parentName:"p"},"0")," et ",(0,a.kt)("strong",{parentName:"p"},"5")," et qui les stocke dans un tableau. (vous pouvez aussi demander \xe0 l'utilisateur de saisir un nombre puis le d\xe9composer en chiffres et stocker les chiffres dans un tableau)."),(0,a.kt)("p",null,"Vous devez ensuite supprimer toutes les valeurs valant ",(0,a.kt)("strong",{parentName:"p"},"3")," dans le tableau en d\xe9calant tous les \xe9l\xe9ments vers la gauche et en compl\xe9tant le tableau avec des ",(0,a.kt)("strong",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"Tableau avant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[1, 3, 2, 3, 3, 4, 5, 3, 0, 2]\n")),(0,a.kt)("p",null,"Tableau apr\xe8s:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[1, 2, 4, 5, 0, 2, 0, 0, 0, 0]\n")))}d.isMDXComponent=!0}}]);
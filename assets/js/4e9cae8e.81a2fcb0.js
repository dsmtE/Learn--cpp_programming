"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={title:"Des tableaux",tags:["C++"],sidebar_position:5},l="Introduction",i={unversionedId:"Lessons/Arrays",id:"Lessons/Arrays",title:"Des tableaux",description:"Nous avons vu les variables pour stocker des valeurs, les boucles pour simplifier le code et faire des it\xe9rations et il est maintenant l\xe9gitime de se demmander comment manipuler un nombre plus important de variables.",source:"@site/content/Lessons/Arrays.md",sourceDirName:"Lessons",slug:"/Lessons/Arrays",permalink:"/Learn--cpp_programming/Lessons/Arrays",draft:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:5,frontMatter:{title:"Des tableaux",tags:["C++"],sidebar_position:5},sidebar:"sidebar",previous:{title:"Des boucles pour gagner du temps",permalink:"/Learn--cpp_programming/Lessons/Loops"},next:{title:"Fonctions : D\xe9couper son code",permalink:"/Learn--cpp_programming/Lessons/Functions"}},o={},u=[{value:"Tableaux",id:"tableaux",level:2},{value:"std::vector",id:"stdvector",level:3},{value:"Manipuler un std::vector",id:"manipuler-un-stdvector",level:3},{value:"Acc\xe9der aux \xe9l\xe9ments",id:"acc\xe9der-aux-\xe9l\xe9ments",level:4},{value:"Taille du tableau",id:"taille-du-tableau",level:4},{value:"Premier et dernier \xe9l\xe9ment",id:"premier-et-dernier-\xe9l\xe9ment",level:4},{value:"V\xe9rifier si un tableau est vide",id:"v\xe9rifier-si-un-tableau-est-vide",level:4},{value:"Afficher les \xe9l\xe9ments",id:"afficher-les-\xe9l\xe9ments",level:4},{value:"Ajouter, supprimer et modifier des \xe9l\xe9ments",id:"ajouter-supprimer-et-modifier-des-\xe9l\xe9ments",level:4},{value:"std::array",id:"stdarray",level:2},{value:"Pour aller plus loin",id:"pour-aller-plus-loin",level:2},{value:"std::string: un tableau cach\xe9",id:"stdstring-un-tableau-cach\xe9",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Nous avons vu les ",(0,r.kt)("strong",{parentName:"p"},"variables")," pour stocker des valeurs, les ",(0,r.kt)("strong",{parentName:"p"},"boucles")," pour simplifier le code et faire des it\xe9rations et il est maintenant l\xe9gitime de se demmander comment manipuler un nombre plus important de variables."),(0,r.kt)("p",null,"Par exemple si l'on veut calculer la moyenne d'une liste de nombres, comment faire ?\nOn pourrait avoir plusieurs variables mais si on a besoin de manipuler plus de 10 nombres cela va se complexifier. Surtout dans le cas plus complexe o\xf9 l'on a pas connaissance \xe0 l'avance du nombre d'\xe9l\xe9ments que l'on veut manipuler (entr\xe9e utilisateur par exemple), comment faire ?"),(0,r.kt)("h2",{id:"tableaux"},"Tableaux"),(0,r.kt)("p",null,"Les tableaux sont l\xe0 pour r\xe9soudre ce probl\xe8me et nous permettre de stocker plusieurs \xe9l\xe9ments."),(0,r.kt)("p",null,"Ils font partie de ce qu'on appelle les ",(0,r.kt)("strong",{parentName:"p"},"structures de donn\xe9es"),", des structures permettant d'organiser de fa\xe7on particuli\xe8re des donn\xe9es, on les nomme aussi des ",(0,r.kt)("strong",{parentName:"p"},"conteneurs"),"."),(0,r.kt)("p",null,"En ce qui concerne les tableaux il en existe principalement deux types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"std::array")," qui permet de stocker un nombre fix\xe9 \xe0 l'avance d'\xe9l\xe9ments"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"std::vector")," qui permet de stocker un nombre variable ou dynamique d'\xe9l\xe9ments")),(0,r.kt)("p",null,"A retenir que les tableaux permettent seulement de stocker ",(0,r.kt)("strong",{parentName:"p"},"des variables de m\xeame type"),". "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Il existe bien d'autres ",(0,r.kt)("strong",{parentName:"p"},"structures de donn\xe9es")," qui stockent de fa\xe7on diff\xe9rente (avec des avantages et des inconv\xe9nients) mais nous n'allons pas rentrer dans ce d\xe9tail pour l'instant. ")),(0,r.kt)("h3",{id:"stdvector"},"std::vector"),(0,r.kt)("p",null,"Comme vous le remarquez, j'ai ajout\xe9 ",(0,r.kt)("strong",{parentName:"p"},"std::")," devant vector ce qui nous indique que c'est une fonctionnalit\xe9 d\xe9j\xe0 cod\xe9e pour nous dans la biblioth\xe8que standard. Pour pouvoir s'en servir on va donc inclure le fichier contenant cette fonctionnalit\xe9 en faisant ",(0,r.kt)("strong",{parentName:"p"},"#include < vector >")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"std::vector")," est un ",(0,r.kt)("strong",{parentName:"p"},"tableau dynamique")," qui s'",(0,r.kt)("strong",{parentName:"p"},"agrandit")," et se ",(0,r.kt)("strong",{parentName:"p"},"r\xe9tr\xe9cit")," en fonction du nombre d'\xe9l\xe9ments que l'on souhaite stocker \xe0 l'int\xe9rieur."),(0,r.kt)("p",null,"On l'initialise entre accolades en pr\xe9cisant entre chevrons (",(0,r.kt)("kbd",null,"<")," et ",(0,r.kt)("kbd",null,">"),") le type de variable que l'on souhaite stocker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector</* type des \xe9l\xe9ments du tableau */> nom {};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="des exemples"',title:'"des','exemples"':!0},"#include <vector>\n\nint main()\n{\n    // initialisation d'un tableau \xe0 remplir plus tard\n    std::vector<int> array01 {};\n\n    // il est aussi possible de le pr\xe9remplir \xe0 sa cr\xe9ation\n    std::vector<int> array02 { 12, 18, 8, 4, 9 };\n\n    // on peut rendre constant afin d'\xe9viter de future modifications si c'est ce que l'on souhaite\n    std::vector<float> const array03 { 3.1415f, 5.2365f };\n\n    // il est aussi possible de l'initialiser en copiant les valeurs d'un autre tableau de cette mani\xe8re\n    std::vector<float> array04 { array03 };\n\n    return 0;\n}\n")),(0,r.kt)("h3",{id:"manipuler-un-stdvector"},"Manipuler un std::vector"),(0,r.kt)("h4",{id:"acc\xe9der-aux-\xe9l\xe9ments"},"Acc\xe9der aux \xe9l\xe9ments"),(0,r.kt)("p",null,"Pour acc\xe9der aux \xe9l\xe9ments on utilise les crochets (",(0,r.kt)("kbd",null,"[")," et ",(0,r.kt)("kbd",null,"]"),") apr\xe8s le nom de notre tableau, avec la position de l\u2019\xe9l\xe9ment \xe0 r\xe9cup\xe9rer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <vector>\n#include <iostream>\n\nint main()\n{\n    std::vector<int> array { 12, 18, 8, 4, 9 };\n    std::cout << "the second \xe9l\xe9ment is " << array[1] << std::endl;\n    \n    return 0;\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f g\xe9n\xe9ralement en informatique (c'est le cas en ",(0,r.kt)("strong",{parentName:"p"},"C++"),"), les \xe9l\xe9ments sont index\xe9s \xe0 partir de ",(0,r.kt)("strong",{parentName:"p"},"0")," et ",(0,r.kt)("strong",{parentName:"p"},"non 1"),". c'est pour \xe7a que ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," correspond au premier \xe9l\xe9ment et ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," au deuxi\xe8me dans notre exemple.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Et si j\u2019acc\xe8de \xe0 l\u2019\xe9l\xe9ment d'index ",(0,r.kt)("inlineCode",{parentName:"p"},"6")," (donc le 7\xe8me \xe9l\xe9ment) alors que mon tableau n'en contient que ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),", que se passe-t-il\u202f?"),(0,r.kt)("p",{parentName:"admonition"},"C'est un ",(0,r.kt)("strong",{parentName:"p"},"comportement indetermin\xe9"),". Le programme peut continuer sans rien dire, ou alors s'arr\xeater brusquement avec des erreurs nomm\xe9es g\xe9n\xe9ralement ",(0,r.kt)("strong",{parentName:"p"},'"out of range"')," (d\xe9passement de capacit\xe9) ou ",(0,r.kt)("strong",{parentName:"p"},'"segmentation fault"')," (erreur de segmentation).\nIl ne ",(0,r.kt)("strong",{parentName:"p"},"faut pas")," utiliser d\u2019indice ",(0,r.kt)("strong",{parentName:"p"},"inf\xe9rieur \xe0 0")," ou ",(0,r.kt)("strong",{parentName:"p"},"sup\xe9rieur ou \xe9gal")," \xe0 la ",(0,r.kt)("strong",{parentName:"p"},"taille")," de notre tableau.")),(0,r.kt)("h4",{id:"taille-du-tableau"},"Taille du tableau"),(0,r.kt)("p",null,"Pour conna\xeetre la taille du tableau on va utiliser la fonction propre (appel\xe9e ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"size()"),"  qui renvoie le nombre d'\xe9l\xe9ments."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Une ",(0,r.kt)("strong",{parentName:"p"},"fonction")," est un regroupement d'instructions que permet de r\xe9utiliser du code \xe0 plusieurs endroits d'un programme. Une ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode")," est une ",(0,r.kt)("strong",{parentName:"p"},"fonction")," propre \xe0 un objet(ici notre ",(0,r.kt)("inlineCode",{parentName:"p"},"std::vector"),") et qui peut le manipuler ou retourner des informations \xe0 son sujet.\nNous en reparlerons plus en d\xe9tail dans un prochain chapitre, mais nous pouvons d\xe8s maintenant en utiliser.")),(0,r.kt)("p",null,"Le type de retour de cette ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode")," est un type nouveau, que nous n\u2019avons pas rencontr\xe9 jusque-l\xe0 et qui s\u2019appelle ",(0,r.kt)("strong",{parentName:"p"},"std::size_t"),".\nC\u2019est un type ",(0,r.kt)("strong",{parentName:"p"},"entier")," non sign\xe9 capable de stocker l'index d'un \xe9l\xe9ment ou la taille de n\u2019importe quel tableau, aussi grand soit-il. C'est, pour faire simple, un ",(0,r.kt)("strong",{parentName:"p"},"tr\xe8s grand entier positif")," \xe9quivalent \xe0 \xe9crire ",(0,r.kt)("inlineCode",{parentName:"p"},"unsigned long int"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <vector>\n\nint main()\n{\n    std::vector<int> const array { 12, 18, 8, 4, 9 };\n\n    std::size_t const size { array.size() };\n    std::cout << "Mon tableau contient " << size << " \xe9l\xe9ments." << std::endl;\n\n    return 0;\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Il existe aussi une fonction ",(0,r.kt)("strong",{parentName:"p"},"std::size(...)")," qui prends en param\xe8tre le tableau et retourne sa taille."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::size_t const size { std::size(array) };\n")),(0,r.kt)("p",{parentName:"admonition"},"Dans la pratique, j'utilise plut\xf4t la ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode"),", plus lisible selon moi mais c'est un avis personnel et vous \xeates libres de choisir ce qu\u2019il vous pla\xeet. ")),(0,r.kt)("h4",{id:"premier-et-dernier-\xe9l\xe9ment"},"Premier et dernier \xe9l\xe9ment"),(0,r.kt)("p",null,"On pourrait utiliser la taille pour acc\xe9der au dernier \xe9l\xe9ment du tableau mais on peut aussi utiliser deux autres m\xe9thodes (",(0,r.kt)("strong",{parentName:"p"},"front()")," et ",(0,r.kt)("strong",{parentName:"p"},"back()"),") pour acc\xe9der au premier et au dernier \xe9l\xe9ment du tableau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <vector>\n\nint main()\n{\n    std::vector<int> const array { 12, 18, 8, 4, 9 };\n\n    // Fa\xe7on de faire h\xe9rit\xe9 du c en utilisant la taille du tableau (attention au -1 les index commencent \xe0 0)\n    std::cout << "Le dernier \xe9l\xe9ment est " << array[array.size() - 1] << "." << std::endl;\n\n    std::cout << "Le premier \xe9l\xe9ment est " << array.front() << "." << std::endl;\n    std::cout << "Le dernier \xe9l\xe9ment est " << array.back() << "." << std::endl;\n\n    return 0;\n}\n')),(0,r.kt)("h4",{id:"v\xe9rifier-si-un-tableau-est-vide"},"V\xe9rifier si un tableau est vide"),(0,r.kt)("p",null,"Pour savoir si le tableau est vide on peut utiliser une ",(0,r.kt)("strong",{parentName:"p"},"condition")," sur la taille du tableau. Il y a aussi la m\xe9thode ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"empty()"))," qui fait ce test pour nous et permet d'\xe9crire quelque chose de plus lisible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <vector>\n\nint main()\n{\n    std::vector<int> const array01 { };\n    std::vector<int> const array02 { 12, 18, 8, 4, 9 };\n\n    std::cout << std::boolalpha;\n\n    std::cout << "array01 est vide : " << array01.size() == 0 << std::endl;\n\n    std::cout << "array01 est vide : " << array01.empty() << std::endl;\n    std::cout << "array02 est vide : " << array02.empty() << std::endl;\n    return 0;\n}\n')),(0,r.kt)("h4",{id:"afficher-les-\xe9l\xe9ments"},"Afficher les \xe9l\xe9ments"),(0,r.kt)("p",null,"Pour afficher les \xe9l\xe9ments du tableau on peut simplement utiliser sa taille et une boucle ",(0,r.kt)("strong",{parentName:"p"},"for")," pour it\xe9rer sur les diff\xe9rentes valeurs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <vector>\n\nint main()\n{\n    std::vector<int> const array { 12, 18, 8, 4, 9 };\n\n    for (std::size_t i {0}; i < array.size(); i++)\n    {\n        std::cout << array[i] << std::endl;\n    }\n\n    return 0;\n}\n")),(0,r.kt)("p",null,"Depuis le C++ moderne (\xe0 partir de ",(0,r.kt)("strong",{parentName:"p"},"C++11"),") il existe une nouvelle fa\xe7on de parcourir des ",(0,r.kt)("strong",{parentName:"p"},"conteneurs")," (qui se g\xe9n\xe9ralise sur d'autres structures de donn\xe9es):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"for (/* type d'un \xe9l\xe9ment du tableau */ nom : /* structure de donn\xe9es \xe0 parcourir */)\n{\n\n}\n")),(0,r.kt)("p",null,"Plus besoin de r\xe9cup\xe9rer la taille et cela va rendre notre code plus lisible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Petit exemple avec std::vector"',title:'"Petit',exemple:!0,avec:!0,'std::vector"':!0},"#include <iostream>\n#include <vector>\n\nint main()\n{\n    std::vector<int> const array { 12, 18, 8, 4, 9 };\n\n    for (int const value : array)\n    {\n        std::cout << value << std::endl;\n    }\n\n    return 0;\n}\n")),(0,r.kt)("h4",{id:"ajouter-supprimer-et-modifier-des-\xe9l\xe9ments"},"Ajouter, supprimer et modifier des \xe9l\xe9ments"),(0,r.kt)("p",null,"Comme expliqu\xe9, le std::vector est dynamique dans le sens o\xf9 il est possible d'ajouter ou de supprimer des \xe9l\xe9ments.\nC'est avec la m\xe9thode ",(0,r.kt)("strong",{parentName:"p"},"push_back")," que l'on ajoute un \xe9l\xe9ment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <vector>\n\nint main()\n{\n    std::vector<int> array { 42 };\n    // On ajoute des \xe9l\xe9ments\n    array.push_back(23);\n    array.push_back(5);\n\n    for (int const value : array)\n    {\n        std::cout << value << std::endl;\n    }\n\n    return 0;\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"On ne pourra pas ajouter un \xe9l\xe9ment de type diff\xe9rent dans notre tableau, un tableau ne peut contenir qu'un seul type de variable.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Pour supprimer un \xe9l\xe9ment on utilisera les m\xe9thodes ",(0,r.kt)("inlineCode",{parentName:"p"},"pop_back")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"clear"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Clear")," comme son nom l'indique permet de vider enti\xe8rement le tableau et ",(0,r.kt)("inlineCode",{parentName:"p"},"pop_back")," permet de retirer ",(0,r.kt)("strong",{parentName:"p"},"et")," retourner le dernier \xe9l\xe9ment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <vector>\n#include <iostream>\n\nint main()\n{\n    std::vector<int> array { 42, 12 };\n\n    std::cout << "Taille avant clear : " << array.size() << std::endl;\n\n    array.clear();\n\n    std::cout << "Taille apr\xe8s clear : " << array.size() << std::endl;\n\n    array.push_back(23);\n    array.push_back(42);\n    array.push_back(25);\n\n    std::cout << "Le tableau contient maintenant: ";\n    for (int const value : array)\n    {\n        std::cout << value << ", ";\n    }\n    std::cout << std::endl;\n\n    tableau_de_int.pop_back();\n\n    std::cout << "Le tableau contient maintenant: ";\n    for (int const value : array)\n    {\n        std::cout << value << ", ";\n    }\n    std::cout << std::endl;\n\n    if(!std::empty(array))\n    {\n        int last_value = tableau_de_int.pop_back();\n\n        std::cout << "La derni\xe8re valeur du tableau \xe9tait : " << last_value << std::endl;\n\n        std::cout << "Le tableau contient maintenant: ";\n        for (int const value : array)\n        {\n            std::cout << value << ", ";\n        }\n        std::cout << std::endl;\n        \n    }\n\n    return 0;\n}\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Appeler ",(0,r.kt)("strong",{parentName:"p"},"pop_back")," sur un tableau vide est aussi un ",(0,r.kt)("strong",{parentName:"p"},"comportement ind\xe9termin\xe9"),". Une tr\xe8s bonne pratique est donc de s'assurer que le tableau n'est pas vide.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Enfin, pour pouvoir modifier une valeur il suffit d'acc\xe9der \xe0 l'\xe9l\xe9ment (\xe0 condition que le tableau ou la variable ne soit pas constante \xe9videmment) d'utiliser le symbole \xe9gal ",(0,r.kt)("kbd",null,"="),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <vector>\n\nint main()\n{\n    std::vector<int> array { 24, 12, 6 };\n\n    // On change la valeur du premier \xe9l\xe9ment\n    array[0] = 15;\n\n    return 0;\n}\n")),(0,r.kt)("h2",{id:"stdarray"},"std::array"),(0,r.kt)("p",null,"std::array est un tableau ",(0,r.kt)("strong",{parentName:"p"},"statique"),", c\u2019est-\xe0-dire que sa taille doit \xeatre connue \xe0 la compilation et ne peut pas varier.\nEn contre-partie, cette structure de donn\xe9es est plus performant et plus rapide qu\u2019un ",(0,r.kt)("strong",{parentName:"p"},"std::vector")," puisqu\u2019il n\u2019y a pas d\u2019op\xe9ration d\u2019ajout ou de retrait d\u2019\xe9l\xe9ments."),(0,r.kt)("p",null,"Pour l\u2019utiliser, il faut inclure le ficher qui contient cette fonctionnalit\xe9 (",(0,r.kt)("inlineCode",{parentName:"p"},"#include < array >"),")."),(0,r.kt)("p",null,"On l'initialise en pr\xe9cisant entre chevrons le ",(0,r.kt)("strong",{parentName:"p"},"type")," de variable que l'on souhaite stocker et sa ",(0,r.kt)("strong",{parentName:"p"},"taille"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::array</* type des \xe9l\xe9ments du tableau */, /* taille du tableau */> nom {};\n")),(0,r.kt)("p",null,"Contrairement \xe0 ",(0,r.kt)("strong",{parentName:"p"},"std::vector"),", un tableau statique doit contenir autant d'\xe9l\xe9ments que la taille pr\xe9cis\xe9e.\nAinsi, si l'on ne pr\xe9cise donc rien ou pas la totalit\xe9 des \xe9l\xe9ments \xe0 son initialisation, le tableau va \xeatre rempli avec des valeurs par d\xe9faut."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <array>\n#include <iostream>\n\nint main()\n{\n    std::array<int, 5> array_of_integer { 24, 12, 6, 32, 8 };\n\n    std::cout << "Le tableau d\'entier contient: ";\n    for (int const integer : array_of_integer)\n    {\n        std::cout << integer << ", ";\n    }\n    std::cout << std::endl;\n\n    // les 4 autres valeurs non pr\xe9cis\xe9es seront donc \xe9gale \xe0 0.0f\n    std::array<float, 6> array_of_float { 45.3f, 142.857f };\n\n    std::cout << "Le tableau de flottant contient: ";\n    for (float const integer : array_of_integer)\n    {\n        std::cout << integer << ", ";\n    }\n    std::cout << std::endl;\n\n    // Ce tableau sera rempli de 4 valeurs par d\xe9faut \xe9gales \xe0 0.0\n    std::array<double, 4> array_of_double { };\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"Il existe la m\xe9thode ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"fill"))," sp\xe9cifique au ",(0,r.kt)("inlineCode",{parentName:"p"},"std::array")," qui permet de le remplir avec une valeur donn\xe9e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <array>\n#include <iostream>\n\nint main()\n{\n    std::array<int, 5> array { 1, 2, 3, 4, 5};\n\n    array.fill(3);\n\n    std::cout << "Le tableau contient: ";\n    for (int const value : array)\n    {\n        std::cout << value << ", ";\n    }\n    std::cout << std::endl;\n\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"Le reste des fonctionnalit\xe9s reste identique avec le ",(0,r.kt)("inlineCode",{parentName:"p"},"std::vector")," (hors les ajouts et suppressions car le tableau ne change pas de taille ici)."),(0,r.kt)("h2",{id:"pour-aller-plus-loin"},"Pour aller plus loin"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/container/vector"},"std::vector")," et ",(0,r.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/container/array"},"std::array")," sont des structures qui disposent d'une multitude de m\xe9thodes tr\xe8s utiles, je vous laisse chercher par vous m\xeame dans la documentation ou revenir vers moi si vous avez des questions \xe0 ce sujet."),(0,r.kt)("h2",{id:"stdstring-un-tableau-cach\xe9"},"std::string: un tableau cach\xe9"),(0,r.kt)("p",null,"Nous avions d\xe9couvert le type un peu particulier ",(0,r.kt)("strong",{parentName:"p"},"std::string")," dans le chapitre sur les variables."),(0,r.kt)("p",null,'Ce "type" est lui m\xeame une structure de donn\xe9es qui permet de stocker du texte, une suite de caract\xe8res (de type ',(0,r.kt)("strong",{parentName:"p"},"char")," donc)."),(0,r.kt)("p",null,"Le type ",(0,r.kt)("strong",{parentName:"p"},"std::string")," n\u2019est donc rien d\u2019autre qu'un ",(0,r.kt)("strong",{parentName:"p"},'tableau "dynamique" de char'),", con\xe7u et optimis\xe9 sp\xe9cialement pour le stockage de texte."),(0,r.kt)("p",null,"On peut donc faire toutes les op\xe9rations que nous venons de voir, acc\xe9der \xe0 sa taille, acc\xe9der aux caracat\xe8res, les modifier, en ajouter ou supprimer et enfin boucler sur les caract\xe8res."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="des exemples"',title:'"des','exemples"':!0},'\n#include <iostream>\n#include <string>\n\nint main()\n{\n    std::string phrase { "Hello IMAC!" };\n\n    std::cout << "Premier caract\xe8re : " << phrase.front() << std::endl;\n    std::cout << "Dernier caract\xe8re : " << phrase.back() << std::endl;\n\n    phrase.pop_back();\n    phrase.push_back(\'.\');\n\n    std::cout << phrase << std::endl;\n\n    phrase[9] = \' \';\n    std::cout << phrase << std::endl;\n\n    std::cout << "Cette phrase contient " << phrase.size() << " caract\xe8res." << std::endl;\n    // Il existe aussi "phrase.length()" qui fait exactement la m\xeame chose\n\n    for (char lettre : phrase)\n    {\n        std::cout << lettre << \',\';\n    }\n    std::cout << std::endl;\n\n    std::cout << std::boolalpha;\n    std::cout << "Est ce que la phrase est vide ? " << std::empty(phrase) << std::endl;\n\n    return 0;\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"std::string")," dispose de nombreuses autres m\xe9thodes permettant de faire d'autres choses sp\xe9cifiques \xe0 la gestion de texte. Nous aurons l\u2019occasion de le revoir, retenez simplement ici que ",(0,r.kt)("strong",{parentName:"p"},"std::string")," peut \xeatre ",(0,r.kt)("strong",{parentName:"p"},"manipul\xe9 comme un tableau"),"."),(0,r.kt)("h2",{id:"r\xe9sum\xe9"},"R\xe9sum\xe9"),(0,r.kt)("p",null,"Il existe plusieurs types de tableaux, ",(0,r.kt)("strong",{parentName:"p"},"statique")," quand la taille est fixe et ",(0,r.kt)("strong",{parentName:"p"},"dynamique")," quand elle peut varier."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"std::vector")," est un tableau ",(0,r.kt)("strong",{parentName:"li"},"dynamique"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"std::array")," est un tableau ",(0,r.kt)("strong",{parentName:"li"},"statique"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"std::string")," est un tableau ",(0,r.kt)("strong",{parentName:"li"},"dynamique")," sp\xe9cialement con\xe7u pour la gestion du texte.")))}c.isMDXComponent=!0}}]);
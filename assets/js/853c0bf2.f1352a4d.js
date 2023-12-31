"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[4228],{3636:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(5893),t=s(1151);const r={title:"Des boucles pour gagner du temps",tags:["C++"],sidebar_position:4},l=void 0,o={id:"Lessons/S1/Loops",title:"Des boucles pour gagner du temps",description:"Nous avons maintenant la capacit\xe9 d'ex\xe9cuter des codes diff\xe9rents en fonction de conditions.",source:"@site/content/Lessons/S1/Loops.md",sourceDirName:"Lessons/S1",slug:"/Lessons/S1/Loops",permalink:"/Learn--cpp_programming/Lessons/S1/Loops",draft:!1,unlisted:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:4,frontMatter:{title:"Des boucles pour gagner du temps",tags:["C++"],sidebar_position:4},sidebar:"Lessons",previous:{title:"Un peu de logique avec les conditions",permalink:"/Learn--cpp_programming/Lessons/S1/Conditions"},next:{title:"Des tableaux",permalink:"/Learn--cpp_programming/Lessons/S1/Arrays"}},c={},a=[{value:"While - &quot;Tant que ...&quot;",id:"while---tant-que-",level:2},{value:"Do while",id:"do-while",level:2},{value:"For",id:"for",level:2},{value:"Contr\xf4ler l&#39;ex\xe9cution",id:"contr\xf4ler-lex\xe9cution",level:2},{value:"Break",id:"break",level:3},{value:"Continue",id:"continue",level:3},{value:"Switch",id:"switch",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Nous avons maintenant la capacit\xe9 d'ex\xe9cuter des codes diff\xe9rents en fonction de ",(0,i.jsx)(n.strong,{children:"conditions"}),".\nCependant, notre programme reste essentiellement lin\xe9aire, car nous ex\xe9cutons les instructions de haut en bas, l'un \xe0 la suite des autres."]}),"\n",(0,i.jsxs)(n.p,{children:["Nous allons maintenant explorer de nouvelles structures de contr\xf4le: les ",(0,i.jsx)(n.strong,{children:"boucles"}),".\nElles vont nous permettre de r\xe9p\xe9ter plusieurs fois une s\xe9rie d'instructions, selon nos besoins."]}),"\n",(0,i.jsx)(n.h2,{id:"while---tant-que-",children:'While - "Tant que ..."'}),"\n",(0,i.jsxs)(n.p,{children:["La premi\xe8re est la boucle ",(0,i.jsx)(n.strong,{children:"while"}),", de l'anglais qui signifie \"tant que\".\nElle ex\xe9cute une s\xe9rie d\u2019instructions tant qu'une condition est vraie.\nUne fois que la condition devient fausse la boucle s\u2019arr\xeate et passe \xe0 la suite."]}),"\n",(0,i.jsx)(n.mermaid,{value:"graph\nA(Start)\nB{Condition}\nC{Instructions}\nD(End)\n\nA --\x3e B\nB -- Condition is true --\x3e C\nC --\x3e B\nB -- Condition is false --\x3e D"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Un petit exemple"',children:"#include <iostream>\nint main()\n{\n    int count { 0 }; // initialisation (d'un compteur ou autre chose li\xe9 \xe0 la boucle)\n    while ( count < 10 /* condition */)\n    {\n        std::cout << count << std::endl; // Instructions\n        count++; // It\xe9ration (mise \xe0 jour du compteur g\xe9n\xe9ralement)\n    }\n\n    return 0;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Le code \xe9value la condition avant d'effectuer quoi que ce soit. Dans notre cas si le ",(0,i.jsx)(n.strong,{children:"compte est sup\xe9rieur \xe0 0"})," alors on va afficher le nombre et le d\xe9cr\xe9menter.\nQuand finalement count vaut 0, la condition devient fausse, on passe \xe0 la suite du code. (",(0,i.jsx)(n.strong,{children:"on ne va donc pas afficher la valeur 0"}),")"]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:["Attention aux ",(0,i.jsx)(n.strong,{children:"boucles infinies"})," !"]}),(0,i.jsx)(n.p,{children:"Lorsque vous cr\xe9ez une boucle, assurez-vous qu'elle puisse s'arr\xeater \xe0 un moment ! Si la condition est toujours vraie, votre programme ne s'arr\xeatera jamais !"})]}),"\n",(0,i.jsx)(n.h2,{id:"do-while",children:"Do while"}),"\n",(0,i.jsxs)(n.p,{children:["De mani\xe8re tr\xe8s similaire il existe la boucle ",(0,i.jsx)(n.code,{children:"Do... while"}),', qui signifie "fait .. tant que..."']}),"\n",(0,i.jsx)(n.p,{children:"Ce type de boucle est moins utilis\xe9. La seule chose qui change par rapport \xe0 une boucle while, c'est la position de la condition : au lieu d'\xeatre au d\xe9but de la boucle, la condition est \xe0 la fin."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["La boucle ",(0,i.jsx)(n.code,{children:"while"})," peut tr\xe8s bien ne ",(0,i.jsx)(n.strong,{children:"jamais"})," \xeatre ex\xe9cut\xe9e si la ",(0,i.jsx)(n.strong,{children:"condition est fausse d\xe8s le d\xe9part"}),".\nDans mon exemple pr\xe9c\xe9dent, si on avait initialis\xe9 le count \xe0 ",(0,i.jsx)(n.code,{children:"-1"}),", la condition aurait \xe9t\xe9 fausse d\xe8s le d\xe9but, et on ne serait jamais rentr\xe9 dans la boucle."]})}),"\n",(0,i.jsxs)(n.p,{children:["Pour la boucle ",(0,i.jsx)(n.code,{children:"Do... while"}),", on rentre ",(0,i.jsx)(n.strong,{children:"au moins une fois"})," \xe0 l'int\xe9rieur. Le test se fait \xe0 la fin."]}),"\n",(0,i.jsx)(n.p,{children:"Il est donc parfois utile de faire des boucles de ce type, pour s'assurer que l'on rentre au moins une fois dans la boucle."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nint main()\n{\n    int sum {0};\n    int number;\n    \n\tdo {\n\t\tstd::cout << "Entre un nombre: ";\n\n\t\tstd::cin >> number;\n\n\t\tsum += number;\n\n\t} while (number != 0);\n\n\tstd::cout << "La somme vaut " << sum << std::endl;\n\n\treturn 0;\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:['Il y a une petite sp\xe9cificit\xe9 suppl\xe9mentaire ici, il faut ajouter un "',(0,i.jsx)(n.strong,{children:";"}),'" \xe0 la fin de la ligne contenant la condition while.']})}),"\n",(0,i.jsx)(n.h2,{id:"for",children:"For"}),"\n",(0,i.jsx)(n.p,{children:"Un des cas les plus fr\xe9quents avec les boucles est d'avoir un compteur et un nombre d'it\xe9rations pr\xe9d\xe9fini."}),"\n",(0,i.jsxs)(n.p,{children:["On pourrait tr\xe8s bien le faire avec la boucle ",(0,i.jsx)(n.code,{children:"while"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"int count { 0 }; // initialisation (d'un compteur ou autre chose li\xe9 \xe0 la boucle)\nwhile ( count < 10 /* condition */)\n{\n    // Instructions\n    count++; // It\xe9ration (mise \xe0 jour du compteur g\xe9n\xe9ralement)\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Mais il existe une boucle d\xe9di\xe9e \xe0 cela qui permet de s\xe9parer le reste de notre code de ce qui est li\xe9 \xe0 la boucle. Cela rend le code plus clair et plus compr\xe9hensible surtout dans le cas ou l'on connait \xe0 l'avance le nombre d'it\xe9rations."}),"\n",(0,i.jsxs)(n.p,{children:["C'est la boucle ",(0,i.jsx)(n.code,{children:"for"}),' ("',(0,i.jsx)(n.strong,{children:"pour"}),"\" en anglais) et elle s'utilise selon le sch\xe9ma suivant:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"for (int count {0} /*initialisation*/ ; count < 10 /*condition*/ ; count++/*It\xe9ration*/)\n{\n    // Instructions\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Voil\xe0 le m\xeame exemple qu'avec la boucle ",(0,i.jsx)(n.code,{children:"while"})," mais ici avec la boucle ",(0,i.jsx)(n.code,{children:"for"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nint main()\n{\n    for (int count { 0 }; count < 10 ; count++)\n    {\n        std::cout << count << std::endl;\n    }\n\n    return 0;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"L'avantage ici est que le d\xe9tail de ce que fait la boucle est concentr\xe9 sur la m\xeame ligne."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Un autre gros avantage est que la ",(0,i.jsx)(n.strong,{children:"port\xe9e de la variable"})," (",(0,i.jsx)(n.strong,{children:"scope"}),") est ",(0,i.jsx)(n.strong,{children:"limit\xe9e"})," \xe0 la boucle et donc rend notre code plus s\xfbr et propre."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nint main()\n{\n    for (int count { 10 }; count > 0 ; count--)\n    {\n        std::cout << count << std::endl;\n    }\n    \n    std::cout << count << std::endl;\n\n    return 0;\n}\n"})}),(0,i.jsxs)(n.p,{children:["La variable ",(0,i.jsx)(n.code,{children:"count"})," ici est uniquement n\xe9cessaire pour la boucle en question et n'a donc pas lieu d'\xeatre partag\xe9e ensuite avec le reste du code pour \xe9viter des erreurs.\nSi on essaye de le faire le compilateur nous donne l'erreur suivante:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Compilation failed due to following error(s)"',children:"main.cpp: In function \u2018int main()\u2019:\nmain.cpp:17:18: error: \u2018count\u2019 was not declared in this scope\n   17 |     std::cout << count << std::endl;\n      |                  ^~~~~\n"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Mais alors quand choisir une boucle ",(0,i.jsx)(n.code,{children:"while"})," ou une boucle ",(0,i.jsx)(n.code,{children:"for"})," ?"]}),"\n",(0,i.jsxs)(n.p,{children:["C'est une question l\xe9gitime et il n'y a pas de bonne r\xe9ponse, vous \xeates libre.\nEn g\xe9n\xe9ral on utilise une boucle ",(0,i.jsx)(n.code,{children:"for"})," dans le cas o\xf9 l'on connait le nombre d'it\xe9rations \xe0 l'avance (un compteur, un nombre de niveaux ou de joueurs dans un jeu, etc...).\nLa boucle ",(0,i.jsx)(n.code,{children:"while"}),", quant \xe0 elle, est g\xe9n\xe9ralement utilis\xe9e pour effectuer des actions sans savoir \xe0 l'avance le nombre d'it\xe9rations que l'on va effectuer (par exemple la gestion de l'entr\xe9e utilisateur ou dans un jeu faire bouger un ennemi ",(0,i.jsx)(n.strong,{children:"tant qu"}),"'il n'a pas atteint sa cible)"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:['Plus simplement, essayez de dire ce que vous voulez faire et si votre phrase contient "',(0,i.jsx)(n.strong,{children:"pour"}),'" ou "',(0,i.jsx)(n.strong,{children:"pour chaque ... faire ..."}),"\" il est pr\xe9f\xe9rable d'utiliser une boucle ",(0,i.jsx)(n.code,{children:"for"}),'. Et si vous vous d\xeetes "',(0,i.jsx)(n.strong,{children:"Tant que ... faire ..."}),'" alors vous devriez utiliser une boucle ',(0,i.jsx)(n.code,{children:"while"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"contr\xf4ler-lex\xe9cution",children:"Contr\xf4ler l'ex\xe9cution"}),"\n",(0,i.jsx)(n.p,{children:"Les boucles sont tr\xe8s utiles, mais parfois on aimerait pouvoir contr\xf4ler plus finement les instructions \xe0 l\u2019int\xe9rieur des accolades et pouvoir s'arr\xeater plus t\xf4t ou ne pas ex\xe9cuter les instructions pour un cas particulier."}),"\n",(0,i.jsxs)(n.p,{children:["Il existe en ",(0,i.jsx)(n.strong,{children:"C++"})," deux mots-cl\xe9s: ",(0,i.jsx)(n.strong,{children:"break"})," et ",(0,i.jsx)(n.strong,{children:"continue"})]}),"\n",(0,i.jsx)(n.h3,{id:"break",children:"Break"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Break"}),' (de anglais "casser"/"interrompre") permet d\'interrompre une boucle et mettre fin \xe0 l\u2019ex\xe9cution de celle-ci peu importe o\xf9 on en est.']}),"\n",(0,i.jsx)(n.p,{children:'Voyons un exemple plus "complexe" ensemble:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'for (int i { 0 }; i < 5; ++i)\n    {\n        std::cout << "i : " << i << std::endl;\n        \n        for (int j { 0 }; j < i; ++j)\n        {\n            if (j == 2)\n            {\n                std::cout << "break j == 2" << std::endl;\n                break;\n            }\n    \n            std::cout << "j : " << j << std::endl;\n        }\n        std::cout << std::endl;\n        \n    }\n'})}),"\n",(0,i.jsx)(n.p,{children:"qui nous donne le r\xe9sultat suivant:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"i: 0\n\ni: 1\nj: 0\n\ni: 2\nj: 0\nj: 1\n\ni: 3\nj: 0\nj: 1\nbreak j == 2\n\ni: 4\nj: 0\nj: 1\nbreak j == 2\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ici il y a plusieurs choses qui se passent:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"il y a d\xe9j\xe0 deux boucles imbriqu\xe9es, et oui rien ne nous emp\xeache de faire cela en C++"}),"\n",(0,i.jsxs)(n.li,{children:["la deuxi\xe8me boucle (sur la variable ",(0,i.jsx)(n.strong,{children:"j"}),") d\xe9pend de la variable ",(0,i.jsx)(n.strong,{children:"i"})," de la premi\xe8re (c'est parfois utile de le faire et je vous montre donc un petit exemple)"]}),"\n",(0,i.jsxs)(n.li,{children:["ici le mot cl\xe9 ",(0,i.jsx)(n.code,{children:"break"})," permet d'interrompre la boucle de la variable j si la valeur de j est \xe9gale \xe0 2."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Une petite analyse des it\xe9rations s'impose:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["la premi\xe8re fois i est \xe9gal \xe0 0 et donc la condition ",(0,i.jsx)(n.code,{children:"j < i"})," est directement fausse vu que j aussi est \xe9gal \xe0 0.\nensuite"]}),"\n",(0,i.jsxs)(n.li,{children:["ensuite i est \xe9gal \xe0 1 et donc on passe une fois seulement dans la boucle du j car \xe0 la seconde it\xe9ration j devient \xe9gal \xe0 i et invalide la condition ",(0,i.jsx)(n.code,{children:"j < i"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["la troisi\xe8me fois c'est le ",(0,i.jsx)(n.code,{children:"break"})," qui entre en jeu et permet d'interrompre la boucle quand j est \xe9gal \xe0 2 (\xe0 noter que la condition de la boucle aurait aussi invalid\xe9 la condition ",(0,i.jsx)(n.code,{children:"j < i"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["enfin ici le ",(0,i.jsx)(n.code,{children:"break"})," prend tout son sens car s'il n'\xe9tait pas l\xe0, on aurait encore continu\xe9 un tour car j \xe9tant \xe9gal \xe0 3, la condition (",(0,i.jsx)(n.code,{children:"j < i"}),") serait valide car i est \xe9gal \xe0 4 et que ",(0,i.jsx)(n.code,{children:"3 < 4"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Comme nous venons de le voir, dans le cas de boucles imbriqu\xe9es cela arr\xeate seulement la boucle du niveau au dessus et pas toutes les boucles."})}),"\n",(0,i.jsx)(n.h3,{id:"continue",children:"Continue"}),"\n",(0,i.jsxs)(n.p,{children:["L\u2019autre mot-cl\xe9, ",(0,i.jsx)(n.code,{children:"continue"}),", permet de sauter l\u2019it\xe9ration courante."]}),"\n",(0,i.jsx)(n.p,{children:"Toutes les instructions restantes du bloc sont ignor\xe9es et la boucle continue au tour suivant."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'for (int i { 0 }; i < 5; ++i)\n{\n    if( i == 3)\n    {\n        continue;\n    }\n    std::cout << "i : " << i << std::endl;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Ce qui nous donne:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"i : 0\ni : 1\ni : 2\ni : 4\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsxs)(n.p,{children:["Comme cela interrompt la totalit\xe9 des instructions suivantes de la boucle cela peut \xeatre dangereux dans le cas d'une boucle ",(0,i.jsx)(n.strong,{children:"while"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nint main()\n{\n    int count { 10 };\n\n    while (count > 0)\n    {\n        std::cout << count << std::endl;\n\n        if (count == 5)\n        {\n            continue;\n        }\n        count--;\n    }\n\n    return 0;\n}\n"})}),(0,i.jsxs)(n.p,{children:["Ici, l'instruction de ",(0,i.jsx)(n.code,{children:"count--;"})," ne sera donc jamais appel\xe9e une fois que ",(0,i.jsx)(n.code,{children:"count"})," devient \xe9gal \xe0 5.\n",(0,i.jsx)(n.code,{children:"count"})," restera donc \xe9gal \xe0 5 ind\xe9finiment: C'est une ",(0,i.jsx)(n.strong,{children:"boucle infinie"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"switch",children:"Switch"}),"\n",(0,i.jsxs)(n.p,{children:["Mainteant que nous avons toutes les cartes en main revenons bri\xe8vement au ",(0,i.jsx)(n.strong,{children:"switch"})," dont je vous parlais au chapitre pr\xe9c\xe9dent sur les conditions."]}),"\n",(0,i.jsxs)(n.p,{children:["Tr\xe8s souvent on veut tester la valeur d'une variable et effectuer telle ou telle action en fonction. On pourrait tr\xe8s bien \xe9crire cela avec des ",(0,i.jsx)(n.code,{children:"else if"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nint main()\n{\n    int value { 42 };\n    if ( value == 12 )\n    {\n        // ...\n    }\n    else if ( value == 33 )\n    {\n        // ...\n    }\n    else  if ( value == 52)\n    {\n        //...\n    }\n    else {\n        //...  \n    }\n    return 0;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["C'est avec le mot cl\xe9 ",(0,i.jsx)(n.code,{children:"switch"})," que l'on va pouvoir faire cela de fa\xe7on plus lisible:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nint main()\n{\n    int value { 42 };\n    switch (value)\n    {\n        case 12:\n            // ...\n            break; // permet de quitter le bloc switch\n        case 33:\n            // ...\n            break;\n        case 52:\n            // ...\n            break;\n        default:\n            // ...\n            break;\n    }\n\n    return 0;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque l'expression test\xe9e est \xe9gale \xe0 une des valeurs list\xe9es avec les mots-cl\xe9s ",(0,i.jsx)(n.code,{children:"case"})," la ",(0,i.jsx)(n.strong,{children:"totalit\xe9"})," des instructions qui suivent sont ex\xe9cut\xe9es.\nLe mot cl\xe9 ",(0,i.jsx)(n.code,{children:"break"})," indique la sortie de la structure de contr\xf4le.\nLe mot cl\xe9 ",(0,i.jsx)(n.code,{children:"default"})," indique quelles instructions ex\xe9cuter si l'expression n'est jamais \xe9gale \xe0 une des valeurs."]}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsxs)(n.p,{children:["De mani\xe8re g\xe9n\xe9rale, n'oubliez pas d'ins\xe9rer des instructions ",(0,i.jsx)(n.code,{children:"break"})," entre chaque test, ce genre d'oubli est difficile \xe0 d\xe9tecter car aucune erreur n'est signal\xe9e...\nEn effet la ",(0,i.jsx)(n.strong,{children:"totalit\xe9"})," des instructions suivant le ",(0,i.jsx)(n.code,{children:"case"})," sont ex\xe9cut\xe9es et donc on pourrait se retrouver \xe0 ex\xe9cuter des instructions de mani\xe8re involontaire."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nint main()\n{\n    int value { 33 };\n    switch (value)\n    {\n        case 12:\n            std::cout << "value est \xe9gale \xe0 12" << std::endl;\n        case 33:\n            std::cout << "value est \xe9gale \xe0 33" << std::endl;\n        default:\n            std::cout << "value est diff\xe9rent de 12 ou 33" << std::endl;\n    }\n\n    return 0;\n}\n'})}),(0,i.jsx)(n.p,{children:"qui nous donne:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"value est \xe9gale \xe0 33\nvalue est diff\xe9rent de 12 ou 33\n"})}),(0,i.jsxs)(n.p,{children:["Cela peut \xeatre parfois voulu mais ici on se rend bien compte qu'il y a un probl\xe8me et il ne faut donc pas oublier le mot cl\xe9 ",(0,i.jsx)(n.code,{children:"break"}),"."]}),(0,i.jsx)(n.p,{children:"Voici un exemple o\xf9 cela peut \xeatre utile:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nint main()\n{\n    char letter { 'e' };\n    switch(letter)\n    {\n        case 'a':\n        case 'e':\n        case 'i':\n        case 'o':\n        case 'u':\n        case 'y':\n            std::cout << \"You entered a vowel.\" << std::endl;\n            break;\n        default:\n            std::cout << \"You entered a consonant.\" << std::endl;\n            break;\n    }\n\n    return 0;\n}\n"})}),(0,i.jsx)(n.p,{children:"Certains warnings de compilateur permette d'indiquer ce genre de cas mais c'est mieux d'y faire attention."})]}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Il existe trois types de boucle:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["la boucle ",(0,i.jsx)(n.code,{children:"while"})," qui permet d'ex\xe9cuter des instructions tant qu'une condition est v\xe9rifi\xe9e."]}),"\n",(0,i.jsxs)(n.li,{children:["la boucle ",(0,i.jsx)(n.code,{children:"Do while"})," qui permet de faire la m\xeame chose que la boucle ",(0,i.jsx)(n.code,{children:"while"})," mais en faisant le test seulement \xe0 la fin et permettant d'ex\xe9cuter les instructions ",(0,i.jsx)(n.strong,{children:"au moins une fois"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["la boucle ",(0,i.jsx)(n.code,{children:"for"})," plus utile en pratique quand l'on connait \xe0 l'avance le nombre d'it\xe9rations \xe0 effectuer. Elle permet aussi de mieux \"scoper\" les variables et ",(0,i.jsx)(n.strong,{children:"limiter leur port\xe9e"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Il existe deux mots-cl\xe9s ",(0,i.jsx)(n.code,{children:"break"})," et ",(0,i.jsx)(n.code,{children:"continue"})," qui permettent de contr\xf4ler plus finemment les boucles."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["La structure de contr\xf4le ",(0,i.jsx)(n.code,{children:"switch"})," est une alternative au ",(0,i.jsx)(n.code,{children:"else if"}),"."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(7294);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
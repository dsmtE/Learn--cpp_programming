"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[9789],{77351:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=r(85893),i=r(11151);const l={title:"TD2 - Variables",sidebar_position:2},t=void 0,c={id:"TDs/S1/Variables",title:"TD2 - Variables",description:"Exercice 1 (op\xe9rations)",source:"@site/content/TDs/S1/02_Variables.md",sourceDirName:"TDs/S1",slug:"/TDs/S1/Variables",permalink:"/Learn--cpp_programming/TDs/S1/Variables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"TD2 - Variables",sidebar_position:2},sidebar:"TDs",previous:{title:"TD1 - Mise en place",permalink:"/Learn--cpp_programming/TDs/S1/Setup"},next:{title:"TD3 - Conditions",permalink:"/Learn--cpp_programming/TDs/S1/Conditions"}},a={},o=[{value:"Exercice 1 (op\xe9rations)",id:"exercice-1-op\xe9rations",level:2},{value:"Exercice 2 (entr\xe9e utilisateur)",id:"exercice-2-entr\xe9e-utilisateur",level:2},{value:"Exercice 3 (cast)",id:"exercice-3-cast",level:2},{value:"Exercice 4",id:"exercice-4",level:2},{value:"Exercice 5 (ASCII)",id:"exercice-5-ascii",level:2},{value:"Exercice 6",id:"exercice-6",level:2},{value:"Exercice 7 (probl\xe8me de compilation)",id:"exercice-7-probl\xe8me-de-compilation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"exercice-1-op\xe9rations",children:"Exercice 1 (op\xe9rations)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Cr\xe9er une variable de type ",(0,s.jsx)(n.code,{children:"int"})," et initialiser la avec une valeur de votre choix."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Appliquer les ",(0,s.jsx)(n.strong,{children:"op\xe9rations"})," suivantes sur cette variable et afficher le r\xe9sultat de chaque op\xe9ration:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Incr\xe9menter"})," la variable de 1 (avec la m\xe9thode de votre choix)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Multiplier"})," la variable par 3."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Diviser"})," la variable par 2."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Utiliser la fonction ",(0,s.jsx)(n.code,{children:"std::cout"})," pour afficher la valeur de la variable."]})}),"\n",(0,s.jsx)(n.h2,{id:"exercice-2-entr\xe9e-utilisateur",children:"Exercice 2 (entr\xe9e utilisateur)"}),"\n",(0,s.jsxs)(n.p,{children:["Cr\xe9er un programme qui demande \xe0 l'utilisateur de saisir ",(0,s.jsx)(n.strong,{children:"trois valeurs flottantes"})," (de type ",(0,s.jsx)(n.code,{children:"float"}),")."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Calculer la ",(0,s.jsx)(n.strong,{children:"somme"})," de ces trois valeurs et stocker le r\xe9sultat dans une variable de type ",(0,s.jsx)(n.code,{children:"float"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Calculer de m\xeame la ",(0,s.jsx)(n.strong,{children:"moyenne"})," de ces trois valeurs."]}),"\n",(0,s.jsx)(n.li,{children:"Afficher le r\xe9sultat de la somme et de la moyenne."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Utiliser la fonction ",(0,s.jsx)(n.code,{children:"std::cin"})," pour lire la valeur saisie par l'utilisateur."]})}),"\n",(0,s.jsx)(n.h2,{id:"exercice-3-cast",children:"Exercice 3 (cast)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Cr\xe9er une variable enti\xe8re (de type ",(0,s.jsx)(n.code,{children:"int"}),") et l'initialiser avec la valeur ",(0,s.jsx)(n.code,{children:"11"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Afficher la valeur de cette variable."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Afficher la valeur de cette variable ",(0,s.jsx)(n.strong,{children:"divis\xe9e par 2"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Vous devriez obtenir une valeur de ",(0,s.jsx)(n.code,{children:"5"})," et non ",(0,s.jsx)(n.code,{children:"5.5"}),". ",(0,s.jsx)(n.strong,{children:"Pourquoi"})," ?"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Utiliser un cast pour convertir la variable en un type flottant.\nAfficher la valeur de la variable divis\xe9e par  ",(0,s.jsx)(n.code,{children:"2.0f"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"static_cast<type>(variable)"})," permet convertir une variable en un autre type."]})}),"\n",(0,s.jsx)(n.h2,{id:"exercice-4",children:"Exercice 4"}),"\n",(0,s.jsx)(n.p,{children:"\xc9crire un programme qui demande un nombre de jours \xe0 l'utilisateur et affiche le nombre d'ann\xe9es, de mois et de jours correspondant \xe0 ce nombre de jours."}),"\n",(0,s.jsx)(n.p,{children:'L\u2019a\ufb00ichage se fera sous la forme :\n"J jours correspondent \xe0: xx siecle xx annee xx mois xx semaine xx jours"'}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Pour simplifier le probl\xe8me, on consid\xe9rera que tous les mois ont 30 jours\net toutes les ann\xe9es 360 jours."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',children:"Entrez un nombre de jours : 4096\n4096 jours correspondent \xe0 : 0 siecle 11 annee 4 mois 2 semaine 2 jours\n"})}),"\n",(0,s.jsx)(n.h2,{id:"exercice-5-ascii",children:"Exercice 5 (ASCII)"}),"\n",(0,s.jsxs)(n.p,{children:["Demander \xe0 l'utilisateur de saisir un nombre entier entre ",(0,s.jsx)(n.strong,{children:"1"})," et ",(0,s.jsx)(n.strong,{children:"26"})," et afficher la lettre correspondante dans l'alphabet."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',children:"Entrez un nombre entre 1 et 26 : 5\nLa lettre correspondante est : E\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Le type ",(0,s.jsx)(n.code,{children:"char"})," permet de stocker un caract\xe8re. Il est possible de faire des op\xe9rations sur les caract\xe8res comme si c'\xe9tait des entiers."]}),(0,s.jsxs)(n.p,{children:["Le code ",(0,s.jsx)(n.strong,{children:"ASCII"})," associe les caract\xe8res \xe0 des entiers. Par exemple, le caract\xe8re 'A' est associ\xe9 \xe0 l'entier 65, 'B' \xe0 66, etc."]}),(0,s.jsx)(n.p,{children:"En ce qui nous concerne, nous allons utiliser le fait que les lettres majuscules sont associ\xe9es aux entiers de 65 \xe0 90 et les lettres minuscules aux entiers de 97 \xe0 122."}),(0,s.jsxs)(n.p,{children:["Vous pouvez trouver la table de correspondance ASCII compl\xe8te ",(0,s.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#Description",children:"ici"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"exercice-6",children:"Exercice 6"}),"\n",(0,s.jsxs)(n.p,{children:["Un cuisinier doit aller au march\xe9 pour r\xe9cup\xe9rer ses l\xe9gumes. Il a besoin de sacs de ",(0,s.jsx)(n.strong,{children:"pommes de terre"}),", de ",(0,s.jsx)(n.strong,{children:"carottes"})," et de ",(0,s.jsx)(n.strong,{children:"salades"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Vous avez les informations suivantes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Un sac de ",(0,s.jsx)(n.strong,{children:"pommes de terre"})," p\xe8se ",(0,s.jsx)(n.strong,{children:"2kg"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Le prix d'un ",(0,s.jsx)(n.strong,{children:"kg"})," de ",(0,s.jsx)(n.strong,{children:"pommes de terre"})," est de ",(0,s.jsx)(n.strong,{children:"1.5\u20ac"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Une ",(0,s.jsx)(n.strong,{children:"carotte"})," p\xe8se ",(0,s.jsx)(n.strong,{children:"150g"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Le prix d'un ",(0,s.jsx)(n.strong,{children:"kg"})," de ",(0,s.jsx)(n.strong,{children:"carottes"})," est de ",(0,s.jsx)(n.strong,{children:"2.5\u20ac"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Une salade co\xfbte ",(0,s.jsx)(n.strong,{children:"1.2\u20ac"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\xc9crire un programme qui demande \xe0 l'utilisateur de saisir le nombre de sacs de pommes de terre, de carottes et de salades qu'il souhaite acheter."}),"\n",(0,s.jsxs)(n.p,{children:["Le programme doit ensuite calculer le ",(0,s.jsx)(n.strong,{children:"prix total"})," de la commande et l'afficher."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="exemple d\'ex\xe9cution"',children:"Entrez le nombre de sacs de pommes de terre : 2\nEntrez le nombre de carottes : 3\nEntrez le nombre de salades : 1\n\nLe prix total de la commande est de 8.325 \u20ac\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Bonus",type:"info",children:[(0,s.jsx)(n.p,{children:"En bonus, afficher le d\xe9tail de la commande."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"...\n\nLe prix total de la commande est de 8.325 \u20ac\nd\xe9tails:\n- 2 sacs de pommes de terre : 6 \u20ac\n- 3 carottes : 1.125 \u20ac\n- 1 salade : 1.2 \u20ac\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"exercice-7-probl\xe8me-de-compilation",children:"Exercice 7 (probl\xe8me de compilation)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iotream>\n\nint main()\n{\n    const int a{5};    \n    int b{8};\n    float c{pi*3}; // je veux le r\xe9sultat de pi (environ 3.141592) fois 3\n\n    b += "20";  // je veux ajouter 20 \xe0 la valeur de b\n\n    a = a * 15; // je veux le r\xe9sultat de a fois 15\n    std::cout << "a: " << a << std::endl;\n\n    std::cout << "b: " << b << std::endl\n\n    std::cout << "c: " << c << std::endl;\n\n    return 0;\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"V\xe9rifier que le code ne compile pas et essayez de corriger les erreurs."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Pour ",(0,s.jsx)(n.strong,{children:"pi"})," vous pouvez utiliser la constante ",(0,s.jsx)(n.code,{children:"M_PI"})," d\xe9finie dans la biblioth\xe8que ",(0,s.jsx)(n.code,{children:"cmath"}),".\nIl faut ajouter ",(0,s.jsx)(n.code,{children:"#include <cmath>"})," en haut du fichier pour pouvoir l'utiliser."]})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var s=r(67294);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
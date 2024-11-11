"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[3341],{30322:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=r(85893),s=r(11151);const t={title:"S1 - Exercice - Structure Fraction"},c=void 0,d={id:"Annexes/Archives/Fraction",title:"S1 - Exercice - Structure Fraction",description:"Le but de cet exercice est de cr\xe9er une structure permettant de repr\xe9senter une fraction. Cette structure devra contenir deux entiers positifs, un pour le num\xe9rateur et un pour le d\xe9nominateur.",source:"@site/content/Annexes/Archives/Fraction.md",sourceDirName:"Annexes/Archives",slug:"/Annexes/Archives/Fraction",permalink:"/Learn--cpp_programming/Annexes/Archives/Fraction",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"S1 - Exercice - Structure Fraction"},sidebar:"Annexes",previous:{title:"L'IDE VSCode",permalink:"/Learn--cpp_programming/Annexes/VSCode"},next:{title:"Git",permalink:"/Learn--cpp_programming/Annexes/Git"}},o={},l=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Le but de cet exercice est de cr\xe9er une ",(0,i.jsx)(n.strong,{children:"structure"})," permettant de repr\xe9senter une ",(0,i.jsx)(n.strong,{children:"fraction"}),". Cette structure devra contenir deux entiers positifs, un pour le ",(0,i.jsx)(n.strong,{children:"num\xe9rateur"})," et un pour le ",(0,i.jsx)(n.strong,{children:"d\xe9nominateur"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"On va utiliser un fichier d'en-t\xeate pour d\xe9finir la structure et les fonctions qui vont permettre de manipuler les fractions."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cr\xe9er un fichier ",(0,i.jsx)(n.code,{children:"fraction.hpp"})," qui contiendra la d\xe9finition de la structure et les prototypes des m\xe9thodes.\nLa structure devra s'appeler ",(0,i.jsx)(n.code,{children:"Fraction"})," et contenir deux ",(0,i.jsx)(n.strong,{children:"entiers positifs"})," nomm\xe9s ",(0,i.jsx)(n.code,{children:"numerator"})," et ",(0,i.jsx)(n.code,{children:"denominator"})," de type ",(0,i.jsx)(n.code,{children:"unsigned int"})," avec comme valeur par d\xe9faut ",(0,i.jsx)(n.code,{children:"0/1"}),".\nLa structure devra contenir une ",(0,i.jsx)(n.strong,{children:"m\xe9thode"})," ",(0,i.jsx)(n.code,{children:"display"})," et qui permet d'afficher (",(0,i.jsx)(n.code,{children:"std::cout"}),") la fraction sous la forme ",(0,i.jsx)(n.code,{children:"numerator/denominator"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous devrez \xe9galement d\xe9finir les ",(0,i.jsx)(n.strong,{children:"prototypes"})," des fonctions suivantes :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add"})," : prend deux fractions en param\xe8tre et retourne la somme des deux fractions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sub"})," : prend deux fractions en param\xe8tre et retourne la diff\xe9rence des deux fractions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mul"})," : prend deux fractions en param\xe8tre et retourne le produit des deux fractions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"div"})," : prend deux fractions en param\xe8tre et retourne le quotient des deux fractions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Pour simplifier on va consid\xe9rer que les fractions sont toujours positives et on ne va pas g\xe9rer le cas ou le r\xe9sultat d'une op\xe9ration est n\xe9gatif ou le probl\xe8me de division par z\xe9ro.\nVous \xeates toute fois libre de g\xe9rer ces cas si vous le souhaitez (et donc changer le type des attributs de la structure et utiliser des entiers sign\xe9s)."})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Petit rappel sur la d\xe9finition des prototypes de m\xe9thodes pour les structures ",(0,i.jsx)(n.a,{href:"https://dsmte.github.io/Learn--cpp_programming/Lessons/S1/Struct#prototype-de-m%C3%A9thodes",children:"ici"}),"."]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cr\xe9er un fichier ",(0,i.jsx)(n.code,{children:"fraction.cpp"})," qui contiendra les d\xe9finitions des m\xe9thodes et fonctions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Impl\xe9menter les fonctions dans le fichier ",(0,i.jsx)(n.code,{children:"fraction.cpp"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Les fonctions ",(0,i.jsx)(n.code,{children:"add"}),", ",(0,i.jsx)(n.code,{children:"sub"}),", ",(0,i.jsx)(n.code,{children:"mul"})," et ",(0,i.jsx)(n.code,{children:"div"})," ne doivent pas modifier les fractions pass\xe9es en param\xe8tre mais bien retourner une nouvelle fraction qui est le r\xe9sultat de l'op\xe9ration."]})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cr\xe9er un fichier ",(0,i.jsx)(n.code,{children:"utils.hpp"})," qui contiendra les ",(0,i.jsx)(n.strong,{children:"fonctions"})," suivantes :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gcd"})," : prend deux entiers positifs en param\xe8tre et retourne le plus grand diviseur commun."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"simplify"})," : prend une fraction en param\xe8tre et retourne la fraction simplifi\xe9e."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cr\xe9er un fichier ",(0,i.jsx)(n.code,{children:"utils.cpp"})," et impl\xe9menter les fonctions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Pour simplifier une fraction, il faut diviser le num\xe9rateur et le d\xe9nominateur par le plus grand diviseur commun.\nOn va donc utiliser la fonction ",(0,i.jsx)(n.code,{children:"gcd"})," pour calculer le plus grand diviseur commun et ensuite diviser le ",(0,i.jsx)(n.strong,{children:"num\xe9rateur"})," et le ",(0,i.jsx)(n.strong,{children:"d\xe9nominateur"})," par ce nombre."]}),(0,i.jsxs)(n.p,{children:["la fraction ",(0,i.jsx)(n.code,{children:"4/6"})," devient ",(0,i.jsx)(n.code,{children:"2/3"})," car ",(0,i.jsx)(n.code,{children:"gcd(4, 6) = 2"})," et ",(0,i.jsx)(n.code,{children:"4/2 = 2"})," et ",(0,i.jsx)(n.code,{children:"6/2 = 3"}),"."]}),(0,i.jsxs)(n.p,{children:["Il faut importer le fichier ",(0,i.jsx)(n.code,{children:"fraction.hpp"})," dans le fichier ",(0,i.jsx)(n.code,{children:"utils.hpp"})," pour pouvoir utiliser la structure ",(0,i.jsx)(n.code,{children:"Fraction"})," dans la fonction ",(0,i.jsx)(n.code,{children:"simplify"}),"."]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Pour trouver le plus grand diviseur commun, on peut utiliser l'algorithme d'",(0,i.jsx)(n.strong,{children:"Euclide"})," qui consiste \xe0 diviser le plus grand nombre par le plus petit et \xe0 r\xe9p\xe9ter l'op\xe9ration avec le reste de la division jusqu'\xe0 obtenir un reste nul. Dans ce cas, le plus petit nombre non nul est le plus grand diviseur commun."]}),(0,i.jsxs)(n.p,{children:["exemple avec ",(0,i.jsx)(n.code,{children:"22"})," et ",(0,i.jsx)(n.code,{children:"8"}),":"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"22 % 8 = 6"})," (reste de la division de ",(0,i.jsx)(n.code,{children:"22"})," par ",(0,i.jsx)(n.code,{children:"8"}),") ",(0,i.jsx)(n.code,{children:"6"})," est diff\xe9rent de ",(0,i.jsx)(n.code,{children:"0"})," donc on continue"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"8 % 6 = 2"})," (reste de la division de ",(0,i.jsx)(n.code,{children:"8"})," par ",(0,i.jsx)(n.code,{children:"6"}),") ",(0,i.jsx)(n.code,{children:"2"})," est diff\xe9rent de ",(0,i.jsx)(n.code,{children:"0"})," donc on continue"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"6 % 2 = 0"})," (reste de la division de ",(0,i.jsx)(n.code,{children:"6"})," par ",(0,i.jsx)(n.code,{children:"2"}),") ",(0,i.jsx)(n.code,{children:"0"})," est \xe9gal \xe0 ",(0,i.jsx)(n.code,{children:"0"})," donc on s'arr\xeate et le plus grand diviseur commun est ",(0,i.jsx)(n.code,{children:"2"}),"."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modifier vos fonctions ",(0,i.jsx)(n.code,{children:"add"}),", ",(0,i.jsx)(n.code,{children:"sub"}),", ",(0,i.jsx)(n.code,{children:"mul"})," et ",(0,i.jsx)(n.code,{children:"div"})," pour simplifier le r\xe9sultat avant de le retourner."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cr\xe9er un fichier ",(0,i.jsx)(n.code,{children:"main.cpp"})," qui contiendra le programme principal. Ce programme devra :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cr\xe9er deux fractions ",(0,i.jsx)(n.code,{children:"f1"})," et ",(0,i.jsx)(n.code,{children:"f2"})," avec les valeurs de votre choix. (id\xe9alement avec des valeurs al\xe9atoires ou saisies par l'utilisateur)"]}),"\n",(0,i.jsx)(n.li,{children:"Afficher les deux fractions."}),"\n",(0,i.jsx)(n.li,{children:"Afficher la somme des deux fractions."}),"\n",(0,i.jsx)(n.li,{children:"Afficher la diff\xe9rence des deux fractions."}),"\n",(0,i.jsx)(n.li,{children:"Afficher le produit des deux fractions."}),"\n",(0,i.jsx)(n.li,{children:"Afficher le quotient des deux fractions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Vous d\xe9couvrirez au second semestre comment am\xe9liorer ce programme en utilisant la surcharge d'op\xe9rateurs ","\ud83d\udee0","."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var i=r(67294);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
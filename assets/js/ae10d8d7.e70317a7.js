"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[4306],{1312:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var i=n(5893),s=n(1151);const o={title:"TD1 - Op\xe9rateurs"},c=void 0,t={id:"TDs/S2/operators",title:"TD1 - Op\xe9rateurs",description:"L'id\xe9e de ce TD est de reprendre le TD08 du premier semestre est d'am\xe9liorer notre structure Fraction en utilisant la surcharge d'op\xe9rateurs.",source:"@site/content/TDs/S2/01_operators.md",sourceDirName:"TDs/S2",slug:"/TDs/S2/operators",permalink:"/Learn--cpp_programming/TDs/S2/operators",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"TD1 - Op\xe9rateurs"},sidebar:"TDs",previous:{title:"TD9 - M\xe9moire",permalink:"/Learn--cpp_programming/TDs/S1/MemoryAllocation"},next:{title:"TD2 - Algorithmes de tri",permalink:"/Learn--cpp_programming/TDs/S2/sorting"}},l={},d=[{value:"Exercice 1 (op\xe9rations)",id:"exercice-1-op\xe9rations",level:2},{value:"Exercice 2 (affichage)",id:"exercice-2-affichage",level:2},{value:"Exercice 3 (\xe9galit\xe9)",id:"exercice-3-\xe9galit\xe9",level:2},{value:"Exercice 4 (comparaison)",id:"exercice-4-comparaison",level:2},{value:"Exercice 5 (op\xe9rations d&#39;affectation)",id:"exercice-5-op\xe9rations-daffectation",level:2},{value:"Exercice 6 (conversion)",id:"exercice-6-conversion",level:2},{value:"Aller plus loin",id:"aller-plus-loin",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["L'id\xe9e de ce TD est de reprendre le ",(0,i.jsx)(r.strong,{children:"TD08"})," du premier semestre est d'am\xe9liorer notre structure ",(0,i.jsx)(r.code,{children:"Fraction"})," en utilisant la ",(0,i.jsx)(r.strong,{children:"surcharge d'op\xe9rateurs"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Reprendre les fichiers ",(0,i.jsx)(r.code,{children:"fraction.hpp"}),", ",(0,i.jsx)(r.code,{children:"fraction.cpp"}),", ",(0,i.jsx)(r.code,{children:"utils.hpp"})," et ",(0,i.jsx)(r.code,{children:"utils.cpp"})," du TD08 du premier semestre."]}),"\n",(0,i.jsx)(r.h2,{id:"exercice-1-op\xe9rations",children:"Exercice 1 (op\xe9rations)"}),"\n",(0,i.jsxs)(r.p,{children:["Transformer les m\xe9thodes ",(0,i.jsx)(r.code,{children:"add"}),", ",(0,i.jsx)(r.code,{children:"sub"}),", ",(0,i.jsx)(r.code,{children:"mul"})," et ",(0,i.jsx)(r.code,{children:"div"})," en surcharge des op\xe9rateurs ",(0,i.jsx)(r.code,{children:"+"}),", ",(0,i.jsx)(r.code,{children:"-"}),", ",(0,i.jsx)(r.code,{children:"*"})," et ",(0,i.jsx)(r.code,{children:"/"})," pour pouvoir utiliser les op\xe9rateurs avec des fractions."]}),"\n",(0,i.jsx)(r.p,{children:"On peut appliquer une simplification sur les fractions retourn\xe9es par les op\xe9rateurs pour \xe9viter d'avoir des fractions non simplifi\xe9es."}),"\n",(0,i.jsx)(r.h2,{id:"exercice-2-affichage",children:"Exercice 2 (affichage)"}),"\n",(0,i.jsxs)(r.p,{children:["Transformer la fonction ",(0,i.jsx)(r.code,{children:"display"})," en surcharge de l'op\xe9rateur ",(0,i.jsx)(r.code,{children:"<<"})," pour pouvoir afficher une fraction avec ",(0,i.jsx)(r.code,{children:"std::cout"})," (",(0,i.jsx)(r.a,{href:"Lessons/S2/Operators#op%C3%A9rateurs-de-flux",children:"op\xe9rateurs de flux"}),")."]}),"\n",(0,i.jsx)(r.h2,{id:"exercice-3-\xe9galit\xe9",children:"Exercice 3 (\xe9galit\xe9)"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Ajouter l'op\xe9rateur ",(0,i.jsx)(r.code,{children:"=="})," pour comparer deux fractions."]}),"\n",(0,i.jsxs)(r.li,{children:["Ajouter l'op\xe9rateur ",(0,i.jsx)(r.code,{children:"!="})," en se basant sur l'op\xe9rateur ",(0,i.jsx)(r.code,{children:"=="}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.admonition,{type:"tip",children:[(0,i.jsxs)(r.p,{children:["Attention, cela ne fonctionnera pas si on compare deux fractions non simplifi\xe9es. (ex: ",(0,i.jsx)(r.code,{children:"1/2 == 2/4"}),") Une autre solution serait de simplifier les fractions dans l'op\xe9rateur avant de les comparer."]}),(0,i.jsxs)(r.p,{children:["Il existe une autre fa\xe7on de faire en comparant les ",(0,i.jsx)(r.strong,{children:"produits en croix des fractions"}),": (ex: ",(0,i.jsx)(r.code,{children:"a/b == d/c"})," <=> ",(0,i.jsx)(r.code,{children:"a * c == b * d"}),")"]})]}),"\n",(0,i.jsx)(r.h2,{id:"exercice-4-comparaison",children:"Exercice 4 (comparaison)"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Ajouter l'op\xe9rateur ",(0,i.jsx)(r.code,{children:"<"})," pour comparer deux fractions."]}),"\n",(0,i.jsxs)(r.li,{children:["Ajouter les op\xe9rateurs ",(0,i.jsx)(r.code,{children:"<="}),", ",(0,i.jsx)(r.code,{children:">"})," et ",(0,i.jsx)(r.code,{children:">="})," en se basant sur l'op\xe9rateur ",(0,i.jsx)(r.code,{children:"<"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"exercice-5-op\xe9rations-daffectation",children:"Exercice 5 (op\xe9rations d'affectation)"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Ajouter les op\xe9rateurs d'affectation ",(0,i.jsx)(r.code,{children:"+="}),", ",(0,i.jsx)(r.code,{children:"-="}),", ",(0,i.jsx)(r.code,{children:"*="})," et ",(0,i.jsx)(r.code,{children:"/="}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["R\xe9\xe9crire les op\xe9rateurs ",(0,i.jsx)(r.code,{children:"+"}),", ",(0,i.jsx)(r.code,{children:"-"}),", ",(0,i.jsx)(r.code,{children:"*"})," et ",(0,i.jsx)(r.code,{children:"/"})," en utilisant les op\xe9rateurs affectation afin d'\xe9viter de dupliquer le code (",(0,i.jsx)(r.a,{href:"/Lessons/S2/Operators#deux-en-un",children:"deux-en-un"}),") (Commenter l'ancienne version des op\xe9rateurs par exemple)"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"exercice-6-conversion",children:"Exercice 6 (conversion)"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["D\xe9finir et impl\xe9menter une m\xe9thode ",(0,i.jsx)(r.code,{children:"to_float"})," qui retourne la valeur de la fraction sous forme de ",(0,i.jsx)(r.code,{children:"float"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Il est aussi possible de d\xe9finir des op\xe9rateurs de conversion pour convertir une fraction en un autre type."}),"\n",(0,i.jsx)(r.p,{children:"la syntaxe est la suivante:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"operator type() const {\n    // code de conversion\n}\n"})}),"\n",(0,i.jsxs)(r.ol,{start:"2",children:["\n",(0,i.jsxs)(r.li,{children:["Ajouter l'op\xe9rateur de conversion ",(0,i.jsx)(r.code,{children:"float"})," pour pouvoir convertir une fraction en ",(0,i.jsx)(r.code,{children:"float"})," en utilisant la m\xe9thode ",(0,i.jsx)(r.code,{children:"to_float"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["le prototype de la m\xe9thode pour notre structure ",(0,i.jsx)(r.code,{children:"Fraction"})," sera le suivant:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"Fraction::operator float() const;\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Gr\xe2ce \xe0 cet op\xe9rateur, on pourra convertir une fraction en ",(0,i.jsx)(r.code,{children:"float"})," de la mani\xe8re suivante:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"Fraction f1 {1, 2};\nfloat d1 {static_cast<float>(f1)}; // conversion explicite avec static_cast\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["On pourrait tr\xe8s bien mettre directement le code de la conversion dans l'op\xe9rateur ",(0,i.jsx)(r.code,{children:"float"})," sans passer par une m\xe9thode ",(0,i.jsx)(r.code,{children:"to_float"}),". Mais je vous demande de le faire pour l'exercice et pour avoir la possibilit\xe9 de r\xe9utiliser la m\xe9thode ",(0,i.jsx)(r.code,{children:"to_float"})," ailleurs."]})}),"\n",(0,i.jsx)(r.h2,{id:"aller-plus-loin",children:"Aller plus loin"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Ajouter des fonction libres pour les op\xe9rateurs ",(0,i.jsx)(r.code,{children:"+"}),", ",(0,i.jsx)(r.code,{children:"-"}),", ",(0,i.jsx)(r.code,{children:"*"})," et ",(0,i.jsx)(r.code,{children:"/"})," afin de pouvoir faire des op\xe9rations avec des fractions et des entiers.\nexemple: ",(0,i.jsx)(r.code,{children:"Fraction f1 {1, 2}; int i {2}; Fraction f2 {f1 + i};"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"Fraction operator+(Fraction const& f, int const i);\nFraction operator+(int const i, Fraction const& f);\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"Pour que ce soit commutatif, il faut aussi d\xe9finir la fonction avec l'entier en premier param\xe8tre. R\xe9utiliser la fonction pr\xe9c\xe9dente pour \xe9viter de dupliquer le code."})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Ajouter des m\xe9thodes pour appliquer des ",(0,i.jsx)(r.strong,{children:"op\xe9rations math\xe9matiques"})," sur les fractions."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"abs"}),": valeur absolue"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"ceil"}),": arrondi sup\xe9rieur"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"floor"}),": arrondi inf\xe9rieur"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"round"}),": arrondi"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>c});var i=n(7294);const s={},o=i.createContext(s);function c(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);
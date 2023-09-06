"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[795],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>u});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=s.createContext({}),l=function(a){var e=s.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=l(a.components);return s.createElement(i.Provider,{value:e},a.children)},c="mdxType",o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,i=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=l(t),k=n,u=c["".concat(i,".").concat(k)]||c[k]||o[k]||m;return t?s.createElement(u,p(p({ref:e},N),{},{components:t})):s.createElement(u,p({ref:e},N))}));function u(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r[c]="string"==typeof a?a:n,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},813:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>m,metadata:()=>r,toc:()=>l});var s=t(7462),n=(t(7294),t(3905));const m={title:"TD6 - Fonctions",sidebar_position:6},p=void 0,r={unversionedId:"TDs/Functions",id:"TDs/Functions",title:"TD6 - Fonctions",description:"Exercice 1",source:"@site/content/TDs/06_Functions.md",sourceDirName:"TDs",slug:"/TDs/Functions",permalink:"/Learn--cpp_programming/TDs/Functions",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"TD6 - Fonctions",sidebar_position:6},sidebar:"TDs",previous:{title:"TD5 - Tableaux",permalink:"/Learn--cpp_programming/TDs/Arrays"},next:{title:"TD7 - Structures",permalink:"/Learn--cpp_programming/TDs/Struct"}},i={},l=[{value:"Exercice 1",id:"exercice-1",level:2},{value:"Exercice 2 (Factorielle)",id:"exercice-2-factorielle",level:2},{value:"Exercice 3 (Fibonacci)",id:"exercice-3-fibonacci",level:2},{value:"Exercice 4 (Surcharges)",id:"exercice-4-surcharges",level:2},{value:"Exercice 5",id:"exercice-5",level:2}],N={toc:l},c="wrapper";function o(a){let{components:e,...t}=a;return(0,n.kt)(c,(0,s.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"exercice-1"},"Exercice 1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xc9crire une fonction ",(0,n.kt)("inlineCode",{parentName:"li"},"int somme(int a, int b)")," qui retourne la somme de deux entiers."),(0,n.kt)("li",{parentName:"ul"},"Utiliser des param\xe8tre constant pour les arguments de la fonction."),(0,n.kt)("li",{parentName:"ul"},"Utiliser des r\xe9f\xe9rences pour les arguments de la fonction."),(0,n.kt)("li",{parentName:"ul"},"V\xe9rifier que cela fonction aussi bien avec des variables que des litt\xe9raux dans le cas des r\xe9f\xe9rences.")),(0,n.kt)("h2",{id:"exercice-2-factorielle"},"Exercice 2 (Factorielle)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xc9crire un programme qui demande \xe0 l\u2019utilisateur de saisir un entier positif."),(0,n.kt)("li",{parentName:"ul"},"\xc9crire une fonction r\xe9cursive qui retourne la factorielle de ",(0,n.kt)("inlineCode",{parentName:"li"},"n"),"."),(0,n.kt)("li",{parentName:"ul"},"Afficher le r\xe9sultat."),(0,n.kt)("li",{parentName:"ul"},"G\xe9rer les cas d'erreur (nombre n\xe9gatif, nombre trop grand, etc.)."),(0,n.kt)("li",{parentName:"ul"},"Utiliser un fonction it\xe9rative (non r\xe9cursive).")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"La factorielle d'un entier ",(0,n.kt)("inlineCode",{parentName:"p"},"n")," est le produit des nombres entiers strictement positifs inf\xe9rieurs ou \xe9gaux \xe0 ",(0,n.kt)("inlineCode",{parentName:"p"},"n"),".")),(0,n.kt)("h2",{id:"exercice-3-fibonacci"},"Exercice 3 (Fibonacci)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xc9crire un programme qui demande \xe0 l\u2019utilisateur de saisir un entier positif."),(0,n.kt)("li",{parentName:"ul"},"\xc9crire une fonction r\xe9cursive qui retourne sous la forme d'un tableau les ",(0,n.kt)("inlineCode",{parentName:"li"},"n")," premiers termes de la suite de ",(0,n.kt)("strong",{parentName:"li"},"Fibonacci"),"."),(0,n.kt)("li",{parentName:"ul"},"Afficher les ",(0,n.kt)("inlineCode",{parentName:"li"},"n")," premiers termes de la suite de ",(0,n.kt)("strong",{parentName:"li"},"Fibonacci")," \xe0 l'aide de la fonction."),(0,n.kt)("li",{parentName:"ul"},"Pour aller plus loin: Essayer de trouver une solution it\xe9rative (non r\xe9cursive).")),(0,n.kt)("p",null,"Par exemple, si l\u2019utilisateur saisit ",(0,n.kt)("inlineCode",{parentName:"p"},"7"),", le programme affichera ",(0,n.kt)("inlineCode",{parentName:"p"},"0, 1, 1, 2, 3, 5, 8"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le pr\xe9c\xe8dent. Ses premiers termes sont ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,n.kt)("h2",{id:"exercice-4-surcharges"},"Exercice 4 (Surcharges)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xc9crire une fonction qui permet de calculer la moyenne d'un tableau d'entiers."),(0,n.kt)("li",{parentName:"ul"},"\xc9crire une fonction surcharg\xe9e portant le m\xeame nom qui permet de calculer la moyenne d'un tableau de flottants.")),(0,n.kt)("h2",{id:"exercice-5"},"Exercice 5"),(0,n.kt)("p",null,"\xc9crire sous forme r\xe9cursives les fonctions ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"U"),(0,n.kt)("mi",{parentName:"msub"},"n"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"U_n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10903em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," et ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mi",{parentName:"msub"},"n"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V_n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," conform\xe9ment \xe0 la description suivante:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"U"),(0,n.kt)("mn",{parentName:"msub"},"0")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"1")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"U_0 = 1")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10903em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))))," et ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"U"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"3"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"U"),(0,n.kt)("mi",{parentName:"msub"},"n")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mi",{parentName:"msub"},"n"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"U_{n+1} = 3U_n + 2V_n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.891661em",verticalAlign:"-0.208331em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.301108em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10903em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.208331em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"3"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10903em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mn",{parentName:"msub"},"0")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"2")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V_0 = 2")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2")))))," et ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mi",{parentName:"msub"},"n")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"U"),(0,n.kt)("mi",{parentName:"msub"},"n")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V_{n+1} = 2V_n + U_n + 1")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.891661em",verticalAlign:"-0.208331em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.301108em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.208331em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10903em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))))))),(0,n.kt)("p",null,"Afficher les dix premiers termes de chacune des suites."),(0,n.kt)("p",null,"Vous devez obtenir les r\xe9sultats suivants:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"U0 = 1 et V0 = 2\nU1 = 5 et V1 = 7\nU2 = 33 et V2 = 20\nU3 = 139 et V3 = 74\nU4 = 565 et V4 = 288\nU5 = 2271 et V5 = 1142\nU6 = 9097 et V6 = 4556\nU7 = 36403 et V7 = 18210\nU8 = 145629 et V8 = 72824\nU9 = 582535 et V9 = 291278\n")),(0,n.kt)("h1",{id:"exercice-6-pangramme"},"Exercice 6 (Pangramme)"),(0,n.kt)("p",null,"\xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res et qui retourne ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," si la cha\xeene est un ",(0,n.kt)("strong",{parentName:"p"},"pangramme"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," sinon."),(0,n.kt)("p",null,"Il faut faire attention \xe0 la casse (majuscules/minuscules)."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Un pangramme est une phrase contenant toutes les lettres de l'alphabet au moins une fois.")),(0,n.kt)("h1",{id:"exercice-6-string"},"Exercice 6 (String)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res et qui modifie cette cha\xeene en rempla\xe7ant les lettres minuscules par des lettres majuscules et vice-versa.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res et qui retourne le nombre de voyelles de cette cha\xeene.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res et qui retourne le nombre de mots de cette cha\xeene. On consid\xe8re que les mots sont s\xe9par\xe9s par un ou plusieurs espaces.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res et qui retourne la m\xeame cha\xeene \xe9crite \xe0 l'envers."))))}o.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[2059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),r=n(7294),i=n(6010),s=n(2466),o=n(6550),l=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,p]=k({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??c;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var f=n(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==o&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},s,{className:(0,i.Z)("tabs__item",N.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",N.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},3490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),s=n(5162);const o={title:"Compilation et Headers: S\xe9parer en plusieurs fichiers",tags:["C++"],sidebar_position:8},l="Introduction",p={unversionedId:"Lessons/S1/Headers",id:"Lessons/S1/Headers",title:"Compilation et Headers: S\xe9parer en plusieurs fichiers",description:"Maintenant que l'on sait d\xe9couper notre code en fonctions il va aussi \xeatre int\xe9ressant de le d\xe9couper en plusieurs fichiers. Cela va permettre de regrouper des fonctionnalit\xe9s et mieux organiser un projet.",source:"@site/content/Lessons/S1/Headers.md",sourceDirName:"Lessons/S1",slug:"/Lessons/S1/Headers",permalink:"/Learn--cpp_programming/Lessons/S1/Headers",draft:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:8,frontMatter:{title:"Compilation et Headers: S\xe9parer en plusieurs fichiers",tags:["C++"],sidebar_position:8},sidebar:"Lessons",previous:{title:"Structure: organiser nos donn\xe9es",permalink:"/Learn--cpp_programming/Lessons/S1/Struct"},next:{title:"Allouer et manipuler la m\xe9moire",permalink:"/Learn--cpp_programming/Lessons/S1/MemoryAllocation"}},u={},c=[{value:"M\xe9canisme de compilation (en simple)",id:"m\xe9canisme-de-compilation-en-simple",level:2},{value:"Le pr\xe9processeur",id:"le-pr\xe9processeur",level:3},{value:"La compilation",id:"la-compilation",level:3},{value:"Le linkage",id:"le-linkage",level:3},{value:"En pratique",id:"en-pratique",level:2},{value:"Fichier d&#39;en-t\xeate",id:"fichier-den-t\xeate",level:3},{value:"Pragma once: \xe9viter les doublons",id:"pragma-once-\xe9viter-les-doublons",level:3},{value:"Structures",id:"structures",level:4},{value:"Utiliser Cmake",id:"utiliser-cmake",level:2},{value:"Quelques am\xe9liorations",id:"quelques-am\xe9liorations",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}],m={toc:c},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Maintenant que l'on sait ",(0,r.kt)("strong",{parentName:"p"},"d\xe9couper")," notre code en fonctions il va aussi \xeatre int\xe9ressant de le d\xe9couper en ",(0,r.kt)("strong",{parentName:"p"},"plusieurs fichiers"),". Cela va permettre de ",(0,r.kt)("strong",{parentName:"p"},"regrouper")," des fonctionnalit\xe9s et mieux ",(0,r.kt)("strong",{parentName:"p"},"organiser")," un projet."),(0,r.kt)("p",null,"Prenons directement deux fichiers qui vont nous servir d'exemple tout le long de ce chapitre :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="maths.cpp"',title:'"maths.cpp"'},"int sum (int const a, int const b)\n{\n    return a + b;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},"#include <iostream>\nint main()\n{\n    std::cout << sum(42, 27) << std::endl;\n\n    return 0;\n}\n")),(0,r.kt)("p",null,"J'aimerais ici s\xe9parer le corps de la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," de son utilisation dans la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,r.kt)("p",null,"Probl\xe8me si j'essaye de compiler ",(0,r.kt)("strong",{parentName:"p"},"ind\xe9pendamment")," ces deux fichiers je peux avoir des erreurs. Soit il manque une fonction d'entr\xe9e ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," pour le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.cpp")," soit la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," n'est pas d\xe9clar\xe9e pour le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp"),"."),(0,r.kt)("h2",{id:"m\xe9canisme-de-compilation-en-simple"},"M\xe9canisme de compilation (en simple)"),(0,r.kt)("p",null,"Revenons \xe0 la compilation quelques instants pour mieux comprendre."),(0,r.kt)("p",null,"Quand j'ai parl\xe9 de ",(0,r.kt)("strong",{parentName:"p"},"compilation")," j'ai fait un ",(0,r.kt)("strong",{parentName:"p"},"abus de langage")," et j'ai englob\xe9 plusieurs \xe9tapes. Pour faire simple, il y a en r\xe9alit\xe9 ",(0,r.kt)("strong",{parentName:"p"},"trois")," grandes \xe9tapes lors de la compilation en ",(0,r.kt)("strong",{parentName:"p"},"C++"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Le pr\xe9processeur")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"La compilation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Le linkage"))),(0,r.kt)("h3",{id:"le-pr\xe9processeur"},"Le pr\xe9processeur"),(0,r.kt)("p",null,"La toute premi\xe8re \xe9tape est celle du ",(0,r.kt)("strong",{parentName:"p"},"pr\xe9processeur"),". C'est le moment o\xf9 toutes les ",(0,r.kt)("strong",{parentName:"p"},"directives pr\xe9processeur")," sont trait\xe9es (toutes les lignes commen\xe7ant par ",(0,r.kt)("kbd",null,"#"),")."),(0,r.kt)("p",null,"Par exemple, nous avons d\xe9j\xe0 la ",(0,r.kt)("strong",{parentName:"p"},"directive pr\xe9processeur")," ",(0,r.kt)("inlineCode",{parentName:"p"},"#include")," qui permet d'inclure des fonctionnalit\xe9s."),(0,r.kt)("p",null,"Cette directive fait simplement un ",(0,r.kt)("strong",{parentName:"p"},"copi\xe9-coll\xe9")," du contenu du fichier \xe0 inclure dans le fichier o\xf9 la directive est utilis\xe9e."),(0,r.kt)("p",null,"Je ne vais pas en parler ici mais sachez qu'il existe d'autres directives permettant de faire des conditions en fonction des plateformes par exemple."),(0,r.kt)("h3",{id:"la-compilation"},"La compilation"),(0,r.kt)("p",null,"Ensuite nous avons la ",(0,r.kt)("strong",{parentName:"p"},"compilation")," \xe0 proprement parler."),(0,r.kt)("p",null,"Chaque fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".cpp"),", obtenu ",(0,r.kt)("strong",{parentName:"p"},"apr\xe8s")," les modifications du ",(0,r.kt)("strong",{parentName:"p"},"pr\xe9processeur"),", appel\xe9 ",(0,r.kt)("strong",{parentName:"p"},"unit\xe9 de compilation"),", va \xeatre trait\xe9 individuellement.\nLe but de cette \xe9tape est de ",(0,r.kt)("strong",{parentName:"p"},"transformer")," le code ",(0,r.kt)("strong",{parentName:"p"},"C++")," (sous format texte) en langage compr\xe9hensible pour l'ordinateur."),(0,r.kt)("p",null,"C\u2019est \xe0 cette \xe9tape que des ",(0,r.kt)("strong",{parentName:"p"},"v\xe9rifications")," du code ont lieu. Par exemple, dans le cas o\xf9 le compilateur ne trouve pas la d\xe9claration d\u2019une fonction que vous appelez. Dans notre exemple pr\xe9c\xe9dent dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp"),", la compilation va s'arr\xeater avec un message d'erreur indiquant ce qui n\u2019a pas fonctionn\xe9."),(0,r.kt)("p",null,"Cette \xe9tape va produire des ",(0,r.kt)("strong",{parentName:"p"},"fichiers objets"),"."),(0,r.kt)("p",null,"Un ",(0,r.kt)("strong",{parentName:"p"},"fichier objet"),", reconnaissable \xe0 son extension en ",(0,r.kt)("inlineCode",{parentName:"p"},".o")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},".obj"),", n\u2019est rien d\u2019autre que du langage machine mais seul, sans aucun lien avec le reste des autres fichiers. Tel quel, il n\u2019est ",(0,r.kt)("strong",{parentName:"p"},"pas ex\xe9cutable"),", car il lui manque des informations."),(0,r.kt)("p",null,"Il est possible de pr\xe9ciser aux compilateurs que l'on souhaite s'arr\xeater \xe0 ce stade en ajoutant des flags de compilation:"),(0,r.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"Avec ",(0,r.kt)("strong",{parentName:"p"},"MSVC")," le flag est ",(0,r.kt)("kbd",null,"/c"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cl /c helloImac.cpp\n"))),(0,r.kt)(s.Z,{value:"Linux&OSX",label:"Linux et OSX",mdxType:"TabItem"},(0,r.kt)("p",null,"Avec ",(0,r.kt)("strong",{parentName:"p"},"G++")," le flag est ",(0,r.kt)("kbd",null,"-c"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"g++ -c helloImac.cpp\n")))),(0,r.kt)("p",null,"Cela indique au compilateur que l'on souhaite produire des ",(0,r.kt)("strong",{parentName:"p"},"fichiers objets")," et pas directement ",(0,r.kt)("strong",{parentName:"p"},"lier")," les fichiers pour en faire un ",(0,r.kt)("strong",{parentName:"p"},"ex\xe9cutable"),"."),(0,r.kt)("p",null,"Les ",(0,r.kt)("strong",{parentName:"p"},"fichiers d'objets"),' peuvent faire r\xe9f\xe9rence \xe0 des "',(0,r.kt)("strong",{parentName:"p"},"symboles"),"\"(noms de fonctions ou de variables) qui ne sont pas encore enti\xe8rement d\xe9finis. C'est le cas lorsque l'on utilise une fonction d\xe9clar\xe9e et que l'on n'a pas encore \xe9crit le ",(0,r.kt)("strong",{parentName:"p"},"corps")," de celle-ci, nous allons le voir juste apr\xe8s. Le compilateur ne s'en pr\xe9occupe pas et produit le fichier objet demand\xe9 si le reste du code est correct."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"L'avantage est qu'il n'est pas n\xe9cessaire de tout recompiler si vous ne modifiez qu'un seul fichier. Si aucune modification n\u2019est d\xe9tect\xe9e depuis la derni\xe8re compilation, alors le compilateur ",(0,r.kt)("strong",{parentName:"p"},"r\xe9utilise")," le fichier objet ",(0,r.kt)("strong",{parentName:"p"},"pr\xe9c\xe9demment cr\xe9\xe9")," lors d'une prochaine compilation ce qui acc\xe9l\xe8re la compilation d\u2019un projet. ",(0,r.kt)("strong",{parentName:"p"},"Cmake")," g\xe8re les fichiers objets lui m\xeame automatiquement dans le fameux dossier ",(0,r.kt)("strong",{parentName:"p"},"build"),".")),(0,r.kt)("h3",{id:"le-linkage"},"Le linkage"),(0,r.kt)("p",null,"Nos fichiers objets ne sont pas utilisables en l'\xe9tat et c'est la derni\xe8re \xe9tape de ",(0,r.kt)("strong",{parentName:"p"},"linkage")," qui va les ",(0,r.kt)("strong",{parentName:"p"},"lier")," entre eux pour produire un ",(0,r.kt)("strong",{parentName:"p"},"ex\xe9cutable"),"."),(0,r.kt)("p",null,"C'est ce qui va permettre de ",(0,r.kt)("strong",{parentName:"p"},"lier")," la ",(0,r.kt)("strong",{parentName:"p"},"d\xe9claration")," d'une fonction dans un fichier et le ",(0,r.kt)("strong",{parentName:"p"},"corps de la fonction")," dans un autre fichier par exemple."),(0,r.kt)("p",null,"Il est aussi possible de faire cette op\xe9ration en ligne de commande \xe0 partir des ",(0,r.kt)("strong",{parentName:"p"},"fichiers objets")," mais ce n'est pas tr\xe8s utile en pratique car des outils comme ",(0,r.kt)("strong",{parentName:"p"},"CMake")," se charge de cette \xe9tape pour nous."),(0,r.kt)("h2",{id:"en-pratique"},"En pratique"),(0,r.kt)("p",null,"Revenons \xe0 notre exemple avec les fichiers ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.cpp")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp"),":"),(0,r.kt)("p",null,"Premi\xe8rement, il manque la ",(0,r.kt)("strong",{parentName:"p"},"d\xe9claration")," de la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," (son ",(0,r.kt)("strong",{parentName:"p"},"prototype"),") dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," pour pouvoir produire un fichier objet valide:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},"#include <iostream>\n\nint sum (int const a, int const b);\n\nint main()\n{\n    std::cout << sum(42, 27) << std::endl;\n\n    return 0;\n}\n")),(0,r.kt)("p",null,"Ce fichier ne permet toujours pas de cr\xe9er un ex\xe9cutable \xe0 lui seul (car il ",(0,r.kt)("strong",{parentName:"p"},"manque")," le ",(0,r.kt)("strong",{parentName:"p"},"corps")," de la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),") mais il est maintenant possible d'en faire un ",(0,r.kt)("strong",{parentName:"p"},"fichier objet"),"."),(0,r.kt)("h3",{id:"fichier-den-t\xeate"},"Fichier d'en-t\xeate"),(0,r.kt)("p",null,"Pour une seule fonction dans mon exemple c'est simple de ",(0,r.kt)("strong",{parentName:"p"},"recopier")," le ",(0,r.kt)("strong",{parentName:"p"},"prototype")," de la fonction. Imaginons que notre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.cpp")," soit compos\xe9 de dizaines de fonctions et que l'on souhaite les utiliser dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," mais aussi dans un autre fichier du m\xeame projet. Cela commence \xe0 \xeatre fastidieux de tout recopier."),(0,r.kt)("p",null,"On va donc regrouper les ",(0,r.kt)("strong",{parentName:"p"},"d\xe9clarations")," des fonctions dans un autre fichier d'extension ",(0,r.kt)("inlineCode",{parentName:"p"},".hpp")," que l'on appelle ",(0,r.kt)("strong",{parentName:"p"},"fichier d'en-t\xeate")," (",(0,r.kt)("strong",{parentName:"p"},"header")," en anglais)."),(0,r.kt)("p",null,"Ainsi gr\xe2ce \xe0 la ",(0,r.kt)("strong",{parentName:"p"},"directive pr\xe9processeur")," ",(0,r.kt)("inlineCode",{parentName:"p"},"#include")," on va pouvoir inclure (recopier) toutes les d\xe9clarations des fonctions facilement."),(0,r.kt)("p",null,"Dans notre exemple le fichier d'en-t\xeate serait simplement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="maths.hpp"',title:'"maths.hpp"'},"int sum (int const a, int const b);\n")),(0,r.kt)("p",null,"et le ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," devient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},'#include <iostream>\n// highlight-next-line\n#include "maths.hpp"\n\nint main()\n{\n    std::cout << sum(42, 27) << std::endl;\n\n    return 0;\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"guillemets")," ou ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"chevrons")),(0,r.kt)("p",{parentName:"admonition"},"On peut noter une petite diff\xe9rence, j'utilise ici des ",(0,r.kt)("strong",{parentName:"p"},"guillemets")," ",(0,r.kt)("kbd",null,'""')," pour l'inclusion et pas des ",(0,r.kt)("strong",{parentName:"p"},"chevrons")," ",(0,r.kt)("kbd",null,"< >"),". On pourrait tr\xe8s bien utiliser des ",(0,r.kt)("strong",{parentName:"p"},"guillemets")," tout le temps et faire: ",(0,r.kt)("inlineCode",{parentName:"p"},'#include "iostream"'),". Cette diff\xe9rence est une question de ",(0,r.kt)("strong",{parentName:"p"},"convention")," et on r\xe9serve les ",(0,r.kt)("strong",{parentName:"p"},"chevrons")," ",(0,r.kt)("kbd",null,"< >")," pour les fichiers de qui viennent de ",(0,r.kt)("strong",{parentName:"p"},"biblioth\xe8ques")," comme la ",(0,r.kt)("strong",{parentName:"p"},"biblioth\xe8que standard")," (",(0,r.kt)("inlineCode",{parentName:"p"},"iostream"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"vector"),", etc) et les ",(0,r.kt)("strong",{parentName:"p"},"guillemets")," ",(0,r.kt)("kbd",null,'""')," pour le reste.")),(0,r.kt)("p",null,"On va \xe9galement inclure ce fichier d'",(0,r.kt)("strong",{parentName:"p"},"en-t\xeate")," dans notre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.cpp")," pour s'assurer que l'on impl\xe9mente les bonnes fonctions list\xe9es dans le fichier d'en-t\xeate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="maths.cpp"',title:'"maths.cpp"'},'// highlight-next-line\n#include "maths.hpp"\n\nint sum (int const a, int const b)\n{\n    return a + b;\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"cpp")," ou ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"hpp")),(0,r.kt)("p",{parentName:"admonition"},"Les fichiers d\u2019",(0,r.kt)("strong",{parentName:"p"},"en-t\xeate")," peuvent aussi utiliser l\u2019extension ",(0,r.kt)("strong",{parentName:"p"},".h"),". La diff\xe9rence n\u2019est qu\u2019une histoire de go\xfbt. Je pr\xe9f\xe8re utiliser ",(0,r.kt)("strong",{parentName:"p"},".hpp")," plut\xf4t que ",(0,r.kt)("strong",{parentName:"p"},".h")," pour mieux faire la distinction entre ",(0,r.kt)("strong",{parentName:"p"},"C")," et ",(0,r.kt)("strong",{parentName:"p"},"C++")," par analogie aux fichiers sources, qui se terminent par ",(0,r.kt)("strong",{parentName:"p"},".cpp")," en ",(0,r.kt)("strong",{parentName:"p"},"C++")," mais ",(0,r.kt)("strong",{parentName:"p"},".c")," en ",(0,r.kt)("strong",{parentName:"p"},"C"),".")),(0,r.kt)("h3",{id:"pragma-once-\xe9viter-les-doublons"},"Pragma once: \xe9viter les doublons"),(0,r.kt)("p",null,"Mais se pose alors la question des ",(0,r.kt)("strong",{parentName:"p"},"doublons")," si l'on inclut de nombreux fichiers, les uns d\xe9pendants des autres."),(0,r.kt)("p",null,"Dans le cas des fonctions ce n'est pas bien grave car d\xe9clarer plusieurs fois une fonction (je parle du ",(0,r.kt)("strong",{parentName:"p"},"prototype")," pas du corps qui lui doit \xeatre unique) est autoris\xe9 bien que ce soit inutile."),(0,r.kt)("p",null,"Par contre ce n'est pas toujours le cas. Par exemple avec les ",(0,r.kt)("strong",{parentName:"p"},"Enums")," il n'est pas possible de les d\xe9clarer deux fois et on obtient une erreur de compilation si on le fait."),(0,r.kt)("admonition",{title:"Un exemple",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Admettons que l'on a un autre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.cpp")," qui inclut ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.cpp")," pour fonctionner. ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.hpp")," contient les d\xe9clarations des fonctions propres au fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.cpp"),". Le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.hpp")," d\xe9finit un ",(0,r.kt)("strong",{parentName:"p"},"enum"),"."),(0,r.kt)("p",{parentName:"admonition"},"Si maintenant on souhaite utiliser des fonctions des deux fichiers dans notre fichier principal ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp"),", on va se retrouver \xe0 inclure les deux:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},'#include "utils.hpp"\n#include "maths.hpp"\n\nint main()\n{\n    // ...\n    return 0;\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"Cela va provoquer une ",(0,r.kt)("strong",{parentName:"p"},"erreur")," lors de la compilation du fichier objet ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," car l'",(0,r.kt)("strong",{parentName:"p"},"enum")," est d\xe9clar\xe9 deux fois. Une fois provenant de l'inclusion de ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.hpp")," (qui inclut lui-m\xeame ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.hpp"),") et une seconde fois en incluant directement le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.hpp"),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#pragma once")," est une ",(0,r.kt)("strong",{parentName:"p"},"directive du pr\xe9processeur")," l\xe0 pour r\xe9pondre \xe0 notre besoin."),(0,r.kt)("p",null,"Elle est utilis\xe9e pour emp\xeacher que le contenu des fichiers d'",(0,r.kt)("strong",{parentName:"p"},"en-t\xeate")," soient inclus plusieurs fois. La directive ",(0,r.kt)("inlineCode",{parentName:"p"},"#pragma once"),", pr\xe9sente dans un fichier d'",(0,r.kt)("strong",{parentName:"p"},"en-t\xeate"),", garantit que le contenu du fichier sera inclus ",(0,r.kt)("strong",{parentName:"p"},"une seule fois")," dans une compilation."),(0,r.kt)("p",null,"Le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"maths.hpp")," dans notre exemple devient donc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="maths.hpp"',title:'"maths.hpp"'},"// highlight-next-line\n#pragma once\nint sum (int const a, int const b);\n")),(0,r.kt)("p",null,"Un fichier d'",(0,r.kt)("strong",{parentName:"p"},"en-t\xeate")," doit ",(0,r.kt)("strong",{parentName:"p"},"toujours")," contenir cette directive au d\xe9but du fichier."),(0,r.kt)("h4",{id:"structures"},"Structures"),(0,r.kt)("p",null,"Bien que ce soit possible de mettre la d\xe9claration d'une ",(0,r.kt)("strong",{parentName:"p"},"structure")," dans un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".cpp")," g\xe9n\xe9ralement on a besoin de s'en resservir dans plusieurs fichiers et la d\xe9claration se trouve donc dans un ",(0,r.kt)("strong",{parentName:"p"},"fichier d'en-t\xeate")," (",(0,r.kt)("inlineCode",{parentName:"p"},".hpp"),")."),(0,r.kt)("p",null,"Cependant, comme pour les ",(0,r.kt)("strong",{parentName:"p"},"enums"),", une ",(0,r.kt)("strong",{parentName:"p"},"structure")," ne peut \xeatre d\xe9clar\xe9e qu'une fois et il ne faut donc surtout pas oublier la ",(0,r.kt)("strong",{parentName:"p"},"directive pr\xe9processeur")," ",(0,r.kt)("inlineCode",{parentName:"p"},"#pragma once")," pour \xe9viter un ",(0,r.kt)("strong",{parentName:"p"},"doublon")," lors d'inclusions."),(0,r.kt)("p",null,"On utilisera dans ce cas la d\xe9claration de la structure avec les ",(0,r.kt)("strong",{parentName:"p"},"prototypes")," des fonctions qui lui sont associ\xe9es dans notre fichier d'en-t\xeate."),(0,r.kt)("h2",{id:"utiliser-cmake"},"Utiliser Cmake"),(0,r.kt)("p",null,"Pour r\xe9sumer nous avons donc maintenant les fichiers suivants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="maths.hpp"',title:'"maths.hpp"'},"#pragma once\nint sum (int const a, int const b);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},'#include <iostream>\n#include "maths.hpp"\n\nint main()\n{\n    std::cout << sum(42, 27) << std::endl;\n\n    return 0;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="maths.cpp"',title:'"maths.cpp"'},'#include "maths.hpp"\n\nint sum (int const a, int const b)\n{\n    return a + b;\n}\n')),(0,r.kt)("p",null,"Nous allons les placer dans un ",(0,r.kt)("strong",{parentName:"p"},"dossier de projet")," puis dans un ",(0,r.kt)("strong",{parentName:"p"},"sous dossier")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/src")," (pour sources).\nPour certains projets on peut avoir plusieurs sous dossiers comme ",(0,r.kt)("inlineCode",{parentName:"p"},"/src"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/include")," (pour s\xe9parer les fichiers d'en-t\xeate). C'est une question d'",(0,r.kt)("strong",{parentName:"p"},"organisation")," et de ",(0,r.kt)("strong",{parentName:"p"},"pr\xe9f\xe9rence"),"."),(0,r.kt)("p",null,"Dans ce dossier de projet nous allons cr\xe9er notre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," pour nous aider \xe0 compiler le projet."),(0,r.kt)("p",null,"Nous allons reprendre et modifier notre premier fichier ",(0,r.kt)("strong",{parentName:"p"},"Cmake"),"."),(0,r.kt)("p",null,"Dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," il va falloir indiquer les r\xe9pertoires o\xf9 se trouvent les ",(0,r.kt)("strong",{parentName:"p"},"fichiers d'en-t\xeate")," par ",(0,r.kt)("inlineCode",{parentName:"p"},"target_include_directories()"),"."),(0,r.kt)("p",null,"On va \xe9galement r\xe9gler une variable ",(0,r.kt)("strong",{parentName:"p"},"Cmake")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CMAKE_RUNTIME_OUTPUT_DIRECTORY")," qui va permettre d'indiquer que l'on souhaite placer l'",(0,r.kt)("strong",{parentName:"p"},"ex\xe9cutable")," compil\xe9 dans un sous dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake",metastring:'title="CMakeLists.txt"',title:'"CMakeLists.txt"'},'# la version de cmake \xe0 utiliser\ncmake_minimum_required(VERSION 3.0)\n\n# La version du C++ que l\'on souhaite utiliser (dans notre cas C++17)\nset(CMAKE_CXX_STANDARD 17)\n\n# On souhaite placer l\'ex\xe9cutable dans un sous-dossier "bin" au lieu de le mettre dans le dossier build\nset(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin)\n\n# Le nom du projet\nproject(IMAC_project)\n\n# On indique que l\'on souhaite faire un ex\xe9cutable avec nos deux fichiers .cpp\nadd_executable(helloImac "src/main.cpp" "src/maths.cpp")\n\n# le dossier contenant les fichiers d\'en-t\xeate pour notre executable helloImac\ntarget_include_directories(helloImac "src/")\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CMAKE_SOURCE_DIR")," est une variable cmake qui indique le dossier dans lequel se trouve le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," (documentation ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/latest/variable/CMAKE_SOURCE_DIR.html#variable:CMAKE_SOURCE_DIR"},"ici"),")."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Il faut s'assurer qu'il y a exactement une fonction d'entr\xe9e ",(0,r.kt)("strong",{parentName:"p"},"main()")," dans les fichiers sources list\xe9s pour un ",(0,r.kt)("strong",{parentName:"p"},"ex\xe9cutable"),".")),(0,r.kt)("p",null,"Petit r\xe9sum\xe9 de notre dossier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"projet_folder/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 main.cpp\n\u2502   \u251c\u2500\u2500 maths.cpp\n\u2502   \u2514\u2500\u2500 maths.hpp\n\u2514\u2500\u2500 CMakeLists.txt\n")),(0,r.kt)("p",null,"Vous pouvez maintenant ouvrir le dossier de projet dans ",(0,r.kt)("strong",{parentName:"p"},"VSCode")," et compiler votre projet."),(0,r.kt)("h3",{id:"quelques-am\xe9liorations"},"Quelques am\xe9liorations"),(0,r.kt)("p",null,'Je vous ai parl\xe9 de "',(0,r.kt)("strong",{parentName:"p"},"warnings"),"\" de compilation \xe0 plusieurs reprises.\nIl est possible d'ajouter des options pour activer des ",(0,r.kt)("strong",{parentName:"p"},"warnings")," et avoir des informations suppl\xe9mentaires lors de la compilation."),(0,r.kt)("p",null,"Je vous propose d'ajouter ces lignes dans votre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"if (MSVC)\n    add_compile_options(/W3)\nelse()\n    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)\nendif()\n")),(0,r.kt)("p",null,"Cela va se complexifier avec un nombre plus important de fichiers sources.\nAvec ",(0,r.kt)("strong",{parentName:"p"},"Cmake")," il est possible de faire une ",(0,r.kt)("strong",{parentName:"p"},"recherche de fichier")," afin de ne pas avoir \xe0 lister tous les fichiers sources manuellement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},'file(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")\n')),(0,r.kt)("p",null,"Notre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," devient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},'# la version de cmake \xe0 utiliser\ncmake_minimum_required(VERSION 3.0)\n\n# La version du C++ que l\'on souhaite utiliser (dans notre cas C++17)\nset(CMAKE_CXX_STANDARD 17)\n\n# R\xe9glage du compilateur pour les warnings\n// highlight-start\nif (MSVC)\n    add_compile_options(/W3)\nelse()\n    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)\nendif()\n// highlight-end\n\n# On souhaite placer l\'ex\xe9cutable dans un sous-dossier "bin" au lieu de le mettre dans le dossier build\nset(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin)\n\n# Le nom du projet\nproject(IMAC_project)\n\n# Obtenir la liste des fichiers sources dans le dossier src\n// highlight-next-line\nfile(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")\n\n# Optionnel : afficher la liste des fichiers sources\nmessage(STATUS "Found source files:")\nforeach(SRC_FILE ${SRC_FILES})\n    message(STATUS " - ${SRC_FILE}")\nendforeach()\n\n# On indique que l\'on souhaite faire un ex\xe9cutable avec nos fichiers sources\n// highlight-next-line\nadd_executable(helloImac ${SRC_FILES})\n\n# le dossier contenant les fichiers d\'en-t\xeate pour notre executable helloImac\ntarget_include_directories(helloImac "src/")\n')),(0,r.kt)("h2",{id:"r\xe9sum\xe9"},"R\xe9sum\xe9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Les ",(0,r.kt)("strong",{parentName:"p"},"fichiers d'en-t\xeate")," ou ",(0,r.kt)("strong",{parentName:"p"},"headers")," (d'extension ",(0,r.kt)("inlineCode",{parentName:"p"},".hpp"),") sont l\xe0 pour lister les diff\xe9rentes d\xe9clarations des fonctions (et d'autres choses comme les ",(0,r.kt)("strong",{parentName:"p"},"enums"),") afin de pouvoir les utiliser dans ",(0,r.kt)("strong",{parentName:"p"},"plusieurs fichiers"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Les ",(0,r.kt)("strong",{parentName:"p"},"fichiers objets"),' sont des fichiers g\xe9n\xe9r\xe9s pendant la compilation. Ils peuvent faire r\xe9f\xe9rence \xe0 des "',(0,r.kt)("strong",{parentName:"p"},"symboles"),"\"(noms de fonctions ou de variables) qui ne sont pas encore enti\xe8rement d\xe9finis mais seulement d\xe9clar\xe9s (et inclus \xe0 l'aide des ",(0,r.kt)("strong",{parentName:"p"},"fichiers d'en-t\xeate"),"). Ils permettent aussi d'",(0,r.kt)("strong",{parentName:"p"},"acc\xe9l\xe9rer la compilation")," pour r\xe9utiliser des parties de code inchang\xe9es.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La ",(0,r.kt)("strong",{parentName:"p"},"directive pr\xe9processeur")," ",(0,r.kt)("inlineCode",{parentName:"p"},"#include")," fait simplement un ",(0,r.kt)("strong",{parentName:"p"},"copier-coller")," du fichier cible dans le fichier actuel.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La ",(0,r.kt)("strong",{parentName:"p"},"directive pr\xe9processeur")," ",(0,r.kt)("inlineCode",{parentName:"p"},"#pragma once")," permet d'\xe9viter de copier deux fois des d\xe9clarations lors d'inclusions. C'est tr\xe8s utile pour les ",(0,r.kt)("strong",{parentName:"p"},"fichiers d'en-t\xeate")," contenant des ",(0,r.kt)("strong",{parentName:"p"},"enums")," ou des ",(0,r.kt)("strong",{parentName:"p"},"structures"),". Il faut ",(0,r.kt)("strong",{parentName:"p"},"toujours")," l'utiliser dans les ",(0,r.kt)("strong",{parentName:"p"},"fichiers d'en-t\xeate"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"il y a ",(0,r.kt)("strong",{parentName:"p"},"3")," \xe9tapes dans la compilation:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Le ",(0,r.kt)("strong",{parentName:"li"},"pr\xe9processeur")," qui transforme les ",(0,r.kt)("strong",{parentName:"li"},"directives pr\xe9processeur")," comme ",(0,r.kt)("inlineCode",{parentName:"li"},"#include")," ou ",(0,r.kt)("inlineCode",{parentName:"li"},"#pragma once"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"La compilation")," qui g\xe9n\xe8re des ",(0,r.kt)("strong",{parentName:"li"},"fichiers objets")," pour chaque unit\xe9 de compilation (fichiers ",(0,r.kt)("inlineCode",{parentName:"li"},".cpp")," apr\xe8s traitement du pr\xe9processeur)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Le linkage")," qui permet de ",(0,r.kt)("strong",{parentName:"li"},"lier")," tous les ",(0,r.kt)("strong",{parentName:"li"},"fichiers objets")," ensemble pour obtenir un ",(0,r.kt)("strong",{parentName:"li"},"ex\xe9cutable"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cmake")," permet de g\xe9rer ces \xe9tapes de compilation simplement."))))}k.isMDXComponent=!0}}]);
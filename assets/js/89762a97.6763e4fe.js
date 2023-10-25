"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[6290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(r),A=a,m=d["".concat(u,".").concat(A)]||d[A]||c[A]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=A;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}A.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>C});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),s=r(6550),u=r(1980),i=r(7392),p=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function A(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=c(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!A({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,i]=m({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),f=(()=>{const e=u??d;return A({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!A({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var f=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),n=i[r].value;n!==s&&(d(t),u(n))},A=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:A,onClick:c},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},3757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),l=r(4866),o=r(5162);const s={title:"L'IDE VSCode",tags:["Tools","IDE"],sidebar_position:3},u=void 0,i={unversionedId:"Annexes/VSCode",id:"Annexes/VSCode",title:"L'IDE VSCode",description:"VSCode est un IDE (Integrated Development Environment) d\xe9velopp\xe9 par Microsoft. Il est gratuit et open-source. Il est tr\xe8s populaire et est utilis\xe9 par beaucoup de d\xe9veloppeurs.",source:"@site/content/Annexes/VSCode.md",sourceDirName:"Annexes",slug:"/Annexes/VSCode",permalink:"/Learn--cpp_programming/Annexes/VSCode",draft:!1,tags:[{label:"Tools",permalink:"/Learn--cpp_programming/tags/tools"},{label:"IDE",permalink:"/Learn--cpp_programming/tags/ide"}],version:"current",sidebarPosition:3,frontMatter:{title:"L'IDE VSCode",tags:["Tools","IDE"],sidebar_position:3},sidebar:"Annexes",previous:{title:"D\xe9boguer avec VSCode",permalink:"/Learn--cpp_programming/Annexes/Debbuger"}},p={},d=[{value:"Les raccourcis et actions rapides",id:"les-raccourcis-et-actions-rapides",level:2},{value:"Recherche dans le fichier courant",id:"recherche-dans-le-fichier-courant",level:3},{value:"Recherche dans un projet",id:"recherche-dans-un-projet",level:3},{value:"Renommer par symbole",id:"renommer-par-symbole",level:3},{value:"Aller \xe0 la d\xe9finition",id:"aller-\xe0-la-d\xe9finition",level:3},{value:"Aller \xe0 un symbole",id:"aller-\xe0-un-symbole",level:3},{value:"Aller \xe0 un fichier",id:"aller-\xe0-un-fichier",level:3},{value:"Passer d&#39;un fichier .hpp \xe0 un .cpp et inversement",id:"passer-dun-fichier-hpp-\xe0-un-cpp-et-inversement",level:3},{value:"Aller plus loin",id:"aller-plus-loin",level:3}],c=(A="VSCodeExtension",function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var A;const m={toc:d},b="wrapper";function f(e){let{components:t,...s}=e;return(0,a.kt)(b,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"VSCode est un ",(0,a.kt)("strong",{parentName:"p"},"IDE")," (Integrated Development Environment) d\xe9velopp\xe9 par Microsoft. Il est gratuit et open-source. Il est tr\xe8s populaire et est utilis\xe9 par beaucoup de d\xe9veloppeurs."),(0,a.kt)("p",null,"Il est versatile, compatible avec n'importe quel syst\xe8me d'exploitation et s'adapte, gr\xe2ce \xe0 une gestion d'extensions tr\xe8s ing\xe9nieuse, \xe0 une multitude de langages et de cas d'utilisation."),(0,a.kt)("p",null,"Voil\xe0 une liste d'extensions que je recommande et que j'utilise quotidiennement:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(c,{id:"ionutvmi.path-autocomplete",mdxType:"VSCodeExtension"})," : Fournit la compl\xe9tion des chemins dans l'IDE"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(c,{id:"vscode-icons-team.vscode-icons",mdxType:"VSCodeExtension"})," : Permet d'avoir des ic\xf4nes plus jolis par type de fichier"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(c,{id:"ms-vsliveshare.vsliveshare",mdxType:"VSCodeExtension"})," : Cela permet de travailler \xe0 distance \xe0 plusieurs dans un seul et m\xeame \xe9diteur. C'est g\xe9nial pour travailler ensemble !"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(c,{id:"Gruntfuggly.todo-tree",mdxType:"VSCodeExtension"})," : Permet de recenser et filtrer les ",(0,a.kt)("b",null,"TODO")," d'un projet de code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(c,{id:"teabyii.ayu",mdxType:"VSCodeExtension"})," : Le th\xe8me de couleur que j'utilise"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(c,{id:"yzhang.markdown-all-in-one",mdxType:"VSCodeExtension"}),"  et ",(0,a.kt)(c,{id:"goessner.mdmath",mdxType:"VSCodeExtension"})," : Pour l'\xe9dition de markdown"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(c,{id:"formulahendry.auto-rename-tag",mdxType:"VSCodeExtension"})," : Permet de refermer les balises web automatiquement")),(0,a.kt)("p",null,"... et bien d'autres encore: ",(0,a.kt)(c,{id:"svelte.svelte-vscode",mdxType:"VSCodeExtension"}),", ",(0,a.kt)(c,{id:"seatonjiang.gitmoji-vscode",mdxType:"VSCodeExtension"}),", ",(0,a.kt)(c,{id:"ms-python.vscode-pylance",mdxType:"VSCodeExtension"}),", ",(0,a.kt)(c,{id:"ms-python.python",mdxType:"VSCodeExtension"}),", ",(0,a.kt)(c,{id:"rust-lang.rust-analyzer",mdxType:"VSCodeExtension"}),", ",(0,a.kt)(c,{id:"tamasfe.even-better-toml",mdxType:"VSCodeExtension"}),", ",(0,a.kt)(c,{id:"PolyMeilex.wgsl",mdxType:"VSCodeExtension"})),(0,a.kt)("h2",{id:"les-raccourcis-et-actions-rapides"},"Les raccourcis et actions rapides"),(0,a.kt)("p",null,"Je vais pr\xe9senter ci-dessous quelques unes des choses les plus importantes pour lesquelles un IDE peut vous aider.\nJe vais les illustrer \xe0 l'aide de VSCode mais la majorit\xe9 de ces fonctionnalit\xe9s sont \xe9galement pr\xe9sentes dans d'autres IDE."),(0,a.kt)("h3",{id:"recherche-dans-le-fichier-courant"},"Recherche dans le fichier courant"),(0,a.kt)("p",null,"Vous pouvez utiliser tout simplement la recherche dans le fichier courant en utilisant le raccourci : ",(0,a.kt)("kbd",null,"CTRL"),"+",(0,a.kt)("kbd",null,"F"),". Une popup va s'ouvrir et vous laisser naviguer avec les fl\xe8ches entre les occurrences.\nVous pouvez \xe9galement faire du remplacement via la popup."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(774).Z,width:"572",height:"117"})),(0,a.kt)("h3",{id:"recherche-dans-un-projet"},"Recherche dans un projet"),(0,a.kt)("p",null,"Avec le raccourci ",(0,a.kt)("kbd",null,"CTRL"),"+",(0,a.kt)("kbd",null,"SHIFT"),"+",(0,a.kt)("kbd",null,"F")," il est possible de rechercher dans un projet entier.\nCela peut \xeatre tr\xe8s utile si vous savez comment une variable s'appelle mais que vous ne retrouvez plus dans quel fichier elle se trouve par exemple."),(0,a.kt)("p",null,"La barre de recherche de VSCode est g\xe9niale, vous pouvez m\xeame renommer les choses (pour corriger une typo) par lot ou limiter la recherche \xe0 un dossier sp\xe9cifique. Cette option est disponible en cliquant sur les trois points \xe0 droite."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5627).Z,width:"808",height:"248"})),(0,a.kt)("h3",{id:"renommer-par-symbole"},"Renommer par symbole"),(0,a.kt)("p",null,"Faites un clic droit et s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"p"},'"rename symbol"')," ou m\xeame directement avec le raccourci ",(0,a.kt)("kbd",null,"F2")," sur ta s\xe9lection."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5834).Z,width:"532",height:"222"})),(0,a.kt)("p",null,"C'est mieux que de faire une simple recherche (avec ",(0,a.kt)("kbd",null,"CTRL"),"+",(0,a.kt)("kbd",null,"F"),') car ce renommage arrive \xe0 prendre en compte le contexte (les symboles) et permet de remplacer par exemple une variable nomm\xe9e "Box" sans affecter une autre qui pourrait par exemple s\'appeler "boundingBox".'),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"1",label:"Etape 1",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2917).Z,width:"388",height:"144"}))),(0,a.kt)(o.Z,{value:"2",label:"Etape 2",mdxType:"TabItem"},(0,a.kt)("p",null,"Parfois une popup s'ouvre pour avoir une preview du renommage quand l'IDE n'est pas s\xfbr \xe0 100% de cibler les bons \xe9l\xe9ments.\nDans notre exemple, il ne s'est pas tromp\xe9 mais il est possible d'adapter la s\xe9lection.\n",(0,a.kt)("img",{src:r(2784).Z,width:"584",height:"316"}))),(0,a.kt)(o.Z,{value:"3",label:"Etape 3",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(898).Z,width:"292",height:"143"})))),(0,a.kt)("h3",{id:"aller-\xe0-la-d\xe9finition"},"Aller \xe0 la d\xe9finition"),(0,a.kt)("p",null,"Cela vous m\xe8nera directement \xe0 la d\xe9finition de la variable / fonction / classe. C'est une fonctionnalit\xe9 super utile pour se d\xe9placer dans un projet."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3997).Z,width:"579",height:"316"})),(0,a.kt)("p",null,"Et si vous voulez rester concentr\xe9 sur la portion de code que vous \xeates en train d'\xe9diter, vous pouvez aussi regarder la d\xe9finition et cela ouvrira une petite fen\xeatre dans votre fichier actuel."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2998).Z,width:"780",height:"241"})),(0,a.kt)("h3",{id:"aller-\xe0-un-symbole"},"Aller \xe0 un symbole"),(0,a.kt)("p",null,"Avec le raccourci ",(0,a.kt)("kbd",null,"CTRL"),"+",(0,a.kt)("kbd",null,"SHIFT"),"+",(0,a.kt)("kbd",null,"O")," vous pouvez acc\xe9der \xe0 la liste des symboles.\nC'est en somme la liste des m\xe9thodes et fonctions du fichier courant.\nVous pouvez ensuite taper ce que vous recherchez pour affiner la liste."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4702).Z,width:"1212",height:"336"})),(0,a.kt)("h3",{id:"aller-\xe0-un-fichier"},"Aller \xe0 un fichier"),(0,a.kt)("p",null,"De la m\xeame mani\xe8re, il est possible d'aller \xe0 un fichier sans passer par l'explorateur en utilisant le raccourci : ",(0,a.kt)("kbd",null,"CTRL"),"+",(0,a.kt)("kbd",null,"P"),".\nC'est beaucoup plus rapide si vous connaissez le nom du fichier que vous cherchez."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5621).Z,width:"593",height:"156"})),(0,a.kt)("h3",{id:"passer-dun-fichier-hpp-\xe0-un-cpp-et-inversement"},"Passer d'un fichier .hpp \xe0 un .cpp et inversement"),(0,a.kt)("p",null,"Vous pouvez utiliser ",(0,a.kt)("kbd",null,"ALT"),"+",(0,a.kt)("kbd",null,"O")," pour passer rapidement du fichier d'en-t\xeate au fichier d'impl\xe9mentation.\nTr\xe8s utile lorsque vous \xe9crivez du code pour une classe ou structure."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Cette action ne fonctionne que dans le contexte d'un projet C++ et n\xe9cessite l'extension suivante ",(0,a.kt)(c,{id:"ms-vscode.cpptools-extension-pack",mdxType:"VSCodeExtension"})," .")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"aller-plus-loin"},"Aller plus loin"),(0,a.kt)("p",null,"Si besoin, voici les liens vers les pdf de r\xe9f\xe9rence des raccourcis par plateforme de VSCode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"},"Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"},"macOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf"},"Linux"))))}f.isMDXComponent=!0},3997:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VSCode_goToDefinition-ed9581b161b46c3292d2d547ef7b43fa.png"},5621:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VSCode_goToFile-ef35b7dbe8a19e9a53bd716d5da9a0b3.png"},4702:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VSCode_goToSymbol-31a569dbe9523087243d3e69299e0fdc.png"},2998:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VSCode_peekDefinition-1588aa6039ff588306666293da39961f.png"},898:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},5834:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VSCode_renameMenu-10826617a275fa0a103ce15e28894491.png"},2784:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VSCode_renameRefactorPreview-d214345fd355b53b0bc73c094ee66bee.png"},2917:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VSCode_renameStart-158fa9927db7dbbb5a10e8bd7ff59e23.png"},774:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},5627:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VSCode_searchInProject-cc9f24fb3b7f399e49b1b98946df5426.png"}}]);
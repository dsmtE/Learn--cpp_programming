"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=A(e,["components","mdxType","originalType","parentName"]),o=i(a),c=r,d=o["".concat(p,".").concat(c)]||o[c]||u[c]||s;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=c;var A={};for(var p in t)hasOwnProperty.call(t,p)&&(A[p]=t[p]);A.originalType=e,A[o]="string"==typeof e?e:r,l[1]=A;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),s=a(6010),l=a(2466),A=a(6550),p=a(1980),i=a(7392),m=a(12);function o(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??o(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,A.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=u(e),[l,A]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[p,i]=d({queryString:a,groupId:n}),[o,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=p??o;return c({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&A(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);A(e),i(e),k(e)}),[i,k,s]),tabValues:s}}var f=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:A,selectValue:p,tabValues:i}=e;const m=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=i[a].value;n!==A&&(o(t),p(n))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:u},l,{className:(0,s.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":A===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=k(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",N.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},4223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>A,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905)),s=a(4866),l=a(5162);const A={},p=void 0,i={unversionedId:"Annexes/Markdown",id:"Annexes/Markdown",title:"Markdown",description:"Markdown est un langage de markup, c'est-\xe0-dire une syntaxe pour pimper votre texte : le mettre en gras, en italique, faire des titres, mettre des liens, etc. Par exemple, voici la documentation de la librairie sil, qui est \xe9crite en Markdown.",source:"@site/content/Annexes/Markdown.md",sourceDirName:"Annexes",slug:"/Annexes/Markdown",permalink:"/Learn--cpp_programming/Annexes/Markdown",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Annexes",previous:{title:"Git",permalink:"/Learn--cpp_programming/Annexes/Git"}},m={},o=[{value:"Extensions",id:"extensions",level:2},{value:"Syntaxe",id:"syntaxe",level:2},{value:"Titre (plus ou moins gros en fonction du nombre de #)",id:"titre-plus-ou-moins-gros-en-fonction-du-nombre-de-",level:4},{value:"G\xe9n\xe9rer une table des mati\xe8res",id:"g\xe9n\xe9rer-une-table-des-mati\xe8res",level:2}],u=(c="VSCodeExtension",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:o},k="wrapper";function f(e){let{components:t,...A}=e;return(0,r.kt)(k,(0,n.Z)({},d,A,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Markdown est un langage de ",(0,r.kt)("em",{parentName:"p"},"markup"),", c'est-\xe0-dire une syntaxe pour pimper votre texte : le mettre en ",(0,r.kt)("strong",{parentName:"p"},"gras"),", en ",(0,r.kt)("em",{parentName:"p"},"italique"),", faire des titres, mettre des ",(0,r.kt)("a",{parentName:"p",href:"https://pointerpointer.com/"},"liens"),", etc. Par exemple, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Image-Lib/blob/main/README.md?plain=1"},"voici la documentation de la librairie ",(0,r.kt)("em",{parentName:"a"},"sil"),", qui est \xe9crite en Markdown"),"."),(0,r.kt)("h2",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,"Vous aurez besoin de ces extensions pour facilement \xe9crire du markdown dans VS Code :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u,{id:"shd101wyy.markdown-preview-enhanced",mdxType:"VSCodeExtension"})," Pour voir le rendu final de votre texte."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u,{id:"yzhang.markdown-all-in-one",mdxType:"VSCodeExtension"})," Pour que VSCode comprenne la syntaxe Markdown."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u,{id:"streetsidesoftware.code-spell-checker-french",mdxType:"VSCodeExtension"})," Un correcteur d'orthographe. ",(0,r.kt)("b",null,"ATTENTION")," il est par d\xe9faut en anglais, et pour activer le fran\xe7ais il faut faire ces manips :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Faites ",(0,r.kt)("kbd",null,"F1")," puis cherchez et cliquez sur ",(0,r.kt)("inlineCode",{parentName:"li"},"Show Spell Checker Configuration Info")),(0,r.kt)("li",{parentName:"ul"},'S\xe9lectionnez l\'onglet "User"'),(0,r.kt)("li",{parentName:"ul"},"Activez le langage fran\xe7ais en plus de l'anglais (quand il demande ",(0,r.kt)("inlineCode",{parentName:"li"},"Choose Destination"),", s\xe9lectionnez ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," et pas ",(0,r.kt)("inlineCode",{parentName:"li"},"Workspace"),").\n",(0,r.kt)("img",{src:a(6237).Z,width:"992",height:"728"}),(0,r.kt)("img",{src:a(8863).Z,width:"763",height:"157"}))))),(0,r.kt)("h2",{id:"syntaxe"},"Syntaxe"),(0,r.kt)("p",null,"Voici ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"},"une cheatsheet")," o\xf9 vous retrouvez tout la syntaxe."),(0,r.kt)("p",null,"En r\xe9sum\xe9 :"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"syntaxe",label:"Syntaxe",default:!0,mdxType:"TabItem"},(0,r.kt)("code",null,(0,r.kt)("p",null,"*","Italique","*"),(0,r.kt)("p",null,"*","*","Gras","*","*"),(0,r.kt)("p",null,"[","lien](",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dsmtE/Learn--cpp_programming"},"https://github.com/dsmtE/Learn--cpp_programming"),")"),(0,r.kt)("p",null,"!","[","image](./output/pouet.png)"),(0,r.kt)("p",null,"#","### Titre (plus ou moins gros en fonction du nombre de #)"),(0,r.kt)("p",null,"-"," Listes\n","-"," avec\n","-"," plusieurs items"),(0,r.kt)("p",null,"`","`","`","cpp\n// Bloc de code C++\nint x{0};\nstd::cout << \"x vaut \" << x << '\\n';\n","`","`","`"),(0,r.kt)("p",null,"Bout de code ","`","int x{0};","`"," au milieu d'une phrase."),(0,r.kt)("p",null,"\xc9quations de math avec LaTeX :\n","$","$","\n\\int_{-\\inf{}}^{+\\inf{}} x^2 dx\n","$","$"),(0,r.kt)("p",null,"Notes de bas de page ","[","^1]"),(0,r.kt)("p",null,"[","^1]: Je suis une note de bas de page !"),(0,r.kt)("p",null,">"," Citation"),(0,r.kt)("p",null,"|"," Tableaux      | \ud83d\ude01        | \u2728  |\n","|"," ------------- |:-------------:| -----:|\n","|"," col 3 is      | right-aligned | $1600 |\n","|"," col 2 is      | centered      |   $12 |\n","|"," zebra stripes | are neat      |    $1 |"),(0,r.kt)("p",null,"S\xe9parateur :"),(0,r.kt)("p",null,"-","--"))),(0,r.kt)(l.Z,{value:"r\xe9sultat",label:"R\xe9sultat",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Italique")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gras")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dsmtE/Learn--cpp_programming"},"lien")),(0,r.kt)("p",null,"Image :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(2511).Z,width:"300",height:"345"})),(0,r.kt)("h4",{id:"titre-plus-ou-moins-gros-en-fonction-du-nombre-de-"},"Titre (plus ou moins gros en fonction du nombre de #)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Listes"),(0,r.kt)("li",{parentName:"ul"},"avec"),(0,r.kt)("li",{parentName:"ul"},"plusieurs items")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Bloc de code C++\nint x{0};\nstd::cout << \"x vaut \" << x << '\\n';\n")),(0,r.kt)("p",null,"Bout de code ",(0,r.kt)("inlineCode",{parentName:"p"},"int x{0};")," au milieu d'une phrase."),(0,r.kt)("p",null,"\xc9quations de math avec LaTeX :"),(0,r.kt)("span",{className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msubsup",{parentName:"mrow"},(0,r.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,r.kt)("mrow",{parentName:"msubsup"},(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"inf"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061"),(0,r.kt)("mrow",{parentName:"mrow"})),(0,r.kt)("mrow",{parentName:"msubsup"},(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mi",{parentName:"mrow"},"inf"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061"),(0,r.kt)("mrow",{parentName:"mrow"}))),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"x"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\int_{-\\inf{}}^{+\\inf{}} x^2 dx")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.5693em",verticalAlign:"-0.9703em"}}),(0,r.kt)("span",{parentName:"span",className:"mop"},(0,r.kt)("span",{parentName:"span",className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"}},"\u222b"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.599em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace mtight",style:{marginRight:"0.1952em"}}),(0,r.kt)("span",{parentName:"span",className:"mop mtight"},(0,r.kt)("span",{parentName:"span",className:"mtight"},"i"),(0,r.kt)("span",{parentName:"span",className:"mtight"},"n"),(0,r.kt)("span",{parentName:"span",className:"mtight",style:{marginRight:"0.07778em"}},"f")),(0,r.kt)("span",{parentName:"span",className:"mspace mtight",style:{marginRight:"0.1952em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mtight"})))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.8129em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace mtight",style:{marginRight:"0.1952em"}}),(0,r.kt)("span",{parentName:"span",className:"mop mtight"},(0,r.kt)("span",{parentName:"span",className:"mtight"},"i"),(0,r.kt)("span",{parentName:"span",className:"mtight"},"n"),(0,r.kt)("span",{parentName:"span",className:"mtight",style:{marginRight:"0.07778em"}},"f")),(0,r.kt)("span",{parentName:"span",className:"mspace mtight",style:{marginRight:"0.1952em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mtight"}))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9703em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8641em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),(0,r.kt)("p",null,"Notes de bas de page ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Citation")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tableaux"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\ud83d\ude01"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u2728"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"col 3 is"),(0,r.kt)("td",{parentName:"tr",align:"center"},"right-aligned"),(0,r.kt)("td",{parentName:"tr",align:"right"},"$1600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"col 2 is"),(0,r.kt)("td",{parentName:"tr",align:"center"},"centered"),(0,r.kt)("td",{parentName:"tr",align:"right"},"$12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zebra stripes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"are neat"),(0,r.kt)("td",{parentName:"tr",align:"right"},"$1")))),(0,r.kt)("p",null,"S\xe9parateur :"),(0,r.kt)("hr",null))),(0,r.kt)("p",null,"Et vous \xe9galement utiliser n'importe quelle balise html \xe0 tout moment, si la syntaxe Markdown ne fournit pas de quoi faire ce que vous voulez. Par exemple :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<kbd>F2</kbd>")," pour faire des touches : ",(0,r.kt)("kbd",null,"F2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<summary></summary>")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"<details></details>")," pour faire des sections collapsables :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<details><summary>Ouvre-moi !</summary>\nSalut, ceci est un secret !\n</details>\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Ouvre-moi !"),"Salut, ceci est un secret !"),(0,r.kt)("h2",{id:"g\xe9n\xe9rer-une-table-des-mati\xe8res"},"G\xe9n\xe9rer une table des mati\xe8res"),(0,r.kt)("p",null,"VS Code peut g\xe9n\xe9rer automatiquement une table des mati\xe8res pour votre document, qui va lister toutes les diff\xe9rentes sections que vous aurez d\xe9limit\xe9es avec des titres (",(0,r.kt)("inlineCode",{parentName:"p"},"#"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"##"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"###"),", etc.).",(0,r.kt)("br",null),"\nPour cela, mettez votre curseur l\xe0 o\xf9 vous voulez la g\xe9n\xe9rer (typiquement au d\xe9but de votre document), puis faites ",(0,r.kt)("kbd",null,"F1")," et cherchez et s\xe9lectionnez ",(0,r.kt)("inlineCode",{parentName:"p"},"Markdown All In One: Create Table of Contents")," (ou juste ",(0,r.kt)("inlineCode",{parentName:"p"},"toc")," pour faire court)."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Je suis une note de bas de page !",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},6237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/french_spell_checker-6cee2e9618d8db2d8d1d2d4434b8856f.png"},8863:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2511:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pouet-2f8c47d9ad4b5a44b2d79ae099d88dab.png"}}]);
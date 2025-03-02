"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[6680],{41359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(74848),a=t(28453),s=t(11470),l=t(19365);const o={title:"CMake",tags:["Tools","C++"],sidebar_position:2},i="Cmake",u={id:"Lessons/S1/Setup/CMake",title:"CMake",description:"CMake est un outil additionnel permettant de g\xe9rer la compilation d'un projet.",source:"@site/content/Lessons/S1/Setup/CMake.md",sourceDirName:"Lessons/S1/Setup",slug:"/Lessons/S1/Setup/CMake",permalink:"/Learn--cpp_programming/Lessons/S1/Setup/CMake",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Tools",permalink:"/Learn--cpp_programming/tags/tools"},{inline:!0,label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:2,frontMatter:{title:"CMake",tags:["Tools","C++"],sidebar_position:2},sidebar:"Lessons",previous:{title:"L'IDE VSCode",permalink:"/Learn--cpp_programming/Lessons/S1/Setup/IDE"},next:{title:"Premier programme",permalink:"/Learn--cpp_programming/Lessons/S1/Setup/HelloImac"}},c={},d=[{value:"Installation",id:"installation",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cmake",children:"Cmake"}),"\n",(0,r.jsxs)(n.p,{children:["CMake est un outil ",(0,r.jsx)(n.strong,{children:"additionnel"})," permettant de g\xe9rer la compilation d'un ",(0,r.jsx)(n.strong,{children:"projet"}),".\nEn effet, lorsqu'il s'agit de compiler un seul fichier il est possible de le faire manuellement avec les commandes du compilateur mais la t\xe2che va vite se complexifier lorsqu'il va s'agir de compiler plusieurs fichiers et de g\xe9rer des d\xe9pendances.\nC'est alors qu'interviennent des outils comme ",(0,r.jsx)(n.strong,{children:"CMake"})," pour vous simplifier la t\xe2che. Celui-ci va tr\xe8s bien s'int\xe9grer \xe0 des IDE comme ",(0,r.jsx)(n.strong,{children:"VisualStudio Code"})," par exemple."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Il en existe bien d'autres comme ",(0,r.jsx)(n.strong,{children:"makefile"})," que nous ne verrons pas car moins moderne et que je vous d\xe9conseille fortement d'utiliser directement."]})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.A,{groupId:"operating-systems",children:[(0,r.jsx)(l.A,{value:"Windows",label:"Windows",children:(0,r.jsxs)(n.p,{children:["Si vous \xeates pass\xe9 par l'installation avec ",(0,r.jsx)(n.strong,{children:"Winlibs"}),", vous avez normalement d\xe9j\xe0 ",(0,r.jsx)(n.strong,{children:"CMake"})," d'install\xe9."]})}),(0,r.jsxs)(l.A,{value:"Linux",label:"Linux",children:[(0,r.jsxs)(n.p,{children:["Vous pouvez installer ",(0,r.jsx)(n.strong,{children:"CMake"})," via le gestionnaire de paquets de votre distribution.\nPar exemple avec le gestionnaire de paquets ",(0,r.jsx)(n.strong,{children:"APT"})," vous pouvez simplement taper la commande suivante :"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install cmake\n"})})]}),(0,r.jsxs)(l.A,{value:"MacOS",label:"MacOS",children:[(0,r.jsxs)(n.p,{children:["Vous devriez pouvoir l'installer via le gestionnaire de paquets ",(0,r.jsx)("a",{href:"https://brew.sh/",children:"Brew"})," avec la commande suivante :"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"brew install cmake\n"})})]})]}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez ensuite v\xe9rifier que c'est bien install\xe9 en ex\xe9cutant la commande suivante dans un terminal :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cmake --version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Si vous obtenez un message d'erreur, c'est que ",(0,r.jsx)(n.strong,{children:"CMake"})," n'est pas install\xe9 correctement."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ce cas, vous pouvez aussi t\xe9l\xe9charger l'installeur sur le site officiel de ",(0,r.jsx)(n.strong,{children:"CMake"}),".\nVous pouvez vous rendre ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://cmake.org/download/",children:"ici"})})," et s\xe9lectionner l'installeur qui correspond \xe0 votre OS."]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(96540),a=t(34164),s=t(23104),l=t(56347),o=t(205),i=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:t,groupId:a}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??v;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function C(e){const n=(0,f.A)();return(0,b.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
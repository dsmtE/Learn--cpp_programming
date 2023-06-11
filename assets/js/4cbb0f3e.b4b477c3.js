"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[609],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(7462),r=a(7294),s=a(6010),l=a(2466),o=a(6550),u=a(1980),i=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,i]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=u??p;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),f(e)}),[i,f,s]),tabValues:s}}var g=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==o&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,s.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",v.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function I(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},6404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),s=a(8385),l=a(4866),o=a(5162);const u={title:"CMake",tags:["Tools","C++"],sidebar_position:2},i="Introduction",c={unversionedId:"Lessons/Setup/Cmake",id:"Lessons/Setup/Cmake",title:"CMake",description:"CMake est un outil additionnel permettant de g\xe9rer la compilation d'un projet.",source:"@site/content/Lessons/Setup/Cmake.md",sourceDirName:"Lessons/Setup",slug:"/Lessons/Setup/Cmake",permalink:"/Learn--cpp_programming/Lessons/Setup/Cmake",draft:!1,tags:[{label:"Tools",permalink:"/Learn--cpp_programming/tags/tools"},{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:2,frontMatter:{title:"CMake",tags:["Tools","C++"],sidebar_position:2},sidebar:"Lessons",previous:{title:"L'IDE VSCode",permalink:"/Learn--cpp_programming/Lessons/Setup/IDE"},next:{title:"Premier programme",permalink:"/Learn--cpp_programming/Lessons/Setup/HelloImac"}},p={},m=[],d={toc:m},b="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"CMake est un outil ",(0,r.kt)("strong",{parentName:"p"},"additionnel")," permettant de g\xe9rer la compilation d'un ",(0,r.kt)("strong",{parentName:"p"},"projet"),".\nEn effet, lorsqu'il s'agit de compiler un seul fichier il est possible de le faire manuellement avec les commandes du compilateur mais la t\xe2che va vite se complexifier lorsqu'il va s'agir de compiler plusieurs fichiers et de g\xe9rer des d\xe9pendances.\nC'est alors qu'interviennent des outils comme CMake pour vous simplifier la t\xe2che. Celui-ci va tr\xe8s bien s'int\xe9grer \xe0 des IDE comme VisualStudio Code par exemple."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Il en existe bien d'autres comme makefile que nous ne verrons pas car moins moderne et que je vous d\xe9conseille fortement d'utiliser.")),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Vous pouvez vous rendre ",(0,r.kt)(s.Z,{label:"ici",component:"a",href:"https://cmake.org/download/",size:"small",variant:"contained",color:"primary",clickable:!0,mdxType:"Chip"})," et s\xe9lectionner l'installeur qui correspond \xe0 votre OS."),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},"Choisi ",(0,r.kt)("b",null,"Windows x64 Installer"),"."),(0,r.kt)(o.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},"Vous pouvez \xe9galement passer par votre gestionnaire de paquets et simplement taper la commande suivante :",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install cmake\n"))),(0,r.kt)(o.Z,{value:"IOS",label:"IOS",mdxType:"TabItem"},"Vous devriez \xe9galement pouvoir l'installer via le gestionnaire de paquets ",(0,r.kt)("a",{href:"https://brew.sh/"},"Brew")," avec la commande suivante :",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\n")))),(0,r.kt)("p",null,"Vous pouvez ensuite v\xe9rifier que c'est bien install\xe9 en ex\xe9cutant la commande suivante dans un terminal :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --version\n")),(0,r.kt)("hr",null))}f.isMDXComponent=!0}}]);
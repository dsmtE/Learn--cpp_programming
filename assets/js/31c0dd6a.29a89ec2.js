"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[370],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2247:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const a={},i=void 0,s={unversionedId:"Annexes/Random",id:"Annexes/Random",title:"Random",description:"G\xe9n\xe9ration de nombres al\xe9atoires",source:"@site/content/Annexes/Random.md",sourceDirName:"Annexes",slug:"/Annexes/Random",permalink:"/Learn--cpp_programming/Annexes/Random",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Annexes",previous:{title:"L'IDE VSCode",permalink:"/Learn--cpp_programming/Annexes/VSCode"}},l={},c=[{value:"G\xe9n\xe9ration de nombres al\xe9atoires",id:"g\xe9n\xe9ration-de-nombres-al\xe9atoires",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"g\xe9n\xe9ration-de-nombres-al\xe9atoires"},"G\xe9n\xe9ration de nombres al\xe9atoires"),(0,o.kt)("p",null,"Avec ",(0,o.kt)("strong",{parentName:"p"},"C++11"),", plusieurs nouvelles fonctionnalit\xe9s ont \xe9t\xe9 ajout\xe9es dans la biblioth\xe8que ",(0,o.kt)("strong",{parentName:"p"},"random")," pour la g\xe9n\xe9ration de nombres al\xe9atoires."),(0,o.kt)("p",null,"Cela permet de mieux contr\xf4ler la g\xe9n\xe9ration pseudo-al\xe9atoire de nombres et avoir acc\xe8s \xe0 des distributions de probabilit\xe9s d\xe9j\xe0 impl\xe9ment\xe9es."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <random>\n\nint main()\n{\n    std::random_device rd;\n    std::mt19937 gen{rd()};\n    std::uniform_int_distribution<int> dist{1, 100};\n    \n    std::cout << dist(gen) << std::endl;\n\n    return 0;\n}\n")))}d.isMDXComponent=!0}}]);
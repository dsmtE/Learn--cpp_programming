"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[10],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Repr\xe9sentation m\xe9moire",tags:["C++"]},a=void 0,s={unversionedId:"Annexes/Memory",id:"Annexes/Memory",title:"Repr\xe9sentation m\xe9moire",description:"Toute donn\xe9e en m\xe9moire est repr\xe9sent\xe9e par une suite de bits. La taille de cette suite de bits d\xe9pend du type de la donn\xe9e.",source:"@site/content/Annexes/Memory.md",sourceDirName:"Annexes",slug:"/Annexes/Memory",permalink:"/Learn--cpp_programming/Annexes/Memory",draft:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",frontMatter:{title:"Repr\xe9sentation m\xe9moire",tags:["C++"]},sidebar:"Annexes",previous:{title:"L'IDE VSCode",permalink:"/Learn--cpp_programming/Annexes/VSCode"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Toute donn\xe9e en m\xe9moire est repr\xe9sent\xe9e par une suite de ",(0,o.kt)("strong",{parentName:"p"},"bits"),". La taille de cette suite de bits d\xe9pend du ",(0,o.kt)("strong",{parentName:"p"},"type")," de la donn\xe9e."),(0,o.kt)("p",null,"Par exemple, un ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," est g\xe9n\xe9ralement repr\xe9sent\xe9 par ",(0,o.kt)("strong",{parentName:"p"},"32")," bits (4 octets) et un ",(0,o.kt)("inlineCode",{parentName:"p"},"char")," par ",(0,o.kt)("strong",{parentName:"p"},"8")," bits (1 octet)."),(0,o.kt)("p",null,"Un ",(0,o.kt)("strong",{parentName:"p"},"octet")," est une unit\xe9 de mesure de la m\xe9moire. Un octet est compos\xe9 de 8 bits."),(0,o.kt)("p",null,"On peut repr\xe9senter un nombre ",(0,o.kt)("strong",{parentName:"p"},"d\xe9cimal")," en ",(0,o.kt)("strong",{parentName:"p"},"binaire"),". Par exemple, le nombre 42 s'\xe9crire en binaire: ",(0,o.kt)("inlineCode",{parentName:"p"},"00101010"),"."),(0,o.kt)("p",null,"Quand je demande \xe0 mon programme de cr\xe9er une variable, il va r\xe9server un espace m\xe9moire de la taille du type de la variable."),(0,o.kt)("p",null,"Il est possible de conna\xeetre la taille d'un ",(0,o.kt)("strong",{parentName:"p"},"type")," ou d'une variable existante (en octets) avec l'op\xe9rateur ",(0,o.kt)("inlineCode",{parentName:"p"},"sizeof"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n\nint main()\n{\n    std::cout << "sizeof(int): " << sizeof(int) << std::endl;\n    std::cout << "sizeof(short int): " << sizeof(short int) << std::endl;\n    std::cout << "sizeof(float): " << sizeof(float) << std::endl;\n    std::cout << "sizeof(double): " << sizeof(double) << std::endl;\n    std::cout << "sizeof(char): " << sizeof(char) << std::endl;\n    std::cout << "sizeof(bool): " << sizeof(bool) << std::endl;\n\n    // Les pointeurs ont une taille fixe (la taille n\xe9cessaire pour stocker une adresse m\xe9moire)\n    std::cout << "sizeof(int*): " << sizeof(int*) << std::endl;\n    std::cout << "sizeof(short int*): " << sizeof(short int*) << std::endl;\n    std::cout << "sizeof(float*): " << sizeof(float*) << std::endl;\n    std::cout << "sizeof(double*): " << sizeof(double*) << std::endl;\n    std::cout << "sizeof(char*): " << sizeof(char*) << std::endl;\n    std::cout << "sizeof(bool*): " << sizeof(bool*) << std::endl;\n\n    int integer {42};\n    int* integerPointer {&integer};\n    \n    std::cout << "sizeof(integer): " << sizeof(integer) << std::endl;\n    std::cout << "sizeof(integerPointer): " << sizeof(integerPointer) << std::endl;\n\n    return 0;\n}\n')),(0,o.kt)("p",null,"C'est d'ailleurs possible d'observer ce m\xe9canisme avec les adresses sur des blocs contigus allou\xe9s dynamiquement."),(0,o.kt)("p",null,"Comme expliqu\xe9 pr\xe9c\xe9demment un pointeur est une variable qui contient une adresse qui n'est rien d'autre qu'un nombre. Il est possible de manipuler notre ",(0,o.kt)("strong",{parentName:"p"},"pointeur")," avec les op\xe9rateurs d'",(0,o.kt)("strong",{parentName:"p"},"addition")," et de ",(0,o.kt)("strong",{parentName:"p"},"soustraction")," pour se d\xe9placer dans l'espace m\xe9moire (en faisant attention \xe0 ne pas sortir de l'espace m\xe9moire allou\xe9).\nEn fonction de son ",(0,o.kt)("strong",{parentName:"p"},"type"),", le pointeur va se d\xe9placer de la taille du type (en octets)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n\nint main()\n{\n    int* integersPointer {new int[3]};\n\n    std::cout << "integersPointer    : " << integersPointer << std::endl;\n    std::cout << "integersPointer + 1: " << integersPointer + 1 << std::endl;\n    std::cout << "integersPointer + 2: " << integersPointer + 2 << std::endl;\n\n    delete [ ] integersPointer;\n    \n    return 0;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"integersPointer    : 0x55b728991eb0\nintegersPointer + 1: 0x55b728991eb4\nintegersPointer + 2: 0x55b728991eb8\n")),(0,o.kt)("p",null,"Ici, on peut voir que l'adresse du pointeur est incr\xe9ment\xe9e de 4 \xe0 chaque fois (la taille d'un ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),")."),(0,o.kt)("hr",null),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"reinterpret_cast"),": permet d'",(0,o.kt)("strong",{parentName:"p"},"interpr\xe9ter")," un type comme un autre type. Par exemple, un ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," en ",(0,o.kt)("inlineCode",{parentName:"p"},"char"),". Il s'utile sur des pointeurs et permet de manipuler les bits de la m\xe9moire. C'est un ",(0,o.kt)("strong",{parentName:"p"},"cast")," tr\xe8s dangereux car il ne fait aucune v\xe9rification et peut donc provoquer des erreurs. Il est \xe0 utiliser avec extr\xeamement de pr\xe9cautions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n\nint main()\n{\n   int integer {42};\n   float floating {3.14f};\n\n   float floatingFromInteger {static_cast<float>(integer)};\n   int integerFromFloating {static_cast<int>(floating)};\n\n   std::cout << "integer: " << integer << std::endl;\n   std::cout << "floating: " << floating << std::endl;\n\n   // static_cast\n   std::cout << "static_cast<float>(integer): " << floatingFromInteger << std::endl;\n   std::cout << "static_cast<int>(floating): " << integerFromFloating << std::endl;\n\n   int* integerPointer {&integer};\n   float* floatingPointer {&floating};\n\n   // reinterpret_cast\n   float* floatingPointerFromInteger {reinterpret_cast<float*>(integerPointer)};\n   int* integerPointerFromFloating {reinterpret_cast<int*>(floatingPointer)};\n\n   std::cout << "floatingPointerFromInteger: " << *floatingPointerFromInteger << std::endl;\n   std::cout << "integerPointerFromFloating: " << *integerPointerFromFloating << std::endl;\n\n   return 0;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"integer: 42\nfloating: 3.14\nstatic_cast<float>(integer): 42\nstatic_cast<int>(floating): 3\nreinterpret_cast<float*>(integerPointer): 5.88545e-44\nreinterpret_cast<int*>(floatingPointer): 1078523331\n")),(0,o.kt)("p",null,"On s'aper\xe7oit que le ",(0,o.kt)("strong",{parentName:"p"},"cast")," ",(0,o.kt)("inlineCode",{parentName:"p"},"reinterpret_cast")," est tr\xe8s dangereux car il ne fait aucune v\xe9rification et peut donc provoquer des erreurs."))}d.isMDXComponent=!0}}]);
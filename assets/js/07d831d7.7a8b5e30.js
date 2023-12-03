"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[1255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(b,s(s({ref:t},p),{},{components:n})):i.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={title:"Utiliser des biblioth\xe8ques",tags:["C++"],sidebar_position:3},s=void 0,l={unversionedId:"Lessons/S2/Libraries",id:"Lessons/S2/Libraries",title:"Utiliser des biblioth\xe8ques",description:"Une des grandes forces de C++ est la possibilit\xe9 d'utiliser des biblioth\xe8ques. Une biblioth\xe8que est un ensemble de fonctions et de classes qui permettent de r\xe9aliser des t\xe2ches sp\xe9cifiques. Il existe des biblioth\xe8ques pour \xe0 peu pr\xe8s tout : afficher des images, jouer des sons, faire des calculs math\xe9matiques, etc.",source:"@site/content/Lessons/S2/Libraries.md",sourceDirName:"Lessons/S2",slug:"/Lessons/S2/Libraries",permalink:"/Learn--cpp_programming/Lessons/S2/Libraries",draft:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:3,frontMatter:{title:"Utiliser des biblioth\xe8ques",tags:["C++"],sidebar_position:3}},o={},u=[{value:"Find Package et Cmake",id:"find-package-et-cmake",level:2},{value:"Pour aller plus loin: cr\xe9er sa propre biblioth\xe8que",id:"pour-aller-plus-loin-cr\xe9er-sa-propre-biblioth\xe8que",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Une des grandes forces de C++ est la possibilit\xe9 d'utiliser des ",(0,a.kt)("strong",{parentName:"p"},"biblioth\xe8ques"),". Une biblioth\xe8que est un ensemble de fonctions et de classes qui permettent de r\xe9aliser des t\xe2ches sp\xe9cifiques. Il existe des biblioth\xe8ques pour \xe0 peu pr\xe8s tout : afficher des images, jouer des sons, faire des calculs math\xe9matiques, etc."),(0,a.kt)("p",null,"Nous avons d\xe9j\xe0 utilis\xe9 une biblioth\xe8que : la biblioth\xe8que standard. C'est une biblioth\xe8que qui est incluse par d\xe9faut dans tous les compilateurs C++. Elle contient des fonctions et des classes pour r\xe9aliser des t\xe2ches de base, comme afficher du texte \xe0 l'\xe9cran, lire des donn\xe9es au clavier, etc."),(0,a.kt)("p",null,"Dans ce chapitre, nous allons voir comment utiliser des biblioth\xe8ques externes, c'est-\xe0-dire des biblioth\xe8ques qui ne sont pas incluses par d\xe9faut dans le compilateur. Nous allons voir comment les inclure dans notre programme, et comment utiliser les fonctions et les classes qu'elles contiennent."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Les termes ",(0,a.kt)("strong",{parentName:"p"},"biblioth\xe8que")," et ",(0,a.kt)("strong",{parentName:"p"},"librairie")," sont synonymes. Dans ce cours, nous utiliserons le terme ",(0,a.kt)("strong",{parentName:"p"},"biblioth\xe8que"),". Mais il est possible que vous rencontriez le terme ",(0,a.kt)("strong",{parentName:"p"},"librairie")," dans d'autres ressources."),(0,a.kt)("h2",{parentName:"admonition",id:"fonctionnement-dune-biblioth\xe8que"},"Fonctionnement d'une biblioth\xe8que"),(0,a.kt)("p",{parentName:"admonition"},"La plupart des biblioth\xe8ques sont constitu\xe9es de la m\xeame fa\xe7on : elles contiennent un ensemble de ",(0,a.kt)("strong",{parentName:"p"},"fichiers d'en-t\xeate")," (extension ",(0,a.kt)("inlineCode",{parentName:"p"},".h")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},".hpp"),") et des fichiers contenant le code machine de la biblioth\xe8que.\nLes premiers contiennent les d\xe9clarations et sont utile pour l'\xe9tape de ",(0,a.kt)("strong",{parentName:"p"},"compilation"),", les seconds contiennent les d\xe9finitions et sont utiles pour l'\xe9tape de ",(0,a.kt)("strong",{parentName:"p"},"linkage"),"."),(0,a.kt)("h3",{parentName:"admonition",id:"statique-ou-dynamique"},"Statique ou dynamique"),(0,a.kt)("p",{parentName:"admonition"},"Les fichiers en question peuvent \xeatre de deux types : ",(0,a.kt)("strong",{parentName:"p"},"statiques")," ou ",(0,a.kt)("strong",{parentName:"p"},"dynamiques"),"."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lorsque l'on compile un programme qui utilise une biblioth\xe8que ",(0,a.kt)("strong",{parentName:"p"},"statique"),", le compilateur va inclure les d\xe9finitions de la biblioth\xe8que (\xe0 l'aide des fichiers objets statiques) ",(0,a.kt)("strong",{parentName:"p"},"dans le fichier ex\xe9cutable")," au moment de l'\xe9tape de linkage. Cela signifie que le fichier ex\xe9cutable sera plus gros, mais il n'aura pas besoin d'autres fichiers pour s'ex\xe9cuter.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Avec une biblioth\xe8que ",(0,a.kt)("strong",{parentName:"p"},"dynamique"),", la biblioth\xe8que n'est pas inclus dans le fichier ex\xe9cutable. Au lieu de cela, le fichier ex\xe9cutable contient des ",(0,a.kt)("strong",{parentName:"p"},"r\xe9f\xe9rences")," aux fonctions et aux classes de la biblioth\xe8que. Le contenu de la biblioth\xe8que est stock\xe9 dans un ",(0,a.kt)("strong",{parentName:"p"},"fichier de biblioth\xe8que")," (extension ",(0,a.kt)("inlineCode",{parentName:"p"},".lib")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},".dll")," sur Windows, ",(0,a.kt)("inlineCode",{parentName:"p"},".so")," sur Linux et ",(0,a.kt)("inlineCode",{parentName:"p"},".dylib")," sur Mac). Lorsque l'on ex\xe9cute le programme, le syst\xe8me d'exploitation charge le fichier de biblioth\xe8que en m\xe9moire et fait les correspondances entre les r\xe9f\xe9rences et les d\xe9finitions. Cela signifie que le ",(0,a.kt)("strong",{parentName:"p"},"fichier ex\xe9cutable")," sera ",(0,a.kt)("strong",{parentName:"p"},"plus petit"),", mais il aura besoin de la biblioth\xe8que pour s'ex\xe9cuter. L'avantage est que plusieurs programmes peuvent utiliser le m\xeame fichier de biblioth\xe8que en m\xe9moire. l\u2019inconvenant et qu'il faut que la biblioth\xe8que soit pr\xe9sente sur le syst\xe8me d'exploitation ou il faut fournir le fichier de biblioth\xe8que avec le programme (g\xe9n\xe9ralement dans le m\xeame dossier que l'ex\xe9cutable)."))),(0,a.kt)("h3",{parentName:"admonition",id:"header-only"},"Header only"),(0,a.kt)("p",{parentName:"admonition"},"Certaines biblioth\xe8ques ne contiennent que des fichiers d'en-t\xeate. Cela signifie que les d\xe9clarations et les d\xe9finitions sont dans les m\xeames fichiers (cela ne pose pas de probl\xe8me en utilisant certains concepts avanc\xe9s du langage C++). Ces biblioth\xe8ques sont appel\xe9es ",(0,a.kt)("strong",{parentName:"p"},"header only"),". Elles sont tr\xe8s faciles \xe0 utiliser, car il suffit de les inclure dans le programme pour pouvoir les utiliser."),(0,a.kt)("h3",{parentName:"admonition",id:"debug-ou-release"},"Debug ou release"),(0,a.kt)("p",{parentName:"admonition"},"Une biblioth\xe8que peut \xeatre compil\xe9e en mode ",(0,a.kt)("strong",{parentName:"p"},"debug")," ou en mode ",(0,a.kt)("strong",{parentName:"p"},"release"),". En mode ",(0,a.kt)("strong",{parentName:"p"},"debug"),", la biblioth\xe8que contient des informations suppl\xe9mentaires qui permettent de d\xe9boguer le programme (cela s\u2019accompagne parfois d'un fichier suppl\xe9mentaire avec les informations de d\xe9bogage). En mode ",(0,a.kt)("strong",{parentName:"p"},"release"),", la biblioth\xe8que est optimis\xe9e pour la performance ou la taille du fichier ex\xe9cutable."),(0,a.kt)("h2",{parentName:"admonition",id:"inclusion-dune-biblioth\xe8que"},"Inclusion d'une biblioth\xe8que"),(0,a.kt)("p",{parentName:"admonition"},"Il existe plusieurs fa\xe7ons d'inclure une biblioth\xe8que dans un programme et nous allons d\xe9couvrir les diff\xe9rentes m\xe9thodes et les mettre en pratique avec Cmake."),(0,a.kt)("h3",{parentName:"admonition",id:"cmake-fetchcontent"},"CMake FetchContent"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Cmake")," inclut une fonctionnalit\xe9 qui permet de t\xe9l\xe9charger une biblioth\xe8que et de l'inclure dans le projet.\nCela s'appel ",(0,a.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/latest/module/FetchContent.html"},"FetchContent")," et nous allons l'utiliser ensuite dans des exemples."),(0,a.kt)("p",{parentName:"admonition"},"L'avantage est que cela fonctionne sur tous les syst\xe8mes d'exploitation et de ne pas avoir \xe0 g\xe9rer les fichiers de la biblioth\xe8que manuellement."),(0,a.kt)("h3",{parentName:"admonition",id:"inclusion-manuelle"},"Inclusion manuelle"),(0,a.kt)("p",{parentName:"admonition"},"Il est toujours possible d'inclure une biblioth\xe8que manuellement. Il faut d'abord t\xe9l\xe9charger la biblioth\xe8que et d\xe9compresser les fichiers si n\xe9cessaire. Ensuite, il faut indiquer au compilateur (via CMake) o\xf9 se trouve la biblioth\xe8que et o\xf9 se trouvent les fichiers d'en-t\xeate. Cela va permet de compiler la biblioth\xe8que et d'inclure les fichiers d'en-t\xeate dans le programme."),(0,a.kt)("p",{parentName:"admonition"},"Parfois certaines biblioth\xe8ques utilisent \xe9galement CMake pour faciliter l'inclusion de la biblioth\xe8que dans un projet. Dans ce cas on peut simplement indiquer le dossier de la biblioth\xe8que \xe0 cmake et il se chargera de tout."),(0,a.kt)("h3",{parentName:"admonition",id:"gestionnaire-de-d\xe9pendances"},"Gestionnaire de d\xe9pendances"),(0,a.kt)("p",{parentName:"admonition"},"Enfin, il des outils nomm\xe9s ",(0,a.kt)("strong",{parentName:"p"},"gestionnaires de d\xe9pendances")," qui permettent de t\xe9l\xe9charger et installer/compiler des biblioth\xe8ques automatiquement sur le syst\xe8me d'exploitation. Une fois install\xe9es, il suffit d'indiquer au compilateur que l'on souhaite utiliser la biblioth\xe8que et elle va \xeatre incluse automatiquement et trouver les fichiers d'en-t\xeate et les fichiers de la biblioth\xe8ques sur le syst\xe8me d'exploitation.\nC'est une des raisons pour lesquelles certains d\xe9veloppeurs pr\xe9f\xe8rent utiliser ",(0,a.kt)("strong",{parentName:"p"},"Linux")," plut\xf4t que ",(0,a.kt)("strong",{parentName:"p"},"Windows"),". Il existe des alternatives pour Windows, comme ",(0,a.kt)("em",{parentName:"p"},"vcpkg")," ou ",(0,a.kt)("em",{parentName:"p"},"conan")," mais ce n'est pas aussi simple que sur Linux."),(0,a.kt)("h2",{parentName:"admonition",id:"glm"},"Glm"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://glm.g-truc.net/0.9.9/index.html"},"Glm")," est une biblioth\xe8que qui contient des classes et des fonctions pour faire des calculs math\xe9matiques. Elle est tr\xe8s utile pour faire des calculs en ",(0,a.kt)("strong",{parentName:"p"},"2D")," et en ",(0,a.kt)("strong",{parentName:"p"},"3D"),", comme par exemple des ",(0,a.kt)("strong",{parentName:"p"},"rotations"),", des ",(0,a.kt)("strong",{parentName:"p"},"translations"),", des ",(0,a.kt)("strong",{parentName:"p"},"projections"),", etc."),(0,a.kt)("p",{parentName:"admonition"},"Glm est une biblioth\xe8que ",(0,a.kt)("strong",{parentName:"p"},"header only"),". Cela signifie que les d\xe9clarations et les d\xe9finitions sont dans les m\xeames fichiers. Il suffit donc de les inclure dans le programme pour pouvoir utiliser la biblioth\xe8que."),(0,a.kt)("h3",{parentName:"admonition",id:"fetchcontent-et-cmake"},"FetchContent et Cmake"),(0,a.kt)("p",{parentName:"admonition"},"Pour t\xe9l\xe9charger et inclure ",(0,a.kt)("strong",{parentName:"p"},"glm")," dans un projet CMake nous allons utiliser la fonctionnalit\xe9 ",(0,a.kt)("strong",{parentName:"p"},"FetchContent"),"."),(0,a.kt)("p",{parentName:"admonition"},"Premi\xe8rement il faut indiquer \xe0 CMake que l'on souhaite utiliser la fonctionnalit\xe9 ",(0,a.kt)("strong",{parentName:"p"},"FetchContent"),". C'est une fonction qui est incluse dans CMake \xe0 partir de la version ",(0,a.kt)("strong",{parentName:"p"},"3.11"),", mais qui n'est pas activ\xe9e par d\xe9faut. Pour l'activer, il faut ajouter la ligne suivante avant de l'utiliser dans ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},"include(FetchContent)\n")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"FetchContent")," permet de t\xe9l\xe9charger une biblioth\xe8que depuis un url ou un d\xe9p\xf4t git. Nous allons utiliser la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"FetchContent_Declare")," pour indiquer \xe0 cmake que l'on souhaite t\xe9l\xe9charger la biblioth\xe8que ",(0,a.kt)("strong",{parentName:"p"},"glm")," depuis un d\xe9p\xf4t git."),(0,a.kt)("p",{parentName:"admonition"},"Il suffit d'ajouter les lignes suivantes dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},"FetchContent_Declare(\n    glm\n    GIT_REPOSITORY https://github.com/g-truc/glm\n    GIT_TAG efec5db081e3aad807d0731e172ac597f6a39447\n)\n")),(0,a.kt)("p",{parentName:"admonition"},"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"FetchContent_Declare")," prend plusieurs param\xe8tres :"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Le nom de la biblioth\xe8que (ici ",(0,a.kt)("inlineCode",{parentName:"li"},"glm"),")"),(0,a.kt)("li",{parentName:"ul"},"L'url du d\xe9p\xf4t git (ici ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/g-truc/glm"),")"),(0,a.kt)("li",{parentName:"ul"},"Le tag git qui fait r\xe9f\xe9rence au ",(0,a.kt)("strong",{parentName:"li"},"commit")," que l'on souhaite t\xe9l\xe9charger (ici ",(0,a.kt)("inlineCode",{parentName:"li"},"efec5db081e3aad807d0731e172ac597f6a39447"),")")),(0,a.kt)("p",{parentName:"admonition"},"Une fois que l'on a d\xe9clar\xe9 o\xf9 trouver la biblioth\xe8que, il faut indiquer \xe0 CMake que l'on souhaite la t\xe9l\xe9charger et la rendre disponible dans le projet. Pour cela, on utilise la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"FetchContent_MakeAvailable")," :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},"FetchContent_MakeAvailable(glm)\n")),(0,a.kt)("p",{parentName:"admonition"},"Une fois disponible, on peut pr\xe9ciser que l'on souhaite utiliser la biblioth\xe8que ",(0,a.kt)("strong",{parentName:"p"},"glm")," dans une ",(0,a.kt)("strong",{parentName:"p"},"target")," CMake avec la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"target_link_libraries")," :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},"target_link_libraries(<target> PUBLIC glm)\n")),(0,a.kt)("p",{parentName:"admonition"},"Une fois tout assembl\xe9, Voil\xe0 un exemple de fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," qui utilise ",(0,a.kt)("strong",{parentName:"p"},"glm")," :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},'cmake_minimum_required(VERSION 3.20)\nproject(test)\n\n// Permet de changer le dossier de sortie des fichiers ex\xe9cutables (pour qu\'ils soient dans un dossier bin au lieu d\'\xeatre m\xe9lang\xe9 avec les autres fichiers temporaires dans le dossier build)\nset(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin/${CMAKE_BUILD_TYPE})\n\n// Ajoute des options de compilation pour le compilateur pour avoir des messages d\'erreurs suppl\xe9mentaires\nif (MSVC)\n    add_compile_options(/W3)\nelse()\n    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)\nendif()\n\n# ---Source files---\nfile(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")\n\n# ---Executable---\nadd_executable(test ${SRC_FILES})\ntarget_compile_features(test PUBLIC cxx_std_17)\ntarget_include_directories(test PUBLIC "src/")\n\n# ---Libraries---\ninclude(FetchContent)\n\n# ---glm---\nFetchContent_Declare(\n    glm\n    GIT_REPOSITORY https://github.com/g-truc/glm\n    GIT_TAG efec5db081e3aad807d0731e172ac597f6a39447\n)\nFetchContent_MakeAvailable(glm)\n// On lie la biblioth\xe8que glm \xe0 notre ex\xe9cutable (target) test\ntarget_link_libraries(test PUBLIC glm)\n')),(0,a.kt)("h3",{parentName:"admonition",id:"magic-enum"},"Magic enum"),(0,a.kt)("p",{parentName:"admonition"},"Pour illustrer l'ajout manuel d'une biblioth\xe8que, nous allons utiliser la biblioth\xe8que ",(0,a.kt)("strong",{parentName:"p"},"magic enum"),". Par la m\xeame occasion on d\xe9couvre une biblioth\xe8que tr\xe8s utile pour manipuler des \xe9num\xe9rations qui comble une lacune du langage C++ et simplifie grandement l'utilisation des \xe9num\xe9rations."),(0,a.kt)("p",{parentName:"admonition"},"POur cette approche, l'id\xe9e est de manuellement t\xe9l\xe9charger le fichier de la biblioth\xe8que (qui est un header only) et de l'inclure dans le projet."),(0,a.kt)("p",{parentName:"admonition"},"Premi\xe8rement, il faut t\xe9l\xe9charger les fichiers de la biblioth\xe8que. Pour cela, il faut se rendre sur la page github de la biblioth\xe8que : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Neargye/magic_enum/tree/master/include/magic_enum"},"https://github.com/Neargye/magic_enum/tree/master/include/magic_enum")," et t\xe9l\xe9charger les fichiers dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"include")," (en cliquant sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Code")," puis ",(0,a.kt)("strong",{parentName:"p"},"Download ZIP")," par exemple ou en clonant le d\xe9p\xf4t git)."),(0,a.kt)("p",{parentName:"admonition"},"Ensuite, il faut cr\xe9er un dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," dans le dossier du projet et y placer les fichiers de la biblioth\xe8que (dans un sous dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"magic_enum")," par exemple)."),(0,a.kt)("p",{parentName:"admonition"},"Enfin, il faut indiquer \xe0 cmake o\xf9 se trouve les fichiers et que l'on souhaite utiliser la biblioth\xe8que ",(0,a.kt)("strong",{parentName:"p"},"magic enum")," dans le programme. Pour cela, on utilise la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"target_include_directories")," :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},'target_include_directories(<target> PUBLIC "lib/")\n')),(0,a.kt)("p",{parentName:"admonition"},"Ainsi il va \xeatre possible d'inclure les fichiers dans le programme afin d'utiliser la biblioth\xe8que:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <magic_enum/magic_enum.hpp>\n"))),(0,a.kt)("p",null,"C'est \xe9videment plus simple d'utiliser ",(0,a.kt)("strong",{parentName:"p"},"FetchContent")," pour inclure une biblioth\xe8que, mais il est important de comprendre que cela fonctionne de la m\xeame fa\xe7on et que simplement inclure la biblioth\xe8que et utiliser ",(0,a.kt)("inlineCode",{parentName:"p"},"target_include_directories")," (dans le cas plus simple d'une biblioth\xe8que ",(0,a.kt)("strong",{parentName:"p"},"header only"),") permet de l'utiliser dans le programme.\n:::"),(0,a.kt)("h2",{id:"find-package-et-cmake"},"Find Package et Cmake"),(0,a.kt)("p",null,"Il est \xe9galement possible d'utiliser la fonctionnalit\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Find Package")," de cmake pour inclure une biblioth\xe8que. Cela permet de simplifier l'inclusion d'une biblioth\xe8que et de ne pas avoir \xe0 indiquer o\xf9 se trouve les fichiers de la biblioth\xe8que. Cela repose sur le fait que la biblioth\xe8que est ",(0,a.kt)("strong",{parentName:"p"},"install\xe9e")," sur le syst\xe8me d'exploitation et/ou que l'on utilise un gestionnaire de d\xe9pendances. C'est tr\xe8s pratique sur Linux, mais cela peut \xeatre plus compliqu\xe9 sur Windows. Et c'est la raison pour laquelle nous n'allons pas l'utiliser dans ce cours (car trop d\xe9pendant du syst\xe8me d'exploitation)."),(0,a.kt)("p",null,"Mais sachez que cela existe et vous ne serez pas surpris si vous tombez dessus."),(0,a.kt)("p",null,"Voil\xe0 un exemple de fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," (non test\xe9) qui utilise ",(0,a.kt)("strong",{parentName:"p"},"Find Package")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},'cmake_minimum_required(VERSION 3.20)\nproject(test)\n\nset(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin/${CMAKE_BUILD_TYPE})\n\nif (MSVC)\n    add_compile_options(/W3)\nelse()\n    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)\nendif()\n\n# ---Source files---\nfile(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")\n\n# ---Executable---\nadd_executable(test ${SRC_FILES})\ntarget_compile_features(test PUBLIC cxx_std_17)\ntarget_include_directories(test PUBLIC "src/")\n\n# ---glm---\n# set(glm_DIR <installation prefix>/lib/cmake/glm) # if necessary\n// highlight-next-line\nfind_package(glm REQUIRED)\n# On lie la biblioth\xe8que glm \xe0 notre ex\xe9cutable (target) test\ntarget_link_libraries(test PUBLIC glm::glm)\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Enfin, avec de nouvelle version de Cmake il est m\xeame possible de configurer le fonctionnement de ",(0,a.kt)("inlineCode",{parentName:"p"},"FetchContent_MakeAvailable")," pour qu'il utilise ",(0,a.kt)("strong",{parentName:"p"},"Find Package")," pour inclure la biblioth\xe8que si c'est possible et qu'il utilise ",(0,a.kt)("strong",{parentName:"p"},"FetchContent")," sinon.\nCela peut \xeatre pratique dans certains cas, et permet d'\xe9viter de t\xe9l\xe9charger la biblioth\xe8que si elle est d\xe9j\xe0 install\xe9e sur le syst\xe8me d'exploitation, mais cela d\xe9passe le cadre de ce cours.")),(0,a.kt)("h2",{id:"pour-aller-plus-loin-cr\xe9er-sa-propre-biblioth\xe8que"},"Pour aller plus loin: cr\xe9er sa propre biblioth\xe8que"),(0,a.kt)("p",null,"Il est \xe9galement possible de cr\xe9er sa propre biblioth\xe8que. Cela peut \xeatre utile pour r\xe9utiliser du code dans plusieurs projets ou pour partager du code avec d'autres d\xe9veloppeurs."),(0,a.kt)("p",null,"Pour cr\xe9er une biblioth\xe8que, il faut cr\xe9er un nouveau projet cmake et ajouter un dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," dans lequel on va placer les fichiers de la biblioth\xe8que. Ensuite, il faut cr\xe9er un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," et indiquer \xe0 cmake que l'on souhaite cr\xe9er une biblioth\xe8que avec la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"add_library")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},"add_library(<name> [STATIC | SHARED | MODULE]\n            [EXCLUDE_FROM_ALL]\n            source1 source2 ... sourceN)\n")),(0,a.kt)("p",null,"Je ne vais pas rentrer dans les d\xe9tails dans ce cours mais voil\xe0 un exemple de ",(0,a.kt)("strong",{parentName:"p"},"biblioth\xe8que")," ici si c'est quelque chose qui vous int\xe9resse : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Image-Lib/tree/main"},"Simple-Image-Lib"),"."),(0,a.kt)("h2",{id:"r\xe9sum\xe9"},"R\xe9sum\xe9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une biblioth\xe8que est un ensemble de fonctions et de classes qui permettent de r\xe9aliser des t\xe2ches sp\xe9cifiques."),(0,a.kt)("li",{parentName:"ul"},"Une biblioth\xe8que peut \xeatre ",(0,a.kt)("strong",{parentName:"li"},"statique")," ou ",(0,a.kt)("strong",{parentName:"li"},"dynamique"),"."),(0,a.kt)("li",{parentName:"ul"},"Il existe plusieurs fa\xe7ons d'inclure une biblioth\xe8que dans un programme :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CMake FetchContent"),(0,a.kt)("li",{parentName:"ul"},"Inclusion manuelle"),(0,a.kt)("li",{parentName:"ul"},"Gestionnaire de d\xe9pendances"))),(0,a.kt)("li",{parentName:"ul"},"En pratique, il est pr\xe9f\xe9rable d'utiliser ",(0,a.kt)("strong",{parentName:"li"},"CMake FetchContent")," pour inclure une biblioth\xe8que (compatible avec tous les syst\xe8mes d'exploitation)."),(0,a.kt)("li",{parentName:"ul"},"Il est \xe9galement possible d'utiliser ",(0,a.kt)("strong",{parentName:"li"},"Find Package")," pour inclure une biblioth\xe8que (mais cela d\xe9pend du syst\xe8me d'exploitation).")))}c.isMDXComponent=!0}}]);
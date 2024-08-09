"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[1085],{79375:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>u});var s=n(85893),l=n(11151);const t={title:"Utiliser des biblioth\xe8ques en C++",tags:["C++","CMake","Libraries"]},r=void 0,a={id:"Annexes/Libraries",title:"Utiliser des biblioth\xe8ques en C++",description:"Une des grandes forces de C++ est la possibilit\xe9 d'utiliser des biblioth\xe8ques. Une biblioth\xe8que est un ensemble de fonctions et de classes qui permettent de r\xe9aliser des t\xe2ches sp\xe9cifiques. Il existe des biblioth\xe8ques pour \xe0 peu pr\xe8s tout : afficher des images, jouer des sons, faire des calculs math\xe9matiques, etc.",source:"@site/content/Annexes/Libraries.md",sourceDirName:"Annexes",slug:"/Annexes/Libraries",permalink:"/Learn--cpp_programming/Annexes/Libraries",draft:!1,unlisted:!1,tags:[{inline:!0,label:"C++",permalink:"/Learn--cpp_programming/tags/c"},{inline:!0,label:"CMake",permalink:"/Learn--cpp_programming/tags/c-make"},{inline:!0,label:"Libraries",permalink:"/Learn--cpp_programming/tags/libraries"}],version:"current",frontMatter:{title:"Utiliser des biblioth\xe8ques en C++",tags:["C++","CMake","Libraries"]},sidebar:"Annexes",previous:{title:"Git",permalink:"/Learn--cpp_programming/Annexes/Git"},next:{title:"Markdown",permalink:"/Learn--cpp_programming/Annexes/Markdown"}},o={},u=[{value:"Fonctionnement d&#39;une biblioth\xe8que",id:"fonctionnement-dune-biblioth\xe8que",level:2},{value:"Statique ou dynamique",id:"statique-ou-dynamique",level:3},{value:"Header only",id:"header-only",level:3},{value:"Debug ou release",id:"debug-ou-release",level:3},{value:"Inclusion d&#39;une biblioth\xe8que",id:"inclusion-dune-biblioth\xe8que",level:2},{value:"CMake FetchContent",id:"cmake-fetchcontent",level:3},{value:"Inclusion manuelle",id:"inclusion-manuelle",level:3},{value:"Gestionnaire de d\xe9pendances",id:"gestionnaire-de-d\xe9pendances",level:3},{value:"Glm",id:"glm",level:2},{value:"FetchContent et Cmake",id:"fetchcontent-et-cmake",level:3},{value:"Magic enum",id:"magic-enum",level:2},{value:"Find Package et Cmake",id:"find-package-et-cmake",level:2},{value:"Pour aller plus loin: cr\xe9er sa propre biblioth\xe8que",id:"pour-aller-plus-loin-cr\xe9er-sa-propre-biblioth\xe8que",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Une des grandes forces de C++ est la possibilit\xe9 d'utiliser des ",(0,s.jsx)(i.strong,{children:"biblioth\xe8ques"}),". Une biblioth\xe8que est un ensemble de fonctions et de classes qui permettent de r\xe9aliser des t\xe2ches sp\xe9cifiques. Il existe des biblioth\xe8ques pour \xe0 peu pr\xe8s tout : afficher des images, jouer des sons, faire des calculs math\xe9matiques, etc."]}),"\n",(0,s.jsxs)(i.p,{children:["Nous avons d\xe9j\xe0 utilis\xe9 une biblioth\xe8que : ",(0,s.jsx)(i.strong,{children:"la biblioth\xe8que standard"}),". C'est une biblioth\xe8que qui est incluse par d\xe9faut dans tous les compilateurs C++. Elle contient des fonctions et des classes pour r\xe9aliser des t\xe2ches de base, comme afficher du texte \xe0 l'\xe9cran, lire des donn\xe9es au clavier, etc."]}),"\n",(0,s.jsx)(i.p,{children:"Nous allons voir comment utiliser des biblioth\xe8ques externes, c'est-\xe0-dire des biblioth\xe8ques qui ne sont pas incluses par d\xe9faut dans le compilateur. Nous allons voir comment les inclure dans notre programme, et comment utiliser les fonctions et les classes qu'elles contiennent."}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["Les termes ",(0,s.jsx)(i.strong,{children:"biblioth\xe8que"})," et ",(0,s.jsx)(i.strong,{children:"librairie"})," sont synonymes. Nous utiliserons le terme ",(0,s.jsx)(i.strong,{children:"biblioth\xe8que"}),". Mais il est possible que vous rencontriez le terme ",(0,s.jsx)(i.strong,{children:"librairie"})," dans d'autres ressources."]})}),"\n",(0,s.jsx)(i.h2,{id:"fonctionnement-dune-biblioth\xe8que",children:"Fonctionnement d'une biblioth\xe8que"}),"\n",(0,s.jsxs)(i.p,{children:["La plupart des biblioth\xe8ques sont constitu\xe9es de la m\xeame fa\xe7on : elles contiennent un ensemble de ",(0,s.jsx)(i.strong,{children:"fichiers d'en-t\xeate"})," (extension ",(0,s.jsx)(i.code,{children:".h"})," ou ",(0,s.jsx)(i.code,{children:".hpp"}),") et des fichiers contenant le code machine de la biblioth\xe8que.\nLes premiers contiennent les d\xe9clarations et sont utile pour l'\xe9tape de ",(0,s.jsx)(i.strong,{children:"compilation"}),", les seconds contiennent les d\xe9finitions et sont utiles pour l'\xe9tape de ",(0,s.jsx)(i.strong,{children:"linkage"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"statique-ou-dynamique",children:"Statique ou dynamique"}),"\n",(0,s.jsxs)(i.p,{children:["Les fichiers en question peuvent \xeatre de deux types : ",(0,s.jsx)(i.strong,{children:"statiques"})," ou ",(0,s.jsx)(i.strong,{children:"dynamiques"}),"."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Lorsque l'on compile un programme qui utilise une biblioth\xe8que ",(0,s.jsx)(i.strong,{children:"statique"}),", le compilateur va inclure les d\xe9finitions de la biblioth\xe8que (\xe0 l'aide des fichiers objets statiques) ",(0,s.jsx)(i.strong,{children:"dans le fichier ex\xe9cutable"})," au moment de l'\xe9tape de linkage. Cela signifie que le fichier ex\xe9cutable sera plus gros, mais il n'aura pas besoin d'autres fichiers pour s'ex\xe9cuter."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Avec une biblioth\xe8que ",(0,s.jsx)(i.strong,{children:"dynamique"}),", la biblioth\xe8que n'est pas inclus dans le fichier ex\xe9cutable. Au lieu de cela, le fichier ex\xe9cutable contient des ",(0,s.jsx)(i.strong,{children:"r\xe9f\xe9rences"})," aux fonctions et aux classes de la biblioth\xe8que. Le contenu de la biblioth\xe8que est stock\xe9 dans un ",(0,s.jsx)(i.strong,{children:"fichier de biblioth\xe8que"})," (extension ",(0,s.jsx)(i.code,{children:".lib"})," ou ",(0,s.jsx)(i.code,{children:".dll"})," sur Windows, ",(0,s.jsx)(i.code,{children:".so"})," sur Linux et ",(0,s.jsx)(i.code,{children:".dylib"})," sur Mac). Lorsque l'on ex\xe9cute le programme, le syst\xe8me d'exploitation charge le fichier de biblioth\xe8que en m\xe9moire et fait les correspondances entre les r\xe9f\xe9rences et les d\xe9finitions. Cela signifie que le ",(0,s.jsx)(i.strong,{children:"fichier ex\xe9cutable"})," sera ",(0,s.jsx)(i.strong,{children:"plus petit"}),", mais il aura besoin de la biblioth\xe8que pour s'ex\xe9cuter. L'avantage est que plusieurs programmes peuvent utiliser le m\xeame fichier de biblioth\xe8que en m\xe9moire. l\u2019inconvenant et qu'il faut que la biblioth\xe8que soit pr\xe9sente sur le syst\xe8me d'exploitation ou il faut fournir le fichier de biblioth\xe8que avec le programme (g\xe9n\xe9ralement dans le m\xeame dossier que l'ex\xe9cutable)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"header-only",children:"Header only"}),"\n",(0,s.jsxs)(i.p,{children:["Certaines biblioth\xe8ques ne contiennent que des fichiers d'en-t\xeate. Cela signifie que les d\xe9clarations et les d\xe9finitions sont dans les m\xeames fichiers (cela ne pose pas de probl\xe8me en utilisant certains concepts avanc\xe9s du langage C++). Ces biblioth\xe8ques sont appel\xe9es ",(0,s.jsx)(i.strong,{children:"header only"}),". Elles sont tr\xe8s faciles \xe0 utiliser, car il suffit de les inclure dans le programme pour pouvoir les utiliser."]}),"\n",(0,s.jsx)(i.h3,{id:"debug-ou-release",children:"Debug ou release"}),"\n",(0,s.jsxs)(i.p,{children:["Une biblioth\xe8que peut \xeatre compil\xe9e en mode ",(0,s.jsx)(i.strong,{children:"debug"})," ou en mode ",(0,s.jsx)(i.strong,{children:"release"}),". En mode ",(0,s.jsx)(i.strong,{children:"debug"}),", la biblioth\xe8que contient des informations suppl\xe9mentaires qui permettent de d\xe9boguer le programme (cela s\u2019accompagne parfois d'un fichier suppl\xe9mentaire avec les informations de d\xe9bogage). En mode ",(0,s.jsx)(i.strong,{children:"release"}),", la biblioth\xe8que est optimis\xe9e pour la performance ou la taille du fichier ex\xe9cutable."]}),"\n",(0,s.jsx)(i.h2,{id:"inclusion-dune-biblioth\xe8que",children:"Inclusion d'une biblioth\xe8que"}),"\n",(0,s.jsxs)(i.p,{children:["Il existe plusieurs fa\xe7ons d'inclure une biblioth\xe8que dans un programme et nous allons d\xe9couvrir les diff\xe9rentes m\xe9thodes et les mettre en pratique avec ",(0,s.jsx)(i.strong,{children:"Cmake"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"cmake-fetchcontent",children:"CMake FetchContent"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Cmake"})," inclut une fonctionnalit\xe9 qui permet de t\xe9l\xe9charger une biblioth\xe8que et de l'inclure dans le projet.\nCela s'appel ",(0,s.jsx)(i.a,{href:"https://cmake.org/cmake/help/latest/module/FetchContent.html",children:"FetchContent"})," et nous allons l'utiliser ensuite dans des exemples."]}),"\n",(0,s.jsx)(i.p,{children:"L'avantage est que cela fonctionne sur tous les syst\xe8mes d'exploitation et de ne pas avoir \xe0 g\xe9rer les fichiers de la biblioth\xe8que manuellement."}),"\n",(0,s.jsx)(i.h3,{id:"inclusion-manuelle",children:"Inclusion manuelle"}),"\n",(0,s.jsx)(i.p,{children:"Il est toujours possible d'inclure une biblioth\xe8que manuellement. Il faut d'abord t\xe9l\xe9charger la biblioth\xe8que et d\xe9compresser les fichiers si n\xe9cessaire. Ensuite, il faut indiquer au compilateur (via CMake) o\xf9 se trouve la biblioth\xe8que et o\xf9 se trouvent les fichiers d'en-t\xeate. Cela va permet de compiler la biblioth\xe8que et d'inclure les fichiers d'en-t\xeate dans le programme."}),"\n",(0,s.jsx)(i.p,{children:"Parfois certaines biblioth\xe8ques utilisent \xe9galement CMake pour faciliter l'inclusion de la biblioth\xe8que dans un projet. Dans ce cas on peut simplement indiquer le dossier de la biblioth\xe8que \xe0 cmake et il se chargera de tout."}),"\n",(0,s.jsx)(i.h3,{id:"gestionnaire-de-d\xe9pendances",children:"Gestionnaire de d\xe9pendances"}),"\n",(0,s.jsxs)(i.p,{children:["Enfin, il des outils nomm\xe9s ",(0,s.jsx)(i.strong,{children:"gestionnaires de d\xe9pendances"})," qui permettent de t\xe9l\xe9charger et installer/compiler des biblioth\xe8ques automatiquement sur le syst\xe8me d'exploitation. Une fois install\xe9es, il suffit d'indiquer au compilateur que l'on souhaite utiliser la biblioth\xe8que et elle va \xeatre incluse automatiquement et trouver les fichiers d'en-t\xeate et les fichiers de la biblioth\xe8ques sur le syst\xe8me d'exploitation.\nC'est une des raisons pour lesquelles certains d\xe9veloppeurs pr\xe9f\xe8rent utiliser ",(0,s.jsx)(i.strong,{children:"Linux"})," plut\xf4t que ",(0,s.jsx)(i.strong,{children:"Windows"}),". Il existe des alternatives pour Windows, comme ",(0,s.jsx)(i.em,{children:"vcpkg"})," ou ",(0,s.jsx)(i.em,{children:"conan"})," mais ce n'est pas aussi simple que sur Linux."]}),"\n",(0,s.jsx)(i.h2,{id:"glm",children:"Glm"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://glm.g-truc.net/0.9.9/index.html",children:"Glm"})," est une biblioth\xe8que qui contient des classes et des fonctions pour faire des calculs math\xe9matiques. Elle est tr\xe8s utile pour faire des calculs en ",(0,s.jsx)(i.strong,{children:"2D"})," et en ",(0,s.jsx)(i.strong,{children:"3D"}),", comme par exemple des ",(0,s.jsx)(i.strong,{children:"rotations"}),", des ",(0,s.jsx)(i.strong,{children:"translations"}),", des ",(0,s.jsx)(i.strong,{children:"projections"}),", etc."]}),"\n",(0,s.jsxs)(i.p,{children:["Glm est une biblioth\xe8que ",(0,s.jsx)(i.strong,{children:"header only"}),". Cela signifie que les d\xe9clarations et les d\xe9finitions sont dans les m\xeames fichiers. Il suffit donc de les inclure dans le programme pour pouvoir utiliser la biblioth\xe8que."]}),"\n",(0,s.jsx)(i.h3,{id:"fetchcontent-et-cmake",children:"FetchContent et Cmake"}),"\n",(0,s.jsxs)(i.p,{children:["Pour t\xe9l\xe9charger et inclure ",(0,s.jsx)(i.strong,{children:"glm"})," dans un projet CMake nous allons utiliser la fonctionnalit\xe9 ",(0,s.jsx)(i.strong,{children:"FetchContent"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Premi\xe8rement il faut indiquer \xe0 CMake que l'on souhaite utiliser la fonctionnalit\xe9 ",(0,s.jsx)(i.strong,{children:"FetchContent"}),". C'est une fonction qui est incluse dans CMake \xe0 partir de la version ",(0,s.jsx)(i.strong,{children:"3.11"}),", mais qui n'est pas activ\xe9e par d\xe9faut. Pour l'activer, il faut ajouter la ligne suivante avant de l'utiliser dans ",(0,s.jsx)(i.code,{children:"CMakeLists.txt"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cmake",children:"include(FetchContent)\n"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"FetchContent"})," permet de t\xe9l\xe9charger une biblioth\xe8que depuis un url ou un d\xe9p\xf4t git. Nous allons utiliser la fonction ",(0,s.jsx)(i.code,{children:"FetchContent_Declare"})," pour indiquer \xe0 cmake que l'on souhaite t\xe9l\xe9charger la biblioth\xe8que ",(0,s.jsx)(i.strong,{children:"glm"})," depuis un d\xe9p\xf4t git."]}),"\n",(0,s.jsxs)(i.p,{children:["Il suffit d'ajouter les lignes suivantes dans le fichier ",(0,s.jsx)(i.code,{children:"CMakeLists.txt"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cmake",children:"FetchContent_Declare(\n    glm\n    GIT_REPOSITORY https://github.com/g-truc/glm\n    GIT_TAG efec5db081e3aad807d0731e172ac597f6a39447\n)\n"})}),"\n",(0,s.jsxs)(i.p,{children:["La fonction ",(0,s.jsx)(i.code,{children:"FetchContent_Declare"})," prend plusieurs param\xe8tres :"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Le nom de la biblioth\xe8que (ici ",(0,s.jsx)(i.code,{children:"glm"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:["L'url du d\xe9p\xf4t git (ici ",(0,s.jsx)(i.code,{children:"https://github.com/g-truc/glm"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:["Le tag git qui fait r\xe9f\xe9rence au ",(0,s.jsx)(i.strong,{children:"commit"})," que l'on souhaite t\xe9l\xe9charger (ici ",(0,s.jsx)(i.code,{children:"efec5db081e3aad807d0731e172ac597f6a39447"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Une fois que l'on a d\xe9clar\xe9 o\xf9 trouver la biblioth\xe8que, il faut indiquer \xe0 CMake que l'on souhaite la t\xe9l\xe9charger et la rendre disponible dans le projet. Pour cela, on utilise la fonction ",(0,s.jsx)(i.code,{children:"FetchContent_MakeAvailable"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cmake",children:"FetchContent_MakeAvailable(glm)\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Une fois disponible, on peut pr\xe9ciser que l'on souhaite utiliser la biblioth\xe8que ",(0,s.jsx)(i.strong,{children:"glm"})," dans une ",(0,s.jsx)(i.strong,{children:"target"})," CMake avec la fonction ",(0,s.jsx)(i.code,{children:"target_link_libraries"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cmake",children:"target_link_libraries(<target> PUBLIC glm)\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Une fois tout assembl\xe9, Voil\xe0 un exemple de fichier ",(0,s.jsx)(i.code,{children:"CMakeLists.txt"})," qui utilise ",(0,s.jsx)(i.strong,{children:"glm"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cmake",children:'cmake_minimum_required(VERSION 3.20)\nproject(test)\n\n// Permet de changer le dossier de sortie des fichiers ex\xe9cutables (pour qu\'ils soient dans un dossier bin au lieu d\'\xeatre m\xe9lang\xe9 avec les autres fichiers temporaires dans le dossier build)\nset(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin/${CMAKE_BUILD_TYPE})\n\n// Ajoute des options de compilation pour le compilateur pour avoir des messages d\'erreurs suppl\xe9mentaires\nif (MSVC)\n    add_compile_options(/W3)\nelse()\n    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)\nendif()\n\n# ---Source files---\nfile(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")\n\n# ---Executable---\nadd_executable(test ${SRC_FILES})\ntarget_compile_features(test PUBLIC cxx_std_17)\ntarget_include_directories(test PUBLIC "src/")\n\n# ---Libraries---\ninclude(FetchContent)\n\n# ---glm---\nFetchContent_Declare(\n    glm\n    GIT_REPOSITORY https://github.com/g-truc/glm\n    GIT_TAG efec5db081e3aad807d0731e172ac597f6a39447\n)\nFetchContent_MakeAvailable(glm)\n// On lie la biblioth\xe8que glm \xe0 notre ex\xe9cutable (target) test\ntarget_link_libraries(test PUBLIC glm)\n'})}),"\n",(0,s.jsx)(i.h2,{id:"magic-enum",children:"Magic enum"}),"\n",(0,s.jsxs)(i.p,{children:["Pour illustrer l'ajout manuel d'une biblioth\xe8que, nous allons utiliser la biblioth\xe8que ",(0,s.jsx)(i.strong,{children:"magic enum"}),". Par la m\xeame occasion on d\xe9couvre une biblioth\xe8que tr\xe8s utile pour manipuler des \xe9num\xe9rations qui comble une lacune du langage C++ et simplifie grandement l'utilisation des \xe9num\xe9rations."]}),"\n",(0,s.jsx)(i.p,{children:"POur cette approche, l'id\xe9e est de manuellement t\xe9l\xe9charger le fichier de la biblioth\xe8que (qui est un header only) et de l'inclure dans le projet."}),"\n",(0,s.jsxs)(i.p,{children:["Premi\xe8rement, il faut t\xe9l\xe9charger les fichiers de la biblioth\xe8que. Pour cela, il faut se rendre sur la page github de la biblioth\xe8que : ",(0,s.jsx)(i.a,{href:"https://github.com/Neargye/magic_enum/tree/master/include/magic_enum",children:"https://github.com/Neargye/magic_enum/tree/master/include/magic_enum"})," et t\xe9l\xe9charger les fichiers dans le dossier ",(0,s.jsx)(i.code,{children:"include"})," (en cliquant sur le bouton ",(0,s.jsx)(i.strong,{children:"Code"})," puis ",(0,s.jsx)(i.strong,{children:"Download ZIP"})," par exemple ou en clonant le d\xe9p\xf4t git)."]}),"\n",(0,s.jsxs)(i.p,{children:["Ensuite, il faut cr\xe9er un dossier ",(0,s.jsx)(i.code,{children:"lib"})," dans le dossier du projet et y placer les fichiers de la biblioth\xe8que (dans un sous dossier ",(0,s.jsx)(i.code,{children:"magic_enum"})," par exemple)."]}),"\n",(0,s.jsxs)(i.p,{children:["Enfin, il faut indiquer \xe0 cmake o\xf9 se trouve les fichiers et que l'on souhaite utiliser la biblioth\xe8que ",(0,s.jsx)(i.strong,{children:"magic enum"})," dans le programme. Pour cela, on utilise la fonction ",(0,s.jsx)(i.code,{children:"target_include_directories"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cmake",children:'target_include_directories(<target> PUBLIC "lib/")\n'})}),"\n",(0,s.jsx)(i.p,{children:"Ainsi il va \xeatre possible d'inclure les fichiers dans le programme afin d'utiliser la biblioth\xe8que:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cpp",children:"#include <magic_enum/magic_enum.hpp>\n"})}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["C'est \xe9videment plus simple d'utiliser ",(0,s.jsx)(i.strong,{children:"FetchContent"})," pour inclure une biblioth\xe8que, mais il est important de comprendre que cela fonctionne de la m\xeame fa\xe7on et que simplement inclure la biblioth\xe8que et utiliser ",(0,s.jsx)(i.code,{children:"target_include_directories"})," (dans le cas plus simple d'une biblioth\xe8que ",(0,s.jsx)(i.strong,{children:"header only"}),") permet de l'utiliser dans le programme."]})}),"\n",(0,s.jsx)(i.h2,{id:"find-package-et-cmake",children:"Find Package et Cmake"}),"\n",(0,s.jsxs)(i.p,{children:["Il est \xe9galement possible d'utiliser la fonctionnalit\xe9 ",(0,s.jsx)(i.strong,{children:"Find Package"})," de cmake pour inclure une biblioth\xe8que. Cela permet de simplifier l'inclusion d'une biblioth\xe8que et de ne pas avoir \xe0 indiquer o\xf9 se trouve les fichiers de la biblioth\xe8que. Cela repose sur le fait que la biblioth\xe8que est ",(0,s.jsx)(i.strong,{children:"install\xe9e"})," sur le syst\xe8me d'exploitation et/ou que l'on utilise un gestionnaire de d\xe9pendances. C'est tr\xe8s pratique sur Linux, mais cela peut \xeatre plus compliqu\xe9 sur Windows. Et c'est la raison pour laquelle nous n'allons pas l'utiliser dans ce cours (car trop d\xe9pendant du syst\xe8me d'exploitation)."]}),"\n",(0,s.jsx)(i.p,{children:"Mais sachez que cela existe et vous ne serez pas surpris si vous tombez dessus."}),"\n",(0,s.jsxs)(i.p,{children:["Voil\xe0 un exemple de fichier ",(0,s.jsx)(i.code,{children:"CMakeLists.txt"})," (non test\xe9) qui utilise ",(0,s.jsx)(i.strong,{children:"Find Package"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cmake",children:'cmake_minimum_required(VERSION 3.20)\nproject(test)\n\nset(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin/${CMAKE_BUILD_TYPE})\n\nif (MSVC)\n    add_compile_options(/W3)\nelse()\n    add_compile_options(-Wall -Wextra -Wpedantic -pedantic-errors)\nendif()\n\n# ---Source files---\nfile(GLOB_RECURSE SRC_FILES CONFIGURE_DEPENDS "src/*.cpp")\n\n# ---Executable---\nadd_executable(test ${SRC_FILES})\ntarget_compile_features(test PUBLIC cxx_std_17)\ntarget_include_directories(test PUBLIC "src/")\n\n# ---glm---\n# set(glm_DIR <installation prefix>/lib/cmake/glm) # if necessary\n// highlight-next-line\nfind_package(glm REQUIRED)\n# On lie la biblioth\xe8que glm \xe0 notre ex\xe9cutable (target) test\ntarget_link_libraries(test PUBLIC glm::glm)\n'})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Enfin, avec de nouvelle version de Cmake il est m\xeame possible de configurer le fonctionnement de ",(0,s.jsx)(i.code,{children:"FetchContent_MakeAvailable"})," pour qu'il utilise ",(0,s.jsx)(i.strong,{children:"Find Package"})," pour inclure la biblioth\xe8que si c'est possible et qu'il utilise ",(0,s.jsx)(i.strong,{children:"FetchContent"})," sinon.\nCela peut \xeatre pratique dans certains cas, et permet d'\xe9viter de t\xe9l\xe9charger la biblioth\xe8que si elle est d\xe9j\xe0 install\xe9e sur le syst\xe8me d'exploitation, mais cela d\xe9passe le cadre de ce cours."]})}),"\n",(0,s.jsx)(i.h2,{id:"pour-aller-plus-loin-cr\xe9er-sa-propre-biblioth\xe8que",children:"Pour aller plus loin: cr\xe9er sa propre biblioth\xe8que"}),"\n",(0,s.jsx)(i.p,{children:"Il est \xe9galement possible de cr\xe9er sa propre biblioth\xe8que. Cela peut \xeatre utile pour r\xe9utiliser du code dans plusieurs projets ou pour partager du code avec d'autres d\xe9veloppeurs."}),"\n",(0,s.jsxs)(i.p,{children:["Pour cr\xe9er une biblioth\xe8que, il faut cr\xe9er un nouveau projet cmake et ajouter un dossier ",(0,s.jsx)(i.code,{children:"lib"})," dans lequel on va placer les fichiers de la biblioth\xe8que. Ensuite, il faut cr\xe9er un fichier ",(0,s.jsx)(i.code,{children:"CMakeLists.txt"})," dans le dossier ",(0,s.jsx)(i.code,{children:"lib"})," et indiquer \xe0 cmake que l'on souhaite cr\xe9er une biblioth\xe8que avec la fonction ",(0,s.jsx)(i.code,{children:"add_library"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cmake",children:"add_library(<name> [STATIC | SHARED | MODULE]\n            [EXCLUDE_FROM_ALL]\n            source1 source2 ... sourceN)\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Je ne vais pas rentrer dans les d\xe9tails dans ce cours mais voil\xe0 un exemple de ",(0,s.jsx)(i.strong,{children:"biblioth\xe8que"})," ici si c'est quelque chose qui vous int\xe9resse : ",(0,s.jsx)(i.a,{href:"https://github.com/JulesFouchy/Simple-Image-Lib/tree/main",children:"Simple-Image-Lib"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Une biblioth\xe8que est un ensemble de fonctions et de classes qui permettent de r\xe9aliser des t\xe2ches sp\xe9cifiques."}),"\n",(0,s.jsxs)(i.li,{children:["Une biblioth\xe8que peut \xeatre ",(0,s.jsx)(i.strong,{children:"statique"})," ou ",(0,s.jsx)(i.strong,{children:"dynamique"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Il existe plusieurs fa\xe7ons d'inclure une biblioth\xe8que dans un programme :","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"CMake FetchContent"}),"\n",(0,s.jsx)(i.li,{children:"Inclusion manuelle"}),"\n",(0,s.jsx)(i.li,{children:"Gestionnaire de d\xe9pendances"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["En pratique, il est pr\xe9f\xe9rable d'utiliser ",(0,s.jsx)(i.strong,{children:"CMake FetchContent"})," pour inclure une biblioth\xe8que (compatible avec tous les syst\xe8mes d'exploitation)."]}),"\n",(0,s.jsxs)(i.li,{children:["Il est \xe9galement possible d'utiliser ",(0,s.jsx)(i.strong,{children:"Find Package"})," pour inclure une biblioth\xe8que (mais cela d\xe9pend du syst\xe8me d'exploitation)."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>r});var s=n(67294);const l={},t=s.createContext(l);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);
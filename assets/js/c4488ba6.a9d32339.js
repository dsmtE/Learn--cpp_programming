"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[6477],{62690:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=r(74848),s=r(28453),t=r(11470),o=r(19365);const a={title:"Premier programme",tags:["C++"],sidebar_position:3},l="Compiler votre premier programme",c={id:"Lessons/S1/Setup/HelloImac",title:"Premier programme",description:"C'est maintenant le moment de compiler votre premier programme !",source:"@site/content/Lessons/S1/Setup/HelloImac.md",sourceDirName:"Lessons/S1/Setup",slug:"/Lessons/S1/Setup/HelloImac",permalink:"/Learn--cpp_programming/Lessons/S1/Setup/HelloImac",draft:!1,unlisted:!1,tags:[{inline:!0,label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:3,frontMatter:{title:"Premier programme",tags:["C++"],sidebar_position:3},sidebar:"Lessons",previous:{title:"CMake",permalink:"/Learn--cpp_programming/Lessons/S1/Setup/CMake"},next:{title:"Un monde de variables",permalink:"/Learn--cpp_programming/Lessons/S1/Variables"}},u={},d=[{value:"Utiliser CMake et VSCode",id:"utiliser-cmake-et-vscode",level:2},{value:"Quelques explications sur le programme",id:"quelques-explications-sur-le-programme",level:2},{value:"#include ?",id:"include-",level:3},{value:"La fonction main",id:"la-fonction-main",level:3},{value:"Hello and welcome to IMAC !",id:"hello-and-welcome-to-imac-",level:3},{value:"Dernier point (virgule)",id:"dernier-point-virgule",level:3}];function m(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{VSCodeExtension:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VSCodeExtension",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"compiler-votre-premier-programme",children:"Compiler votre premier programme"}),"\n",(0,i.jsx)(n.p,{children:"C'est maintenant le moment de compiler votre premier programme !"}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez cr\xe9er un fichier d'extension ",(0,i.jsx)(n.em,{children:"cpp"})," avec le code suivant :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="helloImac.cpp"',children:'#include <iostream>\n\nint main()\n{\n    std::cout << "Hello and welcome to IMAC !" << std::endl;\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Une fois le fichier cr\xe9\xe9, il suffit d'ex\xe9cuter la commande suivante pour produire l'ex\xe9cutable compil\xe9 :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"g++ helloImac.cpp -o helloImac\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Cela va produire un ex\xe9cutable avec le nom choisi apr\xe8s le ",(0,i.jsx)(n.code,{children:"-o"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Une fois compil\xe9 il suffit de l'ex\xe9cuter avec la commande suivante :"}),"\n",(0,i.jsxs)(t.A,{groupId:"operating-systems",children:[(0,i.jsx)(o.A,{value:"Windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./helloImac.exe\n"})})}),(0,i.jsx)(o.A,{value:"Linux&MacOS",label:"Linux et MacOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./helloImac\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"utiliser-cmake-et-vscode",children:"Utiliser CMake et VSCode"}),"\n",(0,i.jsxs)(n.p,{children:["C'est donc possible de le faire uniquement avec des lignes de commandes mais par simplicit\xe9 nous allons d\xe8s maintenant utiliser ",(0,i.jsx)(n.strong,{children:"CMake"})," dont j'ai parl\xe9 pr\xe9c\xe9demment qui s'int\xe8gre facilement avec ",(0,i.jsx)(n.strong,{children:"VSCode"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Pour utiliser ",(0,i.jsx)(n.strong,{children:"CMake"})," il faut tout d'abord cr\xe9er un fichier nomm\xe9 ",(0,i.jsx)(n.strong,{children:"CMakeLists.txt"}),"\nVoici le premier qu'on va utiliser (quelques explications en commentaire ",(0,i.jsx)(n.strong,{children:'"#"'})," du fichier) :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",metastring:'title="CMakeLists.txt"',children:'# Nous voulons un cmake "r\xe9cent" pour utiliser les derni\xe8res fonctionnalit\xe9s\ncmake_minimum_required(VERSION 3.0)\n\n# La version du C++ que l\'on souhaite utiliser (dans notre cas C++17)\nset(CMAKE_CXX_STANDARD 17)\n\n# Le nom du projet\nproject(IMAC_project)\n\n# On indique que l\'on veut cr\xe9er un ex\xe9cutable "helloImac" compil\xe9 \xe0 partir du fichier helloImac.cpp\nadd_executable(helloImac helloImac.cpp)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Ce fichier ",(0,i.jsx)(n.strong,{children:"CMakeLists.txt"})," va \xeatre bien pratique car il est reconnu par divers ",(0,i.jsx)(n.strong,{children:"IDE"})," et en ce qui nous concerne on va l'utiliser avec ",(0,i.jsx)(n.strong,{children:"VSCode"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Il suffit d'avoir au pr\xe9alable install\xe9 l'extension dont je vous ai parl\xe9 ",(0,i.jsx)(a,{id:"twxs.cmake"})," et d'ouvrir le dossier contenant le fichier ",(0,i.jsx)(n.strong,{children:"CMakeLists.txt"}),' dans VSCode (il est recommand\xe9 de cr\xe9er un dossier d\xe9di\xe9 au "projet" contenant les fichiers sources et le fichier ',(0,i.jsx)(n.strong,{children:"CMakeLists.txt"}),").\nL'extension devrait normalement reconna\xeetre automatiquement qu'il y a un fichier cmake et vous proposer d'initialiser celui-ci automatiquement."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(80085).A+"",width:"546",height:"126"})}),"\n",(0,i.jsxs)(n.p,{children:["Si c'est la premi\xe8re fois que vous l'ouvrez ce qui est s\xfbrement le cas il devrait vous demander de choisir un ",(0,i.jsx)(n.strong,{children:"kit"})," de compilation et il faudra donc s\xe9lectionner ",(0,i.jsx)(n.strong,{children:"GCC"})," (ou ",(0,i.jsx)(n.strong,{children:"MSVC"})," si c'est ce que vous avez d\xe9cid\xe9 d'installer)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(42820).A+"",width:"649",height:"139"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Si ce n'est pas le cas vous pouvez toujours utiliser le raccourci ",(0,i.jsx)("kbd",{children:"Ctrl"}),"+",(0,i.jsx)("kbd",{children:"Shift"}),"+",(0,i.jsx)("kbd",{children:"P"}),' puis taper et s\xe9lectionner "CMake: select a kit"']})}),"\n",(0,i.jsxs)(n.p,{children:["Une fois tout initialis\xe9, vous devriez voir des logs dans un terminal ressemblant \xe0 cela (dans mon cas sous ",(0,i.jsx)(n.strong,{children:"Linux"})," avec le compilateur ",(0,i.jsx)(n.strong,{children:"GCC"})," ici) :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'[variant] Loaded new set of variants\n[kit] Successfully loaded 1 kits from /home/user/.local/share/CMakeTools/cmake-tools-kits.json\n[proc] Executing command: /usr/bin/cmake --version\n[proc] Executing command: /usr/bin/gcc -v\n[proc] The command: ninja --version failed with error: Error: spawn ninja ENOENT\n[proc] The command: ninja-build --version failed with error: Error: spawn ninja-build ENOENT\n[proc] Executing command: /usr/bin/cmake "-S/home/user/DATA/Cours IMAC1/helloImac" "-B/home/user/DATA/Cours IMAC1/helloImac/build" -G "Unix Makefiles"\n[main] Configuring project: helloImac \n[proc] Executing command: /usr/bin/cmake --no-warn-unused-cli -DCMAKE_EXPORT_COMPILE_COMMANDS:BOOL=TRUE -DCMAKE_BUILD_TYPE:STRING=Debug -DCMAKE_C_COMPILER:FILEPATH=/usr/bin/gcc -DCMAKE_CXX_COMPILER:FILEPATH=/usr/bin/g++ "-S/home/user/DATA/Cours IMAC1/helloImac" "-B/home/user/DATA/Cours IMAC1/helloImac/build" -G "Unix Makefiles"\n[cmake] Not searching for unused variables given on the command line.\n[cmake] -- Configuring done\n[cmake] -- Generating done\n[cmake] -- Build files have been written to: /home/user/DATA/Cours IMAC1/helloImac/build\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez maintenant cliquer sur le bouton ",(0,i.jsx)(n.strong,{children:'"play"'}),"  dans la barre en bas pour ex\xe9cuter le programme. \ud83e\udd73"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(36359).A+"",width:"1012",height:"748"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["En cliquant sur ce bouton, l'",(0,i.jsx)(n.strong,{children:"IDE"})," compile automatiquement si n\xe9cessaire puis ex\xe9cute l'ex\xe9cutable."]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Cmake devrait normalement cr\xe9er un dossier ",(0,i.jsx)(n.strong,{children:"build"}),", c'est normal.\nCMake est un outil de compilation mais ne compile pas directement, il permet de g\xe9n\xe9rer des fichiers permettant ensuite de compiler un projet.\nVous n'avez pas besoin d'aller voir ce qui s'y trouve, ",(0,i.jsx)(n.strong,{children:"CMake"})," g\xe8re automatiquement ce dossier ",(0,i.jsx)(n.strong,{children:"build"})," pour vous."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:["Pour qu'un projet ",(0,i.jsx)(n.strong,{children:"CMake"})," soit fonctionnel, il faut que le ",(0,i.jsx)(n.strong,{children:"dossier"})," ouvert dans votre ",(0,i.jsx)(n.strong,{children:"IDE"})," contienne un fichier ",(0,i.jsx)(n.strong,{children:"CMakeLists.txt"})," \xe0 la racine du dossier."]}),(0,i.jsxs)(n.p,{children:["Sinon, l'extension ",(0,i.jsx)(n.strong,{children:"CMake"})," ne d\xe9tectera pas le dossier ouvert comme un projet CMake et il ne va pas s'initialiser automatiquement. Les fonctionnalit\xe9s de l'extension ne seront donc pas disponibles."]})]}),"\n",(0,i.jsx)(n.h2,{id:"quelques-explications-sur-le-programme",children:"Quelques explications sur le programme"}),"\n",(0,i.jsx)(n.h3,{id:"include-",children:"#include ?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Le but de notre programme est d\u2019afficher un message. Des d\xe9veloppeurs experts ont d\xe9j\xe0 cr\xe9\xe9 un outil qui permet de le faire facilement. Il se trouve dans un fichier nomm\xe9 ",(0,i.jsx)(n.strong,{children:"iostream"}),", acronyme de ",(0,i.jsx)(n.strong,{children:'"Input Output Stream"'}),", soit ",(0,i.jsx)(n.strong,{children:'"Flux d\u2019Entr\xe9es Sorties"'}),". Ce fichier fait partie de la biblioth\xe8que standard C++ ",(0,i.jsx)(n.strong,{children:"STD"}),' (pour "C++ ',(0,i.jsx)(n.strong,{children:"ST"}),"andar",(0,i.jsx)(n.strong,{children:"D"})," library\"), un ensemble de fonctionnalit\xe9s d\xe9j\xe0 pr\xe9-cod\xe9es et disponibles partout avec n'importe quel compilateur C++."]}),"\n",(0,i.jsxs)(n.p,{children:["Pour utiliser les fonctionnalit\xe9s offertes par ce fichier, notamment \xe9crire un message avec ",(0,i.jsx)(n.code,{children:"std::cout"}),', on doit l\u2019importer dans notre programme. On dit qu\u2019on l\u2019inclut, d\u2019o\xf9 l\u2019anglais "',(0,i.jsx)(n.strong,{children:"include"}),'". Nous utiliserons beaucoup cette fonctionnalit\xe9 en C++.']}),"\n",(0,i.jsx)(n.p,{children:"Essayez donc de supprimer la ligne, puis compilez de nouveau votre programme et voyez ce qu'il se passe !"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(9604).A+"",width:"1149",height:"291"})}),"\n",(0,i.jsxs)(n.p,{children:["Le compilateur ne peut pas compiler notre programme, et il nous fournit donc une ",(0,i.jsx)(n.em,{children:"erreur de compilation"}),". Il est tr\xe8s important d'apprendre \xe0 lire et comprendre ces erreurs car elles vous apportent beaucoup d'informations pour vous aider \xe0 corriger votre programme ! En l'occurrence elle nous indique que le symbole ",(0,i.jsx)(n.code,{children:"std::cout"})," est introuvable, et nous donne m\xeame une piste pour corriger le probl\xe8me : rajouter ",(0,i.jsx)(n.code,{children:"#include <iostream>"})," !"]}),"\n",(0,i.jsxs)(n.p,{children:["Il nous indique m\xeame o\xf9 l'erreur s'est produite :\n",(0,i.jsx)(n.img,{src:r(75424).A+"",width:"1149",height:"89"}),"\ncela signifie que c'est dans le fichier ",(0,i.jsx)(n.em,{children:"helloImac.cpp"}),", \xe0 la ligne 4, et au 8\xe8me caract\xe8re de cette ligne. Vous pouvez aussi ",(0,i.jsx)("kbd",{children:"CTRL"}),"+click dessus pour que VSCode vous emm\xe8ne directement au bon endroit !"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"#include"})," s'appelle une ",(0,i.jsx)(n.strong,{children:"directive pr\xe9processeur"}),". Le ",(0,i.jsx)(n.strong,{children:"pr\xe9processeur"})," est un programme ex\xe9cut\xe9 lors de la premi\xe8re phase de la compilation qui effectue des modifications textuelles sur le fichier source \xe0 partir de directives. Ces directives commencent par le caract\xe8re ",(0,i.jsx)("kbd",{children:"#"})," et doivent se terminer par un saut de ligne."]}),(0,i.jsxs)(n.p,{children:["Retenez simplement que ",(0,i.jsx)(n.code,{children:"#include"})," nous permet d\u2019importer des fichiers pour les inclure dans le programme que l'on est en train d'\xe9crire, et je le d\xe9taillerai plus tard dans le semestre."]})]}),"\n",(0,i.jsx)(n.h3,{id:"la-fonction-main",children:"La fonction main"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"int main()\n{\n    // ...\n    return 0;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Lorsqu\u2019on lance le programme, celui-ci doit savoir par o\xf9 commencer. On parle de point d\u2019entr\xe9e. Ce point d'entr\xe9e ",(0,i.jsx)(n.strong,{children:"doit"})," \xeatre une ",(0,i.jsx)(n.strong,{children:"fonction"})," nomm\xe9e ",(0,i.jsx)(n.strong,{children:"main"})," et renvoyer une valeur avec le mot cl\xe9 ",(0,i.jsx)(n.strong,{children:"return"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Nous reviendrons sur les ",(0,i.jsx)(n.strong,{children:"fonctions"})," dans un autre chapitre mais retenez que c'est un ensemble d'instructions d\xe9limit\xe9 par des accolades ",(0,i.jsx)("kbd",{children:"{"})," et ",(0,i.jsx)("kbd",{children:"}"}),", et auquel on donne un nom (",(0,i.jsx)(n.code,{children:"main"})," dans ce cas)."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.strong,{children:"main"})," est un peu sp\xe9ciale et sa valeur de retour (de type int) sert \xe0 indiquer si le programme s\u2019est termin\xe9 sans erreur. Si tout se passe bien, il faut retourner ",(0,i.jsx)(n.strong,{children:"0"}),". N\u2019importe quelle autre valeur indique une erreur."]})}),"\n",(0,i.jsx)(n.h3,{id:"hello-and-welcome-to-imac-",children:"Hello and welcome to IMAC !"}),"\n",(0,i.jsxs)(n.p,{children:["L\u2019instruction ci-dessous permet d\u2019afficher le texte (qu'on appelle ",(0,i.jsx)(n.strong,{children:'"cha\xeene de caract\xe8res"'}),", ou ",(0,i.jsx)(n.strong,{children:'"string"'}),", en programmation) ",(0,i.jsx)(n.strong,{children:'"Hello and welcome to IMAC !"'})," sur la sortie standard du programme."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'std::cout << "Hello and welcome to IMAC !" << std::endl;\n'})}),"\n",(0,i.jsxs)(n.p,{children:['Premi\xe8rement "',(0,i.jsx)(n.strong,{children:"std"}),'" fait r\xe9f\xe9rence \xe0 la biblioth\xe8que standard C++ dont je parlais pr\xe9c\xe9demment.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"std::"})," permet d'indiquer que l'on veut utiliser une fonctionnalit\xe9 particuli\xe8re de cette biblioth\xe8que, ici ",(0,i.jsx)(n.strong,{children:"cout"})," :"]}),"\n",(0,i.jsxs)(n.p,{children:["Il s\u2019agit de l'objet (on parle de ",(0,i.jsx)(n.em,{children:"stream"})," dans le jargon C++) permettant de renvoyer des caract\xe8res, g\xe9n\xe9ralement pour les afficher dans le terminal. Le ",(0,i.jsx)(n.strong,{children:"'c'"})," fait r\xe9f\xe9rence \xe0 ",(0,i.jsx)(n.strong,{children:"caract\xe8re"})," et ",(0,i.jsx)(n.strong,{children:"\u2018out\u2019"})," indique ",(0,i.jsx)(n.strong,{children:"\u2018sortie\u2019"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Enfin, ",(0,i.jsx)(n.strong,{children:"std::endl"}),' indique ici "end-line" soit la ',(0,i.jsx)(n.strong,{children:"'fin de ligne'"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"dernier-point-virgule",children:"Dernier point (virgule)"}),"\n",(0,i.jsx)(n.p,{children:"Chaque instruction doit \xeatre identifiable afin de que compilateur puisse faire son travail et produire un programme ex\xe9cutable."}),"\n",(0,i.jsxs)(n.p,{children:["C'est le r\xf4le du ",(0,i.jsx)(n.strong,{children:"point-virgule"})," ",(0,i.jsx)("kbd",{children:";"})," de d\xe9limiter chaque instruction et il est donc important de ne pas l'oublier."]}),"\n",(0,i.jsxs)(n.p,{children:["On le retrouve par exemple dans notre programme \xe0 la fin du ",(0,i.jsx)(n.code,{children:"return 0;"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Ce n'est pas le cas pour les ",(0,i.jsx)(n.strong,{children:"directives pr\xe9processeur"})," comme ",(0,i.jsx)(n.code,{children:"#include"})," vu pr\xe9c\xe9demment qui, elles, doivent avoir leur ",(0,i.jsx)(n.strong,{children:"propre ligne"})," et ne doivent pas se terminer par un point-virgule ",(0,i.jsx)("kbd",{children:";"})," mais un saut de ligne."]})}),"\n",(0,i.jsx)(n.p,{children:"Les sauts de lignes et espacements sont l\xe0 pour am\xe9liorer la lisibilit\xe9 mais pas pour le bon fonctionnement du compilateur en lui m\xeame et on pourrait tr\xe8s bien \xe9crire :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nint main() { std::cout << "Hello and welcome to IMAC !" << std::endl; return 0; }\n'})}),"\n",(0,i.jsx)(n.p,{children:"Je vous recommande tout de m\xeame d'utiliser des espacements et sauts de ligne pour mieux s'y retrouver et c'est ce que je vais faire tout au long de ce cours."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Et voil\xe0 ! Vous avez ex\xe9cut\xe9 votre premier programme C++ \xe0 l'aide de VSCode ! \ud83c\udf89"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var i=r(34164);const s={tabItem:"tabItem_Ymn6"};var t=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var i=r(96540),s=r(34164),t=r(23104),o=r(56347),a=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:s}}=e;return{value:n,label:r,attributes:i,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,t=m(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:t}))),[c,d]=h({queryString:r,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,u.Dv)(r);return[s,(0,i.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),j=(()=>{const e=c??x;return p({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function v(e){let{className:n,block:r,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),s=a[r].value;s!==i&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...t,className:(0,s.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:s}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function C(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function k(e){const n=(0,g.A)();return(0,f.jsx)(C,{...e,children:d(e.children)},String(n))}},9604:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/erreur-compil-include-f372fcea8513fb795cd83afc711e3fc1.png"},75424:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/go-to-error-ff9f72a9ada81aae5cec7a68603bcf6c.png"},36359:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/VSCode_cmakePlay-5b08b23b777ac96df677a6ec32d8223e.png"},80085:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/VSCode_projectConfiguration-5840585681a0ba059bed424adc4df340.png"},42820:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/VSCode_selectKit-585c5c632ed4e181b85d7f7898f7cd4c.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
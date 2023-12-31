"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[138],{357:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(5893),i=s(1151);const t={title:"TD1 - Mise en place",sidebar_position:1},o=void 0,l={id:"TDs/S1/Setup",title:"TD1 - Mise en place",description:"Ce TD est destin\xe9 \xe0 vous familiariser avec l'environnement de d\xe9veloppement et les outils utilis\xe9s dans le cadre de ce cours.",source:"@site/content/TDs/S1/01_Setup.md",sourceDirName:"TDs/S1",slug:"/TDs/S1/Setup",permalink:"/Learn--cpp_programming/TDs/S1/Setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"TD1 - Mise en place",sidebar_position:1},sidebar:"TDs",previous:{title:"TDs",permalink:"/Learn--cpp_programming/TDs"},next:{title:"TD2 - Variables",permalink:"/Learn--cpp_programming/TDs/S1/Variables"}},c={},a=[{value:"Premier programme",id:"premier-programme",level:2},{value:"Plusieurs ex\xe9cutables",id:"plusieurs-ex\xe9cutables",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Ce TD est destin\xe9 \xe0 vous familiariser avec l'environnement de d\xe9veloppement et les outils utilis\xe9s dans le cadre de ce cours."}),"\n",(0,r.jsxs)(n.p,{children:["Le but est d'",(0,r.jsx)(n.strong,{children:"installer"})," les outils n\xe9cessaires pour pouvoir travailler sur vos propres machines."]}),"\n",(0,r.jsx)(n.p,{children:"Je vous invite donc \xe0 retourner dans les sections suivantes pour avoir les instructions d'installation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/Lessons/S1/Setup/Compiler",children:"Installer le compilateur"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/Lessons/S1/Setup/IDE",children:"Visual Studio Code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/Lessons/S1/Setup/CMake",children:"CMake"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Si vous avez des difficult\xe9s \xe0 installer, n'h\xe9sitez pas \xe0 demander \xe0 votre charg\xe9 de TD ou \xe0 moi-m\xeame."}),"\n",(0,r.jsx)(n.h2,{id:"premier-programme",children:"Premier programme"}),"\n",(0,r.jsx)(n.p,{children:"Une fois que vous avez install\xe9 les outils, vous pouvez cr\xe9er votre premier programme."}),"\n",(0,r.jsxs)(n.p,{children:["Je vous invite \xe0 regarder la page suivante pour avoir les instructions: ",(0,r.jsx)(n.a,{href:"/Lessons/S1/Setup/HelloImac",children:"Premier programme"})]}),"\n",(0,r.jsx)(n.h2,{id:"plusieurs-ex\xe9cutables",children:"Plusieurs ex\xe9cutables"}),"\n",(0,r.jsxs)(n.p,{children:["Comme je l'ai expliqu\xe9, il ne doit y avoir qu'un seul point d'entr\xe9e dans un programme ",(0,r.jsx)(n.strong,{children:"C++"})," et donc une seule fonction ",(0,r.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Cependant, dans le cadre des ",(0,r.jsx)(n.strong,{children:"TDs"}),", il est parfois utile de pouvoir tester plusieurs fonctions ",(0,r.jsx)(n.code,{children:"main"})," diff\xe9rentes, une par exercice par exemple."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour cela, nous allons utiliser une fonctionnalit\xe9 de CMake qui permet de cr\xe9er ",(0,r.jsx)(n.strong,{children:"plusieurs targets"})," ou ex\xe9cutables."]}),"\n",(0,r.jsxs)(n.p,{children:["Je vous invite \xe0 cr\xe9er deux fichiers ",(0,r.jsx)(n.code,{children:"td01_ex01.cpp"})," et ",(0,r.jsx)(n.code,{children:"td01_ex02.cpp"})," dans un dossier ",(0,r.jsx)(n.code,{children:"src"})," et \xe0 y mettre le contenu suivant:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="src/td01_ex01.cpp"',children:'#include <iostream>\n\nint main()\n{\n    std::cout << "TD 01 - Ex 01" << std::endl;\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="src/td01_ex02.cpp"',children:'#include <iostream>\n\nint main()\n{\n    std::cout << "TD 01 - Ex 02" << std::endl;\n    return 0;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Ensuite, nous allons cr\xe9er un fichier ",(0,r.jsx)(n.code,{children:"CMakeLists.txt"})," \xe0 la racine du projet avec le contenu suivant:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cmake",metastring:'title="CMakeLists.txt"',children:'cmake_minimum_required(VERSION 3.0)\nset(CMAKE_CXX_STANDARD 17)\n\nproject(TD01)\n\n# On indique que l\'on veut cr\xe9er un ex\xe9cutable "ex01" compil\xe9 \xe0 partir du fichier td01_ex01.cpp\nadd_executable(ex01 src/td01_ex01.cpp)\n\n# On indique que l\'on veut cr\xe9er un ex\xe9cutable "ex02" compil\xe9 \xe0 partir du fichier td01_ex02.cpp\nadd_executable(ex02 src/td01_ex02.cpp)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Vous devriez avoir une arborescence de fichiers qui ressemble \xe0 \xe7a:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"td01\n\u251c\u2500\u2500 CMakeLists.txt\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 td01_ex01.cpp\n    \u2514\u2500\u2500 td01_ex02.cpp\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Ouvrez ensuite le dossier ",(0,r.jsx)(n.code,{children:"td01"})," avec VSCode, il devrait vous proposer de configurer CMake comme pour le premier programme."]}),"\n",(0,r.jsx)(n.p,{children:'Vous devriez ensuite avoir deux targets dans la barre \xe0 droite du bouton "Run" en bas:'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(3664).Z+"",width:"885",height:"103"})}),"\n",(0,r.jsx)(n.p,{children:"Cela vous permet de choisir quelle target vous voulez ex\xe9cuter pour travailler sur plusieurs ex\xe9cutables dans le m\xeame projet."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["C'est la m\xeame chose pour les t\xe2ches de compilation (\xe0 droite du bouton \"",(0,r.jsx)(n.strong,{children:"Build"}),'").']})}),"\n",(0,r.jsx)(n.p,{children:"Bravo, Vous \xeates maintenant pr\xeat \xe0 faire du C++ sur vos propres machines ! :partying_face:"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3664:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/VSCode_targets-9d568fb4537bd70d6bde0db711e36d21.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var r=s(7294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
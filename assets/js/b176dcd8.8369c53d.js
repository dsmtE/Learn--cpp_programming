"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[4708],{28387:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=n(85893),r=n(11151);const t={},o=void 0,a={id:"Workshop/Sujet",title:"Sujet",description:"Pitch",source:"@site/content/Workshop/01-Sujet.md",sourceDirName:"Workshop",slug:"/Workshop/Sujet",permalink:"/Learn--cpp_programming/Workshop/Sujet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"Workshop",previous:{title:"Workshop",permalink:"/Learn--cpp_programming/Workshop"},next:{title:"Planning",permalink:"/Learn--cpp_programming/Workshop/Planning"}},l={},c=[{value:"Pitch",id:"pitch",level:2},{value:"Attendus",id:"attendus",level:2},{value:"Pour bien d\xe9marrer",id:"pour-bien-d\xe9marrer",level:2},{value:"HELP mon effet ne fait rien !",id:"help-mon-effet-ne-fait-rien-",level:2},{value:"Rendu et Rapport",id:"rendu-et-rapport",level:2},{value:"Soutenance",id:"soutenance",level:2}];function u(e){const s={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"pitch",children:"Pitch"}),"\n",(0,i.jsx)(s.p,{children:"Durant ce workshop vous aller apprendre \xe0 coder des effets sur des images. (Comme on peut en trouver dans Photoshop, les filtres Instagram, etc.). Ce sera une premi\xe8re introduction \xe0 certains concepts de synth\xe8se d'image, et une bonne occasion de vous entra\xeener en C++ !"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.img,{src:n(39880).Z+"",width:"300",height:"345"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.img,{src:n(60998).Z+"",width:"300",height:"345"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.img,{src:n(33403).Z+"",width:"300",height:"345"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.img,{src:n(24743).Z+"",width:"500",height:"500"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.img,{src:n(69902).Z+"",width:"500",height:"500"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.img,{src:n(94543).Z+"",width:"500",height:"500"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.img,{src:n(15407).Z+"",width:"500",height:"500"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.img,{src:n(87361).Z+"",width:"513",height:"513"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.img,{src:n(31186).Z+"",width:"500",height:"500"})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"attendus",children:"Attendus"}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez faire ce projet en solo ou \xe0 deux."}),"\n",(0,i.jsxs)(s.p,{children:["Nous allons vous proposer ",(0,i.jsx)(s.a,{href:"./Exercices",children:"une liste d'exercices"}),", plus ou moins difficiles (la difficult\xe9 est indiqu\xe9e par le nombre d'\xe9toiles \u2b50). Nous ne nous attendons pas \xe0 ce que vous fassiez tous les exercices, mais faites en un maximum ! ",(0,i.jsx)(s.strong,{children:"Et il faudra au minimum faire un exercice de niveau 3 ou plus (\u2b50\u2b50\u2b50)."})," Vous \xeates aussi les bienvenu.es pour inventer vos propres effets ou en faire que vous avez vu quelque part, m\xeame si ils ne sont pas dans la liste !"]}),"\n",(0,i.jsx)(s.p,{children:"Vous \xeates \xe9valu\xe9.es non seulement sur la qualit\xe9 du travail rendu, mais aussi \u2013 de mani\xe8re tout aussi importante \u2013 sur votre s\xe9rieux et votre implication tout au long de la semaine de workshop."}),"\n",(0,i.jsxs)(s.p,{children:["\xc0 la fin de la semaine il y aura ",(0,i.jsx)(s.a,{href:"#soutenance",children:"une mini-soutenance"})," (optionnelle, et qui est plus un exercice de vulgarisation qu'autre chose), et il faudra rendre ",(0,i.jsx)(s.a,{href:"#rapport",children:"un mini-rapport"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"pour-bien-d\xe9marrer",children:"Pour bien d\xe9marrer"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/Cours-Prog-Imac/S1-Prog-Workshop",children:"Voici le template \xe0 utiliser"}),". Vous pouvez t\xe9l\xe9charger \xe7a et coder dedans, tout est d\xe9j\xe0 setup (CMake, librairies, images de test, etc.)"]}),"\n",(0,i.jsxs)(s.li,{children:["Nous utiliserons la librairie ",(0,i.jsx)(s.em,{children:"sil"})," pour lire, \xe9diter et sauvegarder les images. Elle est tr\xe8s simple \xe0 utiliser et n'expose que le minimum n\xe9cessaire. Vous pouvez trouver sa documentation ",(0,i.jsx)(s.a,{href:"https://github.com/JulesFouchy/Simple-Image-Lib/tree/main#usage",children:"sur GitHub"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Utilisez des images relativement petites (500x500 max), pour que le rendu soit quasi-instantan\xe9. Au moins pendant que vous faites vos tests. Vous avez d\xe9j\xe0 ",(0,i.jsx)(s.code,{children:'"images/logo.png"'})," et ",(0,i.jsx)(s.code,{children:'"images/photo.jpg"'})," dispos dans le template de projet. Certains effets marchent mieux sur une photo, et d'autres mieux sur une image flat, donc choisissez en fonction de l'effet sur quelle image l'appliquer. Vous pouvez aussi mettre vos propres images si vous voulez."]}),"\n",(0,i.jsxs)(s.li,{children:["Vous pouvez afficher l'image de sortie dans VSCode pour facilement voir le r\xe9sultat en m\xeame temps que vous codez :\n",(0,i.jsx)(s.img,{alt:"Alt text",src:n(75457).Z+"",width:"1510",height:"704"})]}),"\n",(0,i.jsx)(s.li,{children:"Deux mani\xe8res pour it\xe9rer sur l'image :"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"// On passe sur tous les x et tous les y, et on acc\xe8de au pixel correspondant :\nfor (int x{0}; x < image.width(); x++)\n{\n    for (int y{0}; y < image.height(); y++)\n    {\n        image.pixel(x, y).r = 0.f;\n    }\n}\n// Ou alors, si on n'a pas besoin de conna\xeetre le x et le y, on a une syntaxe plus concise pour it\xe9rer sur tous les pixels :\nfor (glm::vec3& color : image.pixels())\n{\n    color.r = 0.f;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Nos couleurs sont stock\xe9es dans des ",(0,i.jsx)(s.code,{children:"glm::vec3 color"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["On peut acc\xe9der aux composantes rouge, verte et bleue avec ",(0,i.jsx)(s.code,{children:"color.r"}),", ",(0,i.jsx)(s.code,{children:"color.g"})," et ",(0,i.jsx)(s.code,{children:"color.b"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Les valeurs vont de 0 \xe0 1. Par exemple un rouge pur sera ",(0,i.jsx)(s.code,{children:"glm::vec3{1, 0, 0}"}),", du blanc sera ",(0,i.jsx)(s.code,{children:"glm::vec3{1, 1, 1}"})," et du noir ",(0,i.jsx)(s.code,{children:"glm::vec3{0, 0, 0}"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Pour cr\xe9er une couleur avec les trois composantes identiques (donc un niveau de gris), la syntaxe ",(0,i.jsx)(s.code,{children:"glm::vec3{grey}"})," est \xe9quivalente \xe0 ",(0,i.jsx)(s.code,{children:"glm::vec3{grey, grey, grey}"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Vous pouvez g\xe9n\xe9ralement faire vos op\xe9rations directement sur les couleurs, pas besoin de les faire 3 fois sur chacun des canaux :"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"glm::vec3 color1{};\nglm::vec3 color2{};\nglm::vec3 final_color{};\n\nfinal_color = color1 + color2;\n// \xe9quivalent \xe0 :\n// final_color.r = color1.r + color2.r;\n// final_color.g = color1.g + color2.g;\n// final_color.b = color1.b + color2.b;\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Pour faire les diff\xe9rents exos, je vous conseille de faire une fonction par exo, et de tout mettre dans le m\xeame fichier ",(0,i.jsx)(s.code,{children:"main.cpp"}),". C'est le plus simple, et tant que le fichier ne devient pas trop gros et bord\xe9lique je pense que c'est une bonne solution. Par exemple :"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void keep_green_only(sil::Image& image) // Prend l'image par r\xe9f\xe9rence pour pouvoir la modifier\n{\n    // ...\n}\n\nvoid channels_swap(sil::Image& image) // Prend l'image par r\xe9f\xe9rence pour pouvoir la modifier\n{\n    // ...\n}\n\nint main()\n{\n    {\n        sil::Image image{\"images/logo.png\"}; // Lis l'image\n        keep_green_only(image); // Utilise la fonction pour modifier l'image\n        image.save(\"output/keep_green_only.png\"); // Sauvegarde l'image\n    }\n    {\n        sil::Image image{\"images/logo.png\"}; // Lis l'image\n        channels_swap(image); // Utilise la fonction pour modifier l'image\n        image.save(\"output/channels_swap.png\"); // Sauvegarde l'image\n    }\n}\n"})}),"\n",(0,i.jsx)(s.h2,{id:"help-mon-effet-ne-fait-rien-",children:"HELP mon effet ne fait rien !"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Est-ce que vous n'avez pas oubli\xe9 une r\xe9f\xe9rence (",(0,i.jsx)(s.code,{children:"&"}),") quelque part ?"]}),"\n",(0,i.jsx)(s.li,{children:"Est-ce que vous sauvegardez bien la bonne image ?"}),"\n",(0,i.jsx)(s.li,{children:"Est-ce qu'il n'y a pas un crash ? Lancez avec le debugger pour savoir !"}),"\n",(0,i.jsxs)(s.li,{children:["Est-ce que vous ne faites pas une division entre entiers, du genre ",(0,i.jsx)(s.code,{children:"1 / image.width()"})," qui retourne toujours 0 parce que le r\xe9sultat serait entre 0 et 1 et se retrouve arrondi ?"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"rendu-et-rapport",children:"Rendu et Rapport"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.em,{children:"\xc0 rendre avant dimanche \xe0 9h"})}),".",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(s.em,{children:["Pour le rendu, il suffit de ",(0,i.jsx)(s.a,{href:"https://docs.google.com/spreadsheets/d/1x2uqvKdhndstidmW4xoWkNTlbwHFDWGlpohdb6TRORY/edit?usp=sharing",children:"mettre votre lien git ici"})]}),". Attention, v\xe9rifiez bien que votre repo est en public, ou si il est en priv\xe9, pensez \xe0 m'inviter dessus (",(0,i.jsx)(s.a,{href:"https://github.com/julesfouchy/",children:(0,i.jsx)(s.em,{children:"julesfouchy"})}),")."]}),"\n",(0,i.jsx)(s.p,{children:"Pour le rapport, faites une section par exercice que vous avez fait. Montrez une image avant et apr\xe8s application de l'effet (comme c'est fait dans l'\xe9nonc\xe9 des exercices). Si vous jugez cela utile, vous pouvez mettre un petit texte expliquant des sp\xe9cificit\xe9s de l'algo que vous avez impl\xe9ment\xe9, et les pi\xe8ges potentiels dans lesquels il ne faut pas tomber."}),"\n",(0,i.jsx)(s.p,{children:"\xc0 faire en Markdown obligatoirement (Si vous ne connaissez pas c'est l'occasion de d\xe9couvrir, c'est super utile. Je vous montre tout \xe7a vendredi)."}),"\n",(0,i.jsx)(s.p,{children:"\xc0 mettre directement en tant que ReadMe.md \xe0 la racine du repo."}),"\n",(0,i.jsx)(s.h2,{id:"soutenance",children:"Soutenance"}),"\n",(0,i.jsx)(s.p,{children:"Pr\xe9sentez un des algos avanc\xe9s que vous avez fait, en 5-10 minutes. C'est de la vulgarisation, il faut que tous vos camarades puissent comprendre. Expliquez l'algo dans les grandes lignes, et parlez des petits pi\xe8ges de code auxquels il faut faire attention."}),"\n",(0,i.jsx)(s.p,{children:"PS : la soutenance est optionnelle, on va essayer de ne pas pr\xe9senter plusieurs fois le m\xeame algo, donc vous n'\xeates pas oblig\xe9.es de passer. Et si plusieurs groupes souhaitent passer sur le m\xeame algo, on va essayer de vous regrouper pour que vous fassiez une seule pr\xe9sentation, ensemble."})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},75457:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/image-620adbcaa594dc606aeedc6166fc916b.png"},87361:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/diamond_square_colored-77d72646ff1c71b5e026b011a9c72906.png"},69902:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/difference_of_gaussians-5ea86a8c231e9b041e6ad0c1efe2eb61.png"},39880:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/emboss-2cd2439fa8339c677a14586241b12838.png"},33403:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/glitch-b389c6a60f2b261cd790fd96c2acbe9d.png"},94543:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/kuwahara-a91229fa05eac550db8be2bda398aba5.jpg"},31186:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/mandelbrot-e94843c8f952c730f01f9e01d95ab793.png"},24743:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/ordered_dithering-0e06991630326e032d752dcc27e30def.png"},60998:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/outline-2f8c47d9ad4b5a44b2d79ae099d88dab.png"},15407:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/rosace-8bc0e3d9f62536046018798bce27d99a.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var i=n(67294);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
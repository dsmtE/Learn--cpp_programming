"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[9853],{7246:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(5893),t=s(1151);const i={title:"TD3 - Structures de donn\xe9es"},l=void 0,o={id:"TDs/S2/dataStructures",title:"TD3 - Structures de donn\xe9es",description:"Exercice 1 (Evaluation NPI)",source:"@site/content/TDs/S2/03_dataStructures.md",sourceDirName:"TDs/S2",slug:"/TDs/S2/dataStructures",permalink:"/Learn--cpp_programming/TDs/S2/dataStructures",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"TD3 - Structures de donn\xe9es"},sidebar:"TDs",previous:{title:"TD2 - Algorithmes de tri",permalink:"/Learn--cpp_programming/TDs/S2/sorting"},next:{title:"TD4 - D\xe9duction de type et biblioth\xe8que standard",permalink:"/Learn--cpp_programming/TDs/S2/AutoAndAlgorithm"}},c={},d=[{value:"Exercice 1 (Evaluation NPI)",id:"exercice-1-evaluation-npi",level:2},{value:"Exercice 2 (Utiliser une structure et des \xe9num\xe9rations)",id:"exercice-2-utiliser-une-structure-et-des-\xe9num\xe9rations",level:2},{value:"Pour aller plus loin (Optionnel)",id:"pour-aller-plus-loin-optionnel",level:2},{value:"Exercice 3 (Conversion en NPI)",id:"exercice-3-conversion-en-npi",level:2}];function a(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"exercice-1-evaluation-npi",children:"Exercice 1 (Evaluation NPI)"}),"\n",(0,r.jsxs)(n.p,{children:["La notation polonaise invers\xe9e (",(0,r.jsx)(n.strong,{children:"NPI"}),") est une notation math\xe9matique qui permet d'exprimer des expressions arithm\xe9tiques sans utiliser de parenth\xe8ses. Elle a \xe9t\xe9 invent\xe9e par le math\xe9maticien polonais ",(0,r.jsx)(n.strong,{children:"Jan Lukasiewicz"})," en 1924."]}),"\n",(0,r.jsxs)(n.p,{children:["La notation polonaise invers\xe9e est une notation ",(0,r.jsx)(n.strong,{children:"postfixe"}),", c'est-\xe0-dire que l'op\xe9rateur est plac\xe9 apr\xe8s les deux op\xe9randes. Par exemple, l'expression ",(0,r.jsx)(n.code,{children:"3 + 4"})," s'\xe9crit ",(0,r.jsx)(n.code,{children:"3 4 +"})," en ",(0,r.jsx)(n.strong,{children:"NPI"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Ce qui permet ensuite d'interpr\xe9ter l'expression de gauche \xe0 droite, en empilant les op\xe9randes sur une pile, et en d\xe9clenchant l'op\xe9ration lorsque l'on rencontre un op\xe9rateur."}),"\n",(0,r.jsxs)(n.p,{children:["Par exemple, l'expression ",(0,r.jsx)(n.code,{children:"3 4 +"})," s'interpr\xe8te comme suit :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On empile ",(0,r.jsx)(n.code,{children:"3"})]}),"\n",(0,r.jsxs)(n.li,{children:["On empile ",(0,r.jsx)(n.code,{children:"4"})]}),"\n",(0,r.jsxs)(n.li,{children:["On rencontre ",(0,r.jsx)(n.code,{children:"+"}),", on d\xe9pile ",(0,r.jsx)(n.code,{children:"4"})," et ",(0,r.jsx)(n.code,{children:"3"}),", on calcule ",(0,r.jsx)(n.code,{children:"3 + 4 = 7"}),", et on empile le r\xe9sultat ",(0,r.jsx)(n.code,{children:"7"})]}),"\n",(0,r.jsxs)(n.li,{children:["On a termin\xe9, le r\xe9sultat est ",(0,r.jsx)(n.code,{children:"7"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["On va donc pouvoir se servir d'une ",(0,r.jsx)(n.strong,{children:"pile"}),"(",(0,r.jsx)(n.code,{children:"std::stack"}),") pour \xe9valuer une expression en ",(0,r.jsx)(n.strong,{children:"NPI"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["Il faut cependant faire attention aux op\xe9rateurs ",(0,r.jsx)(n.strong,{children:"non commutatifs"}),", comme ",(0,r.jsx)(n.code,{children:"-"})," ou ",(0,r.jsx)(n.code,{children:"/"}),". ",(0,r.jsx)(n.code,{children:"3 4 /"})," ne s'interpr\xe8te pas comme ",(0,r.jsx)(n.code,{children:"4 / 3"}),", mais comme ",(0,r.jsx)(n.code,{children:"3 / 4"}),". Il faut donc \xe9crire ",(0,r.jsx)(n.code,{children:"3 4 /"})," pour \xe9valuer ",(0,r.jsx)(n.code,{children:"3 / 4"}),"."]}),(0,r.jsxs)(n.p,{children:["Dans l'algorithmique de l'\xe9valuation, le premier \xe9l\xe9ment d\xe9fil\xe9 de la pile sera l'",(0,r.jsx)(n.strong,{children:"op\xe9rande de droite"})," et le deuxi\xe8me \xe9l\xe9ment d\xe9fil\xe9 sera l'",(0,r.jsx)(n.strong,{children:"op\xe9rande de gauche"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Le but de cet exercice est d'\xe9crire un programme qui permet d'\xe9valuer une expression en ",(0,r.jsx)(n.strong,{children:"NPI"})," sous forme d'une cha\xeene de caract\xe8res (les diff\xe9rents \xe9l\xe9ments de l'expression sont s\xe9par\xe9s par des espaces), et retourner le r\xe9sultat de l'expression."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Par simplicit\xe9, on se limitera \xe0 des expressions contenant des ",(0,r.jsx)(n.strong,{children:"nombres"})," (flottants), et les op\xe9rateurs ",(0,r.jsx)(n.code,{children:"+"}),", ",(0,r.jsx)(n.code,{children:"-"}),", ",(0,r.jsx)(n.code,{children:"*"})," et ",(0,r.jsx)(n.code,{children:"/"})," (Dans une expression en NPI il y a plus de ",(0,r.jsx)(n.strong,{children:"parenth\xe8ses"})," (",(0,r.jsx)(n.code,{children:"("})," et ",(0,r.jsx)(n.code,{children:")"})," car l'ordre des op\xe9rations est d\xe9termin\xe9 par l'ordre des op\xe9rateurs dans l'expression)."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\xc9crire un programme qui permet de saisir une expression arithm\xe9tique en ",(0,r.jsx)(n.strong,{children:"notation polonaise invers\xe9e"})," (",(0,r.jsx)(n.strong,{children:"NPI"}),") en tant que chaine de caract\xe8re. On veut que les \xe9l\xe9ments de cette expression soient s\xe9par\xe9s par des espaces."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Vous pouvez utiliser ",(0,r.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/string/basic_string/getline",children:(0,r.jsx)(n.code,{children:"getline"})})," pour r\xe9cup\xe9rer d'un flux (comme ",(0,r.jsx)(n.code,{children:"std::cin"}),") une chaine de caract\xe8res comportant des espaces."]})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Je vous donne le code suivant qui permet \xe0 l'aide d'une particularit\xe9 des ",(0,r.jsx)(n.strong,{children:"streams"})," de s\xe9parer les \xe9l\xe9ments(mots) de la cha\xeene de caract\xe8res en utilisant les espaces comme s\xe9parateurs:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <vector>\n#include <string>\n#include <sstream>\n#include <iterator>\n\nstd::vector<std::string> split_string(std::string const& s)\n{\n    std::istringstream in(s); // transforme une cha\xeene en flux de caract\xe8res, cela simule un flux comme l'est std::cin\n    // l\u2019it\xe9rateur va lire chaque element de \"in\", comme un flux d'entr\xe9e, chaque \xe9l\xe9ment est s\xe9par\xe9 par un espace\n    return std::vector<std::string>(std::istream_iterator<std::string>(in), std::istream_iterator<std::string>()); \n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Utilisez ce code pour s\xe9parer les \xe9l\xe9ments de l'expression en NPI entr\xe9e par l'utilisateur et cr\xe9er un ",(0,r.jsx)(n.code,{children:"std::vector<std::string>"})," qui repr\xe9senterons les \xe9l\xe9ments (",(0,r.jsx)(n.code,{children:"tokens"}),") de l'expression en ",(0,r.jsx)(n.strong,{children:"NPI"}),"."]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\xc9crire une fonction qui prends une cha\xeene de caract\xe8res et permet de dire si celle-ci repr\xe9sente un nombre flottant ou non.\nOn utilisera le prototype suivant:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"bool is_floating(std::string const& s);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Pour y arriver il faut parcourir la cha\xeene de caract\xe8res et de tester si chaque caract\xe8re est un chiffre ou un point ",(0,r.jsx)(n.code,{children:"."})," (pour g\xe9rer les nombres flottants). Si c'est le cas, on continue, sinon on retourne ",(0,r.jsx)(n.code,{children:"false"}),".\nVous pouvez utiliser la fonction ",(0,r.jsx)(n.code,{children:"std::isdigit"})," de la biblioth\xe8que ",(0,r.jsx)(n.code,{children:"<cctype>"})," qui permet de tester si un caract\xe8re repr\xe9sente un chiffre."]})}),"\n",(0,r.jsxs)(n.p,{children:["Cela va \xeatre utile pour distinguer si un ",(0,r.jsx)(n.strong,{children:"token"})," (sous forme d'une cha\xeene de caract\xe8re) est un nombre(op\xe9randes) ou un op\xe9rateur dans l'expression en NPI."]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"solution C++17"}),(0,r.jsxs)(n.p,{children:["Il existe une fonction plus r\xe9cente qui permet de faire cela, la fonction ",(0,r.jsx)(n.code,{children:"std::from_chars"})," de la biblioth\xe8que ",(0,r.jsx)(n.code,{children:"<charconv>"}),". Elle permet de convertir une cha\xeene de caract\xe8res en nombre, et de retourner un pointeur sur le premier caract\xe8re non converti, ainsi qu'un code d'erreur si la conversion a \xe9chou\xe9."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <system_error>\n#include <charconv>\n#include <string>\nbool is_floating(std::string const& s)\n{\n    float value;\n    auto [p, ec] = std::from_chars(s.data(), s.data() + s.size(), value);\n    return ec == std::errc() && p == s.data() + s.size();\n}\n"})}),(0,r.jsxs)(n.p,{children:["Vous pouvez utiliser cette fonction si vous le souhaitez pour confirmer votre solution.\nMais il est important de faire soit m\xeame l'impl\xe9mentation de la fonction ",(0,r.jsx)(n.code,{children:"is_floating"})," pour apprendre \xe0 manipuler les cha\xeenes de caract\xe8res."]})]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\xc9crire une fonction qui prend en param\xe8tre un vecteur de cha\xeenes de caract\xe8res repr\xe9sentant les ",(0,r.jsx)(n.strong,{children:"tokens"})," de l'expression en ",(0,r.jsx)(n.strong,{children:"NPI"}),", et qui retourne le r\xe9sultat de l'expression."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"On utilisera le prototype suivant:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"float npi_evaluate(std::vector<std::string> const& tokens);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Utilisez une ",(0,r.jsx)(n.strong,{children:"pile"})," (",(0,r.jsx)(n.code,{children:"std::stack"}),") pour \xe9valuer l'expression comme dans l'exemple pr\xe9c\xe9dent."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Fonctionnement de l'algorithme",type:"info",children:[(0,r.jsxs)(n.p,{children:["L'algorithme va parcourir les \xe9l\xe9ments de l'expression en ",(0,r.jsx)(n.strong,{children:"NPI"})," (tokens) de gauche \xe0 droite."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lorsque l'on rencontre un nombre, on l'empile sur la pile des valeurs."}),"\n",(0,r.jsxs)(n.li,{children:["Lorsque l'on rencontre un ",(0,r.jsx)(n.strong,{children:"op\xe9rateur"}),", on d\xe9pile les deux derniers nombres, on effectue l'op\xe9ration, et on empile le r\xe9sultat."]}),"\n"]}),(0,r.jsx)(n.p,{children:"Voil\xe0 un bout de code pour vous aider dans cette \xe9tape pour effectuer une op\xe9ration:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"  // Je r\xe9cup\xe8re l'\xe9l\xe9ment en haut de la pile\n  float rightOperand { stack.top() };\n  // Je l'enl\xe8ve de la stack (la m\xe9thode top ne fait que lire l\u2019\xe9l\xe9ment en dessus de la pile)\n  stack.pop();\n  float leftOperand { stack.top() };\n  stack.pop();\n\n  // Il faut ensuite en fonction de l'op\xe9rateur calculer le r\xe9sultat pour le remettre dans la pile\n  float result { /* TODO */};\n  stack.push(result);\n"})}),(0,r.jsx)(n.p,{children:"l'algorithme se termine lorsque l'on a parcouru tous les \xe9l\xe9ments de l'expression, et que la pile ne contient plus qu'un seul \xe9l\xe9ment, qui est le r\xe9sultat de l'expression."})]}),"\n",(0,r.jsx)(n.admonition,{title:"Expression invalide",type:"warning",children:(0,r.jsxs)(n.p,{children:["Si il reste plus d'un \xe9l\xe9ment dans la pile \xe0 la fin de l'algorithme, cela signifie que l'expression en ",(0,r.jsx)(n.strong,{children:"NPI"})," est invalide.\nEn effet, si l'expression est correcte, il ne doit rester qu'un seul \xe9l\xe9ment dans la pile. Chaque op\xe9rateur binaire s'applique \xe0 deux nombres ainsi il doit normalement y avoir pour ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mi,{children:"n"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," nombres dans l'expression ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"n"}),(0,r.jsx)(n.mo,{children:"\u2212"}),(0,r.jsx)(n.mn,{children:"1"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"n-1"})]})})}),(0,r.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(n.span,{className:"mord",children:"1"})]})]})]})," op\xe9rateurs."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["En utilisant la fonction ",(0,r.jsx)(n.code,{children:"is_floating"})," de la question pr\xe9c\xe9dente, on peut d\xe9terminer si un \xe9l\xe9ment de l'expression est un nombre ou un op\xe9rateur.\nIl faut ensuite utiliser la fonction ",(0,r.jsx)(n.code,{children:"std::stof"})," de la biblioth\xe8que ",(0,r.jsx)(n.code,{children:"<string>"})," pour convertir la cha\xeene de caract\xe8res en nombre flottant si c'est le cas."]})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Enfin, utiliser les fonctions pr\xe9c\xe9dentes pour afficher le r\xe9sultat d'une expression en ",(0,r.jsx)(n.strong,{children:"NPI"})," entr\xe9e par l'utilisateur."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez tester avec les expressions suivantes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"3 + 4"})," =>  ",(0,r.jsx)(n.code,{children:"3 4 +"}),"  =  7"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"2 + 12 + 5"}),"  =>  ",(0,r.jsx)(n.code,{children:"2 12 + 5 +"}),"  =  19"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"3 + 4 / ( 11 + 5 )"}),"  =>  ",(0,r.jsx)(n.code,{children:"3 4 11 5 + / +"}),"  =  3.25"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"4 + 5 * 2"}),"  =>  ",(0,r.jsx)(n.code,{children:"4 5 2 * +"}),"  =  14"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["(une plus complexe avec l'op\xe9rateur ",(0,r.jsx)(n.strong,{children:"puissance"})," en plus pour l'exemple si vous voulez ajouter cette fonctionnalit\xe9 plus tard)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"3 + 4 ^ 2 / ( 1 - 5 ) ^ 6"}),"  =>  ",(0,r.jsx)(n.code,{children:"3 4 2 ^ 1 5 - 6 ^ / +"}),"  =  3.00391"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exercice-2-utiliser-une-structure-et-des-\xe9num\xe9rations",children:"Exercice 2 (Utiliser une structure et des \xe9num\xe9rations)"}),"\n",(0,r.jsxs)(n.p,{children:["Le but est de r\xe9\xe9crire le programme pr\xe9c\xe9dent en utilisant un ",(0,r.jsx)(n.strong,{children:"enum"})," pour repr\xe9senter les diff\xe9rents ",(0,r.jsx)(n.strong,{children:"op\xe9rateurs"})," ainsi qu'une structure pour repr\xe9senter un ",(0,r.jsx)(n.strong,{children:"token"})," (un \xe9l\xe9ment de l'expression) avec un champ pour le type (op\xe9rateur ou op\xe9rande) et des champs pour les valeurs (op\xe9rateur ou op\xe9rande)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"enum class Operator { ADD, SUB, MUL, DIV, OPEN_PAREN, CLOSE_PAREN};\nenum class TokenType { OPERATOR, OPERAND };\nstruct Token {\n  TokenType type;\n  float value;\n  Operator op;\n};\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Il existe des fonctionnalit\xe9s plus avanc\xe9s qui permettraient de faire \xe7a plus proprement, et de se passer de l'enum ",(0,r.jsx)(n.code,{children:"TokenType"})," dans la structure ",(0,r.jsx)(n.code,{children:"Token"})," (les ",(0,r.jsx)(n.strong,{children:"variantes"}),"). Vous pouvez vous renseigner ou me demander si vous voulez en savoir plus."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Cr\xe9er deux fonctions (surcharg\xe9es) qui permettent de construire la structure ",(0,r.jsx)(n.code,{children:"Token"})," \xe0 partir d'un nombre flottant ou de la valeur de l\u2019\xe9num\xe9ration ",(0,r.jsx)(n.code,{children:"Operator"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"Token make_token(float value)\nToken make_token(Operator op);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Cr\xe9er une fonction ",(0,r.jsx)(n.code,{children:"tokenize"}),' qui prends en param\xe8tre un vecteur de cha\xeene de caract\xe8res (repr\xe9sentant les "mots" d\'une phrase, nos anciens tokens) et retourne un vecteur de ',(0,r.jsx)(n.code,{children:"Token"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"std::vector<Token> tokenize(std::vector<std::string> const& words);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Cr\xe9er une nouvelle fonction ",(0,r.jsx)(n.code,{children:"npi_evaluate"})," qui utilise cette fois un vecteur de ",(0,r.jsx)(n.code,{children:"Token"})," au lieu de manipuler directement des cha\xeenes de caract\xe8res."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"float npi_evaluate(std::vector<Token> const& tokens);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"pour-aller-plus-loin-optionnel",children:"Pour aller plus loin (Optionnel)"}),"\n",(0,r.jsx)(n.h2,{id:"exercice-3-conversion-en-npi",children:"Exercice 3 (Conversion en NPI)"}),"\n",(0,r.jsxs)(n.p,{children:["Nous avons pr\xe9c\xe9demment vu comment \xe9valuer une expression en ",(0,r.jsx)(n.strong,{children:"NPI"}),". Mais comment faire pour convertir une expression en notation ",(0,r.jsx)(n.strong,{children:"infixe"}),' (c\'est-\xe0-dire de mani\xe8re "classique" avec des parenth\xe8ses) en une expression en NPI ?']}),"\n",(0,r.jsxs)(n.p,{children:["Pour cela, il existe un algorithme appel\xe9 ",(0,r.jsx)(n.strong,{children:"Shunting-yard algorithm"}),' (litt\xe9ralement "algorithme de la cour de triage").']}),"\n",(0,r.jsxs)(n.p,{children:["Son principe est d'utiliser \xe9galement une ",(0,r.jsx)(n.strong,{children:"pile"})," pour stocker les op\xe9rateurs rencontr\xe9s, et de les d\xe9piler lorsque l'on rencontre un op\xe9rateur de priorit\xe9 sup\xe9rieure."]}),"\n",(0,r.jsx)(n.p,{children:"Voil\xe0 comment il fonctionne :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"On parcourt l'expression de gauche \xe0 droite"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Si"})," on rencontre un nombre, on l'ajoute \xe0 la sortie"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Si"})," on rencontre un op\xe9rateur:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Si"})," on rencontre une parenth\xe8se ouvrante (",(0,r.jsx)(n.code,{children:"("}),"), on la met sur la pile des op\xe9rateurs"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Si"})," on rencontre une parenth\xe8se fermante (",(0,r.jsx)(n.code,{children:")"}),"), on d\xe9pile les op\xe9rateurs jusqu'\xe0 ce qu'on rencontre une parenth\xe8se ouvrante, et on ajoute les op\xe9rateurs d\xe9fil\xe9s \xe0 la sortie"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tant qu"}),"'il y a un op\xe9rateur sur la pile des op\xe9rateurs de priorit\xe9 sup\xe9rieure ou \xe9gale \xe0 l'op\xe9rateur courant, on d\xe9pile les op\xe9rateurs et on les ajoute \xe0 la sortie. ",(0,r.jsx)(n.strong,{children:"Puis"})," on ajoute l'op\xe9rateur courant \xe0 la pile des op\xe9rateurs."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enfin, on d\xe9pile les op\xe9rateurs restants et on les ajoute \xe0 la sortie."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Voici un exemple d'application de l'algorithme  avec l'expression ",(0,r.jsx)(n.code,{children:"3 + 4 ^ 2 / ( 1 - 5 ) ^ 6 "})," :"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Entr\xe9e"}),(0,r.jsx)(n.th,{children:"Sortie"}),(0,r.jsx)(n.th,{children:"Pile des op\xe9rateurs"}),(0,r.jsx)(n.th,{children:"commentaire"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"on ajoute 3 \xe0 la sortie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"+"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"+"}),(0,r.jsx)(n.td,{children:"on ajoute + \xe0 la pile des op\xe9rateurs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"3 4"}),(0,r.jsx)(n.td,{children:"+"}),(0,r.jsx)(n.td,{children:"on ajoute 4 \xe0 la sortie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"^"}),(0,r.jsx)(n.td,{children:"3 4"}),(0,r.jsx)(n.td,{children:"+ ^"}),(0,r.jsx)(n.td,{children:"on ajoute ^ \xe0 la pile des op\xe9rateurs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"3 4 2"}),(0,r.jsx)(n.td,{children:"+ ^"}),(0,r.jsx)(n.td,{children:"on ajoute 2 \xe0 la sortie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{children:"3 4 2 ^"}),(0,r.jsx)(n.td,{children:"+"}),(0,r.jsx)(n.td,{children:"on d\xe9pile ^ et on l'ajoute \xe0 la sortie car / a une priorit\xe9 inf\xe9rieure \xe0 ^"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"("}),(0,r.jsx)(n.td,{children:"3 4 2 ^"}),(0,r.jsx)(n.td,{children:"+ / ("}),(0,r.jsx)(n.td,{children:"on ajoute ( \xe0 la pile des op\xe9rateurs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"3 4 2 ^ 1"}),(0,r.jsx)(n.td,{children:"+ / ("}),(0,r.jsx)(n.td,{children:"on ajoute 1 \xe0 la sortie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"3 4 2 ^ 1"}),(0,r.jsx)(n.td,{children:"+ / ( -"}),(0,r.jsx)(n.td,{children:"on ajoute - \xe0 la pile des op\xe9rateurs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"3 4 2 ^ 1 5"}),(0,r.jsx)(n.td,{children:"+ / ( -"}),(0,r.jsx)(n.td,{children:"on ajoute 5 \xe0 la sortie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:")"}),(0,r.jsx)(n.td,{children:"3 4 2 ^ 1 5 -"}),(0,r.jsx)(n.td,{children:"+ /"}),(0,r.jsx)(n.td,{children:"on d\xe9pile les op\xe9rateurs jusqu'\xe0 ( et on les ajoute \xe0 la sortie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"^"}),(0,r.jsx)(n.td,{children:"3 4 2 ^ 1 5 -"}),(0,r.jsx)(n.td,{children:"+ / ^"}),(0,r.jsx)(n.td,{children:"on ajoute ^ \xe0 la pile des op\xe9rateurs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"3 4 2 ^ 1 5 - 6"}),(0,r.jsx)(n.td,{children:"+ / ^"}),(0,r.jsx)(n.td,{children:"on ajoute 6 \xe0 la sortie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"3 4 2 ^ 1 5 - 6 ^"}),(0,r.jsx)(n.td,{children:"+ /"}),(0,r.jsx)(n.td,{children:"on d\xe9pile le reste des op\xe9rateurs et on les ajoute \xe0 la sortie"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"R\xe9sultat final"})," : ",(0,r.jsx)(n.code,{children:"3 4 2 ^ 1 5 - 6 ^ / +"})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["La suite de l'exercice est pr\xe9sent\xe9 en utilisant les fonctions et structures de l'exercice pr\xe9c\xe9dent. Si vous n'avez pas fait l'exercice 2 vous pouvez tout aussi bien travailler avec un vecteur de cha\xeenes de caract\xe8res sans utiliser la structure ",(0,r.jsx)(n.code,{children:"Token"}),"."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\xc9crire une fonction ",(0,r.jsx)(n.code,{children:"operator_precedence"})," qui prends en param\xe8tre un ",(0,r.jsx)(n.code,{children:"Operator"})," et retour sous forme d'un ",(0,r.jsx)(n.strong,{children:"nombre entier positif"})," la priorit\xe9 de cet op\xe9rateur."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"size_t operator_precedence(Operator const op);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\xc9crire une fonction qui prend en param\xe8tre une cha\xeene de caract\xe8res repr\xe9sentant une expression en ",(0,r.jsx)(n.strong,{children:"notation infixe"}),", qui retourne un tableau de ",(0,r.jsx)(n.code,{children:"Token"})," repr\xe9sentant l'expression en ",(0,r.jsx)(n.strong,{children:"NPI"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"std::vector<Token> infix_to_npi_tokens(std::string const& expression);\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["On utilisera la m\xeame structure ",(0,r.jsx)(n.code,{children:"Token"})," que dans l'exercice pr\xe9c\xe9dent et les fonctions ",(0,r.jsx)(n.code,{children:"tokenize"})," et ",(0,r.jsx)(n.code,{children:"split_string"})," pour r\xe9cup\xe9rer dans un premier temps une repr\xe9sentation de l'expression en notation infixe sous forme d'une liste de ",(0,r.jsx)(n.code,{children:"Token"})," (dont les parenth\xe8ses ici)."]}),(0,r.jsxs)(n.p,{children:["C'est ici que parenth\xe8ses en tant qu'op\xe9rateur vont \xeatre utile mais elles ne devrons pas se retrouver dans la liste de ",(0,r.jsx)(n.code,{children:"Token"})," en NPI."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Maintenant que nous savons \xe9valuer une expression en NPI et que nous savons convertir une expression en notation infixe en NPI, nous pouvons r\xe9aliser une ",(0,r.jsx)(n.strong,{children:"calculatrice"}),"."]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Essayez de r\xe9aliser un programme qui permet de ",(0,r.jsx)(n.strong,{children:"lire"})," une expression en notation ",(0,r.jsx)(n.strong,{children:"infixe"}),", de la convertir en ",(0,r.jsx)(n.strong,{children:"NPI"}),", de l'",(0,r.jsx)(n.strong,{children:"\xe9valuer"})," et d'",(0,r.jsx)(n.strong,{children:"afficher"})," le r\xe9sultat."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var r=s(7294);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
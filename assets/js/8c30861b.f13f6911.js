"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[9874],{17567:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Lessons/S1/Struct","title":"Structure: organiser nos donn\xe9es","description":"En C++, on a parl\xe9 de structure de donn\xe9es avec les tableaux. Il est \xe9galement possible de cr\xe9er notre propre structure de donn\xe9es en regroupant plusieurs variables en un seul bloc appel\xe9 \\"structure\\" (ou \\"struct\\").","source":"@site/content/Lessons/S1/07_Struct.md","sourceDirName":"Lessons/S1","slug":"/Lessons/S1/Struct","permalink":"/Learn--cpp_programming/Lessons/S1/Struct","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"C++","permalink":"/Learn--cpp_programming/tags/c"}],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Structure: organiser nos donn\xe9es","tags":["C++"]},"sidebar":"Lessons","previous":{"title":"D\xe9boguer son code","permalink":"/Learn--cpp_programming/Lessons/S1/DebuggerAndErrors"},"next":{"title":"Compilation et Headers: S\xe9parer en plusieurs fichiers","permalink":"/Learn--cpp_programming/Lessons/S1/Headers"}}');var t=s(74848),i=s(28453);const l={title:"Structure: organiser nos donn\xe9es",tags:["C++"]},a=void 0,o={},c=[{value:"D\xe9claration",id:"d\xe9claration",level:2},{value:"Initialisation",id:"initialisation",level:2},{value:"Valeurs par d\xe9faut",id:"valeurs-par-d\xe9faut",level:3},{value:"Utilisation",id:"utilisation",level:2},{value:"Passage par r\xe9f\xe9rence",id:"passage-par-r\xe9f\xe9rence",level:2},{value:"Des m\xe9thodes",id:"des-m\xe9thodes",level:2},{value:"Prototype de m\xe9thodes",id:"prototype-de-m\xe9thodes",level:3},{value:"M\xe9thode constante",id:"m\xe9thode-constante",level:3},{value:"Conflit de noms",id:"conflit-de-noms",level:3},{value:"Aller plus loin: Forward Declaration",id:"aller-plus-loin-forward-declaration",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.strong,{children:"C++"}),", on a parl\xe9 de ",(0,t.jsx)(n.strong,{children:"structure de donn\xe9es"})," avec les ",(0,t.jsx)(n.strong,{children:"tableaux"}),". Il est \xe9galement possible de cr\xe9er notre propre structure de donn\xe9es en ",(0,t.jsx)(n.strong,{children:"regroupant"})," plusieurs variables en un seul ",(0,t.jsx)(n.strong,{children:"bloc"}),' appel\xe9 "',(0,t.jsx)(n.strong,{children:"structure"}),'" (ou "',(0,t.jsx)(n.strong,{children:"struct"}),'").']}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:['\xc0 partir de maintenant, j\u2019emploierai le terme "',(0,t.jsx)(n.strong,{children:"structure"}),'" ou "',(0,t.jsx)(n.strong,{children:"struct"}),'" pour d\xe9signer ces ',(0,t.jsx)(n.strong,{children:"structures"}),' et le terme de "',(0,t.jsx)(n.strong,{children:"structure de donn\xe9es"}),'" pour d\xe9signer des formes plus complexes de donn\xe9es de mani\xe8re g\xe9n\xe9rale comme le ',(0,t.jsx)(n.code,{children:"std::vector"})," par exemple."]})}),"\n",(0,t.jsx)(n.h2,{id:"d\xe9claration",children:"D\xe9claration"}),"\n",(0,t.jsxs)(n.p,{children:["C'est en utilisant le mot-cl\xe9 ",(0,t.jsx)(n.code,{children:"struct"})," que l'on va cr\xe9er une nouvelle ",(0,t.jsx)(n.strong,{children:"structure"}),".\nLa syntaxe de d\xe9claration est la suivante:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct nom\n{\n    // liste des membres\n    // type nom;\n    // type nom;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Cette structure est ensuite utilisable comme n'importe quel autre ",(0,t.jsx)(n.strong,{children:"type"})," de variable."]}),"\n",(0,t.jsx)(n.p,{children:"Un exemple de d\xe9claration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct People\n{\n    std::string name;\n    std::string lastName;\n    unsigned int age;\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"initialisation",children:"Initialisation"}),"\n",(0,t.jsxs)(n.p,{children:["Pour initialiser une ",(0,t.jsx)(n.strong,{children:"structure"}),", il y a plusieurs fa\xe7ons de faire similaire \xe0 la d\xe9claration des ",(0,t.jsx)(n.strong,{children:"variables"}),' "classiques".']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'// Initialisation avec des valeurs (elles doivent \xeatre ordonn\xe9es comme les membres de la structure)\nPeople people { "name", "lastName", 42 };\n\n// Syntaxe possible utilisant le signe = (comme en C)\nPeople people = { "name", "lastName", 42 };\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Lors de l'initialisation avec des valeurs, elles doivent \xeatre ordonn\xe9es dans l\u2019ordre dans lequel elles sont d\xe9finies dans la structure. On ne peut pas donner juste un entier comme premi\xe8re valeur pour l'age dans notre cas."})}),"\n",(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsxs)(n.p,{children:["Comme pour les variables, ne pas initialiser une ",(0,t.jsx)(n.strong,{children:"structure"})," est un ",(0,t.jsx)(n.strong,{children:"comportement ind\xe9termin\xe9"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"// Initialisation ind\xe9termin\xe9e\nPeople defaultPeople;\n"})}),(0,t.jsxs)(n.p,{children:["Dans ce cas, il faut s'",(0,t.jsx)(n.strong,{children:"assurer"})," de bien d\xe9finir les membres de la structure ensuite !"]})]}),"\n",(0,t.jsx)(n.h3,{id:"valeurs-par-d\xe9faut",children:"Valeurs par d\xe9faut"}),"\n",(0,t.jsxs)(n.p,{children:["Lors de l'initialisation, si il n'y a pas de valeur fournie entre ",(0,t.jsx)(n.strong,{children:"accolades"})," (",(0,t.jsx)("kbd",{}),") pour les membres de la structure, ils seront initialis\xe9s avec une valeur par d\xe9faut. Pour les ",(0,t.jsx)(n.strong,{children:"types primitifs"})," (comme ",(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"float"}),", ",(0,t.jsx)(n.code,{children:"double"}),", ",(0,t.jsx)(n.code,{children:"char"}),", ",(0,t.jsx)(n.code,{children:"bool"}),", etc.) la valeur par d\xe9faut est ",(0,t.jsx)(n.strong,{children:"z\xe9ro"}),". Pour les ",(0,t.jsx)(n.strong,{children:"objets"})," (comme ",(0,t.jsx)(n.code,{children:"std::string"}),", ",(0,t.jsx)(n.code,{children:"std::vector"}),", etc.) la valeur par d\xe9faut est ",(0,t.jsx)(n.strong,{children:"l'objet vide"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si une ",(0,t.jsx)(n.strong,{children:"valeur"})," est fournie en m\xeame temps que la d\xe9claration d'un membre, c'est cette valeur qui sera utilis\xe9e lors de l'initialisation par d\xe9faut de la structure."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",metastring:'title="un exemple"',children:'#include <iostream>\n#include <string>\n\nstruct Product\n{\n    std::string name {"unknown"};\n    float price {0.f};\n    unsigned int quantity {1};\n};\n\nvoid Display(Product const& product)\n{\n    std::cout << "Name: " << product.name << std::endl;\n    std::cout << "Price: " << product.price << std::endl;\n    std::cout << "Quantity: " << product.quantity << std::endl;\n}\n\nint main()\n{\n    Product unknownProduct {};\n\n    Display(unknownProduct);\n\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Name: unknown\nPrice: 0     \nQuantity: 1 \n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"R\xe9sum\xe9 de toutes les possibilit\xe9s d'initialisation",type:"info",children:[(0,t.jsxs)(n.p,{children:["Si une structure est initialis\xe9e ",(0,t.jsx)(n.strong,{children:"avec accolades"})," (ce qu'il fait faire tout le temps comme pour les variables) :"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"S'il existe une valeur d'initialisation explicite dans les accolades, cette valeur explicite est utilis\xe9e."}),"\n",(0,t.jsxs)(n.li,{children:["Si une valeur est manquante dans les accolades et qu'il existe une valeur de variable membre par d\xe9faut, cette valeur est utilis\xe9e. (c'est l'exemple de la structure ",(0,t.jsx)(n.code,{children:"Product"})," ci-dessus)"]}),"\n",(0,t.jsx)(n.li,{children:"Si une valeur est manquante dans les accolades et qu'il n'y a pas valeur par d\xe9faut dans la structure, l'initialisation par d\xe9faut pour le type de la variable est utilis\xe9e."}),"\n"]}),(0,t.jsxs)(n.p,{children:["Si une structure est initialis\xe9e ",(0,t.jsx)(n.strong,{children:"sans accolades"})," (ce qui est \xe0 \xe9viter) :"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"S'il existe une valeur d'initialisation explicite dans les accolades, cette valeur est utilis\xe9e."}),"\n",(0,t.jsxs)(n.li,{children:["Si une valeur est manquante dans les accolades, la variable membre reste non initialis\xe9e. (",(0,t.jsx)(n.strong,{children:"comportement ind\xe9termin\xe9"}),")"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.admonition,{title:"Bonne pratique",type:"tip",children:[(0,t.jsxs)(n.p,{children:["Une bonne pratique est de toujours initialiser les variables membres de la structure avec une valeur par d\xe9faut explicite ou \xe0 d\xe9faut d'utiliser des ",(0,t.jsx)(n.strong,{children:"accolades vide"})," pour \xe9viter le risque de variables non initialis\xe9es et de ",(0,t.jsx)(n.strong,{children:"comportement ind\xe9termin\xe9"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <string>\n\nstruct Product\n{\n    std::string name {};\n    float price {};\n    unsigned int quantity {1};\n};\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"utilisation",children:"Utilisation"}),"\n",(0,t.jsxs)(n.p,{children:["Pour manipuler un ",(0,t.jsx)(n.strong,{children:"membre"}),", c\u2019est-\xe0-dire une ",(0,t.jsx)(n.strong,{children:"variable"})," appartenant \xe0 la structure, il suffit d\u2019utiliser la syntaxe ",(0,t.jsx)(n.code,{children:"structure.membre"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <string>\n\nstruct People\n{\n    std::string name;\n    std::string lastName;\n    unsigned int age;\n};\n\nint main()\n{\n    People people { "name", "lastName", 42 };\n\n    // Modification de l\'age\n    people.age = 19;\n\n    // Lecture des membres\n    std::cout << "My name is " << people.name << " " << people.lastName << " and i\'m " << people.age << " years old." << std::endl;\n\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"passage-par-r\xe9f\xe9rence",children:"Passage par r\xe9f\xe9rence"}),"\n",(0,t.jsxs)(n.p,{children:["Une ",(0,t.jsx)(n.strong,{children:"structure"})," \xe9tant un agr\xe9gat de donn\xe9es (plus ou moins gros) il est int\xe9ressant d'utiliser des ",(0,t.jsx)(n.strong,{children:"r\xe9f\xe9rences"})," pour passer en ",(0,t.jsx)(n.strong,{children:"param\xe8tres"})," nos ",(0,t.jsx)(n.strong,{children:"structures"})," afin d'\xe9viter des ",(0,t.jsx)(n.strong,{children:"copies"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <string>\n#include <iostream>\n\nstruct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n};\n\nfloat GetTotalPrice(Product const& product)\n{\n    return product.price * product.quantity;\n}\n\nint main()\n{\n    Product product { "Tomatos", 0.32, 12 };\n\n    // Lecture des membres\n    std::cout << "The total price for " << product.name << " is " << GetTotalPrice(product) << " \u20ac." << std::endl;\n\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"des-m\xe9thodes",children:"Des m\xe9thodes"}),"\n",(0,t.jsxs)(n.p,{children:["Maintenant que nous avons nos propres ",(0,t.jsx)(n.strong,{children:"structures"})," cela va devenir int\xe9ressant d'utiliser des ",(0,t.jsx)(n.strong,{children:"m\xe9thodes"}),".\nEn effet, dans mon exemple pr\xe9c\xe9dent j'ai cr\xe9\xe9 des fonctions ",(0,t.jsx)(n.code,{children:"GetTotalPrice"})," et ",(0,t.jsx)(n.code,{children:"Display"}),". Mais j'aurais bien aim\xe9 pouvoir faire : ",(0,t.jsx)(n.code,{children:"product.TotalPrice()"}),". Autrement dit, cr\xe9er et utiliser une m\xe9thode ",(0,t.jsx)(n.code,{children:"TotalPrice()"})," pour ma structure ",(0,t.jsx)(n.code,{children:"Product"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Il suffit simplement de d\xe9clarer notre fonction au sein m\xeame des ",(0,t.jsx)(n.strong,{children:"accolades"})," de notre structure comme cela:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    float TotalPrice()\n    {\n        return price * quantity;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Vous pouvez remarquer qu'ici je peux acc\xe9der aux membres de ma struct sans avoir \xe0 faire ",(0,t.jsx)(n.code,{children:"struct.membre"}),". En effet, la ",(0,t.jsx)(n.strong,{children:"m\xe9thode"})," a ",(0,t.jsx)(n.strong,{children:"connaissance"})," de la ",(0,t.jsx)(n.strong,{children:"structure"})," elle-m\xeame et peut ",(0,t.jsx)(n.strong,{children:"manipuler"})," ses ",(0,t.jsx)(n.strong,{children:"membres"})," directement."]})}),"\n",(0,t.jsx)(n.h3,{id:"prototype-de-m\xe9thodes",children:"Prototype de m\xe9thodes"}),"\n",(0,t.jsxs)(n.p,{children:["Comme pour les fonctions, il est possible de d\xe9clarer seulement le ",(0,t.jsx)(n.strong,{children:"prototype"})," de la m\xe9thode et d'impl\xe9menter le ",(0,t.jsx)(n.strong,{children:"corps"})," de la m\xe9thode plus tard. Il y a juste un petit d\xe9tail en plus, il faut indiquer \xe0 l'aide du ",(0,t.jsx)(n.strong,{children:"nom"})," de la structure et des caract\xe8res ",(0,t.jsx)("kbd",{children:"::"})," ,l'",(0,t.jsx)(n.strong,{children:"appartenance"})," de la m\xe9thode \xe0 la structure (comme avec ",(0,t.jsx)(n.code,{children:"std::"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    float TotalPrice();\n};\n\nfloat Product::TotalPrice()\n{\n    return price * quantity;\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"C'est une notion qui va \xeatre utile quand on verra la s\xe9paration du code en plusieurs fichiers."})}),"\n",(0,t.jsx)(n.h3,{id:"m\xe9thode-constante",children:"M\xe9thode constante"}),"\n",(0,t.jsxs)(n.p,{children:["Ici, il est aussi possible de pr\xe9ciser qu'une m\xe9thode ne modifie pas la structure, on parle de ",(0,t.jsx)(n.strong,{children:"m\xe9thode constante"}),". Il faut ajouter le mot-cl\xe9 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"const"})})," \xe0 la fin de la d\xe9claration de la m\xe9thode, avant le point virgule ",(0,t.jsx)("kbd",{children:";"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    float TotalPrice() const;\n};\n\nfloat Product::TotalPrice() const\n{\n    return price * quantity;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["C'est important car si on ne le fait pas on ne pourra pas appeler une ",(0,t.jsx)(n.strong,{children:"m\xe9thode non constante"})," d'une ",(0,t.jsx)(n.strong,{children:"variable constante"})," car celle-ci est susceptible de modifier la structure alors que c'est interdit par la variable constante."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\n#include <string>\n\nstruct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    float TotalPrice();\n};\n\nfloat Product::TotalPrice()\n{\n    return price * quantity;\n}\n\nint main()\n{\n    Product const tomatos { \"Tomatos\", 0.32, 12 };\n\n    // erreur ici: la variable tomatos est constante mais la m\xe9thode 'TotalPrice' ne l'est pas\n    // highlight-next-line\n    float tomatosPrice { tomatos.TotalPrice() };\n\n    return 0;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Il faut donc indiquer que la m\xe9thode est constante:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"// le prototype\nfloat GetTotalPrice() const;\n\n// et la fonction\nfloat Product::GetTotalPrice() const\n{\n    return price * quantity;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"conflit-de-noms",children:"Conflit de noms"}),"\n",(0,t.jsxs)(n.p,{children:["Comme pour les fonctions, il est possible de passer des ",(0,t.jsx)(n.strong,{children:"param\xe8tres"})," \xe0 notre m\xe9thode."]}),"\n",(0,t.jsxs)(n.p,{children:["Mais si le param\xe8tre a le m\xeame nom qu'un des ",(0,t.jsx)(n.strong,{children:"membres"})," de la structure il y a un conflit de noms."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    void ChangePrice(float price)\n    {\n        price = price;\n    }\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ici la variable ",(0,t.jsx)(n.code,{children:"price"})," manipul\xe9e dans la fonction n'est plus le ",(0,t.jsx)(n.strong,{children:"membre"})," mais le ",(0,t.jsx)(n.strong,{children:"param\xe8tre"}),", les ",(0,t.jsx)(n.strong,{children:"param\xe8tres"})," ont la ",(0,t.jsx)(n.strong,{children:"priorit\xe9"})," sur les ",(0,t.jsx)(n.strong,{children:"membres"})," de la structure."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["Sur certains compilateurs bien configur\xe9s on peut avoir des ",(0,t.jsx)(n.strong,{children:"warnings"})," :"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Warning g\xe9n\xe9r\xe9 par clang"',children:"Explicitly assigning value of variable of type 'float' to itself; did you mean to assign to member 'price'?\n"})}),(0,t.jsxs)(n.p,{children:["Mais ce n'est pas toujours le cas. Avec un ",(0,t.jsx)(n.strong,{children:"param\xe8tre constant"})," on aurait g\xe9n\xe9r\xe9 des erreurs de compilation et pas seulement un warning et c'est donc ",(0,t.jsx)(n.strong,{children:"pr\xe9f\xe9rable"})," pour mieux se rendre compte des erreurs."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"- Cannot assign to variable 'price' with const-qualified type 'const float'\n- assignment of read-only parameter 'price'\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Pour \xe9viter la confusion, il est pr\xe9f\xe9rable d'utiliser le mot cl\xe9 ",(0,t.jsx)(n.code,{children:"this"})," suivi des caract\xe8res ",(0,t.jsx)("kbd",{children:"->"})," devant le nom d'un membre de la structure comme cela:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    void ChangePrice(float const price)\n    {\n        this->price = price;\n    }\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ici, plus de probl\xe8me, ",(0,t.jsx)(n.code,{children:"this->price"})," fait r\xe9f\xe9rence \xe0 notre ",(0,t.jsx)(n.strong,{children:"membre"})," et ",(0,t.jsx)(n.code,{children:"price"})," est le ",(0,t.jsx)(n.strong,{children:"param\xe8tre constant"})," de la m\xe9thode."]}),"\n",(0,t.jsxs)(n.p,{children:["Une ",(0,t.jsx)(n.strong,{children:"autre solution"})," pr\xe9f\xe9rable et ",(0,t.jsx)(n.strong,{children:"recommand\xe9e"})," est de ",(0,t.jsx)(n.strong,{children:"renommer"})," le nom du ",(0,t.jsx)(n.strong,{children:"param\xe8tre"})," pour \xe9viter cette confusion:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    void ChangePrice(float const newPrice)\n    {\n        price = newPrice;\n        // this->price = newPrice;\n    }\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Vous \xeates libre de laisser ou non le ",(0,t.jsx)(n.code,{children:"this->"})," pour indiquer plus explicitement l'utilisation du ",(0,t.jsx)(n.strong,{children:"membre"})," de la structure surtout si c'est ",(0,t.jsx)(n.strong,{children:"plus compr\xe9hensible"})," pour vous."]}),"\n",(0,t.jsxs)(n.p,{children:["Je ne rentre pas dans le d\xe9tail ici. Je reviendrai sur le fonctionnement du mot-cl\xe9 ",(0,t.jsx)(n.code,{children:"this"})," dans un autre chapitre. Retenez simplement ici que cela permet d'indiquer explicitement que l'on souhaite ",(0,t.jsx)(n.strong,{children:"manipuler la structure"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"aller-plus-loin-forward-declaration",children:"Aller plus loin: Forward Declaration"}),"\n",(0,t.jsxs)(n.p,{children:["Parfois deux structures ont besoin l'une de l'autre, on veut utiliser une struct ",(0,t.jsx)(n.strong,{children:"A"})," dans une struct ",(0,t.jsx)(n.strong,{children:"B"})," et inversement."]}),"\n",(0,t.jsxs)(n.p,{children:["Probl\xe8me, l'une est d\xe9finie avant l'autre et donc dans la premi\xe8re structure ",(0,t.jsx)(n.strong,{children:"A"})," il y a une erreur, ",(0,t.jsx)(n.strong,{children:"B"})," est encore inconnue."]}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    A <|-- B\n    B <|-- A\n\n    class A {\n        <<struct>>\n        B b // B n'est pas encore d\xe9finie ici\n    }\n    class B {\n        <<struct>>\n        A a\n    }"}),"\n",(0,t.jsxs)(n.p,{children:["Pour r\xe9soudre ce probl\xe8me on va faire une ",(0,t.jsx)(n.strong,{children:"d\xe9claration anticip\xe9e"})," (",(0,t.jsx)(n.strong,{children:"Forward Declaration"})," en anglais)."]}),"\n",(0,t.jsxs)(n.p,{children:["Un peu \xe0 la mani\xe8re d'un ",(0,t.jsx)(n.strong,{children:"prototype"})," on va indiquer que la structure existe, sans en d\xe9finir pr\xe9cis\xe9ment encore son contenu."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <vector>\n// D\xe9claration anticip\xe9e de la structure Book\n// highlight-next-line\nstruct Book;\n\nstruct Author {\n    std::string name;\n    // Je peux donc l'utiliser ici\n    // highlight-next-line\n    std::vector<Book> books;\n\n    void Display();\n    void AddBook(std::string title);\n};\n\nstruct Book\n{\n    std::string title;\n    Author& author;\n\n    void Display();\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Cela ne permet pas de manipuler la structure vu que l'on ne sait pas encore ce qu'elle contient. De ce fait, les ",(0,t.jsx)(n.strong,{children:"m\xe9thodes"})," de la structure ",(0,t.jsx)(n.code,{children:"Author"})," qui utilisent la structure ",(0,t.jsx)(n.code,{children:"Book"})," doivent se trouver ",(0,t.jsx)(n.strong,{children:"apr\xe8s"})," la d\xe9claration compl\xe8te de la structure ",(0,t.jsx)(n.code,{children:"Book"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",metastring:'title="Un exemple plus complet"',children:'#include <iostream>\n#include <vector>\n#include <string>\n\nstruct Book;\n\nstruct Author {\n    std::string name;\n    std::vector<Book> books;\n\n    void Display();\n    void AddBook(std::string title);\n};\n\nstruct Book\n{\n    std::string title;\n    Author& author;\n\n    void Display();\n};\n\nvoid Author::Display()\n{\n    std::cout << "Author: " << name << std::endl;\n    std::cout << "Books: " << std::endl;\n    for (Book const& book : books)\n    {\n        std::cout << "\\t" << book.title << std::endl;\n    }\n}\n\nvoid Author::AddBook(std::string title)\n{\n    // le "*this" permet de r\xe9cup\xe9rer une r\xe9f\xe9rence vers l\'objet courant\n    // Ce m\xe9canisme sera d\xe9taill\xe9 dans un prochain chapitre\n    Book book {title, *this};\n    // Ici une copie de l\'objet book est faite dans le vecteur\n    books.push_back(book);\n    // La variable book va \xeatre d\xe9truite \xe0 la fin de la fonction\n    // mais le vecteur books contient une copie de l\'objet book donc pas de probl\xe8me\n}\n\nvoid Book::Display()\n{\n    std::cout << "Title: " << title << std::endl;\n    std::cout << "Author: " << author.name << std::endl;\n}\n\nint main()\n{\n    Author author {"Jules Verne", {}};\n    author.AddBook("Vingt mille lieues sous les mers");\n\n    author.Display();\n\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Une ",(0,t.jsx)(n.strong,{children:"structure"})," est un ",(0,t.jsx)(n.strong,{children:"agr\xe9gat de donn\xe9es"}),", on la d\xe9clare avec le mot-cl\xe9 ",(0,t.jsx)(n.code,{children:"struct"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Les ",(0,t.jsx)(n.strong,{children:"membres"})," de la structure sont les variables qui la composent. On y acc\xe8de avec un point ",(0,t.jsx)("kbd",{children:"."})," apr\xe8s le nom de la variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Une structure peut avoir des ",(0,t.jsx)(n.strong,{children:"m\xe9thodes"})," qui se d\xe9clarent comme pour les fonctions mais au sein m\xeame des accolades de la structure."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Le ",(0,t.jsx)(n.strong,{children:"corps"})," d'une ",(0,t.jsx)(n.strong,{children:"m\xe9thode"})," peut \xeatre ",(0,t.jsx)(n.strong,{children:"d\xe9clar\xe9 plus tard"})," (du moment que le ",(0,t.jsx)(n.strong,{children:"prototype"})," de la m\xe9thode est dans la structure). Il faut utiliser le ",(0,t.jsx)(n.strong,{children:"nom"})," de la structure suivi des ",(0,t.jsxs)(n.strong,{children:["caract\xe8res ",(0,t.jsx)("kbd",{children:"::"})]})," pour indiquer l'",(0,t.jsx)(n.strong,{children:"appartenance"})," de la m\xe9thode \xe0 la structure si elle est d\xe9clar\xe9e en ",(0,t.jsx)(n.strong,{children:"dehors"})," des ",(0,t.jsx)(n.strong,{children:"accolades"})," d\xe9limitant la structure."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Une ",(0,t.jsx)(n.strong,{children:"m\xe9thode"})," peut \xeatre ",(0,t.jsx)(n.strong,{children:"constante"})," pour indiquer qu'elle ne va pas modifier la structure. Il faut ajouter le mot-cl\xe9 ",(0,t.jsx)(n.code,{children:"const"})," ",(0,t.jsx)(n.strong,{children:"apr\xe8s les param\xe8tres"})," de la fonction et avant le point virgule ",(0,t.jsx)("kbd",{children:";"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On peut utiliser le mot-cl\xe9 ",(0,t.jsx)(n.code,{children:"this"})," pour ",(0,t.jsx)(n.strong,{children:"expliciter"})," que l'on souhaite manipuler la structure et ",(0,t.jsx)(n.strong,{children:"\xe9viter des conflits"})," de nommages entre les ",(0,t.jsx)(n.strong,{children:"membres"})," et les ",(0,t.jsx)(n.strong,{children:"param\xe8tres"})," d'une m\xe9thode."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[3490],{607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(5893),r=t(1151);const i={title:"TD8 - Graphes"},o=void 0,a={id:"TDs/S2/graphs",title:"TD8 - Graphes",description:"Pour ce TD, nous allons travailler sur les graphes. Les graphes peuvent \xeatre repr\xe9sent\xe9s de diff\xe9rentes mani\xe8res. Nous allons travailler principalement avec une repr\xe9sentation sous forme de liste d'adjacence et d'un graphe pond\xe9r\xe9 et orient\xe9 plus int\xe9ressant pour les algorithmes de plus court chemin.",source:"@site/content/TDs/S2/08_graphs.md",sourceDirName:"TDs/S2",slug:"/TDs/S2/graphs",permalink:"/Learn--cpp_programming/TDs/S2/graphs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"TD8 - Graphes"},sidebar:"TDs",previous:{title:"TD7 - Encodage et compression",permalink:"/Learn--cpp_programming/TDs/S2/encodingAndCompression"}},d={},l=[{value:"Exercice 1 (construire un graphe)",id:"exercice-1-construire-un-graphe",level:2},{value:"Exercice 2 (traverser un graphe)",id:"exercice-2-traverser-un-graphe",level:2},{value:"Dijkstra: algorithme de plus court chemin",id:"dijkstra-algorithme-de-plus-court-chemin",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Pour ce TD, nous allons travailler sur les graphes. Les graphes peuvent \xeatre repr\xe9sent\xe9s de diff\xe9rentes mani\xe8res. Nous allons travailler principalement avec une repr\xe9sentation sous forme de ",(0,s.jsx)(n.strong,{children:"liste d'adjacence"})," et d'un graphe pond\xe9r\xe9 et orient\xe9 plus int\xe9ressant pour les algorithmes de plus court chemin."]}),"\n",(0,s.jsx)(n.p,{children:"Je vous donne les structures suivantes pour repr\xe9senter un graphe ainsi que les m\xe9thodes et fonctions que l'on va impl\xe9menter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#include <vector>\n#include <unordered_map>\n#include <utility>\n\nnamespace Graph {\n    struct WeightedGraphEdge {\n        int to {};\n        float weight {1.0f};\n\n        // default ici permet de d\xe9finit les op\xe9rateurs de comparaison membres \xe0 membres automatiquement\n        // Cela ne fonction qu'en C++20, si vous n'avez pas acc\xe8s \xe0 cette version je vous donne les impl\xe9mentations des op\xe9rateurs plus bas\n        bool operator==(WeightedGraphEdge const& other) const = default;\n        bool operator!=(WeightedGraphEdge const& other) const = default;\n    };\n\n    struct WeightedGraph {\n        // L'utilisation d'un tableau associatif permet d'avoir une complexit\xe9 en O(1) pour l'ajout et la recherche d'un sommet. Cela permet de stocker les sommets dans un ordre quelconque (et pas avoir la contrainte d'avoir des identifiants (entiers) de sommets cons\xe9cutifs lors de l'ajout de sommets). Cela permet \xe9galement de pouvoir utiliser des identifiants de sommets de n'importe quel type (string, char, int, ...) et pas seulement des entiers\n        std::unordered_map<int, std::vector<WeightedGraphEdge>> adjacency_list {};\n\n        void add_vertex(int const id);\n\n        void add_directed_edge(int const from, int const to, float const weight = 1.0f);\n        void add_undirected_edge(int const from, int const to, float const weight = 1.0f);\n        \n        // M\xeame fonctionnement que pour WeightedGraphEdge\n        bool operator==(WeightedGraph const& other) const = default;\n        bool operator!=(WeightedGraph const& other) const = default;\n\n        void print_DFS(int const start) const;\n        void print_BFS(int const start) const;\n    };\n\n    WeightedGraph build_from_adjacency_matrix(std::vector<std::vector<float>> const& adjacency_matrix);\n\n} // namespace\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Op\xe9rateurs de comparaison",type:"info",children:[(0,s.jsxs)(n.p,{children:["Pour se simplifier la vie ici car c'est des structures simples et que l'on souhaite une \xe9galit\xe9 membres \xe0 membres, on peut utiliser le ",(0,s.jsx)(n.strong,{children:"C++20"})," et le mot cl\xe9 ",(0,s.jsx)(n.code,{children:"d\xe9fault"})," ici."]}),(0,s.jsxs)(n.p,{children:["Il faut indiquer la version dans le fichier ",(0,s.jsx)(n.code,{children:"CMakeLists.txt"})," pour utiliser le C++20 en ajoutant la ligne suivante:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"set(CMAKE_CXX_STANDARD 20)\n"})}),(0,s.jsx)(n.p,{children:"ou alors pour une target sp\xe9cifique:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"target_compile_features(${TARGET_NAME} PUBLIC cxx_std_20)\n"})}),(0,s.jsxs)(n.p,{children:["Il faut ajouter \xe0 droite de la d\xe9finition du prototype (dans le header directement) ",(0,s.jsx)(n.code,{children:"= default;"})," comme je vous le fourni. Un exemple ici: ",(0,s.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/language/default_comparisons#:~:text=Defaulted%20equality%20comparison",children:"Defaulted equality comparison"}),"."]}),(0,s.jsxs)(n.p,{children:["Si vous n'avez pas acc\xe8s \xe0 cette version, je vous donne les impl\xe9mentations des op\xe9rateurs de comparaison \xe0 ajouter dans le fichier source (",(0,s.jsx)(n.code,{children:".cpp"}),"):"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"namespace Graph {\n    bool WeightedGraphEdge::operator==(WeightedGraphEdge const& other) const {\n        return to == other.to && weight == other.weight;\n    }\n    bool WeightedGraphEdge:: operator!=(WeightedGraphEdge const& other) const {\n        return !(*this == other);\n    }\n\n    bool WeightedGraph::operator==(WeightedGraph const& other) const {\n        return adjacency_list == other.adjacency_list;\n    }\n\n    bool WeightedGraph::operator!=(WeightedGraph const& other) const {\n        return !(*this == other);\n    }\n} // namespace\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"exercice-1-construire-un-graphe",children:"Exercice 1 (construire un graphe)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Impl\xe9menter la m\xe9thode ",(0,s.jsx)(n.code,{children:"add_vertex"})," qui prend en param\xe8tre un identifiant de sommet et ajoute un sommet au graphe si il n'existe pas d\xe9j\xe0. Il faut donc tester si le sommet existe d\xe9j\xe0 avant de cr\xe9er la liste des edges. (vous pouvez utiliser la m\xe9thode ",(0,s.jsx)(n.a,{href:"https://cplusplus.com/reference/unordered_map/unordered_map/find",children:(0,s.jsx)(n.code,{children:"find"})})," de ",(0,s.jsx)(n.code,{children:"std::unordered_map"})," pour cela)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Impl\xe9menter la m\xe9thode ",(0,s.jsx)(n.code,{children:"add_directed_edge"})," qui ajoute une arr\xeate dans le graphe en prenant en param\xe8tre les IDs des deux noeuds \xe0 connecter (source vers destination) et le poids de l'arr\xeate."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Si le noeuds de destination n'existe pas (comme cl\xe9 du tableau associatif ",(0,s.jsx)(n.code,{children:"adjacency_list"}),") il est possible et recommand\xe9 de l'ajouter au passage (en utilisant add_vertex). Ainsi, tout les sommets du graphe sont ajout\xe9s automatiquement lors de l'ajout d'une arr\xeate."]})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Impl\xe9menter la m\xe9thode ",(0,s.jsx)(n.code,{children:"add_undirected_edge"})," en utilisant ",(0,s.jsx)(n.code,{children:"add_directed_edge"})," pour ajouter deux edges dans les deux sens pour connecter deux noeuds pass\xe9s en param\xe8tre."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["De m\xeame, ajouter les op\xe9rateurs de comparaison pour la structure ",(0,s.jsx)(n.code,{children:"WeightedGraph"})," (cela va permettre de v\xe9rifier si la fonction de la question suivante fonctionne bien en comparants les listes d'adjacences de deux graphes)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Impl\xe9menter la fonction ",(0,s.jsx)(n.code,{children:"adjacency_list_from_adjacency_matrix"})," qui prend en param\xe8tre une ",(0,s.jsx)(n.strong,{children:"matrice d'adjacence"})," (sous la forme d'un vecteur de vecteurs d'entiers) et qui retourne un graphe."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\xc9crire dans la fonction ",(0,s.jsx)(n.code,{children:"main"})," un exemple d'utilisation de la fonction ",(0,s.jsx)(n.code,{children:"adjacency_list_from_adjacency_matrix"})," pour cr\xe9er un graphe \xe0 partir d'une matrice d'adjacence et cr\xe9er un deuxi\xe8me graphe en utilisant les m\xe9thodes ",(0,s.jsx)(n.code,{children:"add_vertex"})," et ",(0,s.jsx)(n.code,{children:"add_undirected_edge"})," pour ajouter les m\xeames sommets et les m\xeames arr\xeates que dans le premier graphe. Ensuite, comparer les deux graphes pour v\xe9rifier qu'ils sont \xe9gaux."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exercice-2-traverser-un-graphe",children:"Exercice 2 (traverser un graphe)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Impl\xe9menter la m\xe9thode ",(0,s.jsx)(n.code,{children:"print_DFS"})," qui prend en param\xe8tre l'id du sommet de d\xe9part et qui affiche les sommets du graphe en utilisant un parcours en profondeur (DFS) \xe0 partir du sommet de d\xe9part (",(0,s.jsx)(n.code,{children:"depth-first search"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Impl\xe9menter la m\xe9thode ",(0,s.jsx)(n.code,{children:"print_BFS"})," qui utilise cette fois-ci un parcours en largeur (BFS) \xe0 partir du sommet de d\xe9part (",(0,s.jsx)(n.code,{children:"breadth-first search"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Bonus : Impl\xe9menter le parcours en profondeur (BFS) \xe0 prenant en param\xe8tre une fonction de ",(0,s.jsx)(n.strong,{children:"callback"})," pour chaque sommet visit\xe9. L'id\xe9e est de ne pas contraindre l'utilisateur \xe0 afficher les sommets mais de lui donner la possibilit\xe9 de faire ce qu'il veut avec les sommets visit\xe9s.\nVoil\xe0 la signature de la m\xe9thode \xe0 impl\xe9menter:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"void DFS(int const start, std::function<void(int const)> const& callback) const;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"std::function"})," (",(0,s.jsx)(n.code,{children:"#include <functional>"}),') est un objet qui peut "stocker" n\'importe quelle fonction qui a la m\xeame signature que celle donn\xe9e en param\xe8tre (entre  ',(0,s.jsx)("kbd",{children:" < "})," et ",(0,s.jsx)("kbd",{children:" > "}),"). Cela permet de passer une fonction en param\xe8tre d'une autre fonction. C'est tr\xe8s utile pour faire des fonctions g\xe9n\xe9riques qui peuvent \xeatre utilis\xe9es de diff\xe9rentes mani\xe8res. On peut passer en param\xe8tre une fonction d\xe9finit dans le code ou une fonction ",(0,s.jsx)(n.strong,{children:"lambda"})," (une fonction anonyme) qui est d\xe9finie directement dans le code. C'est comme cela que fonctionne les fonctions ",(0,s.jsx)(n.code,{children:"std::sort"}),", ",(0,s.jsx)(n.code,{children:"std::find_if"}),", ",(0,s.jsx)(n.code,{children:"std::accumulate"}),", ... de la STL."]}),"\n",(0,s.jsxs)(n.p,{children:["Voil\xe0 \xe0 quoi ressemble l'appel de cette m\xe9thode avec une fonction ",(0,s.jsx)(n.strong,{children:"lambda"})," qui affiche les sommets visit\xe9s (pour reproduire le comportement de la m\xe9thode ",(0,s.jsx)(n.code,{children:"print_DFS"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'std::cout << "DFS from node 0:" << std::endl << "Visited nodes: ";\ngraph.DFS(0, [](int const node_id) { std::cout << node_id << " "; });\nstd::cout << std::endl;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"dijkstra-algorithme-de-plus-court-chemin",children:"Dijkstra: algorithme de plus court chemin"}),"\n",(0,s.jsx)(n.p,{children:"L'algorithme de Dijkstra permet de trouver le plus court chemin entre un sommet de d\xe9part et un sommet d'arriv\xe9e dans un graphe pond\xe9r\xe9."}),"\n",(0,s.jsxs)(n.p,{children:["Je vous invite \xe0 relire l'explication du cours ",(0,s.jsx)(n.a,{href:"/Lessons/S2/graphs#dijkstra",children:"ici"}),";"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Donnons nous le graphe suivant:"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"    graph LR\n    A --1--\x3e B\n    A --5--\x3e C\n    B --4--\x3e C\n    D --2--\x3e C\n    B --5--\x3e D\n    A --2--\x3e D\n    C --3--\x3e E\n    C --4--\x3e F\n    D --5--\x3e E\n    E --3--\x3e F"}),"\n",(0,s.jsxs)(n.p,{children:["\xc9crivez les diff\xe9rentes \xe9tapes de l'algorithme de Dijkstra selon le m\xeame mod\xe8le que ",(0,s.jsx)(n.a,{href:"/Lessons/S2/graphs#illustration-de-lalgorithme-de-dijkstra",children:"l'illustration du cours"})," pour trouver le plus court chemin entre le sommet ",(0,s.jsx)(n.code,{children:"A"})," et le sommet ",(0,s.jsx)(n.code,{children:"E"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"(BONUS) En se donnant un bout de code pour d\xe9marrer l'impl\xe9mentation de l'algorithme de Dijkstra, compl\xe9tez le code pour impl\xe9menter l'algorithme de Dijkstra."}),"\n",(0,s.jsxs)(n.li,{children:["(BONUS) Testez votre impl\xe9mentation avec le graphe donn\xe9 en exemple pour trouver le plus court chemin entre le sommet ",(0,s.jsx)(n.code,{children:"A"})," et le sommet ",(0,s.jsx)(n.code,{children:"E"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"std::unordered_map<int, std::pair<float, int>> dijkstra(WeightedGraph const& graph, int const& start, int const end) {\n    // On cr\xe9e un tableau associatif pour stocker les distances les plus courtes connues pour aller du sommet de d\xe9part \xe0 chaque sommet visit\xe9\n    // La cl\xe9 est l'identifiant du sommet et la valeur est un pair (distance, sommet pr\xe9c\xe9dent)\n    std::unordered_map<int, std::pair<float, int>> distances {};\n\n    // On cr\xe9e une file de priorit\xe9 pour stocker les sommets \xe0 visiter\n    // la pair contient la distance pour aller jusqu'au sommet et l'identifiant du sommet\n\n    // Ce type compliqu\xe9 permet d'indiquer que l'on souhaite trier les \xe9l\xe9ments par ordre croissant (std::greater) et donc les \xe9l\xe9ments les plus petits seront au d\xe9but de la file (top) (Min heap)\n    std::priority_queue<std::pair<float, int>, std::vector<std::pair<float, int>>, std::greater<std::pair<float, int>>> to_visit {};\n\n    // 1. On ajoute le sommet de d\xe9part \xe0 la liste des sommets \xe0 visiter avec une distance de 0 (on est d\xe9j\xe0 sur le sommet de d\xe9part)\n    \n    // Tant qu'il reste des sommets \xe0 visiter\n    while (!to_visit.empty()) {\n        // 2. On r\xe9cup\xe8re le sommet le plus proche du sommet de d\xe9part dans la liste de priorit\xe9 to_visit\n\n        // 3.Si on atteins le point d'arriv\xe9, on s'arr\xeate\n        if (/* TODO */) {\n            return distances;\n        }\n        // 3. On parcoure la liste des voisins (gr\xe2ce \xe0 la liste d'adjacence) du noeud courant\n        for (/* TODO */) {\n            // 4. on regarde si le noeud existe dans le tableau associatif (si oui il a d\xe9j\xe0 \xe9t\xe9 visit\xe9)\n\n            auto find_node { /* TODO */ };\n            bool const visited { /* TODO */ };\n\n             if (!visited) {\n                    // 5. Si le noeud n'a pas \xe9t\xe9 visit\xe9, on l'ajoute au tableau associatif en calculant la distance pour aller jusqu'\xe0 ce noeud\n                    // la distance actuelle + le point de l'arr\xeate)\n\n                    // 6. On ajout \xe9galement le noeud de destination \xe0 la liste des noeud \xe0 visit\xe9 (avec la distance \xe9galement pour prioriser les noeuds les plus proches)\n                }else {\n                    // 7. Si il a d\xe9j\xe0 \xe9t\xe9 visit\xe9, On test si la distance dans le tableau associatif est plus grande\n                    // Si c'est le cas on \xe0 trouv\xe9 un plus court chemin, on met \xe0 jour le tableau associatif et on ajoute de nouveau le sommet de destination dans la liste \xe0 visit\xe9\n                    if (/* TODO */) {\n                        \n                    }\n                } \n        }\n    }\n\n    return distances;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
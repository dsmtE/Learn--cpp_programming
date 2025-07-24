---
description: Retours sur les projets du second semestre de l'IMAC 2027
author:
  - Enguerrand DE SMET
---
# Retours Généraux

## C++

### "Using namespace" dans les headers

J'en ai déjà parlé au retour des projets du premier semestre [ici](/Subjects/IMAC2027/S1/feedbacks#namespace-et-header) mais je le répète ici :
Il ne faut pas utiliser `using namespace` dans les headers, car cela va polluer l'espace de nommage de tous les fichiers qui incluent ce header.
C'est envisageable dans les fichiers sources, mais **interdit** dans les headers.

### Variables globales

L'utilisation de variables globales est à éviter autant que possible.
Cela peut rendre le code difficile à comprendre et à maintenir, car les variables globales peuvent être modifiées n'importe où dans le programme, ce qui peut entraîner des comportements imprévisibles.
Plus de détails [ici](/Subjects/IMAC2027/S1/feedbacks#variables-globales).

### Utilisation de `static`, `mutable` ou `extern` ...

J'ai remarqué que certains d'entre vous utilisaient des mots clés C++ que nous n'avons pas vu en cours, comme `static`, `mutable`, `extern`, `inline`, etc.
Pourquoi pas, mais attention à ne pas les utiliser de manière inappropriée ou sans en comprendre le fonctionnement.

`extern` par exemple est un mot clé qui permet de déclarer une variable ou une fonction dans un fichier source. Elle peut être utilisée dans d'autres fichiers sources de sorte que la variable devient globale et accessible depuis n'importe quel fichier source qui inclut le header où elle est déclarée.
Cela peut sembler pratique, mais cela peut aussi causer des problèmes de confusion et de maintenance du code et c'est généralement à éviter et une mauvaise pratique.
C'est pourquoi nous n'avons pas vu ces mots clés en cours, car ils ne sont pas nécessaires pour la plupart des projets que nous avons réalisés.
A votre échelle de projet leur usage n'est pas un problème majeur, mais c'est une mauvaise habitude.

L'alternative ici est de passer en paramètre les variables nécessaires aux fonctions ou aux classes, plutôt que de les déclarer globales. Ou alors de créer une structure pour grouper ces variables et de passer cette structure en paramètre plus facilement.

### Utilisation du débogueur

Je vous conseille de toujours compiler et exécuter votre programme en mode **débogage**, même si vous n'avez pas besoin de déboguer.
Cela vous permettra de détecter plus facilement les erreurs et de comprendre le comportement de votre programme. Un crash dans un programme sans débogage peut être difficile à comprendre, alors qu'en mode débogage, vous pouvez voir exactement où et pourquoi cela s'est produit car les informations sont conservées et parfois la ligne exacte où le problème se produit est indiquée.

### Optimisation prématurée

Il est important de ne pas se précipiter dans l'optimisation prématurée de votre code.
Optimiser c'est bien mais vouloir le faire avant d'avoir un code fonctionnel peut vous amener à des choix de conception qui compliquent inutilement votre code et le rendent plus difficile à comprendre et à maintenir.

Il est préférable de se concentrer d'abord sur le **fonctionnement** et la **lisibilité** du code, puis de **tester** pour **identifier** les parties du code qui sont coûteuses en termes de performance afin de **comprendre** le problème et éventuellement les **optimiser** par la suite si c'est nécessaire.

Quelques vidéos intéressantes à ce sujet que je vous recommande :
- [The Premature Optimization Fallacy](https://www.youtube.com/watch?v=Y2q1d8j6b0c)
- [Premature Optimization](https://www.youtube.com/watch?v=tKbV6BpH-C8)

### Nommage des variables

J'ai encore vu beaucoup de noms de variables peu explicites ou trop courts, comme `x`, `p`, `isC`, ...
C'est parfois acceptable pour des variables temporaires ou des boucles (`i` pour l'itérateur d'une boucle), ou des abréviations très communes (`pos` pour position, `vel` pour vélocité, `dir` pour direction, etc.), mais il est préférable d'utiliser des noms de variables clairs.

Exemple de nommages que j'ai rencontré dans un projet dans le monde professionnel (stage sur le logiciel open-source [Meshroom](https://alicevision.org/#meshroom)):
- `ci` pour `facetCellIndex`
- `lpi` pour `lastPointIntersection`
- `op` pour `originPoint`

J'ai passé plus de temps à essayer de comprendre ce que ces variables signifiaient qu'à écrire du code.

Je vous conseille donc de **toujours** utiliser des noms de variables explicites et significatifs, qui décrivent clairement leur rôle et leur contenu.
Cela rendra votre code plus lisible et plus facile à comprendre pour vous et pour les autres développeurs qui pourraient travailler sur votre code à l'avenir ou même vous-même dans quelques jours/mois (même si cela semble évident sur le moment).

```info "Anecdote"
Il m'est arrivé à plusieurs reprises de passer plus de 30min à discuter avec un collègue pour comprendre ce que faisait une variable mal nommée dans le code puis pour lui trouver un nom plus explicite et pertinent. Ce n'est pas juste pour vous embêter, c'est quelque chose de très important surtout dans le monde professionnel.
```

### Orienté objet et Getters/Setters

On a pas vu l'orienté objet en C++ dans le cours, mais certains d'entre vous l'ont utilisé dans leur projet.
C'est très courant, mais attention à ne pas tomber dans les pièges de l'orienté objet, comme l'utilisation **excessive** de **getters** et **setters**.
Un getter est une méthode qui permet d'accéder à une variable d'une classe, quand elle est privée ou protégée, et un setter est une méthode qui permet de modifier cette variable.
L'utilisation de getters et setters est une bonne pratique pour encapsuler les données et protéger l'intégrité des objets.
Cependant, il ne faut pas en abuser et ne pas créer des getters et setters pour chaque variable d'une classe.

Si ces getters et setters ne font que retourner ou modifier la variable sans aucune logique supplémentaire, cela peut rendre le code plus verbeux et moins lisible.

C'est tout de même une bonne pratique pour pouvoir vérifier ou modifier la valeur d'une variable avant de la retourner ou de la modifier, mais il est préférable de le faire uniquement lorsque cela est nécessaire.

### Vecteur 1D vs 2D

L'objet `std::vector` a un fonctionnement particulier en C++ en ce qui concerne la mémoire.
Un `std::vector` est un tableau **dynamique** qui stocke des éléments contigus en mémoire et qui peut être redimensionné.
Mais lorsqu'on utilise un `std::vector` dans un `std::vector`, les éléments ne sont pas contigus en mémoire (les `std::vector` imbriqués sont eux-mêmes des pointeurs vers d'autres tableaux).

Cela peut poser des problèmes de performance et de mémoire, car l'accès aux éléments d'un `std::vector` imbriqué peut être plus lent que l'accès aux éléments d'un tableau contigu.

Cependant, c'est en effet plus simple d'utilisation d'accéder à un élément en 2D en faisant `vec[i][j]`. Or, il est quand même possible de représenter en mémoire notre information 2D comme un tableau 1D et en utilisant une formule pour accéder aux éléments.
Voici un exemple de code pour accéder à un élément d'un tableau 2D stocké dans un `std::vector` 1D :

```cpp
float& getElement(std::vector<float>& vec, const size_t width, const size_t x, const size_t y) {
    return vec[y * width + x];
}
```

Ou même d'encapsuler cela dans une structure pour stocker les dimensions et faciliter l'accès aux éléments (exemple d'utilisation d'une structure pour un tableau 2D) :

```cpp
struct Array2D {
    std::vector<float> data;
    size_t width;
    size_t height;

    Array2D(size_t w, size_t h) : width(w), height(h), data(w * h) {}

    float& get(size_t x, size_t y) {
        return data[y * width + x];
    }
};

// Exemple d'utilisation
Array2D array(10, 10);
array(5, 5) = 42.0f; // Accès à l'élément (5, 5)
```

Cela permet donc de profiter des avantages de performance et de mémoire en utilisant un tableau 1D tout en gardant une interface simple pour accéder aux éléments en 2D.

## OpenGL

### Problème d'encapsulation (constructeurs/destructeurs)

Certains d'entre vous ont rencontré des problèmes avec l'encapsulation des ressources OpenGL, notamment avec les constructeurs et destructeurs des classes qui gèrent les ressources OpenGL.

Lors de la création et destruction d'un objet OpenGL, il est important de s'assurer que les ressources sont correctement allouées et libérées. Or, dans votre cas, la classe responsable de la création des ressources OpenGL n'était pas correctement encapsulée et pouvait être copiée (par assignation ou retour de variable par valeur), ce qui entraînait des problèmes de libération des ressources prématurée ou de double libérations.

Pour éviter cela, il est recommandé d'utiliser des mécanismes similaires aux pointeurs intelligents en C++ (comme `std::unique_ptr` ou `std::shared_ptr`) pour gérer la durée de vie des ressources OpenGL, ou d'utiliser des classes qui ne peuvent pas être copiées (en déclarant le constructeur de copie et l'opérateur d'assignation comme `delete`).

Ce n'est pas de votre faute, mais pour vous rendre compte de ces problèmes il est important de penser à lancer votre programme dans un environnement de débogage et de vérifier les erreurs OpenGL avec `glGetError()` par exemple ou la validité des ID de buffers, textures, etc. pour détecter les problèmes de gestion des ressources.

Vous pouvez aussi par exemple ajouter un "breakpoint" dans le destructeur de votre classe pour vérifier s'il est appelé au moment où vous vous y attendez (si c'est appelé trop tôt ou trop tard c'est un signe que quelque chose ne va pas).

Enfin, pensez à contacter le professeur concerné si vous avez des questions ou des problèmes avec les fichiers partagés pour le projet.

### Gestion de la mémoire CPU / GPU

Quand on utilise une application graphique, il y a un échange de données entre le CPU (processeur central) et le GPU (processeur graphique).
Un mesh est créé sur le CPU, puis envoyé au GPU pour être affiché. Cet échange de données entre le CPU et le GPU est coûteux en termes de performance. Il est donc préférable de modifier le mesh uniquement lorsque c'est nécessaire.

Si on souhaite **déplacer un élément** dans la scène, **il ne faut pas modifier le mesh directement** , mais utiliser des transformations (comme des translations, rotations, etc.) pour déplacer l'élément dans la scène. C'est le rôle des **matrices de transformation** (et variables uniformes) dans OpenGL.

## Autres

### Lire le sujet

Il est important de lire attentivement le sujet du projet et de comprendre les attentes et les contraintes avant de commencer à coder. Cela vous permettra de mieux comprendre les objectifs du projet et de ne pas perdre de temps à coder des fonctionnalités qui ne sont pas demandées ou qui ne sont pas pertinentes.
Il faut avant tout se concentrer sur les fonctionnalités demandées avant de vouloir ajouter des fonctionnalités supplémentaires ou de modifier le sujet.
Si vous avez des questions ou des doutes sur le sujet, n'hésitez pas à en discuter.

### Modifications du sujet

Si vous avez des suggestions ou des modifications à apporter au sujet, il faut en discuter avec le professeur concerné.
Il faut faire valider les modifications et vérifier qu'elles ne vont pas à l'encontre des objectifs du projet. Il ne faut **pas** remplacer la fonctionnalité par une autre sans en parler car cela peut être mal perçu ou même sanctionné.

### Fichiers fournis

Si vous êtes bloqué par ce que l'on vous fournit, allez poser des questions au professeur concerné.
Vous devez être en mesure de comprendre comment les utiliser dans votre projet. N'attendez pas la dernière minute pour poser des questions ou demander de l'aide, car cela peut retarder votre projet et vous empêcher de le terminer à temps.

### Présentation

Lors de votre présentation, concentrez vous sur le fonctionnement de votre programme et les choix techniques que vous avez faits, plutôt que de présenter le code en détail. La présentation n'est pas là pour montrer chaque ligne de code, mais pour expliquer comment votre programme fonctionne et comment vous avez résolu les problèmes que vous avez rencontrés. Vous pouvez parler de ce qui ne fonctionne pas mais il ne faut pas s'attarder dessus, et plutôt parler de ce qui a été réalisé et comment vous avez surmonté les obstacles.
Imaginez que vous présentez votre projet à un client ou à un employeur, et que vous devez leur expliquer comment votre programme fonctionne et pourquoi il est intéressant. Un client ne voudra pas "acheter" un produit si on lui répète que ça ne fonctionne pas, mais plutôt s'il est convaincu de l'intérêt du produit et de la qualité du travail fourni.

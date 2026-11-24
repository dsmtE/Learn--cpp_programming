---
author: Enguerrand DE SMET
---

# Projet Snake

## Introduction

Pour mettre en pratique les notions de programmation vues au cours de ce semestre, je vous propose de réaliser un petit jeu dans le terminal : le **Snake** (ou **Serpent** en français).

Le Snake est un jeu vidéo classique dans lequel le joueur contrôle un serpent qui se déplace dans un plateau. Le but est de manger la nourriture qui apparaît sur le plateau, ce qui fait grandir le serpent et augmente le score, tout en évitant de toucher les murs ou son propre corps.

- Le projet est à réaliser **individuellement**

### Objectifs du projet

- Évaluer votre niveau en programmation en C++
- Réaliser un projet de A à Z, organiser vos idées, structurer vos fichiers et votre code
- Vous familiariser avec l'utilisation de Git et GitHub

## Fonctionnalités demandées (Cahier des charges)

### Structure de position

Vous devez réaliser une **structure** `Position` qui contient les coordonnées d'une case du plateau de jeu :

- `x` : la coordonnée en abscisse (colonne)
- `y` : la coordonnée en ordonnée (ligne)

Cette structure doit être placée dans un fichier dédié. Vous pouvez écrire un opérateur `==` pour pouvoir comparer les positions entre elles.

### Structure du plateau (grille)

Vous devez représenter le plateau de jeu via une structure qui doit:

- connaître ses dimensions (`width` et `height`)
- initialiser les **murs de bordure** du plateau
- permettre de savoir si une position donnée est un mur (bordure ou hors du plateau).

La représentation interne est **libre** : aucune structure de données n'est imposée.

:::tip
À vous de réfléchir à la représentation du plateau la plus adaptée.
:::

Les murs internes et les niveaux sont proposés dans la partie **Améliorations**.

### Structure du serpent

Vous devez réaliser une **structure** `Snake` qui contient les informations suivantes :

- `body` : la liste des positions occupées par le corps du serpent
- `direction` : la direction actuelle du serpent
- `score` : le score du joueur

:::info
Il faudra un moyen d'identifier la tête du snake, cela peut par exemple être la première position dans la variable `body`.
:::

Cette structure doit être placée dans des fichiers dédiés (`Snake.hpp` et `Snake.cpp`).

Pour représenter la direction, vous pouvez utiliser une [**énumération**](/Lessons/Fundamentals/Variables#enum-un-type-supplémentaire).

Vous devez réaliser une fonction qui initialise le serpent avec une position de départ et une taille initiale. Vous devez également réaliser les fonctions nécessaires pour :
- Déplacer le serpent d'une case
- Vérifier si le serpent se heurte à lui-même
- Changer la direction du serpent

:::tip
Découpez le comportement en petites fonctions (par exemple : calculer la prochaine position de la tête, déplacer le serpent).
:::

### Affichage du plateau de jeu

Vous devez réaliser une fonction `draw` (ou équivalent) qui permet d'afficher le plateau de jeu dans le terminal. Le plateau doit être affiché de manière à montrer les **murs**, le **serpent** et la **nourriture**.

Utilisez des symboles de votre choix pour représenter les éléments du jeu mais voici un exemple de représentation :

```
###################
#                 #
#      Ooo        #
#      .          #
#                 #
###################
```

Dans cet exemple :
- `#` représente un mur
- `O` représente la tête du serpent
- `o` représente le corps du serpent
- `.` représente la nourriture

:::tip
Séparez l'affichage de la logique du jeu. Pour éviter que l'écran clignote, voyez la section **Aide au terminal avec terminal_ctrl**.
:::

### Déplacement en temps réel

Le serpent doit se déplacer **en continu** dans sa direction actuelle, en temps réel. Le joueur peut à tout moment changer la direction du serpent avec les touches du clavier.

Pour réaliser un déplacement en temps réel, il faut pouvoir :
- Effacer et redessiner le plateau à chaque "frame"
- Lire les touches du clavier **sans bloquer** le programme

Le rythme du jeu (vitesse) peut être contrôlé avec un `sleep` entre chaque frame, par exemple :

```cpp
std::this_thread::sleep_for(std::chrono::milliseconds(150));
```

:::tip
Idéalement pour un rendu fluide, ne redessinez que les cases qui ont changé plutôt que tout le plateau à chaque frame (réalisable avec **terminal_ctrl**).
:::

### Génération de la nourriture

Vous devez réaliser une fonction `spawn_food` qui place la nourriture sur une case **vide et aléatoire** du plateau (pas un mur, pas sur le serpent).

La nourriture peut être représentée par un caractère (par exemple `.`). Le serpent doit grandir lorsqu'il mange la nourriture, et le score doit augmenter.

### Détection de collision et fin de partie

Le jeu doit vérifier à chaque déplacement :
1. **Collision avec un mur** : le serpent touche un mur -> partie terminée
2. **Collision avec lui-même** : le serpent touche son propre corps -> partie terminée
3. **Collision avec la nourriture** : le serpent atteint la nourriture -> le serpent grandit, le score augmente, et une nouvelle nourriture apparaît

À la fin de la partie, le jeu doit afficher un message avec le score final du joueur.

### Menu de démarrage

Vous devez réaliser un menu de démarrage qui permet à l'utilisateur de choisir la **taille du plateau**. Par exemple :

```
Bienvenue dans le jeu du Snake
Choisissez la taille du plateau :
1. Petit (15x15)
2. Moyen (20x20)
3. Grand (30x20)
```

Vous devez **valider** l'entrée de l'utilisateur (ce n'est pas grave si l'utilisateur entre n'importe quoi, le jeu ne doit pas planter).

Il faut au minimum 3 tailles de plateau différentes.
Vous pouvez également proposer en **bonus** un menu pour choisir le niveau de difficulté (vitesse du serpent, murs internes, etc.).

## Aide au terminal avec terminal_ctrl

Pour réaliser un jeu en "temps réel", il faut pouvoir lire les touches du clavier **sans bloquer** le programme, effacer et redessiner l'écran sans clignotement, et restaurer proprement le terminal en quittant. La librairie [Terminal Ctrl](https://github.com/dsmtE/terminal_ctrl) est un **outil d'aide au terminal** (et non une interface graphique) qui s'adapte à l'OS et fournit:

- Un accès au mode "raw" du terminal (lecture des touches sans appuyer sur Entrée sur linux/macOS)
- la lecture des touches de manière non bloquante (sans attente comme `std::cin` par exemple)
- le positionnement du curseur et l'effacement de l'écran
- la gestion des couleurs et la taille du terminal

Voici un exemple minimal et complet pour démarrer :

```text
snake/
├── CMakeLists.txt
└── src/
    └── main.cpp
```

Voilà le fichier `CMakeLists.txt` :

```cmake
cmake_minimum_required(VERSION 3.26)
project(Snake LANGUAGES CXX)

include(FetchContent)

# Défini ou récupérer la librairie terminal_ctrl (commit fixé pour avoir la même version)
FetchContent_Declare(
    terminal_ctrl
    GIT_REPOSITORY https://github.com/dsmtE/terminal_ctrl
    GIT_TAG a911d289c86f812f02de5e16b4d39992b1d117cd
)

# Clone terminal_ctrl puis ajoute son CMakeLists.txt au projet
FetchContent_MakeAvailable(terminal_ctrl)

add_executable(snake src/main.cpp)
target_compile_features(snake PRIVATE cxx_std_20)

# terminal_ctrl
target_link_libraries(snake PRIVATE terminal_ctrl)
```

Voilà un exemple de fichier `src/main.cpp` :

```cpp
#include <chrono>
#include <iostream>
#include <thread>

#include <terminal_ctrl.hpp>

int main() {
    // Active le mode "raw" du terminal sous Linux et MacOS pour lire les touches sans appuyer sur Entrée. Sous Windows, ne fait rien car _getch() lit déjà les touches directement
    // Ce mode raw est automatiquement désactivé à la fin du programme
    terminal_ctrl::RawModeGuard raw_mode {};
    terminal_ctrl::save_default_attributes();

    // Cache le curseur pour éviter les clignotements pendant le redessin.
    terminal_ctrl::set_cursor_visibility(false);

    bool running {true};

    while (running) {
        // Efface l'écran et replace le curseur en haut à gauche
        terminal_ctrl::clear_screen();
        terminal_ctrl::set_cursor_position(1, 1);

        std::cout << "Snake template\n";
        std::cout << "Appuyez sur Echap pour quitter\n";

        // Vide toutes les touches en attente sans bloquer la boucle de jeu
        while (std::optional<terminal_ctrl::KeyCode> const key { terminal_ctrl::get_key_non_blocking() }) {
            if (*key == terminal_ctrl::KeyCode::KEY_ESCAPE) {
                running = false;
            }
        }

        // Simule une frame avec une pause: ajustez la durée pour changer la vitesse du jeu
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }

    terminal_ctrl::restore_default_attributes();
    // Restaure le curseur et efface l'écran avant de quitter
    terminal_ctrl::set_cursor_visibility(true);
    terminal_ctrl::clear_screen();
}
```

Quelques points importants :

- `RawModeGuard` doit être créé avant de lire les touches sur linux/macOS
- `get_key_non_blocking()` renvoie un `std::optional<KeyCode>` : il ne bloque pas la boucle de jeu
- `get_key_blocking()` attend une touche si vous avez besoin d'une lecture bloquante
- `set_cursor_position(x, y)` utilise des coordonnées commençant à 1 (pas à 0)
  

:::tip
Vous pouvez aussi utiliser la librairie `terminal_ctrl` pour obtenir la taille du terminal, changer les couleurs, etc.
:::

## Améliorations

Vous **devez** réaliser **au moins une** des améliorations listées ci-dessous (ou alors me proposer une autre amélioration que je dois valider).

:warning: Attention, pour toute amélioration, vous devez réaliser le jeu de base avant de commencer à ajouter des fonctionnalités supplémentaires.

### Ajouter des murs internes et des niveaux

Le jeu de base peut être réalisé avec un plateau vide. Vous pouvez ajouter des **murs internes** au plateau et définir plusieurs **niveaux** (plateaux différents). C'est ici que le choix de représentation de la grille prend toute son importance.

Par exemple, vous pouvez définir des niveaux comme ceci :

```
###################
#                 #
#  ###  ###  ###  #
#  #       #      #
#  #   #####      #
#      #   #      #
#  ### #   #  ### #
#      #          #
###################
```

Vous devez réaliser au moins 3 niveaux de difficulté croissante. Le joueur doit pouvoir choisir son niveau dans le menu de démarrage.

:::tip
Vous pouvez décrire chaque niveau sous forme de texte, où chaque ligne correspond à une ligne du plateau.
:::

Il est aussi possible de générer les niveaux aléatoirement, dans ce cas vous devez vous assurer que le niveau est **jouable** (il doit y avoir un chemin entre la tête du serpent et la nourriture).

### Une interface graphique

Vous pouvez réaliser une interface graphique pour le jeu du Snake en utilisant une bibliothèque graphique comme raylib, SDL, imgui, etc.

⚠️ Attention, l'interface graphique n'est pas requise pour ce projet. Cela peut être intéressant mais vous êtes responsables de la gestion de l'interface graphique et du temps que cela vous prendra. Vous devez réaliser le jeu en terminal avant de commencer à ajouter une interface graphique.
Concernant la compatibilité, si vous êtes sur MacOS, venez m'en parler avant de vous lancer dans cette amélioration que je sois bien en mesure de corriger votre projet.

### Un ennemi (style Pac-Man)

Ajouter un **ennemi** qui se déplace dans le plateau et essaie d'attraper le serpent. L'ennemi peut apparaître après un certain temps ou à partir d'un certain score. Si l'ennemi touche le serpent, la partie est terminée.

Plusieurs niveaux de difficulté :
- L'ennemi se déplace aléatoirement
- L'ennemi essaie de suivre le serpent (par exemple : il se rapproche toujours de la tête du serpent)

### Modificateurs

Ajouter des élements qui apparaisent aléatoirement de temps en temps et qui une fois mangés modifient un aspect du jeu pendant un temps donné:
- Gèle : La queue ne grandit pas
- Fantôme : La tête traverse les murs ou son propre corps sans mourir
- Ralentisseur : Le jeu ralentit pour faciliter les virages serrés

ils peuvent remplacer ou être présent en plus de la nouriture sur le plateau.

Idéalement ont doit pouvoir les reconnaître et savoir quels vont être leur effets (documentation dans le README ou encore mieux accessible depuis le jeu directement).

### Contrôles personnalisables

Permettez de changer les touches (flèches vs WASD) via un menu de configuration

### Autres idées (facultatives)

Si vous voulez aller plus loin, vous pouvez également ajouter (sans que cela soit obligatoire) :

- plusieurs nourritures simultanées sur le plateau
- une pause
- une vitesse de jeu réglable (ou qui augmente avec le score)
- un tableau des scores (high score) sauvegardé entre les parties
- un serpent ou des niveaux colorés
- des portes traversables (le serpent réapparaît de l'autre côté) comme dans Pac-Man
- Le fantôme utilise un algorithme de recherche de chemin (par ex. BFS) pour trouver le serpent

## Librairies tierces

Si vous voulez utiliser des librairies tierces, demandez-moi avant pour que je puisse valider votre choix.

## Rendu

Le projet est à rendre sur **GitHub** (ou **GitLab**), vous devez m'envoyer le lien de votre dépôt avant la date limite de rendu : le **Dimanche 17 Décembre 23h59** (environ 3 semaines de projet, succeptible de varier de quelques jours)

:warning: Seuls les commits avant la date limite seront pris en compte pour la notation.

Un document vous sera partagé pour que vous puissiez noter le lien de votre dépôt.

(Évidemment je dois avoir accès à votre dépôt pour pouvoir le consulter, faites bien attention à ce qu'il soit en public (ou, si vous tenez à le garder privé, ajoutez moi en collaborateur ([dsmtE](https://github.com/dsmtE))).

Vous devez ajouter un fichier `README.md` à la racine de votre dépôt et qui fera office de **rapport** et contiendra :
- Des indications pour exécuter votre programme si nécessaire (librairies, système d'exploitation testé).
- Des explications sur l'organisation de votre code (fichiers, structure, fonctions, etc.) et vos choix d'implémentation.
- Si améliorations il y a, une description des fonctionnalités supplémentaires que vous avez réalisées (et comment les utiliser si besoin).
- Un rapide bilan sur les problèmes rencontrés et solutions trouvées.

⚠️ Attention: Un commit unique la veille de la date limite ne sera pas accepté, vous devez montrer que vous avez travaillé régulièrement sur le projet.

## Barème

Le jeu de base compte pour **15 points** et le rapport (`README.md`) pour **1 points**. Vous devez réaliser **au moins une amélioration** (2 points), des améliorations supplémentaires peuvent apporter jusqu'à **4 points bonus**. La note finale est plafonnée à **20/20**.

Les améliorations sont pondérées selon leur difficulté.
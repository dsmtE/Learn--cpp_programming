---
title: Retours
author:
  - Enguerrand DE SMET
  - Steeve VINCENT
---

## Rendu Projet

Envoyer uniquement le minimum nécessaire pour compiler et lancer l'executable:

- code source du projet
    - S’il y a du code mort (qui n’est utilisé nulle part) ou des lignes de codes commentées, nettoyer avant le rendu.
- les utilitaires de compilation (Makefile, CMakelist, librairies ou autre)
- ressources/assets du projet (textures, son, polices ...)

Ne pas envoyer:

- les executables et les dossiers compilés (.o et autres fichiers générés par cmake)
- Si vous pouvez, éviter les fichiers lourds (son/video pas compressé.e, ...)

:::warning git
Il est important de ne pas inclure les fichiers compilés dans le dépôt git car ils sont propres à chaque machine et configuration (compilateur, structure de dossier personnelle, etc).
Il est préférable de les ajouter dans le fichier `.gitignore` pour ne pas les inclure dans le dépôt git.
De plus ces fichier sont générés automatiquement à partir des fichiers sources, il n'est donc pas nécessaire de les inclure dans le dépôt git et cela permet de garder le dépôt git propre.
:::

## Soutenance

- Préparer le déroulé de la soutenance
    - Si démo, faire en sorte que votre scénario de démo mette en valeur les fonctionnalités qui fonctionnent le mieux
- Ne montrer pas de code (ou très peu)
    - Si vous voulez montrer l’architecture ou des algos, soyez schématique
- Si vous voulez décrire des fonctionnalités, utiliser surtout la démo pour les montrer
- Vous pouvez parler des difficultés rencontrés mais il ne faut pas ça pèse sur le reste de la soutenance. Vous êtes là pour montrez le meilleur de vous même et le travail accompli.

## Gestion de Projet

### Étapes

- Commencer par vous approprier les “specs”/le cahier des charges
    - Reprendre avec vos mots et assurez vous d’avoir compris ce qui est attendu
    - Faire une veille et voir l’état de l’art selon le projet. Si c’est un jeu de type Tower Defense, voir ce qui existe comme jeu de ce type.
    - Découper le projet en petite tache, Exemple:
        - Faire l’affichage d’une carte diviser en plusieurs tiles.
        - Lire un fichier ITD et en tirer des informations utilisables.
        - Faire bouger un Ennemie d’un bout à l’autre de la carte.
        - …
    - Réfléchir à la DA, le level design, l’expérience utilisateur, …
        - Cette étape est moins importante dans le cadre d’un projet informatique, étant donné le temps qui vous est imparti, ne passez pas trop de temps dessus
    - Évaluer la temporalité de ces tâches. Il vous est compliqué pour l’instant d’évaluer le temps que va prendre une tache mais déterminer au moins quelle tache doit être fait avant quelle autre et s’il y a des taches parallélisable. En gestion de projet, il s’agit de faire un diagramme de Gant (vous n’êtes pas obligé d’aller aussi loin)
- Tout au long du projet, réfléchir, à côté, à ce qui peut être intéressant à garder/documenter pour la soutenance/le rapport
- Réfléchir collectivement à l’organisation du code et à la base de celui ci.
    - Faire un schéma ou une mind map pour clarifier vos idées.
- Attribuer les tâches à chacun selon les envies et les expertises.
    - :warning: Pour un projet dans le cadre d’un cours informatique, il faut que chacun soit impliqué dans le code, il s’agit avant tout d’une évaluation de vos compétences.
- Développer
    - Concevoir des tests itératif qui valide la fonctionnalité que vous développez.
    - Développer sans GUI lorsque la fonctionnalité n’est pas directement lié à celle ci.
        - Exemple: Déplacement d’un ennemie selon un graphe, afficher la position dans la console et vérifier que la position est raccord avec le graph
        - Vous pouvez bien sûr vous aider de la GUI pour vous rendre compte de la fonctionnalité dans son état final mais elle ne doit pas vous bloquer
    - Expliquer succinctement votre code à vos collaborateurs
    - Raccorder votre code au reste du projet
- Faire les assets et le level design
    - Selon la DA choisi, trouver ou créer les assets (textures, sons, police…) dont votre jeu/programme a besoin.

### Outils Kanban

Pour organiser vos tâches, vous pouvez utiliser des outils comme:

- Trello
- Notion
- GitHub / Gitlab
- Meistertask

## Architecture logiciel

### Variables Globales

Éviter les variables globales, déjà pour une question de suivi et de lecture de code, pour savoir d'où vient une variable et où est elle initialisée.

Par ailleurs si on multiplie les variables globales, on risque mélanger des variables locales avec celles-là.

Si j'ai une variable `mur` globale et que je veux nommer une variable locale `mur`, soit le compilateur va m'envoyer chier soit le programme va avoir des comportements inattendu parce que les variables se confondent.

Et une autre raison qui vous empêche tout simplement de le faire, le compilateur, lorsqu'il atteint la compilation des fichiers intermédiaires, il peut être amené à vous afficher une erreur de variable multiple `multiple declaration of machin`.


:::tip **Solution**💡:

Faire une structure ou une classe qui va contenir les données dont vous avez besoin dans beaucoup d'endroit et qui sont uniques à une execution du programme.

Vous pouvez ensuite passer cette structure (par référence) dans vos fonctions pou accéder à l'état de votre jeu et des variables partagés.

```cpp
struct Game {
	BallsList balls;
	Wall walls[10];
	int walls_count;
  std::string background_color;
}
```

Une autre solution est de créer une classe et de lui ajouter une fonction (statique) qui va créer une instance unique et la renvoyer à chaque fois, c'est ce qu'on appelle un **singleton**.

:::warning
Attention, les singletons gardent les même travers que les variables globales en terme de suivi de données. il faut donc les utiliser avec parcimonie.
:::

```cpp
class Game {

private:
    // Constructeur privé pour rendre la classe impossible à instancier manuellement sans passer par la méthode get_instance
    Game() {}

    // Un singleton est une instance unique de la classe donc on ne peut pas la copier
    Game(Game const&) = delete;
    void operator=(Game const&) = delete;

public:
    // Méthode publique pour récupérer l'instance unique de la classe (et la créer si elle n'existe pas)
    static Game& get_instance() {
        static Game instance;
        return instance;
    }
    
    // ...
}
```

quelques liens pour approfondir le sujet:
- [Singleton Design Pattern](https://medium.com/@pawara/singleton-design-pattern-c085098f1651)
- [Meyers Singleton](https://medium.com/@pawara/singleton-design-pattern-and-meyers-singleton-b5bc5aa2f23c)
- [Singleton Pattern](https://refactoring.guru/design-patterns/singleton)

### Dirty pattern

J'ai vu plusieurs d'entre vous utiliser un pattern très utilisé dans les moteurs de jeux, que je vais appeler le "dirty pattern". C'est une technique qui consiste à marquer un élément (structure, classe) comme "dirty" pour savoir si il faut mettre à jour certaines données qui lui sont associées. C'est une technique très utilisée dans les moteurs de jeux pour savoir si il faut recalculer certaines données (comme le chemin d'un ennemi par exemple). Cela permet d'éviter de recalculer des données qui n'ont pas changé. Par exemple, si vous avez un monstre qui se déplace sur une carte, vous pouvez marquer le monstre comme "dirty" si il a changé de position. Ainsi, vous savez que vous devez recalculer le chemin du monstre pour le déplacer à sa nouvelle position. Si le monstre n'a pas bougé, vous n'avez pas besoin de recalculer le chemin. C'est une technique très efficace pour éviter de recalculer des données inutilement.

### Orienté objet

C'est bien d'avoir pensé à l'orienté objet, mais attention à ne pas tombé dans le piège de l'orienté objet pour l'orienté objet. C'est une notion que vous découvrez plus l'année prochaine mais il est possible de définir la visibilité des attributs et méthodes d'une structure ou classe (**public**, **protected**, **private**). Cela permet de protéger les attributs et de ne pas permettre de les modifier directement (pour l'utilisateur de la classe). C'est une bonne pratique de les mettre en private et de créer des méthodes pour les modifier (**setter**) et les récupérer (**getter**). Cela permet de contrôler l'accès aux attributs et de garantir l'intégrité des données.

mais il ne faut pas tomber dans l'excès, si c'est pour juste retourner et récupérer la value d'un attribut (autant qu'il soit public dans ce cas).

```cpp
#include <string>

class Monster
{
public:
    float get_max_health();
    float get_health_points();
    std::string get_name();
    // ...
    void set_max_health(float const max_health);
    void set_health_points(float const health_points);
    void set_name(std::string const& name);
    // ...
private:
    float max_health;
    float health_points;
    std::string name;
    // ...
};

float Monster::get_max_health()
{
    return this->max_health;
}

float Monster::get_health_points()
{
    return this->health_points;
}

std::string Monster::get_name()
{
    return this->name;
}

// ...

void Monster::set_max_health(float const max_health)
{
    this->max_health = max_health;
}
void Monster::set_health_points(float const health_points)
{
    this->health_points = health_points;
}
void Monster::set_name(std::string const& name)
{
    this->name = name;
}
// ...
```

Ici, il serait préférable de mettre certains attributs en **public** (si ils sont juste des valeurs modifiable sans contrôle par l'utilisateur) et d'autres en **private** (si ils sont des données interne à la classe). Par exemple, le maximum de vie d'un monstre ne devrait pas être modifié directement par l'utilisateur mais set une seule fois à la création du monstre (à l'aide d'un constructeur par exemple). En revanche, la vie actuelle du monstre peut être modifiée par l'utilisateur (lorsqu'il est attaqué par exemple). L'intérêt de faire un setter pour la vie actuelle est de pouvoir vérifier que la vie ne dépasse pas le maximum de vie du monstre par exemple.

Dans l'exemple ci-dessous on vérifie donc que la vie actuelle est bien comprise entre 0 et le maximum de vie. Le nom du monstre peut être modifié par l'utilisateur(pas de vérification particulière), je laisse l'attribut en public pour éviter d'avoir à créer un getter et un setter pas très utile pour cet attribut.

```cpp
#include <string>

class Monster
{
public:
    // Constructeur
    Monster(float const max_health, std::string const& name);
    // ...
    void set_health_points(float health_points);
    void get_health_points();
    // ...
    // Attributs publics
    std::string name;
    // ...
private:
    // Attributs privés
    float max_health;
    float health_points;
};

Monster::Monster(float max_health, std::string const& name)
{
    this->max_health = max_health;
    // On initialise la vie actuelle du monstre à son maximum
    this->health_points = max_health;
    this->name = name;
}

void Monster::set_health_points(float health_points)
{
    if (health_points > this->max_health)
    {
        this->health_points = this->max_health;
    }
    else if (health_points < 0)
    {
        this->health_points = 0;
    }
    else
    {
        this->health_points = health_points;
    }
}

float Monster::get_health_points()
{
    return this->health_points;
}
```

## Propreté du code

C'est quoi déjà la propreté du code ? il faudrait peut être plus parler de rangement du code. Comme pour un classeur ou un bureau, mieux c'est rangé, mieux on s'y retrouve (même si certains s'y retrouve mieux dans le chaos). On peut ranger le code sur certains aspect pour mieux s'y retrouver et le lire plus facilement.

### Convention de casses

Je fais une petite parenthèse pour parler de casses, c’est à dire du fait d’avoir des majuscules ou des minuscules et des undescores ou non. Je vous renvoie sur ce site pour un petit résumé des différentes type de casses.

[Most Common Programming Case Types](https://curiouslychase.com/notes/most-common-programming-case-types/)

Dans ce document vous allez me voir écrire en snake_case pour les variables et fonctions, c’est ma déformation professionnelle venant de mes habitudes python et rust. En C++, le consensus se tourne vers le camelCase, pareil pour le C# (Unity notamment) mais on retrouve du PascalCase pour les fonctions. Mais êtes libre à niveau là, mais je vous conseille de suivre la convention du langage car vous serez souvent amenés à utiliser des librairies, des packages, des frameworks… et par soucis d’uniformité, il vaut mieux faire comme les standards.

L'important c'est de choisir une convention et de s'y tenir pour garder une cohérence dans le code.

### Nommage des variables et fonctions

plus vos noms sont explicites plus votre code est "straightforward", ont comprend le comportement du code rien qu'en le lisant.

```cpp
bool shape_is_closed(Shape* shape)
{
	int sum_of_angles {0};
	const int points_count { shapes->points.size() };

	for (int i {0}; i<points_count-2; i++)
	{

		const Vector current_vector = make_vector_from_points(shapes->points[i], shapes->points[i+1]);
		const Vector next_vector = make_vector_from_points(shapes->points[i+1], shapes->points[i+2]);
		angle = process_angle_from_vectors(current_vector, next_vector);

		sum_of_angles += angle;
	}

	const Vector last_vector = make_vector_from_points(shapes->points[points_count-1], shapes->points[0]);
	const Vector first_vector = make_vector_from_points(shapes->points[0], shapes->points[1]);
	last_angle = process_angle_from_vectors(last_vector, first_vector);
	
	sum_of_angles += last_angle;

	if (sum_of_angles % 360 == 0)
		return true;
	else
		return false;

}
```

Le code est plus long mais il est plus verbeux et on comprend ce que fais le code en lisant les variables et fonctions.

la fonction s'appelle `shape_is_closed`, il va sûrement déterminer si une forme est fermée. La première ligne définie la variable `sum_of_angles` qu'on retrouve à la fin avant le return, ok ça fait la somme des angles pour déterminer si c'est fermé.

Il y a un `for` dans lequel on calcul un angle à partir d'un segment et celui qui le suit, après ça on recalcule un angle entre le dernier segment et le premier.

Dans ce code, j'exagère la verbosité pour avoir une lecture très littérale, on peut trouver un juste milieu.

### Faites des fonctions

Avoir des fonctions ne permet pas seulement de capitaliser sur un ensemble d’instruction, on peut les utiliser pour structurer le code, notamment en rassemblant des instructions répondant à un besoin particulier sous un même bloc “nommé”. par exemple si vous calculer des collisions, faites une fonction `check_collisions` , on saura que le bout de code à l’intérieur vise à calculer une collision et quand vous appelez cette fonction dans votre programme on sait que vous souhaitez faire un calcul de collision à cette endroit.

Posez vous la question de la longueur de vos fonctions, si elles sont trop longues, divisez les en sous fonctions. Les plus stricts développeurs diront qu’une bonne fonction ne doit pas dépasser 10 lignes, je trouve personnellement ça trop contraignant, mais cette règle me sert au moins de base pour ma réflexion. A chaque dizaines de lignes que je dépasse, je dois me poser la question “est ce que je peux bouger des instructions dans une fonction dédiée ?” 

Je vois par exemple un `main` qui fait une centaine de lignes et qui contient ça

```cpp
		Wall walls[MAX];
		Vector2 position;
		bool horizontal;
		for (int i = 0; i<walls_count;i++) {
		    position.x = 150 + rand() % (SCREEN_WIDTH-150);
		    position.y = 150 + rand() % (SCREEN_HEIGHT-150);
		    int taille = 150 + rand() % 200;
		
		    if (randomNumber(1, 2) == 1) {
		        horizontal = true;
		    } else {
		        horizontal = false;
		    }
		    walls[i].initialize(horizontal, taille, position);
		}
```

Je pourrais faire une fonction `initialize_walls` ou une méthode `initialize_random` dans la structure/classe Wall.

### L’indentation et les espaces

L’indentation vous permet de bien situer les blocs (les if/else, for/while, switch, structures…).

dans ce code

```cpp
for(int i {0}; i < codes; i++)
{
for(int j {0}; j < lines; j++)
{
if(forme)
my_code = is_good + is_better;	
else
my_code = is_good;
a_result = call_a_function();
make_it_better(a_result)
while(something_call)
{
if(someone_here())
{
answer()
}
else{
answer_everyone();
take_a_moment();
person = find_someone();
}
}
}
while(yolo)
{
make(toto)
}
while(doing_wrong)
{
error = watch_code(codes);
call_a_formater(codes, errors);
}
}
```

Il est plus compliqué de terminer la limite de chaque bloc comparé à ce code là

```cpp
for(int i {0}; i < codes; i++)
{
    for(int j {0}; j < lines; j++)
    {
        if(forme)
            my_code = is_good + is_better;  
        else
            my_code = is_good;
        a_result = call_a_function();
        make_it_better(a_result)
        while(something_call)
        {
            if(someone_here())
            {
                answer()
            }
            else{
                answer_everyone();
                take_a_moment();
                person = find_someone();
            }
        }
    }
    while(yolo)
    {
        make(toto)
    }
    while(doing_wrong)
    {
        error = watch_code(codes);
        call_a_formater(codes, errors);
    }
}
```

En plus de l’indentation, veillez à espacer votre code pour souligner la proximité de certaines instructions

```cpp
void main()
{
	Window* window = new Window();
	SoundSystem* sound_system = new SoundSystem();
	ResourcesManager resources = new ResourcesManager();
	
	window.resize(720, 1080);
	window.set_title("Ma fenetre");
	window.add_button("Mon Bouton");
	
	sound_system.register_sound("le_message_de_paix.mp3");
	sound_system.register_sound("le_code.mp3");
	sound_system.play_loop("le_message_de_paix.mp3");
	
	resources.register_image("yolo.png")
	resources.register_image("toto.png")
	
	window.open();
}
```

Vous écrivez un code avant tout pour vous et pour les autres et pas pour la machine. La machine se fiche de savoir si vous avez mis un espace avant ou après un opérateur, si vous avez mis une ligne vide entre deux blocs de code. Mais pour vous et pour les autres, c’est plus facile de lire un code bien espacé et indenté.

Dans d'autres languages comme le python, l'indentation est obligatoire pour définir les blocs de code, en C++ l'indentation est une convention mais en pratique tout le monde se force à l'appliquer pour rendre le code plus lisible.

### La longueur des lignes

Éviter les lignes trop longue. La convention actuelle conseille de ne pas dépasser 80 caractères dans une même ligne. Ceci dans l’optique de pouvoir diviser sa fenêtre en 2 pour pouvoir comparer du code, voir des signatures de fonctions,… ou bien de pouvoir mettre son écran à la vertical.

Je trouve personnellement que 80 caractères est assez contraignant. Je me permet des écarts à 90 voire 100 grand maximum.

Pour éviter les lignes trop longues, il suffit tout simplement de diviser les instructions longues en plusieurs ligne. Il y a certaines conventions pour faire ça, en général votre IDE vous aide à le faire.

Dans l’exemple précédent j’ai des lignes dépassant les 80 caractères, reformatons ça

```cpp
bool shape_is_closed(Shape* shape)
{
	int sum_of_angles {0};
	const int points_count { shapes->points.size() };

	for (int i {0}; i<points_count-2; i++)
	{

		const Vector current_vector = make_vector_from_points(
			shapes->points[i], shapes->points[i+1]
		);
		const Vector next_vector = make_vector_from_points(
			shapes->points[i+1], shapes->points[i+2]
		);
		angle = process_angle_from_vectors(current_vector, next_vector);

		sum_of_angles += angle;
	}

	const Vector last_vector = make_vector_from_points(
		shapes->points[points_count-1], shapes->points[0]
	);
	const Vector first_vector = make_vector_from_points(
		shapes->points[0], shapes->points[1]
	);
	last_angle = process_angle_from_vectors(last_vector, first_vector);
	
	sum_of_angles += last_angle;

	if (sum_of_angles % 360 == 0)
		return true;
	else
		return false;

}
```

Le code est plus long en vertical mais on s’assure que ce soit lisible en toute circonstance. Si vous ne suivez pas la convention, assurez vous au moins d’avoir des lignes qui se lisent sur votre IDE sans avoir à scroller horizontalement. 

## Organisation des fichiers

Éviter au maximum d’avoir un main.cpp qui dépasse 100 lignes. Le main.cpp et la fonction `main()` doivent être là que pour faire l’initialisation des variables et lancer la fonction principale (dans un projet, en TP ça peut contenir le corps du programme).

Cependant ne mettez pas tout le code que aviez prévu dans le main.cpp dans un seul autre fichier, essayez le plus possible de disperser le code dans différents fichiers. Le plus souvent on fait un couple header/source par structure. Dans le cas du projet on pourrait avoir `ball.h/ball.cpp` , `wall.h/wall.cpp` et `game.h/game.cpp`. On peut aussi avoir des “utilitaires” tant que vous définissez bien la nature de chaque utilitaire, par exemple ici `physics.h/physics.cpp` et `drawing.h/drawing.cpp`.

Pour des projets à plus large echelles, je vous invite à faire des dossiers pour regrouper vos fichiers, la hiérarchie de fichiers dépendra de la logique utilisés. Pour un jeu on pourra par exemple avoir des dossiers principaux `core`, `render_engine`, `the_game`

### Attributs ou Variable ?

```cpp
class App {
	// ...
	GLuint texture_path;
	std::unordered_map<std::string, GLuint> tile_texture_mapping;
	// ...
}

// init
this->texture_path = loadTexture(path);
this->tile_texture_mapping.insert({"path", this->texture_path});

// draw
draw_quad_with_texture(tile_texture_mapping["path"], w, h, taille);
```

Si vous déclarez un attribut (ici `_texturepath`) mais qu’il n’est utilisé qu’une seule fois, il n’est peut être pas nécessaire d’avoir un attribut et évaluez si une variable n’est pas suffisante 

```jsx
class App {
	// ...
	std::unordered_map<std::string, GLuint> tile_texture_mapping;
	// ...
}

// init
GLuint texture_path{loadTexture(path)};
this->tile_texture_mapping.insert({"path", texture_path});

// draw
draw_quad_with_texture(tile_texture_mapping["path"], w, h, taille);
```

### Variables en dur

Attention aux données en dur dans le code. Par exemple, dans le code ci-dessous, il y a des conditions sur les coordonnées x et y qui sont en dur dans le code. 

```cpp
if (x > 11) { return; }
else if (y == 1 && (x < 5 || (x > 6 && x < 11))) { return; }
else if (y == 2 && (x == 4 || x == 7 || x == 10)) { return; }
else if (y == 3 && ((x >3 && x<8) || x == 10)) { return; }
else if (y == 4 && x==10 ) { return; }
else if (y == 5 && ((x >0 && x<5) || (x >7 && x<11))) { return; }
else if (y == 6 && (x == 1 || x == 4 || x == 8)) { return; }
else if (y == 7 && (x == 1 || x == 4 || (x >7 && x<11)) ) { return; }
else if (y == 8 && (x == 4 || x == 10 || x<2 ) )  { return; }
else if (y == 9 && (x == 4 || x == 10 )) { return; }
else if (y == 10 && (x >3 && x<11)) { return; }
// ...
```

C'est une mauvaise pratique car si vous voulez changer la façon dont vos coordonnées sont gérées, vous devrez changer ce code et cela peut être fastidieux. Il est préférable de stocker ces données dans un fichier de configuration par exemple pour pouvoir les modifier facilement. Ou alors de les stocker dans une structure de données (comme une map ou un tableau par exemple) pour pouvoir les modifier plus facilement. L'idéal est de ne pas avoir de données en dur mais de les déduire d'autres données (comme une image par exemple) pour faciliter la maintenance et l'évolutivité du code.

Ici, cela ressemble des conditions de validité pour des cases d'une grille 2D (placement des tours sur une carte). Il serait donc préférable de déduire ces conditions de la carte elle-même (par exemple, si la case est une herbe, on peut placer une tour dessus, ect).

## Erreurs propre aux C++

### Opération Booléenne

Vous mettez parfois dans le code des testes pour définir une variable booléenne ou pour retourner une valeur booléenne.

Par exemple

```cpp
bool bidule(int const x) {
  if (x > 10) {
    return true;
  }
  return false;
}
```

N’oubliez pas que vous ce que vous mettez dans le if **est** une opération booléenne qui va calculer soit Vrai soit Faux. Et ce résultat peut donc être directement utilisé comme valeur de retour.
```cpp
bool bidule(int const x)
{
	return x > 10;
}
```

:::tip
Si vous devez inverser le résultat, vous pouvez utiliser l’opérateur `!` qui va inverser le résultat d’une opération booléenne.
:::

### Pragma once vs ifndef

```cpp
#pragma once

#ifndef PATH_HPP
#define PATH_HPP
```

Les deux façon de protéger des inclusions de header sont redondantes, il faut choisir l'une ou l'autre (préférence pour #pragma once en C++ moderne).
Petit rappel [ici](/Lessons/Fundamentals/Headers/#pragma-once-éviter-les-doublons)

Si vous ne devez retenir qu'une chose, c'est ajouter un `#pragma once` en haut de vos fichiers headers.

### Pointeurs

Globalement un pointeur fait référence à un objet dans mémoire. Mais il peut faire référence à deux types d’objets:

- un objet prévu dans la mémoire initiale (dans la Pile)
- un nouvel objet alloué pendant l’exécution (dans le Tas)

!https://media.geeksforgeeks.org/wp-content/uploads/20201210222125/Untitled4-660x361.png

https://media.geeksforgeeks.org/wp-content/uploads/20201210222125/Untitled4-660x361.png

Je vais apporter une petite subtilité, il y a deux types de pointeurs (ou d’usage plutôt)

“Il y a le bon et le mauvais pointeur ?”

“Non, silence…”

- Celui qui détient l’adresse original d’un objet
- Celui qui fait référence à un objet initialisé ailleurs

Et pour bien comprendre cette distinction, voyons un bout de code qui ne la fait pas

```cpp
Ellipse* current = new Ellipse;
current = liste.first;
while (current != nullptr)
{
	// ...
}
```

La première ligne de cette fonction va créer un objet, il va l’allouer dans la mémoire grâce à new. On parle ici d’**instanciation**, nous y reviendrons.

La deuxième quant à elle va faire pointer `current` vers un objet existant ailleurs (dans `liste.first`).  

L’erreur vient surement d’une confusion sur l’initialisation d’un pointeur:

:::info
💡 `new` permet de créer un nouvel objet dans la mémoire et pas de créer un pointeur.
:::

un pointeur est créé à partir du moment où vous déclarer une variable avec `*` et vous devez distinguer le “**pointeur**” de l”**instance**”.

“Ah mais qu’est ce que c’est donc qu’une instance ?”

“Merci personne aléatoire que je n’ai pas payé pour poser cette question”

### Instance

J’ai parlé ci-dessus d’”objet”, on pourrait aussi parler d’”instance” (désolé il n’y a pas de mot bien définis pour ce dont je vais parler). 

En programmation (on va parler de C++ ici), il y a des “types” de données. On peut retrouver des types natives (ou fondamentaux) qui viennent directement avec le langage (int, bool, float, string…) et des types qu’on peut créer et qui va contenir un ensemble de données (des structures ou des classes mais aussi des enum). 

Ces types décrivent comment une donnée (en binaire) va prendre forme. Et quand je déclare une variable d’un certain type, je veux créer une donnée qui doit prendre cette forme. On dit qu’on crée une instance de ce type. L’instance est un élément unique là où le type décrit une donnée générique. 

Quand je déclare des variables

```cpp
int a;
string nom_etudiant1;
Human steeve;
```

`a` est une instance de ***int***, `nom_etudiant1` est une instance de ***string*** et `steeve` est une instance d’une structure ***Human***.

Bon où je veux en venir avec tout ça ? (non c’est une vrai question, qu’est ce que je voulais faire ?)

Bon c’est pas grave, faisant une parenthèse pour ceux qui n’ont pas encore appréhendé les structures, voyons ce code:

**Parenthèse:**

```cpp
struct Human
{
	string first_name;
	string last_name;
}

void display_human_name(Human human)
{
	cout << ?;
}
```

Ici je veux afficher le nom d’un humain, et d’un humain spécifique, pas de l’entité “humain” (pas de l’humanité). Je vais donc manipuler `human` et pas `Human`. On manipule l’instance, pas le type.

Je pourrais reformater le code:

```cpp
void display_human_name(Human a_specific_human)
{
	cout << a_specific_human.first_name;
}
```

Je ferme la parenthèse, dite moi si c’est pas claire ou à l’inverse si c’est trop obvious.

Oui donc les instances au final pour les pointeurs. Reprenons l’erreur que j’avais souligné.

```cpp
void parcours_liste(List* list)
{
	Ellipse* current = new Ellipse;
	current = list->first;
	while (current != nullptr)
	{
		// ...
		current = current->next;
	}
}

int main()
{
	List l;
	Ellipse ellipse1;
	Ellipse ellipse2;

	l.first = &ellipse1;
	ellipse1.next = &ellipse2;

	parcours_liste(l);
}
```

`new Ellipse` va créer une nouvelle instance du type Ellipse. **Or** il existe déjà des instances d’ellipses, celles qu’on veut parcourir. Ces instances sont celles créés dans le `main`. Le pointeur `current` ne va servir qu’à parcourir ces instances d’ellipses et en aucun cas les recréer. C’est ce qu’on appelle un “itérateur”, c’est un pointeur qui permet de se balader dans une structure de données.

Modifions un peu le code

```cpp
int main()
{
	List l;

	l.first = new Ellipse;
	l.first->next = new Ellipse;

	parcours_liste(l);
}
```

Le code fait exactement la même chose, sauf que le j’alloue de la mémoire “à la volet” pour créer les ellipses de la liste. Je les instancie d’une autre manière. Les instances se crée dans le Tas et pas dans la pile.

<aside>
💡 En java, C#, javascript, python… toutes les instances/tous les objets sont instancié.e.s “à la volet”

</aside>


## Optimisation

### chaines de caractères VS entiers (énumération)

Comparer des chaines de caractères nécessite plus de calcul que comparer des entiers. En effet, une chaîne de caractère est une suite de caractères qui nécessite d’être parcouru (entièrement ou partiellement) pour être comparé. Alors qu’un entier est une valeur numérique qui peut être comparé directement.

Dans le cas où vous avez des chaines de caractères qui représentent des modes, des états, des types ... que l'on connaît à l'avance, il est préférable de les comparer en utilisant des entiers plutôt que de passer par des chaines de caractères.

```cpp
void move_player(Player & player, string const& direction)
{
	if (direction == "left")
	{
		// ...
	} 
	else if (direction == "right")
	{
		// ...
	}
    else if (direction == "up")
    {
        // ...
    }
	else if (direction == "down")
    {
        // ...
    }
    else 
    {
        // ... ?
    }
}
```

Mais on peut utiliser une **énumération** pour définir les différent cas et les comparer directement (chaque valeur de l’énumération est représenté par un entier).

```cpp
enum class Direction 
{
	Left,
    Right,
    Up,
    Down,
}

void move_player(Player & player, Direction const direction)
{
    if (direction == Direction::Left)
    {
        // ...
    } 
    else if (direction == Direction::Right)
    {
        // ...
    }
    else if (direction == Direction::Up) {

    }
    else // if (direction == Direction::Down)
    {
        // ...
    }

    // Ou encore mieux avec un switch case

    switch (direction)
    {
        case Direction::Left:
            // ...
            break;
        case Direction::Right:
            // ...
            break;
        case Direction::Up:
            // ...
            break;
        case Direction::Down:
            // ...
            break;
    }
}
```

Cela permet de réduire le temps de calcul et de rendre le code plus lisible.
Mais cela permet aussi de limiter la gestion des erreurs. Si vous avez une chaîne de caractère qui n’est égale à aucun des cas il faudra gérer le cas ou il pourrait y avoir un comportement inattendu. Avec un ***enum***, vous êtes sûr que la valeur est l’une de celles que vous avez défini. De plus l'utilisation du [switch case](/Lessons/Fundamentals/ConditionsAndLoops/#switch) n'est pas possible avec des chaines de caractères.

:::info
Comparer des chaines de quelques caractères ne représente rien pour un processeur de nos jours mais si la vitesse d'exécution du programme est un critère important C'est tout de même quelques chose à prendre ne compte.
:::

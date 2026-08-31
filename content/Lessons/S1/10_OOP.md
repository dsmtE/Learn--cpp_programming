---
title: "Class: Introduction à la Programmation Orientée Objet"
tags:
    - C++
    - POO
    - Class
---

Nous avons vu au cours précédent comment créer des **structures** pour regrouper des données et des **méthodes**. En C++, il existe un mot-clé similaire à `struct` mais conçu spécifiquement pour la **programmation orientée objet** (POO) : le mot-clé `class`.

## Struct vs Class

En C++, `struct` et `class` sont quasiment **identiques**. La seule différence est que les membres d'un `struct` sont **publics** par défaut, alors que les membres d'un `class` sont **privés** par défaut.

```cpp
struct MonStruct {
    int x {}; // public par défaut
};

class MaClasse {
    int x {}; // privé par défaut
};
```
### Visibilité des membres

**Public / Privé** ? Mais de quoi tu nous parles ? La **visibilité** des membres d'une classe ou d'une structure détermine **qui peut accéder à ces membres**.

Concrètement: 
- `public`: **tout le monde** peut y aller
- `private`: personne n'y touche sauf la classe **elle-même**
- `protected`: seulement la classe et ses classes dérivées peuvent y accéder (notion d'héritage, vue plus tard)

Il est possible de changer la visibilité d'un membre en utilisant les mots-clés `public`, `private` et `protected`. Par défaut, les membres d'une `struct` sont **publics**, tandis que ceux d'une `class` sont **privés**.

```cpp
struct MonStruct {
    int x {}; // public par défaut
private:
    int y {}; // privé
};
```

Jusque ici pour accéder aux membres d'une structure ou d'une classe, on utilisait le **point** (`.`) pour les objets et le **flèche** (`->`) pour les pointeurs. Mais si un membre est **privé**, il n'est pas accessible de l'extérieur de la structure ou de la classe.

**Comment y accéder alors ?** C'est là qu'interviennent les **méthodes** : elles permettent d'accéder aux membres privés de manière contrôlée.
Pour des méthodes dont le seul but est d'accéder à un membre privé, on parle généralement de **getters** (pour lire) et de **setters** (pour modifier) (voir plus bas).

### Quoi utiliser ?

En pratique, on utilise `struct` pour des **agrégats de données simples** (sans logique interne) et `class` pour des **objets plus complexes** avec du **comportement** et de l'**encapsulation**. Cette distinction est une **convention**, pas une obligation technique.

## Constructeur

Un **constructeur** est une méthode spéciale appelée automatiquement lors de la création d'un objet. Il permet d'**initialiser** les membres de la classe.

Le constructeur porte le **même nom** que la classe et n'a **pas de type de retour**.

### Sans liste d'initialisation

On peut initialiser les membres en les assignant dans le corps du constructeur :

```cpp
class Personne {
private:
    std::string nom {};
    unsigned int age {10};

public:
    Personne(std::string p_nom, unsigned int p_age) {
        nom = p_nom;
        age = p_age;
    }

    void Afficher() const {
        std::cout << nom << ", " << age << " ans" << std::endl;
    }
};
```

Mais attention : ici, les membres qui ont une **valeur par défaut en ligne** (comme `age {10}` dans la déclaration) sont d'abord **initialisés avec cette valeur**, puis **réassignés** dans le corps du constructeur. C'est comme remplir un verre déjà plein : on gaspille une opération. Pour les membres sans valeur par défaut (comme `nom` de type `std::string`), le constructeur par défaut est appelé, puis la valeur est aussi réassignée.

### Avec liste d'initialisation

La **liste d'initialisation** (après le `:`) initialise directement les membres, sans passer par une valeur par défaut intermédiaire :

```cpp
Personne(std::string nom, unsigned int age)
    : nom {nom}, age {age}  // liste d'initialisation
{}
```

```cpp
int main() {
    Personne p {"Alice", 25};
    p.Afficher(); // Affiche: Alice, 25 ans
}
```

:::note
La **liste d'initialisation** est la façon recommandée d'initialiser les membres d'une classe en C++. Elle est plus efficace et plus propre que d'assigner les valeurs dans le corps du constructeur.
:::

:::warning
**Ordre d'initialisation** : les membres sont toujours initialisés dans l'**ordre de leur déclaration** dans la classe, **pas** dans l'ordre où ils apparaissent dans la liste d'initialisation. Ce dernier ordre est ignoré. Par exemple :

```cpp
class Exemple {
    int a;
    int b;
public:
    // On écrit b en premier, mais a est initialisé en premier car déclaré en premier
    Exemple(int val) : b{val}, a{b} {} // a aura une valeur indéterminée !
};
```

C'est une source d'erreurs courante. Pour l'éviter, écrivez les membres dans la liste d'initialisation **dans le même ordre** que leur déclaration.
:::

### Que se passe-t-il sans initialisation ?

Si un membre n'est **ni** dans la liste d'initialisation, **ni** assigné dans le corps du constructeur, son comportement dépend du type :

- Types intégrés (`int`, `float`, etc.) → **valeur indéterminée** (danger !)
- `std::string` → constructeur par défaut appelé → `""`
- **Objets avec constructeur par défaut → constructeur par défaut appelé**

```cpp
class Exemple {
private:
    int x;           // PAS initialisé → valeur indéterminée !
    std::string nom; // un constructeur par défaut existe pour cette classe donc il est appelé → ""

public:
    Exemple() {} // x a une valeur indéterminée, nom est ""
};
```

:::warning
Ne jamais laisser un membre de type intégré (`int`, `float`, `char`, etc.) sans initialisation. Utilisez toujours `{}` pour garantir une valeur à zéro :
:::

```cpp
int x {};   // initialisé à 0 ✅
int y;      // valeur indéterminée ❌
```

### Constructeur par défaut

Si aucun constructeur n'est défini, le compilateur en génère un **par défaut** qui effectue une **initialisation par défaut** de chaque membre. Le comportement dépend de chaque membre :

- **Membre avec une valeur par défaut en ligne** (`float x {}`) → cette valeur est utilisée
- **Membre sans valeur par défaut** (`int y`) → **default-initialisé** : constructeur par défaut pour les types classe, **valeur indéterminée** pour les types intégrés

```cpp
class Point {
    float x {0.0f};    // valeur par défaut en ligne → sera initialisé à 0
    float y {};    // idem
    int z;         // PAS de valeur par défaut → valeur indéterminée !

public:
    Point() = default; // x et y vaudront 0, z sera indéterminé
};
```

On peut aussi le demander explicitement :

:::tip
On préfère donc utiliser `= default` pour demander un constructeur par défaut plutôt que de l'écrire soi-même (pour éviter les erreurs et garder le code propre) sauf si on veut faire quelque chose de spécifique dans le constructeur.
:::

## Getters et Setters

Pour accéder aux membres privés, on définit des **méthodes** publiques appelées **getters** (pour lire) et **setters** (pour modifier).

```cpp
class Personne {
private:
    std::string nom;
    unsigned int age;

public:
    Personne(std::string nom, unsigned int age)
        : nom {nom}, age {age}
    {}

    // Getter
    std::string GetNom() const {
        return nom;
    }

    // Setter avec validation
    void SetAge(unsigned int nouvelAge) {
        if (nouvelAge < 150) {
            age = nouvelAge;
        }
    }

    unsigned int GetAge() const {
        return age;
    }
};
```

Les **setters** permettent d'ajouter de la **validation** lors de la modification des données, ce qui serait impossible avec un accès direct aux membres.

## Encapsulation

L'**encapsulation** est un principe fondamental de la POO : on **masque** les détails internes d'un objet et on ne exposes que ce qui est nécessaire via une **interface publique**.

```cpp
class Guerrier {
private:
    std::string nom {};
    int points_de_vie {};

public:
    Guerrier(std::string const nom, int const pdv)
        : nom {nom}, points_de_vie {pdv}
    {}

    void RecevoirDegats(int const degats) {
        if (degats > 0) {
            points_de_vie -= degats;
            if (points_de_vie < 0) points_de_vie = 0;
        }
    }

    void Soigner(int const soins) {
        if (soins > 0) {
            points_de_vie += soins;
            if (points_de_vie > 100) {
                points_de_vie = 100;
            }
        }
    }

    void Afficher() const {
        std::cout << nom << " - HP: " << points_de_vie << "/100" << std::endl;
    }
};
```

Ici, `points_de_vie` est **privé** : on ne peut pas le modifier directement de l'extérieur. On passe par les méthodes `RecevoirDegats` et `Soigner` qui contrôlent l'accès et appliquent des **règles** (pas de dégâts négatifs, HP plafonné à 100, etc.).

```cpp
int main() {
    Guerrier hero {"Aragorn", 80};
    hero.Afficher(); // Aragorn - HP: 80/100

    hero.RecevoirDegats(30);
    hero.Afficher(); // Aragorn - HP: 50/100

    hero.Soigner(60);
    hero.Afficher(); // Aragorn - HP: 100/100 (plafonné)

    // Erreur : 'points_de_vie' est un membre privé
    // hero.points_de_vie = 999;
}
```

:::tip Bonne pratique
Utilisez `private` par défaut et ne rendez **public** que ce qui doit être accessible de l'extérieur. Cela protège l'intégrité des données et rend le code plus facile à maintenir.
:::

:::note
⚠️ Logique l'implique pas **"Utilisation de classe"**. Il est tout aussi possible d'utiliser des `struct` avec des méthodes ou encore des fonctions libres pour manipuler des données. La POO est un paradigme de programmation, pas une obligation d'utiliser des classes.
:::

## Résumé

- En C++, `struct` et `class` sont techniquement quasiment identiques. La différence est donc seulement la visibilité par défaut des membres le reste est plutôt une **convention** : `struct` pour des agrégats de données simples, `class` pour des objets avec encapsulation et de la logique.
- L'**encapsulation** consiste à masquer les détails internes (`private`) et à ne exposer qu'une interface publique (`public`).
- Un **constructeur** est une méthode spéciale appelée à la création d'un objet pour l'initialiser.
- Les **getters** et **setters** permettent de contrôler l'accès aux membres privés.

## À suivre : Héritage

Vous êtes maintenant capables de créer des classes avec de l'encapsulation, des constructeurs, et des getters/setters. Mais que se passe-t-il quand on veut créer une **nouvelle classe** à partir d'une classe existante ? C'est l'**héritage**, un autre pilier de la POO qui sera plutôt abordé l'année prochaine.

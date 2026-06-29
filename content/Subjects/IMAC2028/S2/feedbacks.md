---
title: Retours Généraux
tags:
    - C++
---

Retours suite aux présentations du projet Island Viewer.

## C++

### Noms de variables explicites

Plusieurs implémentations du Poisson disk sampling avaient des noms peu clairs, rendant difficile la compréhension de l'algorithme. Utilisez toujours des noms de variables explicites qui décrivent clairement leur rôle : `cell_grid`, `point_candidates`, `minimum_distance` plutôt que `grid`, `pts`, `r`.

Cela est particulièrement important pour les algorithmes complexes où le nom de la variable aide à comprendre ce qu'elle représente.

Voir aussi : [Nommage des variables (2027 S2)](/Subjects/IMAC2027/S2/Feedbacks#nommage-des-variables)

### Séparation des responsabilités des fonctions

Il faut, autant que possible, séparer les responsabilités des fonctions. Par exemple, la fonction de génération de bruit **ne doit pas** s'occuper d'appliquer le masque. Cela permet de tester et de **réutiliser** les fonctions plus facilement. Cela permet également (si elle est bien nommée) de comprendre ce qu'elle fait à la simple lecture de sa signature.

Je vous invite à relire ce point dans des retours précédents : [Séparation des responsabilités](/Subjects/IMAC2026/S1/feedbacks#séparation-des-responsabilités)

### Utilisation de `enum` vs `enum class`

Plusieurs groupes ont utilisé `enum` simple au lieu de `enum class` (pour gérer les biomes entre autres). Préférez toujours `enum class` car cela fournit une meilleure encapsulation et évite les conflits de noms.

**Exemple :**

```cpp
// ❌ Mauvais
enum Biome {
    Forest, Mountain, Water
};

// ✅ Bon
enum class Biome {
    Forest, Mountain, Water
};
```
Vous pouvez retrouver la partie du cours qui en parle : [ici](/Lessons/S1/Variables#enum-un-type-supplémentaire)

## Algorithmes

### Implémentation et visualisation étape par étape

Pour bien comprendre le fonctionnement de votre algorithme, il est important de visualiser les différentes étapes. Cela permet de valider que chaque étape fonctionne correctement avant de passer à la suivante. Par exemple, pour le Poisson disk sampling, vous pouvez visualiser les points candidats, les points actifs, et les points finaux séparément à chaque étape de l'algorithme.
Pour le bruit, vous pouvez visualiser le bruit seul, le masque seul, et le résultat final après application du masque.

Ces conseils sont valables pour tous les algorithmes et projets que vous réalisez. La visualisation étape par étape est un outil puissant pour le débogage et la compréhension. Si la visualisation n'est pas possible, vous pouvez également utiliser des logs ou des prints pour suivre l'évolution de vos données à chaque étape. Commencer par un cas simple et augmenter la complexité progressivement est une bonne pratique pour valider votre algorithme.

En bonus, ces visualisations sont généralement très appréciées lors des présentations, car elles permettent de montrer votre compréhension et votre maîtrise de l'algorithme.

### Normalisation et exposition des paramètres de bruit

Certains groupes ont eu des problèmes avec :
- Un bruit qui dépasse la plage [0, 1] ou [-1, 1]
- Paramètres redondants (`frequency` et `lacunarity` faisant la même chose)
- Paramètres inversés ou mal nommés

**Conseils :**
- Normalisez vos valeurs de bruit dans la plage cohérente (généralement [-1, 1])
- Exposez clairement les paramètres dans l'interface (scale, lacunarity, gain, octaves)
- Testez avec des exemples avant/après pour valider le comportement en ne faisant varier qu'un paramètre à la fois.

### Masque radial, clamp et visualisation

Plusieurs implémentations de masques radial avaient des soucis de centrage ou de valeurs inversées (-1 vs 1). 

**Bonne pratique :** Créez une option pour afficher le masque seul (sans bruit), cela permet de déboguer rapidement les problèmes de centrage ou de falloff. Un masque gaussien doit tomber à 0 en bordures et à 1 au centre.

Voir aussi : [Optimisation prématurée (2027 S2)](/Subjects/IMAC2027/S2/Feedbacks#optimisation-prématurée)

### Compréhension de l'algorithme de Poisson Disk Sampling

L'intérêt principal de l'algorithme de Poisson disk (vs génération aléatoire naïve) est l'utilisation d'une **grille spatiale pour accélérer les recherches** de voisinage. Plusieurs groupes n'ont pas explicité ce point lors de la présentation.

- **Pourquoi la grille ?** Elle réduit la complexité de vérifier si un nouveau point candidat est à la bonne distance : au lieu de parcourir TOUS les points, on ne regarde que les cellules voisines.
- **Avantage prédominant ?** Distribution uniforme + performance O(n) au lieu de O(n²)

Montrez cette compréhension lors de la présentation (schéma, explication rapide) plutôt que de ré-expliquer l'algorithme complet.

### Simplex noise vs Perlin

Plusieurs groupes ont tenté une implémentation maison de Simplex noise. C'est très bien, mais il faut s'assurer de bien comprendre les différences et la structure, c'est ce qu'il est important de montrer lors de la présentation. Si le code provient d'une ressource externe, il faut le mentionner explicitement (source + commentaire).

### SDF (Signed Distance Function) pour masques variés

Quelques groupes ont mentionné et utilisé des **SDF** pour créer des formes d'îles plus variées (croissant, donut, étoile, cœur, etc.) plutôt que juste une gaussienne radiale. C'est une excellente amélioration et un bon usage de concepts géométriques.

Voilà un article très intéressant sur les SDF en 2D : [2D distance functions](https://iquilezles.org/articles/distfunctions2d/)

**Note :** Les SDF permettent de composer facilement différentes formes et de les combiner (union, intersection, différence).

## Autres

### Git Branches et répartition

Quelques groupes ont eu des problèmes de répartition du travail et de gestion des branches Git. Voici quelques conseils pour éviter les conflits et faciliter la collaboration :

- Évitez une **branche par personne** : cela complique généralement les merges
- Préférez des **branches par fonctionnalité** (ex: `feature/poisson-disk`, `feature/biomes`)
- Faites des **commits fréquents et bien nommés** pour documenter la progression (pas seulement pour le correcteur, mais aussi pour vous-même et les membres de votre équipe si vous devez revenir en arrière)

### Modèles 3D : flottement et transformations

Plusieurs modèles 3D semblaient "flotter" au-dessus du terrain. Points à vérifier :
- Rotation du modèle ? (Y ou autre axe ?)
- Offset de position appliqué ?
- Scaling différent entre mesh et position calculée ?
- Correction scale par modèle vs normalisation globale ?

Pour déboguer : visualisez le mesh seul, sans la heightmap, pour vérifier son positionnement.

En réalité, la fonction fournie qui permet de récupérer la hauteur du terrain n'utilise pas une interpolation appropriée (interpolation bilinéaire) pour obtenir la hauteur exacte du terrain à une coordonnée qui tombe entre les points de la heightmap. Cela peut causer des flottements si le modèle est placé à une position qui ne correspond pas exactement à un point de la heightmap.

## Présentation

### Code dans les slides

Quelques groupes ont mis trop de code dans les slides de présentation. L'objectif n'est pas de montrer chaque ligne, mais d'expliquer :
- Votre **compréhension** de l'algo (schéma, étapes)
- Vos **choix techniques** (pourquoi OKLab ? pourquoi cette formule pour le masque ?)
- Les **avant/après** avec paramètres variés

Une grosse présentation de code rend difficile de suivre votre logique. Privilégiez les captures d'écran comparatives.

### Montrer la compréhension, pas l'explication

Généralement le correcteur/jury qui vous a donné le sujet connaît déjà l'algorithme, donc il n'est pas nécessaire de le ré-expliquer dans les moindres détails. Ce que l'on veut voir, c'est que vous avez compris le fonctionnement et les implications de l'algorithme, et comment vous l'avez appliqué à votre projet.

- ❌ **Ré-expliquer l'algo** : "Poisson disk c'est générer des points autour d'un point actif..."
- ✅ **Montrer qu'on a compris** : Schéma simple de la grille, + démonstration visuelle du résultat, utilisation de la grille pour accélérer les recherches, etc.

Ce que l'on veut voir, c'est que vous avez **maîtrisé** et **compris** le sujet, et comment vous l'avez **appliqué à votre projet**, pas une redite de l'algorithme, du code source, ou même du cours.

Voir aussi : [Présentation (2027 S2)](/Subjects/IMAC2027/S2/Feedbacks#présentation)

### Post-mortem

N'oubliez pas la section "Post-mortem" :
- Qu'est-ce qui a bien fonctionné ?
- Quels problèmes avez-vous rencontrés et comment les avez-vous résolus ?
- Que feriez-vous différemment avec plus de temps ?
- Comment s'est passée la répartition du travail ?

Soyez honnêtes. Un rapport qui mentionne les obstacles surmontés vaut mieux qu'un rapport qui prétend que tout était parfait.

Montrer comment vous avez **résolu les problèmes** rencontrés est plus intéressant que ne pas les mentionner du tout. Cela montre votre capacité à **analyser** et **résoudre** des problèmes, ce qui est une compétence clé en développement logiciel.

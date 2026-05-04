---
title: Sujet IMAC Island Viewer
author:
  - Enguerrand DE SMET
geometry: margin=2cm

sidebar_position: 0
---

# IMAC ISLAND VIEWER

**Projet de programmation et algorithmique C++**

*- IMAC E3 -*

---

**Nombre de personnes par projet** : 2

**Date de rendu** : à compléter

**Soutenance** : à compléter

---

# Introduction

Dans ce projet, vous allez concevoir un générateur d'îles procédurales en C++.

Le projet s'appuie sur un squelette contenant déjà :
- une application C++ avec CMake
- un affichage 3D interactif d'une île (maillage + texture) utilisant **Raylib**
- des points/objets affichés sur le terrain
- des paramètres manipulables dans une UI simple (**ImGui**)

Votre travail va être de remplacer les implémentations de génération de la heightmap et de distribution des points par des algorithmes plus avancés :
- **Bruit fractal (FBM)** pour la heightmap
- **Poisson disk sampling** pour la distribution des points

Ainsi que d'ajouter des fonctionnalités supplémentaires pour améliorer la qualité de la génération.

# Cahier des charges

## Contraintes générales

- Le projet doit compiler avec cmake et s'exécuter sur Linux ou Windows
- Le code doit être organisé en fichiers `.cpp` / `.hpp` cohérents
- Le projet doit être versionné avec Git
- Le rendu doit inclure le code source du projet avec vos ajouts ainsi qu'un fichier `README.md` faisant office de présentation et de rapport de votre travail.
- Un minimum de commits (de tout les membres du groupe) est attendu pour valider le projet (un commit de dernière minute avec tout le code ajouté d'un coup sera sanctionné)

## Objectifs algorithmiques obligatoires

### 1) Bruit fractal (FBM)

Implémenter une fonction de bruit fractal (FBM) qui accumule plusieurs "octaves" de bruit de base (ex: Perlin) pour produire une heightmap plus riche et naturelle.

Attendus :
- implementation d'une fonction `octaveNoise` qui prend en entrée une position, une fonction de bruit de base, et des paramètres pour générer un bruit fractal (accumulation d'octaves, lacunarity, gain)
- exposition de paramètres dans l'interface pour permettre l'exploration visuelle
- Résultat du noise normalisé (dans l'intervalle [0,1])
  
Vous trouvez de nombreuses ressources en ligne sur le sujet: https://thebookofshaders.com/13/?lan=fr

### 2) Génération de heightmap

Réécrire la génération de la carte de hauteur pour produire une île procédurale crédible.

Attendus :
- combiner le bruit fractal avec un masque radial (ou autre de votre choix) pour créer une forme d'île
- conversion des valeurs de bruit en couleurs pour texturer le maillage (ex: bleu pour mer, vert pour plaine, gris pour montagne) (une implementation simple de remapping linéaire est demandé, le reste sera considéré comme du bonus)
- exposer les paramètres de génération dans l'interface
- résultat final normalisé/contraint pour rester dans une plage cohérente

### 3) Distribution de points par Poisson disk sampling

Remplacer la génération aléatoire naïve de positions 2D par un algorithme de **Poisson disk sampling** et particulièrement la version "Bridson's algorithm".

Attendus :
- génération de points dans l'espace normalisé `[0,1] x [0,1]`
- distance minimale entre deux points respectée
- paramètres contrôlables (rayon, essais avant rejet, nombre max éventuel)

### 4) Placement des objets sur le terrain

Les points 2D générés sont projetés sur le terrain via l'échantillonnage de la heightmap.

Attendus :
- Ajouter une possibilité de filtrage des points générés en fonction de la hauteur du terrain (ex: pas de points dans la mer, ou au sommet des montagnes)

### 5) Améliorations

Une fois les objectifs principaux atteints, vous pouvez implémenter au moins une amélioration parmi les suggestions listées à la fin de ce document ou proposer votre propre idée d'amélioration (à valider).

# Interface minimale attendue

Votre interface doit permettre au minimum :
- de regénérer la heightmap
- de regénérer le maillage
- de regénérer les positions
- de modifier les paramètres principaux (seed, échelle, résolution, etc).

L'objectif n'est pas une interface complexe, mais un outil de debug/exploration efficace.

# Rapport

Le rapport (court, 2 à 4 pages) doit contenir :
- les choix algorithmiques faits
- les paramètres retenus et leur impact visuel
- les difficultés rencontrées et solutions
- quelques captures d'écran comparatives
- un mini post-mortem (sur ce que vous auriez aimé faire de plus si vous aviez eu plus de temps, la répartition du travail dans le groupe, etc.)

# Notation (indicative)

- Implémentation du bruit fractal (FBM) : **/2**
- Génération de heightmap (couleurs, masque "radiale", etc) : **/4**
- Poisson disk sampling  : **/6**
- Qualité code / architecture / CMake / README : **/2**
- Améliorations : **/4**
- Rapport de qualité : **/2**

Total : **/20**

# Améliorations possibles

Voilà quelques idées de bonus que vous pouvez implémenter si vous avez du temps après avoir rempli les objectifs principaux. Ce ne sont que des suggestions, n'hésitez pas à être créatifs et à proposer vos propres idées !
- Ajout de plusieurs types de bruits (Simplex, Worley, etc) et possibilité de les combiner.
- Génération de différentes formes d'îles (ex: île en croissant, île avec un lac intérieur, etc) via des masques plus complexes.
- Texture plus avancé (ex: mélange de textures en fonction de la pente, de l'altitude, etc).
- Distribution d'objets plus intelligente (ex: arbres sur les pentes douces, rochers sur les pentes raides, etc).
- Ajout de biomes (ex: plage, forêt, montagne) qui peuvent avoir différents type d'impact sur la génération (différentes couleurs, différentes règles de distribution d'objets, différents types de bruit, etc).
- import d'un mesh 3D pour le placement d'objets (ex: un modèle de'arbre) plutôt que des cube simples (il existe des [exemples](https://www.raylib.com/examples.html) de chargement de mesh dans raylib).

# Conseils de réalisation

- Commencez par valider chaque brique séparément avant de les combiner:
  - bruit unitaire
  - accumulation octaves
  - masque d'île
  - Poisson disk
- Privilégiez la lisibilité et la stabilité à la complexité inutile
- Faite des commits fréquents et bien nommés pour documenter votre progression

// TODO: ajouter des ressources utiles (exemple raylib)
// TODO: les retards de rendu seront également sanctionnés (si cas exceptionnel, il faut me prévenir à l'avance et pas le jour du rendu ou de la présentation)
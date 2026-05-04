---
title: Sujet IMAC Island Viewer
author:
  - Enguerrand DE SMET
geometry: margin=2cm

sidebar_position: 0
---

import './customStyles.css';

import IMAC_logo from './imgs/IMAC_logo.png';
import islandTemplate from './imgs/islandTemplate.jpg';
import islandExempleResult from './imgs/islandExempleResult.jpg';
import islandExempleResult2D from './imgs/islandExempleResult2D.jpg';

<div style={{ width: '30%', float: 'left' }}>

<img alt="Logo IMAC" src={IMAC_logo} style={{width: 200}} />

</div>

<div style={{ width: '70%', float: 'right', textAlign: 'center'}}>

# IMAC ISLAND VIEWER

**Projet de programmation et algorithmique C++**

*- IMAC E3 - 2025-2026 -*

</div>

<div style={{ clear: 'both' }}/>

---

**Nombre de personnes par projet** : 2

**Date de rendu** : à compléter

**Soutenance** : à compléter

---

# Introduction

Pour mettre en pratique les connaissances acquises en programmation et algorithmique vous allez concevoir un générateur d'îles procédurales en C++.

Le projet s'appuie sur un squelette contenant déjà :
- une application C++ avec CMake
- un affichage 3D interactif d'une île (maillage + texture) utilisant **Raylib**
- des points/objets affichés sur le terrain
- des paramètres manipulables dans une UI simple (**ImGui**)

Voilà ce qu'affiche l'application fournie:

<img src={islandTemplate} width="600" class="center" />

Votre travail va être de remplacer les implémentations de génération de la heightmap, de la couleur du terrain et de distribution des points par des algorithmes plus avancés :
- **Bruit fractal (FBM)** pour la heightmap
- **Coloration** avec interpolation linéaire en fonction de la hauteur (valeur dans la heightmap)
- **Poisson disk sampling** pour la distribution des points

Ainsi que d'ajouter des fonctionnalités supplémentaires pour améliorer la qualité de la génération et de l'application en général.

## Cahier des charges

Voici les indications que vous devez respecter pour ce projet. Néanmoins, si vous souhaitez modifier/adapter certains points, vous devez au préalable faire valider ces changements.

### Contraintes générales

- **Compilation**: Un système de compilation **CMake** devra être intégré à votre projet. Votre projet devra contenir tout ce qui permet de le compiler et fonctionner sur Linux ou Windows (plateforme de développement à préciser dans le rapport). Si développement sur **macOS**, pensez à tester votre programme sur une autre machine afin que l'on puisse le compiler sur Linux ou Windows afin de le tester.
- Le code doit être organisé en fichiers `.cpp` / `.hpp` cohérents
- Le projet doit être versionné avec **Git**
- Le rendu doit inclure le code source du projet avec vos ajouts ainsi qu'un fichier `README.md` faisant office de présentation et de rapport de votre travail.
- Un minimum de commits (de tout les membres du groupe) est attendu pour valider le projet (un commit de dernière minute avec tout le code ajouté d'un coup sera sanctionné)
- Le projet est à faire par **binôme** ou **trinôme**. Les **trinômes** devront obligatoirement réaliser **deux** fonctionnalités supplémentaires par rapport aux binômes qui devront en ajouter qu'une. Si vous choisissez une amélioration qui n'est pas dans la liste des améliorations suggérées, vous devrez nous en faire part pour la faire valider.
- Les **retards** de rendu seront également sanctionnés (si cas exceptionnel, il faut me prévenir à l'avance et pas le jour du rendu ou de la présentation)

## Objectifs algorithmiques obligatoires

### 1) Bruit fractal (FBM)

Implémenter une fonction de bruit fractal (FBM) qui accumule plusieurs "octaves" de bruit de base (ex: Perlin) pour produire une heightmap plus riche et naturelle.

#### Attendus :
- implementation d'une fonction `octaveNoise` qui prend en entrée une position, une fonction de bruit de base, et des paramètres pour générer un bruit fractal (accumulation d'octaves, lacunarity, gain)
- exposition de paramètres dans l'interface pour permettre l'exploration visuelle
- Résultat du noise normalisé (dans l'intervalle [0,1])
  
Vous trouvez de nombreuses ressources en ligne sur le sujet: https://thebookofshaders.com/13/?lan=fr

### 2) Génération de heightmap et couleurs

Réécrire la génération de la carte de hauteur pour produire une île procédurale crédible.

#### Attendus
- combiner le **bruit fractal** avec un **masque radial** (ou similaire de votre choix) pour créer une forme d'île.
- résultat final normalisé/contraint pour rester dans une plage cohérente
- 
- conversion des valeurs de bruit en couleurs pour texturer le maillage (ex: bleu pour mer, vert pour plaine, gris pour montagne) (une implementation simple de remapping linéaire est demandée mais il est possible d'aller plus loin en améliorations)
- exposer les paramètres de génération dans l'interface

### 3) Distribution de points par Poisson disk sampling

Remplacer la génération aléatoire naïve de positions 2D par un algorithme de **Poisson disk sampling** et particulièrement la version "Bridson's algorithm".

//TODO: exemple brièvement l'idée de l'aglgorithme

Exemple de répartition utilisant cet algorithme:
<img src={islandExempleResult2D} width="600" class="center" />

#### Attendus
- génération de points dans l'espace normalisé `[0,1] x [0,1]`
- distance minimale entre deux points respectée
- paramètres contrôlables (rayon, essais avant rejet, nombre de points maximum éventuel)

### 4) Placement des objets sur le terrain

Les points 2D générés sont projetés sur le terrain via l'échantillonnage de la heightmap.

#### Attendus
- Ajouter une possibilité de filtrage des points générés en fonction de la hauteur du terrain (ex: pas de points dans la mer, ou au sommet des montagnes)

### 5) Améliorations

Une fois les objectifs principaux atteints, vous devez implémenter au moins une amélioration parmi les suggestions listées à la fin de ce document ou proposer votre propre idée d'amélioration (à valider).

Les **trinômes** devront obligatoirement réaliser **deux** amélioration supplémentaires par rapport aux binômes.


### Résultat 

Voilà un exemple de résultat final que vous pouvez viser (mais n'hésitez pas à être créatifs et à faire votre propre style d'île):

<img src={islandExempleResult} width="600" class="center" />

## Interface minimale attendue

Votre interface doit permettre au minimum :
- de regénérer la heightmap
- de regénérer le maillage
- de regénérer les positions
- de modifier les paramètres principaux (seed, échelle, résolution, etc).

L'objectif n'est pas une interface complexe, mais un outil de debug/exploration efficace.

Le projet fourni un exempl d'UI via **raylib** et **imGui**.

## Rapport

Le rapport doit contenir :
- les choix algorithmiques faits
- les paramètres retenus et leur impact visuel
- les difficultés rencontrées et solutions
- quelques captures d'écran comparatives

Ajoutez enfin une partie "Post mortem" pour analyser le travail fourni, qu'est ce qui a bien fonctionné, quels ont été les problèmes rencontrés, comment vous les avez surmontés, auriez-vous fait différemment ? Avec plus de temps, qu'est ce que vous pourriez ajouter ? Comment s'est passé la répartition du travail dans le groupe ?

Le rapport doit être concis par exemple 2 à 5 pages sans les illustrations.

## Notation (indicative)

Voilà un barème non definif à titre indicatif:

- Implémentation du bruit fractal (FBM) : **/2**
- Génération de heightmap (couleurs, masque "radiale", etc) : **/4**
- Poisson disk sampling  : **/4**
- Améliorations : **/4**
- BONUS : **/3**
- Qualité du code : **/2**
- Rapport : **/2**

Total : **/20**

## Améliorations suggérées

Voilà quelques idées d'amélioration que vous pouvez implémenter. Ce sont des suggestions, n'hésitez pas à être créatifs et à proposer vos propres idées (à valider avec l’enseignant):

- Ajout de plusieurs types de bruits (Simplex, Worley, etc) **et** possibilité de les combiner.
- Génération de différentes formes d'îles (ex: île en croissant, île avec un lac intérieur, etc) via des masques plus complexes.
- Couleurs/textures plus avancées (ex: mélange de textures en fonction de la pente, d'un type de biomes etc).
- Distribution de plusieurs type d'objets avec conditions (ex: arbres sur les pentes douces, rochers sur les pentes raides, etc).
- Ajout de biomes (ex: plage, forêt, montagne) qui peuvent avoir différents type d'impact sur la génération (différentes couleurs, différentes règles de distribution d'objets, différents types de bruit, etc).
- import d'un mesh 3D pour le placement d'objets (ex: un modèle de'arbre) plutôt que des cube simples (il existe des [exemples](https://www.raylib.com/examples.html) de chargement de mesh dans raylib).
- Detection des îles (pouvoir detecter les zones connectés sur la même iles sans passé par la "mer" (niveau d'elevation inférieur ou égal à 0) pour pouvoir faire varier des couleurs, placement d'objets, ajouter des ponts (plus difficiles) ) Ce genre d’algorithme d'appel "connected components detection", vous pouvez trouver un article qui en parle [ici](https://www.redblobgames.com/pathfinding/distance-to-any/#islands).

## Conseils de réalisation

- Commencez par valider chaque brique séparément avant de les combiner:
  - bruit unitaire
  - accumulation octaves
  - masque d'île
  - coloration en fonction d'une valeur de hauteur
  - Poisson disk sampling
- Privilégiez la lisibilité et la stabilité à la complexité inutile
- Faite des commits **fréquents** et bien nommés pour documenter votre progression

// TODO: ajouter des ressources utiles (exemple raylib)
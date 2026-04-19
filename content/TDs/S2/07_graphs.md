---
title: TD7 - Graphes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Dans ce TD, vous allez travailler sur un projet C++ fourni basé sur des données OpenStreetMap (OSM): extraction du graphe, simplification, puis visualisation avec **raylib**.

Le code de départ est fourni ici: <a target="_blank" href={ useBaseUrl("/code/S2/osmGraph.zip") } download={"osmGraph.zip"}>osmGraph.zip</a>.

Un fichier README est inclus dans le projet pour détailler le contenu du code fourni.

## Objectifs

- Manipuler un graphe pondéré orienté dans un contexte réel (données OSM).
- Lire et comprendre une base de code C++ modulaire (commandes, structures de données, visualisation).
- Implémenter puis tester un algorithme de plus court chemin (Dijkstra).

## Mise en place

1. Téléchargez et décompressez <a target="_blank" href={ useBaseUrl("/code/S2/osmGraph.zip") } download={"osmGraph.zip"}>osmGraph.zip</a>.
2. Ouvrez le dossier dans VS Code.
3. Configurez et compilez le projet avec CMake.
4. Lancez le binaire sans arguments pour voir l'aide des commandes disponibles.

Le projet contient déjà un fichier OSM de test dans `data/test.osm` ainsi qu'un fichier `.vscode/launch.json` pour faciliter le lancement en mode debug avec ce fichier de test.

## Exercice 1 - Prise en main du projet OSM

Le projet s'articule autour de quatre commandes : `extract`, `simplify`, `visualize` et `visualizeAndProcess`. Vous pouvez utiliser l'option `--help` sur chaque sous-commande pour en connaître les arguments.

Commencez par exécuter un cycle complet `extract -> simplify -> visualize` sur le fichier de test fourni (`data/test.osm`) afin de vous familiariser avec le pipeline et le résultat visuel.

## Exercice 2 - Lecture de code et compréhension

En vous appuyant sur le code du projet:

1. Identifiez où sont définies les structures principales du graphe (`WeightedGraph` / `PositionedGraph`) et expliquez brièvement leur rôle et comment elles sont utilisées.
2. Expliquez en quelques lignes le rôle des modules:
   - extraction OSM,
   - simplification,
   - visualisation.
3. Expliquez ce que vous comprenez des différentes étapes de simplification implémentées (fichier `src/simplification/simplify.cpp`) et les raisons pour lesquelles elles sont utilisées (leur impact sur la structure du graphe, les avantages/inconvénients, etc.).

## Exercice 3 - Dijkstra dans le projet OsmGraph

Vous devez implémenter Dijkstra dans le projet fourni (pas dans un mini-code séparé).

Rappel cours: [Dijkstra - plus court chemin](/Lessons/S2/graphs/#dijkstra).

:::tip Petite aide sur les fonctions à utiliser

- `Dijkstra(graph, start, end)` calcule les meilleures distances connues depuis `start`.
- Paramètres:
   - `graph`: le graphe pondéré,
   - `start`: le nœud de départ,
   - `end`: le nœud cible.
- Structure de retour: un tableau associatif de la forme `node_id -> (distance, parent)`.
   - `distance` est le coût cumulé pour atteindre `node_id`,
   - `parent` est le nœud précédent pour reconstruire le chemin.
- `dijkstra_path(...)` utilise le résultat de `Dijkstra(...)` pour reconstruire le chemin final (liste ordonnée de nœuds du départ vers l'arrivée).

:::

1. Compléter la fonction `Dijkstra(...)` dans `src/dataStructure/graphUtils.cpp`.
2. Vérifier que `dijkstra_path(...)` reconstruit correctement un chemin.
3. Tester sur le graphe chargé par le projet en mode visualisation raylib (interaction dans la fenêtre) pour afficher le chemin trouvé.

:::note
Le cours reste la référence pour l'algorithme. Ici, l'objectif est de l'intégrer dans un code existant et de valider son comportement sur un vrai graphe OSM.
:::

## Exercice 4 - Points Bonus - Ajout de fonctionnalités

Voici quelques idées de fonctionnalités supplémentaires, n'hésitez pas à être créatifs :

1. Ajouter un affichage du coût total du chemin trouvé.
2. Mesurer les temps d'exécution avant/après simplification pour une même requête de chemin.
3. Proposer une amélioration de l'UX de la visualisation (feedback, couleurs, raccourcis, etc.).
4. Modifier l'implémentation de Dijkstra pour pouvoir l'exécuter pas à pas et visualiser l'évolution de l'algorithme en temps réel.
5. Implémenter un autre algorithme de plus court chemin (A*, etc.) et comparer les résultats.

Si vous réalisez un ou plusieurs bonus, indiquez clairement dans votre rendu (ou dans un `README.md` du dossier de projet) ce qui a été ajouté.
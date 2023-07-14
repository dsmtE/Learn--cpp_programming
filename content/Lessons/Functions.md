---
title: "Fonctions : Découper son code"
tags:
    - C++
slug: ./Fonctions

sidebar_position: 5
---


// TODO scope

## Une portée limité

J'avais déjà évoqué la notion de porté (ou scope) lors de l'intruduction des stuctures de contrôle. Cette notion est aussi vrai avec les fonctions vue que le bloc d'instructions d'une fonction est contenue entre des accollades et donc restreins la porté des variables à l'intérieur de ce bloc.

C’est une bonne pratique de déclarer ses variables dans la plus petite portée possible.

Cela permet premièrement de limiter son utilisation à ce bloc et éviter une usage malencontreux plus tard. Déclarer une variable proche de son utilisation est égallement une bonne pratique qui évite de devoir chercher et parcours un code parfois long et complexe pour comprendre pourquoi cette variable est utilisée à cet endroit précis. Cela aide donc à la lecture et la compréhensiondu code.

Enfin, lorsqu’on atteint la fin d'un bloc, le programme libère dans la mémoire les emplacements qu’il avait réservés pour les variables du bloc en question.
C'est donc plus propre et plus performent (niveau impact mémoire) de déclarer les variables à l’intérieur d'un bloc (fonction, condition, etc) si elles ne sont pas destinées à être utilisées ailleurs.

---
title: CMake
tags:
    - Tools
    - C++
sidebar_position: 2
---

import { Chip } from "@mui/material";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cmake

CMake est un outil **additionnel** permettant de gérer la compilation d'un **projet**.
En effet, lorsqu'il s'agit de compiler un seul fichier il est possible de le faire manuellement avec les commandes du compilateur mais la tâche va vite se complexifier lorsqu'il va s'agir de compiler plusieurs fichiers et de gérer des dépendances.
C'est alors qu'interviennent des outils comme **CMake** pour vous simplifier la tâche. Celui-ci va très bien s'intégrer à des IDE comme **VisualStudio Code** par exemple.

:::note
Il en existe bien d'autres comme **makefile** que nous ne verrons pas car moins moderne et que je vous déconseille fortement d'utiliser directement.
:::

## Installation

<Tabs groupId="operating-systems">

<TabItem value="Windows" label="Windows">

Si vous êtes passé par l'installation avec **Winlibs**, vous avez normalement déjà **CMake** d'installé.

</TabItem>
<TabItem value="Linux" label="Linux">

Vous pouvez installer **CMake** via le gestionnaire de paquets de votre distribution.
Par exemple avec le gestionnaire de paquets **APT** vous pouvez simplement taper la commande suivante :

```bash
sudo apt-get install cmake
```
</TabItem>
<TabItem value="OSX" label="OSX">
Vous devriez pouvoir l'installer via le gestionnaire de paquets <a href="https://brew.sh/">Brew</a> avec la commande suivante : 

```bash
brew install cmake
```
</TabItem>
</Tabs>

Vous pouvez ensuite vérifier que c'est bien installé en exécutant la commande suivante dans un terminal :

```bash
cmake --version
```

Si vous obtenez un message d'erreur, c'est que **CMake** n'est pas installé correctement.

Dans ce cas, vous pouvez aussi télécharger l'installeur sur le site officiel de **CMake**.
Vous pouvez vous rendre **[ici](https://cmake.org/download/)** et sélectionner l'installeur qui correspond à votre OS.
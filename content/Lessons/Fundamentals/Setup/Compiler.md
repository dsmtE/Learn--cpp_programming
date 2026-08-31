---
title: Installer le compilateur
tags:
    - Tools
    - C++

sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Button, Chip } from "@mui/material";

# Installation d'un compilateur

<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">

Dans le cas de Windows, nous installerons le compilateur **GCC** grace au projet [Winlibs](https://winlibs.com).
C'est un projet qui regroupe des outils de compilation **GCC** pour Windows et qui est très simple et relativement léger à installer (environs 140 Mo au téléchargement et 1,4 Go une fois décompressé). Il existe d'autres alternatives comme **MSVC** mais je ne vais pas les présenter ici. Si vous êtes à l'aise et que vous savez ce que vous faites, vous êtes libre d'utiliser celui que vous voulez.

Il inclut également des outils de développement supplémentaires comme **GDB** (débogueur) et **CMake** (outil de compilation).

Rendez vous sur le site de [Winlibs](https://winlibs.com) et téléchargez la dernière version de **GCC** dans la section *Release versions* puis *UCRT runtime* (zip ou 7z). Choisissez la version **Win64** pour un système 64 bits (si vous ne savez pas, c'est probablement le cas et prenez cette version).

Une fois téléchargé, décompressez l'archive dans un dossier de votre choix où vous souhaitez installer les outils de compilation. Par exemple à la racine de votre disque dur dans un dossier **"C:\Winlibs"** (de préférence sans espaces dans les noms des dossiers et sur votre disque principal).

Une fois décompressé, c'est prêt à être utilisé. Il ne reste plus qu'à indiquer à votre système où se trouve le compilateur pour pouvoir l'utiliser depuis n'importe où dans votre système (un terminal ou un éditeur de code par exemple).

Dans notre cas on va devoir donc ajouter le sous-dossier **"bin"** du dossier précédemment décompressé à la variable d'environnement **PATH**. Par exemple **"C:\Winlibs\bin"**.

C'est expliqué plus bas dans la section [**Variables d'environnement**](#variables-denvironnement).

<details>

<summary>Compilateur MSVC </summary>

Il est également possible d'installer le très connu compilateur **MSVC**. C'est un compilateur propriétaire de Microsoft qui est très performant et qui est souvent utilisé pour les projets professionnels pour les plateformes Windows. Cependant il est un peu plus long à installer et à utiliser par la suite et plus volumineux que **GCC**. Vous êtes tout de même libre de l'utiliser si vous le souhaitez. 

Il vous suffit pour cela de télécharger l'installateur des outils Microsoft via ce lien **[Visual Studio Download](https://visualstudio.microsoft.com/fr/downloads/)** et de choisir la version **Community** (gratuite) et de lancer l'installateur.

**MSVC** fait partie de l'éditeur **Microsoft Visual Studio** mais il est possible d'installer seulement les outils de compilation sans l'éditeur et c'est ce que nous allons faire car nous allons nous utiliser **Visual Studio Code** (:warning: différent de **Microsoft Visual Studio**).

Une fois l'installateur téléchargé il faut le lancer et choisir **"Desktop development with C++"** (vous devriez voir **MSVC** dans la liste à droite).

Vous trouverez des infos supplémentaires ici dans la section pré-requis si nécessaire :
- [visualstudio:config-msvc](https://code.visualstudio.com/docs/cpp/config-msvc#_prerequisites)

</details>

</TabItem>

<TabItem value="Linux" label="Linux">

De manière générale, toutes les distributions Linux sont livrées avec le compilateur installé **GCC**. Si ce n'est pas le cas, consultez [cet article](https://code.visualstudio.com/docs/cpp/config-linux).

</TabItem>

<TabItem value="MacOS" label="MacOS">
Vous avez seulement à exécuter cette commande :

```bash
xcode-select --install
```
Cela va installer les outils de développement d'Apple qui contiennent le compilateur **GCC** (et / ou **Clang**).

Je pratique plus rarement ce genre d'installation sur **MacOS**, n'hésitez pas à venir me voir ou m'envoyer un message ou même à en parler entre vous pour trouver une solution.
</TabItem>
</Tabs>

:::info
Certains compilateurs ne gèrent pas les choses exactement de la même manière et il est possible donc d'obtenir des warnings ou erreurs différentes d'un compilateur à l'autre.
:::

## Vérifier que le compilateur est installé

Dans un premier temps, vous allez pouvoir vérifier que le compilateur **GCC** est bien installé avec la commande suivante :

```bash
g++ --version
```

<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">

<details>

<summary>MSVC</summary>

Avec **MSVC** c'est un peu particulier et la commande du compilateur ne sera accessible qu'à travers un terminal particulier.

Vous pouvez le trouver en cherchant **"developer powershell"** ou **"developer Command Prompt"** dans le **Menu Windows**.

Vous pouvez ouvrir un terminal développeur et essayer d'exécuter la commande suivante!

```powershell
cl
```

Vous devriez voir un retour comme celui là :

> ```powershell
> C:\Program Files\Microsoft Visual Studio\2022\Community> cl
> Microsoft (R) C/C++ Optimizing Compiler Version 19.31.31105 for x86
> Copyright (C) Microsoft Corporation.  All rights reserved.
> 
> usage: cl [ option... ] filename... [ /link linkoption... ]
> ```

</details>

</TabItem>

<TabItem value="Linux" label="Linux">
</TabItem>
<TabItem value="MacOS" label="MacOS">
</TabItem>

</Tabs>

Cela peut ne pas fonctionner si le répertoire contenant le compilateur n'est pas "accessible". Dans ce cas, il faut ajouter le chemin du compilateur aux [variables d'environnement](#variables-denvironnement).

## Variables d'environnement

Les **commandes** sont elles-mêmes des exécutables sous forme de fichiers situés quelque part sur votre ordinateur.

Depuis un terminal, l'ordinateur a une liste de tous les endroits dans lesquels il va essayer de chercher les dits fichiers (commandes) à exécuter. Ces endroits (sous forme de chemins de dossier) sont listés dans ce qu'on appelle des **variables d'environnement** et particulièrement la variable d'environnement **PATH**.

Pour pouvoir avoir accès à la commande du compilateur depuis n'importe où dans votre ordinateur il va donc falloir ajouter le chemin où est installé l'exécutable (les outils de compilation dans notre cas) à cette variable **PATH**.

<Tabs groupId="operating-systems">

<TabItem value="Windows" label="Windows">

Vous pouvez y accéder en allant dans le **Panneau de configuration** et en cliquant sur le lien **Paramètres système avancés** puis sur **Variables d'environnement**. Ou plus simplement en cherchant **"path"** ou **"variable"** dans le Menu démarrer.

Dans la section Variables système recherchez la variable d'environnement **PATH** et sélectionnez-la. Cliquez sur Modifier. 

- Dans la fenêtre qui vient de s'ouvrir, ajoutez une valeur avec le chemin vers le dossier contenant la commande.
  (Pour **MSVC** par exemple c'est quelque chose comme : *"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\19.09.26726\bin\HostX86\x64"*)
- Cliquez sur OK.
- Fermez toutes les fenêtres restantes en cliquant sur OK.

C'est également expliqué [ici](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/) avec des illustrations si nécessaire.
</TabItem>
<TabItem value="Linux" label="Linux">

C'est en général bien configuré lors de l'installation de votre OS.

Mais si vous voulez ajouter par exemple */home/user/test* à la variable **PATH**, il faut écrire la commande `export PATH=$PATH:/home/user/test` pour ajouter temporairement ce nouveau dossier à la variable **PATH**.

Maintenant, vous pouvez utiliser votre commande en écrivant tout simplement son nom et le terminal sera capable de chercher dans ce nouveau répertoire.

:warning: À la fermeture du terminal, **PATH** reprendra sa valeur par défaut, donc */home/user/test* n'existera plus dans **PATH**.

### De manière permanente

Si vous voulez configurer la variable **PATH** de façon permanente, vous devez éditer le fichier de configuration de votre terminal/shell.
Comme le plus souvent c'est le shell **BASH** qui est utilisé, vous devez éditer votre fichier */home/user/.bashrc*.

Des explications pour le faire sont disponible [ici](https://stackabuse.com/how-to-permanently-set-path-in-linux/#:~:text=in%20this%20guide.-,Using%20bashrc%20to%20Set%20your%20PATH,-Instead%20of%20setting)
</TabItem>

<TabItem value="MacOS" label="MacOS">

Je suis moins familier de MacOS mais c'est également possible de modifier la variable **PATH**.

Vous trouverez des instructions pour le faire [ici](https://support.apple.com/fr-fr/guide/terminal/apd382cc5fa-4f58-4449-b20a-41c53c006f8f/mac) et [ici](https://apical.xyz/fiches/configurer_son_mac/ajuster_la_variable_d_environnement_path_sous_macos).

N'hésitez pas à revenir vers moi si vous avez des difficultés.
</TabItem>

</Tabs>

:::

---
title: TD8 - Headers
---

import HexColor from '@site/src/components/HexColor';

Le but de ce TD est de manipuler plusieurs fichiers sources et de les compiler ensemble pour créer un programme.

Nous allons créer une structure qui permet de représenter une couleur avec trois composantes `red`, `green` et `blue`.

1. Créer un fichier `color.hpp` qui contiendra un [espace de nom](/Lessons/S1/Headers#espaces-de-noms) `Color` avec la définition de la structure `Rgb` et les prototypes des fonctions et méthodes suivantes :
    - La structure devra s'appeler `Rgb` et contenir trois **entiers** nommés `red`, `green` et `blue` de type `unsigned int` avec une valeur par défaut initialisée à `0`.
    - La structure devra contenir une **méthode** `display` qui permet d'afficher (`std::cout`) la couleur sous la forme `rgb(red, green, blue)`.

:::info
On pourrait aussi utiliser un type `unsigned char` pour les composantes de couleur mais ça va nous poser des problèmes pour les calculs et pour l'affichage. En effet, les types `char` s'affichent comme des caractères ASCII et non comme des entiers. De plus, les calculs avec des `char` peuvent poser des problèmes de débordement de capacité.
:::

2. Créer un fichier `color.cpp` qui contiendra les définitions des méthodes et fonctions.

---

Maintenant que nous avons notre structure `Color::Rgb`, nous allons ajouter des fonctions pour pouvoir manipuler nos couleurs pour en obtenir de nouvelles.

3. Créer un nouveau fichier `color_utils.hpp` qui contiendra les prototypes des fonctions suivantes :
    - `mix` qui permet de mélanger deux couleurs en faisant la moyenne des composantes `red`, `green` et `blue`. Elle retourne la couleur résultante et prend en paramètre deux couleurs (références constantes).
    - `luminance` qui permet de calculer la luminance d'une couleur en utilisant la formule $0.2126 * \text{red} + 0.7152 * \text{green} + 0.0722 * \text{blue}$ (:warning: il faudra convertir au préalable les composantes entières $[0, 255]$ en flottants $[0, 1]$) et retourner le résultat sous forme d'un nombre **flottant** entre 0 et 1.
    -  `invert` qui permet d'inverser les composantes d'une couleur (255 - composante) et de retourner la couleur inversée.
    -  `grayscale` qui permet de convertir une couleur en une couleur en niveaux de gris. (Une couleur en niveaux de gris a ses composantes `red`, `green` et `blue` égales à la luminance de la couleur).

4. Créer un nouveau fichier `color_utils.cpp` qui contiendra les définitions des fonctions.


5. Créer un nouveau couple de fichiers `color_hex.cpp` et `color_hex.hpp` dans lesquels vous allez ajouter des fonctions pour manipuler des couleurs en hexadécimal. Le fichier contiendra les fonctions suivantes (toujours dans l'espace de nom `Color`):
   - `Rgb Rgb_from_hex(unsigned int const hex)` qui permet de convertir un entier hexadécimal en une couleur.
   - `unsigned int rgb_to_hex_int(Rgb const& color)` qui permet de convertir une couleur en un entier hexadécimal.

:::tip couleur en hexadécimal
Pour convertir un **entier hexadécimal** en composantes `red`, `green` et `blue`, vous pouvez utiliser des opérations de décalage binaire (`>>`) et des AND binaires (`&`) pour extraire les composantes.

En effet, un entier hexadécimal est composé de 3 octets (24 bits) où les 8 premiers bits représentent la composante `red`, les 8 bits suivants la composante `green` et les 8 derniers bits la composante `blue`.

Par exemple, le nombre <HexColor hex="0xff0000"/> se découpe en 3 octets `ff`, `00` et `00` qui correspondent respectivement à `red`, `green` et `blue`. En binaire, cela donne `11111111`, `00000000` et `00000000`.

Ici, le préfixe `0x` indique que l'on parle d'un nombre hexadécimal et pas d'une chaîne de caractères, de la même manière que le suffixe `f` pour les nombre flottants par exemple.

Pour extraire la composante `red`, il faut utiliser des opérations de décalage binaires et de masquage.

Par exemple `10100101` & `11110000` donne `10100000` (masquage) et `10100000` >> 4 donne `00001010` (décalage).

Ici on peut utiliser ce mécanisme pour extraire les composantes `red`, `green` et `blue` de l'entier hexadécimal.

<HexColor hex="0xe812f0"/> & <HexColor hex="0xff0000"/> donne <HexColor hex="0xe80000"/> et <HexColor hex="0xe80000"/> >> 16 donne `0x0000e8` qui correspond à la composante `red` de la couleur.

Pour obtenir la composante `green`, il faut faire un masquage avec `0x00ff00` et un décalage de 8 bits (`>> 8`). Ce qui donne avec les opérations binaires combinées : (<HexColor hex="0xe812f0"/> & <HexColor hex="0x00ff00"/>) >> 8 = `0x000012`.

Pour obtenir la composante `blue`, il faut faire un masquage avec `0x0000ff` et un décalage de 0 bit (qui ne change rien et est donc optionnel) ce qui donne : <HexColor hex="0xe812f0"/> & <HexColor hex="0x0000ff"/> = `0x0000f0`.

Il est aussi possible de faire un **décalage** **puis** un **masquage** (<HexColor hex="0xe812f0"/> >> 16 & `0x0000ff` donne aussi `0x0000e8` (la composante `red` de la couleur)).
:::

6. Ajouter les prototypes et définitions des fonctions suivantes permettant de manipuler des **chaînes de caractères** représentant des couleurs en hexadécimal :
    - `Rgb Rgb_from_hex(std::string const& hex)` qui permet de convertir une chaîne de caractères représentant un entier hexadécimal en une couleur.
   - `std::string rgb_to_hex_string(Rgb const& color)` qui permet de convertir une couleur en une chaîne de caractères représentant la couleur en hexadécimal.

:::tip
Vous pouvez utiliser la fonction `std::stoi` pour convertir une chaîne de caractères en entier. Pour cela, vous devez spécifier la base de conversion en troisième paramètre pour que la fonction puisse interpréter la chaîne correctement avec un entier hexadécimal.

Par exemple, `std::stoi("ff", nullptr, 16)` retourne `255`.

Pour la fonction `rgb_to_hex_string`, il faudra donc convertir au préalable la couleur en nombre hexadécimale (fonction `rgb_to_hex_int`) et convertir ce nombre en chaîne de caractère. Je vous laisse regarder comment convertir un entier hexadécimal en chaîne de caractères mais voilà quelques pistes:
- `std::stringstream` avec le manipulator `std::hex` pour convertir un entier en hexadécimal.
- `std::format("{:x}", 42)` pour formater un entier en hexadécimal (C++20).
- Directement remplir une chaîne de caractères avec des opérations de décalage et de masquage (plus compliqué et déconseillé).
:::

7. Créer un fichier `main.cpp` dans lequel vous allez inclure les fichiers nécessaires pour manipuler les couleurs et tester les différentes fonctions que vous avez créées. L'idée est de créer un mélangeur de couleur qui demande à l'utilisateur de saisir deux couleurs en **hexadécimal** et qui affiche la couleur résultante du mélange(format **rgb** et **hexadécimal**) ainsi que sa **luminance** et sa **couleur inversée**.

exemple de résultat attendu:
```bash
Entrez la première couleur en hexadécimal: ff0000
Entrez la deuxième couleur en hexadécimal: 00ff00
Couleur 1: rgb(255, 0, 0) hex: ff0000
Couleur 2: rgb(0, 255, 0) hex: 00ff00
Couleur mélangée: rgb(127, 127, 0) hex: 7f7f00
Luminance: 0.462081
Couleur mélangée inversée: rgb(128, 128, 255) hex: 8080ff
```

:::info
La gestion des préfixes `0x` pour les entiers **hexadécimaux** (pour indiquer que l'on parle d'un **nombre hexadécimal**) ou même `#` pour les couleurs en hexadécimal (que l'on rencontre souvent en **CSS**) est **optionnelle**. Vous pouvez les gérer ou non dans votre programme dans les fonctions de conversion. Pour faire au plus simple vous pouvez les ignorer.
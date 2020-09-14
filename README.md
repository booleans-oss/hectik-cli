<div align="center">
  <br />
  <p>
    <a href="https://github.com/booleans-oss/hectik-cli"><img src="https://images2.imgbox.com/48/b0/b9oODWxb_o.png" width="546" alt="hectik" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/hectik"><img src="https://img.shields.io/badge/npm-1.0.6-blueviolet" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/hectik"><img src="https://img.shields.io/badge/download-0-informational" alt="NPM downloads" /></a>
    <a href="https://github.com/booleans-oss/hectik-cli/actions"><img src="https://github.com/discordjs/discord.js/workflows/Testing/badge.svg" alt="Build status" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/hectik/"><img src="https://nodei.co/npm/hectik.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## Sommaire 📚

- [About](#about)
- [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Commandes](#commandes)
- [Exemples](#exemples)
- [Aide](#aide)

## About

hectik 📡 est un outil cli qui va vous permettre de créer et structurer votre bot discord en quelques clics. Hectik permet aussi de rajouter des commandes, ainsi que des events comme vous le voulez, sans avoir à créer de fichiers.

- Facile à utiliser
- Immenses possibilités
- Performant
- Basé en local

## Installation

**Node.js 12.0.0 ou plus est requis.**  
Vous pouvez ignorer les avertissements de la console vu que ceux-ci ne sont qu'optionnels.
Le module doit être installé globalement. Il est donc nécessaire d'avoir une console ouverte en administration ou d'utiliser `sudo`.

```npm install hectik -g``` 


## Utilisation
![Tutoriel](https://images2.imgbox.com/cc/00/zSdUKiYz_o.gif)


## Commandes

**Pour le moment, seule la commande "nouveau" existe** !

```$ hectik nouveau <Options>```

Les options sont les drapeaux suivants:
* `-b, --bot`: qui crée le bot de a-z.
* `-h, --help`: qui vous donnera la liste des commandes
* `-c, --command`: qui crée la commande que vous voudrez
* `-e, --event`: qui crée l'event parmis la liste des events `@discord.js`.
* `--v, version`: donne la version actuelle du package

## Exemples
```bash
$ hectik nouveau
```
Cette commande vous demandera ce que vous voulez créer.

```bash
$ hectik nouveau --c
```
Cette commande vous demandera la commande souhaitée.

```bash
$ hectik nouveau --b
```
Cette commande vous crée et organise le bot.

```bash
$ hectik nouveau --e
```
Cette commande vous demandera l'event que vous voulez parmis la liste.

```bash
$ hectik nouveau --h
```
Cette commande vous donnera la liste des commandes précédemment expliquées.
## Aide

Si vous avez des questions ou du mal à utiliser le module, n'hésitez pas à me contacter par Discord: ``booleans#9476``. 

# DFS22C-JS
JS exercice for the DFS22C 2021/2022


## Requirements
- Suivez le process d'installation [ici pour la Node LTS](https://nodejs.org/en/download/) (version 14.17.0 a l'écriture de cette doc)
- Assurez vous de la version de la maniere suivante:

```sh
$ node --version
v14.17.0
```

## Comment executer vos scripts JS avec Node

- Créer un fichier .js, ici par exemple nous avons le fichier index.js dans le dossier scripts 
- Aller dans votre terminal ou Powershell si vous utilisez Windows executer votre ficher comme ceci:
```sh
$ node scripts/index.js # Attention a votre chemin, remplacer le scripts/index.js par le chemin approprié
```

## Comment executer du JS dans Node
- Aller dans votre terminal ou Powershell si vous utilisez Windows executer la commande suivante:
```sh
$ node # Lance l'environment node

Welcome to Node.js v14.17.0.
Type ".help" for more information.
> console.log("Hello, Node")
Hello, Node
```
- Pour sortir de l'environment Node:

```sh
Welcome to Node.js v14.17.0.
Type ".help" for more information.
>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
> .exit
$
```
- N'hesitez pas a utiliser le .help

```sh
$ node
Welcome to Node.js v14.17.0.
Type ".help" for more information.
> .help

.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL # Quitte l'environment
.help     Print this help message
.load     Load JS from a file into the REPL session # Vous permets d'accéder au variable que vous avez défini dans un ficher .js
.save     Save all evaluated commands in this REPL session to a file # Exporte toute les opérations que vous avez écrit depuis le lancement de l'environment dans un fichier

```
#!/usr/bin/env node
import { GetCommandLine, buildDir } from './handler';
import chalk from 'chalk';
import { commandHandling, eventHandling } from './requestHandling'
const { program } = require('commander');
program.version('0.0.1');

(async () => {
program
  .option('-e, --event', 'créer une nouvel event')
  .option('-c, --commande', 'créer une nouvelle commande')
  .option('-b, --bot', 'créer un nouveau bot')
  .option('-h, --aide', 'avoir la liste des différentes commandes')
program.parse(process.argv);
if(program.aide) return console.log(chalk`

{yellow.bold Utilisation}
$ nouveau 
Options
Commande sans options. Il vous demandera ce que vous voulez créer.

--------------------------------------------------------------------

{yellow.bold Utilisation}
$ nouveau <Options>

{yellow.bold Options}
--commande, -c  Créer une nouvelle commande (soit être dans le dossier du bot)
--event, -e Créer un nouvel event (doit être dans le dossier du bot)
--bot, -b Créer un bot

{yellow.bold Exemples}
$ nouveau --commande
$ nouveau --event
$ nouveau --bot
`)
if(!process.argv.slice(2)[0] || process.argv.slice(2)[0] !== "nouveau" ) return console.log("La commande insérée est incorrecte.")

if(process.argv.slice(2)[0] === "nouveau" && process.argv.slice(2).length === 1) {
let commande = process.argv.slice(2); 
        await GetCommandLine(commande)
    console.log("yoh")}
else {
    if (program.event) eventHandling();
    if (program.commande) commandHandling();
    if (program.bot) buildDir();
}


})();


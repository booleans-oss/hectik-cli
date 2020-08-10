import { createCommande, createEvents } from '../assets/question'
import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
import symbols from 'log-symbols';
import Events from './events'
import { createCommand } from '../assets/samples/Node/type.js'
export async function commandHandling() {
    const answers = await inquirer.prompt(createCommande);
    let capitalized = answers.nom_commande.charAt(0).toUpperCase() + answers.nom_commande.slice(1);
    let path = answers.dir_commande;
    let aliases:any[] = []
    if(answers.alias_commande === "Aucun") aliases = [answers.nom_commande]
    else if(answers.alias_commande !== "Aucun") aliases = answers.alias_commande.split(",").map((alias:string) => `"${alias.trim()}"`);
    if(!fs.existsSync(`./commands/`)) return console.log("Veuillez exécuter cette commande dans le dossier de votre bot.")
    if(!fs.existsSync(`./commands/${path}`)) {
        try {
            fs.mkdir(`./commands/${path}`, { recursive: true }, (err) => {
                if(err) return console.log(err);
                console.log(`${symbols.success} Dossier ${path} créé`)
            })
        } catch (err) {
            console.log(chalk.red(err))
        }
    }
    try { 
        fs.writeFile(`./commands/${path}/${capitalized}Command.js`, await createCommand(answers.nom_commande, capitalized, aliases),  (err) => {
          if (err) throw chalk.red(err);
          console.log(`${symbols.success} Commande ${capitalized} créé`);
        });
      } catch(err) {
        return console.log(chalk.red(err));
      }
    
  }
export async function eventHandling() {
  if(!fs.existsSync(`./commands/`)) return console.log("Veuillez exécuter cette commande dans le dossier de votre bot.")
    const answers = await inquirer.prompt(createEvents);
    for(const event of answers.events) {
            const events = new Events();
            const index = event as unknown as keyof Events;
            try { 
            fs.writeFile(`./events/${event}.js`, events[index],  (err) => {
              if (err) throw chalk.red(err);
              console.log(`${symbols.success} Event ${event} créé`);
            });
          } catch(err) {
            return console.log(chalk.red(err))
          }
    }
}
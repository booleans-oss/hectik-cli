#!usr/bin/env node;
import { createMainEnvironment } from '../assets/scaffold/config'
import inquirer from 'inquirer';
import { commandHandling, eventHandling } from './requestHandling'
import { createBot, commandLine, requestLine } from '../assets/question'

export async function buildDir() {
    const answers = await inquirer.prompt(createBot);
    await createMainEnvironment(answers.name, answers.token, answers.prefix);
  };

  export async function GetCommandLine(commande: string[]) {
        const answers = await inquirer.prompt(commandLine);
        if(answers.command === "Nouveau projet/bot") return await buildDir();
        if(answers.command === "Nouvelle commande/nouveau event") {
          const answers = await inquirer.prompt(requestLine);
          if(answers.req === "Nouvelle commande") return await commandHandling();
          if(answers.req === "Nouvel event") return await eventHandling();
        }
  }

import fs from 'fs';
import chalk from 'chalk';
const Listr = require('listr');
import symbols from 'log-symbols';
import { Structure } from '../samples/Node/package.json';
import { getIndexFile, getBaseBotFile, getCommandBaseFile, getMessageEvent, getReadyEvent, getENVFile, getExempleCommande } from '../samples/Node/type.js';
import { directories, files } from './directories.json';
import { execSync } from 'child_process';
export async function createMainEnvironment(name: string, token: string, prefix: string) {
  class Data {
    token = getENVFile(token, prefix)
    index =  getIndexFile()
    basebot = getBaseBotFile()
    commandbase = getCommandBaseFile()
    readyevent = getReadyEvent()
    messageevent = getMessageEvent()
    test = getExempleCommande()
  }
  const data = new Data();
  try {
    await fs.mkdir(`./${name}/`, { recursive: true }, (err) => {
      Structure.name = name;
      try { 
      return fs.writeFile(`./${name}/package.json`, JSON.stringify(Structure, null, ' '),  (err) => {
        if (err) throw err;
      });
    } catch(err) {
      return console.log(chalk.red(err));
    }
      });
      await organizeDirectory(name)
      await organizeFile(name);
      const tasks = new Listr([
        {
          title: 'Allow extra bag for passengers',
          // you can disable tasks on wish
          // return a falsy value for "enabled" to disable this task in the list
          enabled: () => false,
          task: () => waitASecond()
        },
        {
          title: chalk.bgBlue(`Création de l'environnement ${name}`),
          skip: false,
          task: () =>
            new Listr(
              [
                {
                  title: `Création du dossier ${name}`,
                  skip: false,
                  task: () => wait()
                },
                {
                  title: 'Création du dossier events',
                  skip: () => false,
                  task: () => wait()
                },
                {
                  title: 'Création du dossier commandes',
                  skip: false,
                  task: () => wait()
                },
                {
                  title: 'Création du dossiers utils',
                  task: () => wait()
                },
                {
                  title: 'Création du dossiers assets',
                  task: () => wait()
                }
              ],
              { concurrent: true }
            )
        },
        {
          title: chalk.bgBlue("Création des fichiers"),
          task: () =>
            new Listr(
              [
                {
                  title: `Création de l'index.js`,
                  skip: false,
                  task: () => wait()
                },
                {
                  title: 'Création des events (ready/message)',
                  skip: () => false,
                  task: () => wait()
                },
                {
                  title: 'Création des bases',
                  skip: false,
                  task: () => wait()
                }
              ],
              { concurrent: true }
            )
        },
        {
          title: chalk.bgBlue('Création du package.json'),
          task: () => wait()
        },
        {
          title: chalk.bgGreen('Bot créé!'),
          task: () => wait()
        }
      ])
  
      await tasks.run();
      try {
        execSync('npm i', {
          cwd: `./${name}`
        })
      } catch (err) {
        console.log(err)
      }
      console.log(chalk`${symbols.success} Modules installés ! Vous n'avez plus qu'à faire {yellow.bold cd ${name}} et ensuite {yellow.bold npm run start} 😄`)
      function waitASecond() {
        return wait()
      }
    
      function wait() {
        return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 10) * 1000))
      }

    } catch (err) {
      return console.log(chalk.red(err));
    }

    async function organizeDirectory(name:string) {
      return new Promise((resolve, reject) => {
      for(const directory of directories) {
        try {
        fs.mkdir(`./${name}${directory.path}${directory.name}`, { recursive: true }, (err) => {
          if (err) throw err;
        })
        } catch(e) {
          console.log(chalk.red(e))
          reject()
        }
    }
    try {
      fs.mkdir(`./${name}/utils/assets`, { recursive: true }, (err) => {
      if (err) throw err;
      try {
        fs.mkdir(`./${name}/commands/Exemple`, { recursive: true }, (err) => {
        if (err) throw err;
        resolve() 
      })
    } catch (e) {
      return console.log(chalk.red(e))
    }
    })
  } catch (e) {
    return console.log(chalk.red(e))
  }
    }
      )
    }
    
    async function organizeFile(name:string) {
      return new Promise(async (resolve, reject) => {
      for(const file of files) {
        try { 
          const index = file.fonction as unknown as keyof Data
          fs.writeFile(`./${name}${file.path}${file.name}`, await data[index],  (err) => {
            if (err) throw err;
          });
        } catch(err) {
          reject()
          console.log(chalk.red(err))
        }
      }
      resolve()
    })
    }
}

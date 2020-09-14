export async function getIndexFile() {
  return `const Discord = require('discord.js');
  require('dotenv').config()
  const Bot = require("./utils/assets/BotBase");
  const path = require('path');
  const bot = new Bot({ partials: ['MESSAGE', 'REACTION']});
  
  (async () => {
      await bot.login(process.env.TOKEN_BOT);
      await bot.chargementCommand();
      await bot.chargementEvent(bot, '../../events');
    })();`
}
export async function getExempleCommande() {
return `const Command = require("../../utils/assets/CommandBase.js");
module.exports = class Test extends Command {

  constructor (client) {
    super(client, {
      name: "test",
      dirname: __dirname,
      enabled: true,
      aliases: [ "t", "tes" ],
    });
  }

  async run (client, message, args) {
    message.channel.send("Ceci est un teste")
  }

}
`
}
export async function getENVFile(token:string, prefix:string) {
return `TOKEN_BOT=${token}
        PREFIX_BOT=${prefix}`
}
export async function createCommand(name:string, capitalized: string, aliases: string[]) {
return `const Command = require("../../utils/assets/CommandBase.js");

module.exports = class ${capitalized} extends Command {

  constructor (client) {
    super(client, {
      name: "${name}",
      dirname: __dirname,
      enabled: true,
      aliases: [${aliases}],
    });
  }

  async run (client, message, args) {
    message.channel.send("${name}")
  }

}
`
}
export async function getBaseBotFile() {
return `const {
  Client,
  Collection
} = require("discord.js");
const {
  readdirSync
} = require("fs");
const path = require("path");
class Bot extends Client {
  constructor(options) {
      super(options);
      this.commands = new Map();
      this.aliases = new Map();
  }
  async chargementCommand() {
    const directories = await fs.readdir("./commands/");
    directories.forEach(async (dir) => {
        const commands = await fs.readdir("./commands/" + dir + "/");
        try {
            commands.filter((cmd) => cmd.split(".").pop() === "js").forEach((cmd) => {
                const props = new(require(\`../../commands/\${dir}\${path.sep}\${cmd}\`))(this);
                this.commands.set(cmd.slice(0, -10).toLowerCase(), props);
                props.help.aliases.forEach((alias) => {
                    this.aliases.set(alias.toLowerCase(), props.help.name.toLowerCase());
                });
            });
        } catch (e) {
            console.log(e)
        }
    });
}
async chargementEvent(client, dir = '') {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
      const stat = await fs.lstat(path.join(filePath, file));
      if (stat.isDirectory()) this.chargementEvent(client, path.join(dir, file));
      if (file.endsWith('.js')) {
        const event = new(require(path.join(filePath, file)))(this);
        client.on(event.name, (...args) => event.run(client, ...args));
        delete require.cache[require.resolve(path.join(filePath, file))];
      }
    }
  }
}
module.exports = Bot;`
}
export async function getCommandBaseFile() {
return `const path = require("path");

module.exports = class Command {
  constructor(client, {
    name = null,
    dirname = false,
    aliases = new Array(),
  }) {
    const category = (dirname ? dirname.split(path.sep)[parseInt(dirname.split(path.sep).length - 1, 10)] : "Other");
    this.client = client;
    this.help = {
      name,
      category,
      aliases
    };
  }
};`
}
export async function getMessageEvent() {
return `require('dotenv').config();
module.exports = class {
  constructor (client) {
    this.client = client;
    this.name = "message"
  }
  async run (client, message) {
    if (message.author.bot) return;
    if (message.content.startsWith(process.env.PREFIX_BOT)) {
        const args = message.content.slice(1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        console.log(command)
        const cmd = client.commands.get(command) || client.commands.get(this.client.aliases.get(command));
        if(cmd) cmd.run(client, message, args)
    }
  }
};  `
}
export async function getReadyEvent() {
return `module.exports = class {
  constructor(client) {
    this.client = client;
    this.name = 'ready';
  }
  async run(client) {
    console.log(\`Connecté sur \${client.user.tag}\`)
  }
};`
}
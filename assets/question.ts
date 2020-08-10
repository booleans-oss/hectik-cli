
import path from 'path'
import { Answers, Question } from 'inquirer';

const question_nom: Question<Answers> = {
    type: 'text',
    name: 'name',
    message: 'Quel va être le nom de ton bot ? 🤔 ',
    validate: (value: string) => (value === value.toLowerCase() && /^[a-zA-Z-_]+$/.test(value) === true) ? true:`Tu ne dois pas mettre de majuscules ou de caractères spéciaux.`,
    default: path.basename(process.cwd())
}
const question_token: Question<Answers> = {
  type: 'text',
  name: 'token',
  message: 'Quel est le token de ton bot ? 🛠 ',
  validate: (value: string) => value.length === 59 ? true:`Veuillez donner un TOKEN valide.`,
}
const question_prefix: Question<Answers> = {
  type: 'text',
  name: 'prefix',
  message: 'Quel est le prefix de ton bot ? 🛠',
  validate: (value: string) => value.length < 5 ? true:`Veuillez donner un préfixe de moins de 5 lettres.`,
}
const question_commande_nom: Question<Answers> = {
  type: 'text',
  name: 'nom_commande',
  message: 'Quel est le nom de la commande ? 🛠',
}
const question_commande_catégorie: Question<Answers> = {
  type: 'text',
  name: 'dir_commande',
  message: 'Quelle est la catégorie de la commande ? 🛠',
  default: "Autres"
}
const question_commande_aliases: Question<Answers> = {
  type: 'text',
  name: 'alias_commande',
  message: 'Quels sont les aliases de cette commande ? (séparez par une virgule entre chaque alias)',
  default: "Aucun"
}
const question_module: object = {
  type: 'list',
  name: 'command',
  message: 'Que veux-tu créer ? 💡',
  choices: ['Nouveau projet/bot', 'Nouvelle commande/nouveau event'],
}
const request_module: object = {
  type: 'list',
  name: 'req',
  message: 'Que veux-tu créer ? 💡',
  choices: ['Nouvelle commande', 'Nouvel event'],
}
const request_events: object = {
  type: 'checkbox',
  name: 'events',
  message: 'Que veux-tu créer ? 💡(Appuie sur espace pour séléctionner l\'event)',
  choices: ['channelCreate', 'channelDelete', 'channelPinsUpdate', 'channelUpdate', 'debug', 'emojiCreate', 'emojiDelete', 'emojiUpdate', 'error', 'guildBanAdd', 'guildBanRemove', 'guildCreate', 'guildDelete', 'guildIntegrationsUpdate', 'guildMemberAdd', 'guildMemberRemove', 'guildMembersChunk', 'guildMemberSpeaking', 'guildMemberUpdate', 'guildUnavailable', 'guildUpdate', 'invalidated', 'inviteCreate', 'inviteDelete', 'message', 'messageDelete', 'messageDeleteBulk', 'messageReactionAdd', 'messageReactionRemove', 'messageReactionRemoveAll', 'messageReactionRemoveEmoji', 'messageUpdate', 'presenceUpdate', 'rateLimit', 'ready', 'roleCreate', 'roleDelete', 'shardDisconnect', 'shardError', 'shardReady', 'shardReconnecting', 'shardResume', 'typingStart', 'userUpdate', 'voiceStateUpdate', 'warn', 'webhookUpdate'],
}
export const createBot: Question[] = [
  question_nom, question_token, question_prefix
];
export const commandLine: Question[] = [
  question_module
]
export const requestLine: Question[] = [
  request_module
]
export const createCommande: Question[] = [
  question_commande_nom, question_commande_catégorie, question_commande_aliases
]
export const createEvents: Question[] = [
  request_events
]

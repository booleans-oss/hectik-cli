class Events {
  channelCreate = `module.exports = class {
    constructor(client) {
      this.client = client;
      this.name = "channelCreate"
    }
    async run(client, newChannel) {
      console.log(newChannel.name)
    }
  };`
  channelDelete = `module.exports = class {
    constructor(client) {
      this.client = client;
      this.name = "channelDelete"
    }
    async run(client, oldChannel) {
      console.log(newChannel.name)
    }
  };`
  channelPinsUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "channelPinsUpdate"
      }
      async run(client, channel, time) {
        console.log(channel.name, time)
      }
    };`
    channelUpdate=`module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "channelUpdate"
      }
      async run(client, oldChannel, newChannel) {
        console.log(oldChannel.name, newChannel.name)
      }
    };`
    debug= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "debug"
      }
      async run(client, info) {
        console.log(info)
      }
    };`
    emojiCreate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "emojiCreate"
      }
      async run(client, emoji) {
        console.log(emoji.url)
      }
    };`
    emojiDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "emojiDelete"
      }
      async run(client, emoji) {
        console.log(emoji.url)
      }
    };`
    emojiUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "emojiUpdate"
      }
      async run(client, emoji) {
        console.log(emoji.url)
      }
    };`
    error= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "error"
      }
      async run(client, error) {
        console.log(error)
      }
    };`
    guildBanAdd= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildBanAdd"
      }
      async run(client, guild, user) {
        console.log(guild.name, user.username)
      }
    };`
    guildBanRemove= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildBanRemove"
      }
      async run(client, guild, user) {
        console.log(guild.name, user.username)
      }
    };`
    guildCreate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildCreate"
      }
      async run(client, guild) {
        console.log(guild.name)
      }
    };`
    guildDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildDelete"
      }
      async run(client, guild) {
        console.log(guild.name)
      }
    };`
    guildIntegrationsUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildIntegrationUpdate"
      }
      async run(client, guild) {
        console.log(guild.name)
      }
    };`
    guildMemberAdd= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildMemberAdd"
      }
      async run(client, member) {
        console.log(member.user.username)
      }
    };`
    guildMemberRemove= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildMemberRemove"
      }
      async run(client, member) {
        console.log(member.user.username)
      }
    };`
    guildMembersChunk= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildMemberChunk"
      }
      async run(client, members, chunk) {
        console.log(member.user.username)
      }
    };`
     guildMemberSpeaking= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildMemberSpeaking"
      }
      async run(client, member, speaking) {
        console.log(member.user.username)
      }
    };`
    guildMemberUpdat= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, oldMember, newMember) {
        console.log(oldMember.user.username, newMember.user.username)
      }
    };`
    guildUnavailable= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildUnavailable"
      }
      async run(client, guild) {
        console.log(guild.name)
      }
    };`
    guildUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "guildUpdate"
      }
      async run(client, oldGuild, newGuild) {
        console.log(oldGuild.name, newGuild.name)
      }
    };`
    invalidated= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "invalidated"
      }
      async run(client) {
        console.log(client.name)
      }
    };`
inviteCreate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "inviteCreate"
      }
      async run(client, invite) {
        console.log(invite.url)
      }
    };`
inviteDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "inviteDelete"
      }
      async run(client, invite) {
        console.log(invite.url)
      }
    };`
messageDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "messageDelete"
      }
      async run(client, message) {
        console.log(message.content)
      }
    };`
messageDeleteBulk= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "messageDeleteBulk"
      }
      async run(client, messages) {
        console.log(message)
      }
    };`
messageReactionAdd= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "messageReactionAdd"
      }
      async run(client, reaction, user) {
        console.log(reaction.message.content)
      }
    };`
messageReactionRemove= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "messageReactionRemove"
      }
      async run(client, reaction, user) {
        console.log(reaction.message.content)
      }
    };`
messageReactionRemoveAll= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "messageReactionRemoveAll"
      }
      async run(client, message) {
        console.log(message.content)
      }
    };`
messageReactionRemoveEmoji= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "messageReactionRemoveEmoji"
      }
      async run(client, reaction) {
        console.log(reaction.message.content)
      }
    };`
messageUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "messageUpdate"
      }
      async run(client, message) {
        console.log(message.content)
      }
    };`
presenceUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "presenceUpdate"
      }
      async run(client, oldPresence, newPresence) {
        console.log(oldPresence.activities, newPresence.activities)
      }
    };`
rateLimit= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "rateLimit"
      }
      async run(client, "info" = { timeout, limit, method, path, route}) {
        console.log(info)
      }
    };`
roleCreate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "roleCreate"
      }
      async run(client, role) {
        console.log(role.name)
      }
    };`
roleDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "roleDelete"
      }
      async run(client, role) {
        console.log(role.name)
      }
    };`
roleUpdate= `module.exports = class {
      constructor(client) {
        this.name = "roleUpdate"
        this.client = client;
      }
      async run(client, oldRole, newRole) {
        console.log(role.name)
      }
    };`
shardDisconnect= `module.exports = class {
      constructor(client) {
        this.name = "shardDisconnect"
        this.client = client;
      }
      async run(client, event, id) {
        event()
      }
    };`
shardError= `module.exports = class {
      constructor(client) {
        this.name = "shardError"
        this.client = client;
      }
      async run(client, error, shardID) {
        console.log(error)
      }
    };`
shardReady= `module.exports = class {
      constructor(client) {
        this.name = "shardReady"
        this.client = client;
      }
      async run(client, id, unavailableGuilds) {
        console.log(id)
      }
    };`
shardReconnecting= `module.exports = class {
      constructor(client) {
        this.name = "shardReconnecting"
        this.client = client;
      }
      async run(client, id) {
        console.log(id)
      }
    };`
shardResume= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "shardResume"
      }
      async run(client, id, replayedEvents) {
        console.log(id)
      }
    };`
typingStart= `module.exports = class {
      constructor(client) {
        this.name = "typingStart"
        this.client = client;
      }
      async run(client, channel, user) {
        console.log(id)
      }
    };`
userUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "userUpdate"
      }
      async run(client, oldUser, newUser) {
        console.log(oldUser.username, newUser.username)
      }
    };`
voiceStateUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "voiceStateUpdate"
      }
      async run(client, oldState, newState) {
        console.log(oldState.channel.name, newState.channel.name)
      }
    };`
warn= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "warn"
      }
      async run(client, info) {
        console.log(info)
      }
    };`
webhookUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
        this.name = "webhookUpdate"
      }
      async run(client, channel) {
        console.log(channel.name)
      }
    };`
  }
  export default Events;
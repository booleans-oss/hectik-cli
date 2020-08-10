class Events {
  channelCreate = `module.exports = class {
    constructor(client) {
      this.client = client;
    }
    async run(client, newChannel) {
      console.log(newChannel.name)
    }
  };`
  channelDelete = `module.exports = class {
    constructor(client) {
      this.client = client;
    }
    async run(client, oldChannel) {
      console.log(newChannel.name)
    }
  };`
  channelPinsUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, channel, time) {
        console.log(channel.name, time)
      }
    };`
    channelUpdate=`module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, oldChannel, newChannel) {
        console.log(oldChannel.name, newChannel.name)
      }
    };`
    debug= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, info) {
        console.log(info)
      }
    };`
    emojiCreate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, emoji) {
        console.log(emoji.url)
      }
    };`
    emojiDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, emoji) {
        console.log(emoji.url)
      }
    };`
    emojiUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, emoji) {
        console.log(emoji.url)
      }
    };`
    error= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, error) {
        console.log(error)
      }
    };`
    guildBanAdd= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, guild, user) {
        console.log(guild.name, user.username)
      }
    };`
    guildBanRemove= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, guild, user) {
        console.log(guild.name, user.username)
      }
    };`
    guildCreate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, guild) {
        console.log(guild.name)
      }
    };`
    guildDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, guild) {
        console.log(guild.name)
      }
    };`
    guildIntegrationsUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, guild) {
        console.log(guild.name)
      }
    };`
    guildMemberAdd= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, member) {
        console.log(member.user.username)
      }
    };`
    guildMemberRemove= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, member) {
        console.log(member.user.username)
      }
    };`
    guildMembersChunk= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, members, chunk) {
        console.log(member.user.username)
      }
    };`
     guildMemberSpeaking= `module.exports = class {
      constructor(client) {
        this.client = client;
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
      }
      async run(client, guild) {
        console.log(guild.name)
      }
    };`
    guildUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, oldGuild, newGuild) {
        console.log(oldGuild.name, newGuild.name)
      }
    };`
    invalidated= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client) {
        console.log(client.name)
      }
    };`
inviteCreate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, invite) {
        console.log(invite.url)
      }
    };`
inviteDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, invite) {
        console.log(invite.url)
      }
    };`
messageDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, message) {
        console.log(message.content)
      }
    };`
messageDeleteBulk= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, messages) {
        console.log(message)
      }
    };`
messageReactionAdd= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, reaction, user) {
        console.log(reaction.message.content)
      }
    };`
messageReactionRemove= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, reaction, user) {
        console.log(reaction.message.content)
      }
    };`
messageReactionRemoveAll= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, message) {
        console.log(message.content)
      }
    };`
messageReactionRemoveEmoji= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, reaction) {
        console.log(reaction.message.content)
      }
    };`
messageUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, message) {
        console.log(message.content)
      }
    };`
presenceUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, oldPresence, newPresence) {
        console.log(oldPresence.activities, newPresence.activities)
      }
    };`
rateLimit= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, "info" = { timeout, limit, method, path, route}) {
        console.log(oldPresence.activities, newPresence.activities)
      }
    };`
roleCreate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, role) {
        console.log(role.name)
      }
    };`
roleDelete= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, role) {
        console.log(role.name)
      }
    };`
roleUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, oldRole, newRole) {
        console.log(role.name)
      }
    };`
shardDisconnect= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, event, id) {
        event()
      }
    };`
shardError= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, error, shardID) {
        console.log(error)
      }
    };`
shardReady= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, id, unavailableGuilds) {
        console.log(id)
      }
    };`
shardReconnecting= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, id) {
        console.log(id)
      }
    };`
shardResume= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, id, replayedEvents) {
        console.log(id)
      }
    };`
typingStart= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, channel, user) {
        console.log(id)
      }
    };`
userUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, oldUser, newUser) {
        console.log(oldUser.username, newUser.username)
      }
    };`
voiceStateUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, oldState, newState) {
        console.log(oldState.channel.name, newState.channel.name)
      }
    };`
warn= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, info) {
        console.log(info)
      }
    };`
webhookUpdate= `module.exports = class {
      constructor(client) {
        this.client = client;
      }
      async run(client, channel) {
        console.log(channel.name)
      }
    };`
  }
  export default Events;
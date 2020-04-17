

module.exports = {
    name: "kick",
    description: "Pour kick un membre de ton serveur.",
    guildOnly: true,
    execute(msg, args, taggedUser) {
        if (!msg.mentions.users.size) {
            return msg.reply("Mentioner quel qu'un pour le kicker!");
        }
            msg.channel.send(`Vous aller kicker ${taggedUser.username}`);
    }

}


module.exports = {
    name: "serveur",
    description: "Savoir les indormation sur un serveur.",
    guildOnly: true,
    execute(msg, args) {
        msg.channel.send(`Ce serveur s'appel: ${msg.guild.name}\nMembres Totals: ${msg.guild.memberCount}`);
    },
};
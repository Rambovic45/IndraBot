module.exports = {
    name: "avatar",
    description: "Pour afficher l'avtar de vos ami ou de vous.",
    execute(msg, args) {
        if (!msg.mentions.users.size) {
            return msg.channel.send(`Ton avatar: <${msg.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }

        const avatarList = msg.mentions.users.map(user => {
            return `L'avatar de: ${user.username} est <${user.displayAvatarURL({ format: "png", dynamic: true })}> \n`;
        });
        

        msg.channel.send(avatarList);
    },
};
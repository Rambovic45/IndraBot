module.exports = {
    name: "user-info",
    description: "Avoir les donnée d<un utilisateur discord.",
    execute(msg, args) {
        msg.channel.send(`Ton pseudo: ${msg.author.username}\nTon id: ${msg.author.id}`);
    },
};
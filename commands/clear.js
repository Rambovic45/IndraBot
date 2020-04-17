module.exports = {
    name: "clear",
    description: "Pour vider les salons",
    execute(msg, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return msg.reply("C'est pas un nombre valide !");
        } else if (amount <= 1 || amount > 100) {
            return msg.reply("Ta besoin d'un nombres entre 1 et 99 !");
            msg.channel.bulkDelete(amount, true).catch(err => {
                console.error(err);
                msg.channel.send("Il y a un bug ! ;( ");
            });
        };
    },
};
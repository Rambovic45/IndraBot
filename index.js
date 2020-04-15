const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const token = require("./token.json");

client.login(token.Token);

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if (error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");

    if (commandes.length <= 0) return console.log("Aucune commandes trouver !");

    commmandes.forEach((f) => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commandes chargée !`);

    client.commands.set(commande.help.name, commandes);
    });
});

fs.readdir("./Events", (error, f) => {
    if (error) console.log(error);
    console.log(`${f.length} events en chargement !`);
    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});
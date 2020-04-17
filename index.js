const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { Token } = require("./token.json");
const { prefix } = require("./config.json");

client.login(Token);
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};


client.on("ready", () => {
    console.log("Bot On")
})

 client.on("message", msg => {
     if (!msg.content.startsWith(prefix) || msg.author.bot) return;
        const args = msg.content.slice(prefix.length).split(/ +/);
	    const commandName = args.shift().toLowerCase();
        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);

        if (command.guildOnly && msg.channel.type !== "text") {
            return msg.reply("Sa ne marche pas dans les message priver !")
        }

        if (command.args && !args.length) {
            return msg.channel.send(`Manque des args a ta commande, ${msg.author} !`)
        }

        try {
	        command.execute(message, args);
        } catch (error) {
	        console.error(error);
	        msg.reply("Bug");
    };
 });

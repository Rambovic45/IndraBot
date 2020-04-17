module.exports = {
    name: "args-info",
    description: "savoir des info sur les argument dit.",
    args: true,
    execute(msg, args) {
        if (args[0] === "foo")
            return msg.channel.send("bar");
        }, else () {
            msg.channel.send(`Args: ${args[0]}\nArgs Complet: ${args}`);
        },
        
    };

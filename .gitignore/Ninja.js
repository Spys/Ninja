const Discord = require('discord.js');

var prefix = "n'";

var bot = new Discord.Client();
var client= new Discord.Client();

client.on("ready", () => {
    client.user.setActivity("Loading...")
    console.log("Je suis connecté");
});

bot.on("message", async function(message) {
    switch (args[0].toLowerCase()) {
        case "test":
                    var aide_embed = new Discord.RichEmbed() 
            .setTitle("Hey !")
               message.channel.send(aide_embed)
        break;
   }

);

bot.login(process.env.TOKEN)


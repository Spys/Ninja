const Discord = require('discord.js');

var prefix = "^";

var bot = new Discord.Client();
var client= new Discord.Client();


client.on("ready", () => {    
    client.user.setActivity("Loading...")
    console.log("Je suis connecté");
});   

client.on('message', function(message) {
    if(message.content === prefix + "Ninaide") {
            var aide_embed = new Discord.RichEmbed()
                   .setColor("#000101")
                   .setTitle("test")
                   .addField("test")
           message.channel.send(aide_embed);
   }
  
});

bot.login(process.env.TOKEN)


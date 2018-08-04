const Discord = require('discord.js');

var prefix = "!";

var client = new Discord.Client();
  
client.on("message", async function(message) {

switch(args[0].toLowerCase()) {
  case"aide":
  var aide_embed = new Discord.RichEmbed()
   .setTitle("Bienvenue sur la command !aide")
   .setDescription("toutes les comand se retrouverons juste ici :)")
   .addField("!aide", "Vous affiche Toutes les comand du bot")
message.channel.send(aide_embed)
break;
}
})
client.login(process.env.TOKEN)

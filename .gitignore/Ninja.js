const Discord = require('discord.js');

var prefix = "!";

var bot = new Discord.Client();
  
bot.on("message",async function(message) {
 switch(args[0].toLowerCase()) {
  case"aide":
  var aide_embed = new Discord.RichEmbed
   .setTitle("test !")
   .setDescription("test")
   .addField("teste 2","ceci et un test pour les future")
message.channel.send(aide_embed)
break;
 }

})

bot.login(process.env.TOKEN)

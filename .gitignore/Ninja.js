const Discord = require('discord.js');

var prefix = "!";

var client = new Discord.Client();
  
client.on("message",async function(message)) {
if (message.author.equals(bot.user)) return;

if (!message.content.startsWith(prefix)) return;

var args = message.content.substring(prefix.length).split (" ");

var args2 = message.content.split(" ").slice(1);

var guild = message.guild;

var member = message.member;

 switch(args[0].toLowerCase()) {
  case"aide":
  var aide_embed = new Discord.RichEmbed
   .setTitle("test !")
   .setDescription("test")
   .addField("teste 2","ceci et un test pour les future")
message.channel.send(aide_embed)
break;
})
}

client.login(process.env.TOKEN)

const Discord = require('discord.js');

var prefix = "n-";

var client = new Discord.Client();
  
client.on("message", async function(message) {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split (" ");
    
    var args2 = message.content.split(" ").slice(1);
    
    var guild = message.guild;
    
    var member = message.member;
switch(args[0].toLowerCase()) {
  case"aide":
   var aide_embed = new Discord.RichEmbed()
    .setTitle("Bienvenue sur la command !aide")
    .setDescription("toutes les comand se retrouverons juste ici :)")
    .addField("n-aide", "Vous affiche Toutes les comand du bot")
    .addField("n-infoServ", "le bot vous donne quelque information utile sur le serveur!")
  message.channel.send(aide_embed)
break;
 }
})
client.on("message", async function(message) {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split (" ");
    
    var args2 = message.content.split(" ").slice(1);
    
    var guild = message.guild;
    
    var member = message.member;
switch(args[0].toLowerCase()) {
    case"infoServ":
     var infoserv_embed = new Discord.RichEmbed()
      .setTitle("Command infoserv")
      .setDescription("cette comand Vous permet de voir les Statistiques de votre Serveur")
      .addField("")
      message.channel.send(infoserv_embed)
break;
}
})

           client.login(process.env.TOKEN)

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
    .setColor("#F401FD")
    .setTitle("Bienvenue sur la command !aide")
    .setDescription("toutes les comand se retrouverons juste ici :)")
    .addField("n-aide", "Vous affiche Toutes les comand du bot")
    .addField("n-infoserv", "le bot vous donne quelque information utile sur le serveur!")
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
    case"infoserv":
     var infoserv_embed = new Discord.RichEmbed()
      .setColor("#F401FD")
      .setTitle("Command infoserv")
      .setDescription("cette comand Vous permet de voir les Statistiques de votre Serveur")
      .addField("Nombre de personnes", `il y a ${r.memberCount} Personnes sur le Serveur`)
      message.channel.send(infoserv_embed)
break;
}
})
client.login(process.env.TOKEN)

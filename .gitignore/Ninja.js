const Discord = require('discord.js');
var prefix = "n'";

var bot = new Discord.Client();
var client= new Discord.Client();

client.on("ready", () => {   
    client.user.setActivity("Loading...")
    console.log("Je suis connecté");
});

bot.login(process.env.TOKEN)

if(message.content === prefix + "aide"){
    var aide_embed = new Discord.RichEmbed()
     .setColor("#000101")
     .setTitle("Toutes mes command sont ici!")
     .setDescription("ces command Peuves etre modifier")
     .addField("n'aide", "Affiche Toutes command du Bot!")
}

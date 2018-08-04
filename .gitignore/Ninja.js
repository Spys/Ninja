const Discord = require('discord.js');

var prefix = "n'";

var bot = new Discord.Client();
var client = new Discord.Client();

client.on("ready", () => {    
    client.user.setActivity("Loading...")
    console.log("Je suis connecté");
});   

client.on("message",async function(message) {
 switch(args[0].toLowerCase()) {
  case"aide":
  var aide_embed = new Discord.RichEmbed
   .setTitle("test !")
   .setDescription("test")
   .addField("teste 2","ceci et un test pour les future")
 }

})

bot.login(process.env.TOKEN)

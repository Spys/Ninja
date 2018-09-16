const Discord = require("discord.js");
 
var prefix = "S_";
 
var client = new Discord.Client();
 
client.on(`ready`, function () {
    console.log("Je suis connecter !");
    client.user.setActivity("reinitialisation...")
})
client.login(process.env.TOKEN);

const Discord = require('discord.js');
var prefix = "n'";

var bot = new Discord.Client();
var client= new Discord.Client();

client.on("ready", () => {    
    console.log("Je suis connecté");
});

bot.login(process.env.TOKEN)

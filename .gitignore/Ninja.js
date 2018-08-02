const Discord = require('discord.js');

var client = new Discord.client();

var prefix = "n'";

client.login(process.env.TOKEN)

client.on("ready", () => {    
    console.log("Je suis connecté");
});

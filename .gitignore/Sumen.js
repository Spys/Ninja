const Discord = require("discord.js");
 
var prefix = "S_";
 
var client = new Discord.Client();

const ytdl = require('ytdl-core');

const queue = new Map();

var servers = {};
 
client.on(`ready`, function () {
    console.log("Je suis connecter !");
    client.user.setActivity("Programmation...")
})

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispachter.on("end", function() {
        if (server.queue[0]) play(connection, message);

        else connection.disconnect();

    })
}
client.on("message", message => {
      if(message.content === prefix + "aide")
      var aide_embed = new Discord.RichEmbed()
      .setColor("#61BCFF")
      .setTitle("|*Voici ma liste de mes command*")
      .setDescription("**Toutes mes command y seront Archive**")
      .addField("S_aide", "|Vous aideras Pour les commands")
      .setFooter("Sumen |By Nefer#4398")
      message.channel.sendMessage(aide_embed);

})
client.login(process.env.TOKEN);

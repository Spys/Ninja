const Discord = require("discord.js");
 
var prefix = "s_";
 
var client = new Discord.Client();

const ytdl = require('ytdl-core');

const queue = new Map();

var servers = {};
 
client.on(`ready`, function () {
    console.log("Je suis connecter !");
    client.user.setActivity("s_aide | By nefer")
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
         .setDescription("**Toutes mes command y seront Archiver**")
         .addField("s_aide", "| Vous aideras Pour les commands")
         .addField("s_invite", "| Envoie la seul invitation du bot")
         .addField("s_statistiques", "| Vous envoie vos Statistiques en message prive")
         .addField("s_infobot", "| je vous montre toutes Mes Information")
         .addField("s_infoserv", "| Je vous montre quelques Informations sur le serveur")
         .addField("s_kick", "| Vous permet de Kick une personnes")
         .addField("s_ban", "| ban la personne demander")
         .addField("s_clear", "| suprime le nombre de message demander")
         .setFooter("__Sumen__| By Nefer#4398")
      message.channel.sendMessage(aide_embed);

      if(message.content === prefix + "invite")
        var invite_embed = new Discord.RichEmbed()
         .setColor("#61BCFF")
         .setTitle("| *Voici m'a seul invitations Disponnible!*")
         .setDescription("Merci de l'envoyer a plusieur personne")
         .addField("| **Link:** *https://discordapp.com/oauth2/authorize?client_id=490798358168993792&scope=bot&permissions=2146958847*")
         .setFooter("__Sumen__ | By *Nefer#4398*")
         message.channel.sendMessage(invite_embed);

         if(!message.content.startsWith(prefix)) return;
          var args = message.content.substring(prefix.length).split(" ");

        switch (args[0].toLowerCase()) {
          case "statistiques":
             
             var userCreateDate = message.author.createdAt.toString().split(" ");
             var msgauthor = message.author.id;

             var stats_embed = new Discord.RichEmbed()

            .setColor("#4398")
            .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
            .addField(`:id:| de l'utilisateur`, msgauthor, true)
            .addField(":timer:| Date de creation de l'utilisateur:", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
            .setThumbnail(message.author.avatarURL)
            .setFooter("__Sumen__ | By *Nefer#4398*")
            message.reply("| je t'es envoyer t'es Statistiques en Priver !")
            message.author.send({embed: stats_embed});
            message.channel.sendMessage(stats_embed)
            break;
        }
        if(message.content === prefix + "infobot") {
            var infobot_embed = new Discord.RichEmbed()
            .setColor("#4398")
            .setTitle("| Voici quelques Information sur moi !")
            .addField(":robot:| Nom :", `${client.user.tag}`, true)
            .addField(":hash:| Mon Descriminateur :", `#${client.user.discriminator}`)
            .addField(":id:| ID :" , `${client.user.id}`)
            .setFooter("__Sumen__ | By *Nefer#4398*")
            message.channel.sendMessage(infobot_embed)

        }
        if(message.content === prefix + "infoserv") {
            var infoserv_embed = new Discord.RichEmbed()
            .setColor("#4398")
            .setTitle("| Voici Quelques Informations sur le serveur !")
            .addField("| Nombre de membres:", message.guild.member.size)
            .addField("| Nombre de salons & de Categories", message.guild.channels.size)
            .setThumbnail(message.guild.avatarURL)
            .setFooter("__Sumen__ | By *Nefer#4398*")
            message.channel.sendMessage(infoserv_embed)
        }
        if(message.content.startsWith(prefix + "kick")) {
            if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(":warning:| Vous n'avez pas la permission ! ")

            if(message.mentions.users.size === 0) {
                return message.channel.send(":cop:| Vous devez mentionner un utilisateur concerner !")
            }

            var kick = message.guild.member(message.mentions.users.first());
            if(!kick) {
                return message.channel.send(":shrug:| je ne sais pas si l'utilisateur existe")
            }
            if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
                return message.channel.send(":poop:| je n'ai pas la permission de faire ceci")
            }
            kick.kick().then(member => {
                message.channel.send(`${member.user.username} est kick par ${message.author.username}`)
            });
        }
        if(message.content.startsWith(prefix + "ban")) {
          if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(":warning:|Vous n'avez pas la Permission !");
          
          if(message.mentions.users.size ===  0) {
            return message.channel.send(":cop:| Vous devez mentionner l'utilisateur concerner !");  
          }

          var ban = message.guild.member(message.mentions.users.first());
          if(!ban) {
              return message.channel.send(":shrug:| je ne ces pas si l'utilisateur existe");
          }

          if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
              return message.channel.send(":shrug:| je n'ai pas la Permission pour faire ceci");
          }
          ban.ban().then(member => {
              message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
          });
        }
        
        if(message.content.startsWith(prefix + "clear")) {
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !")

          let args = message.content.split(" ").slice(1);

          if(!args[0]) return message.channel.send(":exclamation:| tu dois preciser un nombre de messages a suprimer !")
          message.channel.bulkDelete(args[0]).then(() => {
              message.channel.send(`${args[0]} messages ont ete suprimer !`);
          });
        }
})
client.login(process.env.TOKEN);

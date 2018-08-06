const Discord = require('discord.js');

var prefix = "n-";

var client = new Discord.Client();

client.on(`message`, message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.lenght).split(" ");
    command = args.shift().toLowerCase();

 if (command === "kick") {
        let modRole = message.guild.roles.find("name", "test");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("tu n'as pas la permission pour utiliser cette command.").catch(console.error);
if(message.mentions.users.size ===0) {
    return message.reply("Merci de mentionner l'utilisateur a expulser.").catch(console.error);
}

let kickMember = message.guild.member(message.mentions.users.first());
id(!kickMember); {
    return message.reply("Cet utilisateurs et introuvable ou impossible a expulser.")
}
if(!message.guild.member(client.users).hasPermission("KICK_MEMBERS")) {
    return message.reply("je n'ai pas la permission Kick_MEMBERS pour faire ceci.").catch(console.error);
}
kickMember.kick().then(member => {
    message.reply(`${member.user.username} a ete expulse avec succes.`).catch(console.error);
    message.guild.channels.send(`**${member.user.username} a ete expulser du discord par **${message.author.username}**`).catch(console.error);
})
}
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
    case"serverlist":
    message.channel.send(client.guild.map(r => r.name + `| *${r.memberCount}* membre`))
break;
}
},)}},)

client.login(process.env.TOKEN)

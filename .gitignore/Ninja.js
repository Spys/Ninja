const Discord = require("discord.js");
 
var prefix = "n-";
 
var client = new Discord.Client();
 
client.on(`ready`, function () {
    console.log("Je suis connecter !");
})
 
client.on(`message`, message => {
    let command = message.content.split(" ")[0];

    const args = message.content.slice(prefix.lenght).split(/ +/);

    if (message.author.equals(client.user)) return;

 
    if (!message.content.startsWith(prefix)) return;
   
    var args2 = message.content.substring(prefix.length).split (" ");
   
    var args3 = message.content.split(" ").slice(1);
   
    var guild = message.guild;
   
    var member = message.member;
 
    if (message.content === prefix + "kick") {
        let modRole = message.guild.roles.find("name", "test");
        if(!message.member.roles.has(modRole)) {
        return message.reply(":cop: |*tu n'as pas la **permission** pour utiliser cette command.*").catch(console.error);
            if(message.mentions.users.size === 0) {
                return message.reply(":shrug: |*Merci de mentionner **l'utilisateur** a expulser.*").catch(console.error);
            }
            let kickMember = message.guild.member(message.mentions.users.first())
            id(!kickMember); {
                return message.reply("|*Cet utilisateurs et **introuvable ou impossible** a expulser.* :thinking:")
            }
            if(!message.guild.member(client.users).hasPermission("KICK_MEMBERS")) {
                return message.reply("|*je n'ai pas la permission Kick_MEMBERS pour faire ceci.* :thumbsdown:").catch(console.error);
            }
            kickMember.kick().then(member => {
                message.reply(`|${member.user.username} a ete expulse avec succes.`).catch(console.error);
                message.guild.channels.send(`:warning: |**${member.user.username}** a ete expulser du discord par **${message.author.username}**`).catch(console.error);
            });
        }
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
    case"aide":
    var aide_embed = new Discord.RichEmbed()
        .setColor("#010101")
        .setTitle("Bienvenue sur le Pannel de command")
        .setDescription("toutes mes command se grouperons ici ")
            .addField("n-aide", "|Vous affiche Toutes les comand du bot")
            .addField("n-infoserv", "|le bot vous donne quelque information utile sur votre serveur !")
            .addField("n-infobot", "|Vous affiche toutes les information du bot")
    message.channel.send(aide_embed)
    break;
    }
});
 client.on("message", async function(message) {
    if (message.author.equals(client.user)) return;
 
    if (!message.content.startsWith(prefix)) return;
   
    var args = message.content.substring(prefix.length).split (" ");
   
    var args2 = message.content.split(" ").slice(1);
   
    var guild = message.guild;
   
    var member = message.member;

    switch(args[0].toLowerCase()) {
    case"infoserv":
    var list_embed = new Discord.RichEmbed()
    message.channel.send(client.guild.map(`r => r.name + | *${r.memberCount}* membre`))
    break;
 }
});
client.on("message", async function(message) {
    if (message.author.equals(client.user)) return;
 
    if (!message.content.startsWith(prefix)) return;
   
    var args = message.content.substring(prefix.length).split (" ");
   
    var args2 = message.content.split(" ").slice(1);
   
    var guild = message.guild;
   
    var member = message.member;
 
    switch(args[0].toLowerCase()) {
    case"infobot":
    var infobot_embed = new Discord.RichEmbed()
        .setColor("#FE0101")
        .setTitle("bienvenue sur ma description")
        .addField(":wrench:|Cree par Nefer.", "->aider et optimiser par ilian.")
        .addField(":tools:|concu Specialement Pour l'administartion.", "->Bot Multifonction (Audio,jeux,ect..)")
        .addField(":warning:|Bot en v0.2.3", "En Devellopement constant.")
    message.channel.send(infobot_embed)
    break;
    }
});
client.login(process.env.TOKEN);

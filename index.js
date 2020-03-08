const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
client.login("NjgxNTg2MzU0OTg3MDczNTg0.XlQqBg.cAUnxMkEBvZZqs6K37YzLxhkhXg");
var prefix = ("*")
client.setMaxListeners (40)
////////////////////////////////////////////CONFIG////////////////////////////////////////////
client.on("ready", async() =>{
    console.log(" ")
    console.log("Connecté en tant que " + client.user.tag)
    client.user.setActivity("Partagez vos créations!", {type : "PLAYING"})
});
////////////////////////////////////////////////////////////////////////////////////////

client.on("message", function(message){
    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong : **${Date.now() - début}**ms`));
};

////////////////////////////////////////////YT////////////////////////////////////////////
client.on("message", function(message){
    const MOD = message.member
    if(!message.guild) return
    if(message.author.bot) return;
    if(message.channel.id === "680861179257684219") return;
    if (
        includesRealy(message, prefix + "Chaîne") ||
        includesRealy(message, prefix + "Chaine") ||
        includesRealy(message, prefix + "chaîne") ||
        includesRealy(message, prefix + "chaine") ||
        includesRealy(message, prefix + "CHAÎNE") ||
        includesRealy(message, prefix + "CHAINE") ||
        includesRealy(message, prefix + "yt") ||
        includesRealy(message, prefix + "YT") 

    )
    if(message.channel.id === "681604596107706405"){
        message.channel.send("Hey " + message.author + "Notre chaîne est : https://www.youtube.com/channel/UC7Ns52PXwAKvHcAkJEw4pbg 😜")
    } else {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete
        message.channel.send("Hey" + message.author + " tu es dans le **mauvais** salon pour effectuer ceci ( <#681604596107706405> )").then(message => message.delete(5000));
    }
}
});

client.on("message", function(message){
    const MOD = message.member
    if(!message.guild) return
    if(message.author.bot) return;
    if(message.channel.id === "680861179257684219") return;
    if (
        includesRealy(message, prefix + "Développeur") ||
        includesRealy(message, prefix + "Dév") ||
        includesRealy(message, prefix + "Dev") ||
        includesRealy(message, prefix + "Developpeur")
        
    )
    if(message.channel.id === "681604596107706405"){
        message.channel.send("Hey " + message.author + "Voici la chaine du développeur de ce bot : https://www.youtube.com/channel/UChOXhLWwPdvUQYYFPcG8LYA 🔧")
    } else {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete
        message.channel.send("Hey" + message.author + " tu es dans le **mauvais** salon pour effectuer ceci ( <#681604596107706405> )").then(message => message.delete(5000));
    }
}
});

client.on("message", function(message){
    const MOD = message.member
    if(!message.guild) return
    if(message.author.bot) return;
    if(message.channel.id === "680861179257684219") return;
    if (
        includesRealy(message, "Développeur") ||
        includesRealy(message, "Dév") ||
        includesRealy(message, "Dev") ||
        includesRealy(message, "Developpeur")
        
    )
    if(message.channel.id === "681604596107706405"){
        message.channel.send("Hey " + message.author + "Voici la chaine du développeur de ce bot : https://www.youtube.com/channel/UChOXhLWwPdvUQYYFPcG8LYA 🔧")
    } else {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete
        message.channel.send("Hey" + message.author + " tu es dans le **mauvais** salon pour effectuer ceci ( <#681604596107706405> )").then(message => message.delete(5000));
    }
}
});
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////DON////////////////////////////////////////////
function includesRealy(msg,str){
    return(
      msg.content.includes(str) ||
      msg.content.includes(str.toUpperCase()) ||
      msg.content.includes(str.toLowerCase())
    )
  }

////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////INSULTES////////////////////////////////////////////
client.on("message", function (message){
    if (
        includesRealy(message, "TG") ||
        includesRealy(message, "Tg") ||
        includesRealy(message, "batard") ||
        includesRealy(message, "tg") ||
        includesRealy(message, "fdp") ||
        includesRealy(message, "pute") ||
        includesRealy(message, "ntm") ||
        includesRealy(message, "enculé") ||
        includesRealy(message, "ftg") ||
        includesRealy(message, "NTM") ||
        includesRealy(message, "FDP") ||
        includesRealy(message, "Fdp") ||
        includesRealy(message, "Fils de pute") ||
        includesRealy(message, "Fils de Pute") ||
        includesRealy(message, "enculer") ||
        includesRealy(message, "connard") ||
        includesRealy(message, "pénis") ||
        includesRealy(message, "bite") ||
        includesRealy(message, "suce") ||
        includesRealy(message, "Suce") ||
        includesRealy(message, "Bite") ||
        includesRealy(message, "pd") ||
        includesRealy(message, "salope") ||
        includesRealy(message, "Salope") ||
        includesRealy(message, "SALOPE") ||
        includesRealy(message, "PD") ||
        includesRealy(message, "Pd")
    )
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        client.channels.get("681581092662280212").send("Le **message** de " + message.author + " a été supprimé pour **Insulte** ! **(**" + message + "**)**")
        function Insultes(){ 
        message.delete();
        message.channel.send("**Hey** " + message.author + " **les insultes sont interdites !** :rage:").then(message => message.delete(5000));
    }
        setTimeout(Insultes, 1000)
    } else {
        return;
    }

});
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////KICK////////////////////////////////////////////
client.on("message", function (message) {
    let kicker = message.author.username
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "kick") {
    message.delete()
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: | Vous **n'avez pas la permission** d'effectuer ceci " + message.author).then(m => m.delete(5000))
    let user = message.mentions.members.first();
    if(!user) return message.channel.send(":x: | Veuillez mentionner un utilisateur valide !").then(m => m.delete(5000))
    if(user.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id != message.guild.ownerID) return message.channel.send(":x: | Vous ne pouvez pas **exclure cet utilisateur** **(Permission Insuffisante)**").then(m => m.delete(5000))
    let reason = args.slice(2).join(" ");
    if(!reason) return message.channel.send(":x: | Vous devez saisir **une raison** !").then(m => m.delete(5000))
    if(!user.kickable) return message.channel.send(":x: | Cet **utilisateur** ne peut pas être exclu").then(m => m.delete(5000))
    user.send("Vous avez été kick du serveur Skill'Art :art: par **" + kicker + "** pour : **" + reason + "** !")
    function KickUser(){ 
    message.channel.send(":white_check_mark: | L'utilisateur " + user + " a bien été kick pour " + reason + " par " + kicker + " !").then(m => m.delete(5000))
    client.channels.get("681592760985583662").send(user + " a été **kick** par **" + kicker + "** pour : **" + reason + "** !")
    user.kick(reason);
}
    setTimeout(KickUser, 1000)
}
});
////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////BAN////////////////////////////////////////////

client.on("message", function (message) {
    let banner = message.author.username
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "ban") {
    message.delete()
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: | Vous **n'avez pas la permission** d'effectuer ceci " + message.author).then(m => m.delete(5000))
    let user = message.mentions.members.first();
    if(!user) return message.channel.send(":x: | Veuillez mentionner un utilisateur valide !").then(m => m.delete(5000))
    if(user.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id != message.guild.ownerID) return message.channel.send(":x: | Vous ne pouvez pas **bannir cet utilisateur** **(Permission Insuffisante)**").then(m => m.delete(5000))
    let reason = args.slice(2).join(" ");
    if(!reason) return message.channel.send(":x: | Vous devez saisir **une raison** !").then(m => m.delete(5000))
    if(!user.bannable) return message.channel.send(":x: | Cet **utilisateur** ne peut pas être banni").then(m => m.delete(5000))
    user.send("Vous avez été ban du serveur Skill'Art :art: par **" + banner + "** pour : **" + reason + "** !")
    function BanUser(){ 
    message.channel.send(":white_check_mark: | L'utilisateur " + user + " a bien été banni pour " + reason + " par " + banner + " !").then(m => m.delete(5000))
    client.channels.get("681592760985583662").send(user + " a été **ban** par **" + banner + "** pour : **" + reason + "** !")
    user.ban(reason);
}
    setTimeout(BanUser, 1000)
}
});

////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////MUTE/////////////////////////////////////////////////

client.on("message", function (message){
    let muter = message.author.username
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "mute") {
        message.delete()
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply(":x: | Vous n'avez pas la permission de faire ceci").then (m => m.delete(5000))
        let user = message.mentions.members.first();
        if(!user) return message.reply(":x: | Vous devez saisir un utilisateur valide").then (m => m.delete(5000))
        if(user.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id != message.guild.ownerID) return message.channel.send(":x: | Vous ne pouvez pas **mute cet utilisateur** **(Permission Insuffisante)**").then(m => m.delete(5000))
        let reason = args.slice(2).join(" ");
        if(!reason) return message.reply(":x: | Vous devez saisir une raison !").then (m => m.delete(5000))
        if(!user.bannable) return message.reply(":x: | Cet utilisateur ne peut pas être mûte").then (m => m.delete(5000))
        user.send("Vous venez d'être mute du serveur Skill'Art :art: par **" + muter + "** pour : **" + reason + "** pendant 10 minutes !")
        user.addRole("681581315971350565")
        user.removeRole("681581888028278853")
        message.channel.send(":white_check_mark: | L'utilisateur " + user + " a bien été mûte pour " + reason + " par " + muter + " !").then(m => m.delete(5000))
        client.channels.get("681592760985583662").send(user + " a été **mûte** par **" + muter + "** pour : **" + reason + "** pendant 10 minutes !")
        function StopMute(){
        user.send("Vous venez d'être unmute du serveur Skill'Art :art:")
        user.removeRole("681581315971350565")
        user.addRole("681581888028278853")
        message.channel.send(":white_check_mark: | L'utilisateur " + user + " a été unmute").then(m => m.delete(5000))
        client.channels.get("681592760985583662").send(user + " a été **unmute**!")
        }
    setTimeout(StopMute, 600000)
    }
});

client.on("message", function (message){
    let unmuter = message.author.username
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "unmute") {
        message.delete()
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply(":x: | Vous n'avez pas la permission de faire ceci").then (m => m.delete(5000))
        let user = message.mentions.members.first();
        user.send("Vous venez d'être unmute du serveur Glitch Community :ghost: par " + unmuter + " !")
        user.removeRole("681581315971350565")
        user.addRole("681581888028278853")
        message.channel.send(":white_check_mark: | L'utilisateur " + user + " a été unmute").then(m => m.delete(5000))
        client.channels.get("681592760985583662").send(user + " a été **unmute** par **" + unmuter + "** !")
    }
});

const warns = JSON.parse(fs.readFileSync('./warns.json'))
 
client.login('NjgxNTg2MzU0OTg3MDczNTg0.XlQqBg.cAUnxMkEBvZZqs6K37YzLxhkhXg')
 
client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("Veuillez indiquer une raison")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(member + " a été warn pour " + reason + " :white_check_mark:")
        client.channels.get("681592760985583662").send(member + " a été **warn** par **" + message.author + "** pour : **" + reason + "** !")

    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on("message", function (message){
    let muter = message.author.username
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "supermute") {
        message.delete()
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply(":x: | Vous n'avez pas la permission de faire ceci").then (m => m.delete(5000))
        let user = message.mentions.members.first();
        if(!user) return message.reply(":x: | Vous devez saisir un utilisateur valide").then (m => m.delete(5000))
        if(user.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id != message.guild.ownerID) return message.channel.send(":x: | Vous ne pouvez pas **supermute cet utilisateur** **(Permission Insuffisante)**").then(m => m.delete(5000))
        let reason = args.slice(2).join(" ");
        if(!reason) return message.reply(":x: | Vous devez saisir une raison !").then (m => m.delete(5000))
        if(!user.bannable) return message.reply(":x: | Cet utilisateur ne peut pas être mûte").then (m => m.delete(5000))
        user.send("Vous venez d'être supermutemute du serveur Skill'Art :art: par **" + muter + "** pour : **" + reason + "** pendant 1 heure !")
        user.addRole("681581315971350565")
        user.removeRole("681581888028278853")
        message.channel.send(":white_check_mark: | L'utilisateur " + user + " a bien été supermute pour " + reason + " par " + muter + " !").then(m => m.delete(5000))
        client.channels.get("681592760985583662").send(user + " a été **supermute** par **" + muter + "** pour : **" + reason + "** pendant 1 heure !")
        function StopMute1(){
        user.send("Vous venez d'être unmute du serveur Skill'Art :art:")
        user.removeRole("681581315971350565")
        user.addRole("681581888028278853")
        message.channel.send(":white_check_mark: | L'utilisateur " + user + " a été unmute").then(m => m.delete(5000))
        client.channels.get("681592760985583662").send(user + " a été **unmute**!")
        }
    setTimeout(StopMute1, 3600000)
    }
});

client.on("message", function(message){
    let args = message.content.trim().split(/ +/g)
    if (!message.guild) return
    if (args[0].toLowerCase() === prefix + "clear") {
        message.delete()
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: | Vous n'avez pas la permission de faire ceci").then (m => m.delete(5000))
        let nombre = args.slice(1);
        if(!nombre) return message.reply(":x: | Vous devez saisir un nombre !").then (m => m.delete(5000))
        if(nombre <= 0) return message.reply(":x: | Vous devez saisir un nombre entre 0 et 100").then (m => m.delete(5000))
        if(nombre > 100) return message.reply(":x: | Vous ne pouvez pas saisir un nombre supérieur à 100").then (m => m.delete(5000))
        client.channels.get("681581092662280212").send(message.author + " a supprimé **" + nombre + "** messages !")
        message.channel.bulkDelete(args[1])
        message.channel.send(":white_check_mark: | Vous avez bien supprimé " + nombre + " messages !").then(m => m.delete(5000))
    }
 
});

////////////////////////////////////REAC PHOTO////////////////////////////////////////////////////   
client.on("message", function (message){
    if(message.channel.id === "681597240611176479" || message.channel.id === "681597306033930400" || message.channel.id === "681597367551787024" || message.channel.id === "681597673203040362" || message.channel.id === "681597673203040362" || message.channel.id === "681612157657677905") {
    if(message.attachments.size > 0) {
        message.react("✅")
        message.react("❌")
    }
    if(message.content.startsWith("http")){
        message.react("✅")
        message.react("❌")
    }
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////TEMP MUTE/BAN//////////////////////////////////////////////////


client.on("message", function (message){
    let args = message.content.trim().split(/ +/g)
    if (!message.guild) return
    if (args[0].toLowerCase() === prefix + "tempmute") {
    message.delete()
    let user = message.mentions.members.first();
    let muter = message.author
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply(":x: | Vous n'avez pas la permission d'effectuer ceci !").then(m => message.deleta(5000))
    if(!user) return message.reply(":x: | Vous devez saisir un utilisateur valide !").then(m => m.delete(5000))
    let temps = args[2];
    if(!temps) return message.reply(":x: | Vous devez saisir un temps !").then(m => m.delete(5000))
    let raison = args.slice(3).join(" ");
    if(!raison) return message.reply(":x: | Vous devez saisir une raison !").then(m => m.delete(5000))
    if(!temps > 0) message.reply(":x: | Vous devez saisir une durée supérieure à 0 !").then(m => m.delete(5000))
    user.send("Vous venez d'être **mute** de Skill'Art :art: pendant : **" + temps + "** pour : **" + raison + "** par : **" + muter + "** !")
    user.addRole("681581315971350565")
    user.removeRole("681937442517024804")
    message.channel.send(":white_check_mark: | L'utilisateur " + user + " a bien été tempmute pour " + raison + " par " + muter + " !").then(m => m.delete(5000))
    client.channels.get("681592760985583662").send(user + " a été **tempmute** par ** " + muter + "** pour : **" + raison + "** pendant : **" + temps + "** !")
    setTimeout(function(){
        user.removeRole("681581315971350565")
        user.addRole("681937442517024804")
        client.channels.get("681592760985583662").send(user + " vient d'être **unmute** par ** " + muter + "** pour une durée de mute de **" + temps + "** !")
        user.send("Vous venez d'être unmute du serveur !")
    }, ms(temps));

    }
}); 

client.on("message", function(message){
    let args = message.content.trim().split(/ +/g)
    if (!message.guild) return
    if (args[0].toLowerCase() === prefix + "tempban") {
    message.delete()
    let user = message.mentions.members.first();
    let muter = message.author
    let temps = args[2];
    let raison = args.slice(3).join(" ");
    let reason = "Temps du tempban écoulé !"
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply(":x: | Vous n'avez pas la permission de faire ceci !").then(m => m.delete(5000))
    if(!user) return message.reply(":x: | Vous devez mentionner un utilisateur valide").then(m => m.delete(5000))
    if(!temps) return message.reply(":x: | Vous devez saisir une durée !").then(m => m.delete(5000))
    if(!raison) return message.reply(":x: | Vous devez saisir une raison !").then(m => m.delete(5000))
    if(temps < 0) return message.reply(":x: | Vous devez saisir une durée supérieure à 0 !").then(m => m.delete(5000))
    user.send("Vous venez d'être **tempban** de Skill'Art :art: pendant : **" + temps + "** pour : **" + raison + "** par : **" + muter + "** !")
    user.ban(raison)
    client.channels.get("681592760985583662").send(user + " vient d'être tempban par **" + muter + "** pour : **" + raison + "** pendant : **" + temps + "** !")
    message.channel.send(":white_check_mark: | Joueur tempban avec succès").then(m => m.delete(5000))
    setTimeout (function(){
        message.guild.unban(user)
        client.channels.get("681592760985583662").send("Le **tempban** de **" + user + "** vient de prendre fin!")
    }, ms(temps));


    }
});

/////////////////////////////////////////MENU D'AIDE//////////////////////////////////////////////
client.on("message", function(message){
    let user = message.member
    let args = message.content.trim().split(/ +/g)
    let embed = new Discord.RichEmbed()
        .setTitle("Menu d'aide pour les créateurs :art:")
        .setDescription("Voici le menu d'aide de notre serveur :yum:, ces commandes sont à effectuer dans le salon commandes-bot !")
        .addField("(Chaine)", "Vous permet de connaître la chaîne des fondateurs. :orange_heart:")
        .addField("(Développeur)", "Vous permet de connaître la chaîne du développeur du bot :wrench:")
        .setColor("ffe6ff")
        .setFooter("Bon moment parmis nous !")
    let embedstaff = new Discord.RichEmbed()
        .setTitle("Menu d'aide Staff")
        .setDescription("Ceci est le menu d'aide staff :wrench:")
        .addField("(Clear)", "• Cette commande permet de supprimer un certain nombre de message (*Clear {nombre})")
        .addField("(Kick)", "• Cette commande permet de kick un utilisateur (*Kick {@membre} {raison})")
        .addField("(Ban)", "• Cette commande permet de bannir un utilisateur (*ban {@membre} {raison})")
        .addField("(Mute)", "• Cette commande vous permet de mute un utilisateur 10 minutes (*mute {@membre} {raison})")
        .addField("(SuperMute)", "• Cette commande vous permet de mute un utilisateur 1 heure (*supermute {@membre} {raison}")
        .addField("(Unmute)", "• Cette commande vous permet d'unmute un utilisateur (*unmute {@membre})")
        .addField("(Warn)", "• Cette commande vous permet de Warn un utilisateur (*warn {@membre} {raison})")
        .addField("(Infractions)", "• Cette commande vous permet de voir les Infractions d'un utilisateur (*infractions {@membre})")
        .addField("(Tempmute)", "• Cette commande vous permet de mute temporairement un utilisateur (*tempmute {@user} {temps (par exemple 5m, 5s, 5h) {raison})")
        .addField("(Tempban)", "• Cette commande vous permet de ban temporairement un utilisateur (*tempban {@user} {temps} {raison})")
        .addField("(Unmute)", "• Cette commande vous permet d'enlever le mute d'un utilisateur (*unmute {@user})")
        .setColor("ffe6ff")
        if (args[0].toLowerCase() === prefix + "help") {
        message.delete()
        if(user.hasPermission("KICK_MEMBERS")){
            user.send("Hey " + user + " voici la liste des commandes du serveur : ")
            user.sendEmbed(embedstaff)
        } else{
            user.send("Hey " + user + " voici la liste des commandes du serveur : ")
            user.sendEmbed(embed)
        }
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
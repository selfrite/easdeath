const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
    disableEveryone: true
});
client.commands_fr = new Discord.Collection();




fs.readdir("./modules/", (err, files) => {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Modules-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log(`Erreur de chargement d'un module`);
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./modules/${f}`);
        console.log(`${f} a chargé`);
        client.commands_fr.set(props.help.name, props);
    });
});




client.on('ready', async () => {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-BOT-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    console.log(`                  ${client.user.username} est maintenant en ligne !                 `);
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
    client.user.setStatus("online");




    client.user.setPresence({
        game: {

            name: `surveiller 🐦 Ravens VS eagles 🦅`,
            type: "STREAMING",
            url: "https://www.twitch.tv/solaryfortnite"
        }

    })



})




client.on("guildMemberAdd", member => {



    var jour = Date.now() - member.user.createdAt.getTime()
    if (jour < 1080000000) {
        const defaultChannel = client.channels.find(channel => channel.id === "703614272604733441");
        var precise = Math.round(jour / 86400000)
        member.send(`Tu as été kick de "🐦 Ravens VS eagles 🦅" car ton compte est trop récent (${precise} jours)`).catch(console.error).then(() => {

            let embed = new Discord.RichEmbed()
                .setDescription(`**Kick: ${member.user} ** \n**raison:** création compte < 10 jours \n**Âge du compte:** ${precise} jours `, true)
                .setFooter("membre kick: " + member.user.id)
            defaultChannel.send(embed)

            member.kick({
                reason: 'Compte trop récent <20 jours | Easdeath BOT'
            });
        })

    } else {
        const channelDiscussion = client.channels.find(channel => channel.id === "703606528120193074");
        const plus = client.emojis.get("690957155406446593");
        const arrow1 = client.emojis.get("690944740329521232");
        channelDiscussion.send(`
${plus} ${member.user}
${arrow1} rôles : <#703640104815820820> - <#703647334403276970>`)
    }

})

client.on("message", async message => {
    if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(0);
    if (message.channel.type === "dm") return;
    const swearWords = ["salop", "salope", "pute", "bander", "gueule", "ftg", "tg", "tgl", "connasse", "connard", "pd", "baiser", "suce", "baise", "sucer", "pute", "pedette", "tapette", "ntm", "bdp", "pute", "gigollo", "chatte", "bite", "penis", "vagin", "pubis", "couilles", "couilles", "niques", "nique", "mocheté", "mocheté", "gueule", "fdp", "ken", "baize", "race", "nique", "foutre", "bouffon", "bouffonne", "con", "conne", "putain", "ptn"];
    if (swearWords.some(word => args.includes(word))) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            return
        }
        message.delete().catch(err => console.log("Error 404")).then(() => {
            let embed = new Discord.RichEmbed()
                .addField(`${message.author.tag}`, `Veuillez ne pas dire de [mots interdits](http://prntscr.com/o7ineb)`, true)
            message.channel.send(embed)
        });
    }

    if (message.content.startsWith(config.prefix)) {



        let prefix = config.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(0);




        let commandFile = client.commands_fr.get(cmd.slice(prefix.length));
        if (commandFile) {
            commandFile.run(client, message, args)
        }
        if (message.author.id == 'undefined') return;




    }
})




client.login(process.env.token)

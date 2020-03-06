const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands_fr = new Discord.Collection();




    // Modules Français
    fs.readdir("./modules/", (err, files) => {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Modules-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
      if(err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if(jsfile.length <= 0){
        console.log(`Erreur de chargement d'un module`);
        return;
      }

      jsfile.forEach((f, i) =>{
        let props = require(`./modules/${f}`);
        console.log(`${f} a chargé`);
        client.commands_fr.set(props.help.name, props);
      });
    });




/*

    client.on('guildMemberAdd', member => {
      const channel = member.guild.channels.find(ch => ch.id === '577889134031405059');
      if (!channel) return;
      channel.send(`${member}`).then(() => {
        channel.bulkDelete(1)})
    });

*/
 client.on('ready', async () => {
  console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-BOT-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
  console.log(`${client.user.username} !`);
  const botmessage = "󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪"
/* setInterval(() => {
	
	 const salon = client.channels.get("410070418939183105");
	salon.send(botmessage);	
         salon.bulkDelete(1);
 },63000 );*/
const poke = client.channels.get("423164462942519297");
poke.send("?daily");	
poke.send("?hourly");
poke.send("?peche mega");	
poke.send("?catch");	
setInterval(() => {
	salon.send("?catch");	
         salon.bulkDelete(1);
 },903000);
setInterval(() => {
	poke.send("?hourly");	
         poke.bulkDelete(1);
 },3605000); 
setInterval(() => {
	poke.send("?daily");	
         poke.bulkDelete(1);
 },86405000); 
  //client.user.setStatus('online')
 })





client.on("message", async message => {

   
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(0);


  

    let commandFile = client.commands_fr.get(cmd.slice(prefix.length));
    if (commandFile) commandFile.run(client, message, args)
    if (message.author.id == 'undefined') return;
  

 




      
      
      
    })




client.login(process.env.token)

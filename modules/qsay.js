const { Client, RichEmbed, Attachment} = require('discord.js');







exports.run = async (client, message, args) => {
if (message.author.id !== '681555694540816391') return;
 let botmessage = "󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪"
 message.delete();
 setInterval(() => {
	 
	message.channel.send(botmessage);	
         message.channel.bulkDelete(1);
 },61000 );
}

exports.help = {

    name: 'a',



};

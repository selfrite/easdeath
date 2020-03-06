const Discord = require("discord.js");
const config = require("../config.json");
const { Client, RichEmbed, Attachment} = require('discord.js');

var demon = 0;
var ange = 0;
var elfe = 0;  

exports.run = async (client, message, args) => {
  const defaultChannel = client.channels.find(channel => channel.id === "685577866523705367");
  if(message.channel != defaultChannel) return;
var nombre = 0;
message.delete()
//const id = message.guild.roles.find('name', '🌟|| Bot')
let roleDemon =  client.guilds.get('674294359595810846').roles.find('id', '685592801375027264')
let roleAnge =   client.guilds.get('674294359595810846').roles.find('id', '685592803862118418')
let roleElfe =   client.guilds.get('674294359595810846').roles.find('id', '685592806739279896')

function aaaa()
{
  message.reply("RIP, tu as déjà un clan, tu ne peux pas changer =(")
  return setTimeout(aaaaa, 5000)
}
function aaaaa()
{
  message.channel.bulkDelete(1)
}
if(message.member.roles.has(roleDemon.id)) {return setTimeout(aaaa, 10)}
if(message.member.roles.has(roleAnge.id)) {return setTimeout(aaaa, 10)}
if(message.member.roles.has(roleElfe.id)) {return setTimeout(aaaa, 10)}

if(demon<=ange && demon<=elfe){
  demon = demon+1;
  message.member.addRole(roleDemon)
  console.log(`${message.member} clan Nott`)
  message.reply("Vous êtes devenu(e) un Nott")
} else if(ange<= demon && ange<= elfe){
  ange = ange+1;
  message.member.addRole(roleAnge)
  console.log(`${message.member} clan Hel`)
  message.reply("Vous êtes devenu(e) un Hel")
} else if(elfe<=demon && elfe<=ange){
  elfe = elfe + 1;
  message.member.addRole(roleElfe)
  console.log(`${message.member} clan Odin`)
  message.reply("Vous êtes devenu(e) un Odin")}
setTimeout(suiteTraitement, 5000)
function suiteTraitement()
{
  message.channel.bulkDelete(1)
}
console.log(`Nott: ${elfe} | Hel ${ange} | Odin ${elfe}`)
 //message.channel.send(id.lenght)
  //message.channel.send(`Il y a ${demon} demons, ${ange} anges, ${elfe} elfes`)
}


module.exports.help = {
  name: "clan"
}

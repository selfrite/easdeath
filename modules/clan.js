const Discord = require("discord.js");
const config = require("../config.json");
const { Client, RichEmbed, Attachment} = require('discord.js');

var demon = 0;
var ange = 0;
var elfe = 0;  

exports.run = async (client, message, args) => {
  const defaultChannel = client.channels.find(channel => channel.id === "703660614886621215");
  if(message.channel != defaultChannel) return;
var nombre = 0;
message.delete()
//const id = message.guild.roles.find('name', '🌟|| Bot')
let roleDemon =  client.guilds.get('703339395604021289').roles.find('id', '703357044891058206')
let roleAnge =   client.guilds.get('703339395604021289').roles.find('id', '703357045461745714')
//let roleElfe =   client.guilds.get('674294359595810846').roles.find('id', '685592806739279896')
let roleVerif =  client.guilds.get('703339395604021289').roles.find('id', '703684849793368157')
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
//if(message.member.roles.has(roleElfe.id)) {return setTimeout(aaaa, 10)}

if(demon<=ange && demon<=elfe){
  demon = demon+1;
  message.member.addRole(roleDemon)
  message.member.removeRole(roleVerif)
  console.log(`${message.member} clan Nott`)
  message.reply("Vous êtes devenu(e) un Eagle")
} else if(ange<= demon && ange<= elfe){
  ange = ange+2;
  message.member.addRole(roleAnge)
  message.member.removeRole(roleVerif)
  console.log(`${message.member} clan Hel`)
  message.reply("Vous êtes devenu(e) un Raven")
}/* else if(elfe<=demon && elfe<=ange){
  elfe = elfe + 1;
  message.member.addRole(roleElfe)
  message.member.removeRole(roleVerif)
  console.log(`${message.member} clan Odin`)
  message.reply("Vous êtes devenu(e) un Odin")}*/
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

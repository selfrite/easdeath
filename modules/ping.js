
const { Client, RichEmbed, Attachment} = require('discord.js');







exports.run = async (client, message, args) => {

	if (message.author.id !== '595639006180540416') return;
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }
      

    var onlineMembers = message.member.guild.members

        var stats =Array.from(onlineMembers)

       console.log(`stats ${stats.length-2}`)

            for(var i = stats.length-2;i>=0;i=i -1){
                sleep(2000);

                   var onlineMember = message.member.guild.members
                   var stat =Array.from(onlineMember)
                  //  console.log(stat)
                    console.log(i)
                  //  console.log(stat[i])
                    stat =  stat[i]
                    var mp = message.guild.member(stat[0]);
                       // mp.send("Hey, je voulais te proposer un serveur où tu pourras partager tes passions et découvrir d'autres personnes possédant la même passion! Veux-tu que je t'en parle rapiment ?")
                  mp.send("Savais-tu que Souna est ? :eyes: <3 ")
		    sleep(2000);
                   

               



      

       }

      



      

      

       

}



exports.help = {

    name: 'tesa',



};

const Discord = require ("discord.js");
const fs = require('fs');
const { config } = require("process");

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail(LOGO)
.setFooter('©️ CopyRight Mee20')
.addField('__Generator__','__**GENERATOR COMMANDS**__\n\n`-disney` To Get A Disney+ Account .\n\n **✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}

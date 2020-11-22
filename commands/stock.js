const Discord = require ("discord.js");
const readline = require('readline');
const fs = require('fs');
const { config } = require("process");


//Disney Stock (Copy if you have more acc types)
var file = './accounts/disney.txt';
var disneystock = 0;
var rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});
rl.on('line', function (line) {
  disneystock++;
});
rl.on('close', function () {
    console.log("Disney :" + disneystock);
});


exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setTitle("__**STOCK**__")
.setThumbnail(LOGO)
//Disney Stock
.addField('`-disney:`', disneystock, true)
//Paste the line above for other accs
.addField('\n**✩**', 'Remember that you are using the free generator, the accounts may not work !', false)
.setFooter('©️ CopyRight')
.setTimestamp()
message.channel.send(embed)
}
module.exports.help = {
  name: 'stock'
}

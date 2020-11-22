const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/disney.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/disney.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .setTitle("**Generator**\n")
            .addField('Disney+ Account:',`\n**${account}**`)
            .setThumbnail(config.LOGO)
            .setColor("#363940")
            .setFooter('Bot made by Mee20')
            .setTimestamp();

            msg.author.send(embed)
            .then((m) => {
                setTimeout(() => {
                    m.delete();
                }, 60000);
            });

            msg.reply('I\'ve sent you the account! Please check your DM!')
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
        });
    }
};

module.exports.help = {
    name: `disney`,
    description: `Sends you a Crunchyroll account!`
};
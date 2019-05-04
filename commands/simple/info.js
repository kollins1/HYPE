const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn about me!'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("Info", "Learn about who made me!")
            .addField("Who made this bot?", "Kollins  and he put alot of effort in the bot!")
            .addField("Who is Kollins?", "Kollins is 9 years old, And he loves youtube!!! and in fact,he is a YouTuber! He made the 'HypeSquad bot!!!")
            .setThumbnail('https://cdn.discordapp.com/avatars/452493909356969986/de3bf51d5b192f5daeca6561549ff9b7.png?size=2048')
            .setColor(0x6A32BA)
            .setFooter('Thank You and I hope you have fun in #HypeSquad!!!')

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoCommand;
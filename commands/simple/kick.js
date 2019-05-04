const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require('../../config.json');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'simple',
            memberName: 'kick',
            description: 'Kicks a user.'
        });
    }

    async run(message, args)
    {
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.split(' ').slice(1).join(' ');
        let logs = message.guild.channels.find('name', config.logsChannel);

        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You dont have permission to use this command!')

        if (!target) return message.reply('please specify a member to kick!');
        if (!reason) return message.reply('please specify a reason for this to kick!');
        if (!logs) return message.reply(`please create a channel called ${config.logsChannel} to log the kicks!`);

        let myKick = new discord.RichEmbed()
            .setColor('#d82727')
            .setThumbnail(target.user.avatarURL)
            .addField('Kicked Member', `${target.user.username} with an ID: ${target.user.id}`)
            .addField('Kicked By', `${message.author.username} with an ID: ${message.author.id}`)
            .addField('Kicked Time:', message.createdAt)
            .addField('Kicked In', message.channel)
            .addField('Kicked Reason', reason)
            .setFooter('Kicked user infromation', target.user.displayAvatarURL)

        message.channel.send(`${target} was kicked by ${message.author} for ${reason}`);
        target.kick(reason);
        logs.send(myKick);
    }
}

module.exports = KickCommand;
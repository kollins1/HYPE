const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require('../../config.json');

class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'simple',
            memberName: 'ban',
            description: 'Bans a user.'
        });
    }

    async run(message, args)
    {
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.split(' ').slice(1).join(' ');
        let logs = message.guild.channels.find('name', config.logsChannel);

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You dont have permission to use this command!')

        if (!target) return message.reply('please specify a member to ban! We cant ban them unless you give us their name!');
        if (!reason) return message.reply('please specify a reason for this to ban! Or we cant ban them');
        if (!logs) return message.reply(`please create a channel called ${config.logsChannel} to log the bans!`);

        let myBan = new discord.RichEmbed()
            .setColor('#e88433')
            .setThumbnail(target.user.avatarURL)
            .addField('Banned Member', `${target.user.username} with an ID: ${target.user.id}`)
            .addField('Banned By', `${message.author.username} with an ID: ${message.author.id}`)
            .addField('Banned Time:', message.createdAt)
            .addField('Banned In', message.channel)
            .addField('Banned Reason', reason)
            .setFooter('Banned user infromation', target.user.displayAvatarURL)

        message.channel.send(`${target} was banned by ${message.author} for ${reason}`);
        target.ban(reason);
        logs.send(myBan);
    }
}

module.exports = BanCommand;
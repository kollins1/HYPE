const commando = require('discord.js-commando');

class FunMirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'Reflects you from your profile picture!'
        });
    }

    async run(message, args)
    {
        message.channel.sendMessage(message.author.avatarURL);
    }
}

module.exports = FunMirrorCommand;
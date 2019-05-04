const commando = require('discord.js-commando');

class TestMyLuckCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'testmyluck',
            group: 'simple',
            memberName: 'luck',
            description: 'Tests your luck today!'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.channel.sendMessage("Your luck is bad...");
        }
        else
        {
            message.channel.sendMessage("Your luck is good!");
        }
    }
}

module.exports = TestMyLuckCommand;
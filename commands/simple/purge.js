const Commando = require('discord.js-commando');

class purgeCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'purge',
            group: 'simple',
            memberName: 'purge',
            description: 'Purges an amount of messages'
        })
    }
    async run(message, args)
    {
        const amount = parseInt(message.content.split(' ').slice(1));
        if (isNaN(amount)) {
            return
        }
        else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
        });
    }
}
module.exports = purgeCommand
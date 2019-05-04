const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const TOKEN = 'NTYwOTU3MTUzNDc3Nzg3NjQ4.XKa38g.PGEXHEHpmRMEGfQV8YEUfcTc8Cg'
const bot = new Commando.Client({
    disableEveryone: true
});
const readline = require("readline");

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {}

bot.on('guildMemberAdd', async member => {
    let welcomeEmbed = new Discord.RichEmbed()
        .setTitle("Welcome " + member.user.username + "!")
        .setColor("#ffd800")
        .addField("Infromation", "I just sent you a DM of common rules! It would be nice if you could give them a quick read! If you dont you won't know what to not say/ not do!!!")
        .addField("Thanks for joining the other " + (member.guild.memberCount).toString() + " of us!", "Thanks, ~HypeSquad bot.")
    if (member.user.avatarURL != null) {
        welcomeEmbed.setImage(member.user.avatarURL);
    } else {
        welcomeEmbed.setImage(client.user.displayAvatarURL);
    }
    // Search welcome channel
    let welcomeChannel = member.guild.channels.find(channel => channel.name == "welcome-goodbye");

    // Check if welcomeChannel is found
    if (welcomeChannel) {
        // Send embed in welcome channel
        welcomeChannel.send(welcomeEmbed);
    }
    member.send("Hello " + member.displayName + ". Thanks for joining the server! I hope you enjoy having fun at the server! The rules are below me!")
    let embed = new Discord.RichEmbed()
        .addField("Rule 1", "No spamming or flooding the chat with messages, PLEASE Don't be rude.")
        .addField("Rule 2", "No bashing or heated arguments to other people in the chat.")
        .addField("Rule 3", "No adult (14+), explicit, or controversal messages.")
        .addField("Rule 4", "No racist or degrading content (racial terms are not allowed).")
        .addField("Rule 5", "No cursing.")
        .addField("Rule 6", "No advertising other sites/discord servers (Permission must be requested from Staff).")
        .addField("Rule 7", "No abusing. (if you have mod)")
        .addField("Rule 8", "No offensive names.")
        .addField("Rule 9", "Do not argue with staff. Decisions are final.")
        .setColor("#ffd800")
        .setFooter("If those rules are broken, you could get kicked or banned.")
    member.send(embed);
    member.send("If you follow these rules, feel free to use this server as much as you like!");
    member.addRole(member.guild.roles.find("name", "Member"));
})

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find(channel => channel.name === 'welcome-goodbye')
    if (!channel) return; {
        channel.sendMessage(`Its a BIG shame you had to leave us, ${member.user.username} Tell us what was bad about the server.`);
    }
});

bot.on('message', function (message) {
    if (message.content == 'Kollins, give me info') {
        message.channel.sendMessage(`Hi, I'm #HypeSquad bot Or whatever the server owner nicknamed me. I have a bunch of commands, and the bot first started ONLY in #hypesquad fan group. But we thought it is kinda boring to have a bot only allowed to be in one server. That is info :)`);
    }
    if (message.content == 'Kollins, give me pizza') {
        message.channel.sendMessage(`Wow, thanks ${message.author.username}! I loveeeee Pizza!!!!! I WANT MORRRRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE :)`);
    }
    if (message.content == '/Bully') {
        message.channel.send(`Why does ${message.author.username} bully me..? HIYA *kills le epicly* *then U cry*`);
    }
    if (message.content == '@444') {
        message.channel.send('Go call 444-444-4444 To get freeeeeeeee money and to get FREEEEEEEEE Roux!!! (dont)');
    }
    if (message.content == '/Money') {
        message.channel.send('Give me all UR money!!!');
    }
    if (message.content == 'taco') {
        message.channel.send(`Give me dat tacobell ${message.author.username}`);
    }
    if (message.content == 'clayton') {
        message.channel.send(`SUBSCRIBE TO CLAYTON!!! ${message.author.username}`);
    }
    if (message.content == 'Kollins, give me roux') {
        message.channel.send(`K. ${message.author.username} `);
    }
    if (message.content == 'Kollins, kill me.') {
        message.channel.send(`Kiling... ${message.author.username} `); {
            if (message.content == 'Kollins, give me info') {
                message.channel.send(`Nah, ${message.author.username} `); {}
            }
        }
    }
});
bot.on('ready', function () {
    console.log("Baby shark is on!!!!!!!!!");
    bot.user.setActivity('Hype Bot (beta) vr. 10', {
        type: 'WATCHING'
    })
});

bot.on('message', function (message) {
    if (message.channel.type === 'dm') {
        console.log(message.author.username + ' says:' + message.content);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('REPLY TO ' + message.author.username + ' ', (answer) => {

            message.author.send(`${answer}`);

            rl.close();
        });
    }
})


bot.login(TOKEN);
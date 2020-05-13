const prefix = "."
const token = "Njk0NjE1MTczMzYwNjQ4MjQy.XqHoqg.hsTCnd3Qmsqt59JW1fWVlUI_jvk"
const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });
bot.on("ready", async () => {
    console.log(`${bot.user.username} is a cat `)
    bot.user.setActivity("YOU SLEEP ", { type: "WATCHING" })
    
    
})



bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice[0];

    if (cmd === `${prefix}hello`) {
        message.reply("Hello")
    }
    
    if (cmd === "ded") {
        message.channel.send("aliv")
    }
    if (cmd === "OwO") {
        message.channel.send("no")
    }
    if (cmd === "UwU") {
        message.channel.send("no pls help")
    }

    if (cmd === "nani") {
        message.channel.send("omae wa mo shindeiru ***NANI***")
    }
    if (cmd === "TMR") {
        message.channel.send("sup")
    }
    if (cmd === `sup`) {
        message.channel.send(`wassup`)
    }


    if (cmd === `${prefix}TMR`) {
        message.channel.send("i lov him")
    }

  

        
    
     //Help fun
     else if (message.content === `${prefix}help fun`) {     
        let sEmbed = new Discord.MessageEmbed()
            .setColor("#CFCC17")
            .setTitle("Fun")
            .setDescription("**.say**`-let the bot say something`\n**.8ball**` get a random answer!`\n**.skype**-`skype with ya gurl`\n**.MEE6**`-Find out yourself`\n**.hello**`-just say hello`\n**.ded**`-become aliv`\n**say sup in chat**`he will respond :D`\n**say ded in chat if your ded**`-what might he say?`\n**say TMR in chat (bot name)**`-he will respond :D`")
            .setFooter("TMR BOT | Help fun" , bot.user.displayAvatarURL);
        message.channel.send({ embed: sEmbed });
    }
    //Help moderarion
    else if (message.content === `${prefix}help moderation`) {  
        let sEmbed = new Discord.MessageEmbed()
            .setColor("#CFCC17")
            .setTitle("Moderation")
            .setDescription("**.kick**`-Kick the player!`\n**Ban**`- ban the player!`")
            .setFooter("TMR BOT | Help moderation", bot.user.displayAvatarURL);
        message.channel.send({ embed: sEmbed });
    }
    //Help moderarion
    if (cmd === `${prefix}help mod`) {
        let sEmbed = new Discord.MessageEmbed()
            .setColor("#CFCC17")
            .setTitle("Moderation")
            .setDescription("**.kick**`-kick The player out of the server!`\n**ban**`-Ban the player!`")
            .setFooter("TMR BOT | Help moderation", bot.user.displayAvatarURL);
        message.channel.send({ embed: sEmbed });
    }
    //Help Other
    else if (message.content === `${prefix}help other`) {  
        let sEmbed = new Discord.MessageEmbed()
            .setColor("#CFCC17")
            .setTitle("Other")
            .setDescription("**.ping**`-latency`\n**.creator**`-findout the amazing creator`\n**.userinfo**`-find out your account info`\n**.serverinfo**`-find out the server info`")
            .setFooter("TMR BOT | Help Other", bot.user.displayAvatarURL);
        message.channel.send({ embed: sEmbed });
    }

    //invite
    if (cmd === `${prefix}invite`) {
        let sEmbed = new Discord.MessageEmbed()
            .setColor("#D98917")
            .setTitle("Invite")
            .setDescription("[Invite The Bot](https://discordapp.com/api/oauth2/authorize?client_id=694615173360648242&permissions=8&scope=bot)")
            .setFooter(new Date(), bot.user.avatarURL, "TMR BOT");
        message.channel.send({ embed: sEmbed });
    }
    if (cmd === `${prefix}serverinfo`) {
        let sEmbed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle("Server info")
            .setThumbnail(message.guild.iconURL)
            .setAuthor(`${message.guild.name} Info`, message.guild.iconURL )
            .addField("Server Name", `${message.guild.name}`, true)
            .addField("Server Owner", `${message.guild.owner}`, true)
            .addField("Server Region ", `${message.guild.region}`, true)
            .addField("Channel Count", `${message.guild.channels.cache.size}`, true)
            .addField("Member Count", `${message.guild.memberCount}`, true)
            .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} ${(message.channel.guild.createdAt)}`, true)
            .addField("Role Count", `${message.guild.roles.cache.size}`, true)
            .setFooter("TMR BOT | Server Info", bot.user.displayAvatarURL);
        message.channel.send({ embed: sEmbed });
    }
    else if (message.content === `${prefix}help`) {     
        let sEmbed = new Discord.MessageEmbed()
            .setColor("#CFCC17")
            .setTitle("Commands")
            .setDescription("**:video_game: Fun **\n`.help-fun` \n\n**:no_smoking: Moderation **\n `help-moderation`\n\n **:call_me: Other**\n`help-other`")
            .setFooter("TMR BOT | Help", bot.user.displayAvatarURL)
            message.channel.send({ embed: sEmbed });
    }   


    if (cmd === `${prefix}ded`) {
        message.channel.send("aliv")
    }

    if (cmd === `${prefix}MEE6`) {
        message.channel.send("wha? trash")
    }


    //Creator
    if (cmd === `${prefix}creator`) {
        let sEmbed = new Discord.MessageEmbed()
            .setColor("#D98917")
            .setTitle("Creator Info")
            .setDescription("**The Creator is**`TMR#2866`\n **Very Great Owner and coder :D**")
            .setFooter("TMR BOT | Creator Info", bot.user.displayAvatarURL);
        message.channel.send({ embed: sEmbed });
    }



    //user info
    if (cmd === `${prefix}userinfo`) {
        let sEmbed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle(" info")
            .setAuthor(`${message.author.username}`)
            .addField("**AvatarURL**",`${message.author.displayAvatarURL}, tru`)
            .addField("**Username**", `${message.author.username}`, true)
            .addField("**tag**", `${message.author.discriminator}`, true)
            .addField("**ID**", `${message.author.id}`, true)
            .addField("**Status**", `${message.author.presence.status}`, true)
            .addField("**CreatedAt**", `${message.author.createdAt}`, true)
            .setFooter("TMR BOT | user Info", bot.user.displayAvatarURL);
        message.channel.send({ embed: sEmbed });
    }
    else if (message.content === `${prefix}skype`) { 
        message.channel.send("skype is disable pls no ;(")
    } 
    else if (message.content === `${prefix}skype boy`) {
        message.channel.send("how did u get my skype bish")

    }

  


if (message.content === `${prefix}skype kfc`) {  
    message.channel.send("kfc? bruh sure")
}
if (message.content === `${prefix}skype pepsi`) {  
    message.channel.send("pepsi? are u drunk")
}
});
    bot.on("message", async message => {
        const prefix = "."
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();


        if (message.content === `${prefix}skype girl`) {  
        const msg = await message.channel.send(`sorry baby, cant skype tonight`);
        msg.edit(`sorry baby, cant skype tonight`)
        msg.edit(`sorry baby, cant skype tonnight`)
        msg.edit(`how about tommorow baby`)
        msg.edit(`how about tommorow baby`)
        msg.edit(`or maybe we can go out for dinner later :smirk:\n her boyfriend shows up :sweat_smile:` )
    }
});
bot.on("message", async message => {
    const prefix = "."
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
  
    if (cmd === "say") {
        if (message.deletable) message.delete();

        if (args.length < 1)
            return message.reply("bruh, say something.").then(m => m.delete(5000));

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        if (args[0].toLowerCase() === "embed") {
            let sEmbed = new Discord.MessageEmbed()
                .setColor(roleColor)
                .setDescription(args.slice(1).join(" "));

            message.channel.send({ embed: sEmbed });
        } else {
            message.channel.send(args.join(" "));
        }
    }
});

bot.on(`message`, message => {
    if (!message.content.toLowerCase().startsWith(".")) return;
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case `kick`:

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Error: Not enough permissions");
            if (member.hasPermission("KICK_MEMBERS")) return message.channel.send("Error: Not enough permissions")
                
                    member.kick("You were kicked out of the server!").then(() => {
                        message.reply("Sucessfully kicked `${user.tag}`");
                    }).catch(err => {
                        message.reply("I was unable to kick this member!")
                        console.log(err);
                    });
                } else {
                    message.reply("That User isn't in the server!")
                }
            } else {
                message.reply("That User isn't in the server!")
            }
        

          break;
    }
});
bot.on("message", message => {
    if(!message.guild)return;
    if(message.author.bot)return;
    const prefix = ".";
    if(message.content.startsWith(prefix+"8ball")){
        const args = message.content.split(" ").slice(1).join(" ");
        if(!args)return message.reply("**What`s your question?**")
        var rndAnswer = ["yah", "nah","meh","yas","OF COURSE","YESSST YES YESSSS","yaaa boiiiiiiiii","no just no..... NOOOOOOOOOOOOOOOOOOOOOOOOOOO","probably", "ehhh idk.","no ;(","reversed"];
        var answers = rndAnswer[Math.floor(Math.random() * rndAnswer.length)]
        let sEmbed = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setTitle("8Ball")
        .setThumbnail(message.author.avatarURL)
        .addField("Question: ", args)
        .addField("asked by: ", message.author.tag)
        .addField("Answer: ", answers)
        .setFooter(message.author.tag, message.author.avatarURL);
        message.channel.send({ embed: sEmbed });
    }
})

bot.on(`message`, message => {
    if (!message.content.toLowerCase().startsWith(".")) return;
    let args = message.content.substring(prefix.length).split(" ");
    

    switch (args[0]) {
        case `ban`:
            
            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Error: Not enough permissions");
            if (member.hasPermission("BAN_MEMBERS")) return message.channel.send("Error: Not enough permissions")
                
                    member.kick("You were kicked out of the server!").then(() => {
                        message.reply("Sucessfully banned `${user.tag}`");
                    }).catch(err => {
                        message.reply("I was unable to ban this member!")
                        console.log(err);
                    });
                } else {
                    message.reply("That User isn't in the server!")
                }
            } else {
                message.reply("That User isn't in the server!")
            }
        

          break;
    }
    

    
     
    
    
  
})
bot.login(token)
const Discord = require('discord.js');
const bot = new Discord.Client()

const token = 'ODExMjg4MTM4Mzc0MTg0OTYx.YCwA9Q.Zr97It3uZaGXBrEvzrRAd7ri3Qg';

bot.on('ready', () =>{
    console.log('SkySU Here! I am ready boss...')
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('Hello Dear, I am here at your service !!!');
    }

    if(msg.content === "!joke"){
        msg.reply('Fun Fact: Do you know that the people named "Death" now has Dark Ass!')
    }

    if(msg.content === "!aboutyou"){
        msg.reply('I am a useless bot, a testing material from BLADE, I really do not know why he is wasting time on me. Poor Guy')
    }

    if(msg.content === "!bye"){
        msg.reply('I am feeling a bit less useless as somebody wasted their time chatting with me. I wish you have a nice day ahead. Tata')
    }
})

bot.login(token);
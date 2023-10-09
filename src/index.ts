import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters';

const bot = new Telegraf('6592560907:AAG2IiuT_bqs5ooOBldZw_Zto2mWSTF_z1Q');


bot.on(message("text"), async ctx => {

    await ctx.reply("Hello")
});


bot.launch()
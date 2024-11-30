const { Telegraf } = require("telegraf");
require("dotenv").config();
const { apiUrl } = require("../data/urls.json")



const bot = new Telegraf(process.env.token);

bot.start((msg) => msg.reply("Привіт я можу надати актуальний курс валют"))

bot.help((msg) => msg.reply("/exch sum from to - повертае курс з валюти from y валюті to"))

bot.command("exch", (msg) => {
    const {text} = msg.message
    const [_, sum, from, to] = text.split(" ")
    const response = await fetch (`${apiUrl} v6/${process.env.apKay}/latest/${feom}`)
    const { conversiom_rates } = await response.json()

    msg.reply(sun * conversiom_rates[to])
})


bot.launch(() => console.log("Stat"))
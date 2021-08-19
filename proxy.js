const discord = require("discord.js")
const client = new discord.Client()

client.on("ready", async => {
    console.log("proxy bot is online!")
    client.user.setActivity(`Downloading proxies! | ${prefix}help`)
})

var prefix = "p!"
var token = ""
var embedcolor = "#42f5a1"

client.on("message", async message => {
    var messageArray = message.content.split(" ")
    var cmd = messageArray[0].replace(prefix, "")
    var args = messageArray.slice(1)
    if(!message.content.startsWith(prefix)) return

    if(cmd == "help") {
        var embed = new discord.MessageEmbed()
        embed.setTitle("Available Proxies")
        embed.setDescription("Prefix is: ``p!``")
        embed.setColor(embedcolor)
        embed.addField("socks4", `socks4 proxy`)
        embed.addField("socks5", `socks5 proxy`)
        embed.addField("http", "http proxy")
        embed.setFooter(`${client.user.username}`)
        message.channel.send(embed)
    }
    if (cmd == "socks4") {
        var embed = new discord.MessageEmbed()
        embed.setTitle(`SOCKS4`)
        embed.setURL(`https://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks4&timeout=10000&country=all&ssl=all&anonymity=all`)
        embed.setColor(embedcolor)
        embed.setFooter(`${client.user.username}`)
        message.author.send(embed)
    }
    if (cmd == "socks5") {
        var embed = new discord.MessageEmbed()
        embed.setTitle(`SOCKS5`)
        embed.setURL(`https://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks5&timeout=10000&country=all&ssl=all&anonymity=all`)
        embed.setColor(embedcolor)
        embed.setFooter(`${client.user.username}`)
        message.author.send(embed)
    }
    if (cmd == "http") {
        var embed = new discord.MessageEmbed()
        embed.setTitle(`HTTP`)
        embed.setURL(`https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all`)
        embed.setColor(embedcolor)
        embed.setFooter(`${client.user.username}`)
        message.author.send(embed)
    }
})




client.login(token)

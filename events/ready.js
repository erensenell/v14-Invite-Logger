const mongoose = require("mongoose");
const database = require("../database/func")
const { ActivityType } = require("discord.js")

module.exports = async (client) => {
    client.logger.info(`[!] ${client.user.username} başlatılıyor...`)
    client.logger.info(`[!] Bot ${client.commandes.size} komuta sahip`)
    client.user.setActivity(client.config.bot.status, { type: ActivityType.Playing })
    setInterval(() => {
        client.user.setActivity(client.config.bot.status, { type: ActivityType.Playing })
    }, 60000);

    await mongoose.set('strictQuery', false);
    await mongoose.connect(client.config.mongoURL, {
        keepAlive: true
    }).then(() => {
        client.logger.database(`Mongoose veri tabanına bağlandı.`)
    })

    const guild = await client.guilds.cache.find(guild => guild.id == client.config.serverId)
    const guildInvites = await guild.invites.fetch()

    client.logger.database(`${client.color.chalkcolor.blue(`${guild.name}`)} sunucusundan, ${guildInvites.size} davet verisi kaydediliyor...`)
    await database.resetGuildInvitesData(guild)

    await database.loadUserData(guild)
}

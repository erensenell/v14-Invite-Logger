module.exports = {
    bot: {
        token: '',
        prefix: '!',
        status: "Yazılım Koloniği"
    },

    serverId: "",

    mongoURL: "",

    channels: {
        inviteLog: ''
    },

    text: {
        joinMessage: "**{newMember} sunucuya katıldı.**\nDavet eden: {inviter} ( {inviteCount} Davet )",
        vaintyJoinMessage: "**{newMember} sunucuya katıldı.**\nÖzel url'yi kullanarak katıldı. ( {vanityUses} )",
        leaveMessage: "**{member} sunucudan ayrıldı.**"
    }
};
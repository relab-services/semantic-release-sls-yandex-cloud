const common = require('@relab/semantic-release-commits-config')

module.exports = {
    ...common,
    plugins: [
        ...common.plugins,
        '@semantic-release/npm',
        '@semantic-release/github',
        [
            'semantic-release-telegram-bot',
            {
                notifications: [
                    {
                        chatIds: process.env.TELEGRAM_BOT_CHAT_ID,
                    },
                ],
            },
        ],
    ],
}

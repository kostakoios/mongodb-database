const mongoose = require('mongoose');

const stocksSchemas = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    is_active: Boolean,
    stocktwits_last_updated: String,
    yahoo_finance_stock_id: String,
    yahoo_finance_last_updated: String,
    twitter_first_message: String,
    twitter_last_message: String,
    twitter_last_updated: String,
    reddit_last_updated: String,
    reddit_official_channel: String,
    stockhouse_last_updated: String,
    discord_last_updated: String,
    telegram_last_updated: String,
    subreddits_last_updated: String,
    search_in_twitter: String,
    determ_keyword_id: Number
});

module.exports = mongoose.model("Stocks", stocksSchemas);


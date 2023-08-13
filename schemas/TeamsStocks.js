const mongoose = require('mongoose');

const teamsStocks = new mongoose.Schema({
    "symbols-id": [{
        type: String,
        required: true
    }],
    team_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("teams-stocks", teamsStocks);


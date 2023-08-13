const mongoose = require('mongoose');

const channelsSchemas = new mongoose.Schema({
    platform: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    notes: String,
    "symbols-array": [{
        type: String
    }],
    priority: Boolean,
});

module.exports = mongoose.model("channels", channelsSchemas);


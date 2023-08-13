const mongoose = require('mongoose');

const alertsSchemas = new mongoose.Schema({
    stock: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    color: String,
    title: {
        type: String,
        required: true
    },
    message: String,
    source: {
        type: String,
        required: true
    },
    link: String,
    image: String,
    timeRange: String
});

module.exports = mongoose.model("Alerts", alertsSchemas);


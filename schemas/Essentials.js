const mongoose = require('mongoose');

const essentialsSchemas = new mongoose.Schema({
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
    recomendation: String,
    image: String,
    body: [{
        type: String
    }]
});

module.exports = mongoose.model("Essentials", essentialsSchemas);


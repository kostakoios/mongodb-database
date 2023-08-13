const mongoose = require('mongoose');

const apiKeysSchemas = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    iv: String
});

module.exports = mongoose.model("api-keys", apiKeysSchemas);


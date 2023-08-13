const mongoose = require('mongoose');

const userSchemas = new mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model("User", userSchemas);


const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    pass: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("login", loginSchema);
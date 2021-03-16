const mongoose = require('mongoose');

//Schema defination
const urlSchema = mongoose.Schema({
    bigUrl: {
        type: String,
        required: true,
        unique: true //to prevent from duplicate entry
    },
    smallUrl: {
        type: String,
        required: true,
        unique: true
    }
})

//Model
module.exports = mongoose.model("url", urlSchema);
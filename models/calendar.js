const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const calendarSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    prime: {
        type: String,
        required: true
    },

    traits: {
        type: String,
        required: true
    },
   
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    
});

module.exports = mongoose.model("Calendar", calendarSchema);

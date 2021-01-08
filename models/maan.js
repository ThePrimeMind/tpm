const mongoose = require("mongoose");
// const {ObjectId} = mongoose.Schema;

const maanSchema = new mongoose.Schema({
    category: {
        type: String,
        required: "Category is Required"
    },
    score: {
        type: String,
        required: "Score is Required"
    },
    prime: {
        type: String,
        required: "Prime is required"
    },

    traits: {
        type: String,
        required: true
    },

    careers: {
        type: String,
        required: true
    },
   
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    
});

module.exports = mongoose.model("Maan", maanSchema);







const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    oppTeam: {
        type: String,
        required: true,
    },
    oppTeamScore: {
        type: String,
        require: true,
    },
    result: {
        type: Boolean,
        require: true,
    },
    teamScore: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Player", PlayerSchema);
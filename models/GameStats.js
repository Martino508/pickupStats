const mongoose = require("mongoose");

const GameStatsSchema = new mongoose.Schema({
    pts: {
        type: Number,
        required: true,
    },
    fga: {
        type: Number,
        required: true,
    },
    fgm: {
        type: Number,
        required: true,
    },
    tpa: {
        type: Number,
        required: true,
    },
    fta: {
        type: Number,
        required: true,
    },
    ftm: {
        type: Number,
        required: true,
    },
    stl: {
        type: Number,
        required: true,
    },
    blk: {
        type: Number,
        required: true,
    },
    reb: {
        type: Number,
        required: true,
    },
    to: {
        type: Number,
        required: true,
    },
    minutes: {
        type: Number,
        required: false,
    },
    gameID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
    },
    playerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
    },
});

module.exports = mongoose.model("Player", PlayerSchema);
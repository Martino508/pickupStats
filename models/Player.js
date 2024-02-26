const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    jerseyNum: {
        type: Number,
        require: true,
    },
    cloudinaryId: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Player", PlayerSchema);
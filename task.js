const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
        type: String,
        default: "Pending"
    },
    userId: String
});

module.exports = mongoose.model("Task", TaskSchema);

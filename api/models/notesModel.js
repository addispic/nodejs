const mongoose = require('mongoose')

// notes model
const notesModel = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
})

module.exports = mongoose.models.Note || mongoose.model("Note",notesModel);
// models
// notes
const Note = require('../models/notesModel')

// notes
const getNotes = async (req,res) => {
    try{
        const notes = await Note.find().sort({createdAt: 1})
        return res.status(200).json({notes})
    }catch(err){
        return res.status(400).json({error: 'get notes error'})
    }
}

// new 
const newNote = async (req,res) => {
    if(!req.body){
        return res.status(400).json({error: 'request body error'})
    }
    const {text} = req.body 
    if(!text?.trim()){
        return res.status(400).json({error: 'note text required'})
    }
    try{
        const newNote = await Note.create({text})
        return res.status(201).json({note:newNote})
    }catch(err){
        return res.status(400).json({error: 'new note error'})
    }
}

// delete note
const deleteNote = async (req,res) => {
    if(!req.params){
        return res.status(400).json({error: 'req params error'})
    }
    const {_id} = req.params 
    if(!_id){
        return res.status(400).json({error: '_id error'})
    }

    try{

        const note = await Note.findById(_id)
        if(!note){
            return res.status(400).json({error: 'note does\'t exist'})
        }
        await Note.findByIdAndDelete(_id)
    
        return res.status(200).json({message: 'note deleted successfully',_id})
    }catch(err){
        return res.status(400).json({error: 'delete note error / i.e _id error'})
    }

}

// exports
module.exports = {
    getNotes,
    newNote,
    deleteNote,
}
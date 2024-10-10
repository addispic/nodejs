const {Router} = require('express')

// controllers
const {
    getNotes,
    newNote,
    deleteNote,
} = require('../controllers/notesControllers')
// router
const router = Router();

// get notes
router.get("/",getNotes)

// new note
router.post("/new",newNote)

// delete note
router.delete("/delete/:_id",deleteNote)

// exports
module.exports = router;
const express = require('express')
const http = require('http')
const socketIo = require("socket.io")

// app
const app = express()
// server
const server = http.createServer(app)

// io
const io = socketIo(server,{
    cors: {
        origin: true,
    }
})

// connection
io.on("connection",socket => {
    // console.log(socket)
    // add new note
    socket.on("addNewNote",note => {
        io.emit("addNewNoteEvent",note)
    })
    // delete note
    socket.on("deleteNote",_id => {
        io.emit("deleteNoteEvent",_id)
    })
})

// exports
module.exports = {
    app,
    server
}


require('dotenv').config()
const express = require("express");
const cors = require('cors')

// db connection
const dbConnection = require('./api/db/dbConnection')

// socket
const {
    app,
    server
} = require('./api/socket/socketIo')



// port
const PORT = process.env.PORT || 5000;

// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: true,
    credentials: true,
}))

// routes
app.use('/api/notes',require('./api/routes/notesRoutes'))

server.listen(PORT, async(err) => {
    if(err){
        throw err
    }
    await dbConnection()
    console.log('listening')
});

require('dotenv').config()
const express = require("express");

// db connection
const dbConnection = require('./api/db/dbConnection')

// app
const app = express();

// port
const PORT = process.env.PORT || 5000;

// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/notes',require('./api/routes/notesRoutes'))

app.listen(PORT, async(err) => {
    if(err){
        throw err
    }
    await dbConnection()
    console.log('listening')
});

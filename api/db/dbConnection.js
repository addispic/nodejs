const mongoose = require('mongoose')

// db connection
const dbConnection = async () => {
    if(mongoose.connections[0].readyState){
        console.log('already connected');
        return true;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected")
    } catch (err) {
        console.log(err);
        process.exit(-1)
    }
}

module.exports = dbConnection
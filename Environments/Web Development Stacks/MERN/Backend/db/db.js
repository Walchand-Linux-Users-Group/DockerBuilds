const mongoose = require('mongoose')
DB_URI = process.env.DB_URI || "mongodb://localhost:27017"

const db = ()=>{
    try{
        mongoose.connect(DB_URI)
        console.log(`Connected to MongoDB at : ${DB_URI}`)
    }catch( error ){
        console.error("AN ERROR OCCURED IN DATABASE CONNECTION")
        console.error(error)
    }
}

module.exports = db
const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const sessionSchema = new Schema({
    session_title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    Date: {
        type: String,
        required:true
    },
    session_duration: {
        type: String,
        required:true
    },
    
    eventID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "event",
        required:true
    }
})
const SESSION = mongoose.model('session', sessionSchema)
module.exports = SESSION
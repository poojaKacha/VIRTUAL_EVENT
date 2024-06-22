const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ticketSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique:true,
        required: String
    },
    password: {
        type: String,
        required:true
    },
    ticket_title: {
        type: String,
        required:true
    },
    time: {
        type: String,
        required:true
    },
    eventID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "event",
        required:true
    }
})

const TICKET = mongoose.model('ticket&registration', ticketSchema)
module.exports = TICKET
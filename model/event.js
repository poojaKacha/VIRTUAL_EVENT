const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    event_type: {
        type: String,
        required:true
    },
    short_description: {
        type: String,
        required:true
    },
    event_name: {
        type: String,
        required:true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',

        required:true
    }

})


const EVENT = mongoose.model('event', eventSchema)
module.exports = EVENT
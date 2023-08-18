const mongoose = require('mongoose');


//----------------THIS IS THE SCHEMA FOR CONNECTIONS AVAILABLE TO A USER-----------------//
const connectavailableSchema= new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
    }
)

module.exports = mongoose.model('connectavailable', connectavailableSchema);

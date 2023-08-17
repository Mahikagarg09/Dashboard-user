const mongoose = require('mongoose');
const User = require('../models/users');
const connectavailable = require('../models/connectavailable');


const userConnectionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: User },
  connect_person_id: { type: mongoose.Schema.Types.ObjectId, ref: connectavailable },
});

const UserConnection = mongoose.model('UserConnection', userConnectionSchema);

module.exports = UserConnection;

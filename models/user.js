const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    workout:[{type:Schema.Types.ObjectId,ref:'Workout'}]
})

module.exports = mongoose.model('User', userSchema)
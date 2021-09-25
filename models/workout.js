const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    Description: String,
     Date: Date,
})

const workoutSchema = new Schema({
    Exercise: String,
    Duration: Number,
    Date: Date,
    Type: {type: String, enum: ['Weightlifting', 'Running', 'Crossfit','Swimming','Squats','Deadlifts','']},
    Sets: {type: Number, min: 1, max:10 },
    
})

module.exports = mongoose.model('Workout', workoutSchema)
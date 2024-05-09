const mongoose = require('mongoose');


// basic set up will get more complicated later
// creating Schema for the DB 
const taskSchema = new mongoose.Schema({
    name:String,completed:Boolean
})

module.exports = mongoose.model('Task', taskSchema)
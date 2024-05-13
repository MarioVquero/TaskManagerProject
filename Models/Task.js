const mongoose = require('mongoose');


// basic set up will get more complicated later
// creating Schema for the DB 
// only properties setup in the schema will be sent to the DB
const taskSchema = new mongoose.Schema({
    // basic validators so that a person can't just spam the create button
    name:{
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20,'name can not be more than 20 characters']
    },
    completed:{
        type: Boolean,
        default: false
    }
})



module.exports = mongoose.model('Task', taskSchema)
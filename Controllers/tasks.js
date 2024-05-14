const { json } = require('express')
const Task = require('../Models/Task')

const asyncWrapper = require('../middleware/async')




// as of 2:36:00 
// creating middleware so we dont have to have constant try and catch blocks
// in later projects we weill use npm packages to make it faster but doing this now for understanding

// first we will wrap get all tasks just to show how it works but can do it to all routes





// gets every task
const getAllTasks = asyncWrapper(  async (req,res) => {
// using an empty object and .find we are able to find all the objects in the DB
    
    const tasks = await Task.find({})
    // if no error set up status and send back JSON
    res.status(200).json({tasks})
    
    
})

// Creates a new task 
// not home at the moment but once you are test this using postman
// should return an object in postman with its unique ID, name you assigned, and completion status
// only properites set in the Schema will be passed on to the DB
// everything else will be ignored
const createTask = asyncWrapper( async (req, res) => {

    const task = await Task.create(req.body)
        
    // instead of this we can do 
    // res.status(200).json(task)

    // this which also returns the amount of tasks
    // res.status(200).json(task,amount:tasks.length)

    // or this which sets up a flag that is true if the line works
    res.status(200).json({success : true, data:{ tasks, nbhits: tasks.length}})

    
})

// REMINDER: all of these routes will have a try can catch boilerplate, but
// will also go over different ways to do it
// for the sake of knowing the language use all the ways and find one you like

// Gets a task using the ID provided
const getTask = asyncWrapper( async (req,res) => {
    
    // sets given ID to taskID for use
    const {id:taskID} = req.params

    // using taskID looks for object with that ID, if none returns null
    const task = await Task.findOne({_id:taskID})
        
    if(!task) {
        // always have a return so that you odont have 2 responses
        return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    // if task found return status code 200 and return the task with matching ID
    res.status(200).json({ task })
    
})

// why patch instead of put? for udpate task
// because put tries to replace the existing resource

// but patch is for a partial update

// Updates a task using the ID provided
const updateTask = asyncWrapper( async (req,res) => {
    
    const {id:taskID} = req.params;
    // if you want to assign to data you can
    const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
        new:true,
        runValidators:true
    })
        
    if(!task) {
        // always have a return so that you odont have 2 responses
        return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})
    
})

// deletes a task using the ID provided 
const deleteTask = asyncWrapper( async (req,res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID})
        
    if(!task) {
        // always have a return so that you odont have 2 responses
        return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})
    
})



// exports methods for any script to use
// in this case were connecting to ./Routes/tasks.js
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
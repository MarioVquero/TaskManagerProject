const { json } = require('express')
const Task = require('../Models/Task')


// gets every task
const getAllTasks = async (req,res) => {
    // using an empty object and .find we are able to find all the objects in the DB
    try {
        const tasks = await Task.find({})
        // if no error set up status and send back JSON
        res.status(200).json({tasks})
    } catch(error) {
        res.status(500)
    }
}

// Creates a new task 
// not home at the moment but once you are test this using postman
// should return an object in postman with its unique ID, name you assigned, and completion status
// only properites set in the Schema will be passed on to the DB
// everything else will be ignored
const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body)
        
        // instead of this we can do 
        // res.status(200).json(task)

        // this which also returns the amount of tasks
        // res.status(200).json(task,amount:tasks.length)

        // or this which sets up a flag that is true if the line works
        res.status(200).json({success : true, data:{ tasks, nbhits: tasks.length}})

    } catch(error) {
        // 500 is just general server error will change later to be more specific
        res.status(500).json({msg:error})
    }
}

// REMINDER: all of these routes will have a try can catch boilerplate, but
// will also go over different ways to do it
// for the sake of knowing the language use all the ways and find one you like

// Gets a task using the ID provided
const getTask = async (req,res) => {
    try {
        
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
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

// why patch instead of put? for udpate task
// because put tries to replace the existing resource

// but patch is for a partial update

// Updates a task using the ID provided
const updateTask = async (req,res) => {
    try {
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
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

// deletes a task using the ID provided 
const deleteTask = async (req,res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID})
        
        if(!task) {
            // always have a return so that you odont have 2 responses
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}



// exports methods for any script to use
// in this case were connecting to ./Routes/tasks.js
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
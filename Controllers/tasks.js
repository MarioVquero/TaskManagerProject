const Task = require('../Models/Task')


// gets every single task
const getAllTasks = (req,res) => {
    res.send('all items from the file')
}

// Creates a new task 
// not home at the moment but once you are test this using postman
// should return an object in postman with its unique ID, name you assigned, and completion status
// only properites set in the Schema will be passed on to the DB
// everything else will be ignored
const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
}

// Gets a task using the ID provided
const getTask = (req,res) => {
    res.json({id:req.params.id})
}

// Updates a task using the ID provided
const updateTask = (req,res) => {
    res.send('update task')
}

// deletes a task using the ID provided 
const deleteTask = (req,res) => {
    res.send('delete task')
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
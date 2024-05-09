
// gets every single task
const getAllTasks = (req,res) => {
    res.send('all items from the file')
}

// Creates a new task 
const createTask = (req, res) => {
    res.json(req.body)
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
const express = require('express');
const router = express.Router();

// requires all methods from ../Controllers/tasks
const {

    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
    
} = require('../Controllers/tasks')

// Tutorial Tip: 
// keep the same pattern don't change it to make it easier
// for other users

// Routes for doing anything on the site
// in this case, getting all tasks, creating tasks, 
// getting a single task with an ID, updating a task using its ID,
// and deleting a task using its ID
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router
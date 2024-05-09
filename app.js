const express = require('express')
const app = express();
const tasks = require('./Routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware

app.use(express.json())

// routes

app.get('/hello', (req,res) => {
    res.send('Task Manager App')
})



app.use('/api/v1/tasks', tasks)

// All Routes Necessary

// app.get('/api/v1/tasks')         - Get all Tasks
// app.post('/api/v1/tasks')        - Create a new Task
// app.get('/api/v1/tasks/:id')     - Get 1 task using the ID
// app.patch('/api/v1/tasks/:id')   - update a task
// app.delete('/api/v1/tasks/:id')  - Delete a TAask


// currently a hard coded port will probably change
const port = 5000

// if server is running and upated correctly this will be posted on the console
// NOTICE: chance theres some errors here since console connects
// without waiting for DB
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port: ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


start()


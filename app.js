const express = require('express')
const app = express();
const tasks = require('./Routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const notFound = require('./middleware/notfound')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

// custom 404 response
app.use(notFound)

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


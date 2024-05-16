const express = require('express')
const app = express();
const tasks = require('./Routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const notFound = require('./middleware/notfound')
const errorHandler = require('./middleware/errorHandler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

// custom 404 response
app.use(notFound)
// error handling 
app.use(errorHandler)

// For the sake of deployment will need to use a given PORT value,
// but will also default to 5000 if not given one
const port = process.env.PORT || 5000

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


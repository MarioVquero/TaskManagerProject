const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose
    .connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
        // use these to avoid depracation errors
    }) 
}

module.exports = connectDB
const {customAPIError} = require ('../errors/customErrors')

const errorHandler = (err,req,res,next) => {
    console.log(err)
    // can hardcode some message if you want to 
    // ex: return res.status(500).json({msg: `something went wrong, try again later`})
    return res.status(err.status).json({msg:err.message})
}

module.exports = errorHandler
// returns the error to the user and defaults to 
// "something went wrong, please try again"
// if error isnt recognized
const {customAPIError} = require ('../errors/customErrors')

const errorHandler = (err, req, res, next) => {
    if (err instanceof customAPIError) {
        // can hardcode some message if you want to 
        // ex: return res.status(500).json({msg: `something went wrong, try again later`})
        return res.status(err.status).json({ msg:err.message })
    }
    return res.status(500).json({msg: 'Something went wrong, please try again'})
}

module.exports = errorHandler
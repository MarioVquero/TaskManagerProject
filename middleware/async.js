// wrapper that isnt needed but makes code easier to read
// and simple
const asyncWrapper = (fn) => {
    return async (req,res,next) => {
        try {
            await fn(req,res,next) 
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper
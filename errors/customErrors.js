
class customAPIError extends Error {
    constructor(message,statusCode) {
        // all messages and status codes are passed down here
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new customAPIError(msg, statusCode)
}

modules.exports = {
    createCustomError,
    customAPIError
}
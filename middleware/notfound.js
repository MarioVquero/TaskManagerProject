// Simple script to redirect the user if the chosen element is not found
// EX: /api/v1/tasks/ gibberish
// doesn't exist and will redirect to this

const notFound = (req,res) => res.status(404).send('Route does not exist')

module.exports = notFound
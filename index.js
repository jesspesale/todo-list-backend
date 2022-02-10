const express = require('express')

const app = express()

// get takes 2 arguments - 1. the URL 2. callback function
app.get('/', (req, res) => {
    res.send("Hey this is Node.js express")
})

const port = 3000
app.listen(port, () => {
    console.log(`A node JS API is listening on port ${port}`)
})
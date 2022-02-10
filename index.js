const express = require('express')
const app = express()
const morgan = require('morgan')

// bring in routes
const {getPosts} = require('./routes/post')

// middleware
app.use(morgan("dev"))


// get takes 2 arguments - 1. the URL 2.callback function
app.use('/', getPosts)

const port = 3000
app.listen(port, () => {
    console.log(`A node JS API is listening on port ${port}`)
})
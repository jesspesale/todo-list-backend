const express = require('express')
const app = express()

// bring in routes
const postRoutes = require('routes/post')

// get takes 2 arguments - 1. the URL 2.callback function
app.get('/', postRoutes.getPosts)

const port = 3000
app.listen(port, () => {
    console.log(`A node JS API is listening on port ${port}`)
})
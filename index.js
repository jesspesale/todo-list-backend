const express = require('express')
const app = express()
const morgan = require('morgan')

// import mongoose
const mongoose = require('mongoose');
// load env variables
require('dotenv').config();
// const dotenv = require('dotenv');
// dotenv.config()

const MONGO_URI = process.env.MONGO_URI;

const db = require('dotenv');

// db.connect(MONGO_URI);
 
//db connection
mongoose.connect(
  MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});



// bring in routes
const postRoutes = require('./routes/post')

// middleware
app.use(morgan("dev"))
// get takes 2 arguments - 1. the URL 2.callback function
app.use('/', postRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`A node JS API is listening on port ${port}`)
})
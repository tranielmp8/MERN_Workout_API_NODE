const express = require('express')
require('dotenv').config() // npm i dotenv
//mongoose for mongodb support
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')


//express app stored in app constant
const app = express()


app.use(express.json()) //can do something like req.body
//middleware (want a logger for when we GET/POST/PUT/DELETE)
app.use((req, res, next)=> {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    app.listen(process.env.PORT, () => {
      console.log('Connected to MongoDB and listening on PORT:', process.env.PORT)
    })
  })
  .catch((error)=>{
    console.log(error)
  })


//listen for requests



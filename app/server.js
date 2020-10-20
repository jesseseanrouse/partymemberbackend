// env set up
require('dotenv').config()

// set up connections/imports
const mongoose = require('../DB/connection')
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT; 

// Middleware
app.use(express.json())
app.use(cors())

// Routes
const partyRouter = require('../controller/partyMember')
app.use('/party', partyRouter)

// Basic route
app.get('/', (req, res) => {
    res.json({error: "Please add party to your url"})
})

//LISTENER
app.listen(PORT, () => {
  console.log(`Peeping on ${PORT}`);
});
// .env set up
require('dotenv').config()

// Mongoose set up
const { MONGODBURI } = process.env
const mongoose = require('mongoose')
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const db = mongoose.connection
mongoose.connect(MONGODBURI, config)

// copied from alex
db.on('open', () => console.log('You are connected to Mongo'))
	.on('close', () => console.log('You are disconnected to Mongo'))
	.on('error', (err) => console.log(err));

module.exports = mongoose;
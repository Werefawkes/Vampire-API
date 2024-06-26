const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())

// enable cors for all routes
app.use(cors())


// dotenv
require('dotenv').config()
const PORT = process.env.PORT

if (process.env.MONGODB_URI == undefined) {
	throw console.error("ERROR: No MongoDB URI was set. Did you correctly set the environment variables?");
}

// mongoose
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true},
	() => { console.log('Connected to mongo: ', process.env.MONGODB_URI) }	
)

// routes
// landing page
app.get('/', (req, res) => {
	res.send("Welcome to the London Shadows API")
})

// controllers
const charactersController = require('./controllers/characters_controller.js')
app.use('/characters', charactersController)

// 404
app.get('*', (req, res) => {
	res.status(404).send('Not Found')
})



// listen
app.listen(PORT, () => {
	console.log('Server listening at port ', PORT)
})
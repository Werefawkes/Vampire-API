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

// mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
	() => { console.log('Connected to mongo: ', process.env.MONGO_URI) }	
)



// routes
// landing page
app.get('/', (req, res) => {
	res.send("Welcome to Books-API")
})

// controllers
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

// 404
app.get('*', (req, res) => {
	res.status(404).send('Not Found')
})



// listen
app.listen(PORT, () => {
	console.log('Server listening at port ', PORT)
})
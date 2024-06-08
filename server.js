import express, { json } from 'express'
const app = express()
import { connect } from 'mongoose'
import cors from 'cors'

app.use(json())

// enable cors for all routes
app.use(cors())


// dotenv
require('dotenv').config()
const PORT = process.env.PORT

// mongoose
connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true},
	() => { console.log('Connected to mongo: ', process.env.MONGODB_URI) }	
)



// routes
// landing page
app.get('/', (req, res) => {
	res.send("Welcome to Books-API")
})

// controllers
import booksController from './controllers/books_controller.js'
app.use('/books', booksController)

// 404
app.get('*', (req, res) => {
	res.status(404).send('Not Found')
})



// listen
app.listen(PORT, () => {
	console.log('Server listening at port ', PORT)
})
const express = require('express')
const books = express.Router()
const Book = require('../models/character.js')

// index
books.get('/', (req, res) => {
	Book.find()
		.then(foundBooks => {
			res.status(200).send(foundBooks)
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(400).send(err)
		})
})

// show
books.get('/:id', (req, res) => {
	Book.findById(req.params.id)
		.then(foundBook => {
			res.status(200).send(foundBook)
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(404).send(err)
		})
})

// update
books.put('/:id', (req, res) => {
	Book.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	})
		.then(updatedBook => {
			res.status(200).send(updatedBook)
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(400).send(err)
		})
})

// delete
books.delete('/:id', (req, res) => {
	Book.findByIdAndDelete(req.params.id)
		.then(deletedBook => {
			res.status(200).send('Successfully deleted')
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(400).send(err)
		})
})

// create
books.post('/', (req, res) => {
	Book.create(req.body)
		.then(createdBook => {
			res.status(201).send(createdBook)
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(400).send(err)
		})
})

module.exports = books
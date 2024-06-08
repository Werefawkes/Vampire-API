const express = require('express')
const characters = express.Router()
const Character = require('../models/character.js')

// index
characters.get('/', (req, res) => {
	Character.find()
		.then(foundChars => {
			res.status(200).send(foundChars)
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(400).send(err)
		})
})

// show
characters.get('/:id', (req, res) => {
	Character.findById(req.params.id)
		.then(foundChar => {
			res.status(200).send(foundChar)
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(404).send(err)
		})
})

// update
characters.put('/:id', (req, res) => {
	Character.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	})
		.then(updatedChar => {
			res.status(200).send(updatedChar)
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(400).send(err)
		})
})

// delete
characters.delete('/:id', (req, res) => {
	Character.findByIdAndDelete(req.params.id)
		.then(deletedChar => {
			res.status(200).send('Successfully deleted')
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(400).send(err)
		})
})

// create
characters.post('/', (req, res) => {
	Character.create(req.body)
		.then(createdChar => {
			res.status(201).send(createdChar)
		})
		.catch(err => {
			console.log('ERROR: ', err)
			res.status(400).send(err)
		})
})

module.exports = characters
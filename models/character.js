const mongoose = require('mongoose')
const { Schema } = mongoose

const characterSchema = new Schema({
	title: String,
	description: String,
	year: Number,
	quantity: Number,
	imageURL: String
})

// model
const Character = mongoose.model('Character', characterSchema)
module.exports = Character
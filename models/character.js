const mongoose = require('mongoose')
const { Schema } = mongoose

const characterSchema = new Schema({
	firstName: String,
	lastName: String,
	apparentAge: Number,
	trueAge: Number,
	generation: String,
	bio: String
})

// model
const Character = mongoose.model('Character', characterSchema)
module.exports = Character
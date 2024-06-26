const mongoose = require('mongoose')
const Character = require('./character')
const { Schema } = mongoose

const assocSchema = new Schema({
	name: String,
	members: [Character]
})

// model
const Association = mongoose.model('Association', assocSchema)
module.exports = Association
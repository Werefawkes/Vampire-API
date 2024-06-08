import mongoose, { model } from 'mongoose'
const { Schema } = mongoose

const bookSchema = new Schema({
	title: String,
	description: String,
	year: Number,
	quantity: Number,
	imageURL: String
})

// model
const Book = model('Book', bookSchema)
export default Book
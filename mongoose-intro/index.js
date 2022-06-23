// https://mongoosejs.com/docs/queries.html
const mongoose = require('mongoose')

// const bookSchema = mongoose.Schema({
// 	title: String,
// 	author: String,
// 	pages: Number,
// 	released: Date
// })

const bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	author: {
		type: String,
		maxLength: 50
	},
	pages: {
		type: Number,
		max: 7000
	},
	inStock: {
		type: Boolean,
		default: true
	},
	genre: {
		type: String,
		enum: ['fantasy', 'sci-fi']
	},
	released: Date
})

const Book = mongoose.model('Book', bookSchema)

mongoose.connect('mongodb+srv://RFv3aO5lhHY1Gf0b:sz9IsPJ5U8RD19I3@cluster0.lyg7a.mongodb.net/?retryWrites=true&w=majority')
	.then(() => console.log('successfully connected'))
	.catch(err => console.log(err))

// CRUD - operations


// C - create

// Book.create({ title: 'Handmaides Tale' })
// 	.then(createdBook => console.log(createdBook))
// 	.catch(err => console.log(err))

// insertMany() -> here we can pass an array

// R - read

// get all the books
// Book.find()
// 	.then(allBooks => console.log(allBooks))
// 	.catch(err => console.log(err))

// you can also pass a query object to find({title: 'The Bible'})

// findOne({}) -> this gets the first document that matches the query 
// Book.find({_id: 'my object id'})
// findById(<id>) 

// U - update

// add  {new: true} as a third parameter if the method should return the updated obj
// Book.findOneAndUpdate({ title: 'Chaos Monkeys' }, { author: 'X' })
// 	.then(updatedBook => console.log(updatedBook))
// 	.catch(err => console.log(err))

// D - delete
// Book.findOneAndDelete({ title: 'Chaos Monkeys' })
// 	.then(book => console.log(book))

// findByIdAndDelete()

const userSchema = mongoose.Schema({
	name: {
		type: String,
		set: value => {
			return value
				.split(' ')
				.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase())
				.join(' ')
		}
	}
})
const User = mongoose.model('User', userSchema)

User.create({ name: 'joHn pEter miller' })
	.then(user => {
		console.log(user)
		// this closes the connection
		mongoose.connection.close()
	})
	.catch(err => console.log(err))



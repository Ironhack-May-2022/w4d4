const express = require('express')
const app = express()
const hbs = require('hbs')

// this line is needed to be able to use partials
// with handlebars
hbs.registerPartials(__dirname + '/views/partials')

// this sets hbs as the view engine
app.set('view engine', 'hbs')


const movies = require('./movies.json')

app.get('/', function (req, res) {
	console.log(movies)
	res.render('movies', { movieList: movies })
})

app.get('/godfather', (req, res, next) => {
	// get the movie godfather from the movies array
	const godfather = movies.find(movie => movie.title === 'The Godfather')
	console.log(godfather)
	res.render('movieDetails', { movie: godfather })
});


app.listen(3000, function () {
	console.log('server listening')
})
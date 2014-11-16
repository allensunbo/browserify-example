var http = require('http'); // For serving a basic web page.
var mongoose = require("mongoose"); // The reason for this demo.
var url = require('url');

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL
		|| 'mongodb://localhost/axioma';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 8080;
var Movie;
// Makes connection asynchronously. Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function(err, res) {
	if (err) {
		console.log('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log('Succeeded connected to: ' + uristring);
	}
	var movieSchema = new mongoose.Schema({
		title : {
			type : String
		},
		rating : String,
		releaseYear : Number,
		hasCreditCookie : Boolean
	}, {
		collection : 'movie'
	});

	// Compile a 'Movie' model using the movieSchema as the structure.
	// Mongoose also creates a MongoDB collection called 'Movies' for these
	// documents.
	Movie = mongoose.model('Movie', movieSchema, 'movie');

	var createNew = true;
	if (createNew) {
		Movie.remove({}, function(err) {
			console.log('collection removed')
			var thor = new Movie({
				title : 'Thor',
				rating : 'PG-13',
				releaseYear : '2011', // Notice the use of a String rather
										// than a
				// Number - Mongoose will automatically convert
				// this for us.
				hasCreditCookie : true
			});
			thor.save(function(err, thor) {
				if (err)
					return console.error(err);
				console.dir(thor);
			});
			
			var alien = new Movie({
				title : 'Alien',
				rating : 'R',
				releaseYear : '1984', // Notice the use of a String rather
										// than a
				// Number - Mongoose will automatically convert
				// this for us.
				hasCreditCookie : true
			});
			alien.save(function(err, thor) {
				if (err)
					return console.error(err);
				console.dir(thor);
			});

			
		});
	}

});

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	//res.end('Hello World\n');
	var url_parts = url.parse(req.url, true);
	var name = url_parts.name;
	// console.log(url_parts.query);
	if(url_parts.query.name) {
		 console.log(url_parts.query.name);
		Movie.find({title:url_parts.query.name}, function(err, thor) {
			if (err)
				return console.error(err);
			res.end(thor+"");
		});
	}
		
}).listen(theport);
console.log('Server running');

var greetings = require('./greetings');
module.exports = {
	foo: function run(name){
		return greetings(name).toUpperCase();
	},
	bar: function run(name){
		return greetings(name).toLowerCase();
	}	
}
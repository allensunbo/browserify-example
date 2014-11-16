var greetings = require('./greetings');
var mod = require('./mod');
var qrImage = require('./qr_mod');
module.exports = {
	foo : function run(name) {
		return greetings(name).toUpperCase();
	},
	bar : function run(name) {
		return greetings(name).toLowerCase();
	},
	max : function(arr) {
		return mod.max(arr);
	},
	generate : function(url, type, fname) {
		qrImage.generate(url, type, fname);
	}

}
var qr = require('qr-image');
var fs = require('fs');

module.exports = {
	generate : function(url, type, res) {
		var code = qr.image(url, {
			type : type
		});
		// res.type(type);
		code.pipe(res);
	},
	generate2 : function(url, type, fname) {
		var code = qr.image(url, {
			type : type
		});
		var output = fs.createWriteStream(fname)
		code.pipe(output);
	}
}
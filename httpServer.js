var http = require('http'); // For serving a basic web page.
var url = require('url');

var theport = process.env.PORT || 8080;

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	res.end('Hello World\n');
}).listen(theport);
console.log('Server running on port:'+theport);
module.exports=function(){}

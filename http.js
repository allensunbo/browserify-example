
var http = require('http');

var httpGet = function () {
	//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
	var options = {
	  host: 'www.random.org',
	  path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new',
	  method: 'GET',
	  withCredentials: false // this is the important part
	};

	var callback = function(response) {
	  var str = '';

	  //another chunk of data has been recieved, so append it to `str`
	  response.on('data', function (chunk) {
		str += chunk;
	  });

	  //the whole response has been recieved, so we just print it out here
	  response.on('end', function () {
		console.log(str);
	  });
	};

	return {
		execute : function () {
			http.request(options, callback).end();
		}
	};
};

module.exports = httpGet;
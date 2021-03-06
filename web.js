var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, data) {
	if (err) throw err;
	app.get('/', function(request, response) {
	    response.end(data);
	});
});

//app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

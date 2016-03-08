var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var client = require('redis').createClient();
var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();


var bodyParser = require('body-parser');
//var multer = require('multer'); 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//app.use(multer()); // for parsing multipart/form-data
app.use(express.static('public'));


var redis = require('redis');
//bluebird.promisifyAll(redis.RedisClient.prototype);
//bluebird.promisifyAll(redis.Multi.prototype);

app.post('/', function (req, res) {
	//console.log(req.body);
	var code = req.body['barcode'];
	console.log(code);
	client.rpush("item", code);
	res.send("Hello " + code);
});

app.post('/checkout.html', function (req, res) {
  	console.log("1");

	client.lrange("item", 0, -1, function(error, data) {
		// body...
		console.log(data);
		res.send(data);
	});
	    // reply is null when the key is missing
	

  
});


var server = app.listen(3000, function () {
  console.log('Example app listening');
});


module.exports = app;

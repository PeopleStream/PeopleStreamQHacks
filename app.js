var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
// var dbService = require('/services/dbService');
var twitter = require('./twitter');
var dbService=require('./services/dbService');

app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/Script'));



app.get('/',function(req,res){
	res.sendFile(path.join('index.html'));
});



app.get('/twitter/:id', function(req,res){
	twitter.getTweets(req.params["id"], function(error, tweets){
		if(error){
			res.sendStatus(500);
			return;
		}
		res.json(tweets);
	})
});



app.get('/removeDatabase',function(req,res){

dbService.removeAllListings(function(err){
		if (err){
			res.sendStatus(500);
		}
		else{
		res.json({status:"Dropped database"});
		}
	});

});

app.get('/populate',function(req, res){

	dbService.populateDatabase();
	res.json({status: "Populated the db"});

});

app.listen(3000,function(){
	console.log('Example app listening on port 3000')
});

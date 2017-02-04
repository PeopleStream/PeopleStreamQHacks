var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
// var dbService = require('/services/dbService');
var news = require('./news');
var twitter = require('./twitter');
var wikimedia = require('./wikimedia');
var dbService=require('./services/dbService');

app.use(express.static(__dirname + '/startbootstrap-freelancer-gh-pages'));  // was /View
app.use(express.static(__dirname + '/Script'));



app.get('/',function(req,res){
	res.sendFile(path.join('index.html'));
});



app.get('/twitter/:id', function(req,res){
	twitter.getTweets(req.params["id"], function(error, tweets){
		if(error){
			return res.sendStatus(500);
		}
		res.json(tweets[0]['text']);
	})
});

app.get('/twitterBio/:id', function(req,res){
	twitter.getBio(req.params["id"], function(error, bio){
		if(error){
			return res.sendStatus(500);
		}
		res.json(bio['description']);
	})
});



app.get('/wiki/:id', function(req,res){
	wikimedia.getWiki(req.params["id"], function(error, info){
		if(error){
			return res.sendStatus(500);
		}
		res.json(info);
	})
});

app.get('/news/:id', function(req,res){
	news.getNews(req.params["id"], function(info){
		if(!info){
			return res.sendStatus(500);
		}
		res.json(info);
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

var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
// var dbService = require('/services/dbService');
var news = require('./news');
var twitter = require('./twitter');
var wikimedia = require('./wikimedia');
var dbService=require('./services/dbService');
var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');
var jsdom = require('jsdom');

// app.use(express.static(__dirname + '/startbootstrap-freelancer-gh-pages'));  // was /View
// app.use(express.static(__dirname + '/Script'));
// app.use(express.static(__dirname + '/node_modules'));
// app.use(express.static(__dirname + '/src'));
// app.use("/node_modules", express.static(__dirname + '/node_modules'));
//
var engines = require('consolidate');
app.set('views', __dirname + '/startbootstrap-freelancer-gh-pages');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/',function(req,res){
	res.render('index.html');
});

var indico = require('indico.io');

indico.apiKey = 'a2f9702ecc22dde6549a72760cbf13f4';


app.get('/indico',function(req,res){


var logError = function(err) { console.log(err); }

// single example
indico.political("I have a constitutional right to bear arms!")
  .then(function(data){

  	return res.json(data);


  })
  .catch(logError);





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

app.get('/news/:id', function(req,res){
	news.getNews(req.params["id"], function(info){
		if(!info){
			return res.sendStatus(500);
		}
		res.json(info);
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

app.get('/scrape/:id',function(req,res){

url = 'https://twitter.com/' + String(req.params["id"]);

request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {

    jsdom.env(html,
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    console.log("contents of a.the-link:", window.$(".ProfileAvatar-image").attr('src'));
  }
);
  }
});

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
res.send('Check your console!')



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

app.get('*', function(req, res) {
	res.render('profile.html');
});


app.listen(3000,function(){
	console.log('Example app listening on port 3000')
});

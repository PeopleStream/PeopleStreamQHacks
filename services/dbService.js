var MongoClient = require('mongodb').MongoClient;
var MONGOURL = 'mongodb://localhost:27017/db';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personModel = require('../services/models/person');


mongoose.connect('mongodb://localhost:27017/db');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){

console.log("Connected");
});

function populateDatabase(){

  if(!db){
    console.log("No db");
    return;
  }

  personModel.collection.insert(listofpeople.json,function(err){

  	if(err){
  		callback(err);
  		return;
  	}

	callback(null);
  });


}

function getTwitterName(name,callback){
personModel.findOne({"Full Name":name},"Twitter",function(err,docs){
if(err){
	console.log("Failed to fetch person.")
	callback(err,null);
	return;
}


callback(null,docs);
});

}


function removeAllListings(callback){
  mongoose.connection.db.dropDatabase(function(err){
    if (err){
    console.log("Failed to delete database");
    callback(err);
    return;
}
  
  callback(null);

  });
}


module.exports = {
    
    populateDatabase: populateDatabase,
    removeAllListings: removeAllListings,
    


  };

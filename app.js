var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var dbService = require('/services/dbService');

app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/Script'));

app.get('/',function(req,res){
	
res.sendFile(path.join('index.html'));

});	

app.listen(3000,function(){
	
console.log('Example app listening on port 3000')

});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
	
	"#": Number,
	"Full Name": String,
	"Associated Companies": String,
	"Twitter": String,
	"Instgram": String






});


var personmodel = mongoose.model("person",personSchema);

module.exports = personSchemaodel;
var wikiParser = require('wiki-infobox-parser');

function getWiki(name, callback){
  wikiParser(name, function(err, result) {
    if (err) {
          callback(err, null)
      } else {
          callback(null, result);
      }
  });
}

module.exports ={
	getWiki: getWiki
}

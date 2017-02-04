var wikiParser = require('wiki-infobox-parser');

function getWiki(username, callback){
  wikiParser(username, function(err, result) {
    if (err) {
          callback(err, null)
      } else {
          callback(null, result);
      }
  });
}

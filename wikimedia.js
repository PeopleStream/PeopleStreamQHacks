var wikiParser = require('wiki-infobox-parser');

function getWiki(username, callback){
  wikiParser('Elon Musk', function(err, result) {
    if (err) {
          callback(err, null)
      } else {
          callback(null, result);
      }
  });
}

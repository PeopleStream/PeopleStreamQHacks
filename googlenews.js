// change all of this
var GoogleNews, googleNews, track;

GoogleNews = require('google-news');
googleNews = new GoogleNews();

track = 'Volvo';

googleNews.stream(track, function(stream) {

  stream.on(GoogleNews.DATA, function(data) {
    return console.log('Data Event received... ' + data.title);
  });

  stream.on(GoogleNews.ERROR, function(error) {
    return console.log('Error Event received... ' + error);
  });
});

// change all of this
var GoogleNews, googleNews, track;

GoogleNews = require('google-news');
googleNews = new GoogleNews();

function getNews(track, callback){
  googleNews.stream(track, function(stream) {
    stream.on(GoogleNews.DATA, function(data) {
      callback(null, data.title);
    });
    stream.on(GoogleNews.ERROR, function(error) {
      callback(error, null);
    });
  });
}

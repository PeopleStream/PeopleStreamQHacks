// change all of this
var GoogleNews, googleNews, track;

GoogleNews = require('google-news');
googleNews = new GoogleNews();
var articles = [];

function getNews(track, callback){
  googleNews.stream(track, function(stream) {
    stream.on(GoogleNews.DATA, function(data) {
      if(articles.push(data) > 5){
        callback(articles);
      }
    });
    stream.on(GoogleNews.ERROR, function(error) {
      console.log(error);  // callback here breaks app.js
    });
  });
}

module.exports ={
	getNews: getNews
}

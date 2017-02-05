var GoogleNews, googleNews, track;

GoogleNews = require('google-news');
googleNews = new GoogleNews();
var articles = [];

function getNews(track, callback){
  googleNews.stream(track, function(stream) {
    stream.on(GoogleNews.DATA, function(data) {
      if(articles.push([data]) > 7){ //.title, data.link
        return callback(articles);
      }
    });
    stream.on(GoogleNews.ERROR, function(error) {
      return console.log(error);  // callback breaks app.js
    });
  });
}

module.exports ={
	getNews: getNews
}

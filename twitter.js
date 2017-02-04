var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '85TMQvLBbHVnYIo252Kwf42Wr', // change and hide these
  consumer_secret: 'GkcLyHDwGgnvCEcHufViB94fvmRwVW4rK3sYdx2KpVNOjEaDx6',
  access_token_key: '827744613339381760-liuCYAZmdvk7Pj438K9pJDHTWx9kZMq',
  access_token_secret: 'bGbOGrtvTUicjyTBD8z6s1j3cHVL2TvNCMbkrHFnmwH0d'
});

function getTweets(username, callback){
  var params = {screen_name: username}; // will be passed from user's query
  client.get('statuses/user_timeline', params, function(error, tweets) {
    if (!error) {

      callback(null, tweets)
    }
    else{
      callback(error, null)

    }
  });


}

function getBio(username, callback){
  var params = {screen_name: username}; // will be passed from user's query
  client.get('users/show', params, function(error, bio) {
    if (!error) {
      
      callback(null, bio)
    }
    else{
      callback(error, null)
      
    }
  });
 
  
}

module.exports = {
  getTweets: getTweets,
  getBio: getBio
}

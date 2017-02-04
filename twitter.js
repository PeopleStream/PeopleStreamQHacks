var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 'your consumer Key', // change
    consumerSecret: 'your consumer secret', // change
    callback: 'http://yoururl.tld/something' // change
});

var secrets = {} // new secrets object
twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
    if (error) {
        console.log("Error getting OAuth request token : " + error);
    } else {
        secrets{token} = requestToken, requestTokenSecret;
        secrets{tokenSecret} = requestTokenSecret;
    }
});

twitter.getAccessToken(token, tokenSecret, oauth_verifier, function(error, accessToken, accessTokenSecret, results) {
    if (error) {
        console.log(error);
    } else {
        //store accessToken and accessTokenSecret somewhere (associated to the user)
        secrets{accessToken} = accessToken;
        secrets{accessTokenSecret} = accessTokenSecret;
        //Step 4: Verify Credentials belongs here
    }
});

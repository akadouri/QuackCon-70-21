var Twitter = require('twitter');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({origin: 'http://localhost:8080'}));

app.get('/', function(req, res) {
  var client = new Twitter({
    //Register for an account at apps.twitter.com
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  });

  var params = {
      screen_name: 'seahawks'
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
          console.log("request complete");
          console.log(tweets);
          res.send(tweets)
      }else {
        console.log(error)
      }
  });
});

app.use(express.static('static'));


app.listen(3000, function () {
  console.log('Server launched on port 3000');
});

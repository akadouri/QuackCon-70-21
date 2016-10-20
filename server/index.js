var Twitter = require('twitter');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({origin: 'http://localhost:8080'}));

app.get('/', function(req, res) {
  var client = new Twitter({
    consumer_key: 'phM76OewswmymI0k2TkTktVds',
    consumer_secret: 'eXQO9zXgykkIkuggz3Cqxu4kJ7EPqSQ7NmD2D3vVnvf0QviNM1',
    access_token_key: '215404498-fA8nIKA7eZdpGmoE781Azv94T30GHYCmPt5QGCad',
    access_token_secret: '6wBZ3uuyxpAuHAQj1R3oCiyGPBpHl88kHdu82E8An079K'
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

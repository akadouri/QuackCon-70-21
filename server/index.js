var Twitter = require('twitter');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({origin: 'http://localhost:8080'}));

app.get('/', function(req, res) {
  var client = new Twitter({
    consumer_key: 'c2tIJ5ncViEBrvmVarPMxTlPE',
    consumer_secret: 'wN9aFLu4QOKtCyNMYdhltV82CUFjmjBco1Scr3WMhJZL2i8WKC',
    access_token_key: '215404498-w7ljMAOH2PFVWtfMVaXF0O7E6eM0dvMxJziA7Nb3',
    access_token_secret: 'qjto1EqV9OMcLgjNbif7yUvaiCQQChLsrvBmfPKBGbgJI'
  });

  var params = {
      q: 'seahawks'
  };
  client.get('search/tweets', params, function(error, tweets, response) {
      if (!error) {
          console.log("request complete");
          res.send(tweets)
      }else {
        console.log(error)
      }
  });
});

app.listen(3000, function () {
  console.log('Server launched on port 3000');
});

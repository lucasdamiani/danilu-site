var express = require('express');
var app = express();
var clientCounter = 0;

app.get('/', function (req, res) {
  clientCounter++;
  console.log('Clients served: ' + clientCounter);
  res.send("<script>window.location.href = 'http://www.elo7.com.br/danilu-croche';</script>");
});

app.listen(3000, function () {
  console.log('danilu-site app listening on port 3000!');
});

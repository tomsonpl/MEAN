var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send(200, 'Witaj swiecie');
})

app.listen(8888);

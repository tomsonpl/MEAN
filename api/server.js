var express = require('express')
var bodyParser = require ('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res){
  res.json([
    {
      username: 'dickeyxxx',
      body: 'Node.js wymiata!'
    }
  ])
})

app.post('/api/posts'):
var Post = require('./models/post')
app.post ('/api/posts', function (req, res, next){
  var post = new Post ({
    username: req.body.username,
    body: req.body.body
  })
  post.save(function (err, post) {
    if (err) {return next(err)}
    res.json(201, post)
  })
})

app.listen(3000, function () {
  console.log ('serwer nasluchuje na porcie numer', 3000)
})

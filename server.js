var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client/build'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Film = require('./client/src/models/film');
var Review = require('./client/src/models/review');
var filmsSeedData = require('./client/src/models/films');
var films = filmsSeedData();



app.get('/', function () {
  res.sendFile(__dirname + '/client/build/index.html')
});

app.listen(3000, function () {
  console.log('App running on port '+ this.address().port);
});

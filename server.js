var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client/build'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Film = require('./client/src/models/film');
var Review = require('./client/src/models/review');
var filmsSeedData = require('./client/src/models/films_seed_data');
var films = filmsSeedData();

// DELETE 
app.delete( "/films/:id/delete", function( req, res ) {
  films.splice(req.params.id, 1)
  res.json( { data:films})
})

// UPDATE
app.put( "/films/:id", function( req, res){
  films[req.params.id] = req.body.film
  res.json( { data: films})
})

// CREATE
app.post("/films", function( req, res) {
  films.push( req.body.film)
  res.json({ data: films})
})

app.get("/films/:id", function(req, res) {
  res.json({data: films[req.params.id]})
})

// index
app.get( "/films", function( req, res) {
  res.json( films );
})

app.get('/', function () {
  res.sendFile(__dirname + '/client/build/index.html')
});

app.listen(3000, function () {
  console.log('App running on port '+ this.address().port);
});



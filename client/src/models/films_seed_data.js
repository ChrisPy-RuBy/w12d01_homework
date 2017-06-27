var Film = require('./film');
var Review = require('./review');

var filmsSeedData = function(){

  var review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Craig"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love vffff",
    rating: 100,
    author: "Harrison what what"
  });

  var film1 = new Film({
    title: "Now You See Me 2",
    actors: ["Woody Harrelson", "Jesse Eisenberg"],
    genre: "Bag 'o' shite"
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"],
    genre: 'space porno'
  });

  film1.addReview(review1);
  film2.addReview(review2);

  return [film1, film2];
}

module.exports = filmsSeedData;

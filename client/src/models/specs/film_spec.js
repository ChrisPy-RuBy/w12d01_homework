var Film = require('../film');
var assert = require('assert');

describe('Film', function () {
  var film;

  beforeEach(function () {
    film = new Film({
      title: 'Titanic',
      actors: ['Leonardo DiCaprio'],
      genre: "Romantic"
    });
  });

  it('should have title titanic', function () {
    assert.equal(film.title, 'Titanic');
  });

  it('should have a genre', function() {
    assert.equal(film.genre, 'Romantic');
  })

});

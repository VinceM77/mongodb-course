let db = connect("mongodb://root:test123*@localhost:27017");

// use sample_mflix;
db = db.getSiblingDB("sample_mflix");

const movieWithKeanu = db.movies.find({
    cast : "Keanu Reeves",
}).projection({
    title:1,
});

console.log(movieWithKeanu)


// récuperer les clés de la bdd sample_mflix
var keys = [];
db.movies.find().forEach(function(doc) {
    for (var key in doc) {
        if (keys.indexOf(key) === -1) {
            keys.push(key);
        }
    }
});
console.log(keys);

[
    '_id',       'plot',
    'genres',    'runtime',
    'cast',      'num_mflix_comments',
    'title',     'fullplot',
    'countries', 'released',
    'directors', 'rated',
    'awards',    'lastupdated',
    'year',      'imdb',
    'type',      'tomatoes',
    'poster',    'languages',
    'writers',   'metacritic'
  ]
let db = connect("mongodb://root:test123*@localhost:27017");

// use sample_mflix;
db = db.getSiblingDB("sample_mflix");

const movieWithKeanu = db.movies.find({
    cast : "Keanu Reeves",
}).projection({
    title:1,
});

console.log(movieWithKeanu)

// corrections

const keanuReavesFilms = db.movies.find({
    cast: 'Keanu Reeves'
}).projection({
    title: 1
});

console.log(keanuReavesFilms);

const comedies = db.movies.find({
    genres: 'Comedy'
}).projection({
    genres: 1,
    title: 1
})

console.log(comedies);

const between2002And2008 = db.movies.find({
    year: {
        $gte: 2002,
        $lte: 2008 
    }
}).sort({
    year: 1
});

console.log(between2002And2008);

const mattDiamant = db.movies.find({
    cast: {
        $all: ['Chris O\'Donnell','Matt Damon']
    }
});

console.log(mattDiamant);


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
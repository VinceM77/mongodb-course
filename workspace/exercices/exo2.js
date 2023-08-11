let db = connect("mongodb://root:test123*@localhost:27017");

db = db.getSiblingDB("sample_mflix");

const comedie = db.movies.find({
    genres : "comedie",
    
});

console.log(comedie)
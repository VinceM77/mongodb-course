let db = connect("mongodb://root:test123*@localhost:27017")
.getSiblingDB("sample_mflix");

const comedie = db.movies.find({
    genres : 'Comedy',
    
}).projection({
    genres : 1,
    title:1,
});

console.log(comedie)
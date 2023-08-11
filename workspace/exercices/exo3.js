let db = connect("mongodb://root:test123*@localhost:27017")
.getSiblingDB("sample_mflix");

const movieBetween2002And2008 = db.movies.find({
    year : {
    $gte: 2002,
    $lte:2008,
    },
    
}).projection({
    genres : 1,
    title:1,
});

console.log()
let db = connect("mongodb://root:test123*@localhost:27017");
// use technocite;
db = db.getSiblingDB("technocite");

// Récupération de données
// équivalent du SELECT * FROM classrooms WHERE code="Gaston"
const classrooms = db.classrooms.find({
    // code = "Gaston"
    code : { $eq: "Gaston" },
    // capacity >= 10
    capacity: { $gt: 10 }
});

console.log(classrooms);
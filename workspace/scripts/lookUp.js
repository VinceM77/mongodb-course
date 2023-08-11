let db = connect("mongodb://root:test123*@localhost:27017")
    .getSiblingDB("sample_mflix");

const commentsWithMovie = db.comments.aggregate([
    {
        $lookup: {
            from : "movies",
            localField: "movie_id",
            foreignField: "_id",
            as: 'movie'
        }
    },
    {
    $unwind: '$movie'
    }
]);

console.log(commentsWithMovie);
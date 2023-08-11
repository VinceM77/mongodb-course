let db = connect("mongodb://root:test123*@localhost:27017")
    .getSiblingDB("sample_mflix");

const result = db.movies.aggregate([
    {
        $match:{
            "imdb.rating" :{
                $lt: 5
            },    
        }
    },
    {
        $unwind: "$directors",
    },
    {
        $group: {
            _id : "$directors",
            total:{
                $count:{}
            }
        }
    },
    {
        $sort: {
            total: -1
        }        
    }

])

console.log(result)
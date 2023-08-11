let db = connect("mongodb://root:test123*@localhost:27017")
    .getSiblingDB("shop");

const orders = db.orders.aggregate([
    {
        $match: {
            item: {
                $exists: true,
            }
        }
    },
    {
        $lookup: {
            from: "inventory",
            localField: "item",
            foreignField: "sku",
            as: 'inventory_item'
        }
    },
    {
        $unwind: '$inventory_item'
    }
]);

console.log(orders);
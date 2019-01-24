// Find all zip codes in Iowa states
db.zips.find({state:{$eq:'IA'}}, {_id:1});

// Find all zip codes with a population more than 1000
db.zips.find({pop: {$gt: 1000}},{_id:1})

// Find all cities that have more than one zip code, sort the results based by state
// and city name
db.zips.aggregate([{$group:{_id:{state:"$state", city:"$city"}, num_zip:{$sum:1}}}, {$sort:{"_id.state":1,"_id.city":1}}])

// Display the least populated city in each state
db.zips.aggregrate([{$group:{_id:{city:"$city",state:"$state"}, pop:{$sum:"$pop"}}},{$group:{_id:"$_id.state",pop:{$min:"$pop"}}}])
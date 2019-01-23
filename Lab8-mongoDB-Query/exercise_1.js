//1. Write a mongoDB query to display all the document in the collection resturant
db.colResturant.find({});

//2. Write a MongoDB query to display the field resturant_id, name, district and cuisine for all the documents in the collection returant
db.colResturant.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine:1}).pretty();


//3. Write a MongoDb query to display the field restaurant_id, name , distict and cuisine, but exclude the field _id for all the documents in the collection restaurant
db.colResturant.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine:1}).pretty();

//4. Write a MongoDB query to display the field restaurant_id, name, district and zipcode, but exclude the field _id for all the documents in the collection restaurant
db.colResturant.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine:1, 'address.zipcode': 1}).pretty();

//5. Write a MongoDB query to display all the restaurant which is in the district Bronx
db.colResturant.find({district: 'Bronx'}).pretty();

//6. Write a MongoDB query to display the first 5 restaurant which is in the district Bronx
db.colResturant.find({district: 'Bronx'}).limit(5).pretty();

//7. Write a MongoDB query to display the next 5 restaurants after skipping first which are in district Bronx
db.colResturant.find({district: 'Bronx'}).skip(5).limit(5).pretty();

//8. Write a MongoDB query to find the restaurants which locates in coord value less the -97.754168
db.colResturant.find({'address.coord': {$lt: -95.754168}}).pretty();

//9. Write a MongoDB query to find the restaurant that does not prepare any cuisine of 'American' and their grade score more thant 70 and coord value less than -65.754168
db.colResturant.find({$and: [{cuisine: {$ne: 'American'}}, {'grades.score':{$gt: 70}, 'address.coord':{$lt: -65.754168} }]}).pretty();


//10. Write a MongoDB query to find the restaurant_id, name, district and cuisine for those restaurants which contains 'Wil' as first three letters for its name.
db.colResturant.find({name: {$regex: '^Wil'}},{restaurant_id:1, name:1, district:1, cuisine:1, _id:0}).pretty();

//11. Write a MongoDB query to find the restaurant_id, name, district, and cuisine for those restaurants which contains 'ces'
db.colResturant.find({name: {$regex: 'ces$'}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty();


//12. Write a MongoDB query to find the restaurant_id, name, district and cuisine for those restaurants which contains 'Reg' as three letters somewhere in its name
db.colResturant.find({name: {$regex: 'Reg'}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty();

//13. Write a MongoDB query to find the restaurants which belongs to the district Bronx and prepared either American or Chines dish
db.colResturant.find({$and: [{district:'Bronx'},{cuisine: {$in:['American','Chinese']}} ]}).pretty();

//14. Write a MongoDB query to find the restaurant_id, name, district and cuisine for those restaurants which belongs to the district Staten Island or Queens or Bronx or Brooklyn
db.colResturant.find({district: {$in:['Staten Island','Queens', 'Bronx', 'Brooklyn']} }, {restaurant_id:1, name:1, district: 1, cuisine:1}).pretty();

//15. Write a MongoDb query to find the restaurant_id, name, district and cuisine for those resturants which are nto belonging to the district State Island, Queens, or Bronx or Brooklyn
db.colResturant.find({district: {$nin:['Staten Island','Queens', 'Bronx', 'Brooklyn']} }, {restaurant_id:1, name:1, district: 1, cuisine:1}).pretty();

//16. Write a MongoDB query to find the restaurnat_id, name, district and cuisine for those resturants which acheived a score which is not moer than 10
db.colResturant.find({'grades.score': {$lt: 10}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty();


//17. Write a MongoDB query to find the restaurant_id, name address and geographical location for those restaurant where 2nd element of coord array contains a value which is more than 42 and up to 52
db.colResturant.find({'address.coord.1': {$gt: 42, $lt: 52}}, {restaurant:1,name:1, address:1}).pretty();

//18. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns
db.colResturant.find({}).sort({name: 1}).pretty();

//19. Write a MongoDB query to arrange the name of the restaurants in descending order along with all the columns
db.colResturant.find({}).sort({name: -1}).pretty();

//20. Write a MongoDB query to arrange the name of the cuisine in acending order and for those same cuisine district should be in descending order
db.colResturant.find({}).sort({name: 1, district: -1, cuisine: -1}).pretty();


//21. Write a MongoDB query to know whether all the address contains the street or not
db.colResturant.find({'address.street': {$exists: true}}).pretty();


//22. Write a MongoDB query which will select all documents in restaurants collection where the coord field value is Double
db.colResturant.find({'address.coord': {$type: 'double'}}).pretty();


//23. Write a MongoDB query to find the restaurnat name, district, longitude and latiude and cuisine for those restaurants which contains 'Mad' as first three letters of its name
db.colResturant.find({name: {$regex: '^Mad'}}, {name:1, district:1, 'address.coord':1}).pretty();

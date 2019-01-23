var express = require('express');
var app = express();

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
let db;

app.use((req, res, next) => {
    if(!db){
        client.connect(function(err){
            db = client.db('MWADb');
            next();
        });
    }else { 
        next();
    }
});

app.post('/save', function(req, res){
    console.log(req.body);
    if(req.body){
        db.collection('locations').insertOne(req.body);
        res.end('Inserted');
    } else {
        res.send('Invalid Data');
    }
});



app.post('/find', function(req, res){
    if(req.body){
        console.dir(req.body.currentLong);
        var cursor = db.collection('locations').find({location:{$near:[req.body.currentLong, req.body.currentLat]}},
            {_id:0})
        .limit(3);
        cursor.toArray((err, docs) => res.json(docs));
    } else {    
        res.send('Invalid Data');
    }
});

app.listen(2200, () => {
    console.log('listening port 2200');
});




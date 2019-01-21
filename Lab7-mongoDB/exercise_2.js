const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://127.0.0.1:27017');

const secret = 'asaadsaad';
const crypto = require('crypto');
var cipher = crypto.createDecipher('aes256', secret);

app.get('/secret', function(req, res){
    client.connect(function(error){
        const db = client.db('MWADb');
        const collection = db.collection('homework7');

        collection.findOne({}, function(err, doc){
            let decrypted = cipher.update(doc.message, 'hex', 'utf8');
            decrypted += cipher.final('utf8');
            console.log(decrypted);

            res.status(200);
            res.set('Content-Type', 'application/json');
            res.send(JSON.stringify(decrypted));
            res.end();

            client.close();
        });
        
        console.dir("Done");
    });
}).listen(2000, () => {
    console.log('Listening port 2000');
})
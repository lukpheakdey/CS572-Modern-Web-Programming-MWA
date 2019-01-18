const axios = require('axios');
const express = require('express');
const app = express();
const linkUrl = 'https://randomuser.me/api/?results=10';

app.set('strict routing', true);
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.enable('strict proxy');
//var oneDay = 86400000;
app.use(express.static(__dirname, {
    maxAge: '1d'
}));

app.get('/users', function(request, response){
    const getData = async function(res) {
       await axios.get(linkUrl).then(res => {
            response.status(200);
            response.set('Content-Type', 'application/json');
            response.send(res.data);
            response.end();
        })
    }
    getData(response);
}).listen(2200, () =>{
    console.log('listening port 2200');
});




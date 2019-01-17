const dns = require('dns');
//console.log(dns);

dns.resolve4('www.mum.edu', function(err, address, family){
    if(err)
        throw err;
    console.log(address);
});

//use promise
var promise = new Promise(function(resolve, reject){
    dns.resolve4('www.mum.edu2', function(err, address, family){
        if(err)
            reject(err);
        else    
            resolve(address);
    })
});
promise
    .then(address => console.log(address))
    .catch(()=> {
        console.log('Wrong address');
    });
    

//use async/await
async function lookingIp(name){
    await promise.then(address => console.log(address));
}
lookingIp('www.mum.edu');




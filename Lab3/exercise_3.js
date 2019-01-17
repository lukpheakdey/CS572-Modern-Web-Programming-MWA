var http = require('http');
var fs = require('fs');
var path = require('path');

/* Using Sample */
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello world");
    res.end();
}).listen(4000, () => {
    console.log('listening port 4000');
});

var server = http.createServer();

server.on("request", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("hello World");
  res.end();
});
server.listen(4000);


/* Using readFileSync */
server.on("request", function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    let responseFile = fs.readFileSync(path.join(__dirname, 'exercise_3_readFile.txt'), "utf8");
    res.write(responseFile);
    res.end();
});
server.listen(4000, () => {
    console.log('Listening port 4000 with readFileSync');
});

/* Using stream */
server.on("request", function(request, response) {
    var filePath = path.join(__dirname, "exercise_3.mp4");
    response.writeHead(200, {
        "Content-Type": "video/mp4"
    });
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
});
server.listen(3000, () => {
    console.log('listening port 3000 with stream');
});

/* Using readFile */
server.on("request", function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    let responseFile = fs.readFile(
        path.join(__dirname, "exercise_3_readFile.txt"),
        "utf8",
        function(error, fileData) {
        res.write(fileData);
        res.end();
        }
    );
});
server.listen(4000, () => {
    console.log('Listening 4000 with readFile');
});



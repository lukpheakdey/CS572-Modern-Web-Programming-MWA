var fs = require("fs");
var path = require("path");

readFileAsync = function(pathName) {
  fs.readFile(pathName, 'utf8', function(err, buffer) {
    process.send(buffer);
  });
};

process.on("message", pat => {
  var filePath = path.join(__dirname, pat);
  readFileAsync(filePath);
});

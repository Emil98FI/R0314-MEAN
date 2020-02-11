var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });

  var url = req.url;

  var myStream = fs.createReadStream(__dirname + "/frontpage.html", "utf8");
  var myStreamC = fs.createReadStream(__dirname + "/contact.html", "utf8");
  var myStreamP = fs.createReadStream(__dirname + "/plaintext.txt");
  var myStreamJ = fs.createReadStream(__dirname + "/sampledata.json");

  if (url === "/frontpage") {
    res.writeHead(200, { "Content-Type": "text/html" });
    myStream.pipe(res);
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    myStreamC.pipe(res);
  } else if (url === "/plaintext") {
    myStreamP.pipe(res);
  } else if (url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    myStreamJ.pipe(res);
  } else {
    res.write("Nothing to see here");
    res.end();
  }
});

server.on("listening", function() {
  console.log("ok, server is running");
});

server.listen(3001);

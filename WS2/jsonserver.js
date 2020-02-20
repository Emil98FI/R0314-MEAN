var http = require("http");

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/json" });






    var data = require(__dirname + "/sampledata.json");


    for (var i = 0; i < data.length; i++) {

        var output = JSON.stringify(data[i]);
        res.write(output);
    }





});



server.on("listening", function () {
    console.log("ok, server is running");

});

server.listen(3002);


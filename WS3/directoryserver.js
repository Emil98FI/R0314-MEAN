var express = require('express');
var app = express();

var fs = require("fs");




app.use(express.static('public/demosite/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/indaex.html');
})

app.get('/list', function (req, res) {
    res.sendFile(__dirname + '/exampledata.txt');
})

app.get('/jsondata', function (req, res) {
    var data = require('./exampledata2.json');

    var results = '<table border="1">';

    for (var i = 0; i < data.length; i++) {

        results +=
            '<tr>' +
            '<td>' + data[i].Name + '</td>' +
            '<td>' + data[i].Email + '</td>' +
            '<td>' + data[i].Date + '</td>' +
            '<td>' + data[i].Company + '</td>' +
            '</tr>';
    }

    res.send(results);

});



app.get('/add', function (req, res) {
    var data = require('./exampledata2.json');

    data.push({
        "Name": "Emil Brummer",
        "Company": "Unemployed",
        "Email": "ebrummer32@gmail.com",
        "Date": "03/03/2020 \r\n"
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile('exampledata2.json', jsonStr, (err) => {

        if (err) throw (err);
        console.log('saved');

    });

    res.send("Saved! Check JSON");


})



app.listen(8081);
console.log('listen');
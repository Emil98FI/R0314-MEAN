var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/aduser', function (req, res) {
    res.sendFile(__dirname + '/aduser.html');
});

app.get('/details', function (req, res) {
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


app.post('/aduser', function (req, res) {
    var data = require('./exampledata2.json');

    data.push({
        "Name": req.body.name,
        "Email": req.body.email,
        "Company": req.body.company,
        "Date": new Date()
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if (err) throw err;
        console.log('Saved!!!');
    })

    res.send("Check Details to see");

});


app.listen(8081);
console.log('listen');
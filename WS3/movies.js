var express = require('express');
var app = express();
const request = require('request');

let url = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";

let options = { json: true };



request(url, options, (error, res, body) => {
    if (error) {
        return console.log(error)
    };

    if (!error && res.statusCode == 200) {
        console.log(body);
        app.get('/', function (req, res) {

            res.send(body);
        });

        app.listen(8081, function () {
            console.log('Gates are open');
        })

    };
});
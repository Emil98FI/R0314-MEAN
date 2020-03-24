// Otetaan express-moduuli käyttöön
var express = require("express");
// Otetaan body-parser -moduuli käyttöön
var bodyParser = require("body-parser");

var app = express();

// Tarjoillaan staattisia sivuja tästä hakemistosta
app.use(express.static("./"));



app.get('/try', function (req, res) {
    res.sendFile(__dirname + '/try.html');

});

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// Luodaan reitit ja niiden toiminnallisuudet
app.get("/", function (req, res) {
    res.send("Hello World!");
});

// Uusi POST-tyyppiseen sivupyyntöön reagoiva reitti
app.post("/try", function (req, res) {
    console.log(req.body);
    var email = req.body.email;
    var pass = req.body.pass;

    res.send("Lähetit lomakkeen! Email: " + email + " Password: " + pass);
});

// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function (req, res) {
    res.send("Cant find the requested page", 404);
});

// Web-palvelimen luonti Expressin avulla
app.listen(8081, function () {
    console.log("Example app listening on port 8081!");
});

var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync("readMe.txt");
console.log(data.toString());

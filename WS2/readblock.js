var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync("example.txt");
console.log(data.toString());

for (var i = 0; i < 15; i++) {
  console.log("Node just keeps on while file is being read...");
}

console.log("program ended");

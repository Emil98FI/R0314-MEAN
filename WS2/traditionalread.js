var fs = require("fs");

console.log("Program started");

fs.readFile("readMe.txt", results);

for (var i = 0; i < 15; i++) {
  console.log("Node just keeps on while file is being read...");
}

function results(err, data) {
  if (err) return console.error(err);
  console.log("Results of fileread:");
  console.log(data.toString());
}

var fs = require("fs");

fs.unlink("text3.txt", function(err) {
  if (err) throw err;
  console.log("File deleted!");
});

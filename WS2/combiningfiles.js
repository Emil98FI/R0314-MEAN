var fs = require("fs");

fs.readFile("readMe.txt", function(err1, data1) {
  fs.readFile("text2.txt", function(err2, data2) {
    if (err1 || err2) {
      throw new Error();
    }

    let data = data1 + data2;
    fs.writeFile("text3.txt", data.toString(), function(err) {
      if (err) throw err;

      fs.appendFile("text3.txt", "I wrote this", function(err) {
        if (err) throw err;
        console.log("Updated!");
      });
    });
  });
});

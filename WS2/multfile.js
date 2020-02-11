var fs = require("fs");

fs.readFile("readMe.txt", function(err1, data1) {
  fs.readFile("text2.txt", function(err2, data2) {
    if (err1 || err2) {
      throw new Error();
    }

    let data = data1 + data2;
    console.log(data.toString());
  });
});

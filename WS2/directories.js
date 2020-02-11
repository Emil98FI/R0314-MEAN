var fs = require("fs");

const dirnames = {
  sync: "newData",
  async: "asyncnewDir"
};

text = "Welcome to the jungle";

fs.mkdirSync(dirnames.sync, 0o777);

fs.writeFileSync(`${dirnames.sync}/new.txt`, `${text}`);

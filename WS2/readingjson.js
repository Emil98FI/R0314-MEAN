var data = require(__dirname + "/sampledata.json");

delete data[0];



for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
}

data.push({

    "name": "Joe doe",
    "Age": "52",
    "Company": "Laurea",
    "address": "Ratatie"


})

for (var i = 0; i < data.length; i++) {

    console.log(data[i]);
}
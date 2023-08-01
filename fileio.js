const { log } = require("console");
let fs = require("fs");
let readLine = require("readline")

//let data = fs.readFileSync("data2.csv");
//log(data.toString());

var rd = readLine.createInterface({
    input: fs.createReadStream('data2.csv'),
    output: process.stdout,
    console: false
});
rd.on('line', function(line){
    let mySet = new Set();
    mySet.add(line);
    log(line);
});
rd.on('close', function() {
    log("All done");
});

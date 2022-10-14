const fs = require("fs");

// Reading a file - Asyncronous read - Reading only buffer
fs.readFile("06_RandomFile.txt", (err, data) => {
  if (err) {
    console.log("Error reading a file!");
  } else {
    console.log("Asyncronous File read, and the contents are :- ", data); //Data :- <Buffer 48 65 79> , if no formatting mentioned!
  }
});

//Reading a file - Asyncronous read - converted to UTF--8
fs.readFile("06_RandomFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading a file!");
  } else {
    console.log("Asyncronous File read, and the contents are :- ", data); //Data :- <Buffer 48 65 79> , if no formatting mentioned!
  }
});

let dataRead = fs.readFileSync('06_RandomFile.txt', 'utf-8');
console.log("Synchronously read data with utf-8 format :- ", dataRead);

let dataRead2 = fs.readFileSync('06_RandomFile.txt');
console.log("Synchronously read dataRead2.toString() :- ", dataRead2.toString());
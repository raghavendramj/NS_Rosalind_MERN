const fs = require("fs");

fs.open("07_JustForOpen.txt", "w+", (err, fd) => {
  if (err) {
    console.log("Error reading a file!", err);
  } else {
    console.log("File opened :- ", fd);
  }
});

fs.stat("07_JustForOpen.txt", (err, stats) => {
  if (err) {
    console.log("Error reading a file!", err);
  } else {
    console.log(stats);
    console.log("stats.isFile()", stats.isFile());
    console.log("stats.isDirectory()", stats.isDirectory());
  }
});

const fs = require("fs");

const fileContent = "I am adding the following into the file";

fs.writeFile("08_CreatingFile.txt", fileContent, (err) => {
  if (err) {
    console.log("Error occurred in wriring into the file.");
  } else {
    console.log("File created Successfully and written into it");
  }
});

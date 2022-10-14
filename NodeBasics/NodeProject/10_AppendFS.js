const fs = require("fs");

//Create + Write
const fileName = "10_ForAppeding.txt";
fs.writeFile(fileName, "Original content!", (err) => {
  if (err) {
    console.log("Error occurred in wriring into the file.");
  } else {
    console.log("File created for appending Successfully!");

    //Appending
    fs.appendFile(fileName, "\nNew Content appeneded!", (err) => {
      if (err) console.log("Error occurred");
      else console.log("File content appeneded successfully!");
    });
  }
});

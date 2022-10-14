const fs = require("fs");

//Create + Write
const fileName = "09_CreatingAForRenaming.txt";
fs.writeFile(fileName, "For rename!", (err) => {
  if (err) {
    console.log("Error occurred in wriring into the file.");
  } else {
    console.log("File created for renaming Successfully!");

    setTimeout(() => {
      //Renaming
      fs.rename(fileName, "09_RenamedFileToNewton.txt", (err) => {
        if (err) {
          console.log("Error occurred in renaming the file.");
        } else {
          console.log(`Renaming the ${fileName} after 3 seconds!`);
          console.log("File renamed Successfully!");
        }
      });
    }, 3000);
  }
});

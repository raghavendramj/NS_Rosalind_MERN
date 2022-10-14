const fs = require("fs");

//Create + Write
const fileName = "11_ForDeletion.txt";
fs.writeFile(fileName, "Original content!", (err) => {
  if (err) {
    console.log("Error occurred in wriring into the file.");
  } else {
    console.log("File created for appending Successfully!");

    setTimeout(() => {
      //Deleting the same file whatever we have created above
      fs.unlink(fileName, (err) => {
        if (err) {
          console.log("Error occurred during deletion of the file!", err);
        } else {
          console.log(`Deleting the ${fileName} after 3 seconds!`);
          console.log("File deleted successfully");
        }
      });
    }, 3000);
  }
});

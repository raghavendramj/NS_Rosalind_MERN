const fs = require("fs");
const path = require("path");

//Usecase :-
//1. Read the directory -> NodeJS
//2. Read all the files
//3. Delete only files with .txt extension

fs.readdir("NodeJS", (err, files) => {
  if (err) {
    console.log("Error occurred!");
  } else {
    console.log("Files :- ", files);

    files.forEach((file) => {
      if (path.extname(file) === ".txt") {
        console.log("In 3 seconds deleting the file ", file);
        setTimeout(() => {
          //Deleting the same file whatever we have created above
          fs.unlink("NodeJS/" + file, (err) => {
            if (err) {
              console.log("Error occurred during deletion of the file!", err);
            } else {
              console.log(`Deleting the ${file} after 3 seconds!`);
              console.log("File deleted successfully");
            }
          });
        }, 3000);
      }
    });
  }
});

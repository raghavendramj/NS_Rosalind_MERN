const path = require("path");

const fileName = path.parse(__filename);
console.log("FileName and its info :- ", fileName);
// console.log("process.env.PATH :- ", process.env.PATH);
// console.log("process.env.PATH :- ", process.env.PATH.split(path.delimiter));

console.log(
  "path.dirname() :- ",
  path.dirname("D:\\All_Code_Projects\\W3Schools")
);

console.log("Extension :- ", path.extname("03_PathModule.txt.php"));
const fs = require("fs");
const path = require("path");

// Reading file
// const buffer = fs.readFileSync("1-json.json");
// console.log(buffer + "");

// Creating a file
// fs.openSync("sample-text.txt", "w");

// Write file
// fs.writeFileSync("sample-text.txt", "Hello Dost! Kaise ho ?");

// updating file
// fs.appendFileSync("sample-text.txt", " Hum to mast hai bhai!");

// fs.mkdirSync("fileSystemDirector");

// fs.writeFileSync("fileSystemDirector/trial-file.txt", "This is the trial file");

// const content = fs.readdirSync("fileSystemDirector");
// console.log(content);

// content.forEach(name => {
//     // Removing files
//     fs.unlinkSync("fileSystemDirector/" +name);
// });

// removing folder
// fs.rmdirSync("fileSystemDirector");

// fs.existsSync() => if a file exist at a path then return true
// fs.lstatSync() => is it a file or folder

// const doesPathExist = fs.existsSync("1-json.json");
// console.log(doesPathExist);

// const detailsObj = fs.lstatSync(__dirname + "\\1-json.json");
// console.log(detailsObj.isFile());
// console.log(detailsObj.isDirectory());

// Sample Test for the file system
// for (let i = 1; i <= 10; i++) {
//   const dirPathToMake = `Lecture-${i}`;
//   fs.mkdirSync(dirPathToMake);
//   fs.writeFileSync(
//     path.join(dirPathToMake, "readme.md"),
//     `#Read me for ${dirPathToMake}`
//   );
// }

for (let i = 1; i <= 10; i++) {
  const dirPathToDelete = `Lecture-${i}`;
  const content = fs.readdirSync(dirPathToDelete);
  content.forEach((name) => {
    console.log(path.extname(path.join(dirPathToDelete, "readme.md")));
    console.log(path.basename(path.join(dirPathToDelete, "readme.md")));
    fs.unlinkSync(path.join(dirPathToDelete, "readme.md"));
  });
  fs.rmdirSync(dirPathToDelete);
}

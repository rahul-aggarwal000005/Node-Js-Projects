const fs = require("fs");

console.log("Before");
// const data = fs.readFileSync("f1.txt").toString();
// console.log(data);

// async function
fs.readFile("f1.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

console.log("After");
console.log("Mean while");

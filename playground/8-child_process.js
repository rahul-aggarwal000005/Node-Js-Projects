const cp = require("child_process");

/*
console.log("Trying to open calculator");
cp.execSync("calc");
console.log("Calculator opened");
*/

/* 
console.log("Trying to open vs code");
cp.execSync("code");
console.log("VS code opened");
*/

console.log("Trying to open CodeForces");
cp.execSync("start chrome https://codeforces.com/contests");
console.log("CodeForces opened Successfully!");

const output = cp.execSync("node test.js");
console.log("Output : " + output);

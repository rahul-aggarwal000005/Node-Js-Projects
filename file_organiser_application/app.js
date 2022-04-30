#!/usr/bin/env node
const help = require("./commands/help");
const organize = require("./commands/organize");
const tree = require("./commands/tree");

console.log("File Organizer Application!");
const inputArray = process.argv.slice(2);
const command = inputArray[0];

switch (command) {
  case "help":
    help();
    break;
  case "organize":
    organize(inputArray[1]);
    break;
  case "tree":
    tree(inputArray[1]);
    break;
  default:
    "Please Enter a valid command!";
}

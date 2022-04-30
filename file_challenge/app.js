#!/usr/bin/env node
// console.log("wcat challenge!");
const fs = require("fs");

const inputArray = process.argv.slice(2);

// options
const options = inputArray.filter((val) => {
  return val[0] === "-";
});

if (options.includes("-n") && options.includes("-b")) {
  console.log("Either write -n or -b option!");
  return;
}

// files
const files = inputArray.filter((val) => {
  return val[0] !== "-";
});

let content = "";

files.forEach((file) => {
  const isPresent = fs.existsSync(file);
  if (isPresent) {
    const buffer = fs.readFileSync(file).toString();
    content += buffer + "\r\n";
  } else {
    console.log(`${file} is not present`);
    return;
  }
});

let contentArray = content.split("\r\n");

if (options.includes("-s")) {
  for (let i = 1; i < contentArray.length; i++) {
    if (contentArray[i] == "" && contentArray[i - 1] == "") {
      contentArray[i] = null;
    } else if (contentArray[i] == "" && contentArray[i - 1] == null) {
      contentArray[i] = null;
    }
  }

  const updatedContent = contentArray.filter((val) => {
    return val !== null;
  });

  contentArray = updatedContent;
}

if (options.includes("-n")) {
  for (let i = 0; i < contentArray.length; i++) {
    contentArray[i] = `${i + 1} ${contentArray[i]}`;
  }
}

if (options.includes("-b")) {
  let counter = 1;
  for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] != "") {
      contentArray[i] = `${counter} ${contentArray[i]}`;
      counter += 1;
    }
  }
}

console.log(contentArray.join("\n"));

const fs = require("fs");
const path = require("path");

// ------------ Tree the directory------------
const treeHelper = (directoryPath, indentation) => {
  // check if it is a file or a directory
  const isFile = fs.lstatSync(directoryPath).isFile();
  if (isFile) {
    const fileName = path.basename(directoryPath);
    console.log(indentation, "├──", fileName);
  } else {
    const directoryName = path.basename(directoryPath);
    console.log(indentation, "└──", directoryName);
    const content = fs.readdirSync(directoryPath);
    content.forEach((name) => {
      const nextPath = path.join(directoryPath, name);
      treeHelper(nextPath, indentation + "\t");
    });
  }
};
const tree = (directoryPath) => {
  console.log("Tree command implemented!");
  const isDirectoryPathExist = fs.existsSync(directoryPath);

  if (isDirectoryPathExist) {
    treeHelper(directoryPath, "");
  } else {
    treeHelper(process.cwd(), "");
  }
};

module.exports = tree;

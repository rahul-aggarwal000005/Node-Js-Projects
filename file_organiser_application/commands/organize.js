const fs = require("fs");
const path = require("path");

// ----------- Organizing files ----------------
const types = {
  media: ["mp4", "mkv", "mp3"],
  images: ["jpeg", "jpg", "png", "JPEG", "PNG", "JPG"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

const sendFile = (srcFilePath, dest, category) => {
  const categoryPath = path.join(dest, category);
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath);
  }
  const fileName = path.basename(srcFilePath);
  const destFilePath = path.join(categoryPath, fileName);
  fs.copyFileSync(srcFilePath, destFilePath);
  console.log(fileName, "is copied to", category);
};

const getCategory = (name) => {
  const extension = path.extname(name).slice(1);
  for (const type in types) {
    const arr = types[type];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == extension) return type;
    }
  }
  return "others";
};

const organizeHelper = (directoryPath, organizeFolderPath) => {
  const content = fs.readdirSync(directoryPath);

  content.forEach((name) => {
    const filePath = path.join(directoryPath, name);

    const isFile = fs.lstatSync(filePath).isFile();
    if (isFile) {
      const category = getCategory(name);

      sendFile(filePath, organizeFolderPath, category);
    }
  });
};

const organize = (directoryPath) => {
  const isDirectoryPathExist = fs.existsSync(directoryPath);

  if (isDirectoryPathExist) {
    const organizeFolderPath = path.join(directoryPath, "organize");
    const isOrganizeFolderExist = fs.existsSync(organizeFolderPath);

    if (!isOrganizeFolderExist) {
      fs.mkdirSync(organizeFolderPath);
    }

    organizeHelper(directoryPath, organizeFolderPath);
  } else {
    organize(process.cwd());
  }
};

module.exports = organize;

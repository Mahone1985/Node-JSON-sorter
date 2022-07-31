// Module : Working with file path information
// https://nodejs.dev/learn/nodejs-file-paths

const path = require('path');
const filePath = "C:\\temp\\test.json";

// Load contents of the file
// https://nodejs.dev/learn/reading-files-with-nodejs

const fs = require('fs');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  sorter(data);
});


function sorter(fileContent) {
const itemObj = JSON.parse(fileContent);

itemObj.item.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

fs.writeFile(path.dirname(filePath)+"\\sorted.JSON", JSON.stringify(itemObj), err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log("File Written successfully");
  });

}

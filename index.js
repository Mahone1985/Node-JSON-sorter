// Module : Working with file path information
// https://nodejs.dev/learn/nodejs-file-paths

const path = require('path');
const filePath = "C:\\temp\\test.json";

//console.log(path.dirname(filePath));
//console.log(path.basename(filePath));
//console.log(path.extname(filePath));

// Load contents of the file
// https://nodejs.dev/learn/reading-files-with-nodejs

const fs = require('fs');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log(data);
  sorter(data);
});

const content = "samuelljackson";

fs.writeFile("C:\\temp\\sorted.txt", content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
  console.log("File Written successfully");
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

//console.log(JSON.stringify(itemObj));

}

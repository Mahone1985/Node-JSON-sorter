displayTitle();

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
    console.log("");
    console.log("Reading file: " + path.basename(filePath));
    sorter(data);
});

function sorter(fileContent) {
    const itemObj = JSON.parse(fileContent);


    //---------------------------------------------------------------------------
    /*
    let results = itemObj;

    Object.keys(results).forEach((key) => {
        if (!key.toLocaleLowerCase().includes("item")) {
          delete results[key]
        }
    })
    console.log(results);
    */
    //---------------------------------------------------------------------------


    console.log("---------------------------------------------------------------------------");
    console.log("Starting to sort...");

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

    //EXAMPLE OUTPUTS FOR PATH PACKAGE...
    //-----------------------------------
    //console.log(path.dirname(filePath));
    //console.log(path.basename(filePath));
    //console.log(path.extname(filePath));
    //console.log(path.basename(filePath, '.json'));
    //console.log(path.dirname(filePath) + "\\" + path.basename(filePath, '.json') + "_sorted.json");

    fs.writeFile(path.dirname(filePath) + "\\" + path.basename(filePath, '.json') + "_sorted.json", JSON.stringify(itemObj), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
        console.log("---------------------------------------------------------------------------");
        console.log("File Written successfully");
        console.log("Path: " + path.dirname(filePath) + "\\" + path.basename(filePath, '.json') + "_sorted.json")
    });

}

function displayTitle() {
    console.log(" _____                            _          _____            _            ");
    console.log("|  __ \\                          | |        / ____|          | |           ");
    console.log("| |__) |___  __ _ _   _  ___  ___| |_ ___  | (___   ___  _ __| |_ ___ _ __ ");
    console.log("|  _  // _ \\/ _` | | | |/ _ \\/ __| __/ __|  \\___ \\ / _ \\| '__| __/ _ \\ '__|");
    console.log("| | \\ \\  __/ (_| | |_| |  __/\\__ \\ |_\\__ \\  ____) | (_) | |  | ||  __/ |   ");
    console.log("|_|  \\_\\___|\\__, |\\__,_|\\___||___/\\__|___/ |_____/ \\___/|_|   \\__\\___|_|   ");
    console.log("               | |                                                         ");
    console.log("               |_|                                                         ");
}
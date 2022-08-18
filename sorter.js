displayTitle();

// Module : Working with file path information
// https://nodejs.dev/learn/nodejs-file-paths

const path = require("path");
const filePath = "C:\\temp\\test2.json";

// Load contents of the file
// https://nodejs.dev/learn/reading-files-with-nodejs

const fs = require("fs");

fs.readFile(filePath, "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log("");
	console.log("Reading file: " + path.basename(filePath));

	//let dataStrip = JSON.parse(data.replace(/(?:\t)/g, ""));
	//sorter(dataStrip);

	sorter(JSON.parse(data));
});

//Global variable to dump the sorted object
let sortetObj;

function sorter(data) {
	//Get elements from each array
	let requests = [];
	const getRequestsFromJson = (obj) => {
		if (obj?.item) {
			obj.item.forEach((element) => {
				if (element?.request) {
					requests.push(element.request);
				} else {
					getRequestsFromJson(element);
				}
			});
		}

		//Sort it
		obj.item.sort((a, b) => {
			let fa = a.name.toLowerCase(),
				fb = b.name.toLowerCase();
			if (fa < fb) return -1;
			if (fa > fb) return 1;
			return 0;
		});
		console.log(obj);
		sortetObj = obj;
	};

	let results = getRequestsFromJson(data);

	fs.writeFile(
		path.dirname(filePath) +
			"\\" +
			path.basename(filePath, ".json") +
			"_sorted.json",
		JSON.stringify(sortetObj),
		(err) => {
			if (err) {
				console.error(err);
			}
			console.log(
				"---------------------------------------------------------------------------"
			);
			console.log("File Written successfully");
			console.log(
				"Path: " +
					path.dirname(filePath) +
					"\\" +
					path.basename(filePath, ".json") +
					"_sorted.json"
			);
		}
	);
}

function displayTitle() {
	console.log(
		" _____                            _          _____            _            "
	);
	console.log(
		"|  __ \\                          | |        / ____|          | |           "
	);
	console.log(
		"| |__) |___  __ _ _   _  ___  ___| |_ ___  | (___   ___  _ __| |_ ___ _ __ "
	);
	console.log(
		"|  _  // _ \\/ _` | | | |/ _ \\/ __| __/ __|  \\___ \\ / _ \\| '__| __/ _ \\ '__|"
	);
	console.log(
		"| | \\ \\  __/ (_| | |_| |  __/\\__ \\ |_\\__ \\  ____) | (_) | |  | ||  __/ |   "
	);
	console.log(
		"|_|  \\_\\___|\\__, |\\__,_|\\___||___/\\__|___/ |_____/ \\___/|_|   \\__\\___|_|   "
	);
	console.log(
		"               | |                                                         "
	);
	console.log(
		"               |_|                                                         "
	);
}

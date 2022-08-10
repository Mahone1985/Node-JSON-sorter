let crunk = `{
	"info": {
		"name": "z Example Collection 2"
	},
	"array": [
		{
			"name": "New Folder",
			"array": [
				{
					"name": "Sub Folder",
					"array": [
						{
							"name": "Request example 1"
						},
						{
							"name": "Request example 2"
						}
					]
				},
				{
					"name": "Request example 3"
				},
				{
					"name": "Request example 4"
				}
			]
		}
	]
}`

let crunk2 = JSON.parse(crunk.replace(/(?:\t)/g, ""));

let x, y;

console.log("------------------------------------------------");

for (i = 0; i < crunk2.array[0].array[0].array.length; i++) {
    if (!('array' in crunk2.array[0].array[0].array[i])) {
        console.log(crunk2.array[0].array[0].array[i]);
    } else {
        console.log(crunk2.array[0].array[0].name);
    }
}

for (i = 0; i < crunk2.array[0].array.length; i++) {
    if (!('array' in crunk2.array[0].array[i])) {
        console.log(crunk2.array[0].array[i]);
    } else {
        console.log(crunk2.array[0].name);
    }
}
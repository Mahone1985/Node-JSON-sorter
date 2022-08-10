let crunk = `{
	"info": {
		"name": "z Example Collection 2"
	},
	"item": [
		{
			"name": "New Folder",
			"item": [
				{
					"name": "Sub Folder",
					"item": [
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
//-------------------------------------------------------

//console.log(crunk2.item);
//console.log("------------------------------------------------");
//console.log(crunk2.item[0].item[0].item[0]);
//console.log(crunk2.item[0].item[0].item[1]);
//console.log(crunk2.item[0].item[1]);
//console.log(crunk2.item[0].item[2]);


console.log("------------------------------------------------");

for (i = 0; i < crunk2.item[0].item[0].item.length; i++) {
    console.log(crunk2.item[0].item[0].item[i]);
}

for (i = 0; i < crunk2.item[0].item.length; i++) {
    if (!('item' in crunk2.item[0].item)) {
        console.log(crunk2.item[0].item[i]);
    }
}



/*
for (i = 0; i < Object.keys(crunk2).length; i++) {
    console.log(Object.keys(crunk2.item[i]));
    console.log("-----------------------------------------");

    for (i = 0; i < Object.keys(crunk2).length; i++) {
        console.log(Object.keys(crunk2.item[0].item[i]));
        console.log("-----------------------------------------");
    }
}
*/
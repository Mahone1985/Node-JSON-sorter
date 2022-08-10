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
							"name": "Sub sub folder",
							"item": [
								{
									"name": "Request example 1",
									"request": {
										"method": "POST"
									}
								},
								{
									"name": "Request example 2",
									"request": {
										"method": "POST"
									}
								}
							]
						},
            {
							"name": "Sub sub folder2",
							"item": [
								{
									"name": "Request example 9",
									"request": {
										"method": "POST"
									}
								},
								{
									"name": "Request example 10",
									"request": {
										"method": "POST"
									}
								}
							]
						},
						{
							"name": "Request example 3",
							"request": {
								"method": "POST"
							}
						},
						{
							"name": "Request example 4",
							"request": {
								"method": "POST"
							}
						}
					]
				},
				{
					"name": "Request example 5",
					"request": {
						"method": "POST"
					}
				},
				{
					"name": "Request example 6",
					"request": {
						"method": "POST"
					}
				}
			]
		},
		{
			"name": "New Folder",
			"item": [
				{
					"name": "Request example 7",
					"request": {
						"method": "POST"
					}
				},
				{
					"name": "Request example 8",
					"request": {
						"method": "POST"
					}
				}
			]
		}
	]
}`

let crunk2 = JSON.parse(crunk.replace(/(?:\t)/g, ""));

//console.log(crunk2);

//New Folder
console.log(crunk2.item[0].name);
console.log(crunk2.item[0].item[1].name);
console.log(crunk2.item[0].item[2].name);
//Sub Folder
console.log(crunk2.item[0].item[0].name);
console.log(crunk2.item[0].item[0].item[1].name);
console.log(crunk2.item[0].item[0].item[2].name);
//Sub sub folder
console.log(crunk2.item[0].item[0].item[0].name);
console.log(crunk2.item[0].item[0].item[0].item[0].name);
console.log(crunk2.item[0].item[0].item[0].item[1].name);

//New Folder
console.log(crunk2.item[1].name);
console.log(crunk2.item[1].item[0].name);
console.log(crunk2.item[1].item[1].name);

//console.log(Object.keys(crunk2));
//console.log(Object.keys(crunk2.item[0]));
//console.log(Object.keys(crunk2.item[0].item[0]));
//console.log(Object.keys(crunk2.item[0].item[0].item[0]));
//console.log(Object.keys(crunk2.item[0].item[0].item[0].item[0]));


let x, y;
//-------------------------------------------------------
console.log("Level 1");
x = Object.keys(crunk2)
console.log(x);
y = x.length
console.log(y);

//for (i = 0; i < x.length; i++) {
//    console.log(Object.keys(crunk2.item[0].item[0].item[i]));
//}

console.log("-----------------------------------------");
//-------------------------------------------------------
console.log("Level 2");
x = Object.keys(crunk2.item)
console.log(x);
y = x.length
console.log(y);
x = Object.keys(crunk2.item[0])
console.log(x);

for (i = 0; i < x.length; i++) {
    console.log(Object.keys(crunk2.item[i]));
}

console.log("-----------------------------------------");
//-------------------------------------------------------
console.log("Level 3");
x = Object.keys(crunk2.item[0].item)
console.log(x);
y = x.length
console.log(y);
x = Object.keys(crunk2.item[0].item[0])
console.log(x);

for (i = 0; i < x.length; i++) {
    console.log(Object.keys(crunk2.item[0].item[i]));
}

console.log("-----------------------------------------");
//-------------------------------------------------------
console.log("Level 4");
x = Object.keys(crunk2.item[0].item[0].item)
console.log(x);
y = x.length
console.log(y);

for (i = 0; i < x.length; i++) {
    console.log(Object.keys(crunk2.item[0].item[0].item[i]));
}

console.log("-----------------------------------------");
//-------------------------------------------------------
console.log("Level 5");
x = Object.keys(crunk2.item[0].item[0].item[0].item)
console.log(x);
y = x.length
console.log(y);
x = Object.keys(crunk2.item[0].item[0].item[0].item[0])
console.log(x);

for (i = 0; i < x.length; i++) {
    console.log(Object.keys(crunk2.item[0].item[0].item[0].item[i]));
}

console.log("-----------------------------------------");
//-------------------------------------------------------
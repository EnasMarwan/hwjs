var arrayy = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":{"batter":[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
];
//All topping types
console.log("All topping types:");
var arr= new Array();
var i;
function toop(){
    for(i=0;i<arrayy.length;i++){
        for(k=0;k<arrayy[i].topping.length;k++){
        arr.push(arrayy[i].topping[k].type);
        }   
    }
    return arr;
};
toop();
console.log(arr);

//All batter types
console.log("All batter types:");
var arr1= new Array();
function batt(){
for(i=0;i<arrayy.length;i++){
           for(k=0;k<arrayy[i].batters.batter.length;k++){
             arr1.push(arrayy[i].batters.batter[k].type);
        }   
    }
    return arr1;
};
var result=batt();
console.log(arr1);

//Ppu sum 
console.log("Ppu sum:");
var sum=0;
function summ(){
	for(i=0;i<arrayy.length;i++){
sum+=arrayy[i].ppu; 
	}
	return sum;
};
summ();
console.log(sum);

//Ppu average
console.log("Ppu average:");
var ave;
function average(){
ave=sum/3;
return ave;
};
average();
console.log(ave);

//List of all mentioned IDs regardless to the type
console.log("List of all mentioned IDs regardless to the type:");
var arr2=new Array();
function listID(){
	for(i=0;i<arrayy.length;i++){
		if(arrayy[i]!=arrayy[i].topping||arrayy[i].batters){
			arr2.push(arrayy[i].id);
		}
		for(k=0;k<arrayy[i].topping.length;k++){
			arr2.push(arrayy[i].topping[k].id);
		}
		for(k=0;k<arrayy[i].batters.batter.length;k++){
			arr2.push(arrayy[i].batters.batter[k].id);
	   }   
	}
	return arr2;
};
listID();
console.log(arr2);

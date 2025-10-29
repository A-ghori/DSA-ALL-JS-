const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

let q = parseInt(input[0]);
let line = 1;

for(let i=0; i<q; i++){
	let n = parseInt(input[line++]);
	let[s,t] = input[line++].split(" ");

	// Sorted both string 
	let sortedS = s.split("").sort().join('');
	let sortedT = t.split("").sort().join('');
	if(sortedS === sortedT){
		console.log("YES");
	}else{
		console.log("NO")
	}
}
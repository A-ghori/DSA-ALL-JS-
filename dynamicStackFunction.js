const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let stack = [];

function menu(){
console.log("\n1. Enter a Number");
console.log("2. Insert at Postion");
console.log("3. Delete at Position");
console.log("4. Display The Stack Elements");
console.log("5. Exit");

rl.question("Choose A Option: ", (choice) => {
switch(choice) {

case "1": 
rl.question("Enter a number: ", (num) => {
stack.push(Number(num));
menu();
});
break;

case "2":
rl.question("Insert at Position:", (pos) => {
rl.question("Insert a Number, on which position you want to Insert:", (num) => {
stack.splice(Number(pos), 0 , Number(num));
menu();
});
break;

case "3":
rl.question("Delete at Position: ", (pos)=> {
const index = stack.indexOf(Number(num));
if(index !== -1){
console.log("The Stack Element is Exist",index);
stack.splice(index , 1);
}
else{
console.log(index)
}
menu();
});
break;

case "4":
console.log("Wanna Watch the Whole Fucking Stack", stack)
menu();
break;

case "5":
rl.close();
break;


default: 
console.log("Invalid Choice");
break;

}
});
};
menu();

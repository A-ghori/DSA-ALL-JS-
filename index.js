// DRILLS AND DSA

// Define class 
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }
//     bokachoda(){
//         console.log(`HEllo my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// const name = prompt ("Enter your name:");
// const age = prompt ("Enter your age:");

// const person1 = new Person(name, age);
// person1.bokachoda();

//QUEUE SYSTEM

// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//         console.log(`${element} added to the queue`);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return;
//         }
//         const removedElement = this.items.shift();
//         console.log(`${removedElement} removed from the queue`);
//     }

   
//     Update(oldValue, newValue) {
//         const index = this.items.indexOf(oldValue);
//         if (index !== -1) {
//             this.items[index] = newValue;
//             console.log(`${oldValue} updated to ${newValue}`);
//         } else {
//             console.log(`${oldValue} not found in the queue`);
//         }
//     }
// }

// emptyQueue = () => {
//     return this.items.length === 0;
// }

// const queue = new Queue();

// menu = () => {
//     const choise = prompt("Enter your choice:\n1. Enqueue\n2. Dequeue\n3. Update\n4. Exit");
//     switch (choise) {
//         case '1':
//             const element = prompt("Enter the element to enqueue:");
//             queue.enqueue(element);
//             break;
//         case '2':
//             queue.dequeue();
//             break;
//         case '3':
//             const oldValue = prompt("Enter the value to update:");
//             const newValue = prompt("Enter the new value:");
//             queue.Update(oldValue, newValue);
//             break;
//         case '4':
//             console.log("Exiting...");
//             return;
//         default:
//             console.log("Invalid choice. Please try again.");
//     }
//     menu ();
// }
// menu();



// class Stack {
// construct (){
//     this.items = [];
// }
// isempty(){
//     return this.items.length === 0;
// }
// push (element){
//     this.items.push(element);
// }
// pop(){
//     return this.items.pop();
// }
// }

// const mystack = new Stack();
// console.log(mystack.isempty());
// mystack.push(10);
// console.log(mystack.isempty());

// const person = { firstName:"John",lastName:"Doe",age:50}
// console.log(person.
//     firstName,
//     lastName,
//     age
// );


// let car = {type:"Fiat", model:"500", color:"white"};
// console.log(car.type);
// console.log(car["model"]);


// let text = "ABCHYGAQYBFDJKYEUIHOBDIOJHFIODHBD";
// let length = text.length;
// console.log(length);

// let text = "Hello World";
// let char = text.charAt(5);
// console.log(char);

// let text = "HElloWorld";
// let slo = text.slice(4);
// console.log(slo);

// let text = "Hello World";
// let Up = text.indexOf("W");
// console.log(Up); // This will return -1 because indexOf is case-sensitive and "W" is not found in "Hello World"`

// let Up1 = text.toUpperCase();
// console.log(Up1); // This will convert the entire string to uppercase: "HELLO WORLD"

// let text2 = "Hello 2";
// let R = text2[4]
// console.log(R); 

// let ren = Math.round(4.6);
// console.log(ren);


// let ren2= Math.E; // EULER FORMULA
// console.log(ren2);

// let ren3 = Math.PI; //PI VALUE 22/7
// console.log(ren3);

// let ren4= Math.random(); // RANDOM NUMBER
// console.log(ren4); // This will generate a random number between 0 (inclusive) and 1 (exclusive)

// let a = prompt("Enter a number to find its square root:");
// let ren5 = Math.sqrt(a); // returns the square root of 2

// console.log(`Square root of ${a} is ${ren5} and square root 1/2 is ${Math.SQRT1_2} and square root is ${Math.SQRT2}`); //Math.SQRT1_2  // returns the square root of 1/2


// let ren6 = Math.abs(-5); //5

// console.log(ren6)


// let ren7 = prompt("Enter your value to see Logarithm");
// console.log(`Logarithm of input value is ${Math.log(ren7)}`);

// let ren8 = prompt("Enter your value to see Logarithm base 10");
// console.log(`Logarithm base 10 of input value is ${Math.LOG10E}`);

// let ren9 = prompt("Enter your Name to make it reverse ");
// console.log(`Your name in reverse is ${ren9.split("").reverse().join("")}`);


// const reverseString = (str) => {
// 	let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--){
//         reversed = reversed + str[i];
//     }
//     return reversed;
// }

// reversedRecursive = (str) => {
//     if(str.length <= 1)
//         return str;
//     return str[str.length - 1] + reversedRecursive(str.slice(0, str.length - 1));
// } 
// console.log(reverseRecursive("Shubhayu"));
// console.log(reverseString("Shubhayu"));


// //FIZZ BUZZ
// for (let i = 0; i <= 100; i++){
//     if(i%3==0 && i%5==0){ //3->Fizz 5->Buzz 0->FizzBuzz 6->Fizz 10->Buzz 
//         console.log("FizzBuzz")
//     }else if(i%3==0){
//         console.log("Fizz")
//     }else if(i%5==0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// // Count Even and odd numbers in an array
// // let nums = prompt("Enter numbers []");
// // let arr = nums.split(",").map(Number);
// // for(let i = 0;i<nums.length;i++){
// //     if(nums[i]%2===0){
// //         console.log("The number is Even ");
// //     }
// //     else 
// //     {
// //         console.log("The number is odd");
// //     }
// // }



// // Output:
// // Even: 4
// // Odd: 3


// let nums1 = "1,2,3,4,5";
// let arr1 = nums1.split(",");

// console.log(arr1); // ["1", "2", "3", "4", "5"]

// let arr = ["1", "2", "3", "4"];
// let nums = arr.map(Number);

// console.log(nums); // [1, 2, 3, 4]

//FIZZ BUZZ
for (let i = 0; i <= 100; i++){
    if(i%3==0 && i%5==0){ //3->Fizz 5->Buzz 0->FizzBuzz 6->Fizz 10->Buzz 
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

// Count Even and odd numbers in an array
// let nums = prompt("Enter numbers []");
// let arr = nums.split(",").map(Number);
// for(let i = 0;i<nums.length;i++){
//     if(nums[i]%2===0){
//         console.log("The number is Even ");
//     }
//     else 
//     {
//         console.log("The number is odd");
//     }
// }



// Output:
// Even: 4
// Odd: 3


let nums1 = "1,2,3,4,5";
let arr1 = nums1.split(",");

console.log(arr1); // ["1", "2", "3", "4", "5"]

let arr = ["1", "2", "3", "4"];
let nums = arr.map(Number);

console.log(nums); // [1, 2, 3, 4]


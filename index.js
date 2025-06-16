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



class Stack {
construct (){
    this.items = [];
}
isempty(){
    return this.items.length === 0;
}
push (element){
    this.items.push(element);
}
pop(){
    return this.items.pop();
}
}

const mystack = new Stack();
console.log(mystack.isempty());
mystack.push(10);
console.log(mystack.isempty());
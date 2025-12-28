const readline = require("readline")

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

// Now Create the first node of the linked list
class Node{
constructor (data){
this.data = data;
this.next = null;
}
}

// Creating a linked list 
class linkedList{
constructor(){
this.head = null;


// Add first Data 
addFirst(data){
const newNode = new Node(data);
newNode.next = this.head;
this.head = newNode;
}

// Add Last Data
addLast(data){
const newNode = new Node(data);

if(!this.head){
this.head = newNode;
return
}
// I am gonna Traverse the list and just assign newNode as current and then i just find out the null it means if we get the null value so the loop will be
// break and thats the moto so we just traverse the current next 
let current = this.head;


// The loop is doing the current's next just assign the current and when the current is jsut encounter with null then the loop will be stop and thus i 
// write the line current.next = newNode just assign the newNode value at last and the next value become null  
while(current.next){
current = current.next;
}
current.next = newNode;
}



// Fixing the Size of the Linked List 
size(){
let current = this.head ;
let count = 0;
while(current){
count++
current = current.next;
}
return count;
}

// ADD  DATA  AT INDEX 

addAt(index, data){
if(index < 0 || index > this.size()){
console.error("The Index didnot find");
return ;
}

// Once Again checking the same shit that is the Linked List is Empty 
const newNode = new Node(data);
if(index === 0) {
newNode.next = this.head;
this.head = newNode;
return
}
// Insert at mid 
let current = this.head;
// Traverse every Vertex
for(let i=0; i<index - 1; i++){
// Current Index found 
current = current.next;
}
//Then just add the newNode 
newNode.next = current.next;

// Visualize the Fucking Image    1 -> 2 -> 3 i just want to insert 4 at 1st Index  so we need to just point first the 2->3 also 4->3 then the next line 
// Code say that  2->4 then 4->3 
current.next = newNode;
}
return 
}

// Remove at Top 
RemoveTop(){
if(!this.head){
return
}
this.head = this.head.next ;
}

// Remove at last
RemoveLast(){
if(!this.head){
return 
}
let current = this.head;
// Traverse the linked List 
while(current.next.next){
current = current.next;
}
current.next = null;
}

// Remove element from INDEX

RemoveIndex(index,data){
if(index < 0 || index > this.size()){
console.log("invalid to remove")
}

// Check the head is available or not
if(index ===0){
this.head = this.head.next;
}

let current = this.head;
for(let i=0; i<index - 1; i++){
 current = current.next;
}

if(current.next){
current.next = current.next.next;
}
}

print(){
let current = this.head;
while(current){
console.log("current.data);
current = current.next;
}
}
}

const list  = new linkedList()


function menu(){
console.log(`
1. Insert Numbers
2. Insert Numbers at Last
3. Insert Numbers at Index
4. Delete Data from First 
5. Delete Data from Last
6. Delete Data from Index 
7. Print
8. Exit
`);

rl.question("choose", (ch) => {
switch(ch) {

case "1":
rl.question("Enter a Number", num => {
list.addFirst(Number(num));
menu()
});
break;

case "2":
rl.question("Enter a Number at Last Position",num => {
list.addLast(Number(num));
menu();
});
break;

case "3":
rl.question("Enter a Number in Index", num=> {
rl.question("Enter a Postion for Inserting the Number", pos => {
list.addAt.splice(Number(pos),0,Number(num));
menu();
});
});
break;

case "4":
list.RemoveTop();
menu();
break;

case "5":
list.RemoveLast();
menu();
break;

case "6":

rl.question("Enter Postion to Delete", pos=> {
rl.question("Enter Number to Delete, num=> {
list.RemoveIndex.splice(Number(pos),1,Number(num));
menu();
});
});
break;

case "7":
list.print();
menu();
break;

case "8":
rl.close();
menu();
break;

default:
console.log("Invalid Operation");
menu();
}
});
}
menu();



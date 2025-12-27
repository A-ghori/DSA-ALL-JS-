class Stack{
constructor(){
this.stack = [];
}
//push items
push(item){
 this.stack.push(item)
}
// Pop 
pop(){
if(this.stack.length === 0){
return "The Stack is Already Empty"
}
return this.stack.pop()

}
//Peek 
peek(){
return (this.stack.length - 1)
}
isEmpty(){
return (this.stack.length === 0)}
print() {
console.log(this.stack)
}
}
// Object Creation
const s = new Stack();

// Operations
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.print();
//console.log(s.push());
console.log(s.pop());
console.log(s.pop());
console.log(s.peek());

// For stack it always follows LiFo process 


class Stack{
constructor() {
this.stack = [];
}
push(item){
this.stack.push(item);
}

pop(){
if(this.stack.length === 0){
return "Stack is empty";
}
return this.stack.pop();
}
peek(){
return this.stack[this.stack.length - 1];
}
isEmpty(){
return this.stack.length === 0;
}
print(){
console.log(this.stack);
}
}

// Object Create 
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);

s.print();
console.log(s.pop());
s.print();
console.log(s.peek());




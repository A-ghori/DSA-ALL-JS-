
// Node Class
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

//Linked List Class
class LinkedList{
	constructor() {
		this.head = null ;
	}


//Insert at the end 
append (value){
	const newNode = new Node (value);
	if(this.head === null) {
       this.head = newNode;
       return 
	}
	// Set as current for 10 -> 20 -> 30

	let current = this.head;
	while(current.next){
		current = current.next;

	}
	current.next = newNode
}

// Insert at begining
prepend(value){
	const newNode = new Node(value);
	newNode.next = this.head;
	this.head = newNode;
}

// Insert element after specific value 

insertAfter(target,value){
	let current = this.head;

	while(current && current.value !== target){
		current = current.next
	}
	if(!current){
		console.log("Target not found");
		return
	}
	const newNode = new Node(value)
newNode.next = current.next;
		current.next = newNode
}


// Print the linked list
		// Print the linked list
	printList() {
		let current = this.head;
		let result = "";
		while (current) {
			result += current.value + " -> ";
			current = current.next;
		}
		result += "null";
		console.log(result);
	}
}

// Test
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.insertAfter(20, 25);
list.printList();
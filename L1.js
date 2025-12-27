class Node{
	constructor(value){
		this.value = value;
		this.next = null
	}
}

class LinkedList{
	constructor(){
		this.head = null
	}

//append the values

	append(value){
		const newNode = new Node(value);
        if(this.head===null){
        	this.head = newNode;
        	return 
        }
        // set as current newNode

        let current = this.head;
        while(current.next){
        	current = current.next
        }
        current = newNode
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
   		console.log("target not found");
        return
}
const newNode = new Node(value);
newNode.next = current.next;
current.next = newNode;
   }
// Delete a node by value
   delete(value){
if(!this.head) return
   // If head node is to be deleted
	if(this.head.value === value){
		this.head = this.head.next;
		return
	}
	let current = this.head;
	while(current.next && current.next.value !== value){
		current = current.next;
	}
	if(current.next){
		current.next = current.next.next;
	}else{
		console.log("Value not found")
	}

   }
}
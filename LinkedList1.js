class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){          // ✅ spelling fixed
        this.head = null;
    }

    // Add At Top
    AtTop(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add At Last
    AtLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
    }

    // Size of list
    size(){
        let count = 0;
        let curr = this.head;
        while(curr){          // ✅ curr (not curr.next)
            count++;
            curr = curr.next;
        }
        return count;
    }

    // Add At Index
    AtIndex(index, data){
        if(index < 0 || index > this.size()){
            console.error("Invalid Index");
            return;
        }

        const newNode = new Node(data);

        if(index === 0){      // ✅ index 0 case
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let curr = this.head;
        for(let i = 0; i < index - 1; i++){
            curr = curr.next;
        }

        newNode.next = curr.next;
        curr.next = newNode;
    }

    // Remove At Top
    AtTopRemove(){
        if(!this.head) return;
        this.head = this.head.next;
    }

    // Remove At Last
    AtLastRemove(){
        if(!this.head) return;

        if(!this.head.next){   // ✅ single node case
            this.head = null;
            return;
        }

        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
    }

    // Remove At Index
    AtIndexRemove(index){
        if(!this.head || index < 0 || index >= this.size()){
            return;
        }

        if(index === 0){       // ✅ index 0 case
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        for(let i = 0; i < index - 1; i++){
            curr = curr.next;
        }

        if(curr.next){
            curr.next = curr.next.next;
        }
    }

    print(){
    let curr = this.head;
    let result = "";
    while(curr){
        result += curr.data + " -> ";
        curr = curr.next;
    }
    result += "null";
    console.log(result);
}

}
const list = new LinkedList();

list.AtTop(10);
list.AtTop(5);
list.AtLast(20);
list.AtIndex(1, 7);

list.print();
// list.AtTop(10);
// list.AtTop(5);
// list.AtLast(20);
// list.size()
// list.AtIndex(1, 7);
// list.AtLastRemove();
console.log(list.size());

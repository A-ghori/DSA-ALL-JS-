const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add at beginning
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Add at end
  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Size of LinkedList
  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Add at specific index
  addIndex(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("❌ Invalid Index");
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Print Linked List
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// 🔹 Test
const list = new LinkedList();
list.addFirst(10);
list.addLast(20);
list.addLast(30);
list.addIndex(1, 15);
list.print(); // 10 -> 15 -> 20 -> 30 -> null


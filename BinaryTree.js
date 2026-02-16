class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.idx = -1;
  }

  // Make the recursive buildTree function
  buildgraph(preorder) {
    this.idx++;

    // Base Condition
    if (preorder[this.idx] === -1) return null; 

    const root = new Node(preorder[this.idx]);
    root.left = this.buildgraph(preorder);   // Left
    root.right = this.buildgraph(preorder);  // Right

return root;
    }
}
let preorder = [1, 2, 3, -1, -1, 4, -1, -1, 5, 6, -1, -1, 7, 8, -1, -1, 9, -1, -1];

let bt = new BinaryTree();
let root = bt.buildgraph(preorder);

console.log(root);

 	 

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.index = -1; // constructor mein index parameter ki zaroorat nahi thi
  }

  BT(preorder) {
    this.index++;
    
    // Base case: agar array khatam ho jaye ya -1 mile
    if (preorder[this.index] === -1) {
      return null;
    }

    const root = new Node(preorder[this.index]);
    root.left = this.BT(preorder);  // Sahi: Poora array pass karein
    root.right = this.BT(preorder); // Sahi: Poora array pass karein
    return root;
  }

  isIdentical(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    if (root1.val !== root2.val) return false; // Fixed typo: flase -> false

    // Sahi comparison: root1.left vs root2.left aur root1.right vs root2.right
    return (
      this.isIdentical(root1.left, root2.left) &&
      this.isIdentical(root1.right, root2.right) 
    );
  }
}

// --- Testing ---
let preorder1 = [1, 2, -1, -1, 3, -1, -1];
let preorder2 = [1, 2, -1, -1, 3, -1, -1];
let preorder3 = [1, 2, -1, -1, 4, -1, -1];

let bt1 = new BinaryTree();
let root1 = bt1.BT(preorder1);

let bt2 = new BinaryTree();
let root2 = bt2.BT(preorder2);

let bt3 = new BinaryTree();
let root3 = bt3.BT(preorder3);

const checker = new BinaryTree();
console.log("Tree 1 vs Tree 2:", checker.isIdentical(root1, root2)); // Output: true
console.log("Tree 1 vs Tree 3:", checker.isIdentical(root1, root3)); // Output: false

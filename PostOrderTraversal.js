class Node{
constructor(data){
this.data = data;
this.left = null;
this.right = null;
}
}

class BinaryTree {
constructor(){
this.index = -1;
}

buildTree(postorder){

this.index++
if(postorder[this.index] === -1) return null;
// First Root 
const root =new Node(postorder[this.index]);
// Left subtree 
root.left = this.buildTree(postorder);
root.right = this.buildTree(postorder);
return root 
}
// Pre Order 
preOrderTraversal(root){

// root print -> left -> right
if(root === null) return
console.log(root.data);
this.preOrderTraversal(root.left);
this.preOrderTraversal(root.right)
}

// In-Order 
// left -> print root -> right
inOrderTraversal(root) {

if(root === null) return
this.inOrderTraversal(root.left)
console.log(root.data);
this.inOrderTraversal(root.right);
}

// Post-Order
postOrderTraversal(root){
if(root === null) return
// left -> right -> print
this.postOrderTraversal(root.left);
this.postOrderTraversal(root.right);
console.log(root.data);
}
}


// Data Setup
let postorderArr = [-1, -1, 2, -1, -1, 4, -1, -1, 5, 3, 1];
postorderArr.reverse(); // Now the array is [1, 3, 5, -1, -1, 4, -1, -1, 2, -1, -1]

let bt = new BinaryTree();
let root = bt.buildTree(postorderArr);

console.log("--- Preorder ---");
bt.preOrderTraversal(root);

console.log("--- Inorder ---");
bt.inOrderTraversal(root);

console.log("--- Postorder ---");
bt.postOrderTraversal(root);

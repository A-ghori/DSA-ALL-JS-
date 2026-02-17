// First we have to create a Binary Tree 
class Node {
constructor(data){
this.data = data;
this.left = null;
this.right = null;
}
}

// Create a class For Binary Tree
class BinaryTree {
constructor() {
this.index = -1;
}
buildtree(preorder){
this.index++;
if(preorder[this.index] === -1) return null;

const root = new Node(preorder[this.index]);
// Left subtree
root.left =  this.buildtree(preorder);
//Right Subtree
root.right = this.buildtree(preorder);
return root;
}


// Pre Order Traversal
// Print the root 
// Check the null values left and right each root node 
// Then Traverse the left then right node recursively

PreorderTraversal(root){
if(root === null) return;

console.log(root.data)
// Traverse the left subtree and print the root value 
this.PreorderTraversal(root.left);
//Same for right
this.PreorderTraversal(root.right)
}
}
let preorder = [1,2,-1,-1,3,4,-1,-1,5,-1,-1];
let bt = new BinaryTree();
let root = bt.buildtree(preorder);

console.log(root);
bt.PreorderTraversal(root);

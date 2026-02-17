// First make the tree 
class Node{
constructor(data){
this.data = data;
this.left = null;
this.right = null;
}
}

// Make the Binary tree
class BinaryTree {
constructor(){
this.index = -1;
}

buildtree(inorder){

this.index++;
if(inorder[this.index] === -1) return null;

// assign the index with root
const root = new Node(inorder[this.index]);

// Make the left subtree 
root.left = this.buildtree(inorder);
root.right = this.buildtree(inorder);
return root
}


// PreOrder Traversal
// Root left right
PreorderTraversal(root){
if(root === null) return;
// print root
console.log(root.data);
this.PreorderTraversal(root.left);
this.PreorderTraversal(root.right);

}

//Inorder Traversal 
// First Left then print the root then right traversal 

inorderTraversal(root){

if(root === null) return;
this.inorderTraversal(root.left);
console.log(root.data);
this.inorderTraversal(root.right);
}
}


let preorder = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];

let bt = new BinaryTree();
let root = bt.buildtree(preorder);

console.log("Tree:", root);
console.log("Inorder Traversal:");
bt.inorderTraversal(root);
console.log("Pre-Order Traversal:");
bt.PreorderTraversal(root);

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
// left -> print -> right
inOrderTraversal(root) {

if(root === null) return
this.postOrderTraversal(root.left)
console.log(root.data);
this.postOrderTraversal(root.right);
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


// IMPORTANT: Postorder array ko reverse karna padega build ke liye
let postorder = [ -1, -1, 2, -1, -1, 4, -1, -1, 5, 3, 1 ];
postorder.reverse(); //  very important

let bt = new BinaryTree();
let root = bt.buildTree(postorder);

console.log("Preorder:");
bt.preOrderTraversal(root);

console.log("Inorder:");
bt.inOrderTraversal(root);

console.log("Postorder:");
bt.postOrderTraversal(root);

// FIrst Make the tree 
class Node{
constructor(data){
this.data = data;
this.left = null;
this.right = null;
}
}

class BinaryTree{
constructor(){
this.index = -1;
}
BuildTree(preorder){
// first create the root
if(preorder[this.index] === -1) return null
this.index++;
const root = new Node(preorder[this.index]);
// Left subtree
root.left = this.buildTree(preorder);
// right sub
root.right = this.builTree(preorder);
return root;
}


// Preorder Traversal 
// First Root print
preorderTraversal(root){
if(root === null) return 
console.log(root.data)
// Left Subtree traversal and backtrack 
this.preorderTraversal(root.left);
// Right Traver
this.preorderTraversal(root.right);
}
}

let preorder = [1,2,-1,-1,3,4,-1,-1,5,-1,-1];
let bt = new BinaryTree();
let root = bt.buildTree(preorder);
console.log(root);

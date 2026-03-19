class Tree{
constructor(data){
this.data = data
this.left = null;
this.right = null;
}
}

// Creating a class of Binary Tree 
class BinaryTree{
constructor(){
// initialize the array with -1
this.index = -1;
}
BT(preorder){
// so index increase 
this.index++;

// Base Case 
if(preorder[this.index] === -1) return null

// Making root 
const root = new Tree(preorder[this.idex]);

root.left = this.BT(preorder);
root.right = this.BT(preorder);
return root
}
}

let preorder = [1, 2, 3, -1, -1, 4, -1, -1, 5, 6, -1, -1, 7, 8, -1, -1, 9, -1, -1]
let bt = new BinaryTree();
let root = bt.BT(preorder);
console.log("Index is ",bt.index)
console.log("Left Subchild Numbers",root.left)
console.log("Right Subchild Numbers",root.right)
console.log("\n Final Root data:",root)

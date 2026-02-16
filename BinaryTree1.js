class Node {const root = new Node(preorder[this.idx]);


constructor(data){
this.data = data;
this.left = null;
this.right = null;
}
}

class BinaryTree {
constructor(){
this.idx = -1;
}

buildtree(preorder){
this.idx++;
// Safety Check if we get -1 then return it null and connect with existing node imediately
if(preorder[this.idx] === -1) return null;

// Creating root for first hitting the index 
const root = new Node(preorder[this.idx]);

root.left = this.buildtree(preorder);
root.right = this.buildtree(preorder);

return root;

}
}


let preorder = [1, 2, 3, -1, -1, 4, -1, -1, 5, 6, -1, -1, 7, 8, -1, -1, 9, -1, -1]
let bt = new BinaryTree();
let root = bt.buildtree(preorder);
console.log("Index is ",bt.idx)
console.log("Left Subchild Numbers",root.left)
console.log("Right Subchild Numbers",root.right)
console.log("\n Final Root data:",root)

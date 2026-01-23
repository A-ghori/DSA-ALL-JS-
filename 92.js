//Given the head of a singly linked list and two integers left and right where
// left <= right, reverse the nodes of the list from position left to 
//position right, and return the reversed list.

//Input: head = [1,2,3,4,5], left = 2, right = 4
//Output: [1,4,3,2,5]

const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});


var reverseBetween = function(head, left, right) {
   let start = 0;
let end = head.length - 1;
let mid = ((start + end) / 2);
let curr = head;
//let prev = null;
let next = null;
while(curr.next !== mid){
cur++;
}
if(curr[left] <= curr[right]){
 [curr[left] ,curr[ right]] = [curr[right], curr[left]]
}
return curr 
};

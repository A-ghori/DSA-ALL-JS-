let nums1 = "2"
let nums2 = "3"

let n1 = nums1.length;
let n2 = nums2.length;


//const res = Array.from({length : n1 + n2} , (v,i) => i++);
const res = new Array(n1+n2).fill(0);
console.log(res)

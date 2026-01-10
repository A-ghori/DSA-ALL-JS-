//[100,200,300,400]

// To find the max size of subarray of the given array we first do the brute force 
// Then add each element one by one 

let arr = [100,200,300,400];
let k = 2;
let n = arr.length;
let maxSum = -Infinity;
for(let i=0; i<n-k+1 ; i++){
let sum = 0;
for(let j=i; j<i+k; j++){
sum += arr[j];
//console.log("Sum is",sum);
maxSum = Math.max(maxSum , sum)
//console.log("MaxSum is", maxSum);
}
console.log("Highest Sum is", maxSum);
}


// 100 + 200 = 300
// 200 + 300 = 500
//300 + 400 = 700 -> max




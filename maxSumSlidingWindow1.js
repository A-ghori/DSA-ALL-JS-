let arr = [100,200,300,400,500,0,50,1000,900}
let k = 3;
let n = arr.length;
let sum = 0;
let maxSum = 0;

// First window sum 
for(let i=0; i<k; i++){
	sum += arr[i];
}
maxSum = sum;

for(let i=k; i<n; i++){

	sum = sum - arr[i-k] + arr[i];
maxSum = Math.max[maxSum , sum];

}
console.log("MaxSum is", maxSum);




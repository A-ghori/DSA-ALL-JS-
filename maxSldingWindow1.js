let arr = [100,200,300,400,500,0,50,1000,900];
let k = 3;
let n = arr.length;

//  First window ka sum nikaal
let sum = 0;
for (let i = 0; i < k; i++) {
    sum += arr[i];
}

let maxSum = sum;

//  Slide the window
for (let i = k; i < n; i++) {
    sum = sum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, sum);
}

console.log("Max sum =", maxSum);


//Input: arr[] = [12, 35, 1, 10, 34, 1]
//Output: 34
//Explanation: The largest element of the array is 35 and the second largest element is 34.
let arr = [
  12, 45, 3, 99, 23, 67, 89, 1, 150, 34,
  76, 150, 2, 9, 88, 54, 200, 199, 5, 77,
  43, 111, 65, 178, 4, 90, 33, 156, 187, 10,
  145, 132, 17, 8, 60, 170, 190, 6, 14, 101
];

arr = arr.sort((a,b)=> a-b);
console.log(arr);
let largest = arr[arr.length - 1];
for(i=arr.length-2; i>=0; i--){
if(arr[i]<largest){
console.log(arr[i])
}
}
console.log(arr[i]);


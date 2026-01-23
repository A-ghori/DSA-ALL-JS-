//let a = [1,2,3,4,5]
//console.log(a)
//// Making Subarrays 
//for(let i=0; i<a.length; i++){
//    for(let j=i; j<a.length; j++){
//        
//console.log("SUbarray is ", a[j])
        // Making Print stament I assume a var name is k whatever k is just point out it just print 
       // for(let k=i; k<=j; k++){
         //   console.log("Sub Array is",a[k]);
        //}
  //  }
//}


//Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. 
// You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.

//Note: If no such array is possible then, return [-1].

//Examples:

//Input: arr[] = [1, 2, 3, 7, 5], target = 12
//Output: [2, 4]
//Explanation: The sum of elements from 2nd to 4th position is 12.






//       // code here
let arr = [1,2,3,7,5];
let target = 12;

for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        sum = 0;
        for(let k=i; k<=j; k++){
            sum += arr[k];
            }    
        if(sum === target){
console.log([i+1 , j+1]);
return;
        }

    }
    }
    console.log(-1)

        
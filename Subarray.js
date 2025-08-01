var n = 5;
var array = [1,2,3,4,5]
for(let start = 0 ; start<n; start++){
    for(let end = start; end<n ; end++){
        let subarray = " ";
        for(let i = start ; i <= end; i++){
      subarray = subarray + array[i] ; 
    //   array[i] -> 15
                //   1
// Subarray.js:9  12
// Subarray.js:9  123
// Subarray.js:9  1234
// Subarray.js:9  12345
// Subarray.js:9  2
// Subarray.js:9  23
// Subarray.js:9  234
// Subarray.js:9  2345
// Subarray.js:9  3
// Subarray.js:9  34
// Subarray.js:9  345
// Subarray.js:9  4
// Subarray.js:9  45
// Subarray.js:9  5
        }
        console.log(subarray);
    }

}
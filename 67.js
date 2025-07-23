/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length -1;
    let j = b.length -1;
let carry = 0;
let result = [];

while( i>=0 || j>=0 || carry>0){
    let bitA = i >=0 ? Number(a[i]) : 0;
    let bitB = j >=0 ? Number(b[j]) : 0;
    
    let sum = bitA + bitB + carry;
    result.push(sum%2)
    carry = Math.floor(sum/2)
    i--;
    j--;
}

return result.reverse().join('')
};


// Test cases
console.log(addBinary("11", "1"));     // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
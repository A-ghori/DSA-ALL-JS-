// let str = "aab";
// let result = [];
// // let sub = str.substring(0, 4);
// // console.log(sub);
// // if i want to check palindrome substring then ??
// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j <= str.length; j++) {
//     str.split("");
//     if (str[i] === str[j]) {
//       result.push(str.substring(i, j));
//     }
//     // console.log(str.substring(i, j));
//   }
//   console.log(result);
// }
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
let str = "aab";
let result = [];

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    let sub = str.substring(i, j); // substring banaya
    if (isPalindrome(sub)) {
      // palindrome check
      result.push(sub);
    }
  }
}

console.log(result);

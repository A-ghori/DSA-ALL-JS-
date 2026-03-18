//s = "abba"
//output = "aa" "bb"


function subsetPalindrome(s) {
let left = 0;
let right = s.length - 1;
let subset = []
while(left < right ){
if(s[left] !== s[right]){
return false;
}
subset.push(s[left]+ s[right]);
left++;
right--
}
return subset;
}

console.log(subsetPalindrome("aba")); 
// Output: ["aa", "bb"]

//console.log(getPalindromePairs("racecar"));

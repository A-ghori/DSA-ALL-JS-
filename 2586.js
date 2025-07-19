



/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0;
    const vowels = ['a', 'e' , 'i', 'o', 'u'];
    for (let i = left; i<= right; i++){
        let word = words[i];
        let first = word[0];
        let last = word[word.length -1];
if(vowels.includes(first) && vowels.includes(last)){
    count++;
}
    }
    return count;
};

console.log(vowelStrings(["are","amy","u"], 0, 2)); // Output: 2
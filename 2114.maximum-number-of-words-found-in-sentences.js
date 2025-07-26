/*
 * @lc app=leetcode id=2114 lang=javascript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    let maxWords= 0;
    
    for(let i =0; i<sentences.length; i++){
        let words = sentences[i].split(" ");
if(words.length > maxWords){
    maxWords = words.length;
}
    }
    return maxWords
};
// @lc code=end


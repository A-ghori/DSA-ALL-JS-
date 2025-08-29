var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi , '').toLowerCase();
    let reverse = str.splice('').reverse.join('');
    return str === reverse;
}
var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi , '').toLowerCase();
    let reverse = str.split('').reverse.join('');
    return str === reverse;
    
}
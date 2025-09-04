function Palindrome (x) {
    let c = x.toString();
    let reversed = x.split('').reverse().join('')
    c === reversed
}
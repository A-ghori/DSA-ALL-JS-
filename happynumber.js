
var isHappy = function(n) {
    const seen = new Set ();
    while (n !== 1 && !seen.has(n)){
        seen.add(n);
        n = String(n)
               .split('')  // convert to string to split digits
               .reduce((sum,d) => sum + Math.pow(+d,2) , 0); // array of numbers 
    }
    return n ===1;
};


console.log(isHappy(19));
console.log(isHappy(2));
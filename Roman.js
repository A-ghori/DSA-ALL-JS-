/**
 * @param {string} s
 * @return {number}  
 */
var romanToInt = function(s) {
    const roman = {

I:1,
V:5,
X:10,
L:50,
C:100,
D:500,
M:1000
    };
let total = 0;
    for (let i = 0 ; i < s.length ; i++){
        let curr = roman [s[i]];    //let say s = "IV"  I is the current and V is the next of this IV string....
        let next = roman [s[i+1]];
        if (curr < next){
            total = total - curr;
        }else{
            total = total + curr;   // this actually minus and plus the vlaues of IV I mean 1 and V mean 5 and i have to minus for more details check the diary 
        }
    }
return total ;



};


console.log(romanToInt("III"));      // 3
console.log(romanToInt("LVIII"));    // 58
console.log(romanToInt("MCMXCIV"));  // 1994

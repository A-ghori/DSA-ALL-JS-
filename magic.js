// 55 -> 5+5 = 10 -> 1 + 0 = 1
// 1234 -> 1+2+3+4 = 10 -> 1+0 = 1
// 100 -> 1+0+0 = 1

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(answer) {
  const num = Number(answer);
  
  // Call your magicNumber function
  magicNumber(num);
  
  rl.close();
});


var magicNumber = function(n){

    while (n >= 10){
        let digits = n.toString().split('')
        let sum = 0;
    for(let i=0; i<digits.length; i++){
sum = sum + Number(digits[i])
    }
n = sum 
  }

  console.log("✅ Final magic number:", n);
  return n
}

// n = 55;
// n.split('') -> '5','5' -> i = 5 j = 5
// a = n[i] + n[j] = 10 -> a
// arr.push(n)
// if(a !== 1){
//      arr = arr + n
//}
var plusOne = (digits) =>{
    for (let i =digits.length-1; i>=0 ; i--){
        if(digits[i]<9){
            digits[i] ++;
            return digits;
        }
        //type of else jodi digits < 9 hoy mane 9 < 9 hoy its a false right tokon ei condition lagbe
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};

// const result = plusOne ([9,9,9])

const result = plusOne ([1,1,1])

console.log(`ki chas 1 add kora dekhte ? : ${result}`);
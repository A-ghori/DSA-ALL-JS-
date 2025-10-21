let fruits = ['apple', 'banana', 'cherry'];
let result = []
let count = 0;
// Using for loop
for(let frui of fruits){
    if(frui.indexOf('apple') !== -1){
        console.log("Yes Code Chalao");

        
        result.push(frui);
        count ++

    }
    
}
console.log("Fruits are:", result)
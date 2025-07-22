// Valid Parenthesis Checking

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0 ; i<s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        }else{ //Closing Brackets 
            if(stack.length === 0) return false;

if((stack[stack.length -1] === '(' && s[i] === ')') ||  //stack[stack.length -1] gives the last element in the stack or the last element is known as top of the stack..
(stack[stack.length -1] === '{' && s[i] === '}') ||
(stack[stack.length -1] === '[' && s[i] === ']')){
    stack.pop();
}else{
//No matches Found 
return false
}
}
    }
return stack.length === 0; // If stack is empty, all brackets are matched

};



// Example test cases
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true
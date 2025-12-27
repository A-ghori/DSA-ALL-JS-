// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...


var convertToTitle = function(columnNumber) {
//     return String.fromCharCode(columnNumber+64)

let column = '';
while(columnNumber > 0){
    let rem = (columnNumber - 1) % 26;
    column = String.fromCharCode(65 + rem) 
        columnNumber = Math.floor((columnNumber - rem) / 26);
}
return column 

 };
 console.log(convertToTitle(27))

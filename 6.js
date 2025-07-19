/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
        if(numRows ===1 || s.length<= numRows)
            return s;
        //Creating empty buckets 
        const rows = new Array(numRows).fill("");
        let currentRow = 0;
        let goingDown = false;

        //For Loop
        for (let char of s){
      rows[currentRow] +=char;
         // Reverse direction when hitting top or bottom row
         if(currentRow === 0 || currentRow === numRows -1){
            //Flip the current bool expression
            goingDown = !goingDown;
         }
           // Move up or down
           currentRow += goingDown ? 1 : -1;
        }
return rows.join("")
};

console.log(convert("PAYPALISHIRING", 3));
/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 *
 * The function returns an array with all coupon codes that are currently active.
 * (If the three input arrays are not the same length, it iterates up to the
 * smallest length to avoid out‑of‑bounds errors.)
 */
var validateCoupons = function (code, businessLine, isActive) {
const result = []
let n = Math.min(code.length,businessLine.length, isActive.length );
for (let i = 0 ; i < n; i++){
    if(isActive[i] === true){
result.push(code[i])
    }
}
return result
}



console.log(
  validateCoupons(
    ["SAVE10", "FOOD5", "OLD50"],
    ["Fashion", "Food", "Electronics"],
    [true, false, true]
  )
);           // -> ["SAVE10", "OLD50"]






// function validateCoupons(code, businessLine, isActive) {
//   const result = [];
//   const seen   = new Set();
//   const allowedLines = ["grocery", "electronics", "pharmacy", "restaurant];

//   const n = Math.min(code.length, businessLine.length, isActive.length);

//   for (let i = 0; i < n; i++) {
//     const currentCode = code[i];
//     const currentLine = businessLine[i];

//     const isValidText = currentCode.length > 0 &&
//                         /^[A-Za-z0-9_]+$/.test(currentCode);   // now allows _

//     const isValidLine = allowedLines.includes(currentLine);

//     if (isActive[i] && isValidText && isValidLine && !seen.has(currentCode)) {
//       result.push(currentCode);
//       seen.add(currentCode);
//     }
//   }
//     result.sort()
//   return result;
// }
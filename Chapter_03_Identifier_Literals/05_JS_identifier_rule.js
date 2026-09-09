//identifier has certain rules that follows $, _, a-z, A-Z, 0-9

/**
 * JavaScript Identifier Rules:
 * 1. Identifiers can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($)
 * 2. Identifiers cannot start with a digit
 * 3. Identifiers are case-sensitive
 * 4. Reserved words cannot be used as identifiers
 */

// Valid identifier examples with $ and _

var $a = 10;
var _n = 30;
var a = 45;

var abhishek_goswami = 10;
var abhishek$goswami = 49;
var abhishekgoswami9844 = 38;
var abhishek$123_Goswami = 10;

console.log($a);                    // Output: 10
console.log(_n);                    // Output: 30
console.log(a);                     // Output: 45
console.log(abhishek_goswami);      // Output: 10
console.log(abhishek$goswami);      // Output: 49
console.log(abhishekgoswami9844);   // Output: 38
console.log(abhishek$123_Goswami);  // Output: 10

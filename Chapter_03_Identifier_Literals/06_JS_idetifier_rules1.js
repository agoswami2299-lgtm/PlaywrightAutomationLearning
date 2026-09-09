/**
 * JavaScript Identifier Naming Rules
 * Rules for naming identifiers (variables, functions, etc.) in JavaScript
 */

/**
 * ALLOWED CHARACTERS
 * ✅ Can contain letters (a–z, A–Z), digits (0–9), underscore (_), and dollar sign ($)
 * ✅ Can also include Unicode letters (e.g., café, π) — JS supports Unicode identifiers
 */

/**
 * RULES FOR IDENTIFIERS
 * 1. Must start with a letter, _, or $ — never a digit.
 *    ✅ name, _count, $price
 *    ❌ 1name (invalid)
 * 
 * 2. Cannot contain spaces or special characters like -, @, %, #, etc.
 *    ❌ first - name, user@name
 * 
 * 3. Case-sensitive — myVar, MyVar, and MYVAR are three different identifiers.
 * 
 * 4. Cannot be a reserved keyword (e.g., let, const, function, return, class, if, for, etc.).
 *    ❌ let let = 5; → invalid
 * 
 * 5. No length limit, but keep them meaningful and reasonably short.
 */

/**
 * NAMING CONVENTIONS
 * (Not enforced by JS, but standard practice)
 * 
 * camelCase for variables and functions → firstName, calculateTotal()
 * PascalCase for classes / constructors → class UserAccount { }
 * UPPER_SNAKE_CASE for constants → const MAX_LIMIT = 100;
 * $ is often used by libraries (e.g., jQuery's $)
 * _ is often used to indicate a "private" or internal variable (convention only, not enforced)
 */

// VALID IDENTIFIER EXAMPLES
var userName = "Abhishek";           // ✅ camelCase
var _temp = 25;                      // ✅ Starts with underscore
var $element = "button";             // ✅ Starts with $
var age = 30;                        // ✅ Starts with letter
var MAX_LIMIT = 100;                 // ✅ Constant in UPPER_SNAKE_CASE
var déjà_vu = "example";             // ✅ Unicode letters allowed

// Function examples
function calculateTotal() {          // ✅ camelCase function
    return 100;
}

class UserAccount {                  // ✅ PascalCase for classes
    constructor(name) {
        this.name = name;
    }
}

// INVALID IDENTIFIER EXAMPLES (COMMENTED OUT - DO NOT UNCOMMENT)
// var 2ndPlace = "second";          // ❌ Cannot start with a digit
// var user - name = "John";         // ❌ Cannot contain hyphen
// var class = 5;                    // ❌ Reserved keyword
// var first name = 10;              // ❌ Cannot contain space
// var user@name = "test";           // ❌ Cannot contain @

/**
 * VALID vs INVALID EXAMPLES TABLE
 * 
 * Identifier     | Valid ? | Reason
 * --------------|---------|-------
 * userName       | ✅ Yes  | Starts with letter
 * _temp          | ✅ Yes  | Starts with underscore
 * $element       | ✅ Yes  | Starts with $
 * 2ndPlace       | ❌ No   | Starts with a digit
 * user - name    | ❌ No   | Contains a hyphen
 * class          | ❌ No   | Reserved keyword
 * déjà_vu        | ✅ Yes  | Unicode letters allowed
 */

// Test the valid identifiers
console.log("userName:", userName);
console.log("_temp:", _temp);
console.log("$element:", $element);
console.log("age:", age);
console.log("MAX_LIMIT:", MAX_LIMIT);
console.log("déjà_vu:", déjà_vu);
console.log("calculateTotal():", calculateTotal());
console.log("UserAccount class:", UserAccount);

//this line will not be excuted please ignore this
//single line comment will not excuted


/*Multiple line comment
*author = shiva;
* date = 2024-06-10;
* description = this is a comment section*/


/**Multiple line comment
*author = shiva;
* date = 2024-06-10;
* description = this is a comment section
**/

/**
 * JAVASCRIPT COMMENTS - COMPREHENSIVE GUIDE
 * ═════════════════════════════════════════════════════════════════
 */

/**
 * 1. SINGLE LINE COMMENTS
 * ───────────────────────
 * Syntax: // comment text
 * Used for: Brief explanations, notes, or temporarily disabling code
 */

// This is a single line comment
var x = 10;  // Inline comment
// var y = 20;  // Commented out code


/**
 * 2. MULTI-LINE COMMENTS
 * ──────────────────────
 * Syntax: /* comment text */
 * Used for: Longer explanations, blocks of text, or disabling multiple lines
 */

/* This is a multi-line comment
   that spans across multiple lines
   and continues here */

/*
 * Multiple line comment structure:
 * author = shiva
 * date = 2024-06-10
 * description = this is a comment section
 */


/**
 * 3. JSDoc STYLE COMMENTS (Documentation Comments)
 * ──────────────────────────────────────────────────
 * Syntax: /** comment text */
 * Used for: Documenting functions, classes, and modules
 * Tools like IDEs and documentation generators parse these
 */

/**
 * Calculates the sum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * User class for storing user information
 * @class User
 * @param {string} name - The name of the user
 * @param {string} email - The email of the user
 */
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    /**
     * Get user information
     * @returns {string} Formatted user information
     */
    getInfo() {
        return `${this.name} - ${this.email}`;
    }
}


/**
 * IMPORTANT POINTS ABOUT COMMENTS
 * ═════════════════════════════════════════════════════════════════
 * 
 * ✅ DO:
 *    - Use comments to explain WHY, not WHAT
 *    - Keep comments up-to-date with code changes
 *    - Use meaningful, clear language
 *    - Document complex algorithms or business logic
 *    - Use JSDoc for functions and classes
 * 
 * ❌ DON'T:
 *    - Over-comment obvious code
 *    - Leave outdated or misleading comments
 *    - Comment out large blocks of code (use version control instead)
 *    - Write comments instead of writing clear code
 *    - Use comments as a substitute for proper variable/function names
 */

/**
 * COMMENT BEST PRACTICES
 * ═════════════════════════════════════════════════════════════════
 */

// Good: Explains the why
// We use a special calculation here because the API returns timestamps in milliseconds
let timestamp = Date.now();

// Bad: Explains the obvious
// Add 1 to x
let x_bad = x + 1;

// Good: JSDoc for function
/**
 * Validates user email format
 * @param {string} email - The email to validate
 * @returns {boolean} True if email is valid
 */
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Good: Comment for complex logic
// Using memoization pattern to cache expensive calculations
const cache = {};
function fibonacci(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    return cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
}


/**
 * EXAMPLE: Full Documented Code
 * ═════════════════════════════════════════════════════════════════
 */

/**
 * PaymentProcessor handles all payment-related operations
 * @class PaymentProcessor
 */
class PaymentProcessor {
    /**
     * Initialize payment processor
     * @param {string} apiKey - The API key for payment gateway
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    
    /**
     * Process a payment transaction
     * @param {number} amount - Amount to charge
     * @param {string} currency - Currency code (USD, EUR, etc.)
     * @returns {Object} Transaction result with id and status
     * @throws {Error} If payment fails
     */
    processPayment(amount, currency) {
        // Validate amount is positive
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0");
        }
        
        // Call payment gateway API
        return {
            id: Math.random().toString(36),
            status: "success",
            amount: amount,
            currency: currency
        };
    }
}

// Usage example
const processor = new PaymentProcessor("test_key");
console.log(processor.processPayment(99.99, "USD"));

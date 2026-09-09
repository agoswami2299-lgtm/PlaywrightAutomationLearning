/**
 * JavaScript Identifier Part 2 - Naming Case Styles
 * Understanding the different "case" styles used in JavaScript naming conventions
 */

// BASIC EXAMPLES
var name = "abhishek";

var lastName = "Goswami";
var Firtsname = "Abhishek";      // camelCase example
var first_name = "abhishek";     // snake_case example

/**
 * ═══════════════════════════════════════════════════════════════
 * MAIN "CASE" STYLES USED IN JAVASCRIPT NAMING CONVENTIONS
 * ═══════════════════════════════════════════════════════════════
 */

/**
 * 1. camelCase
 * ─────────────────
 * First word lowercase, each subsequent word capitalized.
 * No spaces / underscores.
 * 
 * ✅ Used for: variables, function names, object properties, method names
 */
let firstName = "John";
let lastName = "Doe";
let isLoggedIn = true;
let userEmail = "john@example.com";

function getUserData() {
    return "User data";
}

function calculateTotal() {
    return 100;
}

const user = {
    firstName: "Abhishek",
    lastName: "Goswami",
    getUserName: function() {
        return this.firstName + " " + this.lastName;
    }
};

/**
 * 2. PascalCase (UpperCamelCase)
 * ──────────────────────────────
 * Every word capitalized, including the first.
 * 
 * ✅ Used for: classes, constructor functions, React components
 */
class UserAccount {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    getProfile() {
        return `${this.name} - ${this.email}`;
    }
}

function Person(name) {
    this.name = name;
}

// React component example (comment only - not executable)
// const UserProfile = () => { };

/**
 * 3. UPPER_SNAKE_CASE (CONSTANT_CASE)
 * ────────────────────────────────────
 * All uppercase, words separated by underscores.
 * 
 * ✅ Used for: constants, fixed / config values that never change
 */
const MAX_LIMIT = 100;
const API_BASE_URL = "https://api.example.com";
const DAYS_IN_WEEK = 7;
const DEFAULT_TIMEOUT = 5000;
const MIN_PASSWORD_LENGTH = 8;

/**
 * 4. snake_case
 * ──────────────
 * All lowercase, words separated by underscores.
 * 
 * ⚠️  Rare in JS itself, but common in:
 *    - JSON keys from backend/databases (especially Python/Ruby APIs)
 *    - SQL-style variable names
 *    - Database field names
 */
let user_id = 123;                      // uncommon in JS, but seen in API responses
const first_name = "Abhishek";          // not idiomatic JS
let email_address = "test@example.com"; // database style

/**
 * 5. kebab-case
 * ──────────────
 * All lowercase, words separated by hyphens.
 * 
 * ❌ NOT valid for JS identifiers (hyphen is treated as subtraction)
 * ✅ Used for: file names, CSS classes, HTML attributes, and URL slugs
 * 
 * Examples (comment only - cannot be used as JS variable names):
 * - File: user-profile.js
 * - CSS: .user-card { }
 * - HTML: <div class="user-profile"></div>
 * - URL: /user-profile/abhishek-goswami
 * 
 * NOT valid as JS variable:
 * let user-name = "x";  ❌ (interpreted as: user minus name)
 */

/**
 * ═══════════════════════════════════════════════════════════════
 * QUICK REFERENCE TABLE
 * ═══════════════════════════════════════════════════════════════
 * 
 * Case Type           | Example          | Used For
 * ────────────────────|──────────────────|────────────────────────
 * camelCase           | getUserName      | variables, functions
 * PascalCase          | UserAccount      | classes, components
 * UPPER_SNAKE_CASE    | MAX_SIZE         | constants
 * snake_case          | user_id          | rare in JS; APIs / DB
 * kebab-case          | user-profile     | filenames, CSS, URLs
 * ═══════════════════════════════════════════════════════════════
 */

/**
 * BOTTOM LINE FOR JAVASCRIPT:
 * ────────────────────────────
 * Use these THREE case styles to cover almost everything:
 * 
 * 1️⃣  camelCase     → Default for variables, functions, methods
 * 2️⃣  PascalCase    → For classes and components
 * 3️⃣  UPPER_SNAKE_CASE → For true constants only
 */

// Practical Examples Combining All Styles
class PaymentProcessor {                      // PascalCase: class
    constructor(userId) {
        this.userId = userId;                 // camelCase: property
    }
    
    processPayment(amount) {                  // camelCase: method
        const MAX_TRANSACTION = 100000;       // UPPER_SNAKE_CASE: constant
        return amount <= MAX_TRANSACTION;
    }
}

// Usage
const processor = new PaymentProcessor(123);  // camelCase: variable
console.log(processor.processPayment(5000));

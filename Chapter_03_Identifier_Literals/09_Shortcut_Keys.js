/**
 * JavaScript / VS Code Shortcut Keys on Windows
 * Most useful shortcuts for coding efficiently
 * ═════════════════════════════════════════════════════════════════
 */

/**
 * MOST USED JAVASCRIPT / VS CODE SHORTCUTS TABLE
 * ───────────────────────────────────────────────
 * 
 * Shortcut            | Use
 * ─────────────────---|──────────────────────────────
 * Ctrl + S            | Save file
 * Ctrl + C            | Copy
 * Ctrl + X            | Cut
 * Ctrl + V            | Paste
 * Ctrl + Z            | Undo
 * Ctrl + Y            | Redo
 * Ctrl + A            | Select all
 * Ctrl + F            | Find text
 * Ctrl + H            | Find & Replace
 * Ctrl + /            | Comment / Uncomment line
 * Shift + Alt + A     | Block comment /* */
 * Shift + Alt + ↓     | Duplicate line below
 * Shift + Alt + ↑     | Duplicate line above
 * Alt + ↑             | Move line up
 * Alt + ↓             | Move line down
 * Shift + Delete      | Delete entire line
 * Ctrl + Shift + K    | Delete line
 * Ctrl + D            | Select next matching word
 * Ctrl + Shift + L    | Select all matching occurrences
 * Ctrl + Space        | Show code suggestions
 * Ctrl + Shift + P    | Command Palette
 * F2                  | Rename variable / function
 * F12                 | Go to definition
 * Ctrl + `            | Open/close terminal
 * Ctrl + B            | Show/hide sidebar
 * Ctrl + P            | Quickly open a file
 * Ctrl + Shift + F    | Search across project
 * Ctrl + Shift + E    | Explorer
 * Ctrl + Shift + G    | Source Control/Git
 */

// ═════════════════════════════════════════════════════════════════
// CATEGORY 1: FILE & EDITING OPERATIONS
// ═════════════════════════════════════════════════════════════════

// Ctrl + S        → Save file
// Ctrl + Shift + S → Save as...
// Ctrl + C         → Copy
// Ctrl + X         → Cut
// Ctrl + V         → Paste

// Example:
let userName = "Abhishek";  // Ctrl + S to save


// ═════════════════════════════════════════════════════════════════
// CATEGORY 2: UNDO / REDO
// ═════════════════════════════════════════════════════════════════

// Ctrl + Z         → Undo last action
// Ctrl + Y         → Redo last undone action


// ═════════════════════════════════════════════════════════════════
// CATEGORY 3: SELECTION & MANIPULATION
// ═════════════════════════════════════════════════════════════════

// Ctrl + A             → Select all text in file
// Ctrl + D             → Select next matching word
// Ctrl + Shift + L     → Select all matching occurrences
// Ctrl + Shift + K     → Delete entire line
// Shift + Delete       → Delete entire line (alternative)
// Shift + Alt + ↓      → Duplicate line below
// Shift + Alt + ↑      → Duplicate line above
// Alt + ↑              → Move line up
// Alt + ↓              → Move line down

function exampleFunction() {
    var x = 10;
    var y = 20;
    return x + y;
}


// ═════════════════════════════════════════════════════════════════
// CATEGORY 4: SEARCH & REPLACE
// ═════════════════════════════════════════════════════════════════

// Ctrl + F             → Find text
// Ctrl + H             → Find & Replace
// Ctrl + Shift + F     → Search across entire project
// F3                   → Find next
// Shift + F3           → Find previous


// ═════════════════════════════════════════════════════════════════
// CATEGORY 5: COMMENTS
// ═════════════════════════════════════════════════════════════════

// Ctrl + /         → Comment / Uncomment single line
// Shift + Alt + A  → Block comment /* */ for multiple lines

// Example: Select code below and press Ctrl + / to toggle comments
function calculateSum(a, b) {
    return a + b;
}


// ═════════════════════════════════════════════════════════════════
// CATEGORY 6: CODE INTELLIGENCE
// ═════════════════════════════════════════════════════════════════

// Ctrl + Space        → Show code suggestions / IntelliSense
// Ctrl + Shift + P    → Command Palette
// F2                  → Rename variable / function (refactoring)
// F12                 → Go to definition / declaration
// Ctrl + Shift + O    → Go to symbol in file


// ═════════════════════════════════════════════════════════════════
// CATEGORY 7: TERMINAL & DEBUG
// ═════════════════════════════════════════════════════════════════

// Ctrl + `         → Open/close integrated terminal
// F5               → Start debugging / Run
// Ctrl + F5        → Run without debugging
// Shift + F5       → Stop debugging


// ═════════════════════════════════════════════════════════════════
// CATEGORY 8: NAVIGATION & PANELS
// ═════════════════════════════════════════════════════════════════

// Ctrl + B             → Show/hide sidebar
// Ctrl + P             → Quickly open a file (Go to File)
// Ctrl + Shift + E     → Explorer panel
// Ctrl + Shift + G     → Source Control/Git panel
// Ctrl + Shift + D     → Debug panel
// Ctrl + Shift + X     → Extensions panel


// ═════════════════════════════════════════════════════════════════
// 🟢 JAVASCRIPT-SPECIFIC USEFUL SHORTCUTS
// ═════════════════════════════════════════════════════════════════

/**
 * EMMET SHORTCUTS
 * VS Code also supports Emmet shortcuts for faster HTML/CSS coding
 * 
 * Example:
 * Type: !
 * Press: Tab
 * Result: Generates complete HTML structure
 * 
 * Type: div.container>p.text
 * Press: Tab
 * Result: <div class="container"><p class="text"></p></div>
 */

/**
 * CODE SNIPPETS
 * JavaScript snippets can help write common structures quickly
 * Depending on your installed extensions/snippets
 * 
 * Common snippet shortcuts:
 * - type 'for' and press Tab → generates for loop
 * - type 'if' and press Tab → generates if statement
 * - type 'func' and press Tab → generates function
 */


// ═════════════════════════════════════════════════════════════════
// ▶️ RUN JAVASCRIPT IN VS CODE
// ═════════════════════════════════════════════════════════════════

/**
 * Option 1: Using Node.js in Terminal
 * 1. Press Ctrl + ` to open terminal
 * 2. Type: node filename.js
 * 3. Press Enter
 * 
 * Example:
 * node 01_Basic.js
 */

/**
 * Option 2: Using VS Code Debugger
 * 1. Press F5 to start debugging
 *    (Or Ctrl + F5 to run without debugging)
 * 2. Select "Node.js" as environment
 * 3. Code runs and shows output in Debug Console
 */

/**
 * Option 3: Using Code Runner Extension
 * 1. Install Code Runner extension
 * 2. Right-click in editor
 * 3. Select "Run Code"
 */

// Example function to test
function helloWorld() {
    console.log("Hello, World!");
    return "JavaScript is running!";
}


// ═════════════════════════════════════════════════════════════════
// ⭐ TOP 10 SHORTCUTS TO LEARN FIRST
// ═════════════════════════════════════════════════════════════════

/**
 * For JavaScript + Playwright learning, memorize these 10:
 * 
 * 1. Ctrl + S        → Save file (MOST IMPORTANT!)
 * 2. Ctrl + C        → Copy
 * 3. Ctrl + V        → Paste
 * 4. Ctrl + Z        → Undo
 * 5. Ctrl + /        → Comment/Uncomment line
 * 6. Shift + Alt + ↓ → Duplicate line below
 * 7. Alt + ↑         → Move line up
 * 8. Alt + ↓         → Move line down
 * 9. Ctrl + F        → Find text
 * 10. Ctrl + P       → Quickly open a file
 * 
 * BONUS: Ctrl + ` → Open terminal (for running Node.js)
 * 
 * These will save you a LOT of time while coding!
 */

// ═════════════════════════════════════════════════════════════════
// QUICK CHEAT SHEET BY FREQUENCY OF USE
// ═════════════════════════════════════════════════════════════════

/*
ESSENTIAL (Use multiple times per minute):
  Ctrl + S       - Save
  Ctrl + Z       - Undo
  Ctrl + C/V     - Copy/Paste
  Ctrl + /       - Toggle comment

FREQUENT (Use multiple times per session):
  Ctrl + F       - Find
  Ctrl + H       - Find & Replace
  Ctrl + P       - Open file
  Ctrl + D       - Select word
  Alt + ↑/↓      - Move line

OCCASIONAL (Use daily):
  Shift + Alt + ↓ - Duplicate line
  Ctrl + Shift + K - Delete line
  F2             - Rename
  F12            - Go to definition
  Ctrl + `       - Open terminal

NAVIGATION:
  Ctrl + B       - Toggle sidebar
  Ctrl + Shift + E - Explorer
  Ctrl + Shift + G - Source Control
*/

// ═════════════════════════════════════════════════════════════════
// EXAMPLE: USING SHORTCUTS IN PRACTICE
// ═════════════════════════════════════════════════════════════════

class Calculator {
    constructor(name) {
        this.name = name;
    }
    
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
}

// Usage
const calc = new Calculator("MyCalc");
console.log(calc.add(10, 5));        // 15
console.log(calc.multiply(4, 3));    // 12
console.log(calc.divide(20, 4));     // 5

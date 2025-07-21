/*
🎨 CHALLENGE 4: Pattern Generator & Number Cruncher
==================================================

Use different types of loops to create patterns, process data, and solve problems!

TASKS:
1. Use for loops to create patterns
2. Use while loops for conditional processing
3. Use do-while loops for user input simulation
4. Use for...in loops to process arrays
5. Practice break and continue statements

TOPICS COVERED: for loops, while loops, do-while loops, for...in loops, break, continue
*/

console.log("🎨 Welcome to the Pattern Generator! 🎨\n");

// CHALLENGE 4A: Star Patterns with For Loops
console.log("--- CHALLENGE 4A: Star Patterns ---");

// TODO: Create a right triangle pattern
// Use nested for loops to create:
// *
// **
// ***
// ****
// *****

console.log("Right Triangle Pattern:");


// TODO: Create a pyramid pattern
// Use nested for loops to create:
//     *
//    ***
//   *****
//  *******
// *********

console.log("\nPyramid Pattern:");


// CHALLENGE 4B: Number Processing with While Loops
console.log("\n--- CHALLENGE 4B: Number Processing ---");

// TODO: Find the first number divisible by both 7 and 13
let number = 1;

// Expected output:
// First number divisible by both 7 and 13: <answer>


// CHALLENGE 4C: Guessing Game Simulation with Do-While
console.log("\n--- CHALLENGE 4C: Guessing Game Simulation ---");

let secretNumber = 42;
let guess = 0;
let attempts = 0;

// TODO: Simulate a guessing game
// Use do-while to ensure at least one guess is made
// Generate random guesses until the correct number is found

// Expected output:
// Attempt 1: Guessed 73 - Too high!
// Attempt 2: Guessed 25 - Too low!
// Attempt 3: Guessed 42 - Correct!
// Game completed in 3 attempts!

// CHALLENGE 4D: Array Processing with For...In Loops
console.log("\n--- CHALLENGE 4D: Array Processing ---");

let videoGames = ["Zelda", "Mario", "Pokemon", "Minecraft", "Fortnite", "Among Us"];
let scores = [95, 88, 92, 87, 76, 83];
let prices = [59.99, 39.99, 49.99, 26.95, 0, 4.99];

// TODO: Display game catalog using for...in loop
console.log("🎮 Game Catalog:");

// Expected output:
// 🎮 Game Catalog:
// 1. Zelda - Score: 95 - Price: $59.99
// 2. Mario - Score: 88 - Price: $39.99
// 3. Pokemon - Score: 92 - Price: $49.99
// 4. Minecraft - Score: 87 - Price: $26.95
// 5. Fortnite - Score: 76 - Price: $0
// 6. Among Us - Score: 83 - Price: $4.99


// TODO: Find games with score > 90
console.log("\n🏆 High-Rated Games (Score > 90):");


// Expected output:
// 🏆 High-Rated Games (Score > 90):
// Zelda - Score: 95
// Pokemon - Score: 92

// TODO: Calculate average price (skip free games)
let totalPrice = 0;
let paidGames = 0;


// Expected output:
// 💰 Average price of paid games: $43.32




// CHALLENGE 4E: Advanced Loop Control

// TODO: Print numbers 1-20, but skip multiples of 3 and stop at first multiple of 17


// TODO: Find prime numbers between 1 and 30



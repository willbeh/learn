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
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// TODO: Create a pyramid pattern
// Use nested for loops to create:
//     *
//    ***
//   *****
//  *******
// *********

console.log("\nPyramid Pattern:");
// for (let i = 1; i <= 5; i++) {
//     let spaces = "";
//     let stars = "";
//     
//     // Add spaces
//     for (let j = 1; j <= 5 - i; j++) {
//         spaces += " ";
//     }
//     
//     // Add stars
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         stars += "*";
//     }
//     
//     console.log(spaces + stars);
// }

// CHALLENGE 4B: Number Processing with While Loops
console.log("\n--- CHALLENGE 4B: Number Processing ---");

// TODO: Find the first number divisible by both 7 and 13
let number = 1;
// while (condition) {
//     // Check if number is divisible by both 7 and 13
//     // If yes, break out of loop
//     // If no, increment number and continue
// }
// console.log(`First number divisible by both 7 and 13: ${number}`);

// TODO: Calculate factorial using while loop
let factorialInput = 6;
let factorial = 1;
let temp = factorialInput;

// while (temp > 0) {
//     // Multiply factorial by temp
//     // Decrement temp
// }
// console.log(`${factorialInput}! = ${factorial}`);

// CHALLENGE 4C: Guessing Game Simulation with Do-While
console.log("\n--- CHALLENGE 4C: Guessing Game Simulation ---");

let secretNumber = 42;
let guess = 0;
let attempts = 0;

// TODO: Simulate a guessing game
// Use do-while to ensure at least one guess is made
// Generate random guesses until the correct number is found

// do {
//     // Generate a random guess between 1 and 100
//     guess = Math.floor(Math.random() * 100) + 1;
//     attempts++;
//     
//     if (guess < secretNumber) {
//         console.log(`Attempt ${attempts}: Guessed ${guess} - Too low!`);
//     } else if (guess > secretNumber) {
//         console.log(`Attempt ${attempts}: Guessed ${guess} - Too high!`);
//     } else {
//         console.log(`Attempt ${attempts}: Guessed ${guess} - Correct!`);
//     }
// } while (guess !== secretNumber);

// console.log(`Game completed in ${attempts} attempts!`);

// CHALLENGE 4D: Array Processing with For...In Loops
console.log("\n--- CHALLENGE 4D: Array Processing ---");

let videoGames = ["Zelda", "Mario", "Pokemon", "Minecraft", "Fortnite", "Among Us"];
let scores = [95, 88, 92, 87, 76, 83];
let prices = [59.99, 39.99, 49.99, 26.95, 0, 4.99];

// TODO: Display game catalog using for...in loop
console.log("🎮 Game Catalog:");
// for (let index in videoGames) {
//     // Display: "1. Zelda - Score: 95 - Price: $59.99"
//     // Use parseInt(index) + 1 for numbering
// }

// TODO: Find games with score > 90
console.log("\n🏆 High-Rated Games (Score > 90):");
// for (let i in scores) {
//     // Check if score > 90
//     // If yes, display the game name and score
// }

// TODO: Calculate average price (skip free games)
let totalPrice = 0;
let paidGames = 0;

// for (let i in prices) {
//     // Skip if price is 0 (free game)
//     // Add to totalPrice and increment paidGames counter
// }

// let averagePrice = totalPrice / paidGames;
// console.log(`\n💰 Average price of paid games: $${averagePrice.toFixed(2)}`);

// CHALLENGE 4E: Advanced Loop Control
console.log("\n--- CHALLENGE 4E: Advanced Loop Control ---");

// TODO: Print numbers 1-20, but skip multiples of 3 and stop at first multiple of 17
console.log("Numbers 1-20 (skipping multiples of 3, stopping at first multiple of 17):");

// for (let i = 1; i <= 20; i++) {
//     // Use continue to skip multiples of 3
//     // Use break to stop at first multiple of 17
//     // Print the number
// }

// TODO: Find prime numbers between 1 and 30
console.log("\nPrime numbers between 1 and 30:");

// for (let num = 2; num <= 30; num++) {
//     let isPrime = true;
//     
//     // Check if num is prime
//     for (let divisor = 2; divisor < num; divisor++) {
//         // If num is divisible by divisor, it's not prime
//         // Set isPrime = false and break
//     }
//     
//     // If isPrime is still true, print the number
// }

/*
BONUS CHALLENGES:
1. Create a multiplication table using nested loops
2. Generate the Fibonacci sequence using loops
3. Create a simple ASCII art generator
4. Build a basic calculator that processes multiple operations

EXPECTED OUTPUT EXAMPLE:
========================
🎨 Welcome to the Pattern Generator! 🎨

--- CHALLENGE 4A: Star Patterns ---
Right Triangle Pattern:
*
**
***
****
*****

Pyramid Pattern:
    *
   ***
  *****
 *******
*********

--- CHALLENGE 4B: Number Processing ---
First number divisible by both 7 and 13: 91
6! = 720

--- CHALLENGE 4C: Guessing Game Simulation ---
Attempt 1: Guessed 73 - Too high!
Attempt 2: Guessed 25 - Too low!
Attempt 3: Guessed 42 - Correct!
Game completed in 3 attempts!

--- CHALLENGE 4D: Array Processing ---
🎮 Game Catalog:
1. Zelda - Score: 95 - Price: $59.99
2. Mario - Score: 88 - Price: $39.99
...

🏆 High-Rated Games (Score > 90):
Zelda - Score: 95
Pokemon - Score: 92

💰 Average price of paid games: $43.32
*/


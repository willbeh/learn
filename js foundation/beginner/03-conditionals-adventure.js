/*
🗡️ CHALLENGE 3: Text Adventure Game
===================================

Create a simple text-based adventure game using conditional statements!
The player encounters different scenarios and must make decisions.

TASKS:
1. Use if/else statements for decision making
2. Use if/else if chains for multiple options
3. Use switch statements for menu selections
4. Practice logical operators for complex conditions

TOPICS COVERED: if statements, if/else, if/else if, switch statements, logical operators
*/

// Game state variables
let playerHealth = 100;
let playerGold = 50;
let hasKey = false;
let hasSword = false;
let hasPotion = false;

// TODO 1: Welcome message and player status (COMPLETED - Example provided)
console.log("🗡️ Welcome to the Dungeon Adventure! 🗡️");
console.log(`Health: ${playerHealth} | Gold: ${playerGold}`);

// SCENARIO 1: The Mysterious Door
console.log("\n--- SCENARIO 1: The Mysterious Door ---");
console.log("You approach a locked door. What do you do?");

// TODO 2: Simulate player choice (change this value to test different paths)
let doorChoice = "search"; // Options: "search", "force", "knock"

// TODO 3: Use if/else if/else to handle the door scenario
// Complete this conditional structure:
// if (doorChoice === "search") {
//     // Player finds a key hidden nearby
//     // Set hasKey = true
//     // Display message: "You search around the door and find a hidden key!"
//     // Display message: "Key acquired!"
// } else if (doorChoice === "force") {
//     // Player tries to break down the door
//     // Subtract 20 from playerHealth
//     // Display message: "You force the door open but injure yourself in the process."
//     // Display message: "You lose 20 health."
// } else if (doorChoice === "knock") {
//     // A friendly guard opens the door and gives gold
//     // Add 25 to playerGold
//     // Display message: "A friendly guard opens the door."
//     // Display message: "The guard gives you 25 gold for being polite!"
// } else {
//     // Invalid choice
//     // Display message: "That's not a valid choice. You stand confused."
// }

// SCENARIO 2: The Merchant
console.log("\n--- SCENARIO 2: The Merchant ---");
console.log("A merchant offers you items for sale:");
console.log("1. Sword (30 gold) - Increases attack power");
console.log("2. Health Potion (20 gold) - Restores 50 health");
console.log("3. Nothing - Save your gold");

// TODO 4: Simulate merchant choice
let merchantChoice = 1; // Change this to test different options (1, 2, 3, or invalid number)

// TODO 5: Use switch statement to handle merchant interaction
// Complete this switch statement:
// switch (merchantChoice) {
//     case 1:
//         // Buy sword if player has enough gold
//         // if (playerGold >= 30) {
//             // Subtract 30 from playerGold
//             // Set hasSword = true
//             // Display message: "You purchase a sword for 30 gold."
//             // Display message: `Remaining gold: ${playerGold}`
//         // } else {
//             // Display message: "You don't have enough gold for the sword."
//         // }
//         break;
//     case 2:
//         // Buy potion if player has enough gold
//         // if (playerGold >= 20) {
//             // Subtract 20 from playerGold
//             // Set hasPotion = true
//             // Display message: "You purchase a health potion for 20 gold."
//             // Display message: `Remaining gold: ${playerGold}`
//         // } else {
//             // Display message: "You don't have enough gold for the potion."
//         // }
//         break;
//     case 3:
//         // Player chooses not to buy anything
//         // Display message: "You decide to save your gold for later."
//         break;
//     default:
//         // Invalid choice
//         // Display message: "The merchant looks confused. That's not a valid option."
// }

// SCENARIO 3: The Dragon Encounter
console.log("\n--- SCENARIO 3: The Dragon Encounter ---");
console.log("A fierce dragon blocks your path!");

// TODO 6: Use complex logical operators to determine outcome
// Check multiple conditions using && and ||

// TODO 7: Determine if player can fight the dragon
// Player can fight if they have a sword AND health > 50
// let canFight = hasSword && playerHealth > 50;

// TODO 8: Determine if player should flee
// Player should flee if they have no sword OR health < 30
// let shouldFlee = !hasSword || playerHealth < 30;

// TODO 9: Use conditional operator for quick decision
// let dragonStrategy = canFight ? "fight" : "flee";

// TODO 10: Handle the dragon encounter based on multiple conditions
// Complete this conditional structure:
// if (canFight && hasSword) {
//     // Player defeats the dragon
//     // Add 100 to playerGold
//     // Subtract 30 from playerHealth
//     // Display message: "With your sword in hand, you bravely fight the dragon!"
//     // Display message: "You defeat the dragon but take 30 damage."
//     // Display message: "You found 100 gold in the dragon's hoard!"
// } else if (hasPotion && playerHealth < 50) {
//     // Player uses potion first, then fights
//     // Add 50 to playerHealth (potion effect)
//     // Set hasPotion = false (potion used)
//     // Subtract 20 from playerHealth (fight damage)
//     // Add 75 to playerGold (victory reward)
//     // Display message: "You drink your health potion first!"
//     // Display message: "Feeling stronger, you fight the dragon and win!"
//     // Display message: "You found 75 gold!"
// } else {
//     // Player flees
//     // Subtract 10 from playerHealth (running damage)
//     // Display message: "You decide to flee from the mighty dragon."
//     // Display message: "You lose 10 health while running away."
// }

// SCENARIO 4: The Treasure Room
console.log("\n--- SCENARIO 4: The Treasure Room ---");

// TODO 11: Check if player has the key from earlier scenario
// Complete this conditional:
// if (hasKey) {
//     // Player can enter treasure room
//     // Generate random treasure value between 50-149
//     // let treasureValue = Math.floor(Math.random() * 100) + 50;
//     // Add treasureValue to playerGold
//     // Display message: "You use your key to unlock the treasure room!"
//     // Display message: `You found a treasure chest worth ${treasureValue} gold!`
// } else {
//     // Player cannot enter
//     // Display message: "The treasure room is locked and you don't have a key."
//     // Display message: "You can only look through the keyhole at the riches inside."
// }

// TODO 12: Final status report
console.log("\n--- ADVENTURE COMPLETE ---");
// Display the following:
// console.log("Final Status:");
// console.log(`Health: ${playerHealth}`);
// console.log(`Gold: ${playerGold}`);
// 
// Create an items array and display items:
// let items = [];
// if (hasKey) items.push("Key");
// if (hasSword) items.push("Sword");
// if (hasPotion) items.push("Health Potion");
// 
// if (items.length > 0) {
//     console.log(`Items: ${items.join(", ")}`);
// } else {
//     console.log("Items: None");
// }

/*
BONUS CHALLENGES:
1. Add more scenarios with nested if statements
2. Create a combat system with multiple rounds
3. Add an inventory system with item limits
4. Implement a save/load game feature using objects
5. Add random events that affect player stats
6. Create different endings based on final stats

EXPECTED OUTPUT EXAMPLE (with doorChoice="search", merchantChoice=1):
================================================================
🗡️ Welcome to the Dungeon Adventure! 🗡️
Health: 100 | Gold: 50

--- SCENARIO 1: The Mysterious Door ---
You approach a locked door. What do you do?
You search around the door and find a hidden key!
Key acquired!

--- SCENARIO 2: The Merchant ---
A merchant offers you items for sale:
1. Sword (30 gold) - Increases attack power
2. Health Potion (20 gold) - Restores 50 health
3. Nothing - Save your gold
You purchase a sword for 30 gold.
Remaining gold: 20

--- SCENARIO 3: The Dragon Encounter ---
A fierce dragon blocks your path!
With your sword in hand, you bravely fight the dragon!
You defeat the dragon but take 30 damage.
You found 100 gold in the dragon's hoard!

--- SCENARIO 4: The Treasure Room ---
You use your key to unlock the treasure room!
You found a treasure chest worth 75 gold!

--- ADVENTURE COMPLETE ---
Final Status:
Health: 70
Gold: 195
Items: Key, Sword

TESTING SCENARIOS:
================
Try these different combinations to test your code:

1. doorChoice = "force", merchantChoice = 2
   Expected: Player loses health, buys potion, uses potion in dragon fight

2. doorChoice = "knock", merchantChoice = 3  
   Expected: Player gets extra gold, saves money, flees from dragon

3. doorChoice = "invalid", merchantChoice = 4
   Expected: Error messages for invalid choices

4. Set playerGold = 10 initially
   Expected: Cannot afford any merchant items
*/


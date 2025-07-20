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

// TODO: Welcome message and player status
console.log("🗡️ Welcome to the Dungeon Adventure! 🗡️");
console.log(`Health: ${playerHealth} | Gold: ${playerGold}`);

// SCENARIO 1: The Mysterious Door
console.log("\n--- SCENARIO 1: The Mysterious Door ---");
console.log("You approach a locked door. What do you do?");

// TODO: Simulate player choice (change this value to test different paths)
let doorChoice = "search"; // Options: "search", "force", "knock"

// TODO: Use if/else if/else to handle the door scenario
// if (doorChoice === "search") {
//     // Player finds a key hidden nearby
//     // Set hasKey = true
//     // Display success message
// } else if (doorChoice === "force") {
//     // Player tries to break down the door
//     // Loses 20 health but gets through
//     // Display damage message
// } else if (doorChoice === "knock") {
//     // A friendly guard opens the door and gives gold
//     // Add 25 gold
//     // Display friendly message
// } else {
//     // Invalid choice
//     // Display error message
// }

// SCENARIO 2: The Merchant
console.log("\n--- SCENARIO 2: The Merchant ---");
console.log("A merchant offers you items for sale:");
console.log("1. Sword (30 gold) - Increases attack power");
console.log("2. Health Potion (20 gold) - Restores 50 health");
console.log("3. Nothing - Save your gold");

// TODO: Simulate merchant choice
let merchantChoice = 1; // Change this to test different options

// TODO: Use switch statement to handle merchant interaction
// switch (merchantChoice) {
//     case 1:
//         // Buy sword if player has enough gold
//         // Check if playerGold >= 30
//         // If yes: subtract gold, set hasSword = true
//         // If no: display insufficient funds message
//         break;
//     case 2:
//         // Buy potion if player has enough gold
//         // Check if playerGold >= 20
//         // If yes: subtract gold, set hasPotion = true
//         // If no: display insufficient funds message
//         break;
//     case 3:
//         // Player chooses not to buy anything
//         // Display message about saving gold
//         break;
//     default:
//         // Invalid choice
//         // Display error message
// }

// SCENARIO 3: The Dragon Encounter
console.log("\n--- SCENARIO 3: The Dragon Encounter ---");
console.log("A fierce dragon blocks your path!");

// TODO: Use complex logical operators to determine outcome
// Check multiple conditions using && and ||

// TODO: Determine if player can fight the dragon
// Player can fight if they have a sword AND health > 50
// let canFight = ?

// TODO: Determine if player should flee
// Player should flee if they have no sword OR health < 30
// let shouldFlee = ?

// TODO: Use conditional operator for quick decision
// let dragonStrategy = canFight ? "fight" : "flee";

// TODO: Handle the dragon encounter
// if (canFight && hasSword) {
//     // Player defeats the dragon
//     // Gain 100 gold
//     // Lose 30 health
//     // Display victory message
// } else if (hasPotion && playerHealth < 50) {
//     // Player uses potion first, then fights
//     // Restore health with potion
//     // Then fight (lose 20 health, gain 75 gold)
//     // Display strategic message
// } else {
//     // Player flees
//     // Lose 10 health from running
//     // Display flee message
// }

// SCENARIO 4: The Treasure Room
console.log("\n--- SCENARIO 4: The Treasure Room ---");

// TODO: Check if player has the key from earlier
// if (hasKey) {
//     // Player can enter treasure room
//     // Find random treasure (use Math.random())
//     // let treasureValue = Math.floor(Math.random() * 100) + 50;
//     // Add treasure to gold
//     // Display treasure found message
// } else {
//     // Player cannot enter
//     // Display locked door message
// }

// TODO: Final status report
console.log("\n--- ADVENTURE COMPLETE ---");
// Display final health, gold, and items

/*
BONUS CHALLENGES:
1. Add more scenarios with nested if statements
2. Create a combat system with multiple rounds
3. Add an inventory system with item limits
4. Implement a save/load game feature using objects

EXPECTED OUTPUT EXAMPLE:
========================
🗡️ Welcome to the Dungeon Adventure! 🗡️
Health: 100 | Gold: 50

--- SCENARIO 1: The Mysterious Door ---
You search around the door and find a hidden key!
Key acquired!

--- SCENARIO 2: The Merchant ---
You purchase a sword for 30 gold.
Remaining gold: 20

--- SCENARIO 3: The Dragon Encounter ---
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
Items: Sword, Key
*/


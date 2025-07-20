/*
🎮 SOLUTION: Character Creation for a Video Game
===============================================

This solution demonstrates proper use of variables, data types, and basic arithmetic
operations in JavaScript. It shows how to create a character creation system for an RPG game.

CONCEPTS DEMONSTRATED:
- Variable declaration with let
- Different data types (string, number, boolean)
- Basic arithmetic operations
- String concatenation
- Console output
*/

console.log("🎮 Character Creation System - SOLUTION 🎮\n");

// Character basic info - using appropriate data types
let characterName = "Aragorn";
let characterClass = "Warrior";
let level = 5;

// Character stats (numbers)
let strength = 15;
let intelligence = 8;
let agility = 12;

// Character status (booleans)
let isAlive = true;
let hasWeapon = true;

// Calculate derived stats using arithmetic operations
// Health = strength * 10 + level * 5
let health = strength * 10 + level * 5;

// Mana = intelligence * 8 + level * 3
let mana = intelligence * 8 + level * 3;

// Speed = agility * 2 + level
let speed = agility * 2 + level;

// Create a character description using string concatenation
let characterDescription = "A brave " + characterClass.toLowerCase() + " ready for adventure!";

// Display character information
console.log("=== CHARACTER PROFILE ===");
console.log("Character: " + characterName + " the " + characterClass);
console.log("Level: " + level);
console.log("Stats: STR(" + strength + ") INT(" + intelligence + ") AGI(" + agility + ")");
console.log("Health: " + health + ", Mana: " + mana + ", Speed: " + speed);
console.log("Status: " + (isAlive ? "Alive" : "Dead") + ", " + (hasWeapon ? "Armed" : "Unarmed"));
console.log("Description: " + characterDescription);

console.log("\n=== BONUS IMPLEMENTATIONS ===");

// BONUS 1: Additional character attributes
let characterRace = "Human";
let characterGender = "Male";
let experiencePoints = 1250;

console.log("Race: " + characterRace);
console.log("Gender: " + characterGender);
console.log("Experience Points: " + experiencePoints);

// BONUS 2: Character power level calculation
let powerLevel = (strength + intelligence + agility) * level + (hasWeapon ? 50 : 0);
console.log("Power Level: " + powerLevel);

// BONUS 3: Stat validation (ensuring stats are within 1-100 range)
function validateStat(statName, statValue) {
    if (statValue < 1) {
        console.log("Warning: " + statName + " is too low (" + statValue + "). Setting to minimum value of 1.");
        return 1;
    } else if (statValue > 100) {
        console.log("Warning: " + statName + " is too high (" + statValue + "). Setting to maximum value of 100.");
        return 100;
    } else {
        console.log(statName + " is within valid range: " + statValue);
        return statValue;
    }
}

console.log("\n=== STAT VALIDATION ===");
let validatedStrength = validateStat("Strength", strength);
let validatedIntelligence = validateStat("Intelligence", intelligence);
let validatedAgility = validateStat("Agility", agility);

// Example with invalid stats
console.log("\nTesting with invalid stats:");
validateStat("Invalid Low Stat", -5);
validateStat("Invalid High Stat", 150);

console.log("\n=== ALTERNATIVE IMPLEMENTATIONS ===");

// Alternative 1: Using template literals (ES6 feature preview)
console.log("Using template literals:");
console.log(`Character: ${characterName} the ${characterClass}`);
console.log(`Level: ${level}`);
console.log(`Stats: STR(${strength}) INT(${intelligence}) AGI(${agility})`);

// Alternative 2: Creating a character object (preview of objects)
console.log("\nUsing object structure:");
let character = {
    name: characterName,
    class: characterClass,
    level: level,
    stats: {
        strength: strength,
        intelligence: intelligence,
        agility: agility
    },
    derivedStats: {
        health: health,
        mana: mana,
        speed: speed
    },
    status: {
        isAlive: isAlive,
        hasWeapon: hasWeapon
    },
    description: characterDescription
};

console.log("Character object created:", character);

// Alternative 3: Multiple character creation
console.log("\n=== MULTIPLE CHARACTERS ===");

// Character 2: Mage
let mage_name = "Gandalf";
let mage_class = "Mage";
let mage_level = 8;
let mage_str = 6;
let mage_int = 18;
let mage_agi = 10;
let mage_health = mage_str * 10 + mage_level * 5;
let mage_mana = mage_int * 8 + mage_level * 3;
let mage_speed = mage_agi * 2 + mage_level;

console.log("Character: " + mage_name + " the " + mage_class);
console.log("Level: " + mage_level);
console.log("Stats: STR(" + mage_str + ") INT(" + mage_int + ") AGI(" + mage_agi + ")");
console.log("Health: " + mage_health + ", Mana: " + mage_mana + ", Speed: " + mage_speed);

// Character 3: Rogue
let rogue_name = "Legolas";
let rogue_class = "Rogue";
let rogue_level = 6;
let rogue_str = 10;
let rogue_int = 12;
let rogue_agi = 18;
let rogue_health = rogue_str * 10 + rogue_level * 5;
let rogue_mana = rogue_int * 8 + rogue_level * 3;
let rogue_speed = rogue_agi * 2 + rogue_level;

console.log("\nCharacter: " + rogue_name + " the " + rogue_class);
console.log("Level: " + rogue_level);
console.log("Stats: STR(" + rogue_str + ") INT(" + rogue_int + ") AGI(" + rogue_agi + ")");
console.log("Health: " + rogue_health + ", Mana: " + rogue_mana + ", Speed: " + rogue_speed);

console.log("\n=== LEARNING NOTES ===");
console.log("Key concepts demonstrated:");
console.log("1. Variable declaration with 'let' keyword");
console.log("2. Different data types: string, number, boolean");
console.log("3. Arithmetic operations: +, -, *, /");
console.log("4. String concatenation with + operator");
console.log("5. Conditional (ternary) operator: condition ? true : false");
console.log("6. Console.log() for output");
console.log("7. Variable naming conventions (camelCase)");
console.log("8. Comments for code documentation");

/*
EXPECTED OUTPUT:
================
🎮 Character Creation System - SOLUTION 🎮

=== CHARACTER PROFILE ===
Character: Aragorn the Warrior
Level: 5
Stats: STR(15) INT(8) AGI(12)
Health: 175, Mana: 79, Speed: 29
Status: Alive, Armed
Description: A brave warrior ready for adventure!

=== BONUS IMPLEMENTATIONS ===
Race: Human
Gender: Male
Experience Points: 1250
Power Level: 225

=== STAT VALIDATION ===
Strength is within valid range: 15
Intelligence is within valid range: 8
Agility is within valid range: 12

Testing with invalid stats:
Warning: Invalid Low Stat is too low (-5). Setting to minimum value of 1.
Warning: Invalid High Stat is too high (150). Setting to maximum value of 100.

=== ALTERNATIVE IMPLEMENTATIONS ===
Using template literals:
Character: Aragorn the Warrior
Level: 5
Stats: STR(15) INT(8) AGI(12)

Using object structure:
Character object created: {name: "Aragorn", class: "Warrior", ...}

=== MULTIPLE CHARACTERS ===
Character: Gandalf the Mage
Level: 8
Stats: STR(6) INT(18) AGI(10)
Health: 100, Mana: 168, Speed: 28

Character: Legolas the Rogue
Level: 6
Stats: STR(10) INT(12) AGI(18)
Health: 130, Mana: 114, Speed: 42

=== LEARNING NOTES ===
Key concepts demonstrated:
1. Variable declaration with 'let' keyword
2. Different data types: string, number, boolean
3. Arithmetic operations: +, -, *, /
4. String concatenation with + operator
5. Conditional (ternary) operator: condition ? true : false
6. Console.log() for output
7. Variable naming conventions (camelCase)
8. Comments for code documentation
*/


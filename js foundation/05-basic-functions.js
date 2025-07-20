/*
🔧 CHALLENGE 5: Function Workshop
================================

Learn to create and use functions by building a toolkit of useful utilities!

TASKS:
1. Define functions with parameters
2. Return values from functions
3. Call functions with different arguments
4. Understand function scope basics
5. Create reusable code

TOPICS COVERED: Function definition, parameters, return values, function calls, basic scope
*/

console.log("🔧 Welcome to the Function Workshop! 🔧\n");

// CHALLENGE 5A: Basic Function Creation
console.log("--- CHALLENGE 5A: Basic Function Creation ---");

// TODO: Create a function to greet users
// function greetUser(name) {
//     // Return a greeting message
//     // Example: "Hello, Alice! Welcome to our website!"
// }

// TODO: Test the greet function
// let greeting1 = greetUser("Alice");
// let greeting2 = greetUser("Bob");
// console.log(greeting1);
// console.log(greeting2);

// TODO: Create a function to calculate rectangle area
// function calculateRectangleArea(length, width) {
//     // Calculate and return area
//     // Formula: length * width
// }

// TODO: Test the rectangle area function
// let area1 = calculateRectangleArea(5, 3);
// let area2 = calculateRectangleArea(10, 7);
// console.log(`Rectangle 1 area: ${area1}`);
// console.log(`Rectangle 2 area: ${area2}`);

// CHALLENGE 5B: Math Utility Functions
console.log("\n--- CHALLENGE 5B: Math Utility Functions ---");

// TODO: Create a function to check if a number is even
// function isEven(number) {
//     // Return true if even, false if odd
//     // Use modulo operator (%)
// }

// TODO: Create a function to find the maximum of three numbers
// function findMax(a, b, c) {
//     // Return the largest of the three numbers
//     // Use conditional statements
// }

// TODO: Create a function to calculate circle circumference
// function calculateCircumference(radius) {
//     // Formula: 2 * π * radius
//     // Use Math.PI for π
// }

// TODO: Test the math functions
// console.log(`Is 8 even? ${isEven(8)}`);
// console.log(`Is 7 even? ${isEven(7)}`);
// console.log(`Max of 15, 23, 9: ${findMax(15, 23, 9)}`);
// console.log(`Circumference of circle with radius 5: ${calculateCircumference(5).toFixed(2)}`);

// CHALLENGE 5C: String Processing Functions
console.log("\n--- CHALLENGE 5C: String Processing Functions ---");

// TODO: Create a function to count vowels in a string
// function countVowels(text) {
//     // Count a, e, i, o, u (case insensitive)
//     // Return the count
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     
//     for (let i = 0; i < text.length; i++) {
//         // Check if character is a vowel
//         // Increment count if it is
//     }
//     
//     return count;
// }

// TODO: Create a function to reverse a string
// function reverseString(text) {
//     // Return the string reversed
//     // Example: "hello" becomes "olleh"
// }

// TODO: Create a function to capitalize first letter of each word
// function capitalizeWords(sentence) {
//     // Split sentence into words
//     // Capitalize first letter of each word
//     // Join back together
//     // Example: "hello world" becomes "Hello World"
// }

// TODO: Test the string functions
// let testString = "JavaScript is awesome";
// console.log(`Original: "${testString}"`);
// console.log(`Vowel count: ${countVowels(testString)}`);
// console.log(`Reversed: "${reverseString(testString)}"`);
// console.log(`Capitalized: "${capitalizeWords(testString)}"`);

// CHALLENGE 5D: Temperature Converter
console.log("\n--- CHALLENGE 5D: Temperature Converter ---");

// TODO: Create function to convert Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     // Formula: (celsius * 9/5) + 32
// }

// TODO: Create function to convert Fahrenheit to Celsius
// function fahrenheitToCelsius(fahrenheit) {
//     // Formula: (fahrenheit - 32) * 5/9
// }

// TODO: Create a general temperature converter function
// function convertTemperature(temperature, fromUnit, toUnit) {
//     // Convert between C and F based on fromUnit and toUnit
//     // Use the functions above
//     // Return the converted temperature
//     
//     if (fromUnit === "C" && toUnit === "F") {
//         // Convert C to F
//     } else if (fromUnit === "F" && toUnit === "C") {
//         // Convert F to C
//     } else if (fromUnit === toUnit) {
//         // Same unit, return original temperature
//     } else {
//         // Invalid units
//         return "Invalid units";
//     }
// }

// TODO: Test temperature converter
// console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);
// console.log(`77°F = ${fahrenheitToCelsius(77).toFixed(1)}°C`);
// console.log(`0°C = ${convertTemperature(0, "C", "F")}°F`);
// console.log(`100°F = ${convertTemperature(100, "F", "C").toFixed(1)}°C`);

// CHALLENGE 5E: Grade Calculator
console.log("\n--- CHALLENGE 5E: Grade Calculator ---");

// TODO: Create function to calculate letter grade
// function calculateLetterGrade(score) {
//     // Return letter grade based on score
//     // A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60
// }

// TODO: Create function to calculate GPA for multiple grades
// function calculateGPA(grades) {
//     // grades is an array of letter grades
//     // A=4, B=3, C=2, D=1, F=0
//     // Return average GPA
//     
//     let totalPoints = 0;
//     
//     for (let i = 0; i < grades.length; i++) {
//         // Convert letter grade to points and add to total
//         switch (grades[i]) {
//             case "A":
//                 // Add 4 points
//                 break;
//             case "B":
//                 // Add 3 points
//                 break;
//             // Add other cases
//         }
//     }
//     
//     // Return average
// }

// TODO: Create function to determine if student passes
// function isPassingGrade(gpa) {
//     // Return true if GPA >= 2.0, false otherwise
// }

// TODO: Test grade calculator
// let studentScores = [85, 92, 78, 88, 95];
// let letterGrades = [];

// console.log("Student Scores and Grades:");
// for (let i = 0; i < studentScores.length; i++) {
//     let grade = calculateLetterGrade(studentScores[i]);
//     letterGrades.push(grade);
//     console.log(`Score: ${studentScores[i]} = Grade: ${grade}`);
// }

// let gpa = calculateGPA(letterGrades);
// let passing = isPassingGrade(gpa);
// console.log(`\nGPA: ${gpa.toFixed(2)}`);
// console.log(`Passing: ${passing ? "Yes" : "No"}`);

/*
BONUS CHALLENGES:
1. Create a function that generates random passwords
2. Build a simple calculator with add, subtract, multiply, divide functions
3. Create a function that validates email addresses
4. Build a text-based menu system using functions

EXPECTED OUTPUT EXAMPLE:
========================
🔧 Welcome to the Function Workshop! 🔧

--- CHALLENGE 5A: Basic Function Creation ---
Hello, Alice! Welcome to our website!
Hello, Bob! Welcome to our website!
Rectangle 1 area: 15
Rectangle 2 area: 70

--- CHALLENGE 5B: Math Utility Functions ---
Is 8 even? true
Is 7 even? false
Max of 15, 23, 9: 23
Circumference of circle with radius 5: 31.42

--- CHALLENGE 5C: String Processing Functions ---
Original: "JavaScript is awesome"
Vowel count: 8
Reversed: "emosewa si tpircSavaJ"
Capitalized: "Javascript Is Awesome"

--- CHALLENGE 5D: Temperature Converter ---
25°C = 77°F
77°F = 25.0°C
0°C = 32°F
100°F = 37.8°C

--- CHALLENGE 5E: Grade Calculator ---
Student Scores and Grades:
Score: 85 = Grade: B
Score: 92 = Grade: A
Score: 78 = Grade: C
Score: 88 = Grade: B
Score: 95 = Grade: A

GPA: 3.20
Passing: Yes
*/


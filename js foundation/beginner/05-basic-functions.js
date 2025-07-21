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

// TODO: Create a function `greetUser` that takes a name parameter and returns a greeting string
// Example: greetUser("Alice") should return "Hello, Alice!"


// Test the greet function
// let greeting1 = greetUser("Alice");
// let greeting2 = greetUser("Bob");
// console.log(greeting1);  // Expected: "Hello, Alice!"
// console.log(greeting2);  // Expected: "Hello, Bob!"

// TODO: Create a function `calculateRectangleArea` that takes width and height parameters
// and returns the area (width * height)

// Test the rectangle area function
// let area1 = calculateRectangleArea(5, 3);
// let area2 = calculateRectangleArea(10, 7);
// console.log(`Rectangle 1 area: ${area1}`);  // Expected: Rectangle 1 area: 15
// console.log(`Rectangle 2 area: ${area2}`);  // Expected: Rectangle 2 area: 70

// CHALLENGE 5B: Math Utility Functions
console.log("\n--- CHALLENGE 5B: Math Utility Functions ---");

// TODO: Create a function `isEven` that takes a number and returns true if even, false if odd


// TODO: Create a function `findMax` that takes three numbers and returns the largest one


// TODO: Create a function `calculateCircumference` that takes a radius and returns the circumference
// Formula: 2 * Math.PI * radius


// Test the math functions
// console.log(`Is 8 even? ${isEven(8)}`);  // Expected: Is 8 even? true
// console.log(`Is 7 even? ${isEven(7)}`);  // Expected: Is 7 even? false
// console.log(`Max of 15, 23, 9: ${findMax(15, 23, 9)}`);  // Expected: Max of 15, 23, 9: 23
// console.log(`Circumference of circle with radius 5: ${calculateCircumference(5).toFixed(2)}`);  // Expected: Circumference of circle with radius 5: 31.42

// CHALLENGE 5C: String Processing Functions
console.log("\n--- CHALLENGE 5C: String Processing Functions ---");

// TODO: Create a function `countVowels` that takes a string and returns the number of vowels (a, e, i, o, u)
// Count both uppercase and lowercase vowels

// TODO: Create a function `reverseString` that takes a string and returns it reversed


// TODO: Create a function `capitalizeWords` that takes a string and returns it with the first letter
// of each word capitalized


// Test the string functions
// let testString = "JavaScript is awesome";
// console.log(`Original: "${testString}"`);
// console.log(`Vowel count: ${countVowels(testString)}`);  // Expected: Vowel count: 7
// console.log(`Reversed: "${reverseString(testString)}"`);  // Expected: Reversed: "emosewa si tpircSavaJ"
// console.log(`Capitalized: "${capitalizeWords(testString)}"`);  // Expected: Capitalized: "Javascript Is Awesome"

// CHALLENGE 5D: Temperature Converter
console.log("\n--- CHALLENGE 5D: Temperature Converter ---");

// TODO: Create function `celsiusToFahrenheit` that converts Celsius to Fahrenheit
// Formula: (celsius * 9/5) + 32

// TODO: Create function `fahrenheitToCelsius` that converts Fahrenheit to Celsius
// Formula: (fahrenheit - 32) * 5/9

// TODO: Create a general `convertTemperature` function that takes (value, fromUnit, toUnit)
// fromUnit and toUnit should be "C" or "F"
// Use the above functions internally

// Test temperature converter
// console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);  // Expected: 25°C = 77°F
// console.log(`77°F = ${fahrenheitToCelsius(77).toFixed(1)}°C`);  // Expected: 77°F = 25.0°C
// console.log(`0°C = ${convertTemperature(0, "C", "F")}°F`);  // Expected: 0°C = 32°F
// console.log(`100°F = ${convertTemperature(100, "F", "C").toFixed(1)}°C`);  // Expected: 100°F = 37.8°C

// CHALLENGE 5E: Grade Calculator
console.log("\n--- CHALLENGE 5E: Grade Calculator ---");

// TODO: Create function `calculateLetterGrade` that takes a numerical score (0-100)
// and returns the letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59)
// function calculateLetterGrade(score) {
//     // Return letter grade based on score
// }

// TODO: Create function `calculateGPA` for multiple letter grades
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
//             case "C":
//                 // Add 2 points
//                 break;
//             case "D":
//                 // Add 1 point
//                 break;
//             case "F":
//                 // Add 0 points
//                 break;
//         }
//     }
//     
//     // Return average GPA
// }

// TODO: Create function `isPassingGrade` that takes a GPA number
// function isPassingGrade(gpa) {
//     // Return true if GPA >= 2.0, false otherwise
// }

// TODO: Uncomment and test the grade calculator
// let studentScores = [85, 92, 78, 88, 95];
// let letterGrades = [];

// console.log("Student Scores and Grades:");
// for (let i = 0; i < studentScores.length; i++) {
//     let grade = calculateLetterGrade(studentScores[i]);
//     letterGrades.push(grade);
//     console.log(`Score: ${studentScores[i]} = Grade: ${grade}`);
// }
// Expected output:
// Score: 85 = Grade: B
// Score: 92 = Grade: A
// Score: 78 = Grade: C
// Score: 88 = Grade: B
// Score: 95 = Grade: A

// let gpa = calculateGPA(letterGrades);
// let passing = isPassingGrade(gpa);
// console.log(`\nGPA: ${gpa.toFixed(2)}`);  // Expected: GPA: 3.20
// console.log(`Passing: ${passing ? "Yes" : "No"}`);  // Expected: Passing: Yes


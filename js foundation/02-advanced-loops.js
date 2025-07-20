/*
🧮 INTERMEDIATE CHALLENGE 2: Data Processing & Algorithm Workshop
================================================================

Master advanced looping techniques by solving real-world data processing problems!
This challenge focuses on nested loops, complex iterations, and algorithmic thinking.

TASKS:
1. Process multi-dimensional data with nested loops
2. Implement search and sorting algorithms
3. Solve mathematical problems with loops
4. Handle complex data transformations
5. Optimize loop performance

TOPICS COVERED: Nested loops, algorithm implementation, data processing, optimization
*/

console.log("🧮 Data Processing & Algorithm Workshop 🧮\n");

// CHALLENGE 2A: Sales Data Analysis
console.log("--- CHALLENGE 2A: Sales Data Analysis ---");

// Multi-dimensional sales data: [month][week][day]
let salesData = [
    // January - 4 weeks, 7 days each
    [
        [120, 150, 180, 200, 250, 300, 280], // Week 1
        [130, 160, 190, 210, 260, 320, 290], // Week 2
        [140, 170, 200, 220, 270, 330, 300], // Week 3
        [150, 180, 210, 230, 280, 340, 310]  // Week 4
    ],
    // February - 4 weeks
    [
        [160, 190, 220, 240, 290, 350, 320],
        [170, 200, 230, 250, 300, 360, 330],
        [180, 210, 240, 260, 310, 370, 340],
        [190, 220, 250, 270, 320, 380, 350]
    ],
    // March - 4 weeks
    [
        [200, 230, 260, 280, 330, 400, 370],
        [210, 240, 270, 290, 340, 410, 380],
        [220, 250, 280, 300, 350, 420, 390],
        [230, 260, 290, 310, 360, 430, 400]
    ]
];

let monthNames = ["January", "February", "March"];
let dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// TODO: Calculate total sales for each month
console.log("Monthly Sales Totals:");
// for (let month = 0; month < salesData.length; month++) {
//     let monthlyTotal = 0;
//     
//     // Nested loops to sum all days in all weeks of the month
//     for (let week = 0; week < salesData[month].length; week++) {
//         for (let day = 0; day < salesData[month][week].length; day++) {
//             // Add daily sales to monthly total
//         }
//     }
//     
//     console.log(`${monthNames[month]}: $${monthlyTotal}`);
// }

// TODO: Find the best and worst sales days
console.log("\nBest and Worst Sales Days:");
let bestSale = 0;
let worstSale = Infinity;
let bestDay = "";
let worstDay = "";

// for (let month = 0; month < salesData.length; month++) {
//     for (let week = 0; week < salesData[month].length; week++) {
//         for (let day = 0; day < salesData[month][week].length; day++) {
//             let dailySales = salesData[month][week][day];
//             
//             // Check if this is the best day
//             if (/* condition */) {
//                 bestSale = dailySales;
//                 bestDay = `${monthNames[month]} Week ${week + 1} ${dayNames[day]}`;
//             }
//             
//             // Check if this is the worst day
//             if (/* condition */) {
//                 worstSale = dailySales;
//                 worstDay = `${monthNames[month]} Week ${week + 1} ${dayNames[day]}`;
//             }
//         }
//     }
// }

// console.log(`Best day: ${bestDay} - $${bestSale}`);
// console.log(`Worst day: ${worstDay} - $${worstSale}`);

// TODO: Calculate average sales by day of week
console.log("\nAverage Sales by Day of Week:");
// for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
//     let totalForDay = 0;
//     let countForDay = 0;
//     
//     // Sum all sales for this day of week across all months and weeks
//     for (let month = 0; month < salesData.length; month++) {
//         for (let week = 0; week < salesData[month].length; week++) {
//             // Add sales for this specific day of week
//             totalForDay += salesData[month][week][dayOfWeek];
//             countForDay++;
//         }
//     }
//     
//     let average = totalForDay / countForDay;
//     console.log(`${dayNames[dayOfWeek]}: $${average.toFixed(2)}`);
// }

// CHALLENGE 2B: Number Pattern Generator
console.log("\n--- CHALLENGE 2B: Number Pattern Generator ---");

// TODO: Generate multiplication table
console.log("Multiplication Table (1-10):");
// for (let i = 1; i <= 10; i++) {
//     let row = "";
//     for (let j = 1; j <= 10; j++) {
//         let product = i * j;
//         // Format with padding for alignment
//         row += product.toString().padStart(4, " ");
//     }
//     console.log(row);
// }

// TODO: Generate Pascal's Triangle
console.log("\nPascal's Triangle (10 rows):");
// for (let row = 0; row < 10; row++) {
//     let line = "";
//     
//     // Add spaces for centering
//     for (let space = 0; space < 10 - row; space++) {
//         line += " ";
//     }
//     
//     // Calculate and display Pascal's triangle values
//     for (let col = 0; col <= row; col++) {
//         // Pascal's triangle formula: C(row, col) = row! / (col! * (row-col)!)
//         // Or use the recursive relation: C(row, col) = C(row-1, col-1) + C(row-1, col)
//         
//         let value = 1;
//         if (col > 0 && col < row) {
//             // Calculate combination value
//             // You can implement factorial or use the recursive approach
//         }
//         
//         line += value + " ";
//     }
//     
//     console.log(line);
// }

// CHALLENGE 2C: Search Algorithms
console.log("\n--- CHALLENGE 2C: Search Algorithms ---");

let numbers = [3, 7, 12, 18, 23, 29, 34, 41, 47, 52, 58, 63, 69, 74, 81, 87, 92, 98];
let searchTarget = 47;

// TODO: Implement Linear Search
console.log(`Searching for ${searchTarget} in array...`);

// Linear Search
let linearSearchSteps = 0;
let linearSearchFound = false;
let linearSearchIndex = -1;

// for (let i = 0; i < numbers.length; i++) {
//     linearSearchSteps++;
//     
//     if (numbers[i] === searchTarget) {
//         linearSearchFound = true;
//         linearSearchIndex = i;
//         break;
//     }
// }

// console.log(`Linear Search: Found=${linearSearchFound}, Index=${linearSearchIndex}, Steps=${linearSearchSteps}`);

// TODO: Implement Binary Search (array is already sorted)
let binarySearchSteps = 0;
let binarySearchFound = false;
let binarySearchIndex = -1;

let left = 0;
let right = numbers.length - 1;

// while (left <= right) {
//     binarySearchSteps++;
//     
//     let mid = Math.floor((left + right) / 2);
//     
//     if (numbers[mid] === searchTarget) {
//         binarySearchFound = true;
//         binarySearchIndex = mid;
//         break;
//     } else if (numbers[mid] < searchTarget) {
//         // Search right half
//         left = mid + 1;
//     } else {
//         // Search left half
//         right = mid - 1;
//     }
// }

// console.log(`Binary Search: Found=${binarySearchFound}, Index=${binarySearchIndex}, Steps=${binarySearchSteps}`);

// CHALLENGE 2D: Sorting Algorithms
console.log("\n--- CHALLENGE 2D: Sorting Algorithms ---");

let unsortedArray = [64, 34, 25, 12, 22, 11, 90, 88, 76, 50, 42];
console.log(`Original array: [${unsortedArray.join(", ")}]`);

// TODO: Implement Bubble Sort
let bubbleSortArray = [...unsortedArray]; // Create a copy
let bubbleSortSwaps = 0;

// for (let i = 0; i < bubbleSortArray.length - 1; i++) {
//     for (let j = 0; j < bubbleSortArray.length - i - 1; j++) {
//         // Compare adjacent elements
//         if (bubbleSortArray[j] > bubbleSortArray[j + 1]) {
//             // Swap elements
//             let temp = bubbleSortArray[j];
//             bubbleSortArray[j] = bubbleSortArray[j + 1];
//             bubbleSortArray[j + 1] = temp;
//             bubbleSortSwaps++;
//         }
//     }
// }

// console.log(`Bubble Sort: [${bubbleSortArray.join(", ")}] - ${bubbleSortSwaps} swaps`);

// TODO: Implement Selection Sort
let selectionSortArray = [...unsortedArray]; // Create a copy
let selectionSortSwaps = 0;

// for (let i = 0; i < selectionSortArray.length - 1; i++) {
//     let minIndex = i;
//     
//     // Find the minimum element in remaining array
//     for (let j = i + 1; j < selectionSortArray.length; j++) {
//         if (selectionSortArray[j] < selectionSortArray[minIndex]) {
//             minIndex = j;
//         }
//     }
//     
//     // Swap if needed
//     if (minIndex !== i) {
//         let temp = selectionSortArray[i];
//         selectionSortArray[i] = selectionSortArray[minIndex];
//         selectionSortArray[minIndex] = temp;
//         selectionSortSwaps++;
//     }
// }

// console.log(`Selection Sort: [${selectionSortArray.join(", ")}] - ${selectionSortSwaps} swaps`);

// CHALLENGE 2E: Mathematical Sequences
console.log("\n--- CHALLENGE 2E: Mathematical Sequences ---");

// TODO: Generate Fibonacci sequence
console.log("Fibonacci Sequence (first 15 numbers):");
let fibSequence = [];
// for (let i = 0; i < 15; i++) {
//     if (i === 0) {
//         fibSequence[i] = 0;
//     } else if (i === 1) {
//         fibSequence[i] = 1;
//     } else {
//         // Each number is sum of previous two
//         fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
//     }
// }
// console.log(fibSequence.join(", "));

// TODO: Find prime numbers using Sieve of Eratosthenes
console.log("\nPrime Numbers up to 100:");
let limit = 100;
let isPrime = new Array(limit + 1).fill(true);
isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

// for (let i = 2; i * i <= limit; i++) {
//     if (isPrime[i]) {
//         // Mark all multiples of i as not prime
//         for (let j = i * i; j <= limit; j += i) {
//             isPrime[j] = false;
//         }
//     }
// }

// Collect prime numbers
let primes = [];
// for (let i = 2; i <= limit; i++) {
//     if (isPrime[i]) {
//         primes.push(i);
//     }
// }
// console.log(primes.join(", "));

// CHALLENGE 2F: Performance Optimization
console.log("\n--- CHALLENGE 2F: Performance Optimization ---");

// TODO: Compare different approaches to find sum of squares
let testArray = [];
for (let i = 1; i <= 1000; i++) {
    testArray.push(i);
}

console.log("Calculating sum of squares for numbers 1-1000...");

// Method 1: Simple loop
let start1 = Date.now();
let sum1 = 0;
// for (let i = 0; i < testArray.length; i++) {
//     sum1 += testArray[i] * testArray[i];
// }
let time1 = Date.now() - start1;

// Method 2: For...of loop
let start2 = Date.now();
let sum2 = 0;
// for (let num of testArray) {
//     sum2 += num * num;
// }
let time2 = Date.now() - start2;

// Method 3: Mathematical formula (n(n+1)(2n+1)/6)
let start3 = Date.now();
let n = 1000;
let sum3 = (n * (n + 1) * (2 * n + 1)) / 6;
let time3 = Date.now() - start3;

// console.log(`Method 1 (for loop): ${sum1} - ${time1}ms`);
// console.log(`Method 2 (for...of): ${sum2} - ${time2}ms`);
// console.log(`Method 3 (formula): ${sum3} - ${time3}ms`);

/*
BONUS CHALLENGES:
1. Implement merge sort algorithm
2. Create a maze solver using nested loops
3. Build a simple game of life simulation
4. Implement matrix multiplication
5. Create a word search puzzle solver

EXPECTED OUTPUT EXAMPLE:
========================
🧮 Data Processing & Algorithm Workshop 🧮

--- CHALLENGE 2A: Sales Data Analysis ---
Monthly Sales Totals:
January: $6930
February: $8610
March: $10290

Best and Worst Sales Days:
Best day: March Week 4 Sun - $430
Worst day: January Week 1 Mon - $120

Average Sales by Day of Week:
Mon: $175.00
Tue: $205.00
Wed: $235.00
Thu: $255.00
Fri: $305.00
Sat: $375.00
Sun: $345.00

--- CHALLENGE 2B: Number Pattern Generator ---
Multiplication Table (1-10):
   1   2   3   4   5   6   7   8   9  10
   2   4   6   8  10  12  14  16  18  20
   3   6   9  12  15  18  21  24  27  30
...

Pascal's Triangle (10 rows):
         1
        1 1
       1 2 1
      1 3 3 1
     1 4 6 4 1
...

--- CHALLENGE 2C: Search Algorithms ---
Searching for 47 in array...
Linear Search: Found=true, Index=8, Steps=9
Binary Search: Found=true, Index=8, Steps=4

--- CHALLENGE 2D: Sorting Algorithms ---
Original array: [64, 34, 25, 12, 22, 11, 90, 88, 76, 50, 42]
Bubble Sort: [11, 12, 22, 25, 34, 42, 50, 64, 76, 88, 90] - 35 swaps
Selection Sort: [11, 12, 22, 25, 34, 42, 50, 64, 76, 88, 90] - 10 swaps
*/


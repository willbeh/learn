// JavaScript Lambda Function Challenges
// Each challenge shows where lambda functions are needed and the expected result

// ==================== CHALLENGE 1 ====================
// DESCRIPTION: Array Transformation Pipeline
// You're building an e-commerce pricing system that needs to calculate final prices.
// 
// REQUIREMENTS:
// 1. Add 20% tax to each price (multiply by 1.2)
// 2. Apply a $5 discount to any price that's over $50 (subtract 5 if price > 50)
// 3. Round all results to 2 decimal places
//
// WHY LAMBDA FUNCTIONS?
// - Without lambdas: You'd need 3 separate for-loops or 3 named functions
// - With lambdas: Clean, readable chain of transformations using map()
// - Lambda functions allow you to chain operations: prices.map().map().map()
// 
// HINT: Use array.map() three times in a chain, each with a lambda function

const prices = [29.99, 45.50, 89.99, 15.25, 67.80];

// Example transformation breakdown:
// 29.99 → 35.988 (tax) → 35.988 (no discount) → 35.99 (rounded)
// 89.99 → 107.988 (tax) → 102.988 (discount) → 102.99 (rounded)

// TODO: Implement your lambda function solution here
// const result1 = prices.map(...).map(...).map(...);
// Expected result: [35.99, 49.60, 102.99, 18.30, 76.36]

// ==================== CHALLENGE 2 ====================
// DESCRIPTION: Event-Driven User Actions
// You're building a UI where buttons need click handlers created dynamically.
// Each button should have a handler that logs a specific message when "clicked".
//
// REQUIREMENTS:
// 1. Create a click handler function for each button
// 2. Each handler should log: "Button [id] clicked: [message]"
// 3. Call all handlers to simulate button clicks
//
// WHY LAMBDA FUNCTIONS?
// - Without lambdas: You'd have to write separate named functions for each button
// - With lambdas: You can dynamically create handlers that "capture" the button data
// - Lambda functions create closures that remember the specific button's data
//
// HINT: Use map() to create handlers, then forEach() to call them
// Each handler should be a lambda that captures the button's id and message

const buttonActions = [
  { id: 'save', action: 'save', message: 'Data saved!' },
  { id: 'delete', action: 'delete', message: 'Item deleted!' },
  { id: 'cancel', action: 'cancel', message: 'Action cancelled!' }
];

// Example: The save button handler should log "Button save clicked: Data saved!"

// TODO: Implement your lambda function solution here
// const handlers = buttonActions.map(...);
// handlers.forEach(handler => handler()); // Simulate clicking each button
// Expected output when buttons are "clicked":
// "Button save clicked: Data saved!"
// "Button delete clicked: Item deleted!"
// "Button cancel clicked: Action cancelled!"

// ==================== CHALLENGE 3 ====================
// DESCRIPTION: Asynchronous Data Processing
// You're building a user management system that processes user data asynchronously.
// Only adult, active users should be processed and their data transformed.
//
// REQUIREMENTS:
// 1. Filter users who are 18+ AND active
// 2. Transform each valid user: uppercase the name, add processed: true
// 3. Simulate async processing with Promise.all()
// 4. Handle the async operation properly
//
// WHY LAMBDA FUNCTIONS?
// - Without lambdas: Complex nested callbacks and verbose async handling
// - With lambdas: Clean async/await with functional programming patterns
// - Lambda functions work perfectly with Promise.all(), filter(), and map()
// - Async lambdas make Promise chains readable and maintainable
//
// HINT: Use filter() with a lambda to get valid users, then map() with an async lambda
// Wrap the map() result in Promise.all() to handle multiple async operations

const userData = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 17, active: false },
  { id: 3, name: 'Charlie', age: 30, active: true },
  { id: 4, name: 'Diana', age: 16, active: true }
];

// Example filtering: Bob (17, false) and Diana (16, true) should be excluded
// Example transformation: 'Alice' becomes 'ALICE' with processed: true added

// TODO: Implement your lambda function solution here
// const processUsers = async () => {
//     const result3 = await Promise.all(userData.filter(...).map(...));
// };
// processUsers();
// Expected result: [
//   { id: 1, name: 'ALICE', age: 25, active: true, processed: true },
//   { id: 3, name: 'CHARLIE', age: 30, active: true, processed: true }
// ]

// ==================== YOUR SOLUTIONS GO HERE ====================
// Challenge 1: Create a transformation pipeline using lambda functions
// Expected result: [35.99, 49.60, 102.99, 18.30, 76.36]

// Challenge 2: Create dynamic event handlers using lambda functions
// Expected output when handlers are called:
// "Button save clicked: Data saved!"
// "Button delete clicked: Item deleted!"
// "Button cancel clicked: Action cancelled!"

// Challenge 3: Create async processing pipeline using lambda functions
// Expected result: [
//   { id: 1, name: 'ALICE', age: 25, active: true, processed: true },
//   { id: 3, name: 'CHARLIE', age: 30, active: true, processed: true }
// ]

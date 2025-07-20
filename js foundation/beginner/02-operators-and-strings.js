/*
🍕 CHALLENGE 2: Pizza Order Calculator
=====================================

You're building a pizza ordering system! 
Help customers calculate their order total and create order summaries.

TASKS:
1. Use arithmetic operators to calculate costs
2. Use assignment operators for running totals
3. Practice string concatenation and template literals
4. Use comparison operators for discounts

TOPICS COVERED: Arithmetic operators, assignment operators, string handling, comparison operators
*/

// Pizza menu prices
const SMALL_PIZZA = 8.99;
const MEDIUM_PIZZA = 12.99;
const LARGE_PIZZA = 16.99;
const TOPPING_PRICE = 1.50;
const DELIVERY_FEE = 3.00;

// TODO: Customer order details - fill these in
let customerName = ""; // Add a customer name
let smallPizzas = 0;   // Number of small pizzas
let mediumPizzas = 0;  // Number of medium pizzas  
let largePizzas = 0;   // Number of large pizzas
let totalToppings = 0; // Total number of toppings across all pizzas

// TODO: Calculate subtotals using arithmetic operators
// let smallPizzaTotal = ?
// let mediumPizzaTotal = ?
// let largePizzaTotal = ?
// let toppingsTotal = ?

// TODO: Calculate order subtotal using assignment operators
// Start with 0 and use += to add each component
// let orderSubtotal = 0;
// orderSubtotal += ?
// orderSubtotal += ?
// etc...

// TODO: Apply delivery fee if order is under $25
// let deliveryCharge = ?

// TODO: Calculate tax (8.5%)
// let tax = ?

// TODO: Calculate final total
// let finalTotal = ?

// TODO: Check for discount eligibility
// Free delivery if order is over $30
// let qualifiesForFreeDelivery = ?

// 10% discount if ordering 3+ large pizzas
// let qualifiesForLargeOrderDiscount = ?

// TODO: Apply discounts if eligible
// if (qualifiesForFreeDelivery) {
//     // Remove delivery charge
// }

// if (qualifiesForLargeOrderDiscount) {
//     // Apply 10% discount to subtotal
// }

// TODO: Create order summary using string concatenation
// let orderSummary = "=== PIZZA ORDER SUMMARY ===" + "\n";
// orderSummary += "Customer: " + customerName + "\n";
// Add more lines...

// TODO: Create a receipt using template literals
// let receipt = `
// 🍕 MARIO'S PIZZA PALACE 🍕
// Customer: ${customerName}
// 
// Order Details:
// Small Pizzas (${smallPizzas}): $${smallPizzaTotal.toFixed(2)}
// Add more lines using template literals...
// `;

// TODO: Display results
// console.log(orderSummary);
// console.log(receipt);

/*
BONUS CHALLENGES:
1. Add a loyalty program (every 10th pizza is free)
2. Create different discount tiers based on order size
3. Add a tip calculator
4. Validate that at least one pizza is ordered

EXPECTED OUTPUT EXAMPLE:
========================
=== PIZZA ORDER SUMMARY ===
Customer: John Doe
Small Pizzas: 2 x $8.99 = $17.98
Medium Pizzas: 1 x $12.99 = $12.99
Toppings: 5 x $1.50 = $7.50
Subtotal: $38.47
Tax: $3.27
Delivery: FREE (order over $30)
TOTAL: $41.74

🍕 MARIO'S PIZZA PALACE 🍕
Thank you for your order, John!
Estimated delivery: 25-30 minutes
*/


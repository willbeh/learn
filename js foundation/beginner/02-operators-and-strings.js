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

// TODO: Customer order details - fill these in with sample data
let customerName = ""; // Add a customer name (e.g., "John Doe")
let smallPizzas = 0;   // Number of small pizzas (e.g., 2)
let mediumPizzas = 0;  // Number of medium pizzas (e.g., 1)
let largePizzas = 0;   // Number of large pizzas (e.g., 0)
let totalToppings = 0; // Total number of toppings across all pizzas (e.g., 5)

// TODO: Calculate subtotals using arithmetic operators
// Multiply quantity by price for each pizza size
// let smallPizzaTotal = smallPizzas * SMALL_PIZZA;
// let mediumPizzaTotal = mediumPizzas * MEDIUM_PIZZA;
// let largePizzaTotal = largePizzas * LARGE_PIZZA;
// let toppingsTotal = totalToppings * TOPPING_PRICE;

// TODO: Calculate order subtotal using assignment operators
// Start with 0 and use += to add each component
// let orderSubtotal = 0;
// orderSubtotal += smallPizzaTotal;
// orderSubtotal += mediumPizzaTotal;
// orderSubtotal += largePizzaTotal;
// orderSubtotal += toppingsTotal;

// TODO: Apply delivery fee if order is under $25
// Use comparison operator and conditional assignment
// let deliveryCharge = orderSubtotal < 25 ? DELIVERY_FEE : 0;

// TODO: Calculate tax (8.5% of subtotal + delivery)
// let tax = (orderSubtotal + deliveryCharge) * 0.085;

// TODO: Calculate final total before any discounts
// let finalTotal = orderSubtotal + deliveryCharge + tax;

// TODO: Check for discount eligibility using comparison operators
// Free delivery if order subtotal is over $30
// let qualifiesForFreeDelivery = orderSubtotal > 30;

// 10% discount if ordering 3+ large pizzas
// let qualifiesForLargeOrderDiscount = largePizzas >= 3;

// TODO: Apply discounts if eligible and recalculate total
// if (qualifiesForFreeDelivery) {
//     // Remove delivery charge and recalculate
//     finalTotal -= deliveryCharge;
//     deliveryCharge = 0;
// }

// if (qualifiesForLargeOrderDiscount) {
//     // Apply 10% discount to subtotal, then recalculate tax and total
//     orderSubtotal = orderSubtotal * 0.9;
//     tax = (orderSubtotal + deliveryCharge) * 0.085;
//     finalTotal = orderSubtotal + deliveryCharge + tax;
// }

// TODO: Create order summary using string concatenation
// let orderSummary = "=== PIZZA ORDER SUMMARY ===" + "\n";
// orderSummary += "Customer: " + customerName + "\n";
// orderSummary += "Small Pizzas: " + smallPizzas + " x $" + SMALL_PIZZA + " = $" + smallPizzaTotal.toFixed(2) + "\n";
// orderSummary += "Medium Pizzas: " + mediumPizzas + " x $" + MEDIUM_PIZZA + " = $" + mediumPizzaTotal.toFixed(2) + "\n";
// orderSummary += "Large Pizzas: " + largePizzas + " x $" + LARGE_PIZZA + " = $" + largePizzaTotal.toFixed(2) + "\n";
// orderSummary += "Toppings: " + totalToppings + " x $" + TOPPING_PRICE + " = $" + toppingsTotal.toFixed(2) + "\n";
// orderSummary += "Subtotal: $" + orderSubtotal.toFixed(2) + "\n";
// orderSummary += "Tax: $" + tax.toFixed(2) + "\n";
// orderSummary += "Delivery: " + (deliveryCharge > 0 ? "$" + deliveryCharge.toFixed(2) : "FREE") + "\n";
// orderSummary += "TOTAL: $" + finalTotal.toFixed(2);

// TODO: Create a receipt using template literals
// let receipt = `
// 🍕 MARIO'S PIZZA PALACE 🍕
// Customer: ${customerName}
// 
// Order Details:
// Small Pizzas (${smallPizzas}): $${smallPizzaTotal.toFixed(2)}
// Medium Pizzas (${mediumPizzas}): $${mediumPizzaTotal.toFixed(2)}
// Large Pizzas (${largePizzas}): $${largePizzaTotal.toFixed(2)}
// Toppings (${totalToppings}): $${toppingsTotal.toFixed(2)}
// 
// Subtotal: $${orderSubtotal.toFixed(2)}
// Tax (8.5%): $${tax.toFixed(2)}
// Delivery: ${deliveryCharge > 0 ? '$' + deliveryCharge.toFixed(2) : 'FREE'}
// 
// TOTAL: $${finalTotal.toFixed(2)}
// 
// Thank you for your order!
// Estimated delivery: 25-30 minutes
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

EXPECTED OUTPUT EXAMPLE (with sample data: 2 small, 1 medium, 0 large, 5 toppings):
===================================================================================
=== PIZZA ORDER SUMMARY ===
Customer: John Doe
Small Pizzas: 2 x $8.99 = $17.98
Medium Pizzas: 1 x $12.99 = $12.99
Large Pizzas: 0 x $16.99 = $0.00
Toppings: 5 x $1.50 = $7.50
Subtotal: $38.47
Tax: $3.27
Delivery: FREE
TOTAL: $41.74

🍕 MARIO'S PIZZA PALACE 🍕
Customer: John Doe

Order Details:
Small Pizzas (2): $17.98
Medium Pizzas (1): $12.99
Large Pizzas (0): $0.00
Toppings (5): $7.50

Subtotal: $38.47
Tax (8.5%): $3.27
Delivery: FREE

TOTAL: $41.74

Thank you for your order!
Estimated delivery: 25-30 minutes
*/


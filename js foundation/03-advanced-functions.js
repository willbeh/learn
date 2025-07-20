/*
🔧 INTERMEDIATE CHALLENGE 3: Advanced Function Workshop
======================================================

Master advanced function concepts by building a comprehensive toolkit!
This challenge covers scope, closures, higher-order functions, and function design patterns.

TASKS:
1. Understand and apply variable scoping rules
2. Create and use closures for data encapsulation
3. Build higher-order functions
4. Implement function factories and utilities
5. Handle complex parameter scenarios

TOPICS COVERED: Function scope, closures, higher-order functions, function factories, advanced parameters
*/

console.log("🔧 Advanced Function Workshop 🔧\n");

// CHALLENGE 3A: Scope and Variable Management
console.log("--- CHALLENGE 3A: Scope and Variable Management ---");

// Global variables
let globalCounter = 0;
var globalMessage = "Hello from global scope";

// TODO: Create a function that demonstrates different scoping behaviors
function scopeDemo() {
    // Function scope variables
    let functionVar = "Function scope with let";
    var functionVarOld = "Function scope with var";
    
    console.log("Inside scopeDemo function:");
    console.log("- Global counter:", globalCounter);
    console.log("- Function var (let):", functionVar);
    console.log("- Function var (var):", functionVarOld);
    
    // TODO: Create a block scope demonstration
    if (true) {
        let blockVar = "Block scope with let";
        var blockVarOld = "Block scope with var";
        const blockConst = "Block scope with const";
        
        console.log("Inside if block:");
        console.log("- Block var (let):", blockVar);
        console.log("- Block var (var):", blockVarOld);
        console.log("- Block const:", blockConst);
    }
    
    // TODO: Try to access block variables outside the block
    console.log("After if block:");
    // console.log("- Block var (let):", blockVar); // This will cause an error
    console.log("- Block var (var):", blockVarOld); // This works
    // console.log("- Block const:", blockConst); // This will cause an error
    
    // TODO: Demonstrate variable shadowing
    let globalCounter = 100; // Shadows the global variable
    console.log("- Shadowed global counter:", globalCounter);
}

// TODO: Call the scope demo function
// scopeDemo();

// TODO: Check global counter after function call
// console.log("Global counter after function:", globalCounter);

// CHALLENGE 3B: Closure Workshop
console.log("\n--- CHALLENGE 3B: Closure Workshop ---");

// TODO: Create a counter factory using closures
function createCounter(initialValue = 0, step = 1) {
    // Private variable (enclosed in closure)
    let count = initialValue;
    
    // Return an object with methods that have access to the private variable
    return {
        // TODO: Implement increment method
        increment: function() {
            // Increment count by step and return new value
        },
        
        // TODO: Implement decrement method
        decrement: function() {
            // Decrement count by step and return new value
        },
        
        // TODO: Implement getValue method
        getValue: function() {
            // Return current count value
        },
        
        // TODO: Implement reset method
        reset: function() {
            // Reset count to initial value
        }
    };
}

// TODO: Test the counter factory
// let counter1 = createCounter(0, 1);
// let counter2 = createCounter(100, 5);

// console.log("Counter 1 initial:", counter1.getValue());
// console.log("Counter 1 increment:", counter1.increment());
// console.log("Counter 1 increment:", counter1.increment());

// console.log("Counter 2 initial:", counter2.getValue());
// console.log("Counter 2 decrement:", counter2.decrement());
// console.log("Counter 2 decrement:", counter2.decrement());

// TODO: Create a bank account factory using closures
function createBankAccount(initialBalance = 0, accountHolder = "Anonymous") {
    // Private variables
    let balance = initialBalance;
    let transactionHistory = [];
    
    // Private helper function
    function addTransaction(type, amount, description) {
        transactionHistory.push({
            date: new Date().toISOString(),
            type: type,
            amount: amount,
            balance: balance,
            description: description
        });
    }
    
    // Public interface
    return {
        // TODO: Implement deposit method
        deposit: function(amount, description = "Deposit") {
            // Validate amount (must be positive)
            // Add to balance
            // Record transaction
            // Return new balance
        },
        
        // TODO: Implement withdraw method
        withdraw: function(amount, description = "Withdrawal") {
            // Validate amount (must be positive and <= balance)
            // Subtract from balance
            // Record transaction
            // Return new balance or error message
        },
        
        // TODO: Implement getBalance method
        getBalance: function() {
            // Return current balance
        },
        
        // TODO: Implement getStatement method
        getStatement: function() {
            // Return account holder and transaction history
        }
    };
}

// TODO: Test the bank account factory
// let account = createBankAccount(1000, "John Doe");
// console.log("Initial balance:", account.getBalance());
// console.log("Deposit $500:", account.deposit(500, "Salary"));
// console.log("Withdraw $200:", account.withdraw(200, "Groceries"));
// console.log("Withdraw $2000:", account.withdraw(2000, "Car")); // Should fail

// CHALLENGE 3C: Higher-Order Functions
console.log("\n--- CHALLENGE 3C: Higher-Order Functions ---");

// TODO: Create a function that takes another function as parameter
function processArray(array, processor) {
    // Apply the processor function to each element
    let result = [];
    // for (let i = 0; i < array.length; i++) {
    //     result.push(processor(array[i], i, array));
    // }
    return result;
}

// TODO: Create various processor functions
function double(x) {
    // Return x * 2
}

function square(x) {
    // Return x * x
}

function addIndex(value, index) {
    // Return value + index
}

// TODO: Test higher-order function
let numbers = [1, 2, 3, 4, 5];
// console.log("Original:", numbers);
// console.log("Doubled:", processArray(numbers, double));
// console.log("Squared:", processArray(numbers, square));
// console.log("With index:", processArray(numbers, addIndex));

// TODO: Create a function that returns a function
function createMultiplier(factor) {
    // Return a function that multiplies its input by factor
    // return function(x) {
    //     return x * factor;
    // };
}

// TODO: Test function factory
// let multiplyBy3 = createMultiplier(3);
// let multiplyBy10 = createMultiplier(10);

// console.log("5 * 3 =", multiplyBy3(5));
// console.log("7 * 10 =", multiplyBy10(7));

// TODO: Create a function composition utility
function compose(f, g) {
    // Return a function that applies g first, then f
    // return function(x) {
    //     return f(g(x));
    // };
}

// TODO: Test function composition
// let addOne = x => x + 1;
// let multiplyBy2 = x => x * 2;
// let addThenMultiply = compose(multiplyBy2, addOne);

// console.log("(5 + 1) * 2 =", addThenMultiply(5));

// CHALLENGE 3D: Advanced Parameter Handling
console.log("\n--- CHALLENGE 3D: Advanced Parameter Handling ---");

// TODO: Create a function with default parameters
function createUser(name = "Anonymous", age = 0, email = "no-email@example.com", isActive = true) {
    return {
        name: name,
        age: age,
        email: email,
        isActive: isActive,
        createdAt: new Date()
    };
}

// TODO: Test default parameters
// console.log("User 1:", createUser());
// console.log("User 2:", createUser("Alice"));
// console.log("User 3:", createUser("Bob", 25));
// console.log("User 4:", createUser("Charlie", 30, "charlie@email.com"));

// TODO: Create a function that accepts variable number of arguments
function calculateStats(...numbers) {
    // Calculate various statistics for the provided numbers
    if (numbers.length === 0) {
        return { error: "No numbers provided" };
    }
    
    // TODO: Calculate sum, average, min, max
    let sum = 0;
    let min = numbers[0];
    let max = numbers[0];
    
    // for (let num of numbers) {
    //     sum += num;
    //     if (num < min) min = num;
    //     if (num > max) max = num;
    // }
    
    let average = sum / numbers.length;
    
    return {
        count: numbers.length,
        sum: sum,
        average: average,
        min: min,
        max: max
    };
}

// TODO: Test variable arguments
// console.log("Stats for 1,2,3,4,5:", calculateStats(1, 2, 3, 4, 5));
// console.log("Stats for 10,20,30:", calculateStats(10, 20, 30));
// console.log("Stats for single number:", calculateStats(42));
// console.log("Stats for no numbers:", calculateStats());

// TODO: Create a function that accepts an options object
function createProduct(name, price, options = {}) {
    // Destructure options with defaults
    let {
        category = "General",
        inStock = true,
        description = "No description available",
        tags = [],
        discount = 0
    } = options;
    
    // Calculate final price with discount
    let finalPrice = price * (1 - discount / 100);
    
    return {
        name: name,
        price: price,
        finalPrice: finalPrice,
        category: category,
        inStock: inStock,
        description: description,
        tags: tags,
        discount: discount
    };
}

// TODO: Test options object
// console.log("Basic product:", createProduct("Widget", 29.99));
// console.log("Detailed product:", createProduct("Gadget", 49.99, {
//     category: "Electronics",
//     description: "A useful gadget",
//     tags: ["tech", "useful", "popular"],
//     discount: 10
// }));

// CHALLENGE 3E: Function Utilities and Patterns
console.log("\n--- CHALLENGE 3E: Function Utilities and Patterns ---");

// TODO: Create a memoization function
function memoize(fn) {
    let cache = {};
    
    return function(...args) {
        // Create a key from the arguments
        let key = JSON.stringify(args);
        
        // Check if result is already cached
        if (key in cache) {
            console.log("Cache hit for:", args);
            return cache[key];
        }
        
        // Calculate and cache the result
        console.log("Calculating for:", args);
        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// TODO: Create an expensive function to test memoization
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// TODO: Test memoization
// let memoizedFib = memoize(fibonacci);
// console.log("Fib(10):", memoizedFib(10));
// console.log("Fib(10) again:", memoizedFib(10)); // Should use cache

// TODO: Create a debounce function
function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        // Clear previous timeout
        clearTimeout(timeoutId);
        
        // Set new timeout
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// TODO: Test debounce
// let debouncedLog = debounce((message) => {
//     console.log("Debounced:", message);
// }, 1000);

// console.log("Calling debounced function multiple times...");
// debouncedLog("First call");
// debouncedLog("Second call");
// debouncedLog("Third call"); // Only this should execute after 1 second

// TODO: Create a partial application function
function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn.apply(this, [...fixedArgs, ...remainingArgs]);
    };
}

// TODO: Test partial application
// function greet(greeting, name, punctuation) {
//     return `${greeting}, ${name}${punctuation}`;
// }

// let sayHello = partial(greet, "Hello");
// let sayHelloExcited = partial(greet, "Hello", "World");

// console.log(sayHello("Alice", "!"));
// console.log(sayHelloExcited("!"));

/*
BONUS CHALLENGES:
1. Implement a curry function that converts any function to curried form
2. Create a function pipeline utility for chaining operations
3. Build a simple event emitter using closures
4. Implement a retry mechanism for functions that might fail
5. Create a function that can be called only once (singleton pattern)

EXPECTED OUTPUT EXAMPLE:
========================
🔧 Advanced Function Workshop 🔧

--- CHALLENGE 3A: Scope and Variable Management ---
Inside scopeDemo function:
- Global counter: 0
- Function var (let): Function scope with let
- Function var (var): Function scope with var
Inside if block:
- Block var (let): Block scope with let
- Block var (var): Block scope with var
- Block const: Block scope with const
After if block:
- Block var (var): Block scope with var
- Shadowed global counter: 100
Global counter after function: 0

--- CHALLENGE 3B: Closure Workshop ---
Counter 1 initial: 0
Counter 1 increment: 1
Counter 1 increment: 2
Counter 2 initial: 100
Counter 2 decrement: 95
Counter 2 decrement: 90

Initial balance: 1000
Deposit $500: 1500
Withdraw $200: 1300
Withdraw $2000: Insufficient funds

--- CHALLENGE 3C: Higher-Order Functions ---
Original: [1, 2, 3, 4, 5]
Doubled: [2, 4, 6, 8, 10]
Squared: [1, 4, 9, 16, 25]
With index: [1, 3, 5, 7, 9]
5 * 3 = 15
7 * 10 = 70
(5 + 1) * 2 = 12
*/


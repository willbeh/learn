/*
🚨 INTERMEDIATE CHALLENGE 4: Error Handling & Robust Code
=========================================================

Master error handling techniques by building resilient applications!
This challenge covers try/catch/finally, custom errors, validation, and defensive programming.

TASKS:
1. Implement comprehensive error handling with try/catch/finally
2. Create custom error types for different scenarios
3. Build input validation and sanitization functions
4. Handle asynchronous errors and edge cases
5. Create robust, fault-tolerant systems

TOPICS COVERED: try/catch/finally, custom errors, validation, defensive programming
*/

console.log("🚨 Error Handling & Robust Code Workshop 🚨\n");

// CHALLENGE 4A: Basic Error Handling
console.log("--- CHALLENGE 4A: Basic Error Handling ---");

// TODO: Create a function that demonstrates basic try/catch/finally
function demonstrateBasicErrorHandling() {
    console.log("Testing basic error handling...");
    
    // Test case 1: Normal operation
    try {
        console.log("Attempting normal operation...");
        let result = 10 / 2;
        console.log("Result:", result);
    } catch (error) {
        console.log("Error caught:", error.message);
    } finally {
        console.log("Finally block executed (normal case)");
    }
    
    // Test case 2: Error condition
    try {
        console.log("Attempting operation that will fail...");
        // TODO: Throw an error intentionally
        // throw new Error("Something went wrong!");
    } catch (error) {
        console.log("Error caught:", error.message);
    } finally {
        console.log("Finally block executed (error case)");
    }
    
    // Test case 3: JSON parsing error
    try {
        console.log("Attempting to parse invalid JSON...");
        let invalidJson = '{"name": "John", "age": }'; // Invalid JSON
        // TODO: Try to parse this JSON and handle the error
        // let parsed = JSON.parse(invalidJson);
    } catch (error) {
        console.log("JSON parsing error:", error.message);
        console.log("Error type:", error.name);
    } finally {
        console.log("JSON parsing attempt completed");
    }
}

// TODO: Call the demonstration function
// demonstrateBasicErrorHandling();

// CHALLENGE 4B: Custom Error Types
console.log("\n--- CHALLENGE 4B: Custom Error Types ---");

// TODO: Create custom error classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

class BusinessLogicError extends Error {
    constructor(message, code) {
        super(message);
        this.name = "BusinessLogicError";
        this.code = code;
    }
}

// TODO: Create a user registration function with custom errors
function registerUser(userData) {
    try {
        // Validate required fields
        if (!userData.email) {
            throw new ValidationError("Email is required", "email");
        }
        
        if (!userData.password) {
            throw new ValidationError("Password is required", "password");
        }
        
        if (!userData.age) {
            throw new ValidationError("Age is required", "age");
        }
        
        // TODO: Validate email format
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userData.email)) {
            // throw new ValidationError("Invalid email format", "email");
        }
        
        // TODO: Validate password strength
        if (userData.password.length < 8) {
            // throw new ValidationError("Password must be at least 8 characters", "password");
        }
        
        // TODO: Validate age range
        if (userData.age < 13 || userData.age > 120) {
            // throw new ValidationError("Age must be between 13 and 120", "age");
        }
        
        // TODO: Simulate business logic validation
        if (userData.email === "admin@example.com") {
            // throw new BusinessLogicError("This email is reserved", "RESERVED_EMAIL");
        }
        
        // TODO: Simulate network error
        if (userData.email.includes("network-error")) {
            // throw new NetworkError("Failed to connect to user service", 503);
        }
        
        // If all validations pass
        return {
            success: true,
            message: "User registered successfully",
            userId: Math.floor(Math.random() * 10000)
        };
        
    } catch (error) {
        // Handle different error types
        if (error instanceof ValidationError) {
            return {
                success: false,
                error: "Validation Error",
                message: error.message,
                field: error.field
            };
        } else if (error instanceof BusinessLogicError) {
            return {
                success: false,
                error: "Business Logic Error",
                message: error.message,
                code: error.code
            };
        } else if (error instanceof NetworkError) {
            return {
                success: false,
                error: "Network Error",
                message: error.message,
                statusCode: error.statusCode
            };
        } else {
            return {
                success: false,
                error: "Unknown Error",
                message: error.message
            };
        }
    }
}

// TODO: Test the registration function with different scenarios
let testUsers = [
    { email: "john@example.com", password: "password123", age: 25 },
    { email: "invalid-email", password: "pass", age: 15 },
    { email: "admin@example.com", password: "password123", age: 30 },
    { email: "network-error@example.com", password: "password123", age: 25 },
    { password: "password123", age: 25 } // Missing email
];

// for (let user of testUsers) {
//     console.log("Testing user:", user);
//     let result = registerUser(user);
//     console.log("Result:", result);
//     console.log("---");
// }

// CHALLENGE 4C: File Processing with Error Handling
console.log("\n--- CHALLENGE 4C: File Processing with Error Handling ---");

// TODO: Create a robust file processor (simulated)
function processFileData(fileData) {
    let processedRecords = [];
    let errors = [];
    
    try {
        // TODO: Validate file data structure
        if (!Array.isArray(fileData)) {
            throw new Error("File data must be an array");
        }
        
        if (fileData.length === 0) {
            throw new Error("File is empty");
        }
        
        // Process each record
        for (let i = 0; i < fileData.length; i++) {
            try {
                let record = fileData[i];
                
                // TODO: Validate record structure
                if (typeof record !== 'object' || record === null) {
                    throw new ValidationError(`Record ${i + 1} is not a valid object`, `record_${i + 1}`);
                }
                
                // TODO: Process the record
                let processedRecord = processRecord(record, i + 1);
                processedRecords.push(processedRecord);
                
            } catch (error) {
                // Log individual record errors but continue processing
                errors.push({
                    recordIndex: i + 1,
                    error: error.message,
                    type: error.name || "Error"
                });
                console.log(`Error processing record ${i + 1}:`, error.message);
            }
        }
        
        return {
            success: true,
            processedCount: processedRecords.length,
            errorCount: errors.length,
            records: processedRecords,
            errors: errors
        };
        
    } catch (error) {
        return {
            success: false,
            error: error.message,
            processedCount: 0,
            errorCount: fileData ? fileData.length : 0
        };
    }
}

// TODO: Create a record processor with validation
function processRecord(record, recordNumber) {
    // TODO: Validate required fields
    if (!record.name || typeof record.name !== 'string') {
        throw new ValidationError("Name is required and must be a string", "name");
    }
    
    if (!record.email || typeof record.email !== 'string') {
        throw new ValidationError("Email is required and must be a string", "email");
    }
    
    if (record.age === undefined || typeof record.age !== 'number') {
        throw new ValidationError("Age is required and must be a number", "age");
    }
    
    // TODO: Sanitize and process data
    let processedRecord = {
        id: recordNumber,
        name: record.name.trim(),
        email: record.email.toLowerCase().trim(),
        age: Math.floor(record.age),
        processedAt: new Date().toISOString()
    };
    
    // TODO: Additional validation
    if (processedRecord.age < 0 || processedRecord.age > 150) {
        throw new ValidationError("Age must be between 0 and 150", "age");
    }
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(processedRecord.email)) {
        throw new ValidationError("Invalid email format", "email");
    }
    
    return processedRecord;
}

// TODO: Test file processing with various data
let testFileData = [
    { name: "John Doe", email: "john@example.com", age: 25 },
    { name: "Jane Smith", email: "jane@example.com", age: 30 },
    { name: "", email: "invalid@example.com", age: 25 }, // Invalid name
    { name: "Bob Wilson", email: "invalid-email", age: 35 }, // Invalid email
    { name: "Alice Brown", email: "alice@example.com", age: -5 }, // Invalid age
    { name: "Charlie Davis", email: "charlie@example.com", age: 40 },
    "invalid record", // Not an object
    { name: "Eve White", email: "eve@example.com" } // Missing age
];

// console.log("Processing file data...");
// let result = processFileData(testFileData);
// console.log("Processing result:", result);

// CHALLENGE 4D: Calculator with Error Handling
console.log("\n--- CHALLENGE 4D: Calculator with Error Handling ---");

// TODO: Create a robust calculator class
class RobustCalculator {
    constructor() {
        this.history = [];
    }
    
    // TODO: Add method with error handling
    add(a, b) {
        try {
            // Validate inputs
            this.validateNumbers(a, b);
            
            let result = a + b;
            this.addToHistory('add', a, b, result);
            return result;
        } catch (error) {
            this.logError('add', error);
            throw error;
        }
    }
    
    // TODO: Subtract method with error handling
    subtract(a, b) {
        try {
            this.validateNumbers(a, b);
            let result = a - b;
            this.addToHistory('subtract', a, b, result);
            return result;
        } catch (error) {
            this.logError('subtract', error);
            throw error;
        }
    }
    
    // TODO: Multiply method with error handling
    multiply(a, b) {
        try {
            this.validateNumbers(a, b);
            let result = a * b;
            this.addToHistory('multiply', a, b, result);
            return result;
        } catch (error) {
            this.logError('multiply', error);
            throw error;
        }
    }
    
    // TODO: Divide method with error handling
    divide(a, b) {
        try {
            this.validateNumbers(a, b);
            
            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }
            
            let result = a / b;
            this.addToHistory('divide', a, b, result);
            return result;
        } catch (error) {
            this.logError('divide', error);
            throw error;
        }
    }
    
    // TODO: Square root method with error handling
    sqrt(a) {
        try {
            this.validateNumber(a);
            
            if (a < 0) {
                throw new Error("Cannot calculate square root of negative number");
            }
            
            let result = Math.sqrt(a);
            this.addToHistory('sqrt', a, null, result);
            return result;
        } catch (error) {
            this.logError('sqrt', error);
            throw error;
        }
    }
    
    // TODO: Helper method to validate numbers
    validateNumbers(a, b) {
        this.validateNumber(a);
        this.validateNumber(b);
    }
    
    validateNumber(num) {
        if (typeof num !== 'number') {
            throw new ValidationError(`Expected number, got ${typeof num}`, 'number');
        }
        
        if (isNaN(num)) {
            throw new ValidationError("Value is NaN", 'number');
        }
        
        if (!isFinite(num)) {
            throw new ValidationError("Value must be finite", 'number');
        }
    }
    
    // TODO: Helper method to add to history
    addToHistory(operation, a, b, result) {
        this.history.push({
            operation: operation,
            operands: b !== null ? [a, b] : [a],
            result: result,
            timestamp: new Date().toISOString()
        });
    }
    
    // TODO: Helper method to log errors
    logError(operation, error) {
        console.log(`Error in ${operation}:`, error.message);
    }
    
    // TODO: Get calculation history
    getHistory() {
        return this.history;
    }
    
    // TODO: Clear history
    clearHistory() {
        this.history = [];
    }
}

// TODO: Test the robust calculator
// let calc = new RobustCalculator();

// console.log("Testing calculator operations...");

// Test valid operations
// try {
//     console.log("5 + 3 =", calc.add(5, 3));
//     console.log("10 - 4 =", calc.subtract(10, 4));
//     console.log("6 * 7 =", calc.multiply(6, 7));
//     console.log("15 / 3 =", calc.divide(15, 3));
//     console.log("√16 =", calc.sqrt(16));
// } catch (error) {
//     console.log("Unexpected error:", error.message);
// }

// Test error conditions
// try {
//     console.log("10 / 0 =", calc.divide(10, 0));
// } catch (error) {
//     console.log("Expected error caught:", error.message);
// }

// try {
//     console.log("√(-4) =", calc.sqrt(-4));
// } catch (error) {
//     console.log("Expected error caught:", error.message);
// }

// try {
//     console.log("'5' + 3 =", calc.add('5', 3));
// } catch (error) {
//     console.log("Expected error caught:", error.message);
// }

// console.log("Calculator history:", calc.getHistory());

/*
BONUS CHALLENGES:
1. Create a retry mechanism for functions that might fail temporarily
2. Implement a circuit breaker pattern for external service calls
3. Build a logging system that captures and categorizes different error types
4. Create a graceful degradation system that provides fallback functionality
5. Implement error boundaries for modular applications

EXPECTED OUTPUT EXAMPLE:
========================
🚨 Error Handling & Robust Code Workshop 🚨

--- CHALLENGE 4A: Basic Error Handling ---
Testing basic error handling...
Attempting normal operation...
Result: 5
Finally block executed (normal case)
Attempting operation that will fail...
Error caught: Something went wrong!
Finally block executed (error case)
Attempting to parse invalid JSON...
JSON parsing error: Unexpected token } in JSON at position 20
Error type: SyntaxError
JSON parsing attempt completed

--- CHALLENGE 4B: Custom Error Types ---
Testing user: {email: "john@example.com", password: "password123", age: 25}
Result: {success: true, message: "User registered successfully", userId: 1234}
---
Testing user: {email: "invalid-email", password: "pass", age: 15}
Result: {success: false, error: "Validation Error", message: "Invalid email format", field: "email"}
---

--- CHALLENGE 4C: File Processing with Error Handling ---
Error processing record 3: Name is required and must be a string
Error processing record 4: Invalid email format
Error processing record 5: Age must be between 0 and 150
Processing result: {success: true, processedCount: 4, errorCount: 4, ...}

--- CHALLENGE 4D: Calculator with Error Handling ---
Testing calculator operations...
5 + 3 = 8
10 - 4 = 6
6 * 7 = 42
15 / 3 = 5
√16 = 4
Error in divide: Division by zero is not allowed
Expected error caught: Division by zero is not allowed
Error in sqrt: Cannot calculate square root of negative number
Expected error caught: Cannot calculate square root of negative number
*/


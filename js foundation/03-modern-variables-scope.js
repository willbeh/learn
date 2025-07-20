/*
🔒 ADVANCED CHALLENGE 3: Modern Variables & Scope Mastery
=========================================================

Master modern JavaScript variable declarations and scoping rules!
This challenge explores let, const, var differences, block scope, temporal dead zone, and advanced scoping patterns.

TASKS:
1. Understand differences between let, const, and var
2. Master block scope vs function scope
3. Handle temporal dead zone scenarios
4. Implement closure patterns with modern syntax
5. Create scope-safe utility functions

TOPICS COVERED: let, const, var, block scope, temporal dead zone, hoisting, closures
*/

console.log("🔒 Modern Variables & Scope Mastery 🔒\n");

// CHALLENGE 3A: Variable Declaration Differences
console.log("--- CHALLENGE 3A: Variable Declaration Differences ---");

// TODO: Demonstrate hoisting differences
function demonstrateHoisting() {
    console.log("=== Hoisting Demonstration ===");
    
    // TODO: Test var hoisting
    console.log("Testing var hoisting:");
    try {
        console.log("varVariable before declaration:", varVariable); // Should be undefined
        var varVariable = "I'm hoisted!";
        console.log("varVariable after declaration:", varVariable);
    } catch (error) {
        console.log("Error with var:", error.message);
    }
    
    // TODO: Test let temporal dead zone
    console.log("\nTesting let temporal dead zone:");
    try {
        // console.log("letVariable before declaration:", letVariable); // Should throw ReferenceError
        let letVariable = "I'm in temporal dead zone!";
        console.log("letVariable after declaration:", letVariable);
    } catch (error) {
        console.log("Error with let:", error.message);
    }
    
    // TODO: Test const temporal dead zone
    console.log("\nTesting const temporal dead zone:");
    try {
        // console.log("constVariable before declaration:", constVariable); // Should throw ReferenceError
        const constVariable = "I'm also in temporal dead zone!";
        console.log("constVariable after declaration:", constVariable);
    } catch (error) {
        console.log("Error with const:", error.message);
    }
}

// TODO: Demonstrate reassignment differences
function demonstrateReassignment() {
    console.log("\n=== Reassignment Demonstration ===");
    
    // var can be reassigned and redeclared
    var varTest = "original var";
    console.log("Original var:", varTest);
    varTest = "reassigned var";
    console.log("Reassigned var:", varTest);
    var varTest = "redeclared var"; // This works
    console.log("Redeclared var:", varTest);
    
    // let can be reassigned but not redeclared
    let letTest = "original let";
    console.log("Original let:", letTest);
    letTest = "reassigned let";
    console.log("Reassigned let:", letTest);
    // let letTest = "redeclared let"; // This would cause an error
    
    // const cannot be reassigned or redeclared
    const constTest = "original const";
    console.log("Original const:", constTest);
    // constTest = "reassigned const"; // This would cause an error
    // const constTest = "redeclared const"; // This would also cause an error
    
    // However, const objects can be mutated
    const constObject = { name: "John", age: 30 };
    console.log("Original const object:", constObject);
    constObject.age = 31; // This works
    constObject.city = "New York"; // This also works
    console.log("Mutated const object:", constObject);
}

// TODO: Call demonstration functions
// demonstrateHoisting();
// demonstrateReassignment();

// CHALLENGE 3B: Block Scope vs Function Scope
console.log("\n--- CHALLENGE 3B: Block Scope vs Function Scope ---");

// TODO: Create a function that demonstrates scope differences
function demonstrateScope() {
    console.log("=== Scope Demonstration ===");
    
    // Function scope with var
    function testVarScope() {
        console.log("\nTesting var scope:");
        
        if (true) {
            var functionScoped = "I'm function scoped";
            console.log("Inside if block (var):", functionScoped);
        }
        
        console.log("Outside if block (var):", functionScoped); // This works
        
        for (var i = 0; i < 3; i++) {
            var loopVar = `Loop iteration ${i}`;
        }
        
        console.log("After loop (var i):", i); // This shows 3
        console.log("After loop (var loopVar):", loopVar); // This shows last value
    }
    
    // Block scope with let and const
    function testLetConstScope() {
        console.log("\nTesting let/const scope:");
        
        if (true) {
            let blockScoped = "I'm block scoped";
            const alsoBlockScoped = "I'm also block scoped";
            console.log("Inside if block (let):", blockScoped);
            console.log("Inside if block (const):", alsoBlockScoped);
        }
        
        // console.log("Outside if block (let):", blockScoped); // This would cause an error
        // console.log("Outside if block (const):", alsoBlockScoped); // This would also cause an error
        
        for (let j = 0; j < 3; j++) {
            let loopLet = `Loop iteration ${j}`;
            // Each iteration has its own scope
        }
        
        // console.log("After loop (let j):", j); // This would cause an error
        // console.log("After loop (let loopLet):", loopLet); // This would also cause an error
    }
    
    testVarScope();
    testLetConstScope();
}

// TODO: Demonstrate the classic loop closure problem
function demonstrateLoopClosures() {
    console.log("\n=== Loop Closure Demonstration ===");
    
    // Problem with var in loops
    console.log("Problem with var in loops:");
    var varFunctions = [];
    
    for (var i = 0; i < 3; i++) {
        varFunctions.push(function() {
            return `Function ${i}`; // All functions will reference the same 'i'
        });
    }
    
    // All functions return "Function 3"
    // varFunctions.forEach((fn, index) => {
    //     console.log(`varFunctions[${index}]():`, fn());
    // });
    
    // Solution with let
    console.log("\nSolution with let:");
    let letFunctions = [];
    
    for (let j = 0; j < 3; j++) {
        letFunctions.push(function() {
            return `Function ${j}`; // Each function has its own 'j'
        });
    }
    
    // Each function returns the correct value
    // letFunctions.forEach((fn, index) => {
    //     console.log(`letFunctions[${index}]():`, fn());
    // });
    
    // Alternative solution with IIFE (Immediately Invoked Function Expression)
    console.log("\nAlternative solution with IIFE:");
    var iifeFunctions = [];
    
    for (var k = 0; k < 3; k++) {
        iifeFunctions.push((function(index) {
            return function() {
                return `Function ${index}`;
            };
        })(k));
    }
    
    // iifeFunctions.forEach((fn, index) => {
    //     console.log(`iifeFunctions[${index}]():`, fn());
    // });
}

// TODO: Call scope demonstration functions
// demonstrateScope();
// demonstrateLoopClosures();

// CHALLENGE 3C: Advanced Closure Patterns
console.log("\n--- CHALLENGE 3C: Advanced Closure Patterns ---");

// TODO: Create a module pattern using modern syntax
function createAdvancedCounter(initialValue = 0, step = 1) {
    // Private variables using let/const
    let count = initialValue;
    const stepSize = step;
    let history = [];
    
    // Private helper function
    const addToHistory = (operation, oldValue, newValue) => {
        history.push({
            operation,
            oldValue,
            newValue,
            timestamp: new Date().toISOString()
        });
    };
    
    // Return public interface
    return {
        // TODO: Implement increment method
        increment() {
            const oldValue = count;
            count += stepSize;
            addToHistory('increment', oldValue, count);
            return count;
        },
        
        // TODO: Implement decrement method
        decrement() {
            const oldValue = count;
            count -= stepSize;
            addToHistory('decrement', oldValue, count);
            return count;
        },
        
        // TODO: Implement getValue method
        getValue() {
            return count;
        },
        
        // TODO: Implement reset method
        reset(newValue = initialValue) {
            const oldValue = count;
            count = newValue;
            addToHistory('reset', oldValue, count);
            return count;
        },
        
        // TODO: Implement getHistory method
        getHistory() {
            return [...history]; // Return a copy to prevent external modification
        },
        
        // TODO: Implement clearHistory method
        clearHistory() {
            const clearedCount = history.length;
            history = [];
            return clearedCount;
        },
        
        // TODO: Implement getStats method
        getStats() {
            const operations = history.reduce((acc, entry) => {
                acc[entry.operation] = (acc[entry.operation] || 0) + 1;
                return acc;
            }, {});
            
            return {
                currentValue: count,
                initialValue,
                stepSize,
                totalOperations: history.length,
                operationBreakdown: operations,
                firstOperation: history[0] || null,
                lastOperation: history[history.length - 1] || null
            };
        }
    };
}

// TODO: Create a configuration manager with scope isolation
function createConfigManager(defaultConfig = {}) {
    // Private configuration storage
    const configs = new Map();
    const subscribers = new Set();
    let currentEnvironment = 'development';
    
    // Private helper functions
    const notifySubscribers = (event, data) => {
        subscribers.forEach(callback => {
            try {
                callback(event, data);
            } catch (error) {
                console.error('Error in config subscriber:', error);
            }
        });
    };
    
    const deepMerge = (target, source) => {
        const result = { ...target };
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                result[key] = deepMerge(result[key] || {}, source[key]);
            } else {
                result[key] = source[key];
            }
        }
        return result;
    };
    
    // Initialize with default config
    configs.set('default', { ...defaultConfig });
    
    return {
        // TODO: Set configuration for environment
        setConfig(environment, config) {
            const oldConfig = configs.get(environment);
            configs.set(environment, { ...config });
            notifySubscribers('configSet', { environment, oldConfig, newConfig: config });
            return this; // Enable method chaining
        },
        
        // TODO: Get configuration for environment
        getConfig(environment = currentEnvironment) {
            const envConfig = configs.get(environment) || {};
            const defaultConf = configs.get('default') || {};
            return deepMerge(defaultConf, envConfig);
        },
        
        // TODO: Update specific configuration values
        updateConfig(environment, updates) {
            const currentConfig = configs.get(environment) || {};
            const newConfig = deepMerge(currentConfig, updates);
            configs.set(environment, newConfig);
            notifySubscribers('configUpdated', { environment, updates, newConfig });
            return this;
        },
        
        // TODO: Set current environment
        setEnvironment(env) {
            const oldEnv = currentEnvironment;
            currentEnvironment = env;
            notifySubscribers('environmentChanged', { oldEnv, newEnv: env });
            return this;
        },
        
        // TODO: Subscribe to configuration changes
        subscribe(callback) {
            subscribers.add(callback);
            return () => subscribers.delete(callback); // Return unsubscribe function
        },
        
        // TODO: Get all environments
        getEnvironments() {
            return Array.from(configs.keys());
        },
        
        // TODO: Export configuration
        exportConfig() {
            const result = {};
            configs.forEach((config, env) => {
                result[env] = { ...config };
            });
            return result;
        }
    };
}

// TODO: Test advanced closure patterns
// console.log("Testing Advanced Counter:");
// const counter = createAdvancedCounter(10, 2);
// console.log("Initial value:", counter.getValue());
// console.log("Increment:", counter.increment());
// console.log("Increment:", counter.increment());
// console.log("Decrement:", counter.decrement());
// console.log("Reset:", counter.reset());
// console.log("Stats:", counter.getStats());

// console.log("\nTesting Configuration Manager:");
// const configManager = createConfigManager({ 
//     database: { host: 'localhost', port: 5432 },
//     api: { timeout: 5000 }
// });

// configManager.setConfig('production', {
//     database: { host: 'prod-db.example.com', ssl: true },
//     api: { timeout: 10000 }
// });

// console.log("Development config:", configManager.getConfig('development'));
// console.log("Production config:", configManager.getConfig('production'));

// CHALLENGE 3D: Scope-Safe Utility Functions
console.log("\n--- CHALLENGE 3D: Scope-Safe Utility Functions ---");

// TODO: Create a safe global variable manager
const GlobalManager = (() => {
    // Private storage using closure
    const globalStore = new Map();
    const reservedNames = new Set(['window', 'document', 'console', 'setTimeout', 'setInterval']);
    
    return {
        // TODO: Set global variable safely
        setGlobal(name, value, options = {}) {
            const { overwrite = false, readonly = false } = options;
            
            if (reservedNames.has(name)) {
                throw new Error(`Cannot set reserved global name: ${name}`);
            }
            
            if (globalStore.has(name) && !overwrite) {
                throw new Error(`Global variable '${name}' already exists. Use overwrite: true to replace.`);
            }
            
            globalStore.set(name, { value, readonly, createdAt: new Date() });
            
            // Set on actual global object if in browser
            if (typeof window !== 'undefined') {
                window[name] = value;
            } else if (typeof global !== 'undefined') {
                global[name] = value;
            }
            
            return true;
        },
        
        // TODO: Get global variable
        getGlobal(name) {
            const entry = globalStore.get(name);
            return entry ? entry.value : undefined;
        },
        
        // TODO: Delete global variable
        deleteGlobal(name) {
            if (reservedNames.has(name)) {
                throw new Error(`Cannot delete reserved global name: ${name}`);
            }
            
            const entry = globalStore.get(name);
            if (entry && entry.readonly) {
                throw new Error(`Cannot delete readonly global variable: ${name}`);
            }
            
            globalStore.delete(name);
            
            // Remove from actual global object
            if (typeof window !== 'undefined' && window[name]) {
                delete window[name];
            } else if (typeof global !== 'undefined' && global[name]) {
                delete global[name];
            }
            
            return true;
        },
        
        // TODO: List all managed globals
        listGlobals() {
            const result = {};
            globalStore.forEach((entry, name) => {
                result[name] = {
                    type: typeof entry.value,
                    readonly: entry.readonly,
                    createdAt: entry.createdAt
                };
            });
            return result;
        }
    };
})();

// TODO: Create a namespace manager
function createNamespace(name) {
    // Validate namespace name
    if (typeof name !== 'string' || !name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
        throw new Error('Invalid namespace name');
    }
    
    // Private namespace storage
    const namespaceData = new Map();
    const eventListeners = new Map();
    
    return {
        // TODO: Set value in namespace
        set(key, value) {
            const oldValue = namespaceData.get(key);
            namespaceData.set(key, value);
            
            // Trigger change events
            const listeners = eventListeners.get(key) || [];
            listeners.forEach(listener => {
                try {
                    listener(value, oldValue, key);
                } catch (error) {
                    console.error(`Error in namespace listener for ${key}:`, error);
                }
            });
            
            return this;
        },
        
        // TODO: Get value from namespace
        get(key, defaultValue = undefined) {
            return namespaceData.has(key) ? namespaceData.get(key) : defaultValue;
        },
        
        // TODO: Check if key exists
        has(key) {
            return namespaceData.has(key);
        },
        
        // TODO: Delete key from namespace
        delete(key) {
            const existed = namespaceData.has(key);
            const oldValue = namespaceData.get(key);
            namespaceData.delete(key);
            
            if (existed) {
                const listeners = eventListeners.get(key) || [];
                listeners.forEach(listener => {
                    try {
                        listener(undefined, oldValue, key);
                    } catch (error) {
                        console.error(`Error in namespace listener for ${key}:`, error);
                    }
                });
            }
            
            return existed;
        },
        
        // TODO: Listen for changes
        onChange(key, callback) {
            if (!eventListeners.has(key)) {
                eventListeners.set(key, []);
            }
            eventListeners.get(key).push(callback);
            
            // Return unsubscribe function
            return () => {
                const listeners = eventListeners.get(key) || [];
                const index = listeners.indexOf(callback);
                if (index > -1) {
                    listeners.splice(index, 1);
                }
            };
        },
        
        // TODO: Get all keys
        keys() {
            return Array.from(namespaceData.keys());
        },
        
        // TODO: Get namespace info
        getInfo() {
            return {
                name,
                size: namespaceData.size,
                keys: this.keys(),
                hasListeners: eventListeners.size > 0
            };
        }
    };
}

// TODO: Test scope-safe utilities
// console.log("Testing Global Manager:");
// try {
//     GlobalManager.setGlobal('myApp', { version: '1.0.0' });
//     console.log("Set global 'myApp':", GlobalManager.getGlobal('myApp'));
//     console.log("All globals:", GlobalManager.listGlobals());
// } catch (error) {
//     console.error("Global manager error:", error.message);
// }

// console.log("\nTesting Namespace:");
// const appNamespace = createNamespace('MyApp');
// appNamespace.set('config', { theme: 'dark', language: 'en' });
// appNamespace.set('user', { name: 'John', role: 'admin' });

// const unsubscribe = appNamespace.onChange('config', (newValue, oldValue) => {
//     console.log('Config changed:', { newValue, oldValue });
// });

// console.log("Namespace info:", appNamespace.getInfo());
// console.log("Config:", appNamespace.get('config'));

/*
BONUS CHALLENGES:
1. Create a memory-safe cache system using WeakMap and proper scoping
2. Implement a module loader that respects scope boundaries
3. Build a debugging utility that can inspect closure variables
4. Create a performance monitor that tracks variable access patterns
5. Implement a secure sandbox environment using scope isolation

EXPECTED OUTPUT EXAMPLE:
========================
🔒 Modern Variables & Scope Mastery 🔒

--- CHALLENGE 3A: Variable Declaration Differences ---
=== Hoisting Demonstration ===
Testing var hoisting:
varVariable before declaration: undefined
varVariable after declaration: I'm hoisted!

Testing let temporal dead zone:
Error with let: Cannot access 'letVariable' before initialization

=== Reassignment Demonstration ===
Original var: original var
Reassigned var: reassigned var
Redeclared var: redeclared var
Original let: original let
Reassigned let: reassigned let
Original const: original const
Mutated const object: { name: "John", age: 31, city: "New York" }

--- CHALLENGE 3B: Block Scope vs Function Scope ---
=== Loop Closure Demonstration ===
Problem with var in loops:
varFunctions[0](): Function 3
varFunctions[1](): Function 3
varFunctions[2](): Function 3

Solution with let:
letFunctions[0](): Function 0
letFunctions[1](): Function 1
letFunctions[2](): Function 2
*/


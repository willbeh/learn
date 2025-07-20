/*
🔄 ADVANCED CHALLENGE 2: Destructuring & Spread Syntax Mastery
==============================================================

Master modern JavaScript destructuring and spread syntax by building data transformation utilities!
This challenge explores object/array destructuring, spread operators, and advanced pattern matching.

TASKS:
1. Use destructuring for complex data extraction
2. Implement spread syntax for object/array manipulation
3. Create data transformation pipelines
4. Build configuration merging systems
5. Implement advanced pattern matching

TOPICS COVERED: Destructuring assignment, spread syntax, rest parameters, object manipulation
*/

console.log("🔄 Destructuring & Spread Syntax Mastery 🔄\n");

// CHALLENGE 2A: Advanced Object Destructuring
console.log("--- CHALLENGE 2A: Advanced Object Destructuring ---");

// Complex nested data structure
let companyData = {
    name: "TechCorp Inc.",
    founded: 2010,
    headquarters: {
        address: {
            street: "123 Innovation Drive",
            city: "San Francisco",
            state: "CA",
            zipCode: "94105",
            country: "USA"
        },
        coordinates: {
            latitude: 37.7749,
            longitude: -122.4194
        }
    },
    departments: {
        engineering: {
            head: "Alice Johnson",
            employees: 45,
            budget: 2500000,
            teams: ["Frontend", "Backend", "DevOps", "Mobile"]
        },
        marketing: {
            head: "Bob Smith",
            employees: 12,
            budget: 800000,
            campaigns: ["Social Media", "Content", "SEO", "PPC"]
        },
        sales: {
            head: "Carol Davis",
            employees: 18,
            budget: 1200000,
            regions: ["North America", "Europe", "Asia Pacific"]
        }
    },
    financials: {
        revenue: {
            2023: 15000000,
            2022: 12000000,
            2021: 9000000
        },
        expenses: {
            2023: 11000000,
            2022: 9500000,
            2021: 7500000
        }
    }
};

// TODO: Extract company summary using destructuring
function extractCompanySummary(company) {
    // Use nested destructuring to extract key information
    // const {
    //     name,
    //     founded,
    //     headquarters: {
    //         address: { city, state, country },
    //         coordinates: { latitude, longitude }
    //     },
    //     departments: {
    //         engineering: { employees: engEmployees, budget: engBudget },
    //         marketing: { employees: mktEmployees, budget: mktBudget },
    //         sales: { employees: salesEmployees, budget: salesBudget }
    //     },
    //     financials: {
    //         revenue: { 2023: currentRevenue, 2022: previousRevenue },
    //         expenses: { 2023: currentExpenses }
    //     }
    // } = company;
    
    // Calculate derived values
    // const totalEmployees = engEmployees + mktEmployees + salesEmployees;
    // const totalBudget = engBudget + mktBudget + salesBudget;
    // const currentProfit = currentRevenue - currentExpenses;
    // const revenueGrowth = ((currentRevenue - previousRevenue) / previousRevenue * 100).toFixed(1);
    
    return {
        // companyName: name,
        // location: `${city}, ${state}, ${country}`,
        // coordinates: `${latitude}, ${longitude}`,
        // totalEmployees,
        // totalBudget,
        // currentProfit,
        // revenueGrowth: `${revenueGrowth}%`,
        // foundedYearsAgo: new Date().getFullYear() - founded
    };
}

// TODO: Test company summary extraction
// console.log("Company Summary:");
// console.log(extractCompanySummary(companyData));

// TODO: Extract department information with default values
function extractDepartmentInfo(company, departmentName) {
    // Use destructuring with default values for missing properties
    // const {
    //     departments: {
    //         [departmentName]: {
    //             head = "Not assigned",
    //             employees = 0,
    //             budget = 0,
    //             teams = [],
    //             campaigns = [],
    //             regions = []
    //         } = {}
    //     } = {}
    // } = company;
    
    return {
        // department: departmentName,
        // head,
        // employees,
        // budget,
        // specializations: teams.length > 0 ? teams : campaigns.length > 0 ? campaigns : regions
    };
}

// TODO: Test department extraction
// console.log("\nDepartment Information:");
// console.log("Engineering:", extractDepartmentInfo(companyData, "engineering"));
// console.log("Marketing:", extractDepartmentInfo(companyData, "marketing"));
// console.log("HR (non-existent):", extractDepartmentInfo(companyData, "hr"));

// CHALLENGE 2B: Array Destructuring and Rest Parameters
console.log("\n--- CHALLENGE 2B: Array Destructuring and Rest Parameters ---");

// Sample data arrays
let salesData = [
    ["Q1", 2500000, 2200000, 2800000], // [Quarter, Target, Actual, Forecast]
    ["Q2", 2700000, 2650000, 2900000],
    ["Q3", 2900000, 3100000, 3200000],
    ["Q4", 3200000, 3350000, 3500000]
];

let employeeScores = [95, 88, 92, 87, 94, 89, 91, 86, 93, 90];
let productRatings = [4.5, 4.2, 4.8, 3.9, 4.6, 4.1, 4.7, 4.3, 4.4, 4.9, 4.0, 4.8];

// TODO: Analyze sales performance using array destructuring
function analyzeSalesPerformance(salesArray) {
    let analysis = [];
    
    // for (let [quarter, target, actual, forecast] of salesArray) {
    //     let performance = ((actual - target) / target * 100).toFixed(1);
    //     let forecastAccuracy = ((forecast - actual) / actual * 100).toFixed(1);
    //     
    //     analysis.push({
    //         quarter,
    //         target,
    //         actual,
    //         forecast,
    //         performance: `${performance}%`,
    //         forecastAccuracy: `${forecastAccuracy}%`,
    //         status: actual >= target ? "✓ Target Met" : "✗ Target Missed"
    //     });
    // }
    
    return analysis;
}

// TODO: Calculate statistics using rest parameters
function calculateStatistics(label, ...numbers) {
    // Use rest parameters to accept variable number of arguments
    if (numbers.length === 0) {
        return { error: "No numbers provided" };
    }
    
    // Destructure first, second, and rest of the numbers
    // const [first, second, ...rest] = numbers;
    // const [highest, ...others] = numbers.sort((a, b) => b - a);
    // const [...sorted] = numbers.sort((a, b) => a - b);
    // const [lowest] = sorted;
    
    // Calculate statistics
    // const sum = numbers.reduce((acc, num) => acc + num, 0);
    // const average = sum / numbers.length;
    // const median = sorted.length % 2 === 0 
    //     ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
    //     : sorted[Math.floor(sorted.length / 2)];
    
    return {
        // label,
        // count: numbers.length,
        // sum,
        // average: parseFloat(average.toFixed(2)),
        // median,
        // highest,
        // lowest,
        // range: highest - lowest,
        // firstValue: first,
        // secondValue: second,
        // remainingCount: rest.length
    };
}

// TODO: Test sales analysis and statistics
// console.log("Sales Performance Analysis:");
// console.log(analyzeSalesPerformance(salesData));

// console.log("\nEmployee Scores Statistics:");
// console.log(calculateStatistics("Employee Performance", ...employeeScores));

// console.log("\nProduct Ratings Statistics:");
// console.log(calculateStatistics("Product Ratings", ...productRatings));

// CHALLENGE 2C: Spread Syntax for Object Manipulation
console.log("\n--- CHALLENGE 2C: Spread Syntax for Object Manipulation ---");

// Base configuration objects
let defaultConfig = {
    theme: "light",
    language: "en",
    notifications: {
        email: true,
        push: false,
        sms: false
    },
    privacy: {
        profileVisible: true,
        dataSharing: false,
        analytics: true
    },
    performance: {
        animations: true,
        caching: true,
        compression: false
    }
};

let userPreferences = {
    theme: "dark",
    notifications: {
        push: true,
        sms: true
    },
    privacy: {
        dataSharing: true
    }
};

let adminOverrides = {
    privacy: {
        analytics: false,
        auditLogging: true
    },
    performance: {
        compression: true,
        debugging: true
    },
    security: {
        twoFactorAuth: true,
        sessionTimeout: 30
    }
};

// TODO: Create a deep merge function using spread syntax
function deepMerge(...objects) {
    // Merge multiple objects deeply using spread syntax
    function mergeTwo(target, source) {
        let result = { ...target };
        
        for (let key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                // Recursively merge nested objects
                result[key] = mergeTwo(result[key] || {}, source[key]);
            } else {
                // Direct assignment for primitive values and arrays
                result[key] = source[key];
            }
        }
        
        return result;
    }
    
    // return objects.reduce(mergeTwo, {});
}

// TODO: Create configuration profiles using spread syntax
function createUserProfile(userId, baseConfig, ...overrides) {
    // Merge base configuration with user-specific overrides
    // let mergedConfig = deepMerge(baseConfig, ...overrides);
    
    return {
        // userId,
        // createdAt: new Date().toISOString(),
        // config: mergedConfig,
        // configSources: overrides.length + 1 // base + overrides
    };
}

// TODO: Test configuration merging
// console.log("Default Configuration:");
// console.log(JSON.stringify(defaultConfig, null, 2));

// console.log("\nUser Profile with Preferences:");
// let userProfile = createUserProfile("user123", defaultConfig, userPreferences);
// console.log(JSON.stringify(userProfile, null, 2));

// console.log("\nAdmin Profile with All Overrides:");
// let adminProfile = createUserProfile("admin456", defaultConfig, userPreferences, adminOverrides);
// console.log(JSON.stringify(adminProfile, null, 2));

// CHALLENGE 2D: Advanced Array Manipulation with Spread
console.log("\n--- CHALLENGE 2D: Advanced Array Manipulation with Spread ---");

// Sample datasets
let q1Sales = [120000, 135000, 142000];
let q2Sales = [155000, 148000, 162000];
let q3Sales = [175000, 168000, 182000];
let q4Sales = [195000, 188000, 205000];

let teamA = ["Alice", "Bob", "Charlie"];
let teamB = ["David", "Eve", "Frank"];
let teamC = ["Grace", "Henry", "Iris"];

let priorities = ["Critical", "High", "Medium"];
let statuses = ["Open", "In Progress", "Review", "Closed"];
let categories = ["Bug", "Feature", "Enhancement", "Documentation"];

// TODO: Combine and analyze sales data
function analyzeCombinedSales(...quarters) {
    // Combine all quarterly data using spread syntax
    // let allSales = [].concat(...quarters);
    // let [highest, ...rest] = allSales.sort((a, b) => b - a);
    // let [...ascending] = allSales.sort((a, b) => a - b);
    // let [lowest] = ascending;
    
    // Calculate quarterly totals
    // let quarterlyTotals = quarters.map(quarter => 
    //     quarter.reduce((sum, sale) => sum + sale, 0)
    // );
    
    return {
        // totalSales: allSales.reduce((sum, sale) => sum + sale, 0),
        // averageSale: allSales.reduce((sum, sale) => sum + sale, 0) / allSales.length,
        // highestSale: highest,
        // lowestSale: lowest,
        // quarterlyTotals,
        // bestQuarter: Math.max(...quarterlyTotals),
        // worstQuarter: Math.min(...quarterlyTotals),
        // salesCount: allSales.length
    };
}

// TODO: Create project teams using spread syntax
function createProjectTeams(projectName, leadTeam, ...supportTeams) {
    // Combine teams and assign roles
    // let allMembers = [...leadTeam, ...[].concat(...supportTeams)];
    // let [projectLead, ...teamMembers] = leadTeam;
    // let supportMembers = [].concat(...supportTeams);
    
    return {
        // projectName,
        // projectLead,
        // leadTeam: teamMembers,
        // supportTeams: supportMembers,
        // totalMembers: allMembers.length,
        // teamStructure: {
        //     lead: leadTeam,
        //     support: supportTeams
        // }
    };
}

// TODO: Generate task combinations
function generateTaskCombinations(taskName, ...attributeArrays) {
    // Generate all possible combinations of attributes
    function cartesianProduct(...arrays) {
        return arrays.reduce((acc, array) => 
            acc.flatMap(x => array.map(y => [...x, y])), [[]]
        );
    }
    
    // let combinations = cartesianProduct(...attributeArrays);
    
    return {
        // taskName,
        // totalCombinations: combinations.length,
        // attributeTypes: attributeArrays.length,
        // sampleCombinations: combinations.slice(0, 5), // First 5 combinations
        // allCombinations: combinations
    };
}

// TODO: Test advanced array manipulation
// console.log("Combined Sales Analysis:");
// console.log(analyzeCombinedSales(q1Sales, q2Sales, q3Sales, q4Sales));

// console.log("\nProject Team Structure:");
// console.log(createProjectTeams("Mobile App Redesign", teamA, teamB, teamC));

// console.log("\nTask Combinations:");
// console.log(generateTaskCombinations("Issue Tracking", priorities, statuses, categories));

// CHALLENGE 2E: Function Parameter Destructuring
console.log("\n--- CHALLENGE 2E: Function Parameter Destructuring ---");

// TODO: Create API endpoint handlers with destructured parameters
function createUser({ 
    name, 
    email, 
    age = 18, 
    role = "user", 
    preferences = {}, 
    ...additionalData 
}) {
    // Destructure nested preferences with defaults
    const {
        theme = "light",
        notifications = true,
        language = "en"
    } = preferences;
    
    // Validate required fields
    if (!name || !email) {
        return { error: "Name and email are required" };
    }
    
    return {
        success: true,
        user: {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            age,
            role,
            preferences: { theme, notifications, language },
            additionalData,
            createdAt: new Date().toISOString()
        }
    };
}

// TODO: Create order processing function with complex destructuring
function processOrder({
    customer: { name: customerName, email: customerEmail, address },
    items,
    payment: { method: paymentMethod, amount: paymentAmount },
    shipping: { method: shippingMethod = "standard", cost: shippingCost = 0 } = {},
    discounts = [],
    ...orderMeta
}) {
    // Calculate totals
    const itemsTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountTotal = discounts.reduce((sum, discount) => sum + discount.amount, 0);
    const finalTotal = itemsTotal - discountTotal + shippingCost;
    
    return {
        orderId: `ORD-${Date.now()}`,
        customer: { customerName, customerEmail, address },
        itemsTotal,
        discountTotal,
        shippingCost,
        finalTotal,
        paymentMethod,
        shippingMethod,
        items: items.length,
        metadata: orderMeta,
        status: paymentAmount >= finalTotal ? "confirmed" : "payment_pending"
    };
}

// TODO: Test function parameter destructuring
let userData = {
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    preferences: {
        theme: "dark",
        notifications: false
    },
    department: "Engineering",
    startDate: "2024-01-15"
};

let orderData = {
    customer: {
        name: "Jane Smith",
        email: "jane@example.com",
        address: "123 Main St, Anytown, CA 12345"
    },
    items: [
        { name: "Laptop", price: 999.99, quantity: 1 },
        { name: "Mouse", price: 29.99, quantity: 2 }
    ],
    payment: {
        method: "credit_card",
        amount: 1100.00
    },
    shipping: {
        method: "express",
        cost: 15.99
    },
    discounts: [
        { code: "SAVE10", amount: 50.00 }
    ],
    source: "website",
    campaign: "spring_sale"
};

// console.log("User Creation:");
// console.log(createUser(userData));

// console.log("\nOrder Processing:");
// console.log(processOrder(orderData));

/*
BONUS CHALLENGES:
1. Create a data transformation pipeline using destructuring and spread
2. Implement a configuration system that supports environment-specific overrides
3. Build a form validation system using destructuring patterns
4. Create a state management system with immutable updates using spread
5. Implement a plugin system that merges functionality using spread syntax

EXPECTED OUTPUT EXAMPLE:
========================
🔄 Destructuring & Spread Syntax Mastery 🔄

--- CHALLENGE 2A: Advanced Object Destructuring ---
Company Summary:
{
  companyName: "TechCorp Inc.",
  location: "San Francisco, CA, USA",
  coordinates: "37.7749, -122.4194",
  totalEmployees: 75,
  totalBudget: 4500000,
  currentProfit: 4000000,
  revenueGrowth: "25.0%",
  foundedYearsAgo: 14
}

Department Information:
Engineering: {
  department: "engineering",
  head: "Alice Johnson",
  employees: 45,
  budget: 2500000,
  specializations: ["Frontend", "Backend", "DevOps", "Mobile"]
}

--- CHALLENGE 2B: Array Destructuring and Rest Parameters ---
Sales Performance Analysis:
[
  {
    quarter: "Q1",
    target: 2500000,
    actual: 2200000,
    performance: "-12.0%",
    status: "✗ Target Missed"
  },
  ...
]

Employee Scores Statistics:
{
  label: "Employee Performance",
  count: 10,
  average: 90.5,
  highest: 95,
  lowest: 86,
  range: 9
}
*/


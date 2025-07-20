/*
🎨 ADVANCED CHALLENGE 1: Template Literals & Dynamic Content Generator
======================================================================

Master template literals and advanced string manipulation by building dynamic content generators!
This challenge explores template literals, tagged templates, and complex string interpolation.

TASKS:
1. Use template literals for complex string interpolation
2. Create dynamic HTML/CSS generation
3. Implement tagged template functions
4. Build conditional and loop-based template systems
5. Create reusable template utilities

TOPICS COVERED: Template literals, tagged templates, string interpolation, dynamic content
*/

console.log("🎨 Template Literals & Dynamic Content Generator 🎨\n");

// CHALLENGE 1A: Basic Template Literals
console.log("--- CHALLENGE 1A: Basic Template Literals ---");

// Sample data for testing
let user = {
    name: "Alice Johnson",
    age: 28,
    email: "alice@example.com",
    role: "Software Engineer",
    department: "Engineering",
    salary: 85000,
    startDate: "2022-03-15",
    skills: ["JavaScript", "React", "Node.js", "Python"],
    projects: [
        { name: "E-commerce Platform", status: "completed", duration: "6 months" },
        { name: "Mobile App", status: "in-progress", duration: "3 months" },
        { name: "API Gateway", status: "planning", duration: "4 months" }
    ]
};

// TODO: Create an employee profile using template literals
function generateEmployeeProfile(employee) {
    // Use template literals to create a comprehensive profile
    // Include multiline strings, expressions, and function calls
    
    let profile = `
    ╔══════════════════════════════════════════════════════════════╗
    ║                        EMPLOYEE PROFILE                      ║
    ╠══════════════════════════════════════════════════════════════╣
    ║ Name: ${employee.name}
    ║ Age: ${employee.age} years old
    ║ Email: ${employee.email}
    ║ Role: ${employee.role}
    ║ Department: ${employee.department}
    ║ Salary: $${employee.salary.toLocaleString()}
    ║ Start Date: ${new Date(employee.startDate).toLocaleDateString()}
    ║ Years of Service: ${calculateYearsOfService(employee.startDate)}
    ║
    ║ Skills: ${employee.skills.join(", ")}
    ║ Total Skills: ${employee.skills.length}
    ║
    ║ Project Summary:
    ║ • Completed: ${employee.projects.filter(p => p.status === "completed").length}
    ║ • In Progress: ${employee.projects.filter(p => p.status === "in-progress").length}
    ║ • Planning: ${employee.projects.filter(p => p.status === "planning").length}
    ║
    ║ Performance Rating: ${calculatePerformanceRating(employee)}
    ║ Next Review: ${calculateNextReview(employee.startDate)}
    ╚══════════════════════════════════════════════════════════════╝
    `;
    
    return profile;
}

// TODO: Helper functions for calculations
function calculateYearsOfService(startDate) {
    // Calculate years between start date and now
    let start = new Date(startDate);
    let now = new Date();
    let years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
    return years.toFixed(1);
}

function calculatePerformanceRating(employee) {
    // Calculate rating based on projects and skills
    let completedProjects = employee.projects.filter(p => p.status === "completed").length;
    let skillCount = employee.skills.length;
    let rating = Math.min(5, Math.max(1, completedProjects + skillCount / 2));
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
}

function calculateNextReview(startDate) {
    // Calculate next annual review date
    let start = new Date(startDate);
    let nextReview = new Date(start);
    nextReview.setFullYear(nextReview.getFullYear() + Math.ceil(calculateYearsOfService(startDate)));
    return nextReview.toLocaleDateString();
}

// TODO: Test the employee profile generator
// console.log(generateEmployeeProfile(user));

// CHALLENGE 1B: Dynamic HTML Generation
console.log("\n--- CHALLENGE 1B: Dynamic HTML Generation ---");

// TODO: Create a dynamic HTML generator for a product catalog
function generateProductCard(product) {
    // Use template literals to generate HTML with embedded logic
    
    let discountBadge = product.discount > 0 ? 
        `<div class="discount-badge">-${product.discount}%</div>` : '';
    
    let originalPrice = product.discount > 0 ? 
        `<span class="original-price">$${product.price.toFixed(2)}</span>` : '';
    
    let finalPrice = product.discount > 0 ? 
        product.price * (1 - product.discount / 100) : product.price;
    
    let stockStatus = product.stock > 0 ? 
        `<span class="in-stock">✓ In Stock (${product.stock})</span>` : 
        `<span class="out-of-stock">✗ Out of Stock</span>`;
    
    let ratingStars = "★".repeat(Math.floor(product.rating)) + 
                     "☆".repeat(5 - Math.floor(product.rating));
    
    return `
    <div class="product-card ${product.stock === 0 ? 'out-of-stock' : ''}">
        ${discountBadge}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <span class="stars">${ratingStars}</span>
                <span class="rating-count">(${product.reviewCount} reviews)</span>
            </div>
            <div class="product-price">
                ${originalPrice}
                <span class="final-price">$${finalPrice.toFixed(2)}</span>
            </div>
            <div class="product-stock">${stockStatus}</div>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="add-to-cart" ${product.stock === 0 ? 'disabled' : ''}>
                ${product.stock > 0 ? 'Add to Cart' : 'Notify When Available'}
            </button>
        </div>
    </div>
    `;
}

// TODO: Test data for products
let products = [
    {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 199.99,
        discount: 15,
        stock: 25,
        rating: 4.5,
        reviewCount: 128,
        image: "headphones.jpg",
        tags: ["Electronics", "Audio", "Wireless"]
    },
    {
        name: "Smart Watch",
        description: "Feature-rich smartwatch with health monitoring",
        price: 299.99,
        discount: 0,
        stock: 0,
        rating: 4.2,
        reviewCount: 89,
        image: "smartwatch.jpg",
        tags: ["Electronics", "Wearable", "Health"]
    }
];

// TODO: Generate product catalog
// console.log("Generated Product Cards:");
// products.forEach(product => {
//     console.log(generateProductCard(product));
// });

// CHALLENGE 1C: Tagged Template Functions
console.log("\n--- CHALLENGE 1C: Tagged Template Functions ---");

// TODO: Create a tagged template for highlighting search terms
function highlight(strings, ...values) {
    // Combine strings and values, highlighting the interpolated values
    let result = '';
    
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        
        if (i < values.length) {
            // Wrap the interpolated value in highlight tags
            result += `<mark class="highlight">${values[i]}</mark>`;
        }
    }
    
    return result;
}

// TODO: Create a tagged template for SQL-like queries (safe interpolation)
function sql(strings, ...values) {
    // Create a safe SQL query by escaping values
    let query = '';
    
    for (let i = 0; i < strings.length; i++) {
        query += strings[i];
        
        if (i < values.length) {
            let value = values[i];
            
            // Simple SQL escaping (in real apps, use proper libraries)
            if (typeof value === 'string') {
                value = `'${value.replace(/'/g, "''")}'`;
            } else if (typeof value === 'number') {
                value = value.toString();
            } else if (Array.isArray(value)) {
                value = `(${value.map(v => typeof v === 'string' ? `'${v}'` : v).join(', ')})`;
            }
            
            query += value;
        }
    }
    
    return query;
}

// TODO: Create a tagged template for formatting currency
function currency(strings, ...values) {
    // Format numbers as currency
    let result = '';
    
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        
        if (i < values.length) {
            let value = values[i];
            
            if (typeof value === 'number') {
                result += new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(value);
            } else {
                result += value;
            }
        }
    }
    
    return result;
}

// TODO: Test tagged templates
let searchTerm = "JavaScript";
let userName = "Alice";
let userAge = 28;
let productPrice = 199.99;
let taxAmount = 15.99;

// console.log("Highlighted text:");
// console.log(highlight`Welcome ${userName}, you searched for ${searchTerm}`);

// console.log("\nSQL Query:");
// let userIds = [1, 2, 3];
// console.log(sql`SELECT * FROM users WHERE name = ${userName} AND age > ${userAge} AND id IN ${userIds}`);

// console.log("\nCurrency formatting:");
// console.log(currency`Product price: ${productPrice}, Tax: ${taxAmount}, Total: ${productPrice + taxAmount}`);

// CHALLENGE 1D: Dynamic Email Template Generator
console.log("\n--- CHALLENGE 1D: Dynamic Email Template Generator ---");

// TODO: Create a comprehensive email template system
function generateEmailTemplate(type, data) {
    // Base email wrapper
    const emailWrapper = (content, subject) => `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #007bff; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
            .button { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            ${content}
            <div class="footer">
                <p>This email was sent by ${data.companyName || 'Our Company'}</p>
                <p>If you no longer wish to receive these emails, <a href="#">unsubscribe here</a></p>
            </div>
        </div>
    </body>
    </html>
    `;
    
    switch (type) {
        case 'welcome':
            return emailWrapper(`
                <div class="header">
                    <h1>Welcome to ${data.companyName}!</h1>
                </div>
                <div class="content">
                    <h2>Hello ${data.userName}!</h2>
                    <p>We're excited to have you join our community. Your account has been successfully created.</p>
                    
                    <h3>Account Details:</h3>
                    <ul>
                        <li><strong>Email:</strong> ${data.email}</li>
                        <li><strong>Account Type:</strong> ${data.accountType}</li>
                        <li><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</li>
                    </ul>
                    
                    <p>To get started, please verify your email address by clicking the button below:</p>
                    <p style="text-align: center;">
                        <a href="${data.verificationLink}" class="button">Verify Email Address</a>
                    </p>
                    
                    <p>If you have any questions, feel free to contact our support team.</p>
                    <p>Best regards,<br>The ${data.companyName} Team</p>
                </div>
            `, `Welcome to ${data.companyName}`);
            
        case 'order-confirmation':
            let orderItems = data.items.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
            `).join('');
            
            return emailWrapper(`
                <div class="header">
                    <h1>Order Confirmation</h1>
                </div>
                <div class="content">
                    <h2>Thank you for your order, ${data.customerName}!</h2>
                    <p>Your order #${data.orderNumber} has been confirmed and is being processed.</p>
                    
                    <h3>Order Details:</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f0f0f0;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Qty</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Price</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${orderItems}
                        </tbody>
                        <tfoot>
                            <tr style="background: #f0f0f0; font-weight: bold;">
                                <td colspan="3" style="padding: 10px; border: 1px solid #ddd;">Total:</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">$${data.total.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                    
                    <h3>Shipping Information:</h3>
                    <p>
                        ${data.shippingAddress.name}<br>
                        ${data.shippingAddress.street}<br>
                        ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.zip}
                    </p>
                    
                    <p>Estimated delivery: ${data.estimatedDelivery}</p>
                    
                    <p style="text-align: center;">
                        <a href="${data.trackingLink}" class="button">Track Your Order</a>
                    </p>
                </div>
            `, `Order Confirmation #${data.orderNumber}`);
            
        case 'newsletter':
            let articles = data.articles.map(article => `
                <div style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 5px;">
                    <h3><a href="${article.link}" style="color: #007bff; text-decoration: none;">${article.title}</a></h3>
                    <p style="color: #666; font-size: 14px;">By ${article.author} • ${article.date}</p>
                    <p>${article.excerpt}</p>
                    <a href="${article.link}" style="color: #007bff;">Read more →</a>
                </div>
            `).join('');
            
            return emailWrapper(`
                <div class="header">
                    <h1>${data.newsletterTitle}</h1>
                    <p>${data.issueDate}</p>
                </div>
                <div class="content">
                    <h2>Hello ${data.subscriberName}!</h2>
                    <p>${data.introMessage}</p>
                    
                    <h3>Featured Articles:</h3>
                    ${articles}
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="${data.websiteLink}" class="button">Visit Our Website</a>
                    </div>
                </div>
            `, data.newsletterTitle);
            
        default:
            return "Unknown email template type";
    }
}

// TODO: Test email templates
let welcomeData = {
    userName: "John Doe",
    email: "john@example.com",
    accountType: "Premium",
    companyName: "TechCorp",
    verificationLink: "https://example.com/verify?token=abc123"
};

let orderData = {
    customerName: "Jane Smith",
    orderNumber: "ORD-2024-001",
    items: [
        { name: "Wireless Headphones", quantity: 1, price: 199.99 },
        { name: "Phone Case", quantity: 2, price: 24.99 }
    ],
    total: 249.97,
    shippingAddress: {
        name: "Jane Smith",
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    estimatedDelivery: "March 25, 2024",
    trackingLink: "https://example.com/track/ORD-2024-001",
    companyName: "TechStore"
};

// TODO: Generate and display email templates
// console.log("Welcome Email:");
// console.log(generateEmailTemplate('welcome', welcomeData));

// console.log("\nOrder Confirmation Email:");
// console.log(generateEmailTemplate('order-confirmation', orderData));

/*
BONUS CHALLENGES:
1. Create a template literal that generates CSS based on a theme object
2. Build a markdown-to-HTML converter using template literals
3. Create a code generator that produces JavaScript functions from templates
4. Implement a localization system using tagged templates
5. Build a report generator that creates formatted documents

EXPECTED OUTPUT EXAMPLE:
========================
🎨 Template Literals & Dynamic Content Generator 🎨

--- CHALLENGE 1A: Basic Template Literals ---
╔══════════════════════════════════════════════════════════════╗
║                        EMPLOYEE PROFILE                      ║
╠══════════════════════════════════════════════════════════════╣
║ Name: Alice Johnson
║ Age: 28 years old
║ Email: alice@example.com
║ Role: Software Engineer
║ Department: Engineering
║ Salary: $85,000
║ Start Date: 3/15/2022
║ Years of Service: 1.9
║
║ Skills: JavaScript, React, Node.js, Python
║ Total Skills: 4
║
║ Project Summary:
║ • Completed: 1
║ • In Progress: 1
║ • Planning: 1
║
║ Performance Rating: ★★★★☆
║ Next Review: 3/15/2024
╚══════════════════════════════════════════════════════════════╝

--- CHALLENGE 1C: Tagged Template Functions ---
Highlighted text:
Welcome <mark class="highlight">Alice</mark>, you searched for <mark class="highlight">JavaScript</mark>

SQL Query:
SELECT * FROM users WHERE name = 'Alice' AND age > 28 AND id IN (1, 2, 3)

Currency formatting:
Product price: $199.99, Tax: $15.99, Total: $215.98
*/


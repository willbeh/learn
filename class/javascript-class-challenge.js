/*
 * JavaScript Class Challenges for Graduates
 * Complete each challenge by implementing the described classes
 */

// =============================================================================
// CHALLENGE 1: BASIC CLASS CREATION - BankAccount
// =============================================================================

/*
CLASS NAME: BankAccount

DESCRIPTION:
Create a BankAccount class that manages a simple bank account with basic operations.

FEATURES:
- Account holder name (private property)
- Account balance (private property) 
- Account number (auto-generated, readonly)

CONSTRUCTOR:
- Takes accountHolder (string) and initialBalance (number, defaults to 0)
- Auto-generates a 6-digit account number (100000-999999)

METHODS:
1. deposit(amount)
   - Adds money to the account
   - Only accepts positive numbers
   - Returns new balance

2. withdraw(amount)
   - Removes money from account
   - Only if sufficient funds exist
   - Only accepts positive numbers
   - Returns new balance or throws error if insufficient funds

3. getBalance()
   - Returns current balance

4. getAccountInfo()
   - Returns object with accountNumber, accountHolder, and balance

5. transfer(targetAccount, amount)
   - Transfers money to another BankAccount instance
   - Uses withdraw/deposit methods
   - Returns boolean success status
*/

console.log("=== CHALLENGE 1: BankAccount Test Cases ===");

// Test Case 1: Basic account creation and operations
const account1 = new BankAccount("John Doe", 1000);
const account2 = new BankAccount("Jane Smith");

console.log("Account 1 Info:", account1.getAccountInfo());
// Expected: { accountNumber: (6-digit number), accountHolder: "John Doe", balance: 1000 }

console.log("Account 2 Info:", account2.getAccountInfo());
// Expected: { accountNumber: (6-digit number), accountHolder: "Jane Smith", balance: 0 }

// Test Case 2: Deposit and withdraw operations
console.log("After depositing $500 to account1:", account1.deposit(500));
// Expected: 1500

console.log("After withdrawing $200 from account1:", account1.withdraw(200));
// Expected: 1300

// Test Case 3: Transfer between accounts
console.log("Transfer $300 from account1 to account2:", account1.transfer(account2, 300));
// Expected: true

console.log("Account 1 balance after transfer:", account1.getBalance());
// Expected: 1000

console.log("Account 2 balance after transfer:", account2.getBalance());
// Expected: 300

// Test Case 4: Error handling
try {
  account2.withdraw(500);
} catch (error) {
  console.log("Withdrawal error:", error.message);
  // Expected: "Insufficient funds"
}

console.log("\n");

// =============================================================================
// CHALLENGE 2: INHERITANCE - Vehicle System
// =============================================================================

/*
BASE CLASS NAME: Vehicle

DESCRIPTION:
Create a vehicle hierarchy with a base Vehicle class and two derived classes.

FEATURES:
- Make, model, year (protected properties)
- Speed tracking (private property)
- Fuel level (private property, 0-100)

CONSTRUCTOR:
- Takes make (string), model (string), year (number)
- Initializes speed to 0, fuel to 100

METHODS:
1. start()
   - Sets engine status to running
   - Returns status message

2. stop()
   - Sets speed to 0 and engine status to stopped
   - Returns status message

3. accelerate(amount)
   - Increases speed by amount
   - Consumes fuel (1 unit per 10 speed increase)
   - Cannot exceed max speed (defined in subclasses)

4. getInfo()
   - Returns vehicle information object

5. refuel()
   - Sets fuel to 100
   - Returns confirmation message

DERIVED CLASS 1: Car (extends Vehicle)
- Additional: numberOfDoors (private)
- Maximum speed: 200
- Constructor takes additional numberOfDoors parameter
- Override accelerate() to include door safety check (can't accelerate if doors > 4 and speed > 100)

DERIVED CLASS 2: Motorcycle (extends Vehicle)  
- Additional: hasWindshield (private boolean)
- Maximum speed: 300
- Constructor takes additional hasWindshield parameter
- Override accelerate() to include windshield bonus (extra 5 speed if has windshield)
- Additional method: wheelie() - can only perform if speed > 50, returns success/failure message
*/

console.log("=== CHALLENGE 2: Vehicle Inheritance Test Cases ===");

// Test Case 1: Car creation and basic operations
const car = new Car("Toyota", "Camry", 2023, 4);
console.log("Car info:", car.getInfo());
// Expected: { make: "Toyota", model: "Camry", year: 2023, numberOfDoors: 4, speed: 0, fuel: 100, engineRunning: false }

console.log("Starting car:", car.start());
// Expected: "Toyota Camry engine started"

console.log("Accelerating car by 50:", car.accelerate(50));
// Expected: "Speed increased to 50. Fuel: 95"

// Test Case 2: Motorcycle creation and special features
const bike = new Motorcycle("Harley", "Sportster", 2022, true);
console.log("Bike info:", bike.getInfo());
// Expected: { make: "Harley", model: "Sportster", year: 2022, hasWindshield: true, speed: 0, fuel: 100, engineRunning: false }

bike.start();
bike.accelerate(60); // Should get windshield bonus
console.log("Bike speed after acceleration with windshield:", bike.getInfo().speed);
// Expected: 65 (60 + 5 windshield bonus)

console.log("Attempting wheelie:", bike.wheelie());
// Expected: "Wheelie performed successfully!"

// Test Case 3: Car door safety feature
const sportsCar = new Car("Ferrari", "488", 2021, 2);
sportsCar.start();
sportsCar.accelerate(150);
console.log("Sports car speed:", sportsCar.getInfo().speed);
// Expected: 150 (should work fine with 2 doors)

const van = new Car("Ford", "Transit", 2020, 6);
van.start();
van.accelerate(120);
console.log("Van acceleration result:", van.getInfo().speed);
// Expected: Limited due to door safety (should not exceed 100 with >4 doors)

console.log("\n");

// =============================================================================
// CHALLENGE 3: ADVANCED INHERITANCE & POLYMORPHISM - Shape Calculator
// =============================================================================

/*
ABSTRACT BASE CLASS: Shape

DESCRIPTION:
Create a shape hierarchy demonstrating advanced inheritance concepts including abstract methods,
method overriding, and polymorphism.

FEATURES:
- Color (protected property)
- Creation timestamp (private property)
- Static counter for total shapes created

CONSTRUCTOR:
- Takes color (string, defaults to "white")
- Sets creation timestamp
- Increments static counter

ABSTRACT METHODS (must be implemented by subclasses):
- calculateArea() - returns area
- calculatePerimeter() - returns perimeter  
- getShapeType() - returns shape name

CONCRETE METHODS:
1. getColor() - returns color
2. setColor(newColor) - sets new color
3. getAge() - returns seconds since creation
4. toString() - returns formatted shape description

STATIC METHODS:
1. getTotalShapes() - returns count of all shapes created
2. compareAreas(shape1, shape2) - returns which shape has larger area

DERIVED CLASS 1: Rectangle (extends Shape)
- Width and height (private properties)
- Constructor: color, width, height
- Implements all abstract methods
- Additional method: isSquare() - returns boolean

DERIVED CLASS 2: Circle (extends Shape)
- Radius (private property) 
- Constructor: color, radius
- Implements all abstract methods
- Additional method: getDiameter() - returns diameter

DERIVED CLASS 3: Triangle (extends Shape)
- Three sides: a, b, c (private properties)
- Constructor: color, sideA, sideB, sideC
- Implements all abstract methods (use Heron's formula for area)
- Additional method: getTriangleType() - returns "equilateral", "isosceles", or "scalene"
- Validation: sides must form valid triangle (sum of any two > third)
*/

console.log("=== CHALLENGE 3: Shape Calculator Test Cases ===");

// Test Case 1: Rectangle operations
const rect1 = new Rectangle("red", 5, 10);
const rect2 = new Rectangle("blue", 7, 7);

console.log("Rectangle 1:", rect1.toString());
// Expected: "Red Rectangle: Area = 50, Perimeter = 30"

console.log("Rectangle 2 is square:", rect2.isSquare());
// Expected: true

console.log("Rectangle 2 area:", rect2.calculateArea());
// Expected: 49

// Test Case 2: Circle operations
const circle1 = new Circle("green", 5);
const circle2 = new Circle("yellow", 3);

console.log("Circle 1:", circle1.toString());
// Expected: "Green Circle: Area = 78.54, Perimeter = 31.42" (rounded to 2 decimals)

console.log("Circle 1 diameter:", circle1.getDiameter());
// Expected: 10

// Test Case 3: Triangle operations and validation
const triangle1 = new Triangle("purple", 3, 4, 5);
const triangle2 = new Triangle("orange", 5, 5, 5);

console.log("Triangle 1:", triangle1.toString());
// Expected: "Purple Triangle: Area = 6, Perimeter = 12"

console.log("Triangle 1 type:", triangle1.getTriangleType());
// Expected: "scalene"

console.log("Triangle 2 type:", triangle2.getTriangleType());
// Expected: "equilateral"

// Test Case 4: Static methods and polymorphism
console.log("Total shapes created:", Shape.getTotalShapes());
// Expected: 6

const shapes = [rect1, circle1, triangle1];
console.log("Areas of mixed shapes:");
shapes.forEach(shape => {
  console.log(`${shape.getShapeType()}: ${shape.calculateArea()}`);
});
// Expected: 
// Rectangle: 50
// Circle: 78.54
// Triangle: 6

console.log("Comparing rectangle and circle areas:", Shape.compareAreas(rect1, circle1));
// Expected: "Circle has larger area (78.54 vs 50)"

// Test Case 5: Color changes and age tracking
setTimeout(() => {
  rect1.setColor("pink");
  console.log("Rectangle after color change:", rect1.toString());
  console.log("Rectangle age:", rect1.getAge(), "seconds");
  // Expected: Pink Rectangle description and age > 0
}, 1000);

// Test Case 6: Invalid triangle validation
try {
  const invalidTriangle = new Triangle("black", 1, 2, 10);
} catch (error) {
  console.log("Triangle validation error:", error.message);
  // Expected: "Invalid triangle: sides do not form a valid triangle"
}

/**
 * JAVASCRIPT ASYNC/AWAIT CHALLENGES FOR BEGINNERS
 * ===============================================
 * 
 * These challenges focus on async/await patterns and are designed for
 * developers with limited JavaScript experience. Each challenge includes
 * skeleton code and step-by-step instructions.
 * 
 * CONCEPTS COVERED:
 * - Basic async/await syntax
 * - Promise handling with async/await
 * - Error handling with try/catch
 * - Working with multiple async operations
 * - Using fetch API with async/await
 */

// =============================================================================
// CHALLENGE 1: BASIC ASYNC/AWAIT WITH TIMERS
// =============================================================================

/**
 * CHALLENGE 1: Learn Basic Async/Await
 * 
 * GOAL: Understand how async/await works with simple delayed operations
 * 
 * WHAT YOU'LL LEARN:
 * - How to create async functions
 * - How to use await with Promises
 * - Working with setTimeout in async context
 */

console.log("=== CHALLENGE 1: BASIC ASYNC/AWAIT ===\n");

// TASK 1.1: Create a simple delay function
/**
 * Create a function that waits for a specified number of milliseconds
 * This is a common utility function in async programming
 */

function delay(ms) {
  // TODO: Return a Promise that resolves after 'ms' milliseconds
  // HINT: Use setTimeout inside a Promise
  // SKELETON:
  // return new Promise(resolve => {
  //     // Your code here
  // });
}

// TASK 1.2: Create your first async function
/**
 * Create an async function that uses the delay function
 */

async function sayHelloAfterDelay(name, delayTime) {
  // TODO: 
  // 1. Print "Starting to wait..."
  // 2. Wait for 'delayTime' milliseconds using await and delay()
  // 3. Print "Hello, [name]!"
  // 4. Return a message: "Greeted [name] after [delayTime]ms"

  // SKELETON:
  // console.log("Starting to wait...");
  // await delay(delayTime);
  // console.log(`Hello, ${name}!`);
  // return `Greeted ${name} after ${delayTime}ms`;
}



// =============================================================================
// CHALLENGE 2: WORKING WITH MULTIPLE ASYNC OPERATIONS
// =============================================================================

/**
 * CHALLENGE 2: Multiple Async Operations
 * 
 * GOAL: Learn to work with multiple async operations efficiently
 * 
 * WHAT YOU'LL LEARN:
 * - Sequential vs parallel async operations
 * - Promise.all for running operations in parallel
 * - How timing affects your application
 */

console.log("\n=== CHALLENGE 2: MULTIPLE ASYNC OPERATIONS ===\n");

// TASK 2.1: Sequential operations
/**
 * Create a function that performs operations one after another
 * 
 * INSTRUCTIONS:
 * 1. Complete the skeleton code below by filling in the missing parts
 * 2. Use await to call each function one after another (sequential)
 * 3. Make sure to return the correct data structure
 */

async function fetchUserDataSequential(userId) {
  // Simulate API calls with different delays
  async function fetchProfile(id) {
    await delay(800);
    return { id, name: `User${id}`, email: `user${id}@example.com` };
  }

  async function fetchPosts(id) {
    await delay(600);
    return [`Post 1 by User${id}`, `Post 2 by User${id}`];
  }

  async function fetchFriends(id) {
    await delay(700);
    return [`Friend1 of User${id}`, `Friend2 of User${id}`];
  }

  // TODO: Complete this skeleton
  console.time('⏱️  Sequential operations');
  const startTime = Date.now();

  // TODO: Call fetchProfile, fetchPosts, and fetchFriends one by one using await
  // const profile = await ...
  // const posts = await ...
  // const friends = await ...

  const totalTime = Date.now() - startTime;
  console.timeEnd('⏱️  Sequential operations');

  return {
    // TODO: Fill in the return object with profile, posts, friends, totalTime, and method: 'sequential'
  };
}

// TASK 2.2: Parallel operations with Promise.all
/**
 * Create a function that performs the same operations in parallel
 * 
 * INSTRUCTIONS:
 * 1. Complete the skeleton code below using Promise.all
 * 2. Start all operations at the same time (parallel)
 * 3. Use destructuring to get the results from Promise.all
 */

async function fetchUserDataParallel(userId) {
  // Same API simulation functions as above
  async function fetchProfile(id) {
    await delay(800);
    return { id, name: `User${id}`, email: `user${id}@example.com` };
  }

  async function fetchPosts(id) {
    await delay(600);
    return [`Post 1 by User${id}`, `Post 2 by User${id}`];
  }

  async function fetchFriends(id) {
    await delay(700);
    return [`Friend1 of User${id}`, `Friend2 of User${id}`];
  }

  // TODO: Complete this skeleton
  console.time('⚡ Parallel operations');
  const startTime = Date.now();

  // TODO: Use Promise.all with destructuring to get all results at once
  // const [profile, posts, friends] = await Promise.all([
  //   // TODO: Add the three function calls here
  // ]);

  const totalTime = Date.now() - startTime;
  console.timeEnd('⚡ Parallel operations');

  return {
    // TODO: Fill in the return object with profile, posts, friends, totalTime, and method: 'parallel'
  };
}



// =============================================================================
// CHALLENGE 3: REAL API CALLS WITH FETCH
// =============================================================================

/**
 * CHALLENGE 3: Using Fetch API with Async/Await
 * 
 * GOAL: Learn to make real HTTP requests using fetch and async/await
 * 
 * WHAT YOU'LL LEARN:
 * - Using fetch() with async/await
 * - Handling HTTP errors properly
 * - Processing JSON responses
 */

console.log("\n=== CHALLENGE 3: FETCH API WITH ASYNC/AWAIT ===\n");

// TASK 3.1: Basic fetch with error handling
/**
 * Create a function that fetches data from a public API
 */

async function fetchRandomUser() {
  // TODO:
  // 1. Use fetch to get data from 'https://randomuser.me/api/'
  // 2. Check if the response is ok (response.ok)
  // 3. Parse the JSON response
  // 4. Return the user data (results[0])
  // 5. Handle any errors that might occur

  // SKELETON:
  // try {
  //     const response = await fetch('https://randomuser.me/api/');
  //     
  //     if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     
  //     const data = await response.json();
  //     return data.results[0];
  // } catch (error) {
  //     console.error('Error fetching user:', error);
  //     throw error;
  // }
}





// =============================================================================
// TESTING YOUR SOLUTIONS
// =============================================================================

/**
 * Test functions to verify your implementations
 * Uncomment these one by one as you complete each task
 */

async function testChallenges() {
  console.log("🧪 Testing your async/await implementations...\n");

  // Test Challenge 1
  try {
    console.log("--- Testing Challenge 1 ---");

    // Test delay function
    // console.log("Testing delay function...");
    // const start = Date.now();
    // await delay(1000);
    // console.log(`Delay took: ${Date.now() - start}ms (should be ~1000ms)\n`);

    // Test sayHelloAfterDelay
    // console.log("Testing sayHelloAfterDelay...");
    // const greeting = await sayHelloAfterDelay("Alice", 500);
    // console.log(`Result: ${greeting}\n`);



  } catch (error) {
    console.error("Challenge 1 failed:", error.message);
  }

  // Test Challenge 2
  try {
    console.log("--- Testing Challenge 2 ---");

    // Test sequential vs parallel
    // console.log("Testing sequential operations...");
    // const sequentialResult = await fetchUserDataSequential(123);
    // console.log(`Sequential took: ${sequentialResult.totalTime}ms`);

    // console.log("Testing parallel operations...");
    // const parallelResult = await fetchUserDataParallel(123);
    // console.log(`Parallel took: ${parallelResult.totalTime}ms`);
    // console.log(`Parallel is ${Math.round(sequentialResult.totalTime / parallelResult.totalTime)}x faster!\n`);



  } catch (error) {
    console.error("Challenge 2 failed:", error.message);
  }

  // Test Challenge 3
  try {
    console.log("\n--- Testing Challenge 3 ---");

    // Test basic fetch
    // console.log("Testing random user fetch...");
    // const user = await fetchRandomUser();
    // console.log(`Fetched user: ${user.name.first} ${user.name.last}`);





  } catch (error) {
    console.error("Challenge 3 failed:", error.message);
  }

  console.log("\n✅ Testing complete! Uncomment the test code as you implement each function.");
}

testChallenges();

/**
 * 📚 LEARNING SUMMARY
 * 
 * After completing these challenges, you should understand:
 * 
 * 1. ASYNC/AWAIT BASICS:
 *    - async functions always return Promises
 *    - await pauses execution until Promise resolves
 *    - Use try/catch for error handling
 * 
 * 2. PERFORMANCE PATTERNS:
 *    - Sequential: Operations happen one after another (slower)
 *    - Parallel: Operations happen at the same time (faster)
 *    - Use Promise.all for parallel operations
 * 
 * 3. ERROR HANDLING:
 *    - Always handle errors in async operations
 *    - Use Promise.allSettled when some operations might fail
 *    - Provide fallbacks for failed operations
 * 
 * 4. REAL-WORLD APIS:
 *    - Always check response.ok before parsing
 *    - Handle network timeouts
 *    - Gracefully handle API failures
 * 
 * 🎯 NEXT STEPS:
 * - Practice with different APIs
 * - Learn about async generators for large datasets
 * - Explore advanced patterns like retry logic
 * - Build a small project using these patterns
 */


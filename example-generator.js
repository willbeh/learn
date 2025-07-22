// Utility function for random delays
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Simulate processing a single employee with random processing time
async function processEmployee(employee) {
  const processingTime = Math.random() * 1000 + 500; // 500-1500ms
  console.log(`  🔄 Processing ${employee.name} (estimated ${processingTime.toFixed(0)}ms)`);

  await delay(processingTime);

  return {
    id: employee.id,
    name: employee.name,
    status: 'processed',
    processedAt: new Date().toISOString(),
    processingTime: processingTime.toFixed(0) + 'ms'
  };
}

// Async generator that processes employees in batches
async function* batchEmployeeProcessor(employees, batchSize = 5, yieldSize = 2) {
  console.log(`\n📋 Starting batch processing: ${employees.length} employees, ${batchSize} at a time, yielding ${yieldSize} results per batch\n`);

  for (let i = 0; i < employees.length; i += batchSize) {
    const batch = employees.slice(i, i + batchSize);
    console.log(`\n🚀 Batch ${Math.floor(i / batchSize) + 1}: Processing ${batch.length} employees in parallel`);
    console.time(`Batch ${Math.floor(i / batchSize) + 1} total time`);

    // Process all employees in the current batch in parallel
    const batchPromises = batch.map(employee => processEmployee(employee));
    const batchResults = await Promise.all(batchPromises);

    console.timeEnd(`Batch ${Math.floor(i / batchSize) + 1} total time`);
    console.log(`✅ Batch ${Math.floor(i / batchSize) + 1} completed\n`);

    // Yield results in smaller chunks (yieldSize at a time)
    for (let j = 0; j < batchResults.length; j += yieldSize) {
      const chunk = batchResults.slice(j, j + yieldSize);
      console.log(`📤 Yielding ${chunk.length} results:`);
      chunk.forEach(result => {
        console.log(`   ✓ ${result.name} - ${result.status} (${result.processingTime})`);
      });
      yield chunk;
    }
  }
}

// Sample employee data
const employees = [
  { id: 1, name: 'Alice Johnson', department: 'Engineering' },
  { id: 2, name: 'Bob Smith', department: 'Marketing' },
  { id: 3, name: 'Charlie Brown', department: 'Sales' },
  { id: 4, name: 'Diana Prince', department: 'HR' },
  { id: 5, name: 'Edward Norton', department: 'Engineering' },
  { id: 6, name: 'Fiona Green', department: 'Finance' },
  { id: 7, name: 'George Wilson', department: 'IT' },
  { id: 8, name: 'Helen Davis', department: 'Marketing' },
  { id: 9, name: 'Ian Malcolm', department: 'Research' },
  { id: 10, name: 'Julia Roberts', department: 'Sales' },
  { id: 11, name: 'Kevin Hart', department: 'HR' },
  { id: 12, name: 'Lisa Simpson', department: 'Engineering' },
  { id: 13, name: 'Mike Tyson', department: 'Security' },
  { id: 14, name: 'Nancy Drew', department: 'Investigation' },
  { id: 15, name: 'Oscar Wilde', department: 'Content' },
  { id: 16, name: 'Penny Lane', department: 'Music' },
  { id: 17, name: 'Quincy Jones', department: 'Production' },
  { id: 18, name: 'Rachel Green', department: 'Fashion' },
  { id: 19, name: 'Steve Jobs', department: 'Innovation' },
  { id: 20, name: 'Tina Turner', department: 'Entertainment' }
];

// Main execution function
async function main() {
  console.time('Total processing time');
  console.log('🏢 Employee Batch Processing Demo');
  console.log('==================================');

  const processedEmployees = [];

  // Use the async generator
  for await (const batch of batchEmployeeProcessor(employees, 5, 2)) {
    processedEmployees.push(...batch);
    console.log(`📊 Progress: ${processedEmployees.length}/${employees.length} employees processed\n`);

    // Small delay between yielded batches to show the streaming nature
    await delay(200);
  }

  console.timeEnd('Total processing time');
  console.log('\n📈 Final Summary:');
  console.log(`✅ Successfully processed ${processedEmployees.length} employees`);
  console.log('🎯 Processing completed with batched parallel execution!');
}

// Run the example
main().catch(console.error);
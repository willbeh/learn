function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Create an async generator for each number
async function* singleNumberGenerator(num, delayMs) {
  const randomDelay1 = Math.random() * (1000 - 200) + 200;
  const randomDelay2 = Math.random() * (1000 - 200) + 200;

  await delay(delayMs + randomDelay1);
  yield {
    type: 'first',
    value: num
  };

  await delay(delayMs + randomDelay2);
  yield {
    type: 'second',
    value: num
  };
}

async function processNumberStream(count, delayMs) {
  const firstValues = [];
  const secondValues = [];

  // Start all generators concurrently
  const generatorPromises = [];

  for (let i = 1; i <= count; i++) {
    const generatorPromise = (async () => {
      const generator = singleNumberGenerator(i, delayMs);

      console.time(`Number ${i} arrived`);

      for await (const data of generator) {
        if (data.type === 'first') {
          console.log('first value', data.value);
          firstValues.push(data.value);
        } else {
          console.log('second value', data.value);
          secondValues.push(data.value);
        }
      }

      console.timeEnd(`Number ${i} arrived`);
    })();

    generatorPromises.push(generatorPromise);
  }

  // Wait for all generators to complete
  await Promise.all(generatorPromises);

  console.log('firstValues', firstValues);
  console.log('secondValues', secondValues);
  return {
    firstValues,
    secondValues
  };
}

// Test the parallel version with async generators
console.log('=== Testing Parallel Async Generators ===');
await processNumberStream(5, 500);
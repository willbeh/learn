const randomNumbers = [83, 13, 27, 49, 71, 19, 31, 53, 67, 89];

const filteredNumbers = randomNumbers.filter(number => number > 50);

// use lambda to `filter` out number more than 50, 
// then `sort` the numbers in descending order
// const result = ......
// console.log(result)
// expected result: [89, 83, 71, 67, 53]
// sum the numbers in the result using `reduce` method
// const sum = ......
// console.log(sum)
// expected result: 363

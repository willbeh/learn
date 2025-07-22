const randomNumbers = [83, 13, 27, 49, 71, 19, 31, 53, 67, 89];

const filteredNumbers = randomNumbers.filter(number => number > 50);

const sortedNumbers = filteredNumbers.sort((a, b) => b - a);

const sum = sortedNumbers.reduce((acc, number) => acc + number, 0);

console.log(sum);
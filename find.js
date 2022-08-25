const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(num => num % 5 === 0) //find will give only first value
const fivesAll = numbers.filter(num => num % 5 === 0); //filter will give all values

console.log(fives);
console.log(fivesAll);
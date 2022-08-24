//...
const numbers = [12, 56, 89, 999, 202];
//console.log(numbers); // it will show full array
//console.log(...numbers); //... it will show only numbers

const largest = Math.max(numbers); //it will not find the max value because this is a array
const largest1 = Math.max(...numbers); //it will find the max value because its not a array for ...
//console.log(largest); 
//console.log(largest1); 


const numbers2 = [222,123,45, ...numbers , 34,777]; //copy array in array
console.log(numbers2);
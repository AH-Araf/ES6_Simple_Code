const numbers= [12,56,87,46,44];
const half = numbers.map(n => n/2); //any variable you can take like- a,x,n,y,i
console.log(half);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady'];
const firstLetters = friends.map(f => f[0]);
const fiveLetters = friends.map(f => f[6]);
console.log(firstLetters);
console.log(fiveLetters);

const nameLength = friends.map(f => f.length);//leangth of all string type array
console.log(nameLength);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(items)
console.log(prices);
//destructuring
const student = {
    name: 'araf',
    address: 'cumilla',
    phone: '01312010261',
    id: 14
}

const {address} = student;
console.log(address);
// const phone = student.phone;
// const id = student.id;
// const address = student.address;
//console.log(student.phone);
//console.log(phone);
//console.log(address);
const {age, name} = {name: 'araf', age: 22, profession: 'web developer'}
console.log(age);


//array destructuring
const [a,b] = [44, 98, 102, 400];
console.log(a,b);
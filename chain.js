const student = [{ name: 'araf', address: 'cumilla', phone: '01312010261', id: 14 }]
console.log(student[0].name);

const data = {
    count: 5000,
    data: [
        {id:1, name: 'babul', age:18},
        {id:2, name: 'kabul', age:20},
    ]
}
console.log(data.data[0].age); //sob gular vitor theke age k access korbe


const user= {
    name: 'Thomas Muller',
    address: {
        street:{
            first: '35/A Munchen',
            second: 'Third Floor',
            third: 'Right side'
        }
    }
}

const findStreet = user?.address?.street?.first; //chaining 
console.log(findStreet);
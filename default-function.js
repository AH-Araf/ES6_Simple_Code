//default value 0, it will not return NaN.
function add(first = 0, second = 0){
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

// -----------------------------------------------------------------------//

function fullName (first, last = 'Hossain'){
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Aslam');
console.log(name);
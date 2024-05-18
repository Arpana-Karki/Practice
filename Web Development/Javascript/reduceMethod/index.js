// reduce method is used to reduce the elements of an array to a single value

/* in a reduce method the definition of a callback function consists of accumulator and element

    accumulator means the previous element and element means the next element 

*/ 

// e.g. 1
let numbers =[3,4,5,6,7,8,9];
const newNm =numbers.reduce(sum);
console.log(`$ ${newNm}`);

function sum(accumulator,element){
    return accumulator + element ;
    // Here,considering the array numbers, accumulator will be 3 for first iteration and element will be 4 .Similarly, for second iteration accumulator will be 7(3+4=7)and element will be 5 .This process  continues till the last element of the array and returns a single value at last.
}

//e.g. 2
let age =[23,34,22,56,78,2,13,8,1];
const maxAge =age.reduce(getMaxAge);
console.log(`${maxAge} yrs old`)

function getMaxAge(accumulator,element){
    return Math.max(accumulator,element);
}

//e.g. 3
const minAge =age.reduce(getMinAge);
console.log(`${minAge} yrs old`)

function getMinAge(accumulator,element){
    return Math.min(accumulator,element);
}
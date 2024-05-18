// function expressions : a way to define functions as values or variables

// function expression allows us to pass a whole function as a parameter to another function

//function expressions are used when we need to perform a function only once 

//one of the benefits of using function expressions is we don't need to think about function names


//e.g. 1
//hello will be printed after a delay of 3 seconds

setTimeout(function(){
    console.log("hello");
},3000);

//e.g. 2
let numbers =[35,24,2,3,4,5,6,7,8,9];

const square = numbers.map(function(element){
    return Math.pow(element,2);
});

console.log(square);

//e.g. 3
const cube = numbers.map(function(element){
    return Math.pow(element,3);
});

console.log(cube);

//e.g. 3
const even = numbers.filter(function(element){
    return element%2===0;
});
console.log(even);

//e.g. 4
const odd = numbers.filter(function(element){
    return element%2!==0;
});
console.log(odd);

//e.g. 5
const subtraction = numbers.reduce(function(accumulator,element){
    return accumulator - element;
});
console.log(subtraction);




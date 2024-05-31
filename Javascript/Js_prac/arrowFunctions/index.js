// arrow functions are a concise way to write function expressions 
//used for simple functions that we use only once
// (parameter)=>  some code


//e.g. 1
setTimeout(()=>console.log(`hello`),3000);

//e.g. 2
let numbers =[9,8,7,5,3,3,12,6];

const sqr=numbers.map((element)=>Math.pow(element,2));
console.log(sqr);


//e.g. 3
const cube = numbers.map((element)=>Math.pow(element,3));
console.log(cube);


//e.g. 4
const evenNm=numbers.filter((element)=>element%2 === 0);
console.log(evenNm);


//e.g. 5
const oddNm=numbers.filter((element)=>element%2 !== 0);
console.log(oddNm);


//e.g. 6
const sum=numbers.reduce((accumulator,element)=> accumulator + element);
console.log(sum);
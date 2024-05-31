/*
map() method accepts a callback assigns that  function to each element of an array and returns a new array
map() method is similar to forEach() method but in forEach() array the 
provided array is changed and replaced by a new array whereas in map() method the provided array is unchanged and a new array is returned

*/

//e.g. 1

let numbers=[3,4,5,6,7,8];
const newNm =numbers.map(square);
console.log(newNm);

function square(element,index,array){
    return Math.pow(element,2);
}

//e.g. 2

let number=[3,4,5,6,7,8];
const newN =numbers.map(cube);
console.log(newN);

function cube(element){
    return Math.pow(element,3);
}

//e.g. 3

let foods=["pizza","frenchfries","pasta"];
const fd =foods.map(upperCase);

console.log(fd);

function upperCase(element){
    return element.toUpperCase();
}

//e.g. 4

const foo =foods.map(lowerCase);

console.log(foo);

function lowerCase(element){
    return element.toLowerCase();
}

//e.g. 5

let dates =["2024-2-1","2024-2-24","2024-2-23"];
const newFormat = dates.map(change);
console.log(newFormat);

function change(element){
    const parts=element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

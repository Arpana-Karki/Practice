// a filter method creates new array by filtering out elements

//e.g. 1
 1
let numbers=[1,2,4,3,5,6,7,8,9];
const evN = numbers.filter(evenNumber);
console.log(evN);

function evenNumber(element){
    return element%2===0;

}

//e.g. 2


const odN = numbers.filter(oddNumber);
console.log(odN);

function oddNumber(element){
    return element%2 !==0;

}

//e.g. 3
1
let age=[1,2,43,3,54,6,47,7,80,69];
const adult = age.filter(adlt);
const child =age.filter(notAdlt);
console.log(adult);
console.log(child);

function adlt(element){
    return element>=18;

}

function notAdlt(element){
    return element<18;

}

//e.g. 4

let fruits=["pomegranate","kiwi","banana","dragonfruit","litchi","strawberry","mango"];

const longWord=fruits.filter(lng);
console.log(longWord);

const shortWord=fruits.filter(shrt);
console.log(shortWord);


function lng(element){
    return element.length>5;

}

function shrt(element){
    return element.length<=5;

}



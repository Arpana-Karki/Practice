
/*
forEach() method is used to iterate over the elements of an array and apply specified function(callback) to each elements
while using forEach()  element, index,array are provided

*/

//example 1

let number =[2,3,4,5,8];
 number.forEach(displayElmnt);
 

 function displayElmnt(element){
    console.log(element);
 }

 //example 2

 let fruits=["apple","banana","strawberry","kiwi","litchi"];

 fruits.forEach(upperCase);
 fruits.forEach(display);
 function upperCase(element,index,array){
    array[index]=element.toUpperCase();
    
}

function display(element){
    console.log(element);
}

//example 3

 fruits.forEach(lowerCase);
 fruits.forEach(display);
 function lowerCase(element,index,array){
    array[index]=element.toLowerCase();
    
}

function display(element){
    console.log(element);
}

//example 4

number.forEach(square);
number.forEach(display);

function square(element,index,array){
    array[index]=Math.pow(element,2);
}

//example 5
let age=[3,4,5,6,7,8];

age.forEach(cube);
age.forEach(display);

function cube(element,index,array){
    array[index]=Math.pow(element,3);
}

//example 6

let nm=[2,3,4,5,6,6]
nm.forEach(triple);
nm.forEach(display);

function triple(element,index,array){
    array[index]=element*3;
}

//example 6

let n=[2,3,4,5,6,6]
n.forEach(double);
n.forEach(display);

function double(element,index,array){
    array[index]=element*2;
}

//example 7

let naam=["arpana","rekha","sushma","aayush","arju"];
naam.forEach(fname);
naam.forEach(display);

function fname(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}


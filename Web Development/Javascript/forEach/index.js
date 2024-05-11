
/*
forEach() method is used to iterate over the elements of an array and apply specified function(callback) to each elements
while using forEach()  element, index,array are provided

*/

//example 1

let number =[2,3,4,567,,8];
 number.forEach(displayElmnt);
 

 function displayElmnt(element){
    console.log(element);
 }

 //example 2

 let fruits=["apple","banana","strawberry","kiwi","litchi"];

 fruits.forEach(upperCase);
 function upperCase(element,index,array){
    array[index]=element.toUpperCase();
    
}

function display(element){
    console.log(element);
}
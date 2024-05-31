//functions in js

function add(x,y){
    return x+y;
}
console.log(add(2,3));


function subtract(x,y){
    return x-y;

}
let sub=subtract(5,6);

console.log(sub);


function divide(x,y){
    return x/y;
}
console.log(divide(34,2));


function isEven(number){
    return number % 2 === 0 ? true:false;
}

console.log(isEven(4));

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
     }

}
console.log(isValidEmail("arp@gmail.com"));
console.log(isValidEmail("arpgmail.com"));



//variable scope

/*varaible scope includes local and global variable 
if there's both local and global variable then local variable has more priority
if theres two functions and if a varaible is declared and defined outside the functions an accessible to both functions then it is called global variable.
Similarly,if a varaible is defined inside a function then it isnot accessible by another function,it is called local variable .
In local variable ,varaible name  in two different functions can be same whereas in global variable name can't be same.

*/

//global variable

let x=2;

function fn1(){
    return x;

}
console.log(fn1());

function fn2(){
    return x;

}
console.log(fn2());

//local variable 

function f1(){
    let z=4;
    return z;
}
console.log(f1());

function f2(){
    let z=5;
    return z;
}
console.log(f2());

//both global and local variable simultaneously

let k=9;

function n1(){
    k=8;
    return k;

}
console.log(n1());

function n2(){
    k=7;
    return k;

}
console.log(n2());




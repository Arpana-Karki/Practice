//rest parameters are similar to spread operator but works opposite of spread operator 
//rest parmaeter is also reperesented by ...
//rest parameter bundles elements into an array

function openFridge(...foods){
    //console.log(foods);
    console.log(...foods);
}

const food1="pizza";
const food2="french fries";
const food3="burger";
const food4="mo:mo";

openFridge(food1,food3,food2,food4);


//for calculating sum of numbers

function getSum(...numbers){
    let result=0;
    for (nm of numbers){

        result+=nm;
    }
    return result;

}

const sum=getSum(23,334,8,6,5,4);
//console.log(sum);
console.log(`Your total sum is $${sum}`);

//for calculating average
function getAverage(...total){
    let rslt=0;
    for (ttl of total){

        rslt+=ttl;
    }
    return rslt/total.length;

}

let avg=getAverage(23,334,8,6,5,4);
avg=Math.ceil(avg);
console.log(`Your average is ${avg} .`);


//for string
function getUsername(...name){
    return name.join(" ");
}

let userName =getUsername("Hari","Bahadur","Karki");
console.log(`Your userName is ${userName}.`);





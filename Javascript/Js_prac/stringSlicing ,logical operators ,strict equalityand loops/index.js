//string slicing
//string slicing slices strings using .slice(fromWhichWeStartSlicing,beforeWhichWeHaveToSlice)

let fullName ="Arpana Karki";
let fName=fullName.slice(0,6);
let lName =fullName.slice(fullName.indexOf(" "));
console.log(fName);
console.log(lName);

let Lname =fullName.slice(-5);
console.log(Lname);



//logical operators

let tmpr=32;
if(tmpr>=-15 && tmpr<=100){

    if (tmpr<0){
        msg="it's freezing outside";
    }

    else if(tmpr<15){
        msg="it's cold outside";
    }
    else if (tmpr>15 || tmpr<35) {
            msg="the temperaturer is good outside";
    }
    else  {
            msg="it's too hot outsside";
    }
}
else{
        msg="Please ! Enter a valid temperature ";
}

console.log(msg);



//loops

//for loop
for(i=10;i>0;i-=2){

    console.log(i);
}

//while loop
let birthday=true;
let birthdayCount=0;
let nm = window.prompt("enter a name to wish happy birthday");
while(birthday){
    console.log("happy birthday to you");
    birthdayCount++;

    if(birthdayCount==3){
        console.log(`HAPPY BIRTHDAY DEAR ${nm} `);
        birthday=false;
    }
}

//do while loop
let bDay=true;
let bDayCount=0;
let n = window.prompt("enter a name to wish ");
do{
    console.log("happy birthday to you");
    

}
while(birthday){
bDayCount++;
    if(birthdayCount==3){
        console.log(`HAPPY BIRTHDAY DEAR ${n} `);
        birthday=false;
    }
}

//strict equality

/*

= means assigning value
== means checking/comparing value excluding datatype
=== means checking/comparing value including datatype
!= means not equals to 
!== means not equals to considering datatype

*/

let num=9;
let digit="9";
  
//using==

if(num==digit){
    console.log("num and digit are equal");
}

else{
    console.log("num and digit arenot equal");

}

//using ===

if(num===digit){
    console.log("num and digit are equal");
}

else{
    console.log("num and digit arenot equal");
    
}

//using !=

if(num!=digit){
    console.log("num and digit arenot equal");
}

else{
    console.log("num and digit are equal");
    
}

//using !== 

if(num!==digit){
    console.log("num and digit arenot equal");
}

else{
    console.log("num and digit are equal");
    
}



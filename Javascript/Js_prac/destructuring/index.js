// destructuring is used to extact values from arrays and objects and assign them to variables
// [] is used for destructuring array
//{} is used for destructuring objects


//e.g. 1 :swapping values of two variables

let a = 1;
let b =2;

[a,b]=[b,a];

console.log(a);
console.log(b);


//e.g. 2: swapping  elements in an array

const colors =["black","white","peach","red","blue"];
[colors[1],colors[4],colors[2]]=[colors[4],colors[2],colors[1]];
console.log(colors); 


//e.g. 3: assigning elements to variables

const [firstColor,secondColor,thirdColor,...extraColors]=colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);//creating an array extraColors for remaining colors and accessing  them usng extraColors
console.log(...extraColors);//using spread parameter to access extraColors


//e.g. 4: Extract values from objects

const person1 ={
    firstName:"Spongebob",
    lastName:"SquarePants",
    age:"31",
    job:"xyz",

}

const person2 ={
    firstName:"Ojaswi",
    lastName:"Karki",
    age:"7",

}

const {firstName,lastName,age,job="unemployed"}=person2; // this will display job as 'unemployed' by default if a person doesn't have one.
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


//e.g. 5: Destructure in function parameters

 function displayPerson({firstName,lastName,age,job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
 }

//creation of object person1 and person2 already done in e.g. 4

displayPerson(person1);
displayPerson(person2);
 




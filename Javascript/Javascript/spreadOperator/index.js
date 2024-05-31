//spread operator means... which spreads array into seperate elements and helps to access the content inside an array

let weight=[23,45,98,45,34,87,25];
console.log(weight);

let max=Math.max(...weight);
console.log(max);

let min=Math.min(...weight);
console.log(min);

let nm=["appu","krk"];
let newArr =[...nm,...weight];
console.log(newArr);

let userName="Arpana Karki";
console.log(...userName);
let letters=[...userName].join("-");
console.log(letters);



//chaining various methods in single line of code is method chaining.

let fullName=" Arpana Karki";
let fName=fullName.trim().slice(0,7).toUpperCase();
console.log(fName);

let lName=fullName.slice(7).toLowerCase();
console.log(lName);
 
let rName=lName +" "+ fName ;
console.log(rName);



/*

    JSON =(Javascript Object Notation) data interchange format.Used for exchanging data between a server and a web application. JSON files {key:value} OR {value1,value2,valu3}

    JSON.stringify() = converts a JS object to a JSON string.
    JSON.parse()= converts  a JSON string to a JS object
*/

/*
const names = ["Arpana","Sushma","Rekha","Nisha","Aayush","Sangharsha"];
const jsonNames = JSON.stringify(names);
console.log(jsonNames);


const person = {
    "name" :"Rekha",
    "age": 32,
    "hobbies" :["reading novel","writing poems", "watching movies","travelling"]
    
};
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

const people = [{
    "name" :"Rekha",
    "age": 32,
    "hobbies" :["reading novel","writing poems", "watching movies","travelling","dancing"]
    
},
{
    "name" :"Sushma",
    "age": 34,
    "hobbies" :[ "watching movies","travelling","knitting","dancing"]
    
},
{
    "name" :"Nisha",
    "age": 27,
    "hobbies" :["reading novel", "watching movies","travelling","dancing","singing","drawing"]
    
}

];
const jsonPeople = JSON.stringify(people);
console.log(jsonPeople);

*/

/*
const jsonNames=`["Arpana","Sushma","Rekha","Nisha","Aayush","Sangharsha"]`;

const jsonPeople=`[{"name" :"Rekha","age": 32,"hobbies" :["reading novel","writing poems", "watching movies","travelling","dancing"]},{"name" :"Sushma","age": 34,"hobbies":[ "watching movies","travelling","knitting","dancing"]},{"name" :"Nisha","age": 27,"hobbies" :["reading novel", "watching movies","travelling","dancing","singing","drawing"]}]`;

const jsonPerson=`{"name" :"Rekha","age": 32,"hobbies" :["reading novel","writing poems", "watching movies","travelling"]}`;

const names = JSON.parse(jsonNames);
const people = JSON.parse(jsonPeople);
const person = JSON.parse(jsonPerson);

console.log(names);
console.log(jsonNames);

console.log(people);
console.log(jsonPeople);

console.log(person);
console.log(jsonPerson);

*/

fetch("names.json").then(response=>response.json()).then(value=>console.log(value));//response.json also return a promise
fetch("people.json").then(response=>response.json()).then(values=>values.forEach(value=> console.log(value)));
fetch("person.json").then(response=>response.json()).then(value=>console.log(value));
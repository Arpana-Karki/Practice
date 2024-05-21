/*
    objects = a collection of related properties or methods 
    can represent real world objects(person,places,products,...)
    objects ={
        key: value
        function(){}
    }
*/

// e.g. 1
const person = {
    firstName: "Aayush",
    lastName : "Karki",
    age : 14,
    isStudent: true,
    says: function(){
        console.log(`Hello! My name is ${this.firstName} ${this.lastName} 😎 .`)
    },
    //this references to the object where "this" is used
    // "this" keyword doesn't work for arrow functions
}
person.says();

//e.g. 2

const person2 = {
    firstName: "Appu",
    lastName : "Karki",
    age : 14,
    isStudent: true,
    says2: ()=>console.log(`Hello! My name is Arpana Karki.`),

}
person2.says2();
console.log(person2.firstName);
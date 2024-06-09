// nested objects = objects inside another object
// allows us to represent more complex data structure
//child object is enclosed by parent object
// Person{name{},address{}},ShoppingCart{Keyboard{},Monitor{},Mouse{}}


// e.g. 1

class Person{

    constructor(name,age,...address){
        this.name =name,
        this.age = age,
        this.address = new Address(...address)
    }

}

class Address{
    
    constructor(city,district,country){
        this.city = city,
        this.district = district,
        this.country = country
    }
    
}

const person1 = new Person("Jenny",20,"Pokhara","Kaski","Nepal");
console.log(person1.address);
console.log(person1.address);


// e.g. 2

const human = {
    fullName : "Aayush Karki",
    age : 14,
    isStudent : true,
    hobbies :["chess","cooking","travelling","painting"],
    address:{
        city : "Pokhara",
        district : "Kaski",
        country: "Nepal"

    }
}

//way 1 
console.log(human.fullName);
console.log(human.age);
console.log(human.address.city);
console.log(human.address);

//way 2
for(const property in human.address){
    console.log(human.address[property]);
}

//way3
for(const property in human){
    console.log(human[property]);
}

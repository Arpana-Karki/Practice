// inheritance allows a new class to access the properties and methods of an existing class(pare
// inheritance helps in code reusability

class Animal{
    alive=true;

    eat(){
        console.log(`${this.name} is eating .`);

    }
    sleep(){
        console.log(`${this.name} is eating .`);
        
    }
}

class Fish extends Animal{

    name = "Fish";

    swim(){
        console.log(`${this.name} is swimmming .`);

    }
    
}

class Rabbit extends Animal{

    name = "rabbit";
    
    run(){
        console.log(`${this.name} is running .`);

    }
    
}

class Hawk extends Animal{

    name = "Hawk";
    
    fly(){
        console.log(`${this.name} is flying .`);

    }
    
}

const Fish1 = new Fish();

console.log(Fish1.alive);
Fish1.eat();
Fish1.sleep();
Fish1.swim();

Fish1.alive = false;

console.log(Fish1.alive);

const Rabbit1 = new Rabbit();


console.log(Rabbit1.alive);
Rabbit1.eat();
Rabbit1.sleep();
Rabbit1.run();

Rabbit1.alive = false;

console.log(Rabbit1.alive);


const Hawk1 = new Hawk();

console.log(Hawk1.alive);
Hawk1.eat();
Hawk1.sleep();
Hawk1.fly();

Hawk1.alive = false;

console.log(Hawk1.alive);



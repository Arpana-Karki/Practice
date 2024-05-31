// super keyword is used to access the constructor ,methods and properties of the parent class(superclass)
// it helps in code reusability

class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    move(speed){
        console.log(`${this.name} moves at a speed of ${speed} . `);

    }
}

class Fish extends Animal{

    constructor (name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;

    }   
    swim(){
        console.log(`${this.name} can swim .`);
        
        super.move(this.swimSpeed);
        
    }
}


class Rabbit extends Animal{

    constructor (name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;

    }   
    run(){
        console.log(`${this.name} can run .`);
        
        super.move(this.runSpeed);
        
    }
}

const fish1 = new Fish("abc",2,12);
console.log(fish1.age);
console.log(fish1.name);
console.log(fish1.swimSpeed);
fish1.swim();

const rabbit1 = new Rabbit("rabby",2,15);
console.log(rabbit1.age);
console.log(rabbit1.name);
console.log(rabbit1.runSpeed);
rabbit1.run();
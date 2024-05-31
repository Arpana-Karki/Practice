//  static keyword defines properties or methods that belongs to  class itaself  rather than the objects created from the class (clas owns anything static not the objects)


//e.g. 1
class Calculate{

    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;

    }

    static getArea(radius){
        return (this.PI*radius*radius).toFixed(2);

    }

    static getCircumfernce(radius){
        return (2*this.PI*radius).toFixed(2);
    }

}

//while calling a static method we don't need to create an object of the class and then call the method

//we can directly call the static method using the class name as static method belongs to the class rather than the object of the class

// same goes for static varaible

console.log(Calculate.getArea(10));
console.log(Calculate.getDiameter(10));
console.log(Calculate.getCircumfernce(10));
console.log(Calculate.PI);



//e.g. 2
class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++;
        //userCount increases by 1 everytime we create new object of User 
    }

    static getUserCount(){
        console.log(`There are  ${User.userCount} users online`);

    }

    sayHello(){
        console.log(`Hello! ${this.userName}`);
    }


}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Nezuko");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

/*classes provides a more cleaner and more  structured way to work with objects compared to traditional constructor functions 
    e.g. static keyword,inheritance,encapsulation,e.t.c.

    "static" keyword is used for defination of constant values.We use "static" instead of "const"
    inside class.
*/


//e.g. 1
class Student{
    constructor(name,age,stream,semester){
        this.name=name;
        this.age=age;
        this.stream=stream;
        this.semester=semester;

    }

display(){
    console.log(`Student's name : ${this.name}`);
    console.log(`Student's age : ${this.age}`);
    console.log(`Student's stream : ${this.stream}`);
    console.log(`Student's semester : ${this.semester}`);

}

}

const student1 =new Student("appu",12,"S.E.","second");
student1.display();


//e.g. 2
class Total{
    
    static tax_percentage = 23;

    constructor(customerName,quantity,price,sum){
        this.customerName=customerName;
        this.quantity=quantity;
        this.price=price;
        this.sum=(price*quantity).toFixed(2);

    }

    totalWithoutTax(){
        console.log(`${this.customerName}`);
        console.log(`${this.sum}`);

    }


    totalWithTax(){
        const finalAmnt = (parseFloat(this.sum) + (parseFloat(this.sum)*(Total.tax_percentage/100))).toFixed(2);
        console.log(`${this.customerName}'s total amount including tax is ${finalAmnt}`);

    }

}

const cus1 = new Total("aayush",3,120.9);
cus1.totalWithoutTax();
cus1.totalWithTax();
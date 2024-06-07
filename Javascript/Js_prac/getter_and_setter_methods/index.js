// getter method is a special method that makes a property readable

// setter method is a special method that makes a property writeable

// with the help of getter and setter method we can validate and verify a value while reading or writing a property

//e.g. 1
class Calculate{

    constructor(width,height){
        this.width = width;
        this.height = height;
        
    }

   
    set width(newWidth){

        if(newWidth>0){
            return this._width = newWidth;   
        }

        else{
            console.error("Width must be a poisitive number");
        }
    }

    set height(newHeight){
    
        if(newHeight>0 ){
            return this._height = newHeight;   
        }
    
        else{
            console.error("Height must be a poisitive number");
        }
    }

  

    get width(){
        return this._width.toFixed(2) ;
    }

    get height(){
        return this._height.toFixed(2) ;

    }

    get area(){
        return (this._width * this._height).toFixed(2);
    }

}

const calculate1 = new Calculate(2,3);

console.log(calculate1.height);
console.log(calculate1.width);


// e.g. 2
class FullName{

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        
    }

   
    set firstName(newFirstName){

        if(typeof newFirstName =="string" &&newFirstName.length>0){
            return this._firstName = newFirstName;   
        }

        else{
            console.error("FirstName must be a non -empty string");
        }
    }

    set lastName(newLastName){
    
        if(typeof newLastName == "string" &&newLastName.length>0 ){
            return this._lastName = newLastName;   
        }
    
        else{
            console.error("LastName must be a non-empty string");
        }
    }

    set age(newAge){
    
        if(typeof newAge == "number" && newAge>0 ){
            return this._age = newAge;   
        }
    
        else{
            console.error("LastName must be a non-empty string");
        }
    }

  

    get firstName(){
        return this._firstName ;
    }

    get lastName(){
        return this._lastName ;

    }

    get age(){
        return this._age ;

    }

    get fullName(){
        return this._firstName + " " + this._lastName ;

    }

}

const fullName1 = new FullName("appay","krk",20);

console.log(fullName1.fullName);
console.log(fullName1.age);
console.log(fullName1.firstName);
console.log(fullName1.lastName);



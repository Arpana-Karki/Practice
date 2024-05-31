// getter method is a special method that makes a property readable

// setter method is a special method that makes a property writeable

// with the help of getter and setter method we can validate and verify a value while reading or writing a property

class Calculate{

    constructor(width,height,age){
        this.width = width;
        this.height = height;
        this.age = age;
    }

   
    set width(newWidth){

        if(newWidth>0 && typeOf newWidth == "number"){
            return this._with = newWidth;   
        }

        else{
            console.error("Width must be a poisitive number");
        }
    }

    set height(newHeight){
    
        if(newHeight>0 && typeOf newHeight == "number"){
            return this._height = newHeight;   
        }
    
        else{
            console.error("Height must be a poisitive number");
        }
    }

    set age(newAge){

        if(newAge>0 &&typeof newWidth == "number"){
            return this._age = newAge;   
        }

        else{
            console.error("Age must be a poisitive number");
        }
    }
}

}


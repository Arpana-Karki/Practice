
// error = an object thath is created to reperesenta problem that occurs 
// occur often with useer input  or establishing a connection

//try {} = encloses code that might potentially cause an error 
//catch{} = catch and handle any thrown errors from try{}
//finally{}= (optional) always executes .used mostly for clean up e.g. close files, close connections, release resources

//network errors
// promise rejection
//security errors


try{
    const dividend = Number(window.prompt("Enter a dividend"));
    const divisor = Number(window.prompt("Enter a divisor"));
    const result = dividend/divisor;
    console.log(result);

    if(divisor === 0){
         
        throw new Error("Divisor  can't be 0");

    }

    if(isNaN(dividend)|| isNaN(divisor)){

        throw new Error("Enter a valid number");
    }

}

catch(error){
console.error(error);
}

finally{
    console.log("this code executes anyway");
}

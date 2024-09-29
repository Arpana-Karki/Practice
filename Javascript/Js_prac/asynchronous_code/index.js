// synchronous code = executes line by line      consecutively in a sequential manner. Code waits for an operaation to completer.

// asynchronous code = Allows multiple operations to be performed concurrently without waiting.Doesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data). Handled with: Callbacks ,Promises, Async/Await


//e.g. 1 
/*setTimeout(()=>{console.log("task 1")},4000); // this is an asynchronous code

console.log("task 2");// this is a synchronous code 
console.log("task 3");// this is a synchronous code 
console.log("task 4");// this is a synchronous code 
*/

//e.g. 2
function function1(callback){
    setTimeout(()=>{console.log("task 6");
        callback();
    },3000);// function2 ia passed as a callback to function1 and only after execution of the task 6 message function2 execution occurs(function2 has to wait for 3000 for execution)
}

function function2(){
    console.log("task 7");
    console.log("task 8");
    console.log("task 9");
}

function1(function2);
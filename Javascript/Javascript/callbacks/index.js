/* callbacks
callbacks passes one function as an argument to another function
callbacks are used in :
1)reading a file 
2)network requests
3)interacting with databases
*/


//e.g. 1)

goodbye(hello);

function goodbye(callback){
    console.log("godbye!");
    callback();
}

function hello(){
    console.log("hello!");
}

//e.g. 2)

sum(displayPage,1,2);

 
 function sum(callback,x,y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
     console.log(result);
 }

 function displayPage(result){
    document.getElementById("solution").textContent=result;
}


 
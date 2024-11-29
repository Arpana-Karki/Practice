/* Callback hell =
                 Situation in Javascript where callbacks are nested within other callbacks to the     degree where the code is difficult to read. Old pattern to handle asynchronous functions.
                 Use Promises + async/await to avoid Callback hell
*/

function task1(callback){
    setTimeout(()=>{
        console.log("task1 completed");
        callback();
    },2000);
}

function task2(callback){
    setTimeout(()=>{
        console.log("task2 completed");
        callback();
    },1500);
}

function task3(callback){
    setTimeout(()=>{
        console.log("task3 completed");
        callback();
    },3000);
}

function task4(callback){
    setTimeout(()=>{
        console.log("task4 completed");
        callback();
    },500);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("all taks completed");
            });
        });
    });
});

//closures
//closures are a function defined inside of another function ,the inner function has access to the variables and scope of the outer function.Allows for private variables and state maintainance.Used frequently in JS frameworks: React , Vue , Angular


//e.g. 1:
function createCount(){
    let count = 0;

    function increaseCount(){
        count ++;
        console.log(`The count is increased to ${count}`);
    }

    function decreaseCount(){
        count --;
        console.log(`The count is decreased to ${count}`);
    }

    function getCount(){
        console.log(`Total count is ${count}`);
    }

    return {increaseCount,decreaseCount,getCount};
}

const counter = createCount();
counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
counter.decreaseCount();
counter.getCount();


//e.g. 2:
function createScore(){

    let score = 0;
    
    function increaseScore(points){
        score += points;
        console.log(`Your score has been increased by ${points}`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`Your score has been decreased by ${points}`);
    }

    function getScore(){
        console.log(`Your final score is ${score}`);
    }

    return{increaseScore,decreaseScore,getScore}
}

const gameScore = createScore();
gameScore.increaseScore(5);
gameScore.decreaseScore(3);
//gameScore.increaseScore(-1);
//gameScore.decreaseScore(-2);
gameScore.getScore();


//SetTimeout function

// e.g. 1:
function greet(){
    window.alert("Namaste!");
}

setTimeout(greet,4000);

//e.g. 2: setTimeout and clearTimeout using Buttons 
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(()=>window.alert(`Welcome`),3000);
    console.log(`started`);
}

function clearTimer(){
    clearTimer =clearTimeout(timeoutId);
    console.log(`cleared`);
}

 




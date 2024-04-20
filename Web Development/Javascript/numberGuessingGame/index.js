const min=1;
const max=100;

const answer=Math.floor(Math.random()*(max-min+1)+min);
//window.alert(answer);

let attempts=0;
let guess;
let running=true;

while(running){
   guess= window.prompt(`Guess a number between ${min}-${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Please guess a valid number");

    }

    else if(guess<min|| guess>max){
        window.alert("Please guess a valid number");
    }

    else{
        attempts++;
        
        if(guess<answer){
            window.alert("Too less.Please! TRY AGAIN");
        }
        else if(guess>answer){
            window.alert("Too high .Please!try again.");
            
        }
        else{
            window.alert(`Correct!The answer was ${answer}.You guessed the answer in ${attempts} attempt.`);
            running=false;
        }
    }
    

}


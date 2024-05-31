//Ternary Operators
/* variable = condition? toBeExecutedIfConditionIsTrue : toBeExecutedIfConditionIsFalse; */

let x= 18;
let message = x>=18 ? "you are eligible. " :"You arenot eligible ." ;

console.log(message);

let y= 1;
let message2 = y>=18 ? "you are eligible. " :"You arenot eligible ." ;

console.log(message2);

//Switch cases

let age=2;

switch(age){
    case 0:
        information="you were just born ." ;
        break;

        case 18 :
            information="you are eligible .";
            break;

            case 10 :
            information="you arenot eligible.";
            break;

            default :
            information ="age isnot elibility list .";
            break;
}
console.log(information);

let age2= 14;

switch(true){
    case age2=0:
        msg="you were just born.";
        break;
        
        case age2<=18:
            msg="you arenot eligible.";
            break;

            case age2>=18:
                msg="you are eligible.";
                break;

                default:
                    msg="Please!Enter a valid age.";
                    break;
}

let age3=19;
let isSeniorCitizen=true;
let isStudent=false;

switch(false){
    case (age3>18 && age3<70):
        message2="Sorry,age must be between 18 and 70  to qualify for the discount.";
        break;

        case isStudent:
            message2="Sorry,this discount is only available to students.";
            break;

            case isSeniorCitizen:
                message2="Sorry, this discount is only available to senior citizens.";
                break;

                default :
                message2="Congratulations! You are eligible for the discount.";
                break;
}

console.log(message2);





 

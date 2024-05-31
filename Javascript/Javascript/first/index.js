window.alert("Your details");

// variables
let title ="Details";
let fullName ="ARPANA Karki";
let enrolled ="true";


document.getElementById("heading").textContent=`${title}`;
document.getElementById("firstParagraph").textContent=`My name is ${fullName} .`;
document.getElementById("secondParagraph").textContent=`Enrolled: ${enrolled}`;

//operators
/* operator precedence:
    1) Paranthesis ()
    2) Exponents **
    3) Multiplication ,division and modulus
    4) Addition and subtraction */


   let answer=5+6-9%2**3*(1*2);
    console.log(answer);
     answer+=answer;
     console.log(answer);
     answer++;
     console.log(answer);
     answer--;
     console.log(answer);
     answer*=answer;
     console.log(answer);
     answer/=answer;
     console.log(answer);

    let answer2="";
    answer2=Boolean(answer2);
    console.log(answer2 ,typeof answer2);

//Type Conversion
console.log(typeof answer);
answer = String(answer);
console.log(typeof answer);
answer=Boolean(answer);
console.log(answer);

//accepting user input easy way
let age=window.prompt("How old are you?");
console.log(age,typeof age);
age=age+1;
console.log(age);
age= Number(age);
console.log(typeof age);
age=age+2;
console.log(age);

// accepting user input professional way 
let user;
document.getElementById("submission").onclick=function(){
    user=document.getElementById("inputText").value;
    document.getElementById("heading2").textContent=`Hello ! ${user} `


}













     


//SHUFFLE  AN ARRAY

//FISHER -YATES ALGORITHM
const cards =["A",2,3,4,5,6,7,8,9,"J","Q","K"];

shuffle(cards);
console.log(cards);

function shuffle(array){
    for(i=cards.length-1;i>0;i--){
        const random = Math.floor(Math.random()*(i+1));
        [array[i],array[random]] = [array[random],array[i]];
    }
}


//date objects
//DATE OJECTS are objects that contain values for date and time.These date and time can be changed and formatted.

/*
//year,month,day,hour,minute,second,milisecond

//e.g. 1:
const date = new Date();
console.log(date);

const date = new Date(2024,0,1,5,23,34);//month starts from 0
console.log(date);

//e.g.2:
const date = new Date("2024-01-02T11:00:23Z");
console.log(date);

//e.g. 3:
const date =new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliSeconds = date.getMilliseconds();
const dayOfTheWeek = date.getDay();


console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(milliSeconds);
console.log(dayOfTheWeek);

//e.g. 4:
const date = new Date();
date.setFullYear(2023);
date.setMonth(2);
//similarly we can set other parameters also using .set method
console.log(date);
*/

//e.g. 6:
//to print the message if current date matches provided date :
const date1= new Date();
const date2 = new Date(date1.getFullYear());
date2.setMonth(4);// month starts from 0
date2.setDate(15);
date2.setHours(4);
date2.setMinutes(45);
date2.setSeconds(0);
date2.setMilliseconds(0);

if(date1.getTime() === date2.getTime()){
    console.log("Happy Birthday to you! 🥳🥳")
}






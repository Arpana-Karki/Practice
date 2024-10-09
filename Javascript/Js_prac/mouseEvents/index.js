// eventListener = Listen for specific events to create interactive web pages 
// events: click, mouseover,mouseout
// .addEventListener (event, callback/anonymous function/arrow function);


/* Without Button


const myBox = document.getElementById("myBox");
myBox.addEventListener("click",changeBackgroundColor);

function changeBackgroundColor(event){
    event.target.textContent ="Don't stress. You will make it. 🦾🦾🥹"
    event.target.style.backgroundColor ="lightBlue";
}

myBox.addEventListener("mouseover",MouseOv);

function MouseOv(event){
    event.target.style.backgroundColor = "lightGreen";
    event.target.textContent ="Please! Do it.🥺"
}

myBox.addEventListener("mouseout",MouseOt);

function MouseOt(event){
    event.target.style.backgroundColor ="cornsilk";
    event.target.textContent = "Click me!😊"
}


*/


// With button
const myBtn = document.getElementById("myBtn");
const myBox = document.getElementById("myBox");
myBtn.addEventListener("click",changeBackgroundColor);

function changeBackgroundColor(event){
    myBox.textContent ="Don't stress. You will make it. 🦾🦾🥹"
    myBox.style.backgroundColor ="lightBlue";
}

myBtn.addEventListener("mouseover",MouseOv);

function MouseOv(event){
    myBox.style.backgroundColor = "lightGreen";
    myBox.textContent ="Please! Do it.🥺"
}

myBtn.addEventListener("mouseout",MouseOt);

function MouseOt(event){
    myBox.style.backgroundColor ="cornsilk";
    myBox.textContent = "Click me!😊"
}






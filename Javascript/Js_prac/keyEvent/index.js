//eventListener = listen for specific events to create interactive web pages
//  events: keydown, keyup
// document.addEventListener(event,callback);

const myBox = document.getElementById("myBox");
let movement =  100;//the element moves by 100px each time
let x = 0;//x axis is set to 0 initially
let y = 0;// y axis is set to 0 initially

document.addEventListener("keyup",event=>{
    myBox.textContent ="😊";
    myBox.style.backgroundColor ="lightBlue";
})

document.addEventListener("keydown",event=>{

    if(event.key.startsWith("Arrow")){

        myBox.textContent = "😮";
        myBox.style.backgroundColor ="tomato";
        event.preventDefault();// allows the flow of element when it reach the corners also

        switch(event.key){
            case "ArrowUp":
                y-=movement;
                break;

            case "ArrowDown":
                y+=movement;
                break;

            case "ArrowLeft":
                x-=movement;
                break;

            case "ArrowRight":
                x+=movement;
                break;
        }
    
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
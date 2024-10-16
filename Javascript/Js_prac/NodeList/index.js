// NodeList = Static collection of HTML elements by(id,class,element)
//  can be created by using querySelectorAll()
//  Similar to an array, but no(map,filter, reduce)
//  NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");


// add html/css to the element
/*buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor ="brown";
        });
});*/

buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.style.backgroundColor = "cornflowerblue";
        });
});

buttons.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.style.backgroundColor = "cadetblue";
        });
});

//add new element
const btn5 = document.createElement("button");// step1 : create btn
btn5.className ="myButtons";// btn5 gets all the  css we applied to other buttons because we assigned myButtons class to btn5
btn5.textContent ="btn5";

document.body.append(btn5);//step2: add the button to the body of the doc

console.log(buttons);
buttons = document.querySelectorAll(".myButtons");// we need to update buttons again and again because NodeList won't update to automatically reflect changes

console.log(buttons);


// remove an element
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.remove();
        //document.body.removeChild(event.target);// to remove a button when it's clicked
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});



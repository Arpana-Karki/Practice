// classList = Element property in Javascript used to interact with an element's list of classes(CSS classes)
// Allows you to make reusable classes for many elements across your webpage.

//add()
//remove()
// toggle (Remove if present ,Add if not )
// replace(oldClass , newClass)
// contains()


const heading1 = document.getElementById("heading1");
let buttons = document.querySelectorAll(".myButtons");

//mouseover isnot working for heading1
heading1.addEventListener("mouseover",event=>{
    event.target.classList.add("hedHoever");
});


/* using add and remove

buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{

        button.classList.add("hoever");
    });
});

buttons.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        button.classList.remove("hoever");
    });
});
*/
buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hoever");
    });
});

buttons.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hoever");
    });
});

// click event isnot working here 
buttons.forEach(button=>{
    button.addEventListener("click",event=>{

        if(event.target.classList.contains("disabled")){
            event.target.textContent ="disabled";
        }
        else{
            event.target.classList.replace("enabled","disabled");
        }
    });
});
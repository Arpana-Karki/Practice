//hide/show html

const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

/*
myBtn.addEventListener("click",event=>{
    if(myImg.style.display ==="none"){
        myBtn.textContent="Hide";
        myImg.style.display ="block";
    }

    else{
        myImg.style.display="none";
        myBtn.textContent="Show";
    }
});
*/

// visibility property doesn't delete the space allocated for the html element when the visibility is hidden whereas when display is set to none the space allocated for the html element is deleted.

myBtn.addEventListener("click",event=>{
    if(myImg.style.visibility ==="hidden"){
        myBtn.textContent="Hide";
        myImg.style.visibility ="visible";
    }

    else{
        myImg.style.visibility="hidden";
        myBtn.textContent="Show";
    }
});

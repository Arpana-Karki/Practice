// element selectors = Methods used to target and manipulate HTML elements. They allow you toselct one or multiple HTML elemnts from the DOM(Document Object Model)

// 1) documemt.getElementById()  // ELEMENT OR NULL
// 2) document.getElementsClassName()  // HTML COLLECTION
// 3) document.getElementsByTagName()  // HTML COLLECTION
// 4) document.querySelector()  // ELEMENT OR NULL
// 5) document.querySelectorAll()  // NODELIST


//e.g 1)
const heading = document.getElementById("eat"); 
heading.style.backgroundColor = "lightBlue";


//e.g. 2)
const names = document.getElementById("fName");
names.style.backgroundColor = "lightYellow";

const nm = document.getElementsByClassName("name")

nm[0].style.backgroundColor ="chocolate";
nm[3].style.backgroundColor ="red";
nm[1].style.backgroundColor ="brown";


//e.g. 3)
const lists = document.getElementsByTagName("li");
/* lists[1].style.backgroundColor = "orange";
lists[4].style.backgroundColor = "silver"; */

/*for(let list of lists){
    list.style.backgroundColor ="blue";

}*/

Array.from(lists).forEach(list=>{
    list.style.backgroundColor = "pink";
});



//e.g. 4)
const heading1 = document.querySelector("#foods");

heading1.style.backgroundColor = "grey";

const heading2 = document.querySelector(".fruits");

heading2.style.backgroundColor = "brown";


//e.g. 5)
const lsts = document.querySelectorAll("li");

//lsts[1].style.backgroundColor ="yellow";
lsts.forEach(lst=>{
    lst.style.backgroundColor ="orange";
});






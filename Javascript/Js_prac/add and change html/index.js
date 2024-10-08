//add and change 

// Step 1: create an element 
const newListItem = document.createElement("li");

// Step 2: add attributes/properrties to the element
newListItem.textContent ="coconut";
newListItem.id ="co";
newListItem.style.fontWeight ="bold";
newListItem.style.fontSize ="2rem";


//Step 3: 
document.body.append(newListItem);//to add newListItem to the end of the body

//document.body.prepend(newListItem);// to add newListItem to the start of the body

 /* without using querySelectorAll

// const banana = document.getElementById("bn");
// document.getElementById("fruits").insertBefore(newListItem, banana); // to insert before banana 

//document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);
*/


/* with querySelectorAll

const listItems = document.querySelectorAll("#fruits li");

document.getElementById("fruits").insertBefore(newListItem,listItems[2]);
*/


//Step 4:
document.body.removeChild(newListItem);

//document.getElementById("fruits").removeChild(newListItem);
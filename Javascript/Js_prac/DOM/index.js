//DOM = DOCUMENT OBJECT MODEL
/* object() that represents the page you see in the web browser and provides you with an API to interact with it .

Web browser constructs the DOM when it loads an HTML document, and structures all the element in a tree-like representation.
Javascript can access the DOM dynamically to change the content , structure , and style of aweb page.*/

const username = window.prompt("Enter an username");

const message = document.getElementById("greeting_msg");

message.textContent += username === "" ? 'Guest' : username;

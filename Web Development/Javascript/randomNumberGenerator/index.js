const randomNumber =document.getElementById("randomNumber");
const genBtn =document.getElementById("genBtn");
let min=1;
let max=6;
let number;

document.getElementById("genBtn").onclick=function(){
    number=Math.floor(Math.random()*max)+min;
    document.getElementById("randomNumber").textContent=number;

}

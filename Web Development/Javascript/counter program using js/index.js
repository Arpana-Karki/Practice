const decreaseBtn=document.getElementById("decreaseBtn");
const increaseBtn=document.getElementById("increaseBtn");
const resetBtn=document.getElementById("resetBtn");
const counter=document.getElementById("counter");


let count=0;

document.getElementById("increaseBtn").onclick=function(){
count++;
document.getElementById("counter").textContent=count;

}

document.getElementById("decreaseBtn").onclick=function(){
    count--;
    document.getElementById("counter").textContent=count;
    
    }

document.getElementById("resetBtn").onclick=function(){
        count=0;
        document.getElementById("counter").textContent=count;
        
        }
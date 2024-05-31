const subscribe=document.getElementById("myCheck");
const cash=document.getElementById("cash");
const visa=document.getElementById("visa");
const esewa=document.getElementById("esewa");
const subResult=document.getElementById("subResult");
const payResult=document.getElementById("payResult");


document.getElementById("submission").onclick=function(){

if(myCheck.checked ){
    document.getElementById("subResult").textContent=`You are subscribed .`;


         if(visa.checked){
        document.getElementById("payResult").textContent=`You have selected visa payment method`;
        }
        else if(payPal.checked){
            document.getElementById("payResult").textContent=`You have selected pay Pal payment method`;
        }
        else if(cash.checked){
            document.getElementById("payResult").textContent=`You have selected cash payment method`;
        }
        else if(esewa.checked){
            document.getElementById("payResult").textContent=`You have selected esewa payment method`;
        }
        else{
            document.getElementById("payResult").textContent=`Please select a payment method`;
            }
}
    
    else{
        document.getElementById("subResult").textContent=`You arenot subscribed .`;
    }
}




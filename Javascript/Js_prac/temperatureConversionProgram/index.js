const  textbox=document.getElementById("textbox");
const toCelcius=document.getElementById("toCelcius");
const toFahrenhit=document.getElementById("toFahrenhit");
const result=document.getElementById("result");

function convert(){
    if(toCelcius.checked){
        result.textContent="converted to celcius";
    }
    else if(toFahrenhit.checked){
        result.textContent="converted to fahrenhit";
    }
    else{
        result.textContent="please select one";
    }
}

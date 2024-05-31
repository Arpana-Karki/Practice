let userName ="Arpana";
 console.log(userName.charAt(1));//charAt provides character at given index of userName
console.log(userName.length);// provides length of given string

console.log(userName.indexOf("A"));//IndexOf provides indexof given character
console.log(userName.toUpperCase());//toUpperCase converts all the alphabets in the given string to upper case
console.log(userName.toLowerCase());//toLowerCase converts all the alphabets in the given string to lower case

let lname =" Karki ";
console.log(lname.trim());//trim() trims all the white space 

console.log(lname.startsWith(" "));//used to return boolean value of whether the given value of variable starts with something or not
console.log(lname.endsWith("a"));//used to return boolean value of whether the given value of variable ends with something or not
console.log(lname.includes("z"));// used to check whether the given value of variable includes the value ww provided or not

let phnNo ="+977/23/45/56/65";
console.log(phnNo.replaceAll("/"," "));// replaceAll("oldOne","newOne that replaces old one") used to replace the old character or ... with new one
console.log(phnNo.padStart(19,"4"));//padStart(the no of characters the value of the variable must contain,"no or character we want to add to fill the gap to reach the provided no of characters") fills the gap at start with the provided no or character to reach the provided no of characters 
console.log(phnNo.padEnd(18,"0"));//padStart(the no of characters the value of the variable must contain,"no or character we want to add to fill the gap to reach the provided no of characters") fills the gap at start with the provided no or character to reach the provided no of characters 


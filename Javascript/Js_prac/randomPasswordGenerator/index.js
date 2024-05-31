function generator(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSpecialChars){

    const lowerCaseChars="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const specialChars="!@#$%^&*_+-=()";

    let allowedChars="";
    let password="";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase? upperCaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSpecialChars ? specialChars: "";

    if(length<=0){
        return`please enter atleast one char`;
    }
    if(allowedChars.length===0){
        return`please choose atleast one char type`;

    }

for(let i=0;i<length;i++){
    const randomIndex=Math.floor(Math.random()*allowedChars.length);
    password+=allowedChars[randomIndex];
}
return password;
}

const length=12;
const includeUpperCase=true;
const includeLowerCase=true;
const includeSpecialChars=true;
const includeNumbers=true;

const password=generator(length,includeLowerCase,includeUpperCase,includeNumbers,includeSpecialChars);
console.log(`generated password: ${password}`);
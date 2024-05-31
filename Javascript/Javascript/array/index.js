let fruits = ["strawberry","apple","litchi"];


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


fruits.push("mango");//adds to the last of the array
console.log(fruits[3]);

fruits.pop();//removes from last of the array
console.log(fruits);

fruits.unshift("banana");//adds to the beginning of an array
console.log(fruits);

fruits.shift();//removes an element from the beinnning of an array
console.log(fruits);

let numOfFruits=fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("strawberry");
console.log(index);

for(i=0;i<=fruits.length-1;i++){
   // console.log(fruits);
console.log(fruits[i]);
}

for(i=fruits.length-1;i>=0;i--){
    console.log(fruits[i]);
}

for (let fruit of fruits){
console.log(fruit);
}

frt=fruits.sort().reverse();
console.log(frt);



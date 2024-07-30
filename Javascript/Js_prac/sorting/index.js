// sorting is used to sort the elements of an array
// sort() sorts the elements of an array as strings in lexicographic order not alphabetical
// lexicographic order(alphabet + numbers + symbol) as strings
//alphabetical order doesn't care about upper and lower case letters
//lexical/lexicographic order is case sensitive ,words with capital letter comes before the word out ,E.g. Apple comes before apple.It uses character encoding (like Unicode) to determine the order.
//Unicode is a universal encoding standard for text characters.It ensures that characters are represented consistently across different platforms.Text looks and behaves the same across different systems 


//e.g. 1

const fruits =["apple","orange","banana","strawberry","litchi","pineapple"];

fruits.sort();
console.log(fruits); 


//e.g. 2

 const numbers =[1,10,9,99,4,6,7,65,0,3];
numbers.sort();//treats each number as string as in lexical order
console.log(numbers);

//we have to use custom comparison function to solve this(we can use arrow function for this)
numbers.sort((a,b)=>a-b);//to sort in ascending order
console.log(numbers);

numbers.sort((a,b)=>b-a);//to sort in descending order
console.log(numbers);


//e.g. 3
const people =[{name:"Doraemon",age:34,gpa:3.70},
                {name:"Nobita",age:30,gpa:3.10},
                {name:"Shawn",age:20,gpa:3.60},
                {name:"Nezuko",age:25,gpa:3.65},
]

/*people.sort((a,b)=>a.age-b.age);//to sort in ascending order on the basis of age
console.log(people);*/

/*people.sort((a,b)=>b.gpa-a.gpa);//to sort in descending order on the basis of gpa
console.log(people);*/


people.sort((a,b)=>a.name.localeCompare(b.name));//for sorting in ascending order
//we use localeCompare when we need to sort by  a property that contains a string within an object
console.log(people);

/*people.sort((a,b)=>b.name.localeCompare(a.name));//for sorting in descending order
console.log(people);*/



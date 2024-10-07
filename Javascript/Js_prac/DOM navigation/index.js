//DOM navigation = The process of navigating through the structure of an HTML document using Javascript.

//.firstElementChild
//.lastElementChild
//.nextElementsSibling
//.previousElementsSibling
//.parentElement
//.children



//firstElementChild
const uls = document.querySelectorAll("ul");
uls.forEach(frstCh=>{
    const firstChild = frstCh.firstElementChild;
    firstChild.style.backgroundColor ="green";
});

//lastElementChild

uls.forEach(lstCh=>{
    const lastChild = lstCh.lastElementChild;
    lastChild.style.backgroundColor ="blue";
});

//nextElementSibling
//e.g.1

const subjects = document.getElementById("subjects");
const nextSibling = subjects.nextElementSibling;

nextSibling.style.backgroundColor ="brown";


//e.g.2
const science = document.getElementById("science");
const nextSb1 = science.nextElementSibling;

nextSb1.style.backgroundColor ="red";

//e.g. 3
const thailand = document.getElementById("th");
const prv1 = thailand.previousElementSibling;

prv1.style.backgroundColor ="pink";

//e.g. 4
const places = document.getElementById("places");
const prv2 = places.previousElementSibling;

prv2.style.backgroundColor ="yellow";


//parentElement
const switzerland = document.getElementById("sw");
const parent = switzerland.parentElement;

parent.style.backgroundColor ="lightBlue";

//childElement
const countries = document.getElementById("countries");
const child =countries.children;
child[3].style.backgroundColor = "brown";


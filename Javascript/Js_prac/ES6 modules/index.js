// ES6 modules = An external file that contains reusable code that can be imported into other Javascript files . Can contain variables , classes ,function and more .It was introduced as part of ECMASCRIPT 2015 update

// for e.g. we have mathUtil.js as an ES6 module and we are going to import from mathUtil.js to our index.js file

/* for importing anything from external files we need to use the following syntax :

import {what we want to import from module } from 'file path of module ';
*/

import{ PI, getVolume, getArea, getCircumference} from './mathUtil.js';

const getVolm = getVolume(5);//we need to pass radius to get the volume so we are passing radius to getVolume exported from module and storing the value in getVolm
 console.log(` Volume is  ${getVolm.toFixed(2)} cm^3 .`);

 const getAr = getArea(5);
 console.log(` Area is  ${getAr.toFixed(2)} cm^2 .`);

 const getCir = getCircumference(5);
 console.log(` Circumference is  ${getCir.toFixed(2)} cm .`);

 console.log(`Value of PI is ${PI} .`)

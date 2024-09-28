// for using modules we need to set the script type to  module in html file

// we should use the keyword "export" infront of classes, functions , constants ,... in the module file to export it to another file

export const PI = 3.14159;


export function getCircumference(radius){

    return 2 * PI * radius;
}

export function getArea(radius){

    return PI* radius* radius ;
}

export function getVolume(radius){

    return (4/3) * PI * radius * radius * radius ;
}

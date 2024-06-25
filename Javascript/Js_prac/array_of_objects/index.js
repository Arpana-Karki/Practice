 const fruits=[
        {name: "apple" , color:"red" ,calorie:95},
        {name: "banana", color:"yellow" ,calorie:105},
        {name: "orange", color:"orange" ,calorie:45},
        {name: "pineapple", color:"yellow",calorie:159},
        {name: "coconut", color:"white" ,calorie:37}];


/*using push method
    fruits.push( {name: "litchi", color:"red" ,calorie:103});
    console.log(fruits);
    */

/* using pop method
    fruits.pop();
    console.log(fruits);
   */ 

/*using unshift method to add to the beginning of an array
fruits.unshift( {name: "litchi", color:"red" ,calorie:103}) ;
console.log(fruits);
*/

/*using shift method to remove from the beginning of an array
fruits.shift();
console.log(fruits);
*/

/*using slice method
splice(index_at_which_we_want_to_start_removing_from_the_array,no_of_elements_we_want_to_remove_starting_from_that_index)
fruits.splice(1,3);
console.log(fruits);
*/


// using forEach method
    fruits.forEach(display);

    function display(element){
        console.log(element);
    }

    //using map method
    const FruitColors =fruits.map(elmnt=>elmnt.color);
    console.log(FruitColors);

    const FruitNames =fruits.map(elmnt=>elmnt.name);
    console.log(FruitNames);

    const FruitCalories =fruits.map(elmnt=>elmnt.calorie);
    console.log(FruitCalories);

    //using filter method
    const yellowFruits = fruits.filter(element=>element.color === "yellow");
    console.log(yellowFruits);

    const lowCalorieFruits = fruits.filter(element=>element.calorie <100);
    console.log(lowCalorieFruits);

    const highCalorieFruits = fruits.filter(element=>element.color > 100 );
    console.log(yellowFruits);

    //using reduce method
    const fruit_with_highest_calorie =fruits.reduce((maxFruit,nextFruit) => maxFruit.calorie > nextFruit.calorie? maxFruit:nextFruit);
    console.log(fruit_with_highest_calorie);

    const fruit_with_lowest_calorie =fruits.reduce((minFruit,nextFruit) => minFruit.calorie < nextFruit.calorie? minFruit:nextFruit);
    console.log(fruit_with_lowest_calorie);


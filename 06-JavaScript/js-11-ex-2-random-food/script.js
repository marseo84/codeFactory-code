/*
- array: randomFoods
-- pizza, hamburger, ice cream, chocolate
- function to choose randomly

- variant - randomish
- get user input from a prompt
- use the length 
*/

const foods = ["pizza", "kebab", "hot dog", "hamburger", "paella", "ice cream", "chocolate"];
const foodsCount = foods.length;
console.log("food count: " + foodsCount);

let foodIndex;
let foodSuggestion;








function getRandomIntZeroToMax (foodsCount) {
  // return Math.floor(Math.random() * foodsCount + 1);
  return Math.floor(Math.random() * foodsCount);
}

foodIndex = getRandomIntZeroToMax(foodsCount);
console.log(`random food index: ${foodIndex}`);

foodSuggestion = foods[foodIndex];
console.log("Your favorite food is: " + foodSuggestion);


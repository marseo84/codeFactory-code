let el = document.getElementById("demo");
const userName = "marseo";

el.innerHTML = `Hi, his name is ${userName}`;


/*
- gen random temperature
-- -5 to 25
-- two categories: cold, moderate
--- -5 - 10: The weather is cold.
--- 10 <: The weather is moderate.


*/


let temperature;
let message = "The weather is ";

// get temperature

// integer not inclusive
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(math.random() * (max - min)) + min;
}



// integer inclusive
const getRandomIntegerInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

temperature = getRandomIntegerInclusive(-5, 25);
console.log(`The temperature is: ${temperature}`);

// generate and output message
if (temperature <= 10) {
  console.log(message + "cold" + "." );
} else {
  console.log(message + "moderate" + ".");
}



/*
https://coreui.io/blog/how-to-generate-a-random-number-in-javascript/
*/











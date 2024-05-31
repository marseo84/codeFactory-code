let inputMin = 1;
let inputMax = 10;

// Function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/*
// get a random number between 0 - 20
Math.floor(Math.random() * max + 1); // include max num


rand: 0.5
min: 0
max: 20

0.5 * 20 = 10
0.9 * 20 = 18
0.99999 * 20 = 19.9998 // need +1 to get over 20 and then floor it to 20 e.g. from 20.9
0.1 * 20 = 2
0.000001 * 20 = 0.00002

// get a random number between 5 - 20 // ................
Math.floor(Math.random() * (max - min) + min)
(0.5 * (25 - 5)) + 5

rand: 0.5
min: 5 
max: 20

0.5 * 20 = 10           + 5 = 15
0.9 * 20 = 18           + 5 = 23
0.99999 * 20 = 19.9998  + 5 = 24.9998
0.1 * 20 = 2            + 5 = 7
0.000001 * 20 = 0.00002 + 5 = 5.00002




// get a random number between -5 - 25 // ................
Math.floor(Math.random() * (max - min) + min)
(0.5 * (25 - (-5))) + (-5)
(0.5 * (25 + 5)) -5

rand: 0.5
min: 5 
max: 20

0.5 * 25 = 12.5           - 5 = 7.5
0.9 * 25 = 22.5           - 5 = 17.5
0.99999 * 25 = 24.99975   - 5 = 19.99975
0.1 * 25 = 2.5            - 5 = .-2.5
0.000001 * 25 = 0.000025  - 5 = -4.999975


??? + 1 needed to get to the max after floor
*/




// test
console.log(`min: ${inputMin} 
max: ${inputMax}: `);

// Function call
console.log("random: " + randomNumber(inputMin, inputMax) );












// let message = "The temperature is ";
// temperature = randomNumber(inputMin, inputMax);
// console.log(`Temperature: ${temperature}`);

// // generate and output message
// if (temperature <= 10) {
//   console.log(message + "cold" + "." );
// } else {
//   console.log(message + "moderate" + ".");
// }
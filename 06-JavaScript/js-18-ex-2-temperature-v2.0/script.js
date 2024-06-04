/*
- create a nice looking responsive front-end for your program (mobile friendly) and
introduce more detailed weather descriptions
- more detailed weather descriptions.
- display a proper image for the current weather condition

*/

// get dom
let card = document.getElementById("card");
let weatherNote = document.getElementById("weather-note");
let cardInnerLeft = document.getElementById("card-inner-left");
let cardInnerRight = document.getElementById("card-inner-right");
let temperatureHeading = document.getElementById("temperature-heading");
let temperatureValue = document.getElementById("temperature-value");
let message = document.getElementById("message");



// temperature ranges
// name, class-name, min, max
// const tenperatureRange = [
//   ["Heat Wave", "heat-wave", 37, 10000],
//   ["Very Hot", "very-hot", 32, 37],
//   ["Hot", "hot", 26, 32],
//   //["Room Temperature", 22, ],
//   ["Warm", "warm", 15, 26],
//   ["Mild", "mild", 10, 15],
//   ["Cool", "cool", 4, 10],
//   //["Water Freezes", 0, ],
//   ["Cold", "cold", -6, 4],
//   ["Very Cold", "very-cold", -17, -10],
//   ["Frigid", "frigid", -10000, -17]
// ];


// arrays only when same data type - use objects instead
// const tenperatureRangeShort = [
//   ["Hot", "hot", 26, 100],
//   ["Warm", "warm", 15, 26],
//   ["Mild", "mild", 4, 15],
//   ["Cold", "cold", -6, 4],
//   ["Very Cold", "very-cold", -17, -6],
// ];

const temperatureRangeArrObj = [
  {name: "hot", min: 26, max: 100},
  {name: "warm", min: 15, max: 25},
  {name: "mild", min: 4, max: 14},
  {name: "cold", min: -6, max: 3},
  {name: "very cold", min: -100, max:  -7}
];



// // temperature range constructor                       - what would be the advantege?
// function createRange(name, className, min, max) {

// }


// conditions - constructor

// const constructConditions = (name, message, image) => {

// };

// const sunny = {
//   condition: "sunny",
//   message: "Get your suncream.",
//   img: "sun.jpg"
// }

// const cloudy = {
//   condition: "cloudy",
//   message: "Leave the sunglasses at home",
//   img: "cloud.jpg"
// }

// const windy = {
//   condition: "windy",
//   message: "Hold your hat.",
//   img: "wind.jpg"
// }

// const rainy = {
//   condition: "rainy",
//   message: "Where's Rihanna with her umbrella?",
//   img: "rain.jpg"
// }


let weatherCondition = [
  {
    condition: "sunny",
    message: "Get your suncream.",
    img: "sun.jpg"
  },
  {
    condition: "cloudy",
    message: "Leave the sunglasses at home",
    img: "cloud.jpg"
  },
  {
    condition: "windy",
    message: "Hold your hat.",
    img: "wind.jpg"
  },
  {
    condition: "rainy",
    message: "Where's Rihanna with her umbrella?",
    img: "rain.jpg"
  }
];


// function createCondition(condition, message, img) {
//   this.condition = condition;
//   this.message = message;
//   this.img = img;
// }

// let sunny1 = new createCondition("sunny2", "msg", "path");
// console.log(sunny1.img);



console.log(weatherCondition[1].condition);

// // Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };


// generate temperature & conditions
let generateIntegerMinMax = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
};

let temperature = generateIntegerMinMax(-50, 50);

// generate conditions
let currentCondition = generateIntegerMinMax(0, weatherCondition.length);




// update HTML 
temperatureValue.innerHTML = temperature;

//weather info
if (temperature <= temperatureRangeArrObj[4].max) {
  weatherNote.innerHTML = `It's ${temperatureRangeArrObj[4].name} and ${weatherCondition[currentCondition].condition}`;
} else if (temperature <= temperatureRangeArrObj[3].max) {
  weatherNote.innerHTML = `It's ${temperatureRangeArrObj[3].name} and ${weatherCondition[currentCondition].condition}`;
} else if (temperature <= temperatureRangeArrObj[2].max) {
  weatherNote.innerHTML = `It's ${temperatureRangeArrObj[2].name} and ${weatherCondition[currentCondition].condition}`;
} else if (temperature <= temperatureRangeArrObj[1].max) {
  weatherNote.innerHTML = `It's ${temperatureRangeArrObj[1].name} and ${weatherCondition[currentCondition].condition}`;
} else {
  weatherNote.innerHTML = `It's ${temperatureRangeArrObj[0].name} and ${weatherCondition[currentCondition].condition}`;
}


// const temperatureRangeArrObj = [
//   {name: "hot", min: 26, max: 100},
//   {name: "warm", min: 15, max: 25},
//   {name: "mild", min: 4, max: 14},
//   {name: "cold", min: -6, max: 3},
//   {name: "very cold", min: -100, max:  -7}
// ];


// update weather conditions - image
cardInnerRight.innerHTML = `<img src="./img/${weatherCondition[currentCondition].img}">`;


// update weather conditions - message
message.innerHTML = weatherCondition[currentCondition].message;











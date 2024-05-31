/*
- ageCalculator function
- two params: birth year, current year
- return two options

*/

const d = new Date();
let currentYear = d.getFullYear();

let age = [];

const ageCalculator = (birthYear, currentYear) => {
  let year1= currentYear - birthYear;
  let year2 = currentYear - birthYear - 1;
  console.log(year1);
  console.log(year2);
  return [year1, year2];
}

let result = ageCalculator(1986, currentYear);
console.log(`You are either ${result[1]} or ${result[0]}.`);


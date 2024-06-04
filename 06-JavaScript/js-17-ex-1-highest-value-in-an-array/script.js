/*
- find the highest value in this array: 1, 7, -3, 9,


*/

const sourceArr = [1, 7, -3, 9];
let highestNum = 0;
let currNum = 0;


/*
for (i=0; i < sourceArr.length; i++) {
  currNum = sourceArr[i];
  if (currNum > highestNum) {
    highestNum = currNum;
  }
}

console.log(highestNum);

*/

// function

function findTheHighestNumber(nums) {
  for (i=0; i < nums.length; i++) {
    currNum = nums[i];
    if (currNum > highestNum) {
      highestNum = currNum;
    }
  }
  return highestNum;
}

// findTheHighestNumber([10, 5, 3, 2, 0]);
console.log(findTheHighestNumber([10, 5, 3, 2, 0]));



// for of, for in, for each


// for of

let numbers = [-4, 2, 4, 3]
let max = numbers[0];

for (let val of numbers) {
  if (val > max) {
    max = val;
  }
}
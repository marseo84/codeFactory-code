// From the following multidimensional Array:
// [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6,
// 17], [3, 5, 26, 3] ]
// Write a program to find and display the numbers 11, 25, 17, 27, and 0 in the
// console.

// 11, 25, 17, 27,  0


// let r = 0;
// let c = 0;
let i = 0;
// let n = 0;
let searchNum = 0;
let numsToFind = [11, 25, 17, 27, 0];

// declare an empty array and add values to it
let numbersAllInOneArr = [1, 2, 1, 24, 8, 11, 9, 4, 7, 0, 7, 27, 7, 4, 28, 14, 3, 10, 25, 7, 21, 4, 6, 17, 3, 5, 26, 3];
let numbersCount = numbersAllInOneArr.length;
// let sourceArr = [];
// sourceArr = [[], [], [], [], [], [], []];
sourceArr = [];

console.log("source arr length: " + sourceArr.length);

let tableRows = 7;
let tableCols = numbersCount / tableRows;
console.log(" table rows: " + tableRows);
console.log(" table cols: " + tableCols);


// push empty arrays / rows
for (i = 0; i < tableRows; i++) {
  sourceArr.push([]);
}



// populate the table 
i = 0;
for (let c = 0; c < tableCols; c++) {
  for (let r = 0; r < tableRows; r++) {
    sourceArr[r][c] = numbersAllInOneArr[i];
    i++;
  }
}
console.log(sourceArr);




// let sourceArr = [ 
//   [1, 2, 1, 24], 
//   [8, 11, 9, 4], 
//   [7, 0, 7, 27], 
//   [7, 4, 28, 14], 
//   [3, 10, 25, 7], 
//   [21, 4, 6, 17], 
//   [3, 5, 26, 3] 
// ];

// array lengths
// let outterArrLen = sourceArr.length;
// console.log(`outter array length: ${outterArrLen}`);

// let innerArrLen = sourceArr[0].length;
// console.log(`inner array length: ${innerArrLen}`);









// get number of arrays in an array - sourceArr
// declare an empty array with the same number of arrays - results
let countInnerArr = sourceArr.length;
console.log("inner array count: " + countInnerArr);



// declare an empty 2d array
let results = [[], [], [], [], []];






/*

for (n = 0; numsToFind.length; n++) {
  // get searched number
  searchNum = numsToFind[n];
  console.log(`searchNum: ${searchNum}`);

  // store the searched number
  results[n][0] = searchNum[n];
  console.log(results);

  
  // loop through cols
  for (r = 0; r < outterArrLen; r++) {
    // loop through rows
    for (c = 0; c < innerArrLen; c++) {
      console.log(sourceArr[r][c]);
      if (sourceArr[r][c] === searchNum) {
        results[n][1] = r;
        results[n][2] = c;
      }
    }
  }
}

*/

// test if both ways work  

//   // loop through x axis
//   for (x = 0; x < innerArrLen; x++) {
//     // loop through y axis
//     for (y = 0; y < outterArrLen; y++) {
//       console.log(sourceArr[x, y]);
//       if (source)
//     }
//   }
// }



/*
- david's alternative: use  || and console

declare 2d empty array
https://www.geeksforgeeks.org/how-to-declare-two-dimensional-empty-array-in-javascript/







*/
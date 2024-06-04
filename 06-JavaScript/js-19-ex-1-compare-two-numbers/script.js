/*
- calculate and display the average grade for each student in the class.

Martin = 76,64,81,57,94
Thomas = 85,49,81,72,55
Klaus = 65,91,84,67,85
Maria = 93,70,81,64,84
David = 81,99,71,100,69

Below 60 = F
Below 70 = D
Below 80 = C
Below 90 = B
Below 100 = A


- cal the class average

---------------------
extra
- position student according to the class average 
- put them in order

*/


const students = [
  {name: "Martin", grades: [76,64,81,57,94], gradesAvg: 0},
  {name: "Thomas", grades: [85,49,81,72,55], gradesAvg: 0},
  {name: "Klaus", grades: [65,91,84,67,85], gradesAvg: 0},
  {name: "Maria", grades: [93,70,81,64,84], gradesAvg: 0},
  {name: "David", grades: [81,99,71,100,69], gradesAvg: 0}
];



// let Martin = [76,64,81,57,94];
// let Thomas = [85,49,81,72,55];
// let Klaus = [65,91,84,67,85];
// let Maria = [93,70,81,64,84];
// let David = [81,99,71,100,69];


function calcAverage(vals) {
  let valsLen = vals.length;
  let gradesSum = 0;
  for (val of vals) {
    gradesSum += val;
  }
  let gradesAverage = gradesSum / valsLen;
  return gradesAverage;
}


// calculate avg grades for each student
for (index in students) {
  students[index].gradesAvg = calcAverage(students[index].grades);
}
console.log(students[4].grades);
console.log(students[4].gradesAvg);


// let martinAvg = calcAverage(students[0].grades);
// console.log(martinAvg);


// calculate class average                                             !FIX - pass to a function
//                                                                    - try with a different type of loop
students[0].gradesAvg
console.log(calcClassAverage(students));

function calcClassAverage(array){
let classAvgTemp = 0;
for (i = 0; i < students.length; i++) {
  classAvgTemp += students[i].gradesAvg;
}
let classAverage = classAvgTemp / students.length;
return classAverage;
//console.log(classAverage);
}


// function calcClassAverage(vals) {
//   let valsLen = vals.length;
//   let gradesSum = 0;
//   for (val of vals) {
//     gradesSum += val;
//   }
//   let classAverage = gradesSum / valsLen;
//   return classAverage;
// }

// let classAverage = calcClassAverage(students)


// list students below and above avg
let belowAvg = [];
let aboveAvg = [];

for (student in students) {
  
}



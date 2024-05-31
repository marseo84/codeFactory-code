// https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/

let originalList = document.getElementById("original-list");
let sortedList = document.getElementById("sorted-list");

const carList = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

console.log("Original list: " + carList);
console.log("Sorted list: " + carList.sort());

// original list
for (i = 0; i < carList.length; ++i) {
  let li = document.createElement("li");
  li.innerText = carList[i];
  originalList.appendChild(li);
}




// sorted list
for (i = 0; i < carList.length; i++) {
  let li = document.createElement("li");
  li.innerText = carList.sort()[i];
  sortedList.appendChild(li);
}

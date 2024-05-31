let myList = document.getElementById("myList");

const sourceString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

let fruits = sourceString.split("/");
console.log(fruits);



// for (i = 0; i < fruits.length; i++) {
//   console.log("fruit no. " + i + ": " + fruits[i]);
// }




// print list
for (i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.innerText = fruits[i];
  myList.appendChild(li);
}

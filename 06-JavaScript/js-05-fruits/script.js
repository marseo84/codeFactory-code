// let el = document.getElementById("demo");

let fruits = ["apple", "banana", "kiwi", "mango", "pear"];
console.log(fruits);

// 'apple', 'banana', 'kiwi', 'mango', 'pear’, ‘orange’
fruits.push("orange")
console.log(fruits);

//  'banana', 'kiwi', 'mango', 'pear’, ‘orange’
fruits.shift();
console.log(fruits);

//  'apple', 'banana', 'kiwi', 'mango', 'pear’
fruits.unshift("apple");
fruits.pop();
console.log(fruits);

//  strawberry, 'banana', 'kiwi', 'mango', 'pear’
fruits[0] = "strawberry";
console.log(fruits);



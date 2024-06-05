/*
modelId → 7
brand → "SpyMotors"
model → "Spectre"
colors → ["Silver", "Black", "White"]


*/

let car = {
  modelId: 7,
  brand: "Toyota",
  model: "Hillux",
  colors: ["black", "red", "greeb"],
  message: function() {
    return `Dear Santa, I want a ${this.colors[0]} ${this.brand} ${this.model}.`
  }

};

console.log(car.message());
document.getElementById("demo").innerHTML = car.message();
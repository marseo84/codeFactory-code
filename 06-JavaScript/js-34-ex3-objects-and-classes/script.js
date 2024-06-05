/*



*/

class Animal {
  name;
  habitat;
  diet;
  legs;

  constructor(name, habitat, diet, legs) {
    this.name = name;
    this.habitat = habitat;
    this.diet = diet;
    this.legs = legs;
  }

  description() {
    return `${this.name} has ${this.legs} legs, lives in ${this.habitat}, eats ${this.diet}`;
  }
}

let animal1 = new Animal("Dog", "everywhere", "everything", 4);
console.log(animal1);
console.log(animal1.description());

document.getElementById("demo1").innerHTML = animal1.description();


class WaterAnimal extends Animal {
  waterType;
  tankFit;
  dish;
  
  constructor(name, habitat, diet, legs, waterType, tankFit, dish) {
    super(name, habitat, diet, legs);
    this.waterType = waterType;
    this.tankFit = tankFit;
    this.dish = dish;
  }

  description() {
    return `${super.description()}. ${this.name} lives in ${this.waterType} water, it is ${this.tankFit} that it fits in a normal person's fish tank; and whether it is commonly consumed by humans is ${this.dish}.`;
  }
}

let waterAnimal1 = new WaterAnimal("shark", "ocean", "other animals", 0, "salty", false, false);
console.log(waterAnimal1);
console.log(waterAnimal1.description());
document.getElementById("demo2").innerHTML = waterAnimal1.description();


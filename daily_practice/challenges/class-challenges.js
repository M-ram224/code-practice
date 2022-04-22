// Using the Coffee Maker Class, write tests and complete the challenges
export class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee.
// var coffeeOrder1 = new Coffee('Black', 0, 0)

// console.log(coffeeOrder1.coffeeProfile())
// // Write the code that makes a coffee with 1 cream and 2 sugars.
// var coffeeOrder2 = new Coffee('Cream and Sugar', 1, 2)

// console.log(coffeeOrder2.coffeeProfile())
// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// var coffeeOrder3 = new Coffee('Two Sugars', 0, 2)

// console.log(coffeeOrder3.coffeeProfile())

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
export class Latte {
  constructor(flavor, milkType, expressoShots){
    this.flavor = flavor.toLowerCase()
    this.milkType = milkType.toLowerCase()
    this.expressoShots = expressoShots
  }
  // Write a method for your Latte class that outputs the latte's profile.
  latteProfile(){
    return(`${this.flavor}: ${this.milkType}, ${this.expressoShots}`)
  }

}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects
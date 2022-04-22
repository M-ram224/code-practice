import { Coffee } from './class-challenges.js'
import { Latte } from './class-challenges.js'
jest.mock('./class-challenges')


// Write the test and code that makes a black coffee.
describe("coffeeOrder1", () =>{
  test("returns the order of a black coffee", () =>{
    expect(coffeeOrder1()).toEqual('black', 0, 0)
  })
})

var coffeeOrder1 = new Coffee('Black', 0, 0)
// Write the code that makes a coffee with 1 cream and 2 sugars.

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects
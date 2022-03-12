// const { expect } = require("@jest/globals");
// const { describe } = require("yargs");

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

// const { expect } = require("@jest/globals")
// const { describe } = require("yargs")

// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("areYouTired", () => {
  test ("returns drink coffee or keep working from input", () => {
    expect(areYouTired("yes")).toEqual("drink coffee")
    expect(areYouTired("no")).toEqual("keep working")
  })
})

function areYouTired(string) {
  if(string === "yes"){
    return "drink coffee"
  } else if(string === "no"){
    return "keep working"
  }
}
// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("youStressed", () =>{
  test("returns relax or keep going from input", () => {
    expect(youStressed("yes")).toEqual("relax")
    expect(youStressed("no")).toEqual("keep going")
  })
})

function youStressed(str){
  if(str === "yes"){
    return "relax"
  } else if(str === "no"){
    return "keep going"
  }
}
// 3. Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budget", () =>{
  test("returns in budget if under $300", () => {
    expect(budget("less then 300")).toEqual("in budget")
  })
})

// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.


// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.


// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.


// 7. Write the test for a function called rick that returns "Morty".


// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.


// 9. Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.


// 10. Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2.


// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.


// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".


// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.


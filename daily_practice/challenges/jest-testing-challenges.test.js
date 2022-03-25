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
  test("returns in budget if under 300", () => {
    expect(budget(250)).toEqual("in budget")
  })
})

function budget(num){
  if(num <= 300){
    return "in budget"
  }
}

// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("smallerNumber", () =>{
  test("returns which number is smaller out of two numbers", () =>{
    expect(smallerNumber(2, 5)).toEqual(2)
    expect(smallerNumber(30, 5)).toEqual(5)
  })
})

function smallerNumber(num1, num2){
  if(num1 < num2){
    return num1
  } else if(num1 > num2){
    return num2
  }
}
// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
describe("oddNumber", () =>{
  test("returns if the number is odd", () =>{
    expect(oddNumber(5)).toEqual("odd")
  })
})

function oddNumber(num){
  if(num % 2 == 1){
    return "odd"
  }
}
// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColor", () =>{
  test("returns yellow if the argument is banana, red if apple and purple if grape", () =>{
    expect(fruitColor("banana")).toEqual("yellow")
    expect(fruitColor("apple")).toEqual("red")
    expect(fruitColor("grape")).toEqual("purple")
  })
})

function fruitColor(str){
  if( str === "banana"){
    return "yellow"
  } else if( str === "apple"){
    return "red"
  } else if( str === "grape"){
    return "purple"
  }
}
// 7. Write the test for a function called rick that returns "Morty".
describe("rick", () =>{
  test("returns morty when anything is inputted in the argument", () =>{
    expect(rick("anything")).toEqual("morty")
  })
})

function rick(str){
  return "morty"
}
// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe("greeter", () =>{
  test("returns a greeting with the inputted name", () => {
    expect(greeter("Uncle Buck")).toEqual("Howdy, Uncle Buck")
  })
})

function greeter(name){
  return `Howdy, ${name}`
}
// 9. Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () =>{
  test("returns wether the number given is odd or even", () => {
    expect(oddOrEven(4)).toEqual("4 is even")
    expect(oddOrEven(3)).toEqual("3 is odd")
  })
})

function oddOrEven(num){
  if(num % 2 == 0){
    return `${num} is even`
  }
  else if(num % 2 == 1){
    return `${num} is odd`
  }
}
// 10. Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2.
describe("doubler", () => {
  test("returns number given multiplied by 2", () => {
    expect(doubler(5)).toEqual(10)
    expect(doubler(6)).toEqual(12)
  })
})
function doubler(num){
  return num * 2
}
// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () =>{
  test("multiplies the first number given by the second number given", () =>{
    expect(multiply(2,8)).toEqual(16)
    expect(multiply(5, 5)).toEqual(25)
  })
})

function multiply(num1, num2){
  return num1 * num2
}
// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisbleBy", () => {
  test("returns a string saying if the first number is divisble by the second", () =>{
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisble by 5")
  })
})

function divisibleBy(num1, num2){
  const dividedNums = num1 / num2
  if(dividedNums === 2){
    return `${num1} is evenly divisble by ${num2}`
  } 
  else{`${num1} is NOT evenly divisible by ${num2}`}
}
// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
describe("fizzBuzz", () =>{
  test("returns fizz for a number given if the number is 3, buzz for number 5, and fizzbuzz if the number is a multiple of both", () =>{
    expect(fizzBuzz(9)).toEqual("fizz")
    expect(fizzBuzz(10)).toEqual("buzz")
    expect(fizzBuzz(15)).toEqual("fizzbuzz")
  })
})

function fizzBuzz(num){
  for (i = 1; num <= 100; i++){
    if((num % 3 == 0) && (num % 5 == 0)){
      return "fizzbuzz"
    } else if( num % 3 == 0){
      return "fizz"
    } else if(num % 5 == 0){
      return "buzz"
    }
  }
}
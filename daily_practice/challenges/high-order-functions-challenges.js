// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]

// funtcion that takes in only a single argument
function multiplyX10(arr){
    // map through the arrays values and multiply each value by 10
  return arr.map( value => value * 10)
}
console.log(multiplyX10(arr1))


// Write a function that takes in an array and returns a new array with only odd numbers
var arr2 = [2, 7, 3, 5, 8, 10, 13]

// funtion takes in a single argument
function oddNumbersOnly(arr){
    // filter through the arrays index
  return arr.filter((value, index) => {
      // returning only indexes that are odd numbers
    return index % 2 !== 0
  })
}
console.log(oddNumbersOnly(arr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters.
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// takes only a single argument
function lettersOnly(array){
  // return the filtered arrays index
  return array.filter((value, index) =>{
    // filter if only the value === "string"
    if (typeof(value) === "string"){
      // return the array with "strings" only
      return array
    }
  })
}

console.log(lettersOnly(comboArr))


// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome" 

// function that takes a single string
function noVowels(str){
  // first split the string into an array
  const splitString = str.split("")
  console.log(splitString)
  // map through the array by its index
  return splitString.map((index) =>{
    // if the index === a, e, i, o, u, y return string without the vowels
    if(index === /[aeiouyAEIOUY]/){
        index = ""
    } else {
       return index
      }
  }).join("")
}

console.log(noVowels(str))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]

// var arr2 = [7, 8, 2, 1, 5, 4]

// function that takes in two array arguments
// combine both arrays with .concat()
// loop through the array and then
// filter out any duplicates of the combined array
// return the new combined array with no duplicates


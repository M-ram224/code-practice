// //Arithmatic Challenges
// console.log(37+71);
// console.log(67+123);
// console.log(56*23);
// console.log(45/5);
// console.log(5**7);
// console.log(33%6);

// //string challenges
// console.log("matthew ramirez".length);
// console.log("matthew ramirez".includes("e"));

// //boolean challenges
// console.log(34/3 > 67/2);
// console.log(5=="5");
// console.log(5==="5");
// console.log((!3===3));
// console.log("LEARN".length===5 && "student".length===7);
// console.log("LEARN".length===5 || "student".length===10);

// //Variable challenges
// var favNum = 12
// console.log(favNum / 2);
// var otherNum = 13
// console.log(favNum / otherNum);
// console.log(otherNum / favNum);
// var str = "papa"
// console.log(str.length);
// console.log(str.charAt(2));


// if/else coditionals + string interpolation challenges

// Q1***
// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.

// var item = 99
// var bud = "in budget"
// if(item < 100) {
//     console.log(`in budget`);
// } else{
//     console.log(`${item} is not your ${bud}, dont buy it`);
// }


// Q2***
// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

// var hungry = "full"
// var notHungry = "keep coding"

// if(hungry === "eat food") {
//     console.log("eat");
// } else if(hungry === "full"){
//     console.log(`${notHungry}`);
// } else{
//     console.log("you died");
// }


// Q3***
// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

// var trafficLight = "yellow"

// if(trafficLight === "green"){
//     console.log("go");
// } else if(trafficLight === "yellow"){
//     console.log("slow down");
// } else if(trafficLight === "red"){
//     console.log("stop");
// } else{ 
//     console.log("crashed");
// }


// Q4***
// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.

// var num1 = 10
// var num2 = 10

// if(num1 > num2){
//     console.log(`${num1}`);
// } else if(num1 === num2){
//     console.log("equal numbers");
// } else{
//     console.log("wrong");
// }


// Q5***
// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.

// var num1 = 0

// if(num1 % 2 === 1){
//     console.log("numbers odd");
// }else if(num1 === 0){
//     console.log("numbers 0");
// }else if(num1 % 2 === 0){
//     console.log("numbers even");
// } 
// else{
//     console.log("error");
// }


// Stretch challenges************
// Q6***
// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// var gradePerc = 86

// if(gradePerc === 100){
//     console.log("Perfect Score");
// } else if(gradePerc >= 80){
//     console.log(`You're score of ${gradePerc}, is passing for a B`);
// } else if(gradePerc >= 60){
//     console.log(`You're score of ${gradePerc}, is passing for a C`);
// } else if(gradePerc < 60){
//     console.log("You failed");
// }else if(gradePerc === 0){
//     console.log("no grade available.");
// } 
// else{ 
//     console.log("Error");
// }


// Q7***
// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.

// var data = "fun"


// if(data === true || false){
//     console.log(typeof true);
// } else if(data % 1 === 1 || data === 2 || data === 0){
//     console.log(typeof 20);
// } else if(data === /[a-z]/){
//     console.log(typeof "woah");
// }
// else{
//     console.log('Error');
// }


// Q8***
// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.





// Arrays challenges ***************************

// 1. 
// Write the code that will add "soda" to the end of the original array.
// Write the code that will add "granola" to the end of array without altering the original array.

// var groceryList = ["chips", "dip", "cookies"]
// groceryList.push("soda", "granola")
// console.log(groceryList);
// groceryList.pop()
// console.log(groceryList);


// Mutators - also know as "setters" - methods that change the original array.

// .push() - pushes a value into the end of an array
// .pop() - removes and returns the last value in an array
// .shift() - removes the first value in an array
// .unshift(value) - adds a new element to the beginning of an array
// .reverse() - reverses the order of the values in an array

// 2. 
// Write the code that will add the number 0 to the beginning of the array.
// Write the code that will add the number 12 to the end of the array.
// Write the code that will remove the first number from the array.
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! 

// var numbers = [2, 4, 6, 8, 10]

// numbers.unshift(0)
// console.log(numbers);
// numbers.push(12)
// console.log(numbers);
// numbers.shift()
// console.log(numbers);
// numbers.splice(0, 0, 0)
// console.log(numbers);

// 3.
// Accessors - also known as "getters" - methods that access an array and do not change the original array.

// .concat() - merges two or more arrays to form one combined array
// .join("") - converts all values in an array to a string
// .indexOf() - gives the index of a given value
// .lastIndexOf() - gives us the last index of a value (usually used when there are values that are the same)

// Write the code that finds the index of the first appearance of the number 2.

// Write the code that finds the index of the last appearance of the number 2.

// var numSet = [2, 13, 6, 8, 4, 2]

// console.log(numSet.indexOf(2));

// console.log(numSet.lastIndexOf(2));

// 4.
// Write the code that brings all the letters in the chars array together into a string.

// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.

// ********Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
// .splice("'")????

// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
// var chars = ["y", "a", "r", "r", "a"]

// console.log(chars.join(""));

// var charsReversed = chars.reverse().splice("'").join("")
// console.log(charsReversed);


// Create two arrays consisting of three first names of your cohort members in each.
// Sort the names in alphabetical order.

// Sort the names in reverse alphabetical order.

// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.
// var nameSet1 = [
//     "Wilford", 
//     "Ed", 
//     "OlGreg"]
// var nameSet2 = []
//     nameSet2[0]= "Bowser"
//     nameSet2[1]= "Stew"
//     nameSet2[2]= "Mac"

// console.log(nameSet1, nameSet2);
// console.log(nameSet1.sort().reverse(), nameSet2.sort().reverse());

// const combined = nameSet1.concat(nameSet2)
//     combined.sort()
// console.log(combined);



// Javascript loops challenges********************************

// for(let i=0; i<5; i++){
//     console.log(i)
//   }
// result =
// 0
// 1
// 2
// 3
// 4
// for(let i=10; i>0; i--){
//     console.log(i)
//   }
// result =
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1


// 1.*** Logging values with for loops

// Write a for loop that logs each number from 1 - 20.
// for(let i=1; i<21; i++){
//     console.log(i);
// }

// Write a for loop that logs the result of each number from 1 - 20 tripled.
var numMult= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15, 16, 17, 18, 19, 20]
// for(let i=0; i<numMult.length; i++){
//     let thrice = numMult[i] * 3
//     console.log(thrice);
// }

// for(let i=1; i<21; i++){
//     console.log(i * 3);
// }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc

// for(let i=0; i<numMult.length; i++){
//     // if nummult index has a remainder of 1 
//     if( numMult[i] % 2 === 1){
//         // return numMult[i] as the string "odd"
//         numMult[i] = "ODD"
//     }
//     // log inside loop to make every index change to what needs to happen
//   console.log(numMult[i]);  
// }


// 2. ********** Looping over an array. Consider this variable:
// var nums = [3, 57, -9, 20, 67, 2, 34]
// // // Create a loop that will log the highest number from the array. Expected output --> 67

// // set a new variable to be nums[0]
// let max = nums[0]
// // loop through arrays length
// for(let i=0; i<nums.length; i++){
//     // if nums[i] > max
//     if( nums[i] > max){
//     // let max = nums[i]
//         max = nums[i]
//     }
// }
// // log outside loop to encompass whole array and give single output of -->67
// console.log(max);



// // Create a loop that will log the lowest number from the array Expected output --> -9

// set a local var to nums[0]
// let min = nums[0]

// // loop through its nums.length
// for(let i=0; i<nums.length; i++){
//     // if nums[i] < min
//     if(nums[i] < min){
//         // min = nums[i]
//         min = nums[i]
//     }
// }
// // log outside of the loop to only give one single log of lowest num
// console.log(min);

// // Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1

// // loop through the length of the array
// for(let i=0; i<nums.length; i++){
//     // local function dividing by 2 and finding the remainder
//     const remainder = nums[i] % 2

// // log inside loop to run on each index of the array
// console.log(remainder);
// }


// 3. Looping over a string. Consider this variable:
// var myString = "learn student, wee"
// // Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2

// // create a local variable that starts at 0
// let eCount = 0
// // loop through myString.length
// for(let i=0; i<myString.length; i++){
//     // if myString[i] === "e"
//     if(myString[i] === "e"){
//         // eCount will start at 0 and add how many "e"
//         eCount += 1
//     }
// }
// // log outside to do work on all of the array
// console.log(eCount);

// 4. STRETCH Challenges**************still needs work*********
// Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc


// for(let i=0; i<=15; i++){

// let evenOdd = i
//     if(evenOdd % 2 === 1){
//         console.log(`${evenOdd} is odd`);
//     } 
//     else{
//         console.log(`${evenOdd} is even`);
//     }
// }

// for(let i=0; i<=15; i++){

// const eAndO = i % 2 === 1 ? "odd" : "even" ; console.log(`${i} is ${eAndO}`);
// }

// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

// loop through 100
// for(let i=1; i<=100; i++){
//     // if/ else if a num is a multiple of 3 then put "fizz" or 5 put "buzz" or multiple of 3 and 5 then put "fizzbuzz"
//     // put in order for logic to apply "fizzbuzz" first, then "fizz" and "buzz", then numbers
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz");
//     } else if(i % 5 === 0){
//         console.log("buzz");
//     } else if(i % 3 === 0){
//         console.log("fizz");
//     }
//     else{
//         console.log(i);
//     }
// }


// Javascript Functions*******************************************

// 1. Write a function named marco that returns "polo".
// write a functioned named marco that returns an name argument of "polo"
// const marco = (name) => {
//     return name
// }
// console.log(marco("polo"));
// 2. Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// function named greeting will take a name as an argument and return ---> "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `welcome, ${name}`
// }
// console.log(greeting("greg"));

// 3. Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// function named oddOrEven takes a num argument
// const oddOrEven = (n) => {
//     // ternary operator saying if the numbers modulous of 2 === 1 then return that its true and "odd" : otherwise return what is false and "even"
//     return n % 2 === 1 ? "odd" : "even" ;
// }
// console.log(oddOrEven(12))
// console.log(oddOrEven(3));
// console.log(oddOrEven(10));
// console.log(oddOrEven(27));
// console.log(oddOrEven(15));

// 4. Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// const triple = (num) => {
//     return num * 3
// }

// console.log(triple(2));
// console.log(triple(60));
// console.log(triple(5));
// console.log(triple(10));

// 5. Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply(2, 5));
// console.log(multiply(10, 4));
// console.log(multiply(0, 4));

// 6. Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// function taking two num arguments
// const divisibleBy = (num1, num2) => {
//     // ternary saying if num1 modulous or remainder of num2 === 0 then return its evenly divisble otherwise its not evenly divisble.
//     return num1 % num2 === 0 ? `${num1} is evenly divisible by ${num2}` : `${num1} is not divisible by ${num2}`;
// }
// console.log(divisibleBy(10, 5));
// console.log(divisibleBy(3, 5));

// 7. Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Done without a loop
    // const assignGrade = (num) => {
    //     if(num <= 69){
    //        return `${num} is an F`
    //     } else if(num <= 79){
    //        return `${num} is a C`
    //     } else if(num <= 89){
    //        return `${num} is a B`
    //     } else if(num <= 100){
    //        return `${num} is an A`
    //     }
    // }

// Idea*** try using a loop trhough 1-100 and then the condtional to returns the letter grade.
// const assignGrade = (num) => {
//     for(let num=0; num<=100; num++){
//         if(num <= 69){
//             console.log("F");
//         } else if(num <= 79){
//             console.log("C");
//         } else if(num <= 89){
//             console.log("B");
//         } else if(num <= 100){
//             console.log("A");
//         }
//     }
// }

// console.log(assignGrade);



// STRETCH Challenges****
// Test your functions with multiple calls

// 1. What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number

// function takes two num arguments
// const greaterNum = (num1, num2) => {
//     // if statement returning if num1 or num2 is greater
//     if(num1 > num2){
//         return `${num1} is greater than ${num2}`
//     }
//     else if(num2 > num1){
//         return `${num2} is greater than ${num1}`
//     } 
//     else {
//         return `${num2} and ${num1} are equal`
//     }
// }
// console.log(greaterNum(5, 10));
// console.log(greaterNum(2, 1));
// console.log(greaterNum(3, 3));


// 2. The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

// function takes 1 string argument 
//  


// 3. The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary

// const pluralizer = (5, cat)

// Expected outcome --> "5 cats"

// const pluralizer = (1, dog)

// Expected outcome --> "1 dog"

// Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"






// **** JavaScript Functions, Loops, and Arrays *********

// Write a function that takes in an array and returns6 a new array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]

// Expected output --> [9, 27, 45, 12, 30]



// Write a function that takes in an array and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// Expected output --> [-7, 3, 5, 13]



// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// var myMessage = "Hello There"

// Expected output --> "HELLO THERE"



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// Expected output --> "nicework"



// Create a function that returns the highest number
// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// Expected output --> 67



// Create a function that returns the lowest number
// var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// Expected output --> -9



// Create a function that calculates the sum
// var addThese1 = [1, 2, 3, 4]

// Expected output --> 10

// var addThese2 = []

// Expected output --> 0



// Create a function that calculates the mean value
// var meanChecker = [1, 2, 3] Expected output --> 2



// Create a function that finds the index of the highest number
// var indexHighestNumber = [1, 4, 2]

// Expected output --> 1



// Create a function that takes in a string and returns only the middle value
// var testString1 = "hello" Expected output --> "l" var testString2 = "boogeyman" Expected output --> "e"



// STRETCH Challenges
// Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)
// var isPalindrome1 = "racecar"

// Expected output --> "Yes racecar is a palindrome"

// var isPalindrome2 = "albatross"

// Expected output --> "No albatross is not a palindrome"


// // create a helper function that takes in a string
// function reverseWord(word) {
//     // local variable setting result to an empty array
//     const result = []
//     // looping through the word characters starting less than its length, becasue javascript indexs start at 0. Then we loop backwards to the string at 0
//     for(let i = word.length -1; i >= 0; i--){
//         // pushing the result of looped characters
//         result.push(word[i])
//     }
//     // then returning the characters joined back together into a string
//     return result.join('')
// }

// // create a function to compare the words as a palindrome or not
// function isPalindrome(word){
//     // take into account that strings may have uppercase latters, we set a local variable to make the word all lowercase
//     const lowerCase = word.toLowerCase()
//     // local variable to set the lowercased word to equal the same word that is being reversed by our helper method.
//     const palindromeOrNot = lowerCase === reverseWord(lowerCase)
//     // Ternary conditional checking if the word is the same reversed then returning a string saying it is a palindrome or not
//     return palindromeOrNot ? `Yes, ${word} is a Palindrome` : `No, ${word} is not a Palindrome`
// }

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('Racecar'))
// console.log(isPalindrome('albatross'))
// console.log(isPalindrome('BoB'))
// console.log(isPalindrome('saFe'))




// Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed

// var fullString1 = "javascript is awesome"
// var fullString2 = "I am a LEARN student"

// function noVowels(string){
//     // split string up into an array and set letters to lower case
//     const stringArray = string.toLowerCase().split("")
//     // map through the array finding the vowels and taking them out or not, then joining the string back together
//     return stringArray.map((letter) => {
//         // tried regular expressions but did not work. /[aeiouyAEIOUY]/
//         // if( letter === /[aeiouyAEIOUY]/){
//         // if strings character conatins aeiouy then return an empty "" character
//         if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter ===    "u" || letter === "y") {
//             return  ""
//         // else return the whole character
//         } else{
//             return letter
//         }
//     }).join("")
// }

// console.log(noVowels(fullString1));
// console.log(noVowels(fullString2));

// Expected output --> "jvscrpt s wsm"
// Expected output --> "m LRN stdnt"



// Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]

// var arr2 = [7, 8, 2, 3, 1, 5, 4]

// // create function taking two arguments
// function noDuplicates(arr1, arr2){
//     // combine the arrays using concat()
//     const mergeArr = [].concat(arr1, arr2)
//     // return any duplicates using the ...newSet method
//     return [...new Set(mergeArr)]
// }
// console.log(noDuplicates(arr1, arr2));

// // Expected output --> [3, 7, 10, 5, 4, 8, 2, 1]

// // create function that takes in two arguments
// function noDuplicates2(arr1, arr2){
//     // combine the arrays in a new variable using concat.()
//     const mergeArr = arr1.concat(arr2)
//     // return using .filter, if the .indexOf char is the same as the index, filter it out
//     return mergeArr.filter((char, index) => (
//         mergeArr.indexOf(char) === index
//     ))
// }

// console.log(noDuplicates2(arr1, arr2));


// Clean Function: Create a function that filters false, null, 0 and blank values from an array.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

// create a function that takes in a single argument
// function cleanArray(arr){
//     // filter through the array 
//     return arr.filter((item) => item);
// }
// // Expected output --> [58, "abcd", true]
// const clarr = cleanArray([58, "", "abcd", true, null, false, 0])
// console.log(clarr);


// Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// fillArray = (6, 0)

// function that takes in two num arguments
function arrFill(length, fillVal){
    // return one array the length of the first num, thats filled with the second num
    // create new array to hold results
    const results = []
    // for loop start at 0, through the length of the arr
    for(let i = 0; i < length; i++){
        // push the fillVal into the results of the arr
        results.push(fillVal)
    }
    // return the results arr filled with the fillVal, at the length of given number
    return results
}
console.log(arrFill(4, 11));
console.log(arrFill(6, 0));
// expected output --> [0, 0, 0, 0, 0, 0]

// fillArray = (4, 11)

// expected output --> [11, 11, 11, 11]



// Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// addUp = (4)

// Expected output --> 10

// addUp = (13)

// Expected output --> 91

// addUp = (600)

// Expected output --> 180300




// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message

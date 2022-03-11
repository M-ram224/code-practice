// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file

// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// set the space key to number 32
const SPACE_KEY=32;
const MAX_NUMBER_OF_GUESSES=10;
// create local variables to use for initializeGame
let randomNumber;
let numberOfAttempts;

// function that provides a new random number from 1-100
function initializeGame() {
  // set randomNumber to parse an integer into a string through a random number too 100 and set numberOfAttempts to 0
  randomNumber = parseInt((Math.random() * 100) + 1);
  numberOfAttempts = 0;
}

// As a user I get alerted after trying the game for more than 10 times and game is refreshed with a new random number
// setting the amount of guesses to be 10 with an alert, connecting to html file, and adding in the guess into the form
function gradeTheGuess() {
  // if the number of attempts is incremented more than 10, send alert saying what the right number was and also re-initializeGame
  if (++numberOfAttempts > 10) {
    alert(`Sorry you took too many guesses! The correct number was ${randomNumber}`);
    initializeGame();
    return;
  } 

  // local variable selecting first element in document.querySelector #guess connects to high-low-challenge.html inputed value
  let guess = document.querySelector('#guess').value

  // if the typeof guess === 'string', guess = the parseInt(guess)
  if (typeof guess === 'string') {
    guess = parseInt(guess);
  }

  // initialize result to highLowInput function below with inputed guess
  const result = highLowInput(guess);
  // initilize output to connect to element in high-low-challenge.html #output
  const output = document.querySelector('#output')
  // sending outputs content as the result from HighLowInput(guess)
  output.textContent = result;
}

// As a user I can enter the number using either the space bar or by clicking on the button
// connecting to html #guess to listen to event "keyup" event
document.querySelector('#guess').addEventListener("keyup", function(event){
  // if the event keycode on the spacebar, which is key 32, initiate gradeTheGuess funtion for everytime SPACE_KEY is pressed
  if (event.keyCode === SPACE_KEY) {
    gradeTheGuess();
  }
});

// connect to html #guessbtn to listen to event 'click'
document.querySelector('#guessBtn').addEventListener('click', function(event) {
  // prevent default action to now intiatiate gradeTheGuess function
  event.preventDefault();
  gradeTheGuess();
});

// As a user i see a prompt for either the correct answer or saying the number is higher lower
// function that takes in a UserNum as an argument
function highLowInput(userNum){
  // As a user if I do not enter a number between 1-100, i am alerted to use the proper numbers and game is refreshed with a new random number
  // if numbers are greater than 100 or less than 100 have them try again with correct numbers 
  if (userNum > 100 || userNum < 1) {
    return `${userNum} is outside 1-100, try again with correct numbers to guess`
  } 
  // if userNumber is equal to randomNumber generated -1, +1, or <, >, appropriate response to each. else if userName === RandomNumber generated it is correct
  if (userNum === randomNumber - 1) {
      return `${userNum} is low, but so close, try again!`
  } else if (userNum === randomNumber + 1){
      return `${userNum} is high, but so close, try again!`
  } else if (userNum < randomNumber) {
    return `${userNum} is too low, but getting closer, try again!`
  } else if (userNum > randomNumber){
      return `${userNum} is too high, but getting closer, try again!`
  } else if (userNum === randomNumber) {
      return `${userNum} is correct, great job guessing!`
  } 
}

// re-initializeGame function everytime we run through the game
initializeGame();

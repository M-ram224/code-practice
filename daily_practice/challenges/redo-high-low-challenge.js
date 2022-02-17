// High/Low Game
// Create an HTML page and link your JavaScript file

// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message

// set the enter key to number 13 and max number of guesses to 10
const ENTER_KEY=13;
const MAX_NUM_GUESSES=10;

// create local variables to use to initializeGame
let randomNumber;
let numOfAttempts;
// function that provides a new random number from 1-100
function initializeGame(){
  // set randomNumber to parse an integer into a string through a MATH.random() times 100 and set numberOfAttempts to 0
  randomNumber = parseInt((MATH.random() * 100) +1)
  numOfAttempts = 0
}


// function to set the amount of guesses to be 10 with an alert, connecting to html file, and adding in the guess into the form
function guessAttempts() {
  // if the number of attempts is incremented more than 10, send alert saying what the right number was and also re-initializeGame
  if(++numOfAttempts > 10){
    alert(`Too many guesses! Correct number was ${randomNumber}, try again!`)
    // re-initializeGame number
    initializeGame();
    return
  }

  // local variable selecting first element in document.querySelector #guess connects to high-low-challenge.html inputed value
 
  // if the typeof guess === 'string', guess = the parseInt(guess)
 
  // initialize result to highLowInput function below with inputed guess
  // initilize output to connect to element in high-low-challenge.html #output
  // sending outputs content as the result from HighLowInput(guess)

}
 

// connecting to html #guess to listen to event "keyup" event
  // if the event keycode on the spacebar, which is key 32, initiate gradeTheGuess funtion for everytime SPACE_KEY is pressed


// connect to html #guessbtn to listen to event 'click'
  // prevent default action to now intiatiate gradeTheGuess function


// function that takes in a UserNum as an argument

  // if numbers are greater than 100 or less than 100 have them try again with correct numbers 

  // if userNumber is equal to randomNumber generated -1, +1, or <, >, appropriate response to each. else if userName === RandomNumber generated it is correct


// re-initializeGame function everytime we run through the game

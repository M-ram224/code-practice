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
function initiateGame(){
  // set randomNumber to parse an integer into a string through a MATH.random() times 100, and start at 1, then set numberOfAttempts to 0
  randomNumber = parseInt((MATH.random() * 100) +1)
  numOfAttempts = 0
}


// function that takes in a UserNum as an argument
function highLowInputResponse(userNumber) {
  // if numbers are greater than 100 or less than 100 have them try again with correct numbers 
  if(userNumber > 100 || userNumber < 1){
    return `${userNumber} is greater than 100 or less than 1, please try again with appropirate numbers`
  }
  // if userNumber is equal to randomNumber generated -1, +1, or <, >, appropriate response to each. else if userName === RandomNumber generated it is correct
  if(userNumber === randomNumber -1){
    return `${userNumber} is low, but so close, keep trying!`
  } else if(userNumber === randomNumber +1){
    return `${userNumber} is high, but so close, keep trying!`
  } else if(userNumber < randomNumber){
    return `${userNumber} is lower, but keep trying!`
  } else if(userNumber > randomNumber){
    return `${userNumber} is higher, but keep trying!`
  } else if(userNumber === randomNumber){
    return `${userNumber} is correct, great Job!`
  }
}

// function to set the amount of guesses to be 10 with an alert, connecting to html file, and adding in the guess into the form
function guessAttempts(){
  // if the number of attempts is incremented more than 10, send alert saying what the right number was and then re-initializeGame
  if(++numOfAttempts > 10){
    alert(`Ahh, too many guesses, the correct number was ${randomNumber}, try again!`)
    initiateGame()
    return
  }
  
  // ***Connceting my redo-high-low-challenge.js functionality to my redo-high-low-challenge.html
  
  // local variable selecting first element in document.querySelector #guess connects to high-low-challenge.html inputed value
  guess = document.querySelector('#guess').value
  // if the typeof guess === 'string', guess = the parseInt(guess)
  if(typeof guess === 'string'){
    guess = parseInt(guess)
  }
  // initialize result to highLowResponse function with inputed guess
  result = highLowInputResponse(guess)
  // initilize output to connect to element in high-low-challenge.html #output
  output = document.querySelector('#output').value
  // sending outputs content as the result from HighLowInput(guess)
  
}
// ***Connceting my redo-high-low-challenge.js functionality to my redo-high-low-challenge.html

// connecting to html #guess to listen to event "keyup" event
document.querySelector('#guess').addEventListener('#keyup', function(event){
  // if the event keycode on the enter key, which is key 13, initiate guessAttempts() funtion for everytime ENTER_KEY is pressed
  if(keyCode === event){
    guessAttempts(ENTER_KEY)
  }
})
  

// connect to html #guessbtn to listen to event 'click'
document.querySelector('#guessBtn').addEventListener('click', function(event){
  // prevent default action to now intiatiate guessAttempts() function
  event.preventDefault()
  guessAttempts()
})

// re-initializeGame function everytime we run through the game
initiateGame()
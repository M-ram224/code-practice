// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file

// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message

// connect function to high-low-challenge.html file by connecting to the documents "output"
var numInput = document.getElementById("output")
// trying to create a button to click enter on the spacebar
numInput.addEventListener("keyup", function(event){
  // if the event keycode on the spacebar which is key 32
  if (event.keyCode === 32) {
    // prevent default action and click on the guessBtn
    event.preventDefault()
    document.getElementById("guessBtn").click()
  }
})

// function that takes in a UserNum as an argument
function highLowInput(userNum){
  // loop through 1-100 to ouput either its too lor/high or correct
  for(let i=1; i <= 100; i++){
    if(userNum <= 71){
      return `${userNum} is too low, but getting closer, try again!`
    } else if(userNum >= 75){
        return `${userNum} is too high, but getting closer, try again!`
    } else if(userNum === 72){
        return `${userNum} is low, but so close, try again!`
    } else if(userNum === 74){
        return `${userNum} is high, but so close, try again!`
    } else if (userNum === 73){
        return `${userNum} is correct, great job guessing!`
    }
    else `${userNum} is outside 1-100, try again with correct numbers to guess`
  } 
}

// import compareNumbers
import { compareNumbers } from './compareNumbers.js';

// Declare global variables
const targetNumber = getRandomInt(1, 21);
const myButton = document.getElementById('guess-button');
const responseMessage = document.getElementById('response');
let remainingGuesses = 4;

/*
Random Number
input is guess-field
button is guess-button
output is response
*/

// Random integer example function copied from MDN @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Guess button Event Listener
myButton.addEventListener('click', () => {
    const currentGuess = document.getElementById('guess-field').value;
    const sanitizedGuess = parseInt(currentGuess, 10);
    let result = compareNumbers(sanitizedGuess, targetNumber);

    switch (result) {
    case -1:
        guessLow();
        remainingGuesses--;
        displayRemaining();
        if (remainingGuesses === 0)
            gameOver(0);

        break;
    case 0:
        gameOver(1);
        break;
    case 1:
        guessHigh();
        remainingGuesses--;
        displayRemaining();
        if (remainingGuesses === 0)
            gameOver(0);
        break;
    }
});

// guessLow display function
function guessLow() {
    responseMessage.textContent = 'That was too low! ';
}

// guessHigh display function
function guessHigh() {
    responseMessage.textContent = 'That was too high! ';
}

// gameOver display function for win + lose cases, 1 is win, is 0 lose
function gameOver(ending) {
    disableGameplay();
    if (!ending)
        responseMessage.textContent = 'Nice try ya garbanzon bean! The correct number was ' + targetNumber + '. Game over!';
    else
        responseMessage.textContent = 'You got it right! The correct number was ' + targetNumber + '. Congratulations! Game over.';
}

// Update remaining guesses display
function displayRemaining() {
    responseMessage.textContent += 'You have ' + remainingGuesses + 'guesses remaining.';
}

// Disable gameplay function
function disableGameplay () {
    deactivate button;
}
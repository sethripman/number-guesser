// import compareNumbers
import { compareNumbers } from './compareNumbers.js';

// Declare global variables
const targetNumber = getRandomInt(1, 21);
const myButton = document.getElementById('guess-button');
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
        if (remainingGuesses === 0)
            gameOver();

        break;
    case 0:
        guessRight();
        break;
    case 1:
        guessHigh();
        remainingGuesses--;
        if (remainingGuesses === 0)
            gameOver();
        break;
    }

    

});

// define guessLow, guessHigh, guessRight, gameOver
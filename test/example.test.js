// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;

test('should return 0 if both numbers are identical', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 3;
    const correctNumber = 3;
    //Act 
    // Call the function you're testing and set the result to a const
    const numbersIdentical = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(numbersIdentical, 0);
});

test('should return -1 if guess is lower than correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 2;
    const correctNumber = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const guessLower = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guessLower, -1);
});

test('should return 1 if guess is higher than correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 18;
    const correctNumber = 9;
    //Act 
    // Call the function you're testing and set the result to a const
    const guessHigher = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guessHigher, 1);
});

test('should catch error if guess is NaN', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = NaN;
    const correctNumber = 9;
    //Act 
    // Call the function you're testing and set the result to a const
    const guessHigher = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guessHigher, 1);
});

test('should catch error if correctNumber is NaN', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 18;
    const correctNumber = NaN;
    //Act 
    // Call the function you're testing and set the result to a const
    const guessHigher = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guessHigher, 1);
});
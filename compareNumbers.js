export const compareNumbers = (guess, correctNumber) => {
    if (isNaN(guess) || isNaN(correctNumber)) throw 'That guess was not a number!';
    if (guess === correctNumber) return 0;
    if (guess < correctNumber) return -1;
    if (guess > correctNumber) return 1;
};
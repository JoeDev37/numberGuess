const prompt = require('prompt-sync')();
console.log('Welcom...');

const target = Math.round(Math.random() * 100);

let guesses = 0;

while(true) {
    let guess = Number(prompt('Guess the number (1 - 100): '));
    guesses += 1;

    if(guess > target) {
        console.log('too high.');
    } else if(guess < target) {
        console.log('too low.');
    } else {
        console.log('you got it!');
        break;
    }
};

console.log(`it tooks ${guesses} guesses!`);
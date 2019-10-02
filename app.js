import numberTest from './guess-number.js';

let submitButton = document.getElementById('submit');
let userMessage = document.getElementById('usr-msg');
const guessesLeft = document.getElementById('guesses-left');
let trys = 3;

const realNumber = (Math.floor(Math.random() * (13)));


submitButton.addEventListener('click', function() {
    
    let number = document.getElementById('number').value;
    let filteredNumber = parseInt(number);
    
    const result = numberTest(filteredNumber, realNumber);
    
    if (result === -1) {
        tooLow();
    } else if (result === 0) {
        tooHigh();
    } else if (result === 1) {
        won();
    } else if (result === false) {
        invalidNumber();
    }   
    if (trys === 0) {
        lost();
    }
});

function tooLow() {
    userMessage.textContent = 'You guessed too low';
    trys--;
    trysLeftDisplay();
}
function tooHigh() {
    userMessage.textContent = 'You guessed too high';
    trys--;
    trysLeftDisplay();
}
function won() {
    userMessage.textContent = 'You won!';
    submitButton.disabled = true;
}
function lost() {
    userMessage.textContent = 'You lost :(';
    submitButton.disabled = true;
}
function trysLeftDisplay() {
    guessesLeft.textContent = `You have ${trys} trys left`;
    if (trys === 1) {
        guessesLeft.textContent = `You have ${trys} try left`;
    }
}
function invalidNumber() {
    userMessage.textContent = 'That is an invalid number';
}
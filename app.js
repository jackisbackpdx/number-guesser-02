let submit = document.getElementById('submit');
let message = document.getElementById('usr-msg');
const realNumber = (Math.floor(Math.random() * (13)));
let trys = 3;

console.log(realNumber);

submit.addEventListener('click', function() {
    let number = document.getElementById('number').value;
    let filteredNumber = parseInt(number);
    if (filteredNumber > realNumber) {
        message.textContent = 'You guessed too high';
        trys--;
        console.log(trys);
    } else if (filteredNumber < realNumber) {
        message.textContent = 'You guessed too low';
        trys--;
        console.log(trys);
    } else if (filteredNumber === realNumber) {
        message.textContent = 'You won!';
        console.log(trys);
    }
    if (trys === 0) {
        message.textContent = 'You lost :<';
        submit.disabled = true;
    }
});
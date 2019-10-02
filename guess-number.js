export default function numberTest(number, randomNumber) {
    if (number < randomNumber && number > -1 && number < 21) {
        return -1;
    } else if (number > randomNumber && number > -1 && number < 20) {
        return 0;
    } else if (number === randomNumber) {
        return 1;
    } else {
        return false;
    }
}
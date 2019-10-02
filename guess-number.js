export default function numberTest(number, randomNumber) {
    if (number < randomNumber) {
        return -1;
    } else if (number > randomNumber) {
        return 0;
    } else if (number === randomNumber) {
        return 1;
    }
}
// IMPORT MODULES under test here:
// import example from '../src/example.js';
import numberTest from '../guess-number.js';
const test = QUnit.test;

test('should return -1 when number is less than 18', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 16;
    const randomNumber = 18;
    //Act 
    // Call the function you're testing and set the result to a const
    let numberCorrect = numberTest(number, randomNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(numberCorrect, -1);
});

test('should return 0 when number is greater than 18', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 19;
    const randomNumber = 18;
    //Act 
    // Call the function you're testing and set the result to a const
    let numberCorrect = numberTest(number, randomNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(numberCorrect, 0);
});

test('should return 1 when number is 18 (same as the random number)', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 18;
    const randomNumber = 18;
    //Act 
    // Call the function you're testing and set the result to a const
    let numberCorrect = numberTest(number, randomNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(numberCorrect, 1);
});
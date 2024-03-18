const sumAll = function(firstNumber, secondNumber) {

    let sum = 0;

    if(secondNumber < firstNumber) {

        let newSecondNumber = firstNumber;
        let newFirstNumber = secondNumber;

        for(i = newFirstNumber; i <= newSecondNumber; i++) {

            sum += i;
    
        }

    } else {

        for(i = firstNumber; i <= secondNumber; i++) {

            sum += i;

        }

    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;

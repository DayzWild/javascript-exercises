const sumAll = function(firstNumber, secondNumber) {

    let sum = 0;

    if(secondNumber < firstNumber) {

        let newSecondNumber = firstNumber;
        let newFirstNumber = secondNumber;

        for(i = newFirstNumber; i <= newSecondNumber; i++) {

            sum += i;
    
        }

    } else if (firstNumber < 0 || secondNumber < 0) {
        
        return "ERROR";

    } else {

        for(i = firstNumber; i <= secondNumber; i++) {

            sum += i;

        }

    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;

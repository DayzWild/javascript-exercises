let returnedString = "";

const repeatString = function(string, num) {

    for(i = 1; i <= num; i++) {

        returnedString += string;

    }

    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;

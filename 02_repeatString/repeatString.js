const repeatString = function(string, num) {

    let returnedString = "";

    for(i = 1; i <= num; i++) {

        returnedString += string;

    }

    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;

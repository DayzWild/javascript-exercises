const convertToCelsius = function(temp) {

  let tempCelsius = (temp - 32) / 1.79999999;

  return Math.round(tempCelsius * 10) / 10;

};

const convertToFahrenheit = function() {



};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

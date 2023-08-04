const convertToCelsius = function(oldTempF) {
  return Math.round(((oldTempF - 32) * (5/9)) * 10) / 10
};

const convertToFahrenheit = function(oldTempC) {
  return Math.round(((oldTempC * (9/5)) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

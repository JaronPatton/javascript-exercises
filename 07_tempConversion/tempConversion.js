const convertToCelsius = function (fahrenheit) {
  const converted = (fahrenheit - 32) * 5 / 9;
  let fixedRound = Math.round(converted * 10) / 10;
  return fixedRound;
};

const convertToFahrenheit = function (celsius) {
  const converted = celsius * 9 / 5 + 32
  let fixedRound = Math.round(converted * 10) / 10;
  return fixedRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (inputArray) {
  if (inputArray.length === 0) return 0;
  else if (inputArray.length === 1) return inputArray[0];
  inputArray.reduce((acc, curr) => {
    acc + curr, 0
  })
};

const multiply = function (x, y) {
  return x * y;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
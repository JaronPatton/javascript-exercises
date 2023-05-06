const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (inputArray) {
  return inputArray.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (inputArray) {
  return inputArray.reduce((acc, curr) => acc * curr, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (inputNumber) {
  let myArray = [];
  for (let i = 1; i <= inputNumber; i++) {
    myArray.push(i);
  }
  return myArray.reduce((acc, curr) => acc * curr, 1);
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
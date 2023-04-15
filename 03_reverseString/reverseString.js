// // Strings in JavaScript cannot be reversed directly 
// so you're going to have to split it into something else first.. 
// do the reversal and then join it back together into a string.
const reverseString = function (str) {
  const inputString = str.split('');
  let i = inputString.length - 1;
  let outputString = '';
  for (i; i >= 0; i--) {
    outputString += inputString.[i];
  }
  return outputString;
};

// Do not edit below this line
module.exports = reverseString;

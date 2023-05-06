const palindromes = function (string) {
  let lowerCaseStr = string.toLowerCase();
  let myArr = lowerCaseStr.split();
  let reversedArr = myArr.slice().reverse();
  let reversedStr = reversedArr.toString();
  if (lowerCaseStr == reversedStr) return true;
};

// Do not edit below this line
module.exports = palindromes;

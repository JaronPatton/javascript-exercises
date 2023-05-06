const palindromes = function (string) {
  let lowerCaseStr = string.toLowerCase();
  let noPuncStr = lowerCaseStr.replace(/[^a-z]/g, "")
  let myArr = noPuncStr.split('');
  let reversedArr = myArr.slice().reverse();
  let reversedStr = reversedArr.join('');
  if (noPuncStr == reversedStr) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;

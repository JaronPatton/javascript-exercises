const removeFromArray = function (array, ...remove) {
  const newArray = [];
  for (i = 0; i < array.length; i++) {
    if (!remove.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

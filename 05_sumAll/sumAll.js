const sumAll = function (intOne, intTwo) {
  let sum = 0;
  if ((intOne < 0 || intTwo < 0)) {
    return 'ERROR';
  }
  else if (intOne > intTwo) {
    for (intOne; intOne >= intTwo; intOne--) {
      sum += intOne;
    }
    return sum;
  }
  else
    for (intOne; intOne <= intTwo; intOne++) {
      sum += intOne;
    }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;

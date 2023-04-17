const leapYears = function (year) {
  if ((year % 400 === 0) && (year % 100 === 0)) {
    //leap year
    return true;
  }
  else if ((year % 4 === 0) && (year % 100 === 0)) {
    //not leap year
    return false;
  }
  //leap year
  else if (year % 4 === 0) return true;
  // not leap year
  else return false;
};
// Do not edit below this line
module.exports = leapYears;

"use strict";

function nextLeapYearCalculator(currentYear) {
  let nextLeapYear = 0;
  if (currentYear % 4 === 0) {
    nextLeapYear = currentYear;
  } else if (currentYear % 4 === 1) {
    nextLeapYear = currentYear + 3;
  } else if (currentYear % 4 === 2) {
    nextLeapYear = currentYear + 2;
  } else if (currentYear % 4 === 3) {
    nextLeapYear = currentYear + 1;
  }

  return nextLeapYear;
}

console.log(nextLeapYearCalculator(2020));
console.log(nextLeapYearCalculator(2021));
console.log(nextLeapYearCalculator(2025));
console.log(nextLeapYearCalculator(2032));
console.log(nextLeapYearCalculator(3));

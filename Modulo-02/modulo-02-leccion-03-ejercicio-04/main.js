"use strict";

const dogFirstYear = 15;
const dogSecondYear = 9;
const dogRestYears = 5;

const years = 10;
if (years === 1) {
  console.log(`El perro tiene ${dogFirstYear} años`);
} else if (years === 2) {
  console.log(`El perro tiene ${dogFirstYear + dogSecondYear} años`);
} else if (years === 3) {
  console.log(
    `El perro tiene ${dogFirstYear + dogSecondYear + dogRestYears} años`
  );
} else {
  console.log(
    `El perro tiene ${
      dogFirstYear + dogSecondYear + (years - 2) * dogRestYears
    } años`
  );
}

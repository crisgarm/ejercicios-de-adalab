"use strict";

let getNumber = undefined;

function oddEven(number) {
  if (number % 2 === 0) {
    getNumber = true;
    // console.log(`El número ${number} es par.`);
  } else {
    getNumber = false;
    // console.log(`El número ${number} es impar.`);
  }
  console.log(getNumber);
  return getNumber;
}

console.log(oddEven(398));

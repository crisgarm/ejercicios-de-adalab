"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  return element;
}
if (element === true) {
  console.log(element);
} else {
  console.error(
    `No existe ningún elemento con clase, id o tag llamado ${selector}`
  );
}

const btnEl = getEl(".btn");
console.log(btnEl);

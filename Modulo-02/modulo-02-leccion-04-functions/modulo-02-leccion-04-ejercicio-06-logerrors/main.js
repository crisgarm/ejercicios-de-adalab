"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  if (element !== null) {
    console.log(element);
  } else {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
    return element;
  }
}
const btnEl = getEl(".btn");
console.log(btnEl);

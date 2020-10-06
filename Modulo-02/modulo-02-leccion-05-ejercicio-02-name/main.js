"use strict";
// elemento de HTML
const button = document.querySelector(".alert");
const nameElement = document.querySelector(".nameElement");

// handler
function showName() {
  const inputValue = nameElement.value;
  console.log(`Hola ${inputValue}`);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", showName);

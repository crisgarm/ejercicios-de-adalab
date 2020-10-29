"use strict";
// elemento de HTML
const button = document.querySelector(".alert");

// handler
function showAlert() {
  console.log("Mi primer click, ¡ole yo y la mujer que me parió!");
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", showAlert);

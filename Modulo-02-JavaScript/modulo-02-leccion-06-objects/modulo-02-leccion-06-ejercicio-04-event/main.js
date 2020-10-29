"use strict";

const buttonElement = document.querySelector(".btn");

function handleButtonClick(event) {
  console.log(event);
}

buttonElement.addEventListener("click", handleButtonClick);

//La clave type es una propiedad.

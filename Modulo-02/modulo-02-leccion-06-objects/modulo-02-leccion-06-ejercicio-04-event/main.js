"use strict";

const buttonElement = document.querySelector(".btn");

function handleButtonClick(event) {
  console.log(event.type);
}

buttonElement.addEventListener("click", handleButtonClick);

//La clave type es una propiedad.

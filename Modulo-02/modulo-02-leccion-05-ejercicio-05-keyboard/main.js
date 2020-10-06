"use strict";

const documentElement = document.querySelector(".page");

function pressKeyboard(event) {
  if (event.key === "r") documentElement.classList.add("color01");
  else if (event.key === "p") {
    documentElement.classList.add("color02");
  }
}

documentElement.addEventListener("keydown", pressKeyboard);

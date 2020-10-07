"use strict";

const documentElement = document.querySelector(".page");

function pressKeyboard(event) {
  if (event.key === "r") {
    documentElement.classList.remove("color02");
    documentElement.classList.add("color01");
  } else if (event.key === "p") {
    documentElement.classList.remove("color01");
    documentElement.classList.add("color02");
  }
}

documentElement.addEventListener("keydown", pressKeyboard);

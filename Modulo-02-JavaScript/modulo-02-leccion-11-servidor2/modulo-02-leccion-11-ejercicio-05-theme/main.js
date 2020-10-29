"use strict";

const main = document.querySelector(".js-main");
const inputLight = document.querySelector(".js-light");
const inputDark = document.querySelector(".js-dark");

function select(event) {
  if (event.currentTarget.value === "lightTheme") {
    paintLight();
  } else if (event.currentTarget.value === "darkTheme") {
    paintDark();
  }
}
localStorage.setItem("value", inputLight.value);

if (localStorage.getItem("value") === "lightTheme") {
  paintLight();
}

if (localStorage.getItem("value") === "darkTheme") {
  paintDark();
}

function paintLight() {
  main.classList.add("light");
  main.classList.remove("dark");
}

function paintDark() {
  main.classList.remove("light");
  main.classList.add("dark");
}

inputLight.addEventListener("click", select);
inputDark.addEventListener("click", select);

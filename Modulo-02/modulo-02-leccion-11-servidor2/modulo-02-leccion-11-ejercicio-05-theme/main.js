"use strict";

const main = document.querySelector(".js-main");
const inputLight = document.querySelector(".js-light");
const inputDark = document.querySelector(".js-dark");

function select (event) {
  if (event.currentTarget.value === "lightTheme") {
    main.classList.add("light");
    main.classList.remove("dark");
  } else if (event.currentTarget.value === "darkTheme") {
    main.classList.remove("light");
    main.classList.add("dark");
  }
}

inputLight.addEventListener("click", select);
inputDark.addEventListener("click", select);
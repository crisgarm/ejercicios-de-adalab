"use strict";

const main = document.querySelector("js-main");
const inputLight = document.querySelector(".js-light");
const inputDark = document.querySelector(".js-dark");
let checked = ""

function select () {
  if (inputLight === checked) {
    main.classList.add("light");
    main.classList.remove("dark");
  } else if (inputDark === checked) {
    main.classList.remove("light");
    main.classList.add("dark");
  }
}

select();
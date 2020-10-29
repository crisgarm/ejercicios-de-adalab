"use strict";

const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");

function getInputValue(){
  text.innerHTML = input.value;
  localStorage.setItem("name", input.value);
}

input.value = localStorage.getItem("name");
text.innerHTML= localStorage.getItem("name");

input.addEventListener("keyup", getInputValue);
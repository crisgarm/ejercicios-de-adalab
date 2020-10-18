"use strict";

const inputName = document.querySelector(".js-name");
const inputSurname = document.querySelector(".js-surname");
const text = document.querySelector(".js-text");
const text2 = document.querySelector(".js-text2");

const user = {
  name: "",
  surname: "",
};

function getInputValue(){
  text.innerHTML = inputName.value;
  text2.innerHTML = inputSurname.value;
  localStorage.setItem("name", inputName.value);
  localStorage.setItem("surname", inputSurname.value);
}

inputName.value = localStorage.getItem("name");
text.innerHTML= localStorage.getItem("name");
inputSurname.value = localStorage.getItem("surname");
text2.innerHTML= localStorage.getItem("surname");

inputName.addEventListener("keyup", getInputValue);
inputSurname.addEventListener("keyup", getInputValue);
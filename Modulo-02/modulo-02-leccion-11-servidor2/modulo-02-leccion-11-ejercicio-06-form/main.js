"use strict";

const inputName = document.querySelector(".js-name");
const inputSurname = document.querySelector(".js-surname");
const text = document.querySelector(".js-text");
const text2 = document.querySelector(".js-text2");

//Objeto que quiero guardar en el localStorage
const data = {
  name: "", //inputName.value,
  surname: "", //inputSurname.value,
};

//Convertir un objeto en cadena de caracteres
const stringUser = JSON.stringify(data);
localStorage.setItem("userData",stringUser);

//Cuando queramos hacer uso de él, convertir una cadena de caracteres en objeto
const userInfo = localStorage.getItem("userData");
const objAdalaber = JSON.parse(userInfo);
console.log(objAdalaber.name, objAdalaber.surname);

function getInputValue(){
  text.innerHTML = inputName.value;
  text2.innerHTML = inputSurname.value;
  localStorage.setItem("name", inputName.value);
  localStorage.setItem("surname", inputSurname.value);
}

//Obtener los valores de localStorage
inputName.value = localStorage.getItem("name");
text.innerHTML= localStorage.getItem("name");
inputSurname.value = localStorage.getItem("surname");
text2.innerHTML= localStorage.getItem("surname");

//Listener
inputName.addEventListener("keyup", getInputValue);
inputSurname.addEventListener("keyup", getInputValue);
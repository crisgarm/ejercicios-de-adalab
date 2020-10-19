"use strict";

const inputName = document.querySelector(".js-name");
const inputSurname = document.querySelector(".js-surname");
const text = document.querySelector(".js-text");
const text2 = document.querySelector(".js-text2");

//Función cuando sucede el evento
function getInputValue() {
  //Objeto que quiero guardar en el localStorage
  const data = {
    name: inputName.value,
    surname: inputSurname.value,
  };
  // convierto el objeto en string
  const stringData = JSON.stringify(data);
  // guardo el string en el local storage
  localStorage.setItem("userData", stringData);
}

inputName.addEventListener("keyup", getInputValue);
inputSurname.addEventListener("keyup", getInputValue);

//Función al arrancar la página
function getFromLocalStorage() {
  // leo los datos del local storage en formato string
  const stringUser = localStorage.getItem("userData");
  // parseo de string a objeto
  const user = JSON.parse(stringUser);
  // compruebo si el objeto tiene información útil
  if (user !== null) {
    // si entra por aquí es que NO es la primera vez que entra en la página
    inputName.value = user.name;
    inputSurname.value = user.surname;
  }
}

getFromLocalStorage();

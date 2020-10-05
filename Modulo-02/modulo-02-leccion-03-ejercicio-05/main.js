"use strict";

const containerElement = document.querySelector(".container");
const titleElement = document.querySelector(".container__title");
const contentElement = document.querySelector(".container__content");

if (containerElement.classList.contains("warning")) {
  titleElement.innerHTML = "Aviso";
  contentElement.innerHTML = "Tenga cuidado";
} else if (containerElement.classList.contains("error")) {
  titleElement.innerHTML = "Error";
  contentElement.innerHTML = "Ha surgido un error";
} else if (containerElement.classList.contains("success")) {
  titleElement.innerHTML = "Correcto";
  contentElement.innerHTML = "Los datos son correctos";
}

"use strict";

document.querySelector("h1").innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

let officeAddress;
officeAddress = "Calle Mayor, 3";
officeAddress = "Calle Embajadores, 4";

const contentElement = document.querySelector(".content");
contentElement.innerHTML = contentElement.innerHTML + " mundo";

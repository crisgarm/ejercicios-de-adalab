"use strict";

//Creamos un objeto con unas propiedades y varios métodos
const pearsBasket = {};
pearsBasket.max = 10;
pearsBasket.min = 0;
pearsBasket.current = 5;
pearsBasket.initial = 2;

//Añadimos al cesto una pera
pearsBasket.add = function () {
  if (pearsBasket.current < pearsBasket.max) {
  }
  return `Si añado una pera al cesto, tendría actualmente ${
    pearsBasket.current + 1
  }. `;
};
console.log(pearsBasket.add());

//Sacamos del cesto una pera
pearsBasket.remove = function () {
  if (pearsBasket.current > pearsBasket.min) {
  }
  return `Si quito una pera del cesto, tendría actualmente ${
    pearsBasket.current - 1
  }. `;
};
console.log(pearsBasket.remove());

//Restablecemos el número de peras al valor inicial
pearsBasket.rest = function () {
  return `Si restablezco el número de peras al valor inicial, tendría actualmente ${pearsBasket.initial}. `;
};
console.log(pearsBasket.rest());

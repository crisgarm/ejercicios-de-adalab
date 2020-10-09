"use strict";

//Recorremos el array mediante un bucle para hacer la media
const numbers = [10, 33, 4, 15, 1];
let acc = 0;

for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i]; // acc += numbers[i] es igual a acc = acc + numbers[i]
  console.log(acc);
}
acc = acc / 5;
console.log("La puntuación final es " + acc);

//Añadimos un nuevo número al array y repetimos el cálculo de la media
//Generalizamos el código anterior creando una función average

"use strict";

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.run = (phrase) => `${phrase}`;
adalaber1.runAMarathon = (distance) =>
  `Estoy corriendo un maratón de ${distance} kilómetros.`;

console.log(adalaber1.run("Estoy corriendo."));
console.log(adalaber1.runAMarathon(50));

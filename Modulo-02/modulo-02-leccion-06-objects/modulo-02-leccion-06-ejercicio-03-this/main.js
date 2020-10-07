"use strict";

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.job = "periodista";
adalaber1.showBio = function () {
  return (
    "Mi nombre es " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.job +
    "."
  );
};

console.log(adalaber1.showBio());

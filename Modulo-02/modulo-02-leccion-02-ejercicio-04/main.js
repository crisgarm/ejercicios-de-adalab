"use strict";
//Ejercicio 04

const bill = 128;
const Ana = 2;
const numberPeople = 9;
const debtAna = bill - Ana;
console.log(debtAna);

const finalPrice = debtAna / numberPeople;
console.log(finalPrice);

const paymentAna = finalPrice + Ana;
console.log(paymentAna);

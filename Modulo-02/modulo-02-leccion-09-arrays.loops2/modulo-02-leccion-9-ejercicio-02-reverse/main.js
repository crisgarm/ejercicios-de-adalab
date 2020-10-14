"use strict";

const arr = []

//Método push

function get100Numbers() {
  for (let i=1; i <=100; i++) {
  arr.push(i);
  }
  return arr;
}
console.log(get100Numbers()); 

//Método reverse
function getReversed100Numbers(){
  const reversedNumbers = get100Numbers();
  arr.reverse();
  return reversedNumbers;
}

console.log(getReversed100Numbers());
"use strict";

const arr = []

function get100Numbers() {
  for (let i=1; i <=100; i++) {
  arr.push(i);
  }
  console.log(arr);
  return arr;
}
console.log(get100Numbers()); 

"use strict";

const list = document.querySelector(".js-list");
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const newElement = document.createElement("li");
  console.log(newElement);
  const listContent = document.createTextNode(numbers[i]);
  newElement.appendChild(listContent);
  list.appendChild(newElement);
}

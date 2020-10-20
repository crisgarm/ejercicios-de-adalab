"use strict";

const data = [
  {
    name: "Cristina",
    surname: "García",
    telephone: "555 55 55 55",
  },
  {
    name: "Eva",
    surname: "Ferreras",
    telephone: "888 88 88 88",
  },
  {
    name: "Josefa",
    surname: "Ramos",
    telephone: "999 99 99 99",
  },
];

const select = document.querySelector(".js-select");
const input = document.querySelectorAll(".js-input");

function chooseSelect(event) {
  for (let i = 0; i < data.length; i++) {
    if (event.currentTarget.value === data[i].name) {
      input[0].value = data[i].name;
      input[1].value = data[i].surname;
      input[2].value = data[i].telephone;
    }
  }
}

select.addEventListener("click", chooseSelect);

const ul = document.querySelector(".js-list");
let i = 1;

for (const group of data) {
  const li = document.createElement("li");
  ul.appendChild(li); // al padre ul le asignamos un hijo li.

  const text = document.createTextNode(group.name);
  li.appendChild(text);
  li.classList.add("liContent");
  li.setAttribute("id", i);
  i++;
  if (li.getAttribute("id") === "1") {
    li.classList.add("uno");
  } else if (li.getAttribute("id") === "2") {
    li.classList.add("dos");
  } else if (li.getAttribute("id") === "3") {
    li.classList.add("tres");
  }
}

//set.Attribute asigna un valor a un atributo
//get.Attribute recoge ese valor

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

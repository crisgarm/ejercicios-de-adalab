"use strict";

const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");
const text2 = document.querySelector(".js-text2");

function getSwapi() {
  // fetch("https://swapi.dev/api/people/1/")
  // .then(response => response.json())
  //   .then(data => {
  //     text.innerHTML = data.name
  //     text2.innerHTML = data.gender
  //   });
  
  fetch("https://swapi.dev/api/people/?search=" + input.value)
    .then(response => response.json())
    .then(data => {
      text.innerHTML = `${data.name}`
      text2.innerHTML = data.gender
      console.log(data.result);
    });
}
button.addEventListener("click", getSwapi);
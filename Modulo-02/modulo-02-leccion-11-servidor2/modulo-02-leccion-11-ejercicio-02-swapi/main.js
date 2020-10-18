"use strict";

const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");
const text2 = document.querySelector(".js-text2");

  function getSwapi() {
  const list = document.querySelector(".js-list")
  fetch("https://swapi.dev/api/people/?search=" + input.value)
    .then(response => response.json())
    .then(data => {
      text.innerHTML = `${data.results[0].name}`
      text2.innerHTML = `${data.results[0].gender}`
      let contentList = "";
      for (let i = 0; i < data.results.length; i++) {
        let liContent = `<li>${data.results[i].name},${data.results[i].gender}</li>`;
        contentList += liContent;
      }
      list.innerHTML = contentList;
    });

}
button.addEventListener("click", getSwapi);

// Este fetch me serviría para sacar los datos del primer personaje:
// fetch("https://swapi.dev/api/people/1/")
//  then(response => response.json())
//  .then(data => {
//  text.innerHTML = data.name
//  text2.innerHTML = data.gender
// });
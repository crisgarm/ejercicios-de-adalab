"use strict";


const createElement = document.querySelector("main");
const content = "<p>Lorem ipsum</p>";
const paragraph = document.querySelector(".text");


function addParagraph(){
  createElement.innerHTML = createElement.innerHTML + content;
  console.log(createElement);
}

paragraph.addEventListener("click", addParagraph);

// elemento de HTML
// const paragraph = document.querySelector(".text");
// const text = "<p>Lorem ipsum</p>";

// handler

// function addParagraph() {
// let secondParagraph = document.createElement("p");
// secondParagraph.innerHTML = text;
// document.body.insertBefore(secondParagraph, paragraph.nextSibling);
// }

//listener sobre el elemento, con tipo de evento y handler

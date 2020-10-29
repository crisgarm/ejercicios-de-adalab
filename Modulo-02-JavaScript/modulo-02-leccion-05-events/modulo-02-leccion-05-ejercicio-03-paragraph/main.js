"use strict";

//**Esta forma solamente genera un párrafo**
const createElement = document.querySelector("main");
const content = "<p>Lorem ipsum</p>";
const paragraph = document.querySelector(".text");


function addParagraph(){
  createElement.innerHTML = createElement.innerHTML + content;
  console.log(createElement);
}

paragraph.addEventListener("mouseover", addParagraph);

// **Esta forma genera un párrafo nuevo cada vez que sucede el evento**
// const paragraph = document.querySelector(".text");
// const text = "<p>Lorem ipsum</p>";

// function addParagraph() {
// let secondParagraph = document.createElement("p");
// secondParagraph.innerHTML = text;
// document.body.insertBefore(secondParagraph, paragraph.nextSibling);
// }

//paragraph.addEventListener("mouseover", addParagraph);
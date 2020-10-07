"use strict";

//elemento de HTML
const paragraph = document.querySelector(".text");
const text = "<p>Lorem ipsum</p>";

//handler
function addParagraph() {
  let secondParagraph = document.createElement("p");
  secondParagraph.innerHTML = text;
  document.body.insertBefore(secondParagraph, paragraph.nextSibling);
}

//listener sobre el elemento, con tipo de evento y handler
paragraph.addEventListener("mouseover", addParagraph);

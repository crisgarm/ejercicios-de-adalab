"use strict";

//elemento de HTML
const div = document.querySelector(".container");

//handler
function addBackgroundColor() {
  if (window.scrollY > 250) div.classList.add("salmon");
  else if (window.scrollY > 300) {
    div.classList.remove("salmon");
    div.classList.add("blue");
  }
}

// listener sobre el elemento, con tipo de evento y handler
window.addEventListener("scroll", addBackgroundColor);

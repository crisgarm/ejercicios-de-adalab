"use strict";

const container = document.querySelector(".js-container");

function knowHeights() {
  const heightContainer = container.offsetHeight;
  console.log(container.offsetHeight);
  container.style.height = `${heightContainer} / 3`;
  console.log(container.style.height);
}

knowHeights();

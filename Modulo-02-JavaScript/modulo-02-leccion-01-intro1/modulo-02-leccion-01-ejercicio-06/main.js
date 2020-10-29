const containerElement = document.querySelector(".container");
const content =
  "<h1>Lorem ipsum</h1><img src=http://via.placeholder.com/350x150><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>";
containerElement.innerHTML = content;

const listElement = document.querySelector(".list");
const list = "<li>1</li><li>2</li><li>3</li>";
listElement.innerHTML = list;

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

button2.classList.add("hidden");

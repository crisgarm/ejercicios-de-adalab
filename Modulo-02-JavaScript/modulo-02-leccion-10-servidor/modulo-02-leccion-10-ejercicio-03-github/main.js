"use strict";


function getUser() {
  const user = document.querySelector(".js-text").value;
  const url = "https://api.github.com/users/" + user;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const user = document.querySelector("div");
      user.innerHTML = 
      `<p>${data.login}</p>
       <p>${data.public_repos}</p>
       <img src=${data.avatar_url}>
      `
    });
}
const btn = document.querySelector(".js-button");
btn.addEventListener("click", getUser);

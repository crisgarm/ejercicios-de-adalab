const express = require("express");
const cors = require("cors");
const characters = require("./data.json");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.get("/characters/:id", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.id);

  // find character by id
  const character = characters.results.find(
    (character) => character.id === parseInt(req.params.id)
  );
  console.log("Found character:", character);

  // response with selected user data or error
  if (character === undefined) {
    res.json({ error: "character-not-found" });
  } else {
    res.json(character);
  }
});

app.get("/characters/:id/episodes", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.id);
  console.log("Url param episodes", req.params.episodes);

  // find character by id
  const character = characters.results.find(
    (character) => character.id === parseInt(req.params.id)
  );
  console.log("Found character:", character);

  // response with selected user data or error
  if (character === undefined) {
    res.json({ error: "character-not-found" });
  } else {
    res.json(character.episode);
  }
});

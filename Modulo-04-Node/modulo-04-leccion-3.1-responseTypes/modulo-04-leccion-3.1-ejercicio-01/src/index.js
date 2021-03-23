const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get("/response-a", (req, res) => {
  res.json({ result: "Ok" });
});

app.get("/response-b", (req, res) => {
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
      </head>
      <body class="page">
        <header>
          <h1>Esta es una página de prueba</h1>
        </header>
      </body>
    </html>`;
  res.send(htmlCode);
});

app.get("/response-c", (req, res) => {
  const randomNumber = Math.ceil(Math.random() * 10);
  console.log(randomNumber);
  if (randomNumber % 2 === 0) {
    res.redirect("https://www.youtube.com/");
  } else {
    res.redirect("https://www.instagram.com/?hl=es");
  }
});

app.get("/response-d", (req, res) => {
  const user = parseInt(req.query.user);
  console.log(user);
  if (user === 1 || user === 2) {
    res.json({ result: "ok" });
  } else {
    res.status(404).json({
      result: "error: invalid query param",
    });
  }
});

app.get("/response-with-file-pdf", (req, res) => {
  res.sendFile(__dirname + "/files/example.pdf");
});

app.get("/download-a-file", (req, res) => {
  res.download(__dirname + "/files/example.pdf", "ejemplo.pdf");
});

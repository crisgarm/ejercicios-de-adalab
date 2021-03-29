const express = require("express");
const cors = require("cors");
const films = require("./films-data.json");

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set("view engine", "ejs");

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get("/es/film:filmId.html", (req, res) => {
  // get film data
  const filmData = films.find((film) => film.id === req.params.filmId);
  console.log("film data", filmData);
  const filmYear = req.query.awardsYear;
  // const awardsInfo = filmData.awards.filter((award) => award.year === filmYear);
  // console.log("film year", req.query.awardsYear);

  // response with rendered template
  if (filmData) {
    // ensure data
    filmData.title = filmData.title || "";
    filmData.year = filmData.year || "";
    filmData.director = filmData.director || "";
    filmData.country = filmData.country || "";
    filmData.filteredAwards = [];

    if (filmYear) {
      filmData.filteredAwards = filmData.awards.filter(
        (award) => award.year === filmYear
      );
    } else {
      filmData.filteredAwards = filmData.awards || [];
    }
    res.render("pages/film", filmData);
  } else {
    res.render("pages/film-not-found");
  }
});
